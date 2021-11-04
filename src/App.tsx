import React, {useContext, useState, useEffect} from "react";
import block from "bem-cn-lite";
import "./App.scss";
import ButtonPrimary from './components/ButtonPrimary/ButtonPrimary';
import {StateContext} from "./context/State/State";
import GeneratorForm from "components/GeneratorForm/GeneratorForm";


const b = block("app");

export default function App(): JSX.Element {
    const { getConfig, generateForm} = useContext(StateContext);

    useEffect(() => {
        getConfig();
    }, []);

    return (
        <div className={b()}>
            <div className={b('button-wrapper')}>
                <ButtonPrimary onClick={() => generateForm()}></ButtonPrimary>
            </div>
            <GeneratorForm/>
        </div>
    );
}
