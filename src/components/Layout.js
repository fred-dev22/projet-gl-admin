import React from 'react';
import Aside from './Aside';
import NavBar from './NavBar';
import styled from '@emotion/styled';

function Layout({children}) {
    return (
        <Container>
            <NavBar/>
            <div className='contenus'>
            <Aside/>
            <div className='child'>
            {children}
            </div>
            </div>
            
            
        </Container>
    );
}
const Container=styled.div`
width:100%;
.contenus{
    display:flex;
}
.child{
    width:80%;
    margin-left:22%;
}
`
export default Layout;