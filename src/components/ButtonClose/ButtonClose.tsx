import React from 'react';
import block from "bem-cn-lite";
import './ButtonClose.scss';

const b = block("button-without-text");

interface IButtonCloseProps {
    className: string;
    onClick?: () => void;
}

const ButtonClose = (props: IButtonCloseProps) => {
    const { className, onClick } = props;

    return (                  
        <svg
            className={`${b()} ${className}`}
            onClick={onClick}
            width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path opacity="0.3" fillRule="evenodd" clipRule="evenodd" d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z" fill="#818C99"/>
            <path fillRule="evenodd" clipRule="evenodd" d="M6.81007 7.09331C6.41954 7.48384 6.41954 8.117 6.81007 8.50753L10.3457 12.0431L6.81004 15.5788C6.41951 15.9693 6.41951 16.6025 6.81004 16.993L7.09288 17.2758C7.4834 17.6664 8.11657 17.6664 8.50709 17.2758L12.0427 13.7402L15.5782 17.2757C15.9687 17.6662 16.6019 17.6662 16.9924 17.2757L17.2752 16.9928C17.6658 16.6023 17.6658 15.9691 17.2752 15.5786L13.7398 12.0431L17.2752 8.50771C17.6657 8.11719 17.6657 7.48402 17.2752 7.0935L16.9924 6.81065C16.6018 6.42013 15.9687 6.42013 15.5782 6.81065L12.0427 10.3461L8.50712 6.81047C8.1166 6.41995 7.48343 6.41995 7.09291 6.81047L6.81007 7.09331Z" fill="#818C99"/>
        </svg>
    )
}

export default ButtonClose;
