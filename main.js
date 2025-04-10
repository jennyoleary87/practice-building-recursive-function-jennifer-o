/*
04/09/25
Functions and Scope - 4 Practice: Building a Recursive Function
-------------------------
Tasks
1. Write a function named reverseString that takes a string as input.
2. The function should:
    ○ Return the string itself if it contains only one character (base case).
    ○ Use recursion to reverse the string by concatenating the last character
        of the string with the result of the recursive call on the remaining 
        part of the string (recursive case).
3. Test the function with various string inputs to verify its correctness.
---------------------------
EXAMPLE INPUTS AND OUTPUTS
reverseString("hello"); // Outputs: "olleh"
reverseString("recursion"); // Outputs: "noisrucer"
reverseString("a"); // Outputs: "a"
reverseString(""); // Outputs: ""
*/

function reverseString(string) {
    if (string.length >= 1) {
        return string[string.length - 1] + reverseString(string.slice(0, -1));
        // [string.length - 1] for the last character of the string
        // (string.slice(0, -1)) --> .slice(start, end) ; negative counts from the end (-1 is the last character)
    }
    return string;
}

console.log(reverseString("kite")); // etik
console.log(reverseString("complete")); // etelpmoc
console.log(reverseString("i")); // i
console.log(reverseString("Eye")); // eyE

