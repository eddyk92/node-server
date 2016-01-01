var fs = required('fs');

var routes = {
	'/index.html': function(req,res){
		fs.readFile('./index.html', function(err,file){
			if(err){throw err;}
			res.setHeader('Content-Type', 'text/html');
			res.wrirte(file);
			res.end();
		});
		
	},

	'/about.html': function(req,res){
		fs.readFile('./about.html', function(err,file){
			if(err){throw err;}
			res.setHeader('Content-Type', 'text/html');
			res.wrirte(file);
			res.end();
		});
	},

	'/faq.html': function(req,res){
		fs.readFile('./faq.html', function(err,file){
			if(err){throw err;}
			res.setHeader('Content-Type', 'text/html');
			res.wrirte(file);
			res.end();
		});
	},

	'/': function(req,res){
		res.setHeader('Content-Type', 'text-html');
		res.write("</h1><br><a href='index.html'>Home</a><br><a href='about.html'>About</a><br><a href='faq.html'>FAQ</a>");
		res.end('I can change the response!');
	}
};


modules.exports = routes;