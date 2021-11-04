import {Types, IState, ActionType, HandlersType, IPayload} from "../types";
import {cloneState} from "./State";
import {clone, isNullUndefined, removeItem} from "../../utils/utils";

const handlers: HandlersType = {
    [Types.SET_CONFIG]: (state: IState, {payload}) => {
        if (!payload) return state;
        const {config} = payload;
 
        return {...state, config}
    },
    [Types.GENERATE_FORM]: (state: IState, {payload}) => {
        if (!payload) return state;
        const {controls} = payload;
 
        return {...state, controls}
    },
    DEFAULT: (state: IState) => state,
}

export const StateReducer = (state: IState, action:ActionType):IState => {
    const handler = handlers[action.type] || handlers.DEFAULT;
    return handler(state, action);
}
