import React,{Component} from 'react'
import NewHotel from '../newHotel/newHotel'


class PropertieList extends Component{

    constructor(){

        super()
        this.state={
             viewTotal:0,
             total:0,
             editData:{},
             hotelData:[],
             pageData:[],
             load:true,
             typePageData:0,
             hotelNameData:'',
             selectOption:null,
             selectOption1:null,
             isListView:false,
             showBulkAction:false,
             checlProperties:[],
             starData:0,
             page:1
        }

    }


    handleChange(key,val){

        this.setState({
            ...this.styate,
            [key]:val
        })

    }

    componentDidMount(){

        //call data hotel data api 

        //set hotelData

    }


    hotelsByType(){

        //call api by hotel type

        //set res as hotel Data

    }


    hotelsByLocation(){

        // call api by hotel location

        //ser res as hotel data

    }


    hotelsByStarRating(starRate){

         // api call 

         // return data set as hotel Data

    }

    render(){

        return(
            <>
            
    <main>
      {load ? <div className="loader"></div> : <></>}
      <section> 
            <div className="filter">
              <div className="input-group">
                <label>Search Properties</label>
               {/*
               third paerty lib component
               <Select 
                options={option1}
                onChange={setSelectedOption1}
                onBlur={namelocationFilterHandler}
                isClearable
        />*/}
             </div>
            </div> 
      </section>

      <section className="flexbox flexbox--distribute">
        <h2>
          Viewing <span className="text-brand">{viewtotal}</span> of{" "}
          <span className="text-light">{total}</span> Properties
        </h2>
        <NewHotel/>
      </section>

      <section className="flexbox flexbox--distribute">
        <div className="context-menu">
          <span>{checkedProperties.length} Selected &nbsp;</span>
          <button
            className={`btn btn--transparent-dark ${
              checkedProperties.length <= 0 ? "btn--disabled" : ""
            }`}
            onClick={handleToggleBulkActionsMenu}
          >
            <svg className="icon">
              <use xlinkHref="/icons.svg#dots-vertical"></use>
            </svg>
          </button>

          {showBulkContextMenu && checkedProperties.length > 0 && (
            <BulkActionsContextMenu
              activateCheckedProperties={null}
              toggleActiveCheckedProperties={null}
              hideMenu={handleToggleBulkActionsMenu}

            ></BulkActionsContextMenu>
          )}
        </div>
         <StarRatingSelector></StarRatingSelector>

         <div className="switch-group">
                <label
                  className="switch"
                  htmlFor={`checkbox${props.detail}`}
                >
                  <input
                    type="checkbox" checked 
                    id={`checkbox${props.detail}` }
                  />
                  <div className="slider round"></div>
                </label>
              </div>

         <div className="filter">
          <div className="input-group">
            <label>Property Type</label>
            <Select
              options={option}
               onChange={setSelectedOption}
               onBlur={typeFilterHandler}
               isClearable
            />
          </div>
          </div>

        <div className="input-group">
          <label>Sort By</label>
          <input type="text" placeholder="Placeholder"></input>
        </div>
      </section>

      <div className="button-group button-group--pill">
          <button
            id="viewToggle"
            onClick={viewToggleListViewHandler}
            className={`btn ${isListView ? "btn--brand" : "btn--white"}`}
          >
            <svg className="icon">
              <use xlinkHref="/icons.svg#list"></use>
            </svg>
          </button>

          <button
            id="viewToggle"
            onClick={viewToggleGridViewHandler}
            className={`btn ${isListView ? "btn--white" : "btn--brand-1"}`}
          >
            <svg className="icon">
              <use xlinkHref="/icons.svg#table"></use>
            </svg>
          </button>
        </div>

      <section
        className={`card-container card-container--stretch card-container--properties ${
          isListView ? "list" : ""
        }`}
      >
        <ul>
          {pageData.results ? (
            pageData.results.map((val, index) => {
              console.log(val);
              return (
                <li>
                  <PropertyCard
                    detail={val}
                    key={index}
                    handleCheckboxToggle={handleCheckedProperty}
                  />
                </li>
              );
            })
          ) : (
            <p>No data available.</p>
          )}
        </ul>
    
      </section>
       <div>  
           <button
            id="viewToggle"
            onClick={() => {setPage(page-1);setLoad(true)}}
            className={`btn   "}`} 
            style={{float:"left",marginLeft:"10px"}}
          > Prev
          </button>
          <button
            id="viewToggle"
            onClick={() => {setPage(page+1);setLoad(true)}}
            className={`btn "}`}
            style={{float:"left",marginLeft:"10px"}}
          > Next
          </button>
       </div>

      {/* {newHotel ? <NewHotel close={setNewHotel} text="Close Me" /> : null} */}
    </main>
            </>
        )

    }

}

export default PropertieList