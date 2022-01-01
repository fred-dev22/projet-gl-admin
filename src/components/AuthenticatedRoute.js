import { useContext } from "react"
import {IsAuthenticated} from "../contexts/Auth"
import { Route , Navigate,Outlet} from 'react-router-dom';
import { Home } from "../pages/Home";

const AuthenticatedRoute =()=>{
    const {isAuthenticated}=useContext(IsAuthenticated);
    return isAuthenticated?<Outlet /> : <Navigate to="/" />;
}
export default AuthenticatedRoute;