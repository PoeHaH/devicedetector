var deviceDetector = (function ()
{
	var ua = navigator.userAgent.toLowerCase();
	var detect = (function(s)
	{
		if(s===undefined)s=ua;
		else ua = s.toLowerCase();
		if(/(ipad|tablet|(android(?!.*mobile))|(windows(?!.*phone)(.*touch))|kindle|playbook|silk|(puffin(?!.*(IP|AP|WP))))/.test(ua))
            		return 'tablet';
        	else
			if(/(mobi|ipod|phone|blackberry|opera mini|fennec|minimo|symbian|psp|nintendo ds|archos|skyfire|puffin|s40Ovibrowser|blazer|bolt|gobrowser|iris|maemo|semc|teashark|uzard )/.test(ua))            
                		return 'phone';
            		else return 'desktop';
    });
    return{
        device:detect(),
        detect:detect,
        isMobile:((detect()!='desktop')?true:false),
        userAgent:ua
    };
}());
