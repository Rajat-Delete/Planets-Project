const {parse} = require('csv-parse');
const fs = require('fs');

const results = [];
fs.createReadStream('kepler_data.csv')
.pipe(parse({
    comment : '#',
    columns : true
}))
.on('data',(chunk)=>{
    results.push(chunk);
})
.on('error', (err)=>{
    console.log('An Error Occured while reading the data',err);
})
.on('end',()=>{
    console.log('Data readed from file is',results);
    console.log('All of the data has been read from file')
})


