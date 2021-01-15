####

Function Call when the differnce between 2 keystroke is more than 300ms
Function Call when the differnce between last function call and current call is 300ms

#####

Search Example:
| | | | | | | | | | | | | | | | | | | | | | | | | |
a b c d e f g h i j k l m n o p q r s t u v w x y z
------ > 300ms => function call

#####

| | | | | | | | | | | | | | | | | | | | | | | | | |
a b c d e f g h i j k l m n o p q r s t u v w x y z
| | |
FC--300ms--FC--300ms--FC

#####

Other examples:
Tracking Window resizing Or Scroll events
Button Click Events : Shooting game where a machine gun can fire every 100ms and a Pistol can fire only after 300ms

```
/**
 * Debounce invokes `fn()` once `time` has elapsed. The timer is reset if any debounce calls take place
 * before time has elapsed.
 */
// Debouncing in JavaScript

//Test
// HTML
<input type="text" onkeyup="fnWithDebounce()" />;
// JS
let counter = 0;
const getData = () => {
  console.log("Fetching data", counter++);
};

const debounce = function (fn, delay) {
  let timeoutId;
  return function () {
    let self = this;
    let args = arguments;
    // Check for existing calls
    if (timeoutId) {
      // Reset timer
      clearTimeout(timeoutId);
    }
    timeoutId = setTimeout(() => {
      fn.apply(self, args);
    }, delay);
  };
};

const fnWithDebounce = debounce(getData, 600);

```

```
/**
  * Throttle limits the number of `fn()` executions until `time` has elapsed.
  *
  */
function throttle(fn, time) {
    let timeoutId;

    return function() {
      // Check for existing calls
      if (timeoutId) {
        // If timer is already running, exit
        return;
      }

      timeoutId = setTimeout(() => {
        // Invoke fn
        fn.apply(this, arguments);
        // Clear timeout to unblock next call
        timeoutId = null;

      }, time);
    }

  }
```
