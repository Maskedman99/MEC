package com.mec;

import com.facebook.react.ReactActivity;
import org.devio.rn.splashscreen.SplashScreen;
import android.os.Bundle; // import this

public class MainActivity extends ReactActivity {
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        SplashScreen.show(this, true);  // here
        super.onCreate(savedInstanceState);
    }
    @Override
    protected String getMainComponentName() {
        return "MEC";
    }
}
