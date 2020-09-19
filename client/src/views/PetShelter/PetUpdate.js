import React,{useEffect, useState} from 'react'
import PetForm from '../../components/PetForm'
import axios from 'axios'

const PetUpdate = ({id, pets, setPets}) => {

    //create pet stuff
    const [pet, setPet] = useState({})
    const [errors, setErrors] = useState({})

    useEffect(()=>{
        axios.get(`http://127.0.0.1:8000/api/things/${id}/`)
            .then(res => setPet(res.data))
            .catch(err => setErrors(err.response.data))
    },[])

    const updatePet = (e, newPet) => {
        e.preventDefault()
        const newList = pets.filter(p => p._id != id)
        axios.put(`http://127.0.0.1:8000/api/things/${id}/update/`, newPet)
            .then((res) => setPets([...newList, res.data]),setErrors({}))
            .catch(err => setErrors(err.response.data.errors))
    }

    return(
        <div>
            <PetForm pet={pet} setPet={setPet} submitPet={updatePet} errors={errors}/>
        </div>
    )
}
export default PetUpdate;