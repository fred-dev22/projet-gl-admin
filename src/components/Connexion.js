import styled from '@emotion/styled';
import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { IsAuthenticated } from '../contexts/Auth';
import { login } from '../services/AuthApi';



const Connexion = () => {
    const navigate=useNavigate();
    const {setIsAuthenticated}=useContext(IsAuthenticated);
    const [user, setUser] = useState({
        userName: "",
        password: ""
    });
    const handleChange = ({ currentTarget }) => {
     const {name,value}=currentTarget;
     setUser({...user,[name]:value});
    }
    const handleSubmit= async (event)=>{
        event.preventDefault();
        try{
            const response=await login(user);
            setIsAuthenticated(response);
            navigate("/admin-page", { replace: true });
        }catch({response}){
            console.log(response);

        }
    }
    return (
        <Container>
            <form onSubmit={handleSubmit} >
                <h1>Connexion</h1>
                <label>Nom d'utilisateur</label>
                <input
                    type="text"
                    placeholder="Entrer le nom d'utilisateur"
                    name="username"
                    onChange={handleChange}
                    required />

                <label>Mot de passe</label>
                <input
                    type="password"
                    placeholder="Entrer le mot de passe"
                    name="password"
                    onChange={handleChange}
                    required />

                <input type="submit" id='submit' value='LOGIN' />
            </form>
        </Container>
    )
}
const Container = styled.div`
  width: 400px;
    margin: 0 auto;
    margin-top: 10%;

form{
    width: 100%;
    padding: 30px;
    border: 1px solid #f1f1f1;
    background: rgb(209, 203, 203);
    box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24);

}
h1 {
    width: 38%;
    margin: 0 auto;
    padding-bottom: 10px;
    text-align: center;
    color: rgb(47, 47, 75);
    padding-right: 40px;
}
input[type=text],
input[type=password] {
    width: 100%;
    padding: 12px 20px;
    margin: 8px 0;
    display: inline-block;
    border: 1px solid #ccc;
    box-sizing: border-box;
}

input[type=submit] {
    background-color: #6c63ff;
    color: white;
    padding: 14px 20px;
    margin: 8px 0;
    border: none;
    cursor: pointer;
    width: 100%;
    :hover{
        background-color: white;
    color: #53af57;
    border: 1px solid rgb(47, 47, 75);
    }
}
label {
    font-weight: bold;
}
`
export default Connexion;