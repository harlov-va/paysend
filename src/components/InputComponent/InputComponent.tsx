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

const CustomInput = ({className, value, label, placeholder, require, onChange}: IComponentProps) => {
    return (
        <p className={className + ' ' + b()}>
            <span>
                {label}
                {require && <span className={b('star', { require })}>*</span>}
            </span>            
            <input 
                className={b('input')} 
                value={value} 
                placeholder={placeholder}
                onChange={(event) => onChange(event.currentTarget.value)}
            >                
            </input>
        </p>
    )
}

const InputComponent = styled(CustomInput)(({style}: any) => style );

export default InputComponent;