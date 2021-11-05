import React from 'react';
import block from "bem-cn-lite";
import './SelectComponent.scss';
import { styled } from '@material-ui/core';
import { IComponentProps } from 'context/types';

block.setup({
    el: '__',
    mod: '--',
    modValue: '--'
  });

const b = block("select-component");

const CustomSelectComponent = ({className, value, label, placeholder, require, onChange, options}: IComponentProps) => {
    return (
        <div className={className + ' ' + b()}>
            <p className={b('label')}>
                {label}
                {require && <span className={b('star', { require })}>*</span>}
            </p>            
            <select 
                className={b('select')} 
                value={value} 
                placeholder={placeholder}
                onChange={(event) => onChange(event.currentTarget.value)}
            >    
                {options?.map((el) => <option key={`SelectComponent__Option ${el}`} value={el}>{el}</option>)}
            </select>
        </div>
    )
}

const SelectComponent = styled(CustomSelectComponent)(({style}: any) => style );

export default SelectComponent;