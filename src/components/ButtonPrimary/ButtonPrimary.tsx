import React from "react";
import block from "bem-cn-lite";
import { Button } from "@material-ui/core";
import './ButtonPrimary.scss';
import {IButtonPrimary} from "../../context/types";

const b = block("button-primary");

const ButtonPrimary = (props: IButtonPrimary) => {
    const {onClick} = props;
    return (
        <Button className={b()} onClick={onClick}>
            <svg className={b("svg")} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M4.19 4.37625L11.19 1.26625C11.7 1.03625 12.3 1.03625 12.81 1.26625L19.81 4.37625C20.53 4.69625 21 5.41625 21 6.20625V10.9062C21 16.4563 17.16 21.6462 12 22.9062C6.84 21.6462 3 16.4563 3 10.9062V6.20625C3 5.41625 3.47 4.69625 4.19 4.37625ZM19 11.8962H12V3.09625L5 6.20625V11.9062H12V20.8363C15.72 19.6863 18.47 16.0163 19 11.8962Z" fill="#EEBB50"/>
            </svg>
            Сгенерировать форму
        </Button>
    )
}

export default ButtonPrimary;
