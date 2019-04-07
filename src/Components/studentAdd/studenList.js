import React from 'react';
const  StudentList = (props)=>
{
    const {studenList}=props
    
    const studntDisplay = studenList.map((s,i)=>{
        if(s.state){ return(
            
            <tr key={Math.random()*1000}>
                <td>{s.name}</td>
                <td>{s.age}</td>
                <td>{s.address}</td>
                <td> <ul>{s.hobbies.map(h=>{
                    return (
                       <li  key={Math.random()*1000}>{h}</li> 
                    )
                })} </ul></td>
                <td><button className="btn btn-danger"  onClick={()=>{props.block(i)}}>block</button>
                 <button className=" ml-2 btn btn-info"  onClick={()=>{props.delete(i)}}>remove</button>
                </td>
            </tr>
        )}else{
            return(
                <div>empty</div>
            )
        }
    }
    )
    return (
        <div className="pt-5 mt-5">
            <table className="table ">
            <thead>
                <tr>
                <th>Name</th>
                <th>age</th>
                <th>address</th>
                <th>hobbies</th>
                <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {studntDisplay}
            </tbody>
            </table>
        </div>
    )
    
}
export default StudentList