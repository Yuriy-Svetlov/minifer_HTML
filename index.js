'use strict';

var index = function (data) {
    
	   function compressHTML(html){
	    html = html.replace(/>\s+</g, '><');  
	    return html.replace(/\s+/g, ' ');
	   }

    return compressHTML(data);
}
module.exports = index;
