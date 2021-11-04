import {Types, IState, ActionType, HandlersType, IPayload} from "../types";
import {cloneState} from "./State";
import {clone, isNullUndefined, removeItem} from "../../utils/utils";

const handlers: HandlersType = {
    [Types.CHANGE_VALUE]: (state: IState, action: ActionType) => {
        const { payload } = action;
        if (!payload) return state;
        const { controlName, value } = payload;
        if (controlName === undefined || value === undefined) return state;
        const controls = {...state.controls};        
        controls[controlName].value = value;
        return {...state, controls}
    },
    [Types.ADD_PROFIT]: (state: IState) => {
        const { controls, profits, maxProfits } = state;
        const newProfits = [...profits];
        if (profits.length >= maxProfits) return state;
        newProfits.push({
            price: controls.input.value,
            procent: controls.slider.value,
        })
        return {...state, profits: newProfits}
    },
    [Types.REMOVE_PROFIT]: (state: IState, {payload}) => {
        if (!payload) return state;
        const {profit} = payload;
        const { profits } = state;
        const newProfits = [...profits];
        removeItem(newProfits, profit);
        return {...state, profits: newProfits}
    },
    [Types.CLEAN_FORM]: (state: IState, ) => {
         return {...clone(cloneState)};
    },
    [Types.SUBMIT_FORM]: (state: IState, ) => {
        return {...state, showForm: false}
    },
    [Types.TOGGLE_FORM]: (state: IState, ) => {
        const {showForm} = state;
        return {...state, showForm: !showForm};
    },
    DEFAULT: (state: IState) => state,
}

export const StateReducer = (state: IState, action:ActionType):IState => {
    const handler = handlers[action.type] || handlers.DEFAULT;
    return handler(state, action);
}
