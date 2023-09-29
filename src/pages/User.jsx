import React, { useEffect, useState } from 'react'
import axios from "axios"
import "./User.css"
import List from './List'
import { baseURL } from '../utils/constant';

function User() {
    const {input, setInput} = useState("");
    const {tasks, setTasks} = useState([]);
    const {updateUI, setUpdateUI} = useState(false)

    useEffect(()=> {
        axios.get(`${baseURL}/get`)
        .then((res) => {
            console.log(res.data);
            setTasks(res.data);
        })
    }, [updateUI])

    const addTask = () => {
        axios.post(`${baseURL}/save`, { task: input })
        .then((res) => {
            console.log(res.data);
            setInput("");
        })
    }

  return (
    <main className='main'>
        <h1 className="title">User Operation</h1>
        <div className="input_holder">
            <input type='text' className='input' value={input} onChange={(e) => setInput(e.target.value)} />
            <button type='submit' onClick={addTask}>Add task</button>
        </div>
        <ul className='list'>
            {tasks.map((task) => (
                <List key={task._id} id={task._id} task={task.task} setUpdateUI={setUpdateUI} />
                )
            )}
        </ul>
    </main>
  )
}

export default User