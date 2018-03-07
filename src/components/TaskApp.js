import React from 'react';
import styled from 'styled-components';

import Header from './Header';
import Body from './Body';
import Footer from './Footer';

const Container = styled.div`
    height: 36rem;
    width: 38rem;
    padding: 1rem 1rem; margin: 0 2rem;

    border: 1px solid #4e576a;
    border-radius: 20px;

    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
`;

class TaskApp extends React.Component {
    render() {
        return (
            <Container>
                <Header/>
                <Body/> 
                <Footer/>
            </Container>
        );
    }
}

export default TaskApp;