import React from "react";
import './OrderIcon.scss';

interface IOrderIconProps {
    className: string;
}

const OrderIcon = (props: IOrderIconProps) => (
    <svg className={`order-icon ${props.className}`} width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="16" height="16" rx="4" fill="#242738"/>
        <rect x="3" y="5" width="10" height="2" rx="1" fill="#31B984"/>
        <rect x="7" y="9" width="2" height="2" rx="1" fill="#818C99"/>
    </svg>
)

export default OrderIcon;
