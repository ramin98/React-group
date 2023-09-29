import { Link, Routes, Route } from 'react-router-dom';
import User from './User';

function About({ userArr }) {
    return (
        <div>
            <h1>About</h1>
            <ul>
                {userArr.map((item) => {
                    return <li key={item.id}><Link to={`user/${item.id}`}>{item.name}</Link></li>
                })}
            </ul>
            <Routes>
                <Route path='user/:id/*' element={<User userArr={userArr}/>} />
            </Routes>
        </div>
    );
}

export default About