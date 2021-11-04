import React from 'react';
import './ButtonStyled.scss';
import { styled, Button } from '@material-ui/core';

// import cn from 'classnames';

interface ButtonStyledProps {
    title: string;
    type: string;
    style?: {[key: string]: any};
    onClick: () => void;
}

const CustomButton = styled(Button)({
    width: '167.5px',
    height: '48px',
    fontFamily: 'SFProRounded',
    fontWeight: 500,
    fontSize: '18px',
    lineHeight: '24px',
    color: '#FFFFFF',
    textTransform: 'none',
});

const ButtonStyled = (props: ButtonStyledProps) => {
    let { title, type, style, onClick } = props;

    switch(type) {
        case 'confirm': style = {
            ...style,
            background: 'linear-gradient(180deg, #5683FF 78.12%, #7398FF 100%), #5683FF',
            borderRadius: '32px'
        };
        break;
        case 'cancel': style = {
            ...style,
            background: 'linear-gradient(201.05deg, #42475C -0.56%, #262A3C 22.28%, #24293B 105.85%)',
            borderRadius: '44px'
        };
        break;
    }

    return (
        <CustomButton variant="contained" disableRipple style={style} onClick={onClick}>
            {title}
        </CustomButton>
    )
}

export default ButtonStyled;
