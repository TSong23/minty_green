import React from 'react'; 


class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);    
  }
  
  handleSubmit(e){
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.action(user);
  }

  update(field){
    return(e) => {
      this.setState({
        [field]: e.target.value
      })
    }
  }

  render(){
    let buttonText = this.props.formType;
    let linkText = '';
    if (buttonText === "Sign Up"){
      linkText = "Log In";
    }else {
      linkText = "Sign Up";
    }
    let errorsList = this.props.errors.map((err, idx) => {
      return (
        <h3 key={`error-${idx}`}>
          {err}
        </h3>
      )
    })

    return(      
      <div className="session_form_body">
      
        <div className="session_form_body_form">   
          <form onSubmit={this.handleSubmit} className="session_form">
            <h3>Welcome to Ronil's hood</h3>
            <label className="session_form_input">
              <div className="session_form_input_text">username:</div>           
              <input className="session_form_input_box" type="text" onChange={this.update("username")}/>
            </label>
            <label className="session_form_input">
              <div className="session_form_input_text">password:</div>
              <input className="session_form_input_box" type="password" onChange={this.update("password")} />
            </label>
            
            <br/>
            <button type="submit" className="session_form_button">{`${buttonText}`}</button>
          
          </form>

          {/* send up errors */}
          <br/>
          <div className="session_form_errors">
              {errorsList}
          </div>         
        </div>
        
      </div>
    )
  }
  
}

export default SessionForm;