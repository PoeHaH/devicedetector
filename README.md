Device detector
==============
A simple js object to detect if yo uare running on a desktop, tablet or mobile device.


## Usage

```js
if(deviceDetector.device == 'desktop')
  //You're on a phone
else
  //You're on a tablet or phone
  

deviceDetector.device // contains 'desktop', 'tablet' or 'phone'.
deviceDetector.detect() // redetect
deviceDetector.isMobile // true if you're on a phone or tablet. False otherwise.
```

