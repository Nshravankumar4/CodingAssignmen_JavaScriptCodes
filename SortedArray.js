const input = prompt("Enter a list of numbers separated by commas (e.g., 5, 2, 9, 1, 5, 6):");
const numbers = input.split(',').map(Number);

if (numbers.length > 0) {
    numbers.sort((a, b) => b - a);
    console.log("Sorted Array in Descending Order:", numbers);
} else {
    console.log("No input provided or invalid input.");
}
/*Enter a list of numbers separated by commas (e.g., 5, 2, 9, 1, 5, 6):1, 2, 3, 5
Sorted Array in Descending Order: [ 5, 3, 2, 1 ]*/