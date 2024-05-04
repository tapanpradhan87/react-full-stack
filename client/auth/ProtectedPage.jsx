import React from 'react'
import { useAuth } from './AuthContext'
import { Navigate } from 'react-router-dom';

export default function ProtectedPage({ children }) {
    const { loading, user } = useAuth();

    if (loading)
        return <div>Loading...</div>
    if (!user)
        return <Navigate to='/login'></Navigate>
    return children
}
