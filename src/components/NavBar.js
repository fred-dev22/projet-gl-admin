import React from 'react';
import styled from '@emotion/styled';



function NavBar(props) {
    return (
        <Container>
            <div>Nom agence</div>
        </Container>
    );
}

export default NavBar;
const Container=styled.div`
background-color:#6c63ff;
height:50px;

div{
    font-size:40px;
    font-weight:bold;
    text-align:center;
    color:white;
}
`