package com.discotech.contact;
 
import org.apache.cordova.CallbackContext;
import org.apache.cordova.CordovaPlugin;
import org.json.JSONObject;
import org.json.JSONArray;
import org.json.JSONException;
import android.net.Uri;

import android.app.Activity;
import android.content.Intent;

public class Contact extends CordovaPlugin {
    public static final String ACTION_TEXT_US = "openSmsView";
    public static final String ACTION_EMAIL_US = "openEmailView";
    public static final String ACTION_CALL_US = "openDialView";
    @Override
    public boolean execute(String action, JSONArray args, CallbackContext callbackContext) throws JSONException {
        try {
            if (ACTION_TEXT_US.equals(action)) { 
                JSONObject arg_object = args.getJSONObject(0);
                String smsText = "Some text for the sms";
                Intent sendIntent = new Intent(Intent.ACTION_VIEW);
                sendIntent.setData(Uri.parse("sms:"));
                sendIntent.putExtra("sms_body", smsText);

                this.cordova.getActivity().startActivity(sendIntent);
                callbackContext.success();
                return true;
            }
            callbackContext.error("Invalid action");
            return false;
        } catch(Exception e) {
            System.err.println("Exception: " + e.getMessage());
            callbackContext.error(e.getMessage());
            return false;
        } 
    }
}