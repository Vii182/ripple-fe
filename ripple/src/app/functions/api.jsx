import axios from "axios";


const baseUrl = "https://ripple-be-820b.onrender.com/api";

function getItems(category = null, sorted = "date_listed", order = "desc", long = null, lat = null) {
    const params = { sorted, order, long, lat };
    
    if (category) {
        params.category = category;
    }

    if (sorted === "distance"){
        params.long = -3.6240035
        params.lat = 51.7468088
    }

    return axios.get(`${baseUrl}/items`, {params})
    .then(({ data }) => {;
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

function getFoodBanks(){
    return axios.get('https://www.givefood.org.uk/api/2/foodbanks/').then(({ data }) => {
      return data;
    }).catch((err) => {
      console.error("Error fetching Foodbanks", err);
      throw err;
    });
  };

function reserveItem(item,user_id){
    item.reserved_for_id= user_id;
    item.reserve_status=true;
      return axios.patch(`${baseUrl}/items/${item.item_id}`, item).then(({ data }) => data)
    .catch((err) => {
        console.error("Error posting Item!", err);
        throw err;
    });

}
function deleteItem (item_id){
     return axios.delete(`${baseUrl}/items/${item_id}`).then(({ data }) => data)
    .catch((err) => {
        console.error("Error posting Item!", err);
        throw err;
    });

}

function  fetchLocationMap(url){
        return  axios.get(url).then(({data})=>{
               return data
        }).catch((err)=>{
            throw err;
        })
}
export { getItems, getItemById, getUserbyUsername, postItem, addUser, getFoodBanks,reserveItem,deleteItem ,fetchLocationMap}