//index.js

var express = require('express'); //설치한 express module을 불러와서 변수에 담는다.
var app = express(); //express를 실행하여 app object를 초기화 합니다.

app.use(express.static(__dirname + '/test-repo')); // 1

app.listen(3000, function(){  //3000포트를 사용합니다.
  console.log('Server On!' + __dirname); //서버가 실행되면 콘솔창에 표시될 메세지입니다.
});
