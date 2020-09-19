import React, { useEffect, useState } from 'react'
import PetForm from '../../components/PetForm'
import axios from 'axios'
import {navigate} from '@reach/router'

const PetCreate = ({pets, setPets}) => {

    //create pet stuff
    const [pet, setPet] = useState({})
    const [errors, setErrors] = useState({})
    // let errors = {}
    // useEffect(()=>{console.log(errors)},[errors])

    const createNewPet = (e, newPet) => {
        e.preventDefault();
        axios.post('http://127.0.0.1:8000/api/things/new/', newPet)
            .then(res => {return setPets([...pets, res.data]), navigate('/'), setErrors({})})
            .catch(err => setErrors(err.response.data.errors))
    }
    //err.response.data.errors.petName.message

    return(
        <div>
            <PetForm setPet={setPet} pet={pet} submitPet={createNewPet} errors={errors}/>
        </div>
    )
}
export default PetCreate;