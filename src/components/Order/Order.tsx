import React from "react";
import ButtonClose from "components/ButtonClose/ButtonClose";
import block from 'bem-cn-lite';
import OrderLabel from "components/OrderLabel/OrderLabel";
import './Order.scss';

const b = block("order");

interface IOrdersComponentProps {
    price: number | number[];
    procent: number | number[];
    removeOrder: () => void;
}

const Order = (props: IOrdersComponentProps) => {
    const {price, procent, removeOrder} = props;
    return (
        <div className={b()}>
            <OrderLabel price={price} procent={procent}/>
            <ButtonClose className={b("order-close")} onClick={removeOrder}/>
        </div>
    )
};

export default Order;
