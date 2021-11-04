import React from "react";
import block from 'bem-cn-lite';
import OrderIcon from "components/OrderIcon/OrderIcon";
import './OrderLabel.scss';

const b = block("order-label");

interface IOrderProps {
    price: number | number[];
    procent: number | number[];
}

const OrderLabel = (props: IOrderProps) => {
    const {price, procent} = props;
    return (
        <div className={b()}>
            <OrderIcon className={b("icon")}/>
            <p className={b("text")}>
                <span className={b("price")}>{price}</span>
                <span className={b("procent")}>{procent +'%'}</span>
            </p>
        </div>
    )
};

export default OrderLabel;
