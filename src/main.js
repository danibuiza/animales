
requirejs.config({
    baseUrl : '../src',
    paths   : {
        'jquery' : 'https://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min'
    }
})
;

requirejs(["loader"]);