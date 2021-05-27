import React from "react"
import { useState, useEffect } from 'react'
import axios from 'axios'



// export default class Add extends React.Component {
//     constructor() {
//         super()
//         this.state = {
//             name: "",
//             etat: false

//         }
//         // const [setStudents] = useState([]);

//         // useEffect(() => {

//         //     const url = "http://localhost:8000/students"

//         //     axios.get(url)
//         //         .then(response => {
//         //             setStudents(response.data)
//         //         })
//         //     if (this.state.etat == true) {
//         //         axios.post(url, { name: this.state.name })
//         //     }
//         // }, []);
//     }


//     updateName = (e) => {
//         this.setState({ name: e.target.value })
//     }

//     sendName = () => {
//         this.setState({ etat: true })

//     }
//     render() {
//         console.log("name :", this.state.name);
//         return (
//             <div>
//                 <h1>Add</h1>

//                 <input type="text" onChange={this.updateName} />
//                 <button onClick={this.sendName}>send</button>
//             </div>
//         )

//     }


// }

const AddStudents = () => {
    const [students, setStudents] = useState([]);
    const [name, setName] = useState([""])
    const [etat, setEtat] = useState([false])
    console.log("etat",etat);
    console.log("name :",name);
    console.log("etat :",etat);

    useEffect(() => {

        const url = "http://localhost:8000/students"

        axios.get(url)
            .then(response => {
                setStudents(response.data)
            })
            if (etat === true) {
                console.log("je suis dans le if");
                axios.post(url, { name: name })
            }
    }, []);
    
    // updateName = (e) => {
    //     setName(e.target.value )
    // }

    // sendName = () => {
    //     setEtat(true)

    // }
    return (
        <div>
            <h1>Add</h1>

            <input type="text" onChange={(e)=>setName(e.target.value )} />
            <button onClick={()=>setEtat(true)}>send</button>
        </div>
    )
}

export default AddStudents;