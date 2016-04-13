'use strict';

const isDebug = true;

module.exports = {

    isDebug: true,

    info: function(msg) {
        console.log(new Date() + " info: " + msg);
    },
    debug: function(msg) {
        if (isDebug) {
            console.log(new Date() + " debug: " + msg);
        }
    },
    error: function(msg) {
        console.log(new Date() + " error: " + msg);
    },
    isDebugEnalbed: function() {
        return isDebug;
    },


    printArrayInfo: function(incoming, array) {
        this.printArray(array, this.info);
    },
    printArrayError: function(incoming, array) {
        this.printArray(array, this.error);
    },
    printArrayDebug: function(incoming, array) {
        if (isDebug) {
            this.printArray(incoming, array);
        }

    },
    printArray: function(incoming, array) {
        var s = (incoming ? "<--" : "-->") + " Data: [";
        for (var i = 0; i < array.byteLength; i++) {
            s += array[i] + (i + 1 < array.byteLength ? "," : "");
        }
        s += "]";
        console.log(s);

    },


}