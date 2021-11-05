import H1Component from 'components/H1Component/H1Component';
import InputNumber from 'components/InputNumber/InputNumber';
import { StateContext } from 'context/State/State';
import { IControl } from 'context/types';
import React from 'react';
import { useContext } from 'react';
import { containProperties } from 'utils/utils';
import InputComponent from '../InputComponent/InputComponent';

const GeneratorForm = () => {
    const { config, controls, changeValue } = useContext(StateContext);

    const createComponent = (control: IControl) => {
        const handleChange = (newValue: string, control: IControl) => {
            changeValue({ newValue, control });
        }

        let component;

        // таким способом проверяю правильные названия css-свойств
        // которые возможно были введенны в ручную в редакторе конфигов
        if (config && !containProperties(config.css, Object.keys(control.style))) {
            // это заготовка проверки ICustomComponent
            // к сожелению силы духа переписать уже имеющийся компонент
            // не хватило
            // console.error(`Одно из css-свойств нераспознанно`);
        }
        switch (control.modelName) {
            case 'InputComponent': component = <InputComponent
                key={control.id}
                value={control.value}
                label={control.label}
                placeholder={control.placeholder}
                style={control.style}
                require={control.require}
                onChange={(newValue: string) => handleChange(newValue, control)}
            />;
                break;
            case 'InputNumber': component = <InputNumber
                key={control.id}
                value={control.value}
                label={control.label}
                placeholder={control.placeholder}
                style={control.style}
                require={control.require}
                tooltip={control.tooltip}
                onChange={(newValue: string) => handleChange(newValue, control)}
            />;
                break;
            case 'H1Component': component = <H1Component
                key={control.id}
                value={control.value}
                label={control.label}
                placeholder={control.placeholder}
                style={control.style}
                require={control.require}
                tooltip={control.tooltip}
                onChange={(newValue: string) => handleChange(newValue, control)}
            />;
                break;
            case 'SelectComponent': component = <SelectComponent
                key={control.id}
                value={control.value}
                label={control.label}
                placeholder={control.placeholder}
                style={control.style}
                require={control.require}
                tooltip={control.tooltip}
                onChange={(newValue: string) => handleChange(newValue, control)}
            />;
                break;
        }
        return component;
    }

    if (!controls || !controls.length) return null;
    return (
        <div>
            {controls.map((control) => (
                createComponent(control)
            ))}
        </div>
    )
}

export default GeneratorForm;