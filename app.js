let express = require('express'),
    path = require('path'),
    app = express();

app.set('port', (process.env.PORT || 8000));

app.use(express.static('src'));

app.listen(app.get('port'), function(err) {
    if (err) {
        console.log(err);
    } else {
        console.log('Running on port ' + app.get('port'));
    }
});