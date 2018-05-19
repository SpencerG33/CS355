/**
 * Created by student on 3/29/18.
 */
var mysql = require('mysql');
var db = require('./db_connection.js');

/* DATABASE CONFIGURATION */
var connection = mysql.createConnection(db.config);

exports.getAll = function(callback) {
    var query = 'SELECT * FROM customer_view;';

    connection.query(query, function (err, result){
        callback(err, result);
    });
};

exports.insert = function(params, callback) {
    var query = 'INSERT INTO customer (social,email, first_name, last_name ) VALUES (?,?,?,?)';

    var queryData = [params.social, params.email, params.first_name, params.last_name];

    connection.query(query, queryData, function(err, result) {
        callback(err, result);
    });

};

exports.getinfo = function (customer_id, callback) {
    var query = 'call customer_getinfo(?)';
    var queryData = [customer_id];

    connection.query(query, queryData, function (err, result) {
        callback(err, result);
    });
};

exports.update = function (params, callback) {
    var query = 'update customer set social  = ?, email = ?, first_name =?, last_name = ?  where customer_id = ?';

    var queryData = [params.social, params.email, params.first_name, params.last_name, params.customer_id];

    connection.query(query, queryData, function(err, result) {
        callback(err, result);
    });
};


exports.view = function(callback) {
    var query = 'SELECT * FROM alpha;';

    connection.query(query, function (err, result){
        callback(err, result);
    });
};

exports.in = function(callback) {
    var query = 'SELECT * FROM sub_in;';

    connection.query(query, function (err, result){
        callback(err, result);
    });
};

exports.exi = function(callback) {
    var query = 'SELECT * FROM exi;';

    connection.query(query, function (err, result){
        callback(err, result);
    });
};

exports.gro = function(callback) {
    var query = 'SELECT * FROM gro;';

    connection.query(query, function (err, result){
        callback(err, result);
    });
};


exports.delete = function (customer, callback) {
    var query = 'call customer_delete(?)';
    var queryData = [customer];

    connection.query(query, queryData, function (err, result) {
        callback(err, result);
    });
};