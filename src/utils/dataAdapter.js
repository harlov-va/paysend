import moment from 'moment';

const dataAdapter = (data) => {
    if (Array.isArray(data)) {
        for (let item of data) {
            if (Array.isArray(item)) dataAdapter(item)
            else if (typeof item === `object`) dataAdapter(item);
        }
    }
    else if (typeof data === `object`) {
        Object.keys(data).forEach((key) => {
            if (Array.isArray(data[key])) dataAdapter(data[key])
            else if (typeof data[key] === `object`) dataAdapter(data[key]);
            if (key === `eventTime`) data[key] = moment(data[key]);
        })
    }
    return data;
}

export const addChecked = (data) => {
    return data.map((d) => ({...d, checked: false, disabled: false}));
}

export default dataAdapter;
