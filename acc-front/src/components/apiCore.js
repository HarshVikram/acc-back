import { API } from "../config";

export const formSubmit = data => {
    return fetch(`http://localhost:8000/form`, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
        .then(response => {
            return response.json();
        })
        .catch(err => {
            console.log(err);
        });
}


export const getProducts = (sortBy) => {
    return fetch(`http://localhost:8000/products?sortBy=${sortBy}&order=desc&limit=6`, {
        method: 'GET'
    })
    .then(response => {
        return response.json();
    })
    .catch(err => {
        console.log(err);
    })
}

export const getCategories = () => {
   return fetch(`http://localhost:8000/categories`, {
        method: 'GET'
    })
    .then(response => {
        return response.json();
    })
    .catch(err => {
        console.log(err);
    })
}

export const getFilteredProducts = (skip, limit, filters = {}) => {
    const data = { limit, skip, filters }
    return fetch(`http://localhost:8000/products/by/search`, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
        .then(response => {
            return response.json();
        })
        .catch(err => {
            console.log(err);
        });
}

export const read = productId => {
    return fetch(`http://localhost:8000/product/${productId}`, {
        method: "GET"
    })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
}

export const listRelated = productId => {
    return fetch(`http://localhost:8000/products/related/${productId}`, {
        method: "GET"
    })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
}