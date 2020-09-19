import React,{useState, useEffect} from 'react'
import axios from 'axios'
import { navigate } from '@reach/router'

const PetDetails = ({id, pets, setPets}) => {

    const [pet, setPet] = useState({})

    useEffect(()=>{
        axios.get(`http://127.0.0.1:8000/api/things/${id}/`)
            .then(res => setPet(res.data))
            .catch(err => console.log(err))
    },[])

    const adoptPet = (id) => {
        axios.delete(`http://127.0.0.1:8000/api/things/${id}/delete/`)
            .then(res => setPets(pets.filter(p => p._id !== id)))
            .catch(err => console.log(err))
        navigate('/')
    }

    return (
        <div>
            <div style={{display: "flex", justifyContent: "space-between"}}>
                <h3>Details about: {pet.petName}</h3>
                <h3>
                    <button onClick={() => adoptPet(pet._id)} style={{height: "30px"}}>Adopt {pet.petName}</button>
                </h3>
            </div>
            <div>
                <h4>Pet Type: <span style={{fontWeight: "lighter"}}>{pet.petType}</span></h4>
                <h4>Description: <span style={{fontWeight: "lighter"}}>{pet.petDescription}</span></h4>
                <div style={{display: "flex"}}>
                    <h4>Skills:</h4>
                    <div style={{marginLeft: "25px"}}>
                        <h4><span style={{fontWeight: "lighter"}}>{pet.skill1}</span></h4>
                        <h4><span style={{fontWeight: "lighter"}}>{pet.skill2}</span></h4>
                        <h4><span style={{fontWeight: "lighter"}}>{pet.skill3}</span></h4>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default PetDetails;