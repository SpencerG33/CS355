/**
 * Created by student on 3/29/18.
 */
var express = require('express');
var router = express.Router();
var stock_account_dal = require('../routes/dal/stock_account_dal');
/* GET users listings. */
router.get('/all', function(reg, res, next) {
    stock_account_dal.getAll(function (err, result) {
        if(err) {
            console.log(err);
            res.send(err);
        } else {
            console.log(result);
            res.render('stock_account/stock_account_view_all', {stock_account: result, password: result, username: result});
        }
    })

});

router.get('/add', function (req, res) {
    res.render('stock_account/stock_account_add');
});

router.get('/insert', function (req, res) {
    stock_account_dal.insert(req.query, function (err,result) {
        if(err){
            console.log(err);
            res.send(err)
        }
        else {
            res.redirect(302, '/stock_account/all');
        }
    });
});


router.get('/edit', function(req,res){
    stock_account_dal.getinfo(req.query.stock_account_id, function (err, result) {
        if(err) {res.send(err); }
        else {
            res.render('stock_account/Stock_AccountUpdate',
                {stock_account: result[0][0], password: result[1], username: result[2]}
            );
        }
    });
});


router.get('/update', function (req, res) {
    stock_account_dal.update(req.query, function (err, result) {
        if(err){
            res.send(err);
        }
        else {
            res.redirect(302, '/stock_account/all');
        }
    });

});

router.get('/delete', function (req, res) {
    stock_account_dal.delete(req.query.stock_account_id, function (err,result) {
        if(err){
            console.log(err);
            res.send(err)
        }
        else {
            res.redirect(302, '/stock_account/all');
        }
    });
});

module.exports = router;