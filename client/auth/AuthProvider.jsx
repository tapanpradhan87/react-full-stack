import React, { useMemo, useState, useEffect } from 'react'
import AuthContext from './AuthContext';
import { useNavigate } from "react-router-dom";

export function AuthProvider({ children }) {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        getUser();
    }, []);

    const getUser = () => {
        setLoading(true);
        fetch("/api/auth/user")
            .then((res) => res.json())
            .then(({ ok, user }) => {
                if (!ok) {
                    setUser(null);
                } else {
                    setUser(user);
                }
                setLoading(false);
            })
    }


    const login = (data) => {
        console.log(JSON.stringify(data))
        fetch("/api/auth/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then(({ ok, user: _user }) => {
                if (ok && _user) {
                    setUser(_user);
                    navigate("/");
                } else {
                    alert("Invalid Credentials");
                }
            })
    };

    const logout = () => {
        fetch("/api/auth/logout", {
            method: "POST",
        }).then(() => {
            setUser(null);
            navigate("/login");
        })
    };
    const values = useMemo(() => ({ login, logout, user, loading }), [login, logout, user, loading])
    return (
        <AuthContext.Provider value={values}>{children}</AuthContext.Provider>
    )
}
