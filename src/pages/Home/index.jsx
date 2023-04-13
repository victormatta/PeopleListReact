import "./styles.css"
import profile from "../../img/profile.jpg"
import {Card} from "../../Components/Card"
import React, { useState, useEffect } from "react"

export function Home() {
    const [peopleName, setPeopleName] = useState("");
    const [people, setPeople] = useState([]);
    const [user, setUser] = useState({name: "", avatar: ""})

    let randomPeople = () => {
        const newPeople = {
            name: peopleName,
            date: new Date().toLocaleTimeString("pt-BR", {
                hour: "2-digit",
                minute: "2-digit",
                second: "2-digit",
            })
        }
        setPeople((prevState) => [...prevState, newPeople])
    }

    useEffect (() => {
        fetch("https://api.github.com/users/rodrigorgtic")
        .then ((response) => response.json())
        .then ((data) => {
            setUser({
                name: data.name,
                avatar: data.avatar_url,
            });
        })
        .catch ((error) => {
            console.log(error);
        })
    }, [])

    return(
        <div className="homePage">

            <header>

                <h1>People List</h1>
                <div className="box">
                    <strong>{user.name}</strong>
                    <img src={user.avatar} alt="Selfie Profile" />
                </div>

            </header>

            <input 
            type="text" 
            placeholder="Name" 
            onChange={e => setPeopleName(e.target.value)}/>

            <button
            onClick={randomPeople}
            type="submit">
                Submit</button>

            {people.map((people) => (
                <Card name={people.name} date={people.date}
                key={people.date}/>
            ))}
        </div>
    )
}