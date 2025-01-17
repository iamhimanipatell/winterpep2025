function longestSubString(s) {
    let charSet = new Set();
    let left = 0;
    let maxLength = 0;
    let result = "";

    for (let right = 0; right < s.length; right++) {
        while (charSet.has(s[right])) {
            charSet.delete(s[left]);
            left++;
        }
        
        charSet.add(s[right]);
        
        if (right - left + 1 > maxLength) {
            maxLength = right - left + 1;
            result = s.slice(left, right + 1);
        }
    }
    
    return result;
}

const str = "abcabcbb";
const answer = longestSubString(str);
console.log("Longest Substring Without Repeating Characters:", answer);
