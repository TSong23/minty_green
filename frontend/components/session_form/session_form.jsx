import React from 'react'; 
import { Link } from 'react-router-dom';
import { link } from 'fs';

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
      linkText === "To Login";
    }else {
      linkText === "Sign Up!";
    }


    return(
      <div>

        <form>

          <label>
            username:
            <input type="text" onChange={this.update("username")}/>
          </label>

          <label>
            password:
            <input type="text" onChange={this.update("password")} />
          </label>

          <button type="submit">{`${buttonText}`}</button>
          <Link to="sign in or login. complete logic">{linkText}</Link>
        </form>
      </div>
    )
  }
  
}