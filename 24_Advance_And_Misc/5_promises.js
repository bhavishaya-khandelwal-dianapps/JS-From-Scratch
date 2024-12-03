// let reseltFromServer = await fetch("https://jsonplaceholder.typicode.com/posts/");



(async function getData() {
    let response = await fetch("https://jsonplaceholder.typicode.com/posts/");
    console.log(response);
    let data = await response.json();
    console.log(data);
})();




fetch("https://jsonplaceholder.typicode.com/posts/").then((value) => {
    console.log(value);
    return value;
}).then((val) => {
    console.log(val.json());
    return val.json();
}).catch((error) => {
    console.log(error);
}).finally(() => {
    console.log("Running");
})