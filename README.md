Device detector (client-side device detecting)
================

A simple JavaScript object to detect if you are running on a desktop, tablet or mobile device.
It inspects the navigator.userAgent string to find out which device you are using.

There are numorous scripts out there that do the same, though I've always found
they are somewhat incomplete. For example, none of them took into account the emerging fennect (firefox OS)
device.


## Usage

Include the script, or copy/paste it in your own project:

```html
<script type="text/javascript" src="https://raw.githubusercontent.com/PoeHaH/devicedetector/master/devicedetector-min.js"/>
```
Make sure the script is fully loaded before accessing the object. This can be done by wrapping everything in jQuery's document.ready() or native javascript.

jQuery:
```js
$(document).ready(function(){
  // Access device detector here.
});
```
Native javascript:
```js
document.addEventListener("DOMContentLoaded", function(event) { 
  // Access device detector here.
});
```

Now, you're ready to access to deviceDetector:

```js
$(document).ready(function(){
  if(deviceDetector.device == 'desktop')
    // You're on a desktop.
  else{
    if(deviceDetector.device == 'tablet')
      // You're on a tablet.
    else
      // You're on a phone.
  }
});
```


## Properties

+ `deviceDetector.device` contains the device you're browsing on. `desktop`, `tablet` or `phone`.
+ `deviceDetector.isMobile` is `true` if the device is a phone or tablet. `False` otherwise.
+ `deviceDetector.userAgent` contains the user agent string the check is performed against.

## Functions

+ `deviceDetector.detect(userAgent)` allows you to detect based on a given user agent string. If the argument is not supplied, navigator.userAgent is used.

## Dependencies

None :)

## Tests

In the tests folder, you can find .txt files with 300 random user agent strings per device.
This can be used to test with the supplied index.html.

The strings for the txt files are coming from:
+ http://www.mobile247.eu/online-tools/user-agent-strings/dv/device3/smartphone
+ http://www.mobile247.eu/online-tools/user-agent-strings/dv/device1/desktop
+ http://www.mobile247.eu/online-tools/user-agent-strings/dv/device2/tablet

## Results

Phones & desktops are discoverred without issue. Tablets are detected correctly for 98%.
