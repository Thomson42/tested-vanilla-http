function app (req, res) {
    //I split the URL itslef into an array of strigns by /
    let slashUrl = req.url.split('/');
    //I split the URL itself into an array of strings by the ? query symbol
    let queUrl = req.url.split('?');
    let sepfUrl = req.url.split(':');
    // if the request methond is a type GET I start the greeting if test
    var parsedURL = url.parse(req.url,{parseQueryString : true});
    if(req.method === 'GET') {
        //the greeting if test staarting with generic greeting and going to greeting function if more complex
        
        if(slashUrl.length <= 2) res.end('Hello World');
        

    }
    else if (req.method === 'GET' && slashUrl[1] == 'coder') {
        let postLogs = fs.readdirSync('./coder');
        var cleanLogs = postLogs.map((title) => {
            let newTitl = title.split('.txt');
            return newTitl[0];
        });
        let stringLogs = JSON.stringify(cleanLogs);
        return res.end(stringLogs);
    }
    
    else if(req.method !== 'GET' && parsedURL.pathname !== '/coder' ){ 
        res.statusCode = 404;
        res.statusMessage = 'CANNOT <METHOD> <path>';
        res.end('Warning!');
    }
}
module.exports = app;