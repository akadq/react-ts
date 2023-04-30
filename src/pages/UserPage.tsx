import React, {FC, useEffect, useState} from 'react';
import UserForm from "../components/UserForm";
import Users from "../components/Users";
import {IUser} from "../interfaces/user.interface";
import {userService} from "../services/user.service";
import {IUseState} from "../types/useState.type";

interface IProps {
    setUsers: IUseState<IUser>;
}

const UserPage: FC <IProps> = () => {
    const [users, setUsers] = useState<IUser[]>([]);
    useEffect(() =>{
        userService.getAll().then(value => value.data).then(value => setUsers(value));
    }, [])
    return (
        <div>
            <UserForm setUsers={setUsers}/>
            <hr/>
            <Users users={users}/>
        </div>
    );
};

export default UserPage;