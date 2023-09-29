import React from 'react';
import cls from './ControlButtons.module.scss';
import {Button} from '../../Button';
import {IButtonsControl} from '../../../build/types/config';
import {observer} from 'mobx-react';
import {Input} from '../../Input';

const ControlButtons = observer((props: IButtonsControl) => {
    const {buttons} = props;

    const handleChangeText = (text: string) => {
        buttons.setText(text);
    };

    return (
        <div className={cls.ControlButtons}>
            {buttons.leftButtons.map((item) => {
                const  {id, text, callback} = item;
                return <Button
                    key={id}
                    id={id}
                    text={text}
                    callback={callback}
                />;
            })}
            <Input
                type="text"
                placeholder="Введите текст"
                value={buttons.text}
                onChange={
                    (e: any) => handleChangeText(e.target.value)
                }
            />
            {buttons.rightButtons.map((item) => {
                const  {id, text, callback} = item;
                return <Button
                    key={id}
                    id={id}
                    text={text}
                    callback={callback}
                />;
            })}
        </div>
    );
}
);

export default ControlButtons;