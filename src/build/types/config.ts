import controlAutocompleteStore from '../../store/controlAutocomplete';
import controlButtonsStore from '../../store/controlButtons';

export interface IInputProps {
    value: string;
    type: string;
    placeholder: string;
    onChange: (e: any) => void;
}

export interface IAutocomplete {
    model: controlAutocompleteStore
}

export interface CountryInfo {
    name: string;
    fullName: string;
    flag: string;
}

export interface IButtonProps {
    id: number;
    callback: () => void;
    text: string;
}

export interface IButtonsControl {
    buttons: controlButtonsStore
}
