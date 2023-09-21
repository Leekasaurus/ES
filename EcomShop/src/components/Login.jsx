import React, {useState} from 'react'
import {login, addUser} from './API'

const Login = () => {
    const [user, setUser] = useState({username, password})
    const [error, setError] = useState('');
    const {id} = useParams();
    const navigate = useNavigate();
}

const handleChange = (e) => {
    const{name, value} = e.target;
    setUser({...user, [name]: value});
}

const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
        if (id === 'register') {
            await addUser(user);
            navigate('/login');
        }else {
            await login(user);
            navigate('/')
        }
    } catch (error) {
        setError(error.response.data.msg);
    }
}

return(
    <div>
        <h1></h1>

        <form onSubmit={handleSubmit}>
        <input type="text" name="username" value="user.username" onChange={handleChange}></input>
            <input type="password" name="password" value="user.password" onChange={handleChange}></input>
            <button type="submit">Login</button>
        </form>
    </div>
)

export default Login;