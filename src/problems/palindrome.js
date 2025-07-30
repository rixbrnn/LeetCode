function isPalindrome(x) {   
   const ocurrencesByChar = {};
   for(const char of String(x)){
        ocurrencesByChar[char] = ocurrencesByChar[char] ? ocurrencesByChar[char] + 1 : 1;
   }

   let hasOddComponent = false;
   for(const [component, occurrences] of Object.entries(ocurrencesByChar)){
        const isEven = occurrences %2 === 0;
        if(!isEven){
            if(hasOddComponent){
                return false;
            }
            hasOddComponent = true;
        }
   }
   return true;

};

console.log(isPalindrome(121));