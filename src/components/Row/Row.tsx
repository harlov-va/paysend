import React from 'react';
import './Row.scss';
import block from 'bem-cn-lite';

// import cn from 'classnames';

interface RowProps {
    title: string;
    num?: number;
    currency: string;
    style?: {[key: string]: any};
}

const b = block("row");

const Row = (props: RowProps) => {
    const { title, num, currency, style } = props;

    return (
        <p className={b()} style={style}>
            <span className={b("title")}>{title}</span>
            <span className={b("separator")}></span>
            {num && <span className={b("num")}>{num}</span>}
            <span className={b("currency")}>{currency}</span>
        </p>
    )
}

export default Row;
