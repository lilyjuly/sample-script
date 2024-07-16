//Step 1
function hello(){
    document.querySelector("h1").innerHTML = "Welcome to PannaCollege! 2024"
}
//Step 2
function hello(){
    if (document.querySelector("h1").innerHTML === "Hello, Yangon!"){
        document.querySelector("h1").innerHTML = "Welcome to PannaCollege! 2024";
    } else {
        document.querySelector("h1").innerHTML = "Hello, Yangon!";
    }
}
// Step 3
let heading = document.querySelector("h1");
function hello(){
    if(heading.innerHTML === "Hello, Yangon!"){
        heading.innerHTML = "Welcome to PannaCollege! 2024";
    } else {
        heading.innerHTML = "Hello, Yangon!";
    }
}