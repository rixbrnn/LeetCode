var romanToInt = function(s) {

    const exceptions = {
        "IV": 4,
        "IX": 9,
        "XL": 40,
        "XC": 90,
        "CD": 400,
        "CM": 900,
    }
    const simpleValues = {
        "I": 1,
        "V": 5,
        "X": 10,
        "L": 50,
        "C": 100,
        "D": 500,
        "M": 1000
    }
    let sum = 0;
    for(let i=0; i < s.length; i++){
        const current = s[i];
        const next = s[i + 1];
        const currentAndNext = current + next;

        const isException = next && exceptions[currentAndNext] != undefined;
        if(isException){
            sum += exceptions[currentAndNext];
            i++;
        }else{
            sum += simpleValues[current];
        }
        
    }
    return sum;
};

console.log(romanToInt("LVIII"));