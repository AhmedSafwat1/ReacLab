import React, { Component ,Fragment} from 'react';
import validator from "validator"
class Student extends Component
{
    constructor(props)
    {
        super(props)
        this.state = {id:null,name:"",age:null,address:"",hobbies:[],state:true,counter:0}
        this.select = []
        // validator.isLength("xxxxx",50)
        
    }
    handleChnage = (e)=>
    {
        if(e.target.id == "hobbies")
        {
            
          
            console.log(e.target.value)
        }
        else
        {
            this.setState(
                {
                [e.target.id] :e.target.value
                }
            ) 
        }
        console.log(this.state)
    }
    increamnet = ()=>
    {
        this.setState(
            {
                counter:this.state.counter+1
            }
        )
    }
    decrement = ()=>
    {
        this.setState(
            {
                counter:this.state.counter-1
            }
        )
    }
    hnadleSave = async(e)=>
    {
        e.preventDefault()
        let  h  = []
        let f= document.getElementById("hobbies") 
        for (let index = 0; index < f.selectedOptions.length; index++) {
            console.log(f.selectedOptions[index])
            h.push(f.selectedOptions[index].value)
            
        }
        console.log(h)
        await this.setState(
            {
            hobbies:h
            }
        )
        console.log(this.state)
        this.props.addEvent(this.state)
    }
    select(e)
    {
        alert("hi")
        console.log(e.target.value)
    }
    render(){
        return (
            <div>
                <form className="form-inline" onSubmit={this.hnadleSave}>
                    <div className="form-group mx-sm-3 mb-2">
                        <label className="sr-only">name</label>
                        <input type="text" className="form-control" id="name" placeholder="name" onChange={this.handleChnage} />
                    </div>
                    <div className="form-group mx-sm-3 mb-2">
                        <label className="sr-only">age</label>
                        <input type="number" className="form-control" id="age" placeholder="age" onChange={this.handleChnage} />
                    </div>
                    <div className="form-group mx-sm-3 mb-2">
                        <label  className="sr-only">address</label>
                        <input type="text" className="form-control"  id="address"   placeholder="address" onChange={this.handleChnage}/>
                    </div>
                    <div className="form-group mx-sm-3 mb-2">
                        <label className="sr-only">hobbies</label>
                        <select  id="hobbies" multiple={true}   className="form-control"  >
                            {this.props.hobbies.map((h)=>{
                                return (
                                    <option key={Math.random()*1000} value={h}>{h}</option>
                                )
                            })}
                        </select>
                        {/* <input type="text" className="form-control" id="hobbies" placeholder="hobbies"  /> */}
                    </div>
                    <button type="submit" className="btn btn-primary mb-2">add</button>
                </form>
                  <button onClick={this.increamnet}>+</button>  
                  <button onClick={this.decrement}>-</button>  
                  <p>
                      {this.state.counter}
                 </p>        
            </div>
        )
    }
}
export default Student