import React from 'react';
import {IAutocomplete} from '../../../build/types/config';
import Input from '../../Input/ui/Input';
import {observer} from 'mobx-react';
import cls from './СontrolAutocomplete.module.scss';

const ControlAutocomplete = observer((props: IAutocomplete) => {

    const {model} = props;

    const handleCheck = (text: string) => {
        model.text = text;
        model.checkMatches(text);
    };

    const handleChangeInput = (text: string) => {
        model.selectCountry(text);
    };

    return (
        <div className={cls.ControlAutocomplete}>

            <Input
                value={model.text}
                type="text"
                placeholder="Введите название страны"
                onChange={(e) => handleCheck(e.target.value)}
            />

            <div className={cls.hints}>
                {model
                    .countryList.map((item) => (
                        <div key={item.name}
                            className={cls.hint}
                            onClick={
                                () => handleChangeInput(`${item.fullName}, ${item.name}`)
                            }
                        >
                            <p className={cls.hintName}>{item.fullName},</p>
                            <p className={cls.hintName}>{item.name}</p>
                            <img className={cls.hintImage} alt={item.name} src={item.flag} width={30} height={20}/>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}
);

export default ControlAutocomplete;