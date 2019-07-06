import axios from 'axios';

const urlCategories = `http://192.168.6.178:4000/categories`;

export const getCategories = () => {
    return {
        type: 'GET_CATEGORIES',
        payload: axios.get(urlCategories)
    }
};

export const addCategory = (data) => {
    return {
        type: "ADD_CATEGORY",
        payload: axios.post(urlCategories, data)
    }
}