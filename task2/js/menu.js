$(document).ready(function(){
    $(".navicon").click(function(){
        $(".hideMenu").toggleClass("activeMenu");
    });

    $(".search").click(function(){
        $(".hideSearch").toggleClass("activeSearch");
    });
});