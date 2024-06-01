import { Outlet, Navigate } from "react-router-dom";
import { useState } from "react";

export default function ProtecRuta(){
    const [isAuth, setIsAuth]= useState(true);

    return isAuth ? <Outlet/>:<Navigate to="/"/>;
}