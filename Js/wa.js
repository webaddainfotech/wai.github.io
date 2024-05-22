const settings = {
	"async": true,
	"crossDomain": true,
	"url": "https://whin2.p.rapidapi.com/whin",
	"method": "POST",
	"headers": {
		"content-type": "application/json",
		"x-rapidapi-host": "whin2.p.rapidapi.com",
		"x-rapidapi-key": "4cd86cacb6msh97a8aab1b0706cap191971jsnc2233bfd8e4a"
	},
	"processData": false,
	"data": {
		"phone": "918120203806",
		"token": "f049708703afaec876f5ba7f74912a2ec8856025",
		"text": "Hello from rapidAPI!!!!!"
	}
};

$.ajax(settings).done(function (response) {
	console.log(response);
});