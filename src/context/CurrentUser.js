import React, { useContext } from 'react';
import UserContext from './UserContext';
import Button from './Button';
function CurrentUser() {
    const { userOne } = useContext(UserContext)

    return (
        <div>
            {userOne} 
            <Button/> 
        </div>
    );
}

export default CurrentUser;
