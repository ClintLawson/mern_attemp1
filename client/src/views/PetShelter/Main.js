import React,{ useState, useEffect} from 'react'
import {Router, Link} from '@reach/router'
import axios from 'axios'
import PetList from '../../components/PetList'
import PetDetails from '../../components/PetDetails'
import PetCreate from './PetCreate'
import PetUpdate from './PetUpdate'

const Main = () => {

    const [pets, setPets] = useState([])
    
    useEffect(()=>{
        axios.get("http://127.0.0.1:8000/api/things/")
            .then(res => setPets(res.data))
            .catch(err => console.log(err))
    },[])

    return(
        <div style={{width: "500px"}}>
            <div style={{display: "flex", justifyContent: "space-between"}}>
                <h1>Pet Shelter</h1>
                <div style={{ paddingTop: "35px"}}>
                    <Link to={`pets/new`}>Add Pet</Link>` | `
                    <Link to={`/`} >BackHome</Link>
                </div>
            </div>
            <Router>
                <PetList path='/' pets={pets}/>
                <PetCreate path='pets/new/' pets={pets} setPets={setPets}/>
                <PetUpdate path='pets/:id/edit' pets={pets} setPets={setPets}/>
                <PetDetails path='pets/:id/details' pets={pets} setPets={setPets}/>
            </Router>
        </div>
    )
}
export default Main