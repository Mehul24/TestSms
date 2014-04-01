var contact = function(){};

contact.textUs = function(successCallback, errorCallback) {
    console.log('inside text contact');
    cordova.exec(
        successCallback, // success callback function
        errorCallback, // error callback function
        'Contact', 
        'openSmsView', // with this action name
        [{   
        }]
    );    
};

contact.callUs = function(successCallback, errorCallback) {
    console.log('inside call contact');
    cordova.exec(
        successCallback, // success callback function
        errorCallback, // error callback function
        'Contact', 
        'openCallView', // with this action name
        [{   
        }]
    ); 
};
    
module.exports = contact;
// module.exports = call;