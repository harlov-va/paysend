import React, {useReducer, createContext} from 'react';
import {StateReducer} from "./StateReduce";
import {Types, IState, IStateContext, IPayload, } from "../types";
import {clone, fetchP} from "../../utils/utils";

const initialState: IState = {
    controls: {
        input: {
            value: 0,
        },
        slider: {
            value: 20,
        },
    },
    profits: [],
    maxProfits: 5,
    showForm: false,
}

export const cloneState: IState = clone(initialState);

export const StateContext = createContext<IStateContext>({
    ...initialState,
    generateForm: () => void 0,
    getConfig: () => void 0,
});

interface StateProps {
    children?: JSX.Element
}

export const State = (props: StateProps) => {
    const [state, dispatch] = useReducer(StateReducer, initialState);
    // получаем конфигурацию для всего приложения
    const getConfig = async () => {
        // setLoading();
        let ok = false;
        let response = null;
        let config = null;
        try {
            response = await fetchP({url: `/storage-api/get-config`, method: `GET`});
            ok = response.status === 200;
            if (ok) config = await response.json();
        } catch (e) {
            console.error(e);
        } finally {
            // finishLoading();
        }
        dispatch({
            type: Types.SET_CONFIG,
            payload: {
                config,
            },
        });
    }

    // const changeValue = (payload: IPayload) => dispatch({type: Types.CHANGE_VALUE, payload});

    const generateForm = () => dispatch({type: Types.GENERATE_FORM});

    return (
        <StateContext.Provider value={{
                ...state, getConfig, generateForm,
        }}>
            {props.children}
        </StateContext.Provider>
    )
}
