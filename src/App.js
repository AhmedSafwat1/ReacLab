import React, { Component } from 'react';
//bootstrap
import 'bootstrap/dist/css/bootstrap.css';
import "popper.js/dist/popper.min"
import "jquery/dist/jquery.min"
import 'bootstrap/dist/js/bootstrap.js';
import Student from './Components/student/student';
import StudentList from './Components/studentAdd/studenList';
import SubjectList from './Components/subjectAdd/subjectList';
import Subject from './Components/subject/subject';
class App extends Component {
  constructor(props)
  {
    super(props)
    this.state = {
      studens:[
        {id:1,name:"safwat",age:15,address:"cairo",hobbies:["swiming","tenis"],state:true},
        {id:2,name:"amr",age:20,address:"mans",hobbies:["swiming","tenis"],state:true},
      ],
      hobbies:["palying","swiming","reading"],
      subjects:[]
    }
  }
  componentDidMount()
  {
    fetch("http://localhost:8080/api/subject").then(r=>r.json())
                                              .then(async(r)=>{
                                                console.log(r)
                                                this.setState({
                                                  subjects:r
                                                })
                                                console.log(this.state.subjects)
                                              })
  }
  save = (student) =>
  {
   
    let  x = this.state.studens;
    x.push(student)
    this.setState({
      studens:x
    })
  }
  block = (id)=>
  {
    this.state.studens[id].state = false
    this.setState({
      studens:this.state.studens
    })

  }
  delete = (id)=>
  {
    let x = this.state.studens
    x.splice(id,1)
    this.setState({
      studens:x
    })

  }
  deleteSubject = (index,id)=>
  {
    let s= this.state.subjects
    
    fetch(`http://localhost:8080/api/subject/${id}`,{method:"DELETE", headers:{"Content-Type":"application/json"}})
    .then((x)=>{
      
      s.splice(index,1)
      console.log(s)
       this.setState({
        subjects:s
      })
    })
  }
  AddSubject =  (student)=>{
   
    let  x = this.state.subjects;
    const res =  fetch("http://localhost:8080/api/subject",{
      method:"POST",
      mode:"cors",
      cache: "no-cache",
      headers:{
        'Accept': 'application/json',
        "Content-Type":"application/json"
    },
      body:JSON.stringify(student)
    })
    .then((response) => response.json())
    .then((messages) => { 
       x.push(messages)
      this.setState({
        subjects:x
      })}
    ).catch(e=>alert(e));
    
  }
  render() {
    return (
      <div className="App">
        <div className="container" >
            <StudentList studenList={this.state.studens} block={this.block} delete={this.delete }/>
            <Student  hobbies={this.state.hobbies} addEvent={this.save}/>
            <hr/>
            <h2 className="mt-5 h1 text-muted text-center">Api Server node Subject Table content name and degree 50:100</h2>
            <SubjectList subjectList={this.state.subjects} delete={this.deleteSubject } />
            <Subject addEvent={this.AddSubject}/>
        </div>

      </div>
    );
  }
}

export default App;
