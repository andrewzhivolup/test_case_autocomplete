import React from 'react';
import './App.scss';
import {ControlAutocomplete} from './ui/ControlAutocomplete';
import {autocompleteTenTips, autocompleteThreeTips, rightAndLeftButtons, onlyRightButtons} from './tests';
import {ControlButtons} from './ui/ControlButtons';

function App() {
    return (
        <div className='App'>
            <ControlButtons buttons={onlyRightButtons} />
            <ControlButtons buttons={rightAndLeftButtons} />
            <ControlAutocomplete model={autocompleteThreeTips}/>
            <ControlAutocomplete model={autocompleteTenTips}/>
        </div>
    );
}

export default App;
