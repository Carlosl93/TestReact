let currentId = 0;
/////// TASKS ////////
export const addTask = (text) => {
    return {
        type: 'ADD_TASK',
        id: currentId++,
        text
    };
};

export const toggleTask = (id) => {
    return {
        type: 'TOGGLE_TASK',
        id,
    };
};

export const deleteTask = (id) => {
    return {
        type: 'DELETE_TASK',
        id,
    };
};
/////// ///// ///////