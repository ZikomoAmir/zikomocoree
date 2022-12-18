import React,{Component} from "react";


class Login extends Component{

    constructor(){
        super()
        this.state={
           userName:'',
           password:'',
           message:'',

        }
        this.handleChange=this.handleChange.bind(this)
        this.handleLogin=this.handleLogin.bind(this)
    }


    handleChange(k,e){

        this.setState({
            ...this.state,
            [k]:e
        })

    }

    handleLogin(){



    }

    render(){

        return(
            <main>
            <form className="card card--login">
              <div className="card__header">
                <h4>
                  <strong>Log in</strong>
                </h4>
              </div>
      
              <div className="card__content">
                <div className="input-group">
                  <label className="email">Username</label>
                  <input
                    type="text"
                    name="username"
                    className="form-control"
                    placeholder="Enter user name"
                    value={this.state.name}
                    onChange={(e) => this.handleChange('userName',e.target.value)}
                  />
                </div>
      
                <div className="input-group">
                  <label className="email">Password</label>
                  <input
                    type="password"
                    name="password"
                    className="form-control"
                    placeholder="Enter password"
                    value={this.state.password}
                    onChange={(e) => this.handleChange('password',e.target.value)}
                  />
                </div>
      
                <div style={{ color: "darkred" }}>
                  <p>{this.state.message}</p>
                </div>
              </div>
      
              <div>
                <input
                  type="submit"
                  className="btn "
                  value="Log in"
                  id="loginsub"
                  onClick={this.handleLogin}
                />
              </div>
            </form>
          </main>
        )

    }

}

export default Login