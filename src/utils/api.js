
const baseUrl = 'http://localhost:3001';


function checkResponse(res){
    return res.ok ? res.json() : Promise.reject(`Error: ${res.status}`); 
}


function getItems() {
    return fetch(`${baseUrl}/items`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    })
    .then(checkResponse);
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
    .then(checkResponse);
}

function deleteItem(id){
    return fetch(`${baseUrl}/items/${id}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json"
        }
    })
    .then(checkResponse);
}

export { getItems, addItem, deleteItem, checkResponse};
