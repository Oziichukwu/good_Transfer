import { useRef, useState, useEffect } from "react";
import { faCheck,faTimes,faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom';
import './Welcome.css'
const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
const PASSWORD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
// const REGISTER_URL = '/register';


const Register = () => {

    const userRef = useRef();
    const errRef = useRef();

    const [user, setUser] = useState("")
    const [validName, setValidName] = useState(false)
    const [userFocus, setUserFocus] = useState(false)


    const [password, setPassword] = useState("")
    const [validPassword, setValidPassword] = useState(false)
    const [passwordFocus, setPasswordFocus] = useState(false)

    const [matchPassword, setMatchPassword] = useState('');
    const [validMatch, setValidMatch] = useState(false);
    const [matchFocus, setMatchFocus] = useState(false);

    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);


    useEffect(() => {
      
        userRef.current.focus();
    }, [])

    useEffect(() => {
        const result = USER_REGEX.test(user)
        console.log(result);
        console.log(user)
        setValidName(result)
    }, [user])

    useEffect(() => {
        const result = PASSWORD_REGEX.test(password)
        console.log(result);
        console.log(password)
        setValidPassword(result)
        const match = password === matchPassword
        setValidMatch(match)
    }, [password, matchPassword])

    useEffect(() => {
        setErrMsg("");

    },[user, password, matchPassword])

    const handleSubmit = async(e) => {

        e.preventDefault();
        const v1 = USER_REGEX.test(user);
        const v2 = PASSWORD_REGEX.test(password);
        if (!v1 || !v2) {
            setErrMsg("Invalid Entry");
            return;
        }


    }
    
     
  return (
    <>
    {success ? (
        <section>
            <h1>Success!</h1>
            <p>
                <a href="#">Sign In</a>
            </p>
        </section>
    ) : (
    <section className="container">
        <div className="row">
        <p ref={errRef} className={errMsg ? "errmsg" : 
        "offscreen"} aria-live="assertive">{errMsg}</p>
        <h1>Register</h1>
        <form onSubmit={handleSubmit}>
            <label htmlFor="username">
                Username:
                <FontAwesomeIcon icon={faCheck} className={validName ? "valid" : "hide"} />
                <FontAwesomeIcon icon={faTimes} className={validName || !user ? "hide" : "invalid"} />    
            </label>
            <input
                type="text"
                id="username"
                ref={userRef}
                autoComplete="off"
                onChange={(e) => setUser(e.target.value)}
                value={user}
                required
                aria-invalid={validName ? "false" : "true"}
                aria-describedby="uidnote"
                onFocus={() => setUserFocus(true)}
                onBlur={() => setUserFocus(false)}
            />
            <p id="uidnote" className={userFocus && user 
                && !validName ? "instructions" : "offscreen"}>
                <FontAwesomeIcon icon={faInfoCircle} />
                4 to 24 characters.<br />
                Must begin with a letter.<br />
                Letters, numbers, underscores, hyphens allowed.
            </p>

            <label htmlFor="password">
                Password:
                <FontAwesomeIcon icon={faCheck} className={validPassword ? "valid" : "hide"} />
                <FontAwesomeIcon icon={faTimes} className={validPassword || !password ? "hide" : "invalid"} />
            </label>
            <input
                type="password"
                id="password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                required
                aria-invalid={validPassword ? "false" : "true"}
                aria-describedby="pwdnote"
                onFocus={() => setPasswordFocus(true)}
                onBlur={() => setPasswordFocus(false)}
            />
            <p id="pwdnote" className={passwordFocus 
                && !validPassword ? "instructions" : "offscreen"}>
                <FontAwesomeIcon icon={faInfoCircle} />
                8 to 24 characters.<br />
                Must include uppercase and lowercase letters, a number and a special character.<br />
                Allowed special characters: <span aria-label="exclamation mark">!</span> <span aria-label="at symbol">@</span> <span aria-label="hashtag">#</span> <span aria-label="dollar sign">$</span> <span aria-label="percent">%</span>
            </p>

            <label htmlFor="confirm_pwd">
                Confirm Password:
                <FontAwesomeIcon icon={faCheck} className={validMatch && matchPassword ? "valid" : "hide"} />
                <FontAwesomeIcon icon={faTimes} className={validMatch || !matchPassword ? "hide" : "invalid"} />
            </label>
            <input
                type="password"
                id="confirm_pwd"
                onChange={(e) => setMatchPassword(e.target.value)}
                value={matchPassword}
                required
                aria-invalid={validMatch ? "false" : "true"}
                aria-describedby="confirmnote"
                onFocus={() => setMatchFocus(true)}
                onBlur={() => setMatchFocus(false)}
            />
            <p id="confirmnote" className={matchFocus && !validMatch ? "instructions" : "offscreen"}>
                <FontAwesomeIcon icon={faInfoCircle} />
                Must match the first password input field.
            </p>

            <button disabled={!validName || !validPassword || !validMatch ? true : false}>Sign Up</button>    

        </form>

        <p>
            Already registered?<br />
            <span className="line">
                {/*put router link here*/}
                <Link to="/login" underline="hover">
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

export default Register