module.exports = function check(str, bracketsConfig) {
    let count = Array(bracketsConfig.length).fill(0);
    
    for (let indArr = 0; indArr < bracketsConfig.length; indArr++) {
        for (let j = 0; j < str.length; j++) {    
            if (str[j] === bracketsConfig[indArr][0]) count[indArr]++;
            if (str[j] === bracketsConfig[indArr][1]) {
                count[indArr]--;
                for (let i = indArr; i < count.length; i++) {
                   if (count[i] !== 0) return false; 
                }
            }
            for (let a of count) {
                if (a < 0) return false;
            }
        }
    }
    for (let a of count) {
        if (a !== 0) return false;
    }
    return true;
    // for (let indArr = 0; indArr < bracketsConfig.length; indArr++) {  
    //   for (let j = 0; j < str.length; j++) {
    //       if (str[j] === bracketsConfig[indArr][0]) count[indArr]++;
    //       if (str[j] === bracketsConfig[indArr][1]) count[indArr]--;
    //       for (let a of count) {
    //           if (a < 0) return false;
    //       }
    //   }
    // i      
    // return true;

}
