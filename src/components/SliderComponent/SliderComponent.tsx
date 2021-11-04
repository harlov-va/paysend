import React from 'react';
import './SliderComponent.scss';
import block from "bem-cn-lite";
import { Slider, Typography, styled, Grid } from '@material-ui/core';

const CustomSlider = styled(Slider)({
    width: 309,
    height: 8,
    color: '#1F212C',
    '& .MuiSlider-thumb': {
        width: 16,
        height: 16,
        backgroundColor: '#fff',
        marginTop: -4,
        '&:after': {
            display: 'none',
        },
        '&.MuiSlider-active, &:hover': {
            boxShadow: 'none',
        },
    },
    '& .MuiSlider-rail': {
        height: 8,
        borderRadius: 32,
        backgroundColor: '#1F212C',
    },
    '& .MuiSlider-track': {
        height: 8,
        borderRadius: 32,
        backgroundColor: '#1F212C',
    }
});

const b = block("slider-component");

interface ISlideProps {
    value: number | number[];
    changeSlider: (newValue: number | number[]) => void;
}

const SliderComponent = (props: ISlideProps) => {
    const { value, changeSlider } = props;
    // const [value, setValue] = React.useState<number | string | Array<number | string>>(20);
    const handleSliderChange = (event: React.ChangeEvent<{}>, newValue: number | number[]) => {
        changeSlider(newValue);
    };


    return (
        <>
            <Typography id="input-slider"
                style={{
                    fontSize: '12px',
                    lineHeight: '16px',
                    color: '#818C99',
                }}
            >
                Sell BTC amount
            </Typography>
            <Grid container alignItems="center" className={b("slider")}
                style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                }}
            >
                <Grid item style={{ display: 'flex', }}>
                    <CustomSlider
                        value={typeof value === 'number' ? value : 0}
                        onChange={handleSliderChange}
                        aria-labelledby="input-slider"
                    />
                </Grid>
                <Grid item 
                // style={{ paddingLeft: '8px', }}
                >
                    <Typography
                        style={{
                            fontWeight: 500,
                            fontSize: '12px',
                            lineHeight: '16px',
                        }}
                    >{`${value}%`}</Typography>
                </Grid>
            </Grid>
        </>
    )
}

export default SliderComponent;
