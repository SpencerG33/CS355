/**
 * Created by student on 3/29/18.
 */
var mysql = require('mysql');
var db = require('./db_connection.js');

/* DATABASE CONFIGURATION */
var connection = mysql.createConnection(db.config);

exports.getAll = function(callback) {
    var query = 'SELECT * FROM sell_view;';

    connection.query(query, function (err, result){
        callback(err, result);
    });
};

exports.insert = function(params, callback) {
    var query = 'INSERT INTO sell (ticker,price, date, amount ) VALUES (?,?,?,?)';

    var queryData = [params.ticker, params.price, params.date, params.amount];

    connection.query(query, queryData, function(err, result) {
        callback(err, result);
    });

};

exports.getinfo = function (sell_id, callback) {
    var query = 'call sell_getinfo(?)';
    var queryData = [sell_id];

    connection.query(query, queryData, function (err, result) {
        callback(err, result);
    });
};

exports.update = function (params, callback) {
    var query = 'update sell set ticker  = ?, price = ?, date =?, amount = ?  where sell_id = ?';

    var queryData = [params.ticker, params.price, params.date, params.amount, params.sell_id];

    connection.query(query, queryData, function(err, result) {
        callback(err, result);
    });
};

exports.delete = function (sell, callback) {
    var query = 'call sell_delete(?)';
    var queryData = [sell];

    connection.query(query, queryData, function (err, result) {
        callback(err, result);
    });
};