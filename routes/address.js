/**
 * Created by student on 3/29/18.
 */
var express = require('express');
var router = express.Router();
var company_dal = require('../../../IdeaProjects/Lab10/routes/dal/address_dal');
/* GET users listings. */
router.get('/all', function(reg, res) {
    address_dal.getAll(function (err, result) {
        if(err) {
            res.send(err);
        } else {
            console.log(result);
            res.render('company/address_view_all', {address: result[0]});
        }
    })

});

router.get('/add', function (req, res) {
    res.render('address/address_add');
});

router.get('/insert', function (req, res) {
    company_dal.insert(req.query, function (err,result) {
        if(err){
            console.log(err);
            res.send(err)
        }
        else {
            res.redirect(302, '/address/all');
        }
    });
});

module.exports = router;