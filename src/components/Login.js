import React, {useRef,useState,useEffect} from 'react'
// import AuthContext from './context/AuthProvider'
import {Link} from 'react-router-dom'
import './Welcome.css'

const Login =()=> {

    // const { setAuth } = useContext(AuthContext); 

    const userRef = useRef();
    const errRef = useRef();

    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');
    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        userRef.current.focus();
    }, [])

    useEffect(() => {
        setErrMsg('');
    }, [user, password]);

    const handleSubmit =async(e)=>{
        e.preventDefault();

    }

  return (

    <>
        {success ? (
            <section>
                <h1>You are logged in!</h1>
                <br />
                <p>
                    {/* <a href="#">Go to Home</a> */}
                </p>
            </section>
            ) : (
    <section className="container">
        <div className="row">
        <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
        <h1>Sign In</h1>

        <form onSubmit={handleSubmit}>
            <label htmlFor="username">Username:</label>      
            <input
                type="text"
                id="username"
                ref={userRef}
                autoComplete="off"
                onChange={(e) => setUser(e.target.value)}
                value={user}
                required
            />

            <label htmlFor="password">Password:</label>
            <input
                type="password"
                id="password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                required
            />
            <button>Sign In</button>

        </form> 

        <p>
            Need an Account?<br />
            <span className="line">
                {/*put router link here*/}
                <Link to="/sign-up" underline="hover">
                 sign in   
              </Link>
            </span>
        </p>  
        </div>         
    </section>
    )}

    </>
  )
}

export default Login