import controlAutocompleteStore from './store/controlAutocomplete';
import controlButtonsStore from './store/controlButtons';

const onlyRightButtons = new controlButtonsStore(
    [],
    [
        {
            id: 1,
            text: 'Очистить',
            callback: () => {
                onlyRightButtons.text = '';
            }
        },
        {
            id: 2,
            text: 'Вставить текст',
            callback: () => {
                onlyRightButtons.setText('Hello world!');
            }
        },
    ]
);

const rightAndLeftButtons = new controlButtonsStore(
    [
        {
            id: 1,
            text: 'Проверить на число',
            callback: () => {
                if (Number(rightAndLeftButtons.text)) {
                    alert(rightAndLeftButtons.text);
                }
            }
        },
    ],
    [
        {
            id: 2,
            text: 'Вызвать alert',
            callback: () => {
                alert(rightAndLeftButtons.text);
            }
        },
    ]
);

const autocompleteThreeTips = new controlAutocompleteStore(3);
const autocompleteTenTips = new controlAutocompleteStore(10);

export {
    onlyRightButtons,
    rightAndLeftButtons,
    autocompleteThreeTips,
    autocompleteTenTips,
};
