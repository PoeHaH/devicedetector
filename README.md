Device detector
==============
A simple js object to detect if you are running on a desktop, tablet or mobile device.
It's inspecting the navigator.userAgent string to find out the answer.


## Usage

```js
if(deviceDetector.device == 'desktop')
  //You're on a desktop
else
  //You're on a tablet or phone
  

//THE OBJECT:
deviceDetector.device // contains 'desktop', 'tablet' or 'phone'.
deviceDetector.detect() // redetect
deviceDetector.isMobile // true if you're on a phone or tablet. False otherwise.
deviceDetector.userAgent // the user agent string (= navigator.userAgent)
```

