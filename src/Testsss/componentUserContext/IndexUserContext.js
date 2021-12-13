import React, { useContext } from 'react'
import { UserContext } from './UserContext'

export const IndexUserContext = () => {
    const msg = useContext(UserContext)
    return (
        <div>
            INDEX USER CONTEXT 
            <div>
                {msg}
            </div>
        </div>
    )
}
