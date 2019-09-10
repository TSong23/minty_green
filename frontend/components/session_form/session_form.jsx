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
      linkText = "Login";
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
      <div className="session_form_body_form">
      
        <form onSubmit={this.handleSubmit} className="splash_form">
          
          <label className="splash_form_input">
            username:
            <input type="text" onChange={this.update("username")} 
                    />
          </label>
          
          <br/>
          <label className="splash_form_input">
            password:
            <input type="password" onChange={this.update("password")}
                  />
          </label>
          
          <br/>
          <button type="submit" className="splash_form_button">{`${buttonText}`}</button>
        
        </form>

        <br/>

        {`To ${linkText}`}
        {/* send up errors */}
        <br/>
        <div className="splash_form_errors">
            {errorsList}
        </div>
      </div>
    )
  }
  
}

export default SessionForm;