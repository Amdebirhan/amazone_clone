import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom'
import { auth } from '../../firebase';
import './Login.css'
function Login() {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = e => {
        e.preventDefault()
        //firebase login
        auth.signInEmailAndPassword(email, password).then(auth => {
            if (auth) {
                history.push('/')
            }
        }).catch(error => alert(error.message))
    }

    const register = e => {
        e.preventDefault()
        //firebase register
        auth.createUserWithEmailAndPassword(email, password).then((auth) => {
            console.log(auth)
            if (auth) {
                history.push('/')
            }
        }).catch(error => alert(error.message))
    }

    return (
        <div className="login__page">
            <Link>
                <img className='login__image' src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/175px-Amazon_logo.svg.png" alt="" />
            </Link>
            <div className="login__container">
                <h1>sign in</h1>
                <form>
                    <h5>Email</h5>
                    <input type={'text'} value={email} onChange={e => setEmail(e.target.value)} />
                    <h5>Phone number</h5>
                    <input type={'password'} value={password} onChange={e => setPassword(e.target.value)} />
                    <button className='login__signInButton' type='submit' onClick={signIn} >Sign In</button>
                </form>
                <p>
                    By continuing, you agree to Amazon's Conditions of Use and Privacy Notice.
                </p>
                <button className='login__registerButton' onClick={register}>
                    Create your amazone Account
                </button>
            </div>
        </div>
    )
}

export default Login