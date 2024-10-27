const output = document.getElementById('output');
const increment = document.getElementById('increment');
const decrement = document.getElementById('decrement');

let count = 0;

// Function to format the count with leading zeros
function formatCount(num) {
    return num.toString().padStart(2, '0');
}

// Update the output initially
output.innerText = formatCount(count);

increment.addEventListener('click', () => {
    if (count >= 99) {
        count = 99;
    }
    else {
        count++;
    }
    output.innerText = formatCount(count); // Use formatCount to format the output
});

decrement.addEventListener('click', () => {
    if (count > 0) {
        count--;
        output.innerText = formatCount(count); // Use formatCount to format the output
    }
});


output.addEventListener("dblclick", () => {
    count = 0;
    output.innerText = formatCount(count);
});