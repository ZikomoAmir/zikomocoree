function PropertyIconBar(props) {
    return (
      <ul className="card__icon-list">
        <li title="Images">
          <span className={`counter ${props.imageCount === 0 ? "warning" : ""}`}>
            {props.imageCount}
          </span>
          <svg className="icon">
            <use xlinkHref="/icons.svg#image"></use>
          </svg>
        </li>
        <li title="Facilities">
          <span
            className={`counter ${props.facilityCount === 0 ? "warning" : ""}`}
          >
            {props.facilityCount}
          </span>
          <svg className="icon">
            <use xlinkHref="/icons.svg#retro-telephone"></use>
          </svg>
        </li>
        <li title="Room Types">
          <span className={`counter ${props.roomCount === 0 ? "warning" : ""}`}>
            {props.roomCount}
          </span>
          <svg className="icon">
            <use xlinkHref="/icons.svg#bed"></use>
          </svg>
        </li>
        <li title="Board Types">
          <span className={`counter ${props.boardCount === 0 ? "warning" : ""}`}>
            {props.boardCount}
          </span>
          <svg className="icon">
            <use xlinkHref="/icons.svg#cutlery"></use>
          </svg>
        </li>
      </ul>
    );
  }
  
  export default PropertyIconBar;