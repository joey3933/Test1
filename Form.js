import React from "react";

export default class Form extends React.Component{
    state = {
        first:"",
        second:"",
        on: false,
        on2:false,
       
    }
   
    handleSumit = event =>{
        alert(`${this.state.first} ${this.state.second}`)
    }
    click =()=>{
        this.setState(
            {on:!this.state.on}
        );
    };
    click2 =()=>{
        this.setState(
            {on2:!this.state.on2}
        );
    };
    render(){
        return(
            
            <form onSubmit={this.handleSumit} action="contactform.php" method="post">

                <p>This course is identified in my Work Plan and Learning Agreement</p>
                <label>Yes</label><input type="checkbox" value="ck" onChange={(e)=>this.setState({ck:e.target.checked})}/>
                <br/>
                <label>No</label><input type="checkbox" onClick={this.click}/>

                {this.state.on && <div>
                    <p>I am attending this session because (tick all that apply)</p>
                    <input type="checkbox"/><label>It will help me develop the skills and knowledge required for my current role</label>
                    <br/>
                    <input type="checkbox"/><label>It will help me develop the skills and knowledge for a possible future role/body of work </label>
                    <br/>
                    <input type="checkbox"/><label>It was identified as a need during my performance management discussions</label>
                    <br/>
                    <input type="checkbox"/><label>My manager recommended that I attend</label>
                    <br/>
                    <input type="checkbox"/><label>I am interested in the content</label>
                    
                    <p>What would you like to achieve as a result of your attendance? For example, “I would like to learn to write better emails to improve my communication skills”.</p>
                    <input
                    placeholder="first type"
                    name="firsttype"
                    value={this.state.first}
                    onChange={e => this.setState({ first: e.target.value})}/>
                </div>}

                <p>Do you require adjustments or additions to the session delivery to support your participation? For example, hearing loop or wheelchair access.</p>
                <label>Yes</label><input type="checkbox" onClick={this.click2}/>
                <br/>
                <label>No</label><input type="checkbox"/>
                
                {this.state.on2 && <div>
                    <p>Please provide details of your requirements.</p>
                    <input
                    placeholder="second type"
                    name="secondtype"
                    value={this.state.second}
                    onChange={e => this.setState({ second: e.target.value})}/>
                </div>}

                <p>Please upload any supporting documentation to support your registration request</p>
                <label>Choose File: </label><button >Browse</button>

                <br/>
                <button type="submit" name="submit">Submit</button>
            </form>
        );
    }
}