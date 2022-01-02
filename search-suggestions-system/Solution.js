// https://leetcode.com/problems/search-suggestions-system

/**
 * @param {string[]} products
 * @param {string} searchWord
 * @return {string[][]}
 */
var suggestedProducts = function(products, searchWord) {
    products.sort()
    let outputArr = createOutputArr(searchWord)
    for (let i = 0; i < products.length; i++){
        outputArr = helperFunc(products[i],searchWord,outputArr)
    }
    return outputArr
};

const helperFunc = (product, searchWord,outputArr) => {
    for (let i = 0; i < product.length; i++){
        if (product[i] == searchWord[i]){
            if (outputArr[i] && outputArr[i].length != 3){
                outputArr[i].push(product)
            }
            else if (outputArr[i]) continue
            else{
                outputArr.push([product])
            }
        }
        else break
    }
    return outputArr
}

const createOutputArr = (searchWord) => {
    let outputArr = []
    for (let i = 0; i < searchWord.length; i++){
        outputArr.push([])
    }
    return outputArr
}