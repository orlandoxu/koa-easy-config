# Koa easy config

### Usage
```
folder:
path/default.js
path/production.js
path/dev.js
path/test.js

Then, use like:
const app = express();

app.use(function(req,res,next){
  req.config = require('koa-easy-config')(PATH2DIR);
  next();
});
```
