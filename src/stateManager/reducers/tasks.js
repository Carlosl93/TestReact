import { findIndex, set, filter } from 'lodash';

const TasksReducer = (state = {}, action) => {
    switch (action.type) {

        case 'DELETE_TASK':
            return filter(
                state,
                task => task.id !== action.id
            );

        case 'TOGGLE_TASK':
            let index = findIndex(
                state,
                { id: action.id }
            );
            set(state[index], 'complete', !state[index].complete)
            return state;

        case 'ADD_TASK':
            return [
                ...state,
                {
                    id: action.id,
                    text: action.text,
                    complete: false
                }
            ]
        default:
            return state;
    }
};

export default TasksReducer;