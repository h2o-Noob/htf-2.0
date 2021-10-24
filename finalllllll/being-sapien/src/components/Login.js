import React, { useEffect, useState, useContext } from 'react'
import Sawo from 'sawo'
import { Link } from 'react-router-dom'
import Navbar from './Navbar'
import Main from './Main'
import Data from './Data'
import Results from './Results'
import { db } from "../firebase"
import { collection, addDoc, query, onSnapshot } from "firebase/firestore";

const Login = () => {

    const [userPayLoad, setuserPayLoad] = useState({})
    const [isLoggedIn, setisLoggedIn] = useState(false)
    const [Email, setEmail] = useState()
    const [task, settask] = useState([])

    useEffect(() => {
        
        const OnSuccessLogin = (payload) => {
            setuserPayLoad(payload)
            setisLoggedIn(true)
            sessionStorage.setItem('user_id', payload.user_id)
        }
        setEmail(userPayLoad.identifier)
        console.log(Email)

        var config = {
            // should be same as the id of the container created on 3rd step
            containerID: 'sawo-container',
            // can be one of 'email' or 'phone_number_sms'
            identifierType: 'email',
            // Add the API key copied from 5th step
            apiKey: 'aca73cfc-7ce9-48c5-b837-b9c220964499',
            // Add a callback here to handle the payload sent by sdk
            onSuccess: OnSuccessLogin
        }
        let sawo = new Sawo(config)
        sawo.showForm()
    }, [])

    useEffect(() => {
        const q = query(collection(db, "reports"))
        const unsub = onSnapshot(q, (querySnapshot) => {
        let que = []
        querySnapshot.forEach((doc) => {
            que.push({...doc.data(), id: doc.id})
        })
        settask(que)
        })
        return () => {
        unsub()
        }
    }, [])

    return (
        <React.Fragment>
            {!isLoggedIn && (    
                <div id="sawo-container" style={{height:"300px", width:"400px", margin: 'auto'}}>
                    <h1 className="text-center my-2">You need to login</h1>
                </div>
            )}
            {isLoggedIn && (
                <div id="sawo-container" className='container'>
                    <Navbar/>
                    <Data email={userPayLoad.identifier}/>
                    <div className="row mx-3 my-4 bg-light" style={{boxShadow: "0px 0px 8px 2px black"}}>
                            {task.map((x)=> 
                                <div className="col-md-3 mx-5 my-5">
                                    <Results name={x.name} animal={x.animal} email={x.email} location={x.location} info={x.info}/>     
                                </div>
                            )}
                    </div>
                    
                </div>
            )}
        </React.Fragment>
    )
}

export default Login 
