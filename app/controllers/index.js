var FB = require('facebook');

//fb init
FB.appid = Ti.App.Properties.getString('ti.facebook.appid'); 
FB.permissions = ['email', 'public_profile'];
FB.forceDialogAuth = false;


function doClick(e) {
    FB.addEventListener('login', function(e) {

        if (e.success) {
            alert('your login was successful');
        } else if (e.error) {
            console.log("fb error ", e);

            alert('error');
        } else if (e.cancelled) {
            console.log("fb cancelled ", e);
            alert('cancelled');
        }
    });
    FB.authorize();
}

$.index.open();