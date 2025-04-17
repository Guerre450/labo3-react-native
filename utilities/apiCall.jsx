export function postData(data,location){
    const url = "http://10.10.23.224:5000/" + location;
    fetch(url, {
        method: "POST",
        headers: {"Content-Type" : "application/json",},
        body: JSON.stringify(data)
    }).then(response => response.json())
    .then(data => {console.log('Success',data);})
    .catch((error) => {console.error('Error:', error)});

}

const buttonClicks = {
    "backward":0,
    "forward":0,
    "high":0,
    "low":0,
    "next":0,
    "play/pause":0,
    "previous":0,
    "slider":0}