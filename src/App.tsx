import React from 'react';
import './App.scss';
import {ControlAutocomplete} from './ui/ControlAutocomplete';
import {autocompleteTenTips, autocompleteThreeTips} from './tests';

function App() {
    return (
        <div>
            <ControlAutocomplete model={autocompleteThreeTips}/>
            <ControlAutocomplete model={autocompleteTenTips}/>
        </div>
    );
}

export default App;
