function createSetIntervalPolyfill() {
    var intervalId = 0;
    var intervalMap = {};

    function setIntervalPolyfill(cb, delay = 0, ...args) {
        if(typeof cb !== "function") {
            throw new TypeError("callback should be a function");
        }

        var id = intervalId + 1;

        function repeat() {
            intervalMap[id] = setTimeout(() => {
                cb(...args)
                if(intervalMap[id]) {
                     repeat();
                }
            }, delay);
        }

        repeat();

        return id;
    }

    function clearIntervalPolyfill(intervalId) {
        clearTimeout(intervalMap[id]);

        delete intervalMap[id];
    }

    return { setIntervalPolyfill, clearIntervalPolyfill };
}

const { setIntervalPolyfill, clearIntervalPolyfill } = createSetIntervalPolyfill();

let counter = 0;

function greet(name) {
    counter++;
    console.log("hello " + name);

    if(counter == 4) {
        clearIntervalPolyfill(id);
    } 
}

var id = setIntervalPolyfill(greet, 1000, "shubham");
