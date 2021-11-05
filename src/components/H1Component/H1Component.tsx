import React from 'react';
import block from "bem-cn-lite";
import { styled } from '@material-ui/core';
import { IComponentProps } from 'context/types';
import {useState} from 'react';

block.setup({
    el: '__',
    mod: '--',
    modValue: '--'
  });

const b = block('h1-component');

const CustomH1Component = ({className, value, label, placeholder, require, onChange}: IComponentProps) => {
    return (
        <h1 className={className + ' ' + b()}>{value}</h1>
    )
}

const H1Component = styled(CustomH1Component)(({style}: any) => style );

export default H1Component;