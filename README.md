Device detector
================

A simple JavaScript object to detect if you are running on a desktop, tablet or mobile device.
It inspects the navigator.userAgent string to find out which device you are using.

There are numorous scripts out there that do the same though I've always found
they are somewhat incomplete. None of them took into account the emerging fennect (firefox OS)
device.


## Usage

Include the script, or copy/paste it in your own project.

```html
<script type="text/javascript" src="https://raw.githubusercontent.com/PoeHaH/devicedetector/master/devicedetector-min.js"/>
```
You're now ready to access the object.


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
+ `deviceDetector.detect()` allows you to redetect. (if needed).

