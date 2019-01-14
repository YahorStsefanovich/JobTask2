$(document).ready(function(){
    $(".navicon").click(function(){
        $(".hideMenu").toggleClass("activeMenu");
        // $("#navicon").toggleClass("hideMenu");
    });

    $(".search").click(function(){
        $(".hideSearch").toggleClass("activeSearch");
        // $("#search").toggleClass("hideSearch");
    });
});