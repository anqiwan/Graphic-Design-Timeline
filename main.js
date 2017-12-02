
$(document).ready(function() {

// tiny bit of javascript to scroll to sections

$('li').click(function() {
    
    $('li').each(function() { 
        (this).className = "inactive";
    });

    this.className = "current";
    });



});

