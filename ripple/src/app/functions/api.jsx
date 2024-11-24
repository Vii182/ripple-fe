import axios from "axios";
import { useState } from "react";


const baseUrl = "https://ripple-be.onrender.com/api";

function getItems(category = null, sorted = "date_listed", order = "desc") {
    const userLocation = {};
    const params = { sorted, order };
    if (category) {
        params.category = category;
    } 
    if (sorted === "distance") {
        navigator.geolocation.getCurrentPosition((position) => {
          userLocation.lat = position.coords.latitude;
          userLocation.long = position.coords.longitude;
        });
        params.userLocation = userLocation;
      }
    console.log(userLocation);

    console.log(params)
    return axios.get(`${baseUrl}/items`, {params})
    .then(({ data }) => {
        console.log(data);
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

export { getItems, getItemById, getUserbyUsername, postItem, addUser, getFoodBanks }