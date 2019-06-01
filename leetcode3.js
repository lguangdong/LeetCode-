/**
 * @param {string} s
 * @return {number}
 */
//滑动窗口思想
var lengthOfLongestSubstring = function(s) {
    let result = 0,map = {},left = 0,tem = 0;
    for(let i = 0;i<s.length;i++){
        const element = s[i];
        if(map[element] == undefined){
            map[element] = i; 
        }else{
            if(map[element] >= left){
                left = map[element] + 1;
            }
            map[element] = i;
        }
        tem = i - left + 1;
        result = tem > result ? tem:result;
    }
    return result;
};