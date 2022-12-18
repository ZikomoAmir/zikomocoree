import { useState } from "react";

const AutoCompleteTextInput = ({ data, ...props }) => {
  const [suggestions, setSuggestions] = useState([]);
  const [suggestionIndex, setSuggestionIndex] = useState(0);
  const [suggestionsActive, setSuggestionsActive] = useState(false);
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    const query = e.target.value.toLowerCase();
    setValue(query);
    if (query.length > 1) {
      const filterSuggestions = data.filter(
        (suggestion) => suggestion.label.toLowerCase().indexOf(query) > -1
      );
      setSuggestions(filterSuggestions);
      setSuggestionsActive(true);
    } else {
      setSuggestionsActive(false);
    }
  };

  const handleClick = (e) => {
    setSuggestions([]);
    setValue(e.target.innerText);
    setSuggestionsActive(false);
  };

  const handleKeyDown = (e) => {
    // UP ARROW
    if (e.keyCode === 38) {
      if (suggestionIndex === 0) {
        return;
      }
      setSuggestionIndex(suggestionIndex - 1);
    }
    // DOWN ARROW
    else if (e.keyCode === 40) {
      if (suggestionIndex - 1 === suggestions.length) {
        return;
      }
      setSuggestionIndex(suggestionIndex + 1);
    }
    // ENTER
    else if (e.keyCode === 13) {
      setValue(suggestions[suggestionIndex]);
      //  props.setTypeId(suggestionIndex );
      //      props.setSuggetion( value);
      setSuggestionIndex(0);
      setSuggestionsActive(false);
    }

    //ESCAPE
    else if (e.key === "Escape") {
      //    props.setTypeId(suggestionIndex );
      //  props.setSuggetion( value);

      setSuggestionsActive(false);
    }
  };

  const Suggestions = () => {
    return (
      <ul className="autocomplete-suggestions">
        {suggestions.map((suggestion, index) => {
          return (
            <li
              className={index === suggestionIndex ? "active" : ""}
              key={index}
            >
              <button onClick={handleClick}>{suggestion.label}</button>
            </li>
          );
        })}
      </ul>
    );
  };

  return (
      <div className="input-group input-group--has-icon">
        <label>{props.label}</label>
        <input
          type="text"
          value={value}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
        />
        <div className="input-icon">
          <svg className="icon">
            <use xlinkHref="/icons.svg#search"></use>
          </svg>
        </div>

        {suggestionsActive && <Suggestions />}
      </div>
  );
};

export default AutoCompleteTextInput