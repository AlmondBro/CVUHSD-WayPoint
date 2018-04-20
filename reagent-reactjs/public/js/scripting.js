document.onload = function() {
    console.log("Scripting.js");
    var backButton = document.getElementsByClassName("back-button")[0];

    backButton.addEventListener("click", historyBackWFallback);

    function historyBackWFallback(fallbackUrl) {
        console.log("Button Click");

        fallbackUrl = fallbackUrl || '/';
        var prevPage = window.location.href;
    
        window.history.go(-1);
    
        setTimeout(function(){ 
            if (window.location.href == prevPage) {
                window.location.href = fallbackUrl; 
            }
        }, 500);
    }
};

