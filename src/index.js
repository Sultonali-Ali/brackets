module.exports = function check(str, bracketsConfig) {
    let openings = {
        "(" : ")",
        "{" : "}",
        "[" : ']',
        "1" : "2",
        "3" : "4",
        "5" : "6",
    };
    let closings = [")", "}", "]", "2", "4", "6"];
    let bracketStack = [];

    for(let i = 0; i < str.length; i++) {
        let char = str[i];

        if (openings[char] || char === '|' || char === "7" || char === '8') {
            if (char === '|' || char === "7" || char === '8') {
                if (bracketStack[bracketStack.length - 1] === char) {
                    bracketStack.pop();
                } else {
                    bracketStack.push(char);
                }
            } else {
                bracketStack.push(char);
            }

        } else if (closings.includes(char)) {
            if (bracketStack.length === 0 || (openings[bracketStack.pop()] !== char)) {
                return false;
            }
        }
    }
    return bracketStack.length === 0;
};
