import * as React from 'react';
import { useState } from 'react';
import './InputPrice.scss';
import { Paper, IconButton, TextField, styled } from '@material-ui/core';
import block from "bem-cn-lite";
import { IPayload } from 'context/types';

const b = block("input-price");

const CustomTextField = styled(TextField)({
    '& .MuiFormLabel-root': {
        top: '7px',
        fontSize: '10px',
        lineHeight: '12px',
        letterSpacing: '0.4px',
        color: '#818C99',
        transform: 'scale(1)',
    },
    '& .MuiInputBase-input': {
        fontFamily: 'SFProRounded',
        color: '#FFFFFF'
    },
});

interface IInputPriceProps {
    value: number | number [];
    changeInput: (newValue: number | number[]) => void;
    submitInput: () => void;
    style?: {[key: string]: any}
}

export default function InputPrice(props: IInputPriceProps) {
    const {value, changeInput, submitInput, style} = props;
    const [toggle, setToggle] = useState(true);

    const handleClick = () => setToggle(!toggle);
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => changeInput(+event.currentTarget.value);
    return (
        <Paper
            style={{
                ...style,
                display: 'flex',
                height: '48px',
                backgroundColor: 'transparent',
                marginBottom: '22px',
                boxShadow: 'none',
            }}
        >
            <div className={b("input")}>
                <IconButton aria-label="menu"
                    style={{paddingRight: '8px',}}
                >
                    {toggle
                        ? <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M23.9785 11.9958C23.9785 18.5905 18.6328 23.9361 12.0382 23.9361C5.44381 23.9361 0.0979004 18.5905 0.0979004 11.9958C0.0979004 5.40133 5.44381 0.055542 12.0382 0.055542C18.6328 0.055542 23.9785 5.40133 23.9785 11.9958Z" fill="#1BA27A" />
                            <path d="M17.6421 6.07654H6.33588V8.80609H10.6242V12.818H13.3538V8.80609H17.6421V6.07654Z" fill="white" />
                            <path d="M12.0149 13.2453C8.46744 13.2453 5.59138 12.6839 5.59138 11.9913C5.59138 11.2987 8.46732 10.7372 12.0149 10.7372C15.5624 10.7372 18.4383 11.2987 18.4383 11.9913C18.4383 12.6839 15.5624 13.2453 12.0149 13.2453ZM19.2274 12.2003C19.2274 11.3072 15.9983 10.5833 12.0149 10.5833C8.03162 10.5833 4.80225 11.3072 4.80225 12.2003C4.80225 12.9868 7.30625 13.6421 10.6243 13.7873V19.5466H13.3536V13.7896C16.6973 13.6489 19.2274 12.9909 19.2274 12.2003Z" fill="white" />
                        </svg>
                        : <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path opacity="0.3" fillRule="evenodd" clipRule="evenodd" d="M22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12Z" fill="#31B984" />
                            <path d="M12 10.4581L6.98649 14.8576C6.73302 15.0731 6.35451 15.0403 6.14107 14.7845C5.92762 14.5286 5.96006 14.1466 6.21353 13.9312L11.4035 9.21355C11.7529 8.91655 12.2673 8.93089 12.6 9.2469L17.8112 13.9534C18.0525 14.1826 18.064 14.5659 17.8369 14.8094C17.6098 15.053 17.2301 15.0646 16.9888 14.8354L12 10.4581Z" fill="#31B984" />
                        </svg>
                    }
                </IconButton>
                <CustomTextField
                    label={toggle ? "Price" : "Price change %"}
                    InputProps={{
                        disableUnderline: true,
                    }}
                    value={value}
                    onChange={handleInputChange}
                />
                <IconButton aria-label="search" onClick={handleClick}
                    style={{marginLeft: '11px',}}
                >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="9" y="15" width="0.75" height="7.5" rx="0.375" transform="rotate(-180 9 15)" fill="#818C99" />
                        <path d="M10.1297 13.6757C10.386 13.4414 10.8015 13.4414 11.0578 13.6757C11.3141 13.9101 11.3141 14.2899 11.0578 14.5243L9.08904 16.3243C8.83276 16.5586 8.41724 16.5586 8.16096 16.3243L6.19221 14.5243C5.93593 14.2899 5.93593 13.9101 6.19221 13.6757C6.44849 13.4414 6.86401 13.4414 7.12029 13.6757L8.625 15.0515L10.1297 13.6757Z" fill="#818C99" />
                        <rect width="0.75" height="7.5" rx="0.375" transform="matrix(-1 -1.19249e-08 -1.19249e-08 1 15.25 9)" fill="#818C99" />
                        <path d="M16.3797 10.3243C16.636 10.5586 17.0515 10.5586 17.3078 10.3243C17.5641 10.0899 17.5641 9.71005 17.3078 9.47574L15.339 7.67574C15.0828 7.44142 14.6672 7.44142 14.411 7.67574L12.4422 9.47574C12.1859 9.71005 12.1859 10.0899 12.4422 10.3243C12.6985 10.5586 13.114 10.5586 13.3703 10.3243L14.875 8.94853L16.3797 10.3243Z" fill="#818C99" />
                        <rect x="0.5" y="23.5" width="23" height="23" rx="11.5" transform="rotate(-90 0.5 23.5)" stroke="#818C99" />
                    </svg>
                </IconButton>
            </div>
            <IconButton color="primary" aria-label="directions" onClick={submitInput}
                style={{padding: '12px 0',}}
            >
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="0.5" y="0.5" width="31" height="31" rx="15.5" fill="#5683FF" />
                    <rect x="0.5" y="0.5" width="31" height="31" rx="15.5" fill="url(#paint0_linear)" />
                    <path d="M6 15.9998C6 15.3095 6.55964 14.7498 7.25 14.7498L24.75 14.7498C25.4404 14.7498 26 15.3095 26 15.9998C26 16.6902 25.4404 17.2498 24.75 17.2498L7.25 17.2498C6.55964 17.2498 6 16.6902 6 15.9998Z" fill="white" />
                    <path d="M15.9997 6C16.6901 6 17.2497 6.55964 17.2497 7.25V24.75C17.2497 25.4404 16.6901 26 15.9997 26C15.3094 26 14.7497 25.4404 14.7497 24.75V7.25C14.7497 6.55964 15.3094 6 15.9997 6Z" fill="white" />
                    <rect x="0.5" y="0.5" width="31" height="31" rx="15.5" stroke="url(#paint1_linear)" />
                    <defs>
                        <linearGradient id="paint0_linear" x1="16" y1="25" x2="16" y2="32" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#5683FF" />
                            <stop offset="1" stopColor="#7398FF" />
                        </linearGradient>
                        <linearGradient id="paint1_linear" x1="16" y1="0" x2="16" y2="32" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#7EA1FF" />
                            <stop offset="1" stopColor="#5985FF" stopOpacity="0" />
                        </linearGradient>
                    </defs>
                </svg>
            </IconButton>
        </Paper>
    );
}
