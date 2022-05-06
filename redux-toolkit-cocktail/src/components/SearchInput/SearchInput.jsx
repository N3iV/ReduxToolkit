import { useRef } from "react";
import { useDispatch } from "react-redux";
import { fetchSearch } from "../../redux/features/cocktailSlice";
import "./SearchInput.css";
const SearchInput = () => {
  const searchVal = useRef();
  const dispatch = useDispatch();
  const handleChange = () => {
    const searchText = searchVal.current.value;
    console.log(searchText);
    dispatch(fetchSearch(searchText));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("hehe");
  };
  return (
    <section className="section search">
      <form className="search-form" onClick={handleSubmit}>
        <div className="form-control">
          <label htmlFor="name">Search Cocktail</label>
          <input
            type="text"
            name="name"
            id="name"
            ref={searchVal}
            onChange={handleChange}
          />
        </div>
      </form>
    </section>
  );
};

export default SearchInput;
