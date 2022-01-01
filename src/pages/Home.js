import React, { useContext, useEffect } from 'react';
import styled from '@emotion/styled';
import Connexion from '../components/Connexion';
import { IsAuthenticated } from '../contexts/Auth';
import { useNavigate } from 'react-router-dom';


export const Home=()=>{
    const {isAuthenticated}=useContext(IsAuthenticated);
    const navigate =useNavigate();
    useEffect(()=>{
        if(isAuthenticated){
            navigate("/admin-page", { replace: true });
        }
    },[isAuthenticated])
return(
    <Container>
        <div className='title'>
            Bienvenus dans l'espace admin de GuideTravel ,
            cet espace est dedier a la gestion de votre agence de voyage .
        </div>
        <div>
            {isAuthenticated && (<>connecter</>)}
        </div>
        <Connexion/>
    </Container>
)
}
const Container=styled.div`
width:100%;
display:flex;
flex-direction:column;
align-items:center;
background-image:url("images/image.jpg");
min-height:97vh;
.title{
    text-align:center;
    font-size:20px;
    background-color:#6c63ff;
    color:white;
    width:70%;
    height:30px;
}
`