import React from 'react'
import { IndexUserContext } from './IndexUserContext'
import { UserContext } from './UserContext'

export const AppUserContext = () => {
    return (
        <div>
            <UserContext.Provider value="Hello User context">
                <IndexUserContext />
            </UserContext.Provider>
        </div>
    )
}
