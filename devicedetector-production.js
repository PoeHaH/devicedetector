var deviceDetector = (function (ua)
{
    var detect = (function()
    {
        if(/(mobi|ipod|phone|blackberry|opera mini|fennec|minimo|symbian|psp|skyfire|s40Ovibrowser|blazer|bolt|gobrowser|iris|maemo|semc|teashark|uzard )/.test(ua))
            return 'phone';
        else
            if(/(ipad|tablet|Android|(windows(.)*touch)|kindle|playbook)/.test(ua))
                return 'tablet';
            else return 'desktop';
    });
    return{
        device:detect(),
        detect:detect,
        isMobile:((detect()!='desktop')?true:false),
        userAgent:ua
    };
}(navigator.userAgent.toLowerCase()));