import React from 'react';
import block from "bem-cn-lite";
import './InputComponent.scss';
import { styled, } from '@material-ui/core';

block.setup({
    el: '__',
    mod: '--',
    modValue: '--'
  });

const b = block("input-component");

interface IInputComponentProps {
    className: string;
    label: string;
    placeholder: string;
    require: boolean;
    style: {[key: string]: string | number | undefined};
}

const CustomInput = ({className, label, placeholder, require, style}: IInputComponentProps) => {
    return (
        <p className={className + ' ' + b()}>
            <span>{label}
            {require && <span className={b('star', { require: true })}>*</span>}
            </span>            
            <input placeholder={placeholder} className={b('input')}></input>
        </p>
    )
}

const InputComponent = styled(CustomInput)((props: any) => {
    const {style} = props;
    return style;
});

export default InputComponent;