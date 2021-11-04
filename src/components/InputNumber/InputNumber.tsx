import React from 'react';
import block from "bem-cn-lite";
import './InputNumber.scss';
import { styled } from '@material-ui/core';
import { IComponentProps } from 'context/types';
import {useState} from 'react';

block.setup({
    el: '__',
    mod: '--',
    modValue: '--'
  });

const b = block('input-number');

const CustomInputNumber = ({className, label, placeholder, require}: IComponentProps) => {
    const [value, setValue] = useState(1);
    const [disabled, setDisabled] = useState(true);

    const handleClickPlus = () => {
        const newValue = value + 1;
        if (newValue > 1) setDisabled(false);
        setValue(newValue);
    }

    const handleClickMinus = () => {
        if (value === 1) return;
        if (value === 2) {
            setDisabled(true);            
        };
        setValue(value - 1);
    }

    return (
        <div className={className + ' ' + b()}>
            <span>
                {label}
                {require && <span className={b('star', { require })}>*</span>}
            </span>            
            <div className={b('input-wrapper')}>
                <input className={b('input')} min="0" name="quantity" value={value} type="number"/>
                <div className={b('buttons-wrapper')}>
                    <button className={b('plus')} onClick={handleClickPlus}>▲</button>                
                    <button className={b('minus',{disabled})} onClick={handleClickMinus}>▼</button>
                </div>
            </div>
        </div>
    )
}

const InputNumber = styled(CustomInputNumber)(({style}: any) => style );

export default InputNumber;