/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {

    let positionToInspect = 0;
    let currentChar = null;
    let prefix = "";
    if(strs.length === 1){
        return strs.at(0);
    }
    for(let i=0; i < strs.length;){
        const group = strs[i];
        const char = group.at(positionToInspect)

        if(!char){
            break;
        }

        if(i===0){
            currentChar = char;
            i++;
            continue;
        }


        if(char !== currentChar){
            break;
        }

        if(i === strs.length -1){
            prefix += char;
            positionToInspect++;
            i = 0;
        }else{
            i++;
        }

      }
    

    return prefix;
};

console.log(longestCommonPrefix(["flower","flow","flight"]));