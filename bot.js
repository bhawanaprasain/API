console.log("starting......");

var Twit = require('twit');
var config = require('./config');
//var T = new Twit({
  //consumer_key:         'wJK2eQipd2zdhkK9cCMJBEglX',
  //consumer_secret:      'h54zZkeBrSz14n9Xoh0rqYDvbPCbNAd3cmYIiUEEwrVnzE3a9g',


//  access_token:         '1062622845723967494-e41SmsQrJoQyTSQsZ0wT3ufoL1nWji',
//  access_token_secret:  'Jm5GIdd6iLbaioGYiKttZ9KLckfYKUbyW8WMaxgYjzaf0',
//  strictSSL:            true,     // optional - requires SSL certificates to be valid.
//})
//console.log(config)
var T = new Twit(config);

var params = {
  q: '#meToo',
  count: 15
}
T.get('search/tweets',params,gotData);

  function gotData(err, data, response){
    var tweets = data.statuses ;
    for(var i=0; i<tweets.length; i++){
      console.log(tweets[i].text) ;
    }}
//  console.log(data);
//}
