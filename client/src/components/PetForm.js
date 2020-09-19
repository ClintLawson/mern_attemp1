import React from 'react'

const PetForm = ({pet, setPet, submitPet, errors}) => {

    return (
        <div>
            <form onSubmit={(e) => submitPet(e,pet)} style={{width: "100%"}}>
                <div style={{ display: "flex", justifyContent: "space-between"}}>
                    <div>
                        <span style={{color: 'red'}}>{errors.petName != undefined ? errors.petName.message : ""}</span>
                        <h4 style={{display: "flex", justifyContent: "space-between"}}>
                            Pet Name :  
                            <input type="text" value={pet.petName || ''} onChange={e=> setPet({...pet, petName: e.target.value})}/>
                        </h4>
                        <span style={{color: 'red'}}>{errors.petType != undefined ? errors.petType.message : ""}</span>
                        <h4 style={{display: "flex", justifyContent: "space-between"}}>
                            Pet Type :  
                            <input type="text" value={pet.petType || ''} onChange={e=> setPet({...pet, petType: e.target.value})}/>
                        </h4>
                        <span style={{color: 'red'}}>{errors.petDescription != undefined ? errors.petDescription.message : ""}</span>
                        <h4 style={{display: "flex", justifyContent: "space-between"}}>
                            Pet Description :  
                            <input type="text" value={pet.petDescription || ''} onChange={e=> setPet({...pet, petDescription: e.target.value})}/>
                        </h4>
                    </div>
                    <div>
                        <h4 style={{display: "flex", justifyContent: "space-between"}}>
                            Skill 1 :  
                            <input type="text" value={pet.skill1 || ''} onChange={e=> setPet({...pet, skill1: e.target.value})}/>
                        </h4>
                        <h4 style={{display: "flex", justifyContent: "space-between"}}>
                            Skill 2 :  
                            <input type="text" value={pet.skill2 || ''} onChange={e=> setPet({...pet, skill2: e.target.value})}/>
                        </h4>
                        <h4 style={{display: "flex", justifyContent: "space-between"}}>
                            Skill 3 :  
                            <input type="text" value={pet.skill3 || ''} onChange={e=> setPet({...pet, skill3: e.target.value})}/>
                        </h4>
                    </div>
                </div>
                <input style={{margin: "auto"}} type={"submit"} value={"Submit"}/>
            </form>
        </div>
    )
}
export default PetForm;