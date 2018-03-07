import React from 'react';
import styled from 'styled-components';

import TaskContainer from '../../stateManager/containers/tasks';
import { toggleTask } from '../../stateManager/actions/tasks';

const style = {
    icon: {
        color: "#4e576a",
        margin: "0 5px",
        cursor: "pointer",
    }
}

const TaskElementContainer = styled.div`
    width: 100%;
    font-size: 1.5rem;

    border-bottom: 1px solid #4e576a;

    display: flex;
    align-items: center;
    justify-content: center;
    
`;

const TaskText = styled.div`
    width: 80%;
    margin: 0.5rem 2rem;
    color: #4e576a;
`;

const TaskIcon = styled.div`
    width: 20%;
`;

const DoneButton = styled.div`
    width: 30px;
    height: 10px;

    background: red;
`;

@TaskContainer
class TaskElement extends React.PureComponent {

    handleToggle = () => {
        let { task, toggleTask } = this.props;
        toggleTask(task.id);
    }

    handleDelete = () => {
        let { task, deleteTask } = this.props;
        deleteTask(task.id);
    }

    render() {
        let { task } = this.props;

        return (
            <TaskElementContainer >
                <TaskText> {task.text} </TaskText>
                <TaskIcon>
                    <i
                        className="fas fa-trash fas-2x"
                        style={style.icon}
                        onClick={this.handleDelete}
                    ></i>
                    <i
                        className="fas fa-check-square fas-2x"
                        onClick={this.handleToggle}
                        style={style.icon}>
                    </i>
                </TaskIcon>
            </TaskElementContainer>
        );
    }
}

export default TaskElement;