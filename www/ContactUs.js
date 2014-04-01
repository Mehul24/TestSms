var sendSms = {
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
module.exports = sendSms;
