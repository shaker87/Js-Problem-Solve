var tc =['00:03:15', '10:10:10','00:00:00','04:00:00','00:42:32','00:00:18','00:00:08'];

tc.forEach(function(t) {
    var y = t.split(":");
    y[0] = y[0].replace(/^[0]+/g, '');
    if(y[0] === '') {
        y[1] = y[1].replace(/^0/g, ''); 
    }
    var r = y.filter(function(p) {return p!=='';}).join(':');
    console.log(r);
});