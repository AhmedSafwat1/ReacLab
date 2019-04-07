import React, { Component ,Fragment} from 'react';
import "./subject"
class Subject extends Component
{
    constructor(props)
    {
        super(props)
        this.state = {name:"",totalDegree:null,state:true,counter:0}
        this.select = []
        // validator.isLength("xxxxx",50)
        
    }
    handleChnage = (e)=>
    {
        
            this.setState(
                {
                [e.target.id] :e.target.value
                }
            ) 
        
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
                    <div className="form-group w-50 mx-sm-3 mb-2">
                        <label className="sr-only">Total Degree</label>
                        <input type="number" min="50" max="100" className="form-control w-100" id="totalDegree" placeholder="total Degree" onChange={this.handleChnage} />
                    </div>
                    <button type="submit" className="btn btn-primary mb-2">add</button>
                </form>
                 
            </div>
        )
    }
}
export default Subject