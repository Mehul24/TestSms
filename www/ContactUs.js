var contact = function(type){
    console.log(type);
    if (type == 'text') {
        console.log('inside text contact');
        var text = {
            createEvent: function(successCallback, errorCallback) {
                cordova.exec(
                    successCallback, // success callback function
                    errorCallback, // error callback function
                    'Contact', 
                    'openSmsView', // with this action name
                    [{   
                    }]
                );
            }
        };      
    }
    else if (type == 'call') {
        var call = {
            console.log('inside call contact');
            createEvent: function(successCallback, errorCallback) {
                cordova.exec(
                    successCallback, // success callback function
                    errorCallback, // error callback function
                    'Contact', 
                    'openCallView', // with this action name
                    [{   
                    }]
                ); 
            }
        };  
    }
};


module.exports = contact;
// module.exports = call;