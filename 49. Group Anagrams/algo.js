/**
 * @param {string[]} strs
 * @return {string[][]}
 */
 var groupAnagrams = function(stringsArray) {

    
    let obj = {};
    for(i = 0; i < stringsArray.length; i++)
        {

            let sortedArray = stringsArray[i].split('').sort().join('');
            if(obj[sortedArray]) {
                obj[sortedArray].push(stringsArray[i]); 
            }
            else {
                obj[sortedArray] = [stringsArray[i]];
            }
        }
    return Object.values(obj);
    
};