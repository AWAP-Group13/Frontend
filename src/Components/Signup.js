import React,{Component} from 'react';

export default class Signup extends Component{
    constructor(props){
        super(props);
            this.state={
            fname: "",
            lname: "",
            email: "",
            password: "",
        };
        this.handleSubmit=this.handleSubmit.bind(this);
    }
    handleSubmit(){
        const data = this.state
        fetch("http://localhost:5000/register",{
            method:"POST",
            crossDomain:true,
            headers:{
                "Content-Type":"application/json",
                Accept:"application/json",
                "Access-Control-Allow-Origin":"",
            },
            body:JSON.stringify({
                data
            }),
        }).then((res)=>res.json())
        .then((data)=>{ 
            console.log(data)
           
            alert(data.status)
        }
        );

    }
    render() {
  return (
    //onSubmit={this.handleSubmit}
    <div className="Submain">
    <form >
        <h3>Sign Up</h3>
        <div className="Submain">
         <div className="sign">
            <label>First name</label>
            <input
            type="text"
            className="form-control"
            placeholder="First name"
            onChange ={(e)=>this.setState({fname:e.target.value})}
            />
                </div>
            <div className="sign">
            <label>Last name</label>
            <input
            type="text"
            className="form-control"
            placeholder="Last name"
            onChange ={(e)=>this.setState({lname:e.target.value})}
            />
            </div>
                 <div className="sigin">
            <label>Email address</label>
            <input
            type="text"
            className="form-control"
            placeholder="Enter Email address"
            onChange ={(e)=>this.setState({email:e.target.value})}
            />
            </div>
            <div className="sign">
            <label>Password</label>
            <input
            type="password"
            className="form-control"
            placeholder="Enter password"
            onChange ={(e)=>this.setState({password:e.target.value})}
            />
            </div>
            <div className="sign">
                <button type="button" className="form-control" onClick={this.handleSubmit}>
                    Register
                </button>
                </div>
                
                <div className="sign">
                    <a href="Login">
               <button type="button" className="form-control" onClick={this.handleSubmit}>
                    Login
                </button>
                </a>
                </div>
                </div>
    </form>
    </div>
  )
}
}
