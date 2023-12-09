// ## File cleaner
// Read a file, remove all the extra spaces and write it back to the same file.

// For example, if the file input was
// ```
// hello     world    my    name   is       raman
// ```

// After the program runs, the output should be

// ```
// hello world my name is raman
// ```

const fs = require('fs');

const filePath = "../medium/temp.md"
const content = "Hey I just wrote something in the file..."

const spaceSweeper = (data) => {
    let purifiedData = ''
    let dataChunk = ''
    for(let i = 0; i < data.length; i ++){
        if(data[i] === " "){
            if(dataChunk !== ' ' && dataChunk != ''){
                purifiedData = purifiedData + dataChunk + ' '
                dataChunk = ''
            }
        }else{
            dataChunk = dataChunk + data[i]
        }
    }
    purifiedData += dataChunk

    return purifiedData
}

fs.readFile(filePath, 'utf8', (err, data)=>{
    if(err){
        console.log("error =", err)
    }else{
        console.log("Purified string =", spaceSweeper(data)[0])
    }
})