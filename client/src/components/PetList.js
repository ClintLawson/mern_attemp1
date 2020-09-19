import React from 'react'
import {Link} from '@reach/router'

const PetList = ({pets}) => {

    return (
        <div>
            <h3>These pets are looking for a good home</h3>
            <table style={{width: "100%", border: "1px black solid"}}>
                <tbody>
                <tr style={{backgroundColor: 'lightgray'}}>
                    <th >Name</th>
                    <th>Type</th>
                    <th>Actions</th>
                </tr>
                {pets.map(p => 
                    <tr key={p._id} style={{textAlign: "center"}}>
                        <td>{p.petName}</td>
                        <td>{p.petType}</td>
                        <td>
                            <Link to={`pets/${p._id}/details`}>Details</Link>` | `
                            <Link to={`pets/${p._id}/edit`}>Edit</Link>
                        </td>
                    </tr>
                )}
                </tbody>
            </table>
        </div>
    )
}
export default PetList;