import { FiSearch } from "react-icons/fi";
import "./index.css";

const FiltersGroup = (props) => {
  const {
    categoryOptions,
    activeCategoryID,
    updateActiveCategory,
    searchText,
    updateSearchText,
    triggerSearch,
    ratingsList,
  } = props;

  const onEnterSearchInput = (event) => {
    updateSearchText(event.target.value);
  };

  const onEnterClick = (event) => {
    if (event.key === "Enter") {
      triggerSearch();
    }
  };

  const onCategoryClick = (event.target) => {
    updateActiveCategory();
  };

  return (
    <aside>
      <div className="search-box">
        <input
          onChange={onEnterSearchInput}
          onKeyDown={onEnterClick}
          value={searchText}
          type="search"
          placeholder="Search"
        />
        <FiSearch className="search-icon" />
      </div>

      <div className="category-con">
        <h2>Category</h2>
        <ul>
          {categoryOptions.map((eachObj) => (
            <li
              onClick={onCategoryClick}
              value={activeCategoryID}
              key={eachObj.categoryID}
            >
              {eachObj.categoryText}
            </li>
          ))}
        </ul>
      </div>

      <div className="ratings-con">
        <h2>Ratings</h2>
        <ul>
          {ratingsList.map((eachObj) => (
            <li key={eachObj.ratingID}>
              <img src={eachObj.imgURL} alt="rating img" />& up
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
};

export default FiltersGroup;
