import React from 'react';
const  SubjectList = (props)=>
{
    console.log(props)
    const {subjectList}=props
    console.log(subjectList)
    
    const studntDisplay = subjectList.map((s,i)=>{
         return(
            
            <tr key={i}>
                <td>{s.name}</td>
                <td>{s.totalDegree}</td>
              
                <td>
                 <button className=" ml-2 btn btn-info"  onClick={()=>{props.delete(i,s._id)}}>remove</button>
                </td>
            </tr>
        )
    }
    )
    return (
        <div className="pt-5 mt-5">
            <table className="table ">
            <thead>
                <tr>
                <th>Name</th>
                <th>Total Degree</th>  
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
export default  SubjectList