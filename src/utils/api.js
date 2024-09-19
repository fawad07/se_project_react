
const baseUrl = 'http://localhost:3001';

function getItems() {
    return fetch(`${baseUrl}/items`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    })
    .then((res) => {
        return res.ok ? res.json() : Promise.reject(`Error: ${res.status}`)    
    });
}

function addItem( {name, weather, imageUrl} ){
    return fetch(`${baseUrl}/items`, {
        method: "POST",
        headers:{
             "Content-Type": "application/json"
        },
        body: JSON.stringify({
            name,
            weather,
            imageUrl
        })
    })
    .then((res) => {
        return res.ok ? res.json() : Promise.reject(`Error: ${res.status}`)    
    });
}

function deleteItem(id){
    return fetch(`${baseUrl}/items/${id}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json"
        }
    })
    .then((res) => {
        return res.ok ? res.json() : Promise.reject(`Error: ${res.status}`)    
    });
}

export { getItems, addItem, deleteItem };
