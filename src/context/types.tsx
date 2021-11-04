import React from "react";

export enum Types {
        CHANGE_VALUE = 'CHANGE_VALUE',
        ADD_PROFIT = 'ADD_PROFIT',
        REMOVE_PROFIT = 'REMOVE_PROFIT',
        CLEAN_FORM = 'CLEAN_FORM',
        SUBMIT_FORM = 'SUBMIT_FORM',
        GENERATE_FORM = 'GENERATE_FORM',
        SET_CONFIG = 'SET_CONFIG',
}

interface IControl {
        value: number | number [];
}

interface IControls {
        [key: string]: IControl;
}

export interface IProfit {
        price: number | number[];
        procent: number | number[];
}

export interface IState {
        controls: IControls;
        profits: IProfit [];
        maxProfits: number;
        showForm: boolean;
}

export interface IStateContext extends IState {
        generateForm: () => void;
        getConfig: () => void;
}

export interface IPayload {
        controlName?: string;
        value?: number | number [];
        profit?: IProfit;
        config?: IConfig;
}

interface IConfig {
        
}

export interface ActionType {
        type: Types;
        payload?: IPayload
}

export interface HandlersType {
        [name: string]: (state: IState, action: ActionType) => IState;
}

export interface IButtonPrimary {
        onClick: () => void;
}

export interface IRequestParameters {
        url: string;
        method?: string;
        data?: {[key: string]: any};
}