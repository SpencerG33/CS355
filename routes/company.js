/**
 * Created by student on 3/29/18.
 */
var address_dal = require('./dal/address_dal');
var express = require('express');
var router = express.Router();
var company_dal = require('../../../IdeaProjects/Lab10/routes/dal/company_dal');
/* GET users listings. */
router.get('/all', function(reg, res, next) {
    company_dal.getAll(function (err, result) {
        if(err) {
            console.log(err);
            res.send(err);
        } else {
            console.log(result);
            res.render('company/company_view_all', {result: result});
        }
    })

});

router.get('/add', function (req, res) {
    address_dal.getAll(function (err, result) {
        if (err) {
            res.send(err);
        }
        else {
            res.render('company/company_add', {address_result: result[0]});
        }
    });
});

router.get('/insert', function (req, res) {
   company_dal.insert(req.query, function (err,result) {
       if(err){
           console.log(err);
           res.send(err)
       }
       else {
           res.redirect(302, '/company/all');
       }
   });
});

module.exports = router;