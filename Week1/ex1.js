const util = require('util');
const mysql = require('mysql');
require('dotenv').config();


const con = mysql.createConnection({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD
});

const execQuery = util.promisify(con.query.bind(con));
const seedDatabase = async () => {
    const CREATE_INVITEE_TABLE =
        `CREATE TABLE IF NOT EXISTS invitee (
         invitee_no INT AUTO_INCREMENT PRIMARY KEY,
         invitee_name VARCHAR(100),
         invited_by VARCHAR(100))`;

    const CREATE_ROOM_TABLE =
        `CREATE TABLE IF NOT EXISTS room (
           room_no INT AUTO_INCREMENT PRIMARY KEY,
           room_name VARCHAR(100),
           floor_number SMALLINT DEFAULT NULL)`;

    const CREATE_MEETING_TABLE =
        `CREATE TABLE IF NOT EXISTS meeting (
         meeting_no INT AUTO_INCREMENT PRIMARY KEY,
         meeting_title VARCHAR(255),
         starting_time DATETIME DEFAULT CURRENT_TIMESTAMP,
         ending_time DATETIME DEFAULT CURRENT_TIMESTAMP,
         room_no INT,
         FOREIGN KEY (room_no) REFERENCES room(room_no)
         )`;

    const invitees = [
        { invitee_name: 'Ben', invited_by: 'John' },
        { invitee_name: 'Jane', invited_by: 'John' },
        { invitee_name: 'Mark', invited_by: 'John' },
        { invitee_name: 'Sara', invited_by: 'Ivan' },
        { invitee_name: 'Mike', invited_by: 'David' }
    ];

    const rooms = [
        { room_name: 'Room 1', floor_number: 1 },
        { room_name: 'Room 2', floor_number: 1 },
        { room_name: 'Room 3', floor_number: 2 },
        { room_name: 'Room 4', floor_number: 2 },
        { room_name: 'Room 5', floor_number: 3 }
    ];

    const meetings = [
        { meeting_title: 'Meeting 1', starting_time: '2024-02-01 10:00:00', ending_time: '2024-02-01 11:00:00', room_no: 1 },
        { meeting_title: 'Meeting 2', starting_time: '2024-02-01 12:00:00', ending_time: '2024-02-01 13:00:00', room_no: 2 },
        { meeting_title: 'Meeting 3', starting_time: '2024-02-01 14:00:00', ending_time: '2024-02-01 15:00:00', room_no: 3 },
        { meeting_title: 'Meeting 4', starting_time: '2024-02-01 16:00:00', ending_time: '2024-02-01 17:00:00', room_no: 4 },
        { meeting_title: 'Meeting 5', starting_time: '2024-02-01 18:00:00', ending_time: '2024-02-01 19:00:00', room_no: 5 }
    ];



    try {
        await execQuery(`CREATE DATABASE IF NOT EXISTS meetup`);
        await execQuery(`USE meetup`);
        execQuery(CREATE_INVITEE_TABLE);
        execQuery(CREATE_ROOM_TABLE);
        execQuery(CREATE_MEETING_TABLE);

        await Promise.all(
            invitees.map(inv => {
                execQuery(`INSERT INTO invitee SET ?`, inv)
            }
            )
        );

        await Promise.all(
            rooms.map(r => {
                execQuery(`INSERT INTO room SET ?`, r)
            }
            ));

        await Promise.all(
            meetings.map(m => {
                execQuery('INSERT INTO meeting SET ?', m)
            }
            )
        );

        //let result = await execQuery(`SELECT * FROM meeting INNER JOIN room ON meeting.room_no = room.room_no`);
        // console.log(result);


    } catch (err) {
        console.error('Error:', err);
    } finally {
        con.end(err => {
            if (err) {
                console.error('Error closing database connection', err);
            } else {
                console.log('Database connection closed');
            }
        });
    }

};

seedDatabase();

