import React from 'react';
import styled from 'styled-components';
import { map } from 'lodash';

import TaskElement from './Body/TaskElement';

import FilterContainer from '../stateManager/containers/filter';

const BodyContainer = styled.div`
    width: 100%; 
    height: 75%;
    border-bottom: 1px solid #4e576a;

    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
`;

const Filter = styled.div`
    width: 100%;
    height: 8%;

    border-bottom: 1px solid #4e576a;
    padding-bottom: 1px; 

    display: flex;
    align-items: center;
    justify-content: space-around;
`;

const FilterElement = styled.p`
    width: 100%;
    height: 100%;

    color: #4e576a;

    font-size: ${props => props.active ? "1.2rem" : "1rem"};

    display: flex;
    align-items: center;
    justify-content: space-around;

    border-right: ${props => props.border ? "1px solid #4e576a" : ""};
    text-decoration: ${props => props.active ? "underline" : ""};

    transition: 0.2s ease all;

    cursor: pointer;

    &:hover{
        font-size: 1.2rem;
        transition: 0.1s ease all;
    }
`;

const TaskList = styled.div`
    width: 100%;
    height: 90%;

    margin: 0rem 0.5rem;
`;

@FilterContainer
class Body extends React.Component {
    constructor() {
        super();

        this.state = {
            filter: ''
        }
    }

    handleFilter = (filter) => {
        let { filterTask } = this.props;
        filterTask(filter);
    } 

    render() {
        let { tasks, toggleTask, filter } = this.props;
        return (
            <BodyContainer>

                <Filter>
                    <FilterElement 
                        onClick={() => this.handleFilter('active')}
                        border 
                        active={filter == 'active'}
                    >
                        Active
                    </FilterElement>
                    <FilterElement 
                        onClick={() => this.handleFilter('done')}
                        border
                        active={filter == 'done'}
                    >
                        Done
                    </FilterElement>
                    <FilterElement
                        onClick={() => this.handleFilter('all')}
                        active={filter == 'all'}
                    >
                        All
                    </FilterElement>
                </Filter>

                <TaskList>
                    {
                        map(
                            tasks,
                            (task, i) => 
                                <TaskElement
                                    key={i}
                                    task={task}                            
                                />
                        )
                    }
                </TaskList>
            </BodyContainer>
        );
    }
}

export default Body;