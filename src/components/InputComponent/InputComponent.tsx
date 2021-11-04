import React from 'react';
import block from "bem-cn-lite";
import './InputComponent.scss';
import { styled } from '@material-ui/core';
import { IComponentProps } from 'context/types';

block.setup({
    el: '__',
    mod: '--',
    modValue: '--'
  });

const b = block("input-component");

const CustomInput = ({className, label, placeholder, require}: IComponentProps) => {
    return (
        <p className={className + ' ' + b()}>
            <span>
                {label}
                {require && <span className={b('star', { require })}>*</span>}
            </span>            
            <input placeholder={placeholder} className={b('input')}></input>
        </p>
    )
}

const InputComponent = styled(CustomInput)(({style}: any) => style );

export default InputComponent;