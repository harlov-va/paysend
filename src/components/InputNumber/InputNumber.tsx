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

const CustomInputNumber = ({className, value, label, placeholder, require, onChange}: IComponentProps) => {
    const [disabled, setDisabled] = useState(true);

    const handleClickPlus = () => {
        const v = parseInt(value) + 1;
        if (v > 1) setDisabled(false);
        onChange(v.toString());
    }

    const handleClickMinus = () => {
        if (parseInt(value) === 1) return;
        if (parseInt(value) === 2) {
            setDisabled(true);            
        };
        onChange((parseInt(value) - 1).toString());
    }

    const handleChangeInput = (event: any) => {
        const newValue = event.currentTarget.value;
        onChange(newValue);
    }

    return (
        <div className={className + ' ' + b()}>
            <span>
                {label}
                {require && <span className={b('star', { require })}>*</span>}
            </span>            
            <div className={b('input-wrapper')}>
                <input className={b('input')} min="0" name="quantity" value={value} type="number" onChange={handleChangeInput}/>
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