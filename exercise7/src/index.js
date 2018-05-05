// var mysql = require('mysql')
// var connection = mysql.createConnection({
// 	host: 'localhost',
// 	user: 'root',
// 	password: 'root',
// 	database: 'TicketInfo'
// })

// connection.connect()

// var sql = 'SELECT * FROM info'

// connection.query(sql, function (err, result) {
// 	if (err) {
// 		console.log('[SELECT ERROR] - ', err.message)
// 		return
// 	}

// 	console.log(result)
// });

// connection.end()

$("#button").on("click", function () {
	$(".wrapper").addClass("active")
})