const {parse} = require('csv-parse');
const fs = require('fs');


const results = [];
const habitablePlanets = [];


//function to find habitable planets based on some checks from Googling ie. Temperature,flux and status of planet.
function ishabitablePlanet(planet){
    return planet['koi_disposition'] === 'CONFIRMED' 
    &&     planet['koi_insol'] > 0.36 
    &&     planet['koi_insol'] < 1.11 
    &&     planet['koi_prad'] < 1.6;
}



fs.createReadStream('kepler_data.csv')
.pipe(parse({
    comment : '#',
    columns : true
}))
.on('data',(chunk)=>{
    if(ishabitablePlanet(chunk)){
        habitablePlanets.push(chunk);
    }
})
.on('error', (err)=>{
    console.log('An Error Occured while reading the data',err);
})
.on('end',()=>{
    console.log(`${habitablePlanets.length} habitable planets found!!`)
    //console.log('Data readed from file is',results);
    console.log('Habitable Planets Namer are',habitablePlanets.map((planets)=>{
        return planets['kepler_name'];
    }));
    console.log('All of the data has been read from file')
})


