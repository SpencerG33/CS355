/**
 * Created by student on 3/29/18.
 */
var express = require('express');
var router = express.Router();
var customer_dal = require('../routes/dal/customer_dal');
/* GET users listings. */
router.get('/all', function(reg, res, next) {
    customer_dal.getAll(function (err, result) {
        if(err) {
            console.log(err);
            res.send(err);
        } else {
            console.log(result);
            res.render('customer/customer_view_all', {customer: result, social: result, email: result, first_name: result, last_name: result});
        }
    })

});


router.get('/add', function (req, res) {
    res.render('customer/customer_add');
});

router.get('/insert', function (req, res) {
    customer_dal.insert(req.query, function (err,result) {
        if(err){
            console.log(err);
            res.send(err)
        }
        else {
            res.redirect(302, '/customer/all');
        }
    });
});






router.get('/edit', function(req,res){
    customer_dal.getinfo(req.query.customer_id, function (err, result) {
        if(err) {res.send(err); }
        else {
            res.render('customer/customerUpdate',
                {customer: result[0][0], social: result[1], email: result[2], first_name: result[3], last_name: result[4]}

            );
        }
    });
});


router.get('/update', function (req, res) {
    customer_dal.update(req.query, function (err, result) {
        if(err){
            res.send(err);
        }
        else {
            res.redirect(302, '/customer/all');
        }
    });

});

module.exports = router;