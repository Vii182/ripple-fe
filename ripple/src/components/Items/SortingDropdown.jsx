
const SortingDropdown = ({ onSort, sorted, order }) => {
  const handleSortChange = (event) => {
    const newSortField = event.target.value;
    onSort(newSortField, order);
  };

  const handleSortToggle = () => {
    const newOrder = order === "desc" ? "asc" : "desc";
    onSort(sorted, newOrder);
  };

  return (
    <div className="ml-0 sm:ml-4 mt-2 flex items-center space-x-2 justify-center sm:justify-start">
      <select
        value={sorted}
        onChange={handleSortChange}
        className="p-2 bg-accent-light dark:bg-accent-dark text-textPrimary-light dark:text-textPrimary-dark rounded  border border-gray-300 dark:border-gray-800"
      >
        <option value="date_listed">Date Posted</option>
        <option value="item_name">Item Name</option>
      </select>
      <button
        onClick={handleSortToggle}
        className="px-4 py-2 bg-accent-light dark:bg-accent-dark text-textPrimary-light dark:text-textPrimary-dark rounded border border-gray-300 dark:border-gray-800 hover:bg-gray-300 dark:hover:bg-blue-800 transition-all ease-in-out active:bg-orange-700 dark:active:bg-lime-500"
      >
        {order === "desc" ? "Descending" : "Ascending"}
      </button>
    </div>
  );
};

export default SortingDropdown;

