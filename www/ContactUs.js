var sendSms = {
    createEvent: function(successCallback, errorCallback) {
        cordova.exec(
            successCallback, // success callback function
            errorCallback, // error callback function
            'SendSms', 
            'openSmsView', // with this action name
            [{   
            }]
        ); 
    }
}
module.exports = sendSms;
