export const SHOW_ALL = 'SHOW_ALL';
export const DONE = 'DONE';
export const UNDONE = 'UNDONE';

const initialState = {
    activeFilter: SHOW_ALL,
    filters: [
        {
            type: 'SHOW_ALL',
            text: 'Show All'
        }, {
            type: 'DONE',
            text: 'Done'
        }, {
            type: 'UNDONE',
            text: 'Undone'
        }
    ]
};

export default function(state = initialState, action) {
    switch (action.type) {
        case SHOW_ALL:
            return state.activeFilter = SHOW_ALL;
        case DONE:
            return state.activeFilter = DONE;
        case UNDONE:
            return state.activeFilter = UNDONE;
        default:
            return state;
    }
}
