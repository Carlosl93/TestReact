import React from "react";
import { connect } from "react-redux";
import {
    addTask as addTaskAction,
    toggleTask as toggleTaskAction,
    deleteTask as deleteTaskAction,
} from "../actions/tasks";

const statesMap = state => {
    return {
        tasks: state.TasksReducer
    };
};

const dispatches = dispatch => {
    return {
        addTask: text => dispatch(addTaskAction(text)),
        toggleTask: id => dispatch(toggleTaskAction(id)),
        deleteTask: id => dispatch(deleteTaskAction(id)),
    };
};

const TaskContainer = connect(null, dispatches);
export default TaskContainer;
