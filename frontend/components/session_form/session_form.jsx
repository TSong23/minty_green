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
      linkText = "To Login";
    }else {
      linkText = "Sign Up!";
    }


    return(
      <div>
        <div>
          <form>
            <label>
              username:
              <input type="text" onChange={this.update("username")}/>
            </label>
            <br/>
            <label>
              password:
              <input type="text" onChange={this.update("password")} />
            </label>
            <br/>
            <button type="submit">{`${buttonText}`}</button>
          </form>
        </div>

        {`To ${linkText}`}
      </div>
    )
  }
  
}

export default SessionForm;