import React, { useState } from 'react';
import CurrentUser from './CurrentUser';
import UserContext from './UserContext'


function Context() {
    const [userOne, setUserOne] = useState('nour');
    const userValues = { userOne, setUserOne };

    return (
        <UserContext.Provider value={userValues}>
            <CurrentUser />
        </UserContext.Provider>
    );
}

export default Context;
