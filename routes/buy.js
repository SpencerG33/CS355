/**
 * Created by student on 3/29/18.
 */
var express = require('express');
var router = express.Router();
var buy_dal = require('../routes/dal/buy_dal');
/* GET users listings. */
router.get('/all', function(reg, res, next) {
    buy_dal.getAll(function (err, result) {
        if(err) {
            console.log(err);
            res.send(err);
        } else {
            console.log(result);
            res.render('buy/buy_view_all', {buy: result, ticker: result, price: result, date: result, email: result});
        }
    })

});


router.get('/add', function (req, res) {
    res.render('buy/buy_add');
});

router.get('/insert', function (req, res) {
    buy_dal.insert(req.query, function (err,result) {
        if(err){
            console.log(err);
            res.send(err)
        }
        else {
            res.redirect(302, '/buy/all');
        }
    });
});






router.get('/edit', function(req,res){
    buy_dal.getinfo(req.query.buy_id, function (err, result) {
        if(err) {res.send(err); }
        else {
            res.render('buy/buyUpdate',
                {buy: result[0][0], ticker: result[1], price: result[2], date: result[3], amount: result[4]}

            );
        }
    });
});


router.get('/update', function (req, res) {
    buy_dal.update(req.query, function (err, result) {
        if(err){
            res.send(err);
        }
        else {
            res.redirect(302, '/buy/all');
        }
    });

});


router.get('/delete', function (req, res) {
    buy_dal.delete(req.query.buy_id, function (err,result) {
        if(err){
            console.log(err);
            res.send(err)
        }
        else {
            res.redirect(302, '/buy/all');
        }
    });
});

router.get('/dist', function(reg, res, next) {
    buy_dal.dist(function (err, result) {
        if(err) {
            console.log(err);
            res.send(err);
        } else {
            console.log(result);
            res.render('buy/dist', {buy: result, ticker: result, price: result, date: result});
        }
    })
});
router.get('/uni', function(reg, res, next) {
    buy_dal.uni(function (err, result) {
        if(err) {
            console.log(err);
            res.send(err);
        } else {
            console.log(result);
            res.render('buy/uni', {buy: result, ticker: result, price: result, date: result});
        }
    })


});


router.get('/sub', function(reg, res, next) {
    buy_dal.sub(function (err, result) {
        if(err) {
            console.log(err);
            res.send(err);
        } else {
            console.log(result);
            res.render('buy/sub', {buy: result, ticker: result, price: result, date: result});
        }
    })


});

router.get('/join', function(reg, res, next) {
    buy_dal.join(function (err, result) {
        if(err) {
            console.log(err);
            res.send(err);
        } else {
            console.log(result);
            res.render('buy/join', {buy: result, ticker: result, price: result, date: result});
        }
    })


});



module.exports = router;