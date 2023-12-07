class Solution {
    isValid(s) {
        const stack = []; // create an empty stack
        const openingChars = ['(', '{', '['];
        const closingChars = [')', '}', ']'];

        for (const c of s) { // loop through each character in the string
            if (openingChars.includes(c)) { // if the character is an opening parenthesis, brace, or bracket
                console.log("c = ", c)
                const correspondingClosingChar = closingChars[openingChars.indexOf(c)];
                stack.push(correspondingClosingChar); // push the corresponding closing character onto the stack
            } else if (closingChars.includes(c)) { // if the character is a closing parenthesis, brace, or bracket
                // if the stack is empty or the top of the stack does not match the closing character,
                // the string is not valid, so return false
                if (stack.length === 0 || stack.pop() !== c) {
                    return false;
                }
            }
            console.log("stacl =", stack)

        }

        // if the stack is empty, all opening characters have been matched with their corresponding closing characters,
        // so the string is valid, otherwise, there are unmatched opening characters, so return false
        return stack.length === 0;
    }
}

// Example usage:
const solution = new Solution();
console.log(solution.isValid('10 + (2 + 3'))
// console.log(solution.isValid('10 + 2) + 3'))
// console.log(solution.isValid(')10 + 2('))
// console.log(solution.isValid("()")); // true
// console.log(solution.isValid("()[]{}")); // true
// console.log(solution.isValid("(]")); // false
// console.log(solution.isValid("([)]")); // false
// console.log(solution.isValid("{[]}")); // true
