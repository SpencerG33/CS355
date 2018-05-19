/**
 * Created by student on 3/29/18.
 */
var mysql = require('mysql');
var db = require('./db_connection.js');

/* DATABASE CONFIGURATION */
var connection = mysql.createConnection(db.config);

exports.getAll = function(callback) {
    var query = 'SELECT * FROM stock_view   ;';

    connection.query(query, function (err, result){
        callback(err, result);
    });
};

exports.insert = function(params, callback) {
    var query = 'call stock_account_insert(?, ?)';

    var queryData = [params.username, params.password];

    connection.query(query, queryData, function(err, result) {
        callback(err, result);
    });

};

exports.getinfo = function (stock_account_id, callback) {
    var query = 'call stock_account_getinfo(?)';
    var queryData = [stock_account_id];

    connection.query(query, queryData, function (err, result) {
        callback(err, result);
    });
};

exports.update = function (params, callback) {
    var query = 'update stock_account set password  = ?, username = ?  where stock_account_id = ?';

    var queryData = [params.password, params.username, params.stock_account_id];

    connection.query(query, queryData, function(err, result) {
        callback(err, result);
    });
};

exports.delete = function (stock_account, callback) {
    var query = 'call stock_account_delete(?)';
    var queryData = [stock_account];

    connection.query(query, queryData, function (err, result) {
        callback(err, result);
    });
};

