/**
 * Created by student on 3/29/18.
 */
var express = require('express');
var router = express.Router();
var sell_dal = require('../routes/dal/sell_dal');
/* GET users listings. */
router.get('/all', function(reg, res, next) {
    sell_dal.getAll(function (err, result) {
        if(err) {
            console.log(err);
            res.send(err);
        } else {
            console.log(result);
            res.render('sell/sell_view_all', {sell: result, ticker: result, price: result, date: result, email: result});
        }
    })

});


router.get('/add', function (req, res) {
    res.render('sell/sell_add');
});

router.get('/insert', function (req, res) {
    sell_dal.insert(req.query, function (err,result) {
        if(err){
            console.log(err);
            res.send(err)
        }
        else {
            res.redirect(302, '/sell/all');
        }
    });
});






router.get('/edit', function(req,res){
    sell_dal.getinfo(req.query.sell_id, function (err, result) {
        if(err) {res.send(err); }
        else {
            res.render('sell/sellUpdate',
                {sell: result[0][0], ticker: result[1], price: result[2], date: result[3], amount: result[4]}

            );
        }
    });
});


router.get('/update', function (req, res) {
    sell_dal.update(req.query, function (err, result) {
        if(err){
            res.send(err);
        }
        else {
            res.redirect(302, '/sell/all');
        }
    });

});

router.get('/delete', function (req, res) {
    sell_dal.delete(req.query.sell_id, function (err,result) {
        if(err){
            console.log(err);
            res.send(err)
        }
        else {
            res.redirect(302, '/sell/all');
        }
    });
});

module.exports = router;