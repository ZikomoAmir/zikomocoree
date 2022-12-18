import React,{Component,useState} from 'react'
import useModal from '../../lib/modal/useModal'
import Modal from '../../lib/modal'
import ModalBody from '../../lib/modal/modalbody'
import ModalFooter from '../../lib/modal/modalfooter'


class NewHotel extends Component{

    constructor(){
        super()
        this.state={
            propertyName:'',
            propertyLocation:"",
            propetyContinment:"",
            openModal:false
        }
    }

    handleChange(key,val){

        this.setState({
            ...this.state,
            [key]:val
        })

    }


    handleModal(val){
        this.handleChange('openModal',val)
    }

    render(){
        return(
            <>
              <button className="btn" onClick={()=>this.handleModal(true)}>
                  Add a Property
              </button>
              <Modal 
              isOpen={this.state.openModal}
              handleOpen={(val)=>this.handleModal(val)}
              title={"Add Property"}
              >
                <ModalBody>
          <form >
            <section className="centered">
              <div className="button-group button-group--pill">
                <button type="button" className="btn btn-success">
                  Manual
                </button>
                <button type="button" className="btn btn-light">
                  Import
                </button>
              </div>
            </section>

            <section>
              <div>
                <div className="input-group input-group--full-width">
                  <label>Property name</label>
                  <input type="text"
                    value={this.state.propertyName}
                    id="txtPname"
                    name="txtPname"
                    onChange={(e)=>this.handleChange('propertyName',e.target.value)}
                    placeholder="Enter Property Name"></input>
                </div>
              </div>

              <div>
                <div className="input-group input-group--full-width">
                  <label>Location</label>
                  <input type="text"
                  value={this.state.propertyLocation}
                  id="txtAddress"
                  name="txtAddress"
                  onChange={(e)=>this.handleChange('propertyLocation',e.target.value)}
                   placeholder="Enter Address"></input>
                </div>
              </div>
              <div>
                <div className="input-group input-group--full-width">
                <label>Continent</label>
                  <select id="txtCon" 
                  name="txtCon" 
                  /*onChange={handleInputChange}*/>
                    <option value="-1">--Select--</option>
                    {/*
                      continentdata.map(item => (
                        <option
                        key={item.itemID}
                        value={item.continentID}
                      >
                        {item.continentName}
                      </option>
                      ))*/
                    }
                  </select>
                 
                </div>
              </div>
            </section>
          </form>
        </ModalBody>

        <ModalFooter>
          <button
            type="button"
            className="btn btn--grey"
            value="Cancel"
            onClick={()=>this.handleChange('openModal',false)}
          >
            Cancel
          </button>
          <input
            type="submit"
            className="btn-cancel btn btn-success"
            value="Add"
           // onClick={onSubmits}
          ></input>
        </ModalFooter>
              </Modal>
            </>
        )
    }


}

export default NewHotel