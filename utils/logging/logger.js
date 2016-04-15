/*  
 * Class:         Logger
 * Description:   Base class for logging
 * Created:       13.04.2016
 * Last change:   13.04.2016
 * Collaborators: circa94, Kogs
*/

'use strict';

const isDebug = true;

module.exports = {

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
        this.printArray(array, this.info,this.info);
    },
    printArrayError: function(incoming, array) {
        this.printArray(array, this.error,this.error);
    },
    printArrayDebug: function(incoming, array) {
        if (isDebug) {
            this.printArray(incoming, array, this.debug);
        }

    },
    printArray: function(incoming, array,func) {
        var s = (incoming ? "<--" : "-->") + " Data: [";
        for (var i = 0; i < array.byteLength; i++) {
            s += array[i] + (i + 1 < array.byteLength ? "," : "");
        }
        s += "]";
        func(s);
    },
}