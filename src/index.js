module.exports = function check(str, bracketsConfig) {
    let newStr = '';
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        for (let indArr = 0; indArr < bracketsConfig.length; indArr++) {
            if (str[i] === bracketsConfig[indArr][0] && bracketsConfig[indArr][1] !== bracketsConfig[indArr][0]) {
                newStr += str[i];
                count++;
                
            }

            if (str[i] === bracketsConfig[indArr][1] && bracketsConfig[indArr][1] !== bracketsConfig[indArr][0]) {
                count--;
                if (newStr[newStr.length - 1] !== bracketsConfig[indArr][0]) {
                    return false;
                } 
                newStr = newStr.slice(0, -1);

            }
            if (str[i] === bracketsConfig[indArr][0] && bracketsConfig[indArr][1] === bracketsConfig[indArr][0]) {
                
                if (newStr[newStr.length - 1] !== bracketsConfig[indArr][0]) {
                    newStr += str[i];
                    count++;
                    break    
                }

                if (newStr[newStr.length - 1] === bracketsConfig[indArr][0]) {
                    newStr = newStr.slice(0, -1);
                    count--;

                }
                
            }
            if (count < 0) return false;
        }
    }

    return (!count);
}
