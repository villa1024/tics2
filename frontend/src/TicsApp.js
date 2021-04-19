import React, { useEffect, useReducer } from "react";
import { BrowserRouter, Switch, Redirect, Route } from "react-router-dom";

import { useDispatch, useSelector } from 'react-redux';

import AdminLayout from "layouts/Admin/Admin.js";
import LoginLayout from "layouts/Login/Login.js";


import { startChecking } from "./actions/auth";
import { PrivateRoute } from "./routers/PrivateRoute";
import { PublicRoute } from "./routers/PublicRoute";

export const TicsApp = () => {

    const dispatch = useDispatch();
    const { checking, id } = useSelector(state => state.auth);

    useEffect(() => {
        dispatch(startChecking())
    }, [dispatch])

    if (checking) {
        return (<h5>Espere...</h5>)
    }

    return (
        <BrowserRouter>
            <Switch>
                <PublicRoute
                    path="/login"
                    isAuthenticated={!!id}
                    component={(props) => <LoginLayout {...props} />} />
                <PrivateRoute
                    path="/admin"
                    isAuthenticated={!!id}
                    component={(props) => <AdminLayout {...props} />} />
                <Redirect from="/" to="/admin/Alarm" />
            </Switch>
        </BrowserRouter>
    )
};