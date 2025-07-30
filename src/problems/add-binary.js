/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    let ai = a.length -1;
    let bi = b.length - 1;

    let overflow = 0;

    let result = "";
    while(ai >= 0 || bi >= 0) {
        const va = Number(a[ai]) || 0;
        const vb = Number(b[bi]) || 0;

        const sum = va + vb + overflow;
        
        if(sum === 0){
            result = "0" + result;
        }else if (sum === 1){
            result = "1" + result;
            overflow = 0;
        }else if (sum === 2){
            result = "0" + result;
            overflow = 1;
        }else{
            result = "1" + result;
            overflow = 1;
        }
        ai--;
        bi--;
    }

    if(overflow){
        result = "1" + result;
    }
    return result;
};

addBinary("11", "1")