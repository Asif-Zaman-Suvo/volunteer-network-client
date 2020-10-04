import React, { useContext, useState } from 'react';
import './Login.css'
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { UserContext } from '../../App';
import { Link, useHistory, useLocation } from 'react-router-dom';
import logo from '../../logos/Group 1329.png'

import googleLogo from '../../Components/Login/Google Logo.png'
import { Button, Col, Row } from 'react-bootstrap';



firebase.initializeApp(firebaseConfig)
const Login = () => {


    const [user, setUser] = useState({
        isSignedIn: false,
        name: '',
        email: '',   
    });


    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const history = useHistory();
    const location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };



    // Continue with Google
    const googleProvider = new firebase.auth.GoogleAuthProvider();


    const handleGoogleSignIn = () => {
        firebase.auth().signInWithPopup(googleProvider)
            .then(res => {
                const { displayName, email } = res.user;
                const newLoggedInUser = {
                    isSignedIn: true,
                    name: displayName,
                    email: email
                }
                setUser(newLoggedInUser);
                setLoggedInUser(newLoggedInUser);
                history.replace(from);
            })
            .catch(error => {
                console.log(error);
            });
    }

    return (

        <Row style={{ backgroundColor: '#F8FAFC',height: '650px'}}>
            <Col></Col>

            <div>

            <Link to="/" className=' logo'>
                <img className="loginLogo" src={logo} alt="" /></Link>
                <Col className="googleColumn">

                <h2 className="loginWith">Login With</h2>
                
                <Button className="block-example border border-info rounded-pill" variant="light" size="lg" block onClick={handleGoogleSignIn}><img src={googleLogo} width="50px" alt="" /><span className="googleText"> Continue With Google</span></Button>


                </Col>
            </div>
            
            <Col></Col>

        </Row>





        
           

        //         <div className="login">
        //         
        //     </div>
        // </div>

    );
};
export default Login;
