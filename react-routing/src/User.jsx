import { Link, Routes, Route, useParams } from 'react-router-dom';
import UserInfo from './UserInfo';
import { useEffect } from 'react';

function User({ userArr }) {
    let { id } = useParams()
    let userId = Number(id)

    return (
        <div>
            <h1>User</h1>
            <ul>
                <li><Link to="userinfo">UserInfo</Link></li>
            </ul>
            {userArr.filter((item) => item.id === userId).map((item) => {
                return (<div key={item.id}>
                    <p >{item.name}</p>
                    <p >{item.title}</p>
                </div>
                )
            })}
            <Routes>
                <Route path='userinfo' element={<UserInfo />} />
            </Routes>
        </div>
    );
}

export default User