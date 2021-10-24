import { React, useState, useEffect } from 'react'
import { db } from "../firebase"
import { collection, addDoc, query, onSnapshot } from "firebase/firestore";
import Time from './Time';

function Results(props) {

    const [title, settitle] = useState('')
    const [task, settask] = useState([])
    const [Date, setDate] = useState()

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
        <div className='results'>
            <div className="grid">
                <div class="card bg-success" style={{width: "18rem"}}>
                    <div class="card-body">
                        <h3 class="card-title text-light">{props.animal}</h3>
                        <h6 className='text-light'><Time/></h6>
                        <ul class="list-group">
                            <li class="list-group-item">
                            <span class="badge bg-success">location</span>
                            <p class="card-text">{props.location}</p>
                            </li>
                            <li class="list-group-item">
                            <span class="badge bg-success">aid needed and info</span>
                            <p class="card-text">{props.info}</p>
                            </li>
                            <li class="list-group-item">
                            <span class="badge bg-success">uploaded by</span>
                            <p class="card-text">{props.name}<br/>{props.email}</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Results
