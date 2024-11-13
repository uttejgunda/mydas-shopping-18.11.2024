import { BsFilterRight } from "react-icons/bs";
import "./index.css";

const ProductsHeader = (props) => {
  const { sortByOptions, activeOptionID, updateActiveOption } = props;

  const onUpdateActiveOption = (event) => {
    updateActiveOption(event.target.value);
  };

  return (
    <div className="products-header-con">
      <h1>All Products</h1>

      <div className="sort-by-con">
        <BsFilterRight className="filter-icon" />
        <h3>Sort by</h3>
        <select onChange={onUpdateActiveOption} value={activeOptionID}>
          {sortByOptions.map((eachObj) => (
            <option key={eachObj.optionID} value={eachObj.optionID}>
              {eachObj.displayText}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default ProductsHeader;
