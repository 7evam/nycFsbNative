const express         = require('express'),
      app             = express(),
      PORT            = 3000,
      bodyParser      = require('body-parser'),
      router          = require('./routes');



app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}))


app.get('/',function(req,res){
  res.send("Hi there, welcome to the server")
});

app.use('/api', router);



app.listen(PORT, () => console.log(`Server up and listening on port ${PORT}`));

