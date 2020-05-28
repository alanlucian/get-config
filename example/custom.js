const config = require('../index');
var defaultData = {
    ip:'localhost',
    port:'1324'
}

var data = config.get(defaultData,"file");
console.log(data);