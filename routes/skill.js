/**
 * Created by student on 3/29/18.
 */
var express = require('express');
var router = express.Router();
var company_dal = require('../../../IdeaProjects/Lab10/routes/dal/skill_dal');
/* GET users listings. */
router.get('/all', function(reg, res, next) {
    company_dal.getAll(function (err, result) {
        if(err) {
            console.log(err);
            res.send(err);
        } else {
            console.log(result);
            res.render('skill/skill_view_all', {skill: result});
        }
    })

});

router.get('/add', function (req, res) {
    res.render('skill/skill_add');
});

router.get('/insert', function (req, res) {
    company_dal.insert(req.query, function (err,result) {
        if(err){
            console.log(err);
            res.send(err)
        }
        else {
            res.redirect(302, '/skill/all');
        }
    });
});

module.exports = router;