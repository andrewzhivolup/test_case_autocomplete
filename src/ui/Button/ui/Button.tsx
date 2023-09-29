import React from 'react';
import cls from './Button.module.scss';
import {IButtonProps} from '../../../build/types/config';

const Button = (props: IButtonProps) => {
    const {
        id,
        callback,
        text,
    } = props;
    return (
        <button
            className={cls.Button}
            key={id}
            onClick={callback}
        >
            {text}
        </button>
    );
};

export default Button;