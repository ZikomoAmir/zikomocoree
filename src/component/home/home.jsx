import React,{Component} from "react";
import Card from "../../lib/card";
import HeaderBar from "../header/header";

//example auto complete text
import { autoCompleteSampleData } from "../../data/autocomplateTextInputData";
import AutoCompleteTextInput from "../../lib/autocompltetextinput";

class Home extends Component {

    constructor(){
        super()
    }

    render(){

  return (
    <React.Fragment>
      <header className="jumbo">
        <video
          muted
          loop
          autoPlay="autoplay"
          src="http://www.zikomosolutions.com/assets/mov/Beach.mov"
          className="jumbo__video"
        ></video>
        <div className="jumbo__overlay"></div>

        <div className="jumbo__inner">
          <HeaderBar
            title="Dashboard"
            cssClassModifier="header-bar--for-jumbo"
          ></HeaderBar>

          <div className="jumbo__content">
            <h1 className="capitalize">
              Hi{" "}
              {sessionStorage.getItem("user")
                ? sessionStorage.getItem("user")
                : "Guest"}
            </h1>
            <h2>Welcome to Zikomo Core</h2>
          </div>
        </div>
      </header>

      <main className="offset-home">
        <section>
          <div className="grid">
            <div className="grid__column grid__column__4--lg">
              <Card className="centered">
                <div className="card__content">
                  <div className="card__header">
                    <h4>Properties</h4>
                  </div>
                  <div>Card contents</div>
                </div>
                <div className="card__footer">Card Footer</div>
              </Card>
            </div>
            <div className="grid__column grid__column__4--lg">
              <Card className="centered">
                <div className="card__content">
                  <div className="card__header">
                    <h4>Suppliers</h4>
                  </div>
                  <div>Card contents</div>
                </div>
                <div className="card__footer">Card Footer</div>
              </Card>
            </div>
            <div className="grid__column grid__column__4--lg">
              <Card className="centered">
                <div className="card__content">
                  <div className="card__header">
                    <h4>Reports</h4>
                  </div>
                  <div>Card contents</div>
                </div>
                <div className="card__footer">Card Footer</div>
              </Card>
            </div>
          </div>
        </section>

        <section>
          <h1>Sample Ui Elements</h1>
          <div className="filter">
            <AutoCompleteTextInput
              data={autoCompleteSampleData}
              label="Sample auto suggest"
            ></AutoCompleteTextInput>

            <div className="input-group input-group--has-icon">
              <label>Input With Icon</label>
              <input type="text" />
              <div className="input-icon">
                <svg className="icon">
                  <use xlinkHref="/icons.svg#pencil"></use>
                </svg>
              </div>
            </div>

            
          </div>
        </section>
      </main>
    </React.Fragment>
  );
  }
}

export default Home;
