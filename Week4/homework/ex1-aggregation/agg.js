require('dotenv').config();
const { MongoClient } = require('mongodb');

const URI = process.env.DB_URI;

//Print data (to make sure it works)
const printData = async (collection) => {

    const result = await collection.find().toArray();
    console.log(result);

    // const res = collection.find();
    // await res.forEach((item) => console.log(item)); //print full data
};


//Get total population by year
const totalPopulationByYear = async (co, country) => {

    const pipeline = [ //used MongoDB Compass
        { //match stage
            $match: {
                Country: country,
            }
        },
        {  //group stage
            $group: {
                _id: "$Year",
                countPopulation: {
                    $sum: {
                        $add: ["$M", "$F"]
                    }
                }
            }
        },
        { //sort stage
            $sort: {
                _id: 1
            }
        }

    ];


    const result = await co.aggregate(pipeline).toArray();
    console.log(result);
};

//Get continent Info by year and age  
const ConInfoByYearAge = async (collection, year, age) => {
    const pipeline = [
        { //match stage
            $match: {
                Year: 2020, Age: "100+"
            }
        },
        {  //addFields stage
            $addFields: {
                TotalPopulation: {
                    $sum: {
                        $add: ["$F", "$M"]
                    }
                }
            }
        },
        {
            $match: {
                Country: {
                    $in: ['EUROPE', 'AFRICA', 'ASIA', 'AUSTRALIA', 'LATIN AMERICA AND THE CARIBBEAN', 'NORTHERN AMERICA', 'OCEANIA']
                }
            }
        }
    ];

    const results = await collection.aggregate(pipeline).toArray();
    console.log(results);
};


async function main() {

    const client = new MongoClient(URI);

    try {
        await client.connect();

        const database = client.db('databaseWeek4');
        const collection = database.collection('population');




        // await printData(collection);

        //Invoke totalPopulationByYear 
        const countryName = "Netherlands";
        //  await totalPopulationByYear(collection, countryName);

        //Invoke ConInfoByYearAge
        await ConInfoByYearAge(collection, 2020, "100+");


    } finally {
        await client.close();
    }


}
main().catch(console.error);
