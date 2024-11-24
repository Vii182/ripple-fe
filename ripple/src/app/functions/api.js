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
};

function getItemById(item_id) {
    return axios.get(`${baseUrl}/items/${item_id}`).then(({ data }) => {
        const item = data.item;
        return item;
    }).catch((err) => {
        console.error("Error fetching Item", err);
        throw err;
    });
}

function getUserbyUsername(username) {
    return axios.get(`${baseUrl}/users/${username}`).then(({ data }) => {
        const user = data.user;
        return user;
    }).catch((err) => {
        console.error("Error fetching User", err);
        throw err;
    });
}

function postItem(itemData) {
    return axios.post(`${baseUrl}/items`, itemData).then(({ data }) => data)
    .catch((err) => {
        console.error("Error posting Item!", err);
        throw err;
    });
}

function addUser(userData) {
    return axios.post(`${baseUrl}/users`, userData);
}

export { getItems, getItemById, getUserbyUsername, postItem, addUser }