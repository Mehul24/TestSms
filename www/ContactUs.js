var contact = function(){};

contact.textUs = function(){
    console.log(type);
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
};

contact.callUs = function() {
    console.log('inside call contact');
    var call = {
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
};
    
    



module.exports = contact;
// module.exports = call;