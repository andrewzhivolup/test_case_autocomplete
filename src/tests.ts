import controlAutocompleteStore from './store/controlAutocomplete';

const autocompleteThreeTips = new controlAutocompleteStore(3);
const autocompleteTenTips = new controlAutocompleteStore(10);

export {
    autocompleteThreeTips,
    autocompleteTenTips,
};
