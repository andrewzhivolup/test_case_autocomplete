import {getCountryByName} from '../api/apiService';
import {makeAutoObservable} from 'mobx';
import {CountryInfo} from '../build/types/config';

class controlAutocompleteStore {
    constructor(public count: number = 0) {
        makeAutoObservable(this);
    }

    text = '';
    countryList: Array<CountryInfo> = [];

    async checkMatches(value: string) {
        this.text = value;
        this.countryList = (
            await getCountryByName(value)).slice(0, this.count);
    }

    selectCountry(value: string) {
        this.text = value;
        this.countryList = [];
    }
}

export default controlAutocompleteStore;