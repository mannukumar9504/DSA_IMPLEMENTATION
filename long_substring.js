const lengthOfLongestSubstring = (s) => {
    let chars = [];

    let left = 0;
    let right = 0;

    let res = 0;
    while (right < s.length) {
        let r = s[right];
        chars[r]++;  ///checking for duplicate counter

        while (chars[r] > 1) {
            let l = s[left];
            chars[l]--;
            left++;
        }

        res = Math.max(res, right - left + 1);

        right++;

    }
    return res;
}


console.log("longest substring====>", lengthOfLongestSubstring("pwabwkew"));