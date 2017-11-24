var express = require('express');
var fs = require('fs');
var router = express.Router();
var branch_str = fs.readFileSync('lib/branch.json',{
  encoding: 'UTF-8'
});
var activity_str = fs.readFileSync('lib/activity.json',{
    encoding: 'UTF-8'
})

var branch = JSON.parse(branch_str);
var activity = JSON.parse(activity_str);
/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index');
});

for (let i = 0; i < 4; i++) {
  router.get('/branch_' + (i + 1), function (req, res, next) {
    res.render('branch',{
      "name":  branch[i].name,
      "content_1": branch[i].content_1,
      "content_2": branch[i].content_2,
      "content_3": branch[i].content_3,
      "content_4": branch[i].content_4,
      "content_5": branch[i].content_5,
      "content_6": branch[i].content_6
    })
  })
}

router.get('/activities',function(req,res,next){
  res.render('activities')
})

for(let i = 0; i < 10; i++){
  router.get('/act_' + (i+1),function(req,res,next){
    res.render('activity',{
      "title" : activity[i].title,
      "head_img": activity[i].head_img,
      "img_1": activity[i].img_1,
      "img_2": activity[i].img_2,
      "img_3": activity[i].img_3,
      "img_4":activity[i].img_4,
      "img_5": activity[i].img_5,
      "img_6": activity[i].img_6,
      "img_7": activity[i].img_7,
      "img_8": activity[i].img_8,
      "p_1": activity[i].p_1,
      "p_2": activity[i].p_2,
      "p_3": activity[i].p_3,
      "p_4": activity[i].p_4,
      "p_5": activity[i].p_5,
      "p_6": activity[i].p_6,
      "p_7": activity[i].p_7,
      "p_8": activity[i].p_8,
      "content_footer": activity[i].content_footer
    })
  })
}

router.get('/intro',function(req,res,next){
  res.render('intro');
})


module.exports = router;