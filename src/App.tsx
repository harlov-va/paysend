import React, {useContext, useState, useEffect} from "react";
import block from "bem-cn-lite";
import "./App.scss";
import ButtonPrimary from './components/ButtonPrimary/ButtonPrimary';
import {StateContext} from "./context/State/State";
// import FormOrder from "./components/FormOrder/FormOrder";


const b = block("app");

export default function App(): JSX.Element {
    const {showForm, getConfig, generateForm} = useContext(StateContext);

    useEffect(() => {
        getConfig();
    }, []);

    return (
        <div className={b()}>
            <div className={b('button-wrapper')}>
                <ButtonPrimary onClick={() => generateForm()}></ButtonPrimary>
            </div>
            {/* {showForm
                ? <FormOrder></FormOrder>
                : 
            } */}
        </div>
    );
}
