import cls from './Input.module.scss';
import {IInputProps} from '../../../build/types/config';

const Input = (props: IInputProps) => {
    const {
        type,
        value,
        placeholder,
        onChange,
    } = props;
    return (
        <input
            className={cls.Input}
            type={type}
            value={value}
            placeholder={placeholder}
            onChange={onChange}
        />
    );
};

export default Input;