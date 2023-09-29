import controlAutocompleteStore from '../../store/controlAutocomplete';

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