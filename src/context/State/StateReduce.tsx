import {Types, IState, ActionType, HandlersType, IPayload} from "../types";

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
    [Types.CHANGE_VALUE]: (state: IState, {payload}) => {
        if (!payload) return state;
        const {newValue, control} = payload;
        const {controls} = state;
        if (!controls) return state;
        const newControls = [...controls];
        for (let i = 0; i < newControls.length; i++ ) {
            if (newControls[i] === control && newValue) newControls[i].value = newValue;
        }
 
        return {...state, controls: newControls}
    },
    DEFAULT: (state: IState) => state,
}

export const StateReducer = (state: IState, action:ActionType):IState => {
    const handler = handlers[action.type] || handlers.DEFAULT;
    return handler(state, action);
}
