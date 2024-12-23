/* eslint-disable react/prop-types */
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
    updateActiveRating,
  } = props;

  const onEnterSearchInput = (event) => {
    updateSearchText(event.target.value);
  };

  const onEnterClick = (event) => {
    if (event.key === "Enter") {
      triggerSearch();
    }
  };

  const onCategoryClick = (event) => {
    updateActiveCategory(event.target.id);
  };

  const onRatingClick = (event) => {
    updateActiveRating(event.currentTarget.id);

    // TARGET - Target gives you the element where the event exactly happened
    // CURENTTARGET - This gives you the element where the event listener is placed, even if the event happened at one of its child elements
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

      {/* categoryOptions.map(eachObj => {
      const {activeCategoryId} = props
      const isActive = eachObj.categoryId === activeCategoryId
      const categoryClassName = isActive
        ? category-name active-category-name
        : category-name

          className={categoryClassName} */}

      <div className="category-con">
        <h2>Category</h2>
        <ul>
          {categoryOptions.map((eachObj) => {
            const categoryClassName =
              eachObj.categoryID == activeCategoryID
                ? "active-category-name"
                : "";

            return (
              <li
                onClick={onCategoryClick}
                className={categoryClassName}
                id={eachObj.categoryID}
                key={eachObj.categoryID}
              >
                {eachObj.categoryText}
              </li>
            );
          })}
        </ul>
      </div>

      <div className="ratings-con">
        <h2>Ratings</h2>
        <ul>
          {ratingsList.map((eachObj) => (
            <li
              onClick={onRatingClick}
              id={eachObj.ratingID}
              key={eachObj.ratingID}
            >
              <img src={eachObj.imgURL} alt="rating img" />& up
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
};

export default FiltersGroup;
