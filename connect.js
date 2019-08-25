
////////////////////////////////////////////////////////////////////////
//////////////////Binance подключение 
function Binance(command, param, pos) {
  var key = "api key"
  var secret = "api secret"
  var baseUrl = "https://api.binance.com";
  var timestamp = Number(new Date().getTime()).toFixed(0);
  var string = param + "&timestamp=" + timestamp;
  var signature = Utilities.computeHmacSha256Signature(string, secret);
  signature = signature.map(function (e) {
    var v = (e < 0 ? e + 256 : e).toString(16); return v.length == 1 ? "0" + v : v;
  }).join("");
  var query = "?" + string + "&signature=" + signature;
  if (pos == 0) {
    var params = {
      'method': 'get',
      'headers': { 'X-MBX-APIKEY': key },
      'muteHttpExceptions': true
    };
    var string = param
    var query = "?" + string
    var response = UrlFetchApp.fetch(baseUrl + command + query, params);
  }
  if (pos == 1) {
    var string = param
    var query = "?" + string
    var response = UrlFetchApp.fetch(baseUrl + command + query);
  }
  else if (pos == 2) {

    var params = {
      'method': 'get',
      'headers': { 'X-MBX-APIKEY': key },
      'muteHttpExceptions': true
    };
    var response = UrlFetchApp.fetch(baseUrl + command + query, params);
  }
  else if (pos == 3) {
    var params = {
      'method': 'POST',
      'headers': { 'X-MBX-APIKEY': key },
      'muteHttpExceptions': true
    };
    var response = UrlFetchApp.fetch(baseUrl + command + query, params);
  }
  else if (pos == 4) {
    var params = {
      'method': 'DELETE',
      'headers': { 'X-MBX-APIKEY': key },
      'muteHttpExceptions': true
    };
    var response = UrlFetchApp.fetch(baseUrl + command + query, params);
  }
  var data = JSON.parse(response.getContentText());
  return data;
}