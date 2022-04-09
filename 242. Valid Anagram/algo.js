/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
 var isAnagram = function(s, t) {
    const splitS = s.split('');
    const splitT = t.split('');
    // console.log(splitS, splitT)
    var sortedAnagram = splitS.sort().join();
    var sortedAnagram2 = splitT.sort().join();
    console.log(sortedAnagram, sortedAnagram2);
    if(sortedAnagram === sortedAnagram2){
       return true;
       }
    else {
        return false;
    }
};