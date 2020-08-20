const firstRow = 'мама мыла рамуаааааааааааа ';
const secondRow = 'собака друг человекааааа';

function getRow(firstRow, secondRow) {
  let num1 = getCharCount(firstRow);
  let num2 = getCharCount(secondRow);
    
    if (num1 > num2)
    {
        return firstRow
    }
    else {
       return secondRow
    }
    
}

function getCharCount(row){
    let count = 0;
    for (let index = 0; index < row.length; index++) {
        let char = row.charAt(index);
                
        if (char == "а") {
            count++;
        }        
    } 
    return count
}



let str = getRow(firstRow, secondRow)

console.log(str)