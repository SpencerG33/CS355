/**
 * Created by student on 3/29/18.
 */
var express = require('express');
var router = express.Router();
var company_dal = require('./dal/company_dal');
/* GET users listings. */
router.get('/all', function(reg, res, next) {
    company_dal.getAll(function (err, result) {
        if(err) {
            console.log(err);
            res.send(err);
        } else {
            console.log(result);
            res.render('company/company_view_all', {companies: result});
        }
    })

});

router.get('/add', function (req, res) {
    res.render('company/company_add');
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