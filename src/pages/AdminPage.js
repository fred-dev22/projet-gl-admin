import React, { useContext } from 'react';
import styled from '@emotion/styled';
import Layout from '../components/Layout';

const Container=styled.div`

`

const AdminPage=({role})=> {

   
    return (
        <Container>
            <Layout>
                <h1>Acceuil</h1>
            </Layout>
        </Container>
    );
}

export default AdminPage;