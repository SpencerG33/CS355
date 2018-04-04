/**
 * Created by student on 3/29/18.
 */
var mysql = require('mysql');
var db = require('./db_connection.js');

/* DATABASE CONFIGURATION */
var connection = mysql.createConnection(db.config);

exports.getAll = function(callback) {
    var query = 'SELECT * FROM company;';

    connection.query(query, function (err, result){
        callback(err, result);
    });
};

exports.insert = function(params, callback) {
    var query = 'INSERT INTO company (company_name) VALUES (?)';

    var queryData = [params.company_name];

    connection.query(query, queryData, function(err, result) {
        if(err || params.address_id === undefined) {
            console.log(err);
            callback(err, result);
        } else {
            var company_id = result.insertId;
            var query = 'insert into company_address (company_id, address_id) values ?';
            var companyAddressData = [];
            if (params.address_id.constructor === Array) {
                for (var i = 0; i < params.address_id.length; i++) {
                    companyAddressData.push(
                        [company_id, params.address_id[i]]
                    );
                }
            }
            else {
                companyAddressData.push([company_id, params.address_id]);
            }

            connection.query(query, [companyAddressData],
                function (err, result) {
                    callback(err, result);

                });
        }
    });

};