import {IButtonProps} from '../build/types/config';
import {makeAutoObservable} from 'mobx';

class controlButtonsStore {
    constructor(
        public leftButtons: IButtonProps[] = [],
        public rightButtons: IButtonProps[] = [],
    ) {
        makeAutoObservable(this);
    }

    text = '';

    setText(value: string) {
        this.text = value;
    }
}

export default controlButtonsStore;