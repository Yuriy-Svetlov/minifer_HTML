'use strict';

var index = function (data) {
    
	function minifer_HTML(html){
	  html = html.replace(/  +/g, ' ');
	  html = html.replace(/>\n+</g, '><');
	  return html.replace(/\n+/g, ' ');
	}

    return minifer_HTML(data);
}
module.exports = index;
