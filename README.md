# Keypad
Get your actions done with security by using keypad for perform actions by providing a correct password. What you will learn:
- How to use keypad
- How keypad is used for better security

## Keypad requirements
You can implement this application from zero in your account, you just need an already created device on your account, just follow this tutorial and you will have a working demonstration dashboard using Keypad and a device from your account. Now, let's begin the implementation. In just some minutes, everything will be up and running in your TagoIO account! First things first, let's divide the implementation in some steps:

- Dashboard duplication
- Analysis creation

Let's follow up the list in that order so, starting with the dashboard duplication.

## Dashboard Duplication 
In the explore option in TagoIO sidebar, you will see the Keypad Dashboard example, click in the 'Get this Dashboard' button. When you do this, the keypad dashboard will go into your account and a request to associate your devices will appear like the image bellow:

![dashboardDuplication.png](/images/keypad_distribute.png)

Just type in the name of the device you want to use in your keypad application. After that, all the widgets will already be using the correct device and ready to receive your data!

## Analysis creation
To setup this application you need to create just one analysis: Password Validation. In your account, add an analysis with your name preference and configure the environment variables with your device's token. Copy the code from the passwordValidation.js script here in Github and paste it in your analysis, save it. Now, just link this analysis with the keypad widget in User Control tab, like the following image:

![keypad_link.png](/images/keypad_usercontrol.png)

## Simple like that!
This demo application is just it! Try to use it and check how just the password **0000** will be accepted to turn on or off the device. It's a simple example just to inspire you on using it for your application. After all, more security is always good. Everything you learned here is functional and you can use as a start point to adapt to your application.

TagoIO team. ![tagoIO.png](https://admin.tago.io/favicon-16x16.png?v=jw7PBgLGRl)
