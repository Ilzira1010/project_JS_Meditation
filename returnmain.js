let baseURL = 'http://localhost:63342/semestrovkajs/project_JS_Meditation/main.html?_ijt=cfflooti6vlpqdb26cl0dr4emn';
$('a').each(function(){
    $(this).click(function(){
        location.href = baseURL;
        return false;
    });
});