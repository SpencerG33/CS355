/**
 * Created by student on 3/29/18.
 */
var mysql = require('mysql');
var db = require('./db_connection.js');

/* DATABASE CONFIGURATION */
var connection = mysql.createConnection(db.config);

exports.getAll = function(callback) {
    var query = 'SELECT * FROM buy_view;';

    connection.query(query, function (err, result){
        callback(err, result);
    });
};

exports.insert = function(params, callback) {
    var query = 'INSERT INTO buy (ticker,price, date, amount ) VALUES (?,?,?,?)';

    var queryData = [params.ticker, params.price, params.date, params.amount];

    connection.query(query, queryData, function(err, result) {
        callback(err, result);
    });

};

exports.getinfo = function (buy_id, callback) {
    var query = 'call buy_getinfo(?)';
    var queryData = [buy_id];

    connection.query(query, queryData, function (err, result) {
        callback(err, result);
    });
};

exports.update = function (params, callback) {
    var query = 'update buy set ticker  = ?, price = ?, date =?, amount = ?  where buy_id = ?';

    var queryData = [params.ticker, params.price, params.date, params.amount, params.buy_id];

    connection.query(query, queryData, function(err, result) {
        callback(err, result);
    });
};