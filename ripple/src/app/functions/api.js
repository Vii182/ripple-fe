import axios from "axios";

const baseUrl = "https://ripple-be.onrender.com/api";

function getItems(category = null, sorted = "date_listed", order = "desc") {
    const params = { sorted, order };
    if (category) {
        params.category = category;
    }
    return axios.get(`${baseUrl}/items`, {params})
    .then(({ data }) => {
        const items = data.items;
        return items;
    }).catch((err) => {
        console.error("Error Retrieving Items", err);
        throw err;
    });
}

export { getItems }