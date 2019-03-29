const Welcome = ({
  user,
  onSignOut
}) => {
  // This is a dumb "stateless" component
  return (
    React.createElement("div", null, "Welcome ",
      React.createElement("strong", null, user.username), "!",
      React.createElement("a", {
        href: "javascript:;",
        onClick: onSignOut
      }, "Sign out")));


};

class LoginForm extends React.Component {

  // Using a class based component here because we're accessing DOM refs

  handleSignIn(e) {
    e.preventDefault();
    let username = this.refs.username.value;
    this.props.onSignIn(username);
  }

  render() {
    return (
      React.createElement("form", {
          onSubmit: this.handleSignIn.bind(this)
        },
        React.createElement("h3", null, "Sign in"),
        React.createElement("input", {
          type: "text",
          ref: "username",
          placeholder: "enter you username"
        }),
        React.createElement("input", {
          type: "submit",
          value: "Login"
        })));


  }
}



class App extends React.Component {

  constructor(props) {
    super(props);
    // the initial application state
    this.state = {
      user: null
    };

  }

  // App "actions" (functions that modify state)
  signIn(username) {
    // This is where you would call Firebase, an API etc...
    // calling setState will re-render the entire app (efficiently!)
    this.setState({
      user: {
        username
      }
    });


  }

  signOut() {
    // clear out user from state
    this.setState({
      user: null
    });
  }

  render() {
    // Here we pass relevant state to our child components
    // as props. Note that functions are passed using `bind` to
    // make sure we keep our scope to App
    return (
      React.createElement("div", null,
        React.createElement("h1", null, "Playing Puzzle practice"),

        this.state.user ?
        React.createElement(Welcome, {
          user: this.state.user,
          onSignOut: this.signOut.bind(this)
        }) :


        React.createElement(LoginForm, {
          onSignIn: this.signIn.bind(this)
        })));





  }
}



ReactDOM.render(React.createElement(App, null), document.getElementById("app"));