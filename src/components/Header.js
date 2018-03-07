import React from 'react';
import styled from 'styled-components';
import TextField from 'material-ui/TextField';

import TaskContainer from '../stateManager/containers/tasks';

let inputStyle = {
    textField: {
        margin: "0 !important",
        width: "70%",
        marginTop: "-1rem",
    },
    inputField: {
        margin: "10px !important",
        fontSize: "18px",
        color: "#4e576a",
        fontWeight: "300",
    },
    underlineStyle: {
        borderColor: "#4e576a"
    },
    floatingText: {
        color: "#4e576a",
        fontSize: "2rem"
    },
    floatingTextFocus: {
        color: "#4e576a",
        fontSize: "1rem"
    },
};

const HeaderContainer = styled.div`
    width: 100%; 
    height: 15%;
    border-bottom: 1px solid #4e576a;

    display: flex;
    justify-content: center;
    align-items: center;
`;

const Icon = styled.div`
    width: 50px;
    height: 50px;
    margin-left: 1.2rem;
    opacity: 0.8;

    display: flex;
    justify-content: center;
    align-items: center;
    transform: scale(1, 1);
    transition: 0.2s ease all;

    &:hover{
        opacity: 1;
        transform: scale(1.1, 1.1);
        transition: 0.2s ease all;
    }
`;

@TaskContainer
class Header extends React.Component {
    constructor() {
        super();

        this.state = {
            errorText: '',
            text: ''
        }
    }

    handleChange = (e) => {
        if (e.target.value.length <= 80) {
            this.setState({
                [e.target.name]: e.target.value
            });
        }
    }

    onSubmit = () => {
        let { text } = this.state;
        let { addTask } = this.props;

        if (text.length == 0) {
            this.setState({ errorText: "You have to write a task!" })
        } else {
            addTask(text);
            this.setState({ text: '' });
        }
    }

    render() {
        let { errorText } = this.state;

        return (
            <HeaderContainer>
                <TextField
                    hintText="What do you want to achieve today?"
                    multiLine={true}
                    rows={1}
                    rowsMax={2}
                    fullWidth={true}
                    floatingLabelText="Task"
                    style={inputStyle.textField}
                    underlineFocusStyle={inputStyle.underlineStyle}
                    underlineStyle={inputStyle.underlineStyle}
                    inputStyle={inputStyle.inputField}
                    hintStyle={inputStyle.inputField}
                    floatingLabelFocusStyle={inputStyle.floatingTextFocus}
                    floatingLabelStyle={inputStyle.floatingText}
                    errorText={errorText}
                    name="text"
                    value={this.state.text}
                    onChange={e => this.handleChange(e)}
                />
                <Icon onClick={this.onSubmit}>
                    <i className="fas fa-arrow-alt-circle-down fa-3x" style={{ color: "#4e576a" }}></i>
                </Icon>
            </HeaderContainer>
        );
    }
}

export default Header;