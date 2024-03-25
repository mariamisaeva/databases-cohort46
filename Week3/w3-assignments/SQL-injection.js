function getPopulation(Country, name, code, cb) {
    // assuming that connection to the database is established and stored as conn
    conn.query(
        //  `SELECT Population FROM ${Country} WHERE Name = '${name}' and code = '${code}'`,
        `SELECT Population FROM ${Country} WHERE Name = ? AND code = ? `, //used placeholder '?'
        [name, code], //used input array
        function (err, result) {
            if (err) cb(err);
            if (result.length == 0) cb(new Error("Not found"));
            cb(null, result[0].Population);
        }
    );
}
