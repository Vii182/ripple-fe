import { useState, useEffect } from "react";

const categories = [
  { category_id: 1, category_name: "electronics" },
  { category_id: 2, category_name: "home" },
  { category_id: 3, category_name: "fashion" },
  { category_id: 4, category_name: "sports" },
  { category_id: 5, category_name: "books" },
  { category_id: 6, category_name: "toys" },
  { category_id: 7, category_name: "health" },
  { category_id: 8, category_name: "groceries" },
  { category_id: 9, category_name: "automotive" },
  { category_id: 10, category_name: "pets" },
  { category_id: 11, category_name: "shoes" },
];

const ItemForm = ({ onSubmit, user }) => {
  const [formData, setFormData] = useState({
    item_name: "",
    category_id: "",
    user_id: user?.user_id || "",
    description: "",
    image_url: "",
    collection_point: "",
    date_of_expire: "",
    date_listed: new Date().toISOString().slice(0, 16),
  });

  useEffect(() => {
    if (user?.user_id) {
      setFormData((prev) => ({
        ...prev,
        user_id: user.user_id,
      }));
    }
  }, [user]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!user) {
      alert("You must be logged in to post an item!");
      return;
    }
    onSubmit(formData);
  };

  const labelStyle = "block font-medium font-Quicksand font-semibold text-textPrimary-light dark:text-textPrimary-dark mb-1"


  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4 bg-gray-100 dark:bg-border-dark px-8 py-8 rounded-2xl"
    >
      <div>
        <label
          htmlFor="item_name"
          className={labelStyle}
        >
          ITEM NAME
        </label>
        <input
          type="text"
          name="item_name"
          id="item_name"
          value={formData.item_name}
          onChange={handleChange}
          className="w-full px-3 py-2 rounded-md border dark:border-textPrimary-light  dark:bg-gray-500 dark:text-textPrimary-dark"
          required
        />
      </div>

      <div>
        <label
          htmlFor="category_id"
          className={labelStyle}
        >
          CATEGORY
        </label>
        <select
          name="category_id"
          id="category_id"
          value={formData.category_id}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded-md dark:border-textPrimary-light  dark:bg-gray-500 dark:text-textPrimary-dark"
          required
        >
          <option value="" disabled>
            Select a category
          </option>
          {categories.map((category) => (
            <option key={category.category_id} value={category.category_id}>
              {category.category_name}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label
          htmlFor="description"
          className={labelStyle}
        >
          DESCRIPTION
        </label>
        <textarea
          name="description"
          id="description"
          value={formData.description}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded-md dark:border-textPrimary-light  dark:bg-gray-500 dark:text-textPrimary-dark"
          required
        />
      </div>

      <div>
        <label
          htmlFor="image_url"
          className={labelStyle}
        >
          IMAGE URL
        </label>
        <input
          type="url"
          name="image_url"
          id="image_url"
          value={formData.image_url}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded-md dark:border-textPrimary-light  dark:bg-gray-500 dark:text-textPrimary-dark"
        />
      </div>

      <div>
        <label
          htmlFor="collection_point"
          className={labelStyle}
        >
          COLLECTION POINT
        </label>
        <input
          type="text"
          name="collection_point"
          id="collection_point"
          value={formData.collection_point}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded-md dark:border-textPrimary-light  dark:bg-gray-500 dark:text-textPrimary-dark"
          required
        />
      </div>

      <div>
        <label
          htmlFor="date_of_expire"
          className={labelStyle}
        >
          EXPIRY DATE (IF ANY)
        </label>
        <input
          type="datetime-local"
          name="date_of_expire"
          id="date_of_expire"
          value={formData.date_of_expire}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded-md dark:border-textPrimary-light  dark:bg-gray-500 dark:text-textPrimary-dark"
        />
      </div>

      <button
        type="submit"
        className="bg-lime-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
      >
        Submit
      </button>
    </form>
  );
};

export default ItemForm;
