import React, { Component } from 'react';
import './App.css';
import MainPage from './MainPage';

import firebase from './firebase';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      isLogin: false,
      error: null,
    };
  }

  componentDidMount() {
    // firebase.auth().onAuthStateChanged(function(user) {
    //   if (user) {
    //     // успешно авторизован, объект user содержит username и т.п.
    //     this.setState({
    //       ...this.state,
    //       user
    //     });
    //   }
    // });
    // database
    //   .ref()
    //   .child("react")
    //   .child("speed")
    //   .on("value", snapshot => {
    //     const store = snapshot.val();
    //     this.setState({
    //       text: store
    //     });
    //   });
  }

  handleChangeEmail = (event) => {
    const newEmail = event.target.value;
    this.setState({
      email: newEmail,
    });
  };

  handleChangePassword = (event) => {
    const newPassord = event.target.value;
    this.setState({
      password: newPassord,
    });
  };

  // handleSubmit = event => {
  // event.preventDefault();
  // database
  //   .ref()
  //   .child("react")
  //   .child("speed")
  //   .push(this.state.text);
  // };

  handleSignIn = (event) => {
    event.preventDefault();
    const { email, password } = this.state;
    const auth = firebase.auth();
    const promise = auth.signInWithEmailAndPassword(email, password);

    promise
      .then(() => {
        this.setState({
          isLogin: true,
          email: '',
          password: '',
          error: '',
        });
      })
      .catch((e) => {
        this.setState({
          error: e.message,
        });
      });
  };

  handleSignUp = (event) => {
    event.preventDefault();
    const { email, password } = this.state;
    const auth = firebase.auth();
    const promise = auth.createUserWithEmailAndPassword(email, password);

    promise
      .then(() => {
        this.setState({
          isLogin: true,
        });
      })
      .catch(e =>
        this.setState({
          error: e.message,
        }));
  };

  handleLogout = (event) => {
    event.preventDefault();

    firebase
      .auth()
      .signOut()
      .then(
        () => {
          console.log('Signed Out');
        },
        (error) => {
          console.error('Sign Out Error', error);
        },
      );

    this.setState({
      isLogin: false,
    });
  };

  // firebase.auth().onAuthStateChanged(firebaseUser => {
  //   if (firebaseUser) {
  //     console.log(firebaseUser);
  //   } else {
  //     console.log('not log in');
  //   }
  // });

  render() {
    const { isLogin } = this.state;

    return (
      <div className="App">
        <div className="App-intro">
          <MainPage isLogin={isLogin} />
        </div>

        {!isLogin ? (
          <div>
            <div className="container">
              <div className="row">
                <div className="main">
                  <h3>Please Log In, or Sign Up</h3>
                  <div className="row">
                    <div className="col-xs-6 col-sm-6 col-md-6">
                      <a href="#" className="btn btn-lg btn-primary btn-block">
                        Facebook
                      </a>
                    </div>
                    <div className="col-xs-6 col-sm-6 col-md-6">
                      <a href="#" className="btn btn-lg btn-info btn-block">
                        Google
                      </a>
                    </div>
                  </div>
                  <div className="login-or">
                    <hr className="hr-or" />
                    <span className="span-or">or</span>
                  </div>

                  <form>
                    <div className="form-group">
                      <label htmlFor="inputUsernameEmail">Username or email</label>
                      <input
                        type="text"
                        className="form-control"
                        id="inputUsernameEmail"
                        value={this.state.email}
                        onChange={this.handleChangeEmail}
                        placeholder="Enter your email"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="inputPassword">Password</label>
                      <input
                        type="password"
                        className="form-control"
                        id="inputPassword"
                        value={this.state.password}
                        onChange={this.handleChangePassword}
                        placeholder="Enter password"
                      />
                    </div>

                    <div className="error">{this.state.error ? this.state.error : ''}</div>

                    <div className="row">
                      <div className="col-xs-6 col-sm-6 col-md-6">
                        <a
                          href="#"
                          onClick={this.handleSignIn}
                          className="btn btn-lg btn-primary btn-block"
                        >
                          Log In
                        </a>
                      </div>
                      <div className="col-xs-6 col-sm-6 col-md-6">
                        <a
                          href="#"
                          onClick={this.handleSignUp}
                          className="btn btn-lg btn-info btn-block"
                        >
                          Sign Up
                        </a>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <button onClick={this.handleLogout}>Logout</button>
        )}
      </div>
    );
  }
}

export default App;
