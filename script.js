// Step 1 Getting Connection
//alert("welcome!");

/*
// Step 2 
var counter = 0;
//counter = counter + 1;
counter += 1;
alert(counter);
*/

//Step 3 
//let counter = 0;
//counter = counter + 1;
//counter += 1;

// function count(){
//     counter++;
//     document.querySelector('h1').innerHTML = counter;

//     if (counter % 10 === 0) {
//         alert(`သိပ်တော်တာပဲ အခုနံပါတ်က ${counter}`);
//     }

// }

// Step 4
let counter = 0;

function count(){
    counter++;
    document.querySelector('h1').innerHTML = counter;

    if (counter % 10 === 0) {
        alert(`သိပ်တော်တာပဲ အခုနံပါတ်က ${counter}`);
    }
}
document.addEventListener
('DOMContentLoaded', function() {
    document.querySelector('button').onclick = count;
}
)
