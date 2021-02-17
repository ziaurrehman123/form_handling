import React, { Component } from 'react'

// export default class App extends Component {
//   state = {
//     value: "geekyshows",
//     value1: "HI, this is the textarea in form which is controlled by onChange Method"
//   };
//   handleChange = (e)=>{
//     console.log(e.target.value);
//     this.setState({value: e.target.value.toUpperCase().substr(0, 10)});
//   }
//   handleChange1 = (e)=>{
//     console.log(e.target.value);
//     this.setState({value1: e.target.value1});
//   }
//   render() {
//     return (
//       <div>
//         <form>
//           <h2>Hello Zia</h2>
//           <input type="text" value={this.state.value} onChange={this.handleChange}/>
//           <textarea value={this.state.value1} onChange={this.handleChange1}/>
//         </form>
//       </div>
//     )
//   }
// }





// export default class App extends Component {
//   state={
//     name: "",
//     password: ""
//   };
// handleChange=(e)=>{
//   this.setState({[e.target.name]: e.target.value})
 
// }
// handleSubmit = (e)=>{
//   console.log(e.target[0].value);//target for getting complete form
//   e.preventDefault();
// }
//   render() {
//     return (
//       <div>
//         <form onSubmit={this.handleSubmit}>
//           <label>
//             Name: 
//             <input type="text"
//             name="name"
//             value={this.state.name}
//             onChange={this.handleChange}
//             />
//           </label>
//           <br />
//           <br />
//           <label>
//             Password: 
//             <input type="text"
//             name="password"
//             value={this.state.password}
//             onChange={this.handleChange}
//             />
//           </label>
//           <br />
//           <br />
//           <input type="submit" value="Submit" />
//         </form>
//       </div>
//     )
//   }
// }

// export default class App extends Component {
//   constructor(props){
//     super(props);
//     //creating ref
//     this.textInput = React.createRef();
//   };
//   componentDidMount=()=> {
//     // console.log(this.textInput)
//     this.textInput.current.focus();
//   }
  

//   render() {
    
//     return (
//       <div>
//         <form>
//           <label>
//             Name: <input type="text" />
//           </label>
//           <br /><br />
//           <label>
            
//             Password: <input type="text" ref={this.textInput} />
//           </label>
//           <br /><br />
//           <label>
//             Address: <input type="text" />
//           </label>
//         </form>
//       </div>
//     )
//   }
// }

export default class App extends Component {
  constructor(props){
    super(props);
    this.state={
      value:""
    };
    this.textInput=React.createRef();
  }
  handleSubmit=(e)=>{
    console.log(this.textInput.current.value)
    e.preventDefault();
    this.setState({value: this.textInput.current.value})

  }
  
  render() {
    return (
     <React.Fragment>
       <h3>You Typed: {this.state.value}</h3>
       <form onSubmit={this.handleSubmit}>
       <label>
         Input: <input type="text" ref={this.textInput} />
         <input type="submit" value="Submit" />
                </label>
                </form>
     </React.Fragment>
    )
  }
}
