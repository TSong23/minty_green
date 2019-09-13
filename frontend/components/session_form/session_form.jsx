import React from 'react'; 
import { Link} from 'react-router-dom'; 


class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    }
    this.handleSubmit = this.handleSubmit.bind(this);  
    this.demoUser = this.demoUser.bind(this);
  }
  
  handleSubmit(e){
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.action(user);
  }

  componentWillUnmount(){
    this.props.clearErrors();
  }

  update(field){
    return(e) => {
      this.setState({
        [field]: e.target.value
      })
    }
  }

  demoUser(){
    this.setState({username: "demo", password: '123456'},
    () => {
      const user = Object.assign({}, this.state);
      this.props.action(user);
      }
    );
  }


  sessionFormButton(buttonText){
    if (buttonText === 'Sign Up'){
      return(
        <button type="submit" className="session_form_button">{`${buttonText}`}</button>            
      )
    } else {
      return (
        <div>
          <button type="submit" className="session_form_button">{`Log In`}</button>
          <button onClick={this.demoUser} className="session_form_button">{`Demo`}</button>
        </div>
      )            
    }
  }

  render(){
  
    let linkText, linkurl = '';

    if (this.props.formType === "Sign Up"){
      linkText = "To Log In";
      linkurl = "login";
    }else {
      linkText = "To Sign Up";
      linkurl = "signup";
    }

    const button = this.sessionFormButton(this.props.formType);

    // let {errSlice} = this.props;
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
              <input className="session_form_input_box" type="text" 
              onChange={this.update("username")}/>
            </label>
            <label className="session_form_input">
              <div className="session_form_input_text">password:</div>
              <input className="session_form_input_box" type="password" onChange={this.update("password")} />
            </label>
            
            <br/>

            {button}

            <br/>
            <Link to={`/${linkurl}`} className="session_form_link" >{linkText}</Link>
            
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