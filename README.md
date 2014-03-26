Device detector
================

A simple JavaScript object to detect if you are running on a desktop, tablet or mobile device.
It inspects the navigator.userAgent string to find out which device you are using.

There are numorous scripts out there that do the same though I've always found
they are somewhat incomplete. None of them took into account the emerging fennect (firefox OS)
device.


## Usage

Include the script, or copy/paste it in your own project:

```html
<script type="text/javascript" src="https://raw.githubusercontent.com/PoeHaH/devicedetector/master/devicedetector-min.js"/>
```
You're now ready to access the object:


```js
if(deviceDetector.device == 'desktop')
  //You're on a desktop
else
  //You're on a tablet or phone
```


## Properties

+ `deviceDetector.device` contains the device you're browsing on. `desktop`, `tablet` or `phone`.
+ `deviceDetector.isMobile` is `true` if the device is a phone or tablet. `False` otherwise.
+ `deviceDetector.userAgent` contains the user agent string the check is performed against.

## Functions

+ `deviceDetector.detect(userAgent)` allows you to detect based on a given user agent string. If the argument is not supplied, navigator.userAgent is used.


##Tests

In the tests folder, you can find .txt files with 300 random user agent strings per device.
This can be used to test with the supplied index.html.

The strings for the txt files are coming from:
+ http://www.mobile247.eu/online-tools/user-agent-strings/dv/device3/smartphone
+ http://www.mobile247.eu/online-tools/user-agent-strings/dv/device1/desktop
+ http://www.mobile247.eu/online-tools/user-agent-strings/dv/device2/tablet

###results

Phones & desktops are discoverred without issue. Tablets are detected correctly for 98%.
