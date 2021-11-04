import { StateContext } from 'context/State/State';
import { IControl } from 'context/types';
import React from 'react';
import { useContext } from 'react';
import { containProperties } from 'utils/utils';
import InputComponent from '../InputComponent/InputComponent';

const GeneratorForm = () => {
    const {config, controls} = useContext(StateContext);

    const createComponent = (control: IControl) => {
        let component;

        // таким способом проверяю правильные названия css-свойств
        // которые возможно были введенны в ручную в редакторе конфигов
        if (config && !containProperties(config.css, Object.keys(control.style))) {
            console.error(`Одно из css-свойств нераспознанно`);
        }
        switch (control.modelName) {
            case 'InputComponent': component = <InputComponent 
                key={control.id} 
                label={control.label} 
                placeholder={control.placeholder}
                style={control.style}
                require={control.require}
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