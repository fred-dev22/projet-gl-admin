import React, { useContext } from 'react';
import styled from '@emotion/styled';
import { logOut } from '../services/AuthApi';
import { IsAuthenticated } from '../contexts/Auth';
import { NavLink, useLocation } from 'react-router-dom';

const Container= styled.div`
width:20%;
background-color:#6c63ff;
min-height:100vh;
margin-top:3px;
position:fixed;
text-align:justify;
button{
    background-color:red;
    color:white;
    border-radius:10px;
    padding:10px 15px;
    position:fixed;
    bottom:0px;
    margin:0px 0px 10px 5px ;
    font-weight:bold;
    border:none;
}
nav{
    display:flex;
    flex-direction:column;
}
.link {
      display: inline-block;
      padding: 10px 15px;
      text-transform: uppercase;
      text-decoration:none;
      color:white;
      margin-top:10px;
      
    }
    .active-link{
     background-color:white;
     padding: 10px 15px;
      text-transform: uppercase;
      text-decoration:none;
      color:black;
     border-radius:10px;
     margin-top:10px;
     width:50%;
     margin-left:5px;
  }
`


function Aside(props) {
    const {isAuthenticated,setIsAuthenticated}=useContext(IsAuthenticated);

    const handleLogOut=()=>{
        logOut();
        setIsAuthenticated(false);
    }
    const location=useLocation();
    return (
        <Container>
            <nav>

            <NavLink to='/admin-page' className={location.pathname=="/admin-page"?'active-link':'link'}>Acceuil</NavLink>
                <NavLink to='/voyages' className={location.pathname=="/voyages"?'active-link':'link'}>Voyages</NavLink>
                <NavLink to='/tikets' className={location.pathname=="/tikets"?'active-link':'link'}>Vendre tiket</NavLink>
                <NavLink to='/control' className={location.pathname=="/control"?'active-link':'link'}>Controleur</NavLink>
                <NavLink to='/statistiques' className={location.pathname=="/statistiques"?'active-link':'link'}>Mes Stats</NavLink>

            </nav>
            <button onClick={handleLogOut}>Deconnexion</button>
            

        </Container>
    );
}

export default Aside;