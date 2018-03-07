import React from "react";
import { connect } from "react-redux";
import {
    filterTask as filterTaskAction,
} from "../actions/filter";
import { filter } from 'lodash';

const filterTaskState = (state, filterTag = 'all') => {
    switch (filterTag){
        case 'all':
            return state;
        case 'active':
            return filter(state, task => !task.complete);
        case 'done':
            return filter(state, task => task.complete);
    };
};

const statesMap = state => {
    return {
        tasks: filterTaskState(state.TasksReducer, state.FilterReducer),
        filter: state.FilterReducer,
    };
};

const dispatches = dispatch => {
    return {
        filterTask: filter => dispatch(filterTaskAction(filter)),
    };
};

const FilterContainer = connect(statesMap, dispatches);
export default FilterContainer;
