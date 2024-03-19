import { FilterProps } from "./interfaces";

const Filter: React.FC<FilterProps> = ({ handleFilterChange }) => {
  return (
    <div className="filtering-buttons">
        <label className='filtering-buttons-input'>
          <input
            id="1"
            type="radio"
            name="filter"
            value="all"
            onChange={handleFilterChange}
            />
          All
        </label>
        <label className='filtering-buttons-input'>
          <input
            type="radio"
            name="filter"
            value="pending"
            onChange={handleFilterChange}
            />
          Pending
        </label>
        <label className='filtering-buttons-input'>
          <input
            type="radio"
            name="filter"
            value="checked"
            onChange={handleFilterChange}
            />
          Checked
        </label>
    </div>
  );
};

export default Filter;
