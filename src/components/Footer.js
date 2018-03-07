import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.div`
    width: 100%; 
    height: 10%;

    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
`;

class Footer extends React.Component {
    render() {
        return (
            <FooterContainer>
            </FooterContainer>
        );
    }
}

export default Footer;