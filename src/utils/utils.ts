import { IRequestParameters, IResponse } from "context/types";
import { useEffect, RefObject } from "react";
import { mockConfig, mockControls } from "./mock";

export const rnd1000 = () => Math.floor(Math.random() * 1000) + 1;

export const is = (obj: any, keys: any) => {
    return obj && obj.hasOwnProperty(keys) ? obj[keys] : null;
}

export function clone(aObject: any) {
    if (!aObject) {
        return aObject;
    }

    let v;
    let bObject: {[key: string]: any} = Array.isArray(aObject) ? [] : {};
    for (const k in aObject) {
        v = aObject[k];
        bObject[k] = (typeof v === "object") ? clone(v) : v;
    }

    return bObject;
}

export function isNullUndefined (value: any) {
    return value === undefined || value === null;
}

export function removeItem (array: any [], value: any) {
    const index = array.indexOf(value);
    if (index > -1) {
        array.splice(index, 1);
    }
}

type AnyEvent = MouseEvent | TouchEvent

export function useOnClickOutside<HTMLFormElement>(
    ref: RefObject<HTMLElement>,
    handler: (event: AnyEvent) => void,
): void {
    useEffect(() => {
        const listener = (event: AnyEvent) => {
            const el = ref?.current

            // Do nothing if clicking ref's element or descendent elements
            const node:any = event.target;
            if (!el || el.contains(node)) {
                return
            }

            handler(event)
        }

        document.addEventListener(`mousedown`, listener)
        document.addEventListener(`touchstart`, listener)

        return () => {
            document.removeEventListener(`mousedown`, listener)
            document.removeEventListener(`touchstart`, listener)
        }

        // Reload only if ref or handler changes
    }, [ref, handler])
}

export function fetchP(payload: IRequestParameters): Promise<any> {
    const {url, method, data} = payload;
    // настоящий fetch
    // return fetch(url, {
    //     method: method ? method : `GET`,
    //     headers: {
    //         'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify(data),
    //     credentials: 'include'
    // })

    // не настоящий :)
    switch (url) {
        case `/storage-api/get-config`: return new Promise((resolve, reject) => {
            resolve( {
                status: 200,
                json: function () {
                    return mockConfig;
                }
            })      
        });
        default: return new Promise((resolve, reject) => {
            resolve( {
                status: 200,
                json: function () {
                    return mockControls;
                }
            })      
        });
    }
}

export function containProperties (arr: string [], target: string []) {
    return target.every(v => arr.includes(v));
}