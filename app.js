var express=require('express');
var path=require('path');
var bodyParser=require('body-parser');
var port=process.env.PORT||3000;
var app=express();

app.set('views','./views/pages');
app.set('view engine','jade');

app.use(bodyParser.urlencoded());

app.use(express.static(path.join(__dirname,'node_modules')));
app.listen(port);

console.log('start on port'+port);

//index page
app.get('/',function(req,res){
	res.render('index',{
		title:'movie首页',
		movies:[{
			title:'天启',
			_id:1,
			poster:'http://r3.ykimg.com/05160000530EEB63675839160D0B79D5'
		},{
			title:'天启',
			_id:2,
			poster:'http://r3.ykimg.com/05160000530EEB63675839160D0B79D5'
		},{
			title:'天启',
			_id:3,
			poster:'http://r3.ykimg.com/05160000530EEB63675839160D0B79D5'
		},{
			title:'天启',
			_id:4,
			poster:'http://r3.ykimg.com/05160000530EEB63675839160D0B79D5'
		},{
			title:'天启',
			_id:5,
			poster:'http://r3.ykimg.com/05160000530EEB63675839160D0B79D5'
		},{
			title:'天启',
			_id:6,
			poster:'http://r3.ykimg.com/05160000530EEB63675839160D0B79D5'
		},{
			title:'天启',
			_id:7,
			poster:'http://r3.ykimg.com/05160000530EEB63675839160D0B79D5'
		},{
			title:'天启',
			_id:8,
			poster:'http://r3.ykimg.com/05160000530EEB63675839160D0B79D5'
		}]
	})
})
//detail page
app.get('/movie/:id',function(req,res){
	res.render('detail',{
		title:'movie 详情页',
		movie:{
			director:'李安',
			country:'美国',
			title:'机械战警',
			year:2016,
			poster:'http://r3.ykimg.com/05160000530EEB63675839160D0B79D5',
			language:'英语',
			flash:'http://r3.ykimg.com/05160000530EEB63675839160D0B79D5',
			summary:'非常好！'
		}
	})
})
//admin page
app.get('/admin/movie',function(req,res){
	res.render('admin',{
		title:'movie 后台录入页',
		movie:{
			title:'',
			director:'',
			country:'',
			year:'',
			poster:'',
			flash:'',
			summary:'',
			language:''
		}
	})
})
//list page
app.get('/admin/list',function(req,res){
	res.render('list',{
		title:'movie 列表页',
		movies:{
			title:'机械战警',
			_id:1,
			director:'李安',
			country:'美国',
			year:2016,
			poster:'http://r3.ykimg.com/05160000530EEB63675839160D0B79D5',
			language:'英语',
			flash:'http://r3.ykimg.com/05160000530EEB63675839160D0B79D5',
			summary:'非常好哈哈！'
		}
	})
})