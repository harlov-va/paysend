export enum Types {
        CHANGE_VALUE = 'CHANGE_VALUE',
        ADD_PROFIT = 'ADD_PROFIT',
        REMOVE_PROFIT = 'REMOVE_PROFIT',
        CLEAN_FORM = 'CLEAN_FORM',
        SUBMIT_FORM = 'SUBMIT_FORM',
        GENERATE_FORM = 'GENERATE_FORM',
        SET_CONFIG = 'SET_CONFIG',
}

export interface IState {
        config?: IConfig;
        controls?: IControl [];

}

export interface IStateContext extends IState {
        generateForm: () => void;
        getConfig: () => void;
        changeValue: (payload: IPayload) => void;
}

export interface IPayload {
        config?: IConfig;
        controls?: IControl [];
        newValue?: string;
        control?: IControl;
}

interface IConfig {
        tags: string [];
        attributes: string [];
        css: string [];
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

export interface IResponse {
        status: number;
        json: () => IConfig | IControl [];
}

export interface IControl {
        id: number;
        name: string;
        value: string;
        label: string;
        placeholder?: string;
        modelName: string;
        style: { [key: string]: string | number | undefined };
        require: boolean;
        tooltip?: string;
        options?: string [];
}

export interface IComponentProps extends IControl {
        className: string;
        onChange: (newValue: string) => void;
}