import React, {RefObject, useRef} from 'react';
import { useContext, useState } from 'react';
import { StateContext } from "../../context/State/State";
import './FormOrder.scss';
import block from "bem-cn-lite";
import ButtonClose from '../ButtonClose/ButtonClose';
import Order from 'components/Order/Order';
import Row from "../Row/Row";
import { TextField, Slider, Typography } from '@material-ui/core';
import InputPrice from 'components/InputPrice/InputPrice';
import SliderComponent from 'components/SliderComponent/SliderComponent';
import ButtonStyled from "../ButtonStyled/ButtonStyled";
import {IProfit} from "../../context/types";
import {useOnClickOutside} from "../../utils/utils";

// import cn from 'classnames';

interface FormOrderProps {

}

const b = block("form-order");

const FormOrder = (props: FormOrderProps) => {
    const { controls, profits, maxProfits, changeValue, addProfit, removeProfit,
        submitForm, cancelForm} = useContext(StateContext);
    const ref = useRef(null)

    useOnClickOutside(ref, cancelForm);

    return (
        <form className={b()} ref={ref}>
            <div className={b("header")}>
                <p className={b("main-title")}>
                    <span className={b("title")}>Take Profit {profits.length}</span>
                    <span className={b("total-number-profits")}>{'/' + maxProfits}</span>
                </p>
                <ButtonClose className={b("button-close")} onClick={cancelForm}></ButtonClose>
            </div>
            <div className={b("body")}>
                {profits.length > 0 &&
                <div className={b("profits")}
                    style={{marginBottom: profits.length >= 5 ? '32px' : undefined}}
                >
                    {profits.map((profit: IProfit, index) => (
                        <Order key={index} price={profit.price} procent={profit.procent} removeOrder={() => removeProfit({profit})}/>
                    ))}
                    <Row title={"Sum. projected profit"} num={15123.44} currency={"USDT"}
                         style={{marginTop: '16px', marginBottom: '16px'}}></Row>
                </div>}

                {profits.length < maxProfits &&
                <div className={b("input-values")}>
                    <InputPrice
                        value={controls.input.value}
                        changeInput={(value) => {
                            if (changeValue) changeValue({controlName: `input`, value})
                        }}
                        submitInput={addProfit}
                    />
                    {profits.length > 0 &&
                    <SliderComponent
                        value={controls.slider.value}
                        changeSlider={(value) => {
                            if (changeValue) changeValue({controlName: `slider`, value})
                        }}
                    />}
                    <Row title={"Price change"} currency={"+20%"} style={{marginBottom: '8px'}}></Row>
                    <Row title={"Projected profit"} num={15122.44} currency={"USDT"}
                         style={{marginBottom: '32px'}}></Row>
                </div>}
                <div className={b("buttons")}>
                    <ButtonStyled title="Cancel" type="cancel" style={{width: profits.length ? undefined : '343px'}} onClick={cancelForm}/>
                    {profits.length > 0 && <ButtonStyled title="Confirm" type="confirm" onClick={submitForm}/>}
                </div>
            </div>
        </form>
    )
}

export default FormOrder;
