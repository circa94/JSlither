'use strict';

var log = require('./logger');
var consts = require("./constants");

module.exports = {

    putInt24: function(offset, data, number) {
        number = Math.floor(number);
        if(number > consts.INT24MAX){
            log.error("Int24 out of bounds. "+ number +" but max is " +  consts.INT24MAX);
            number = consts.INT24MAX;
        }
        var byte1 = (number >> 16) & 0xFF;
        var byte2 = (number >> 8) & 0xFF;
        var byte3 = number & 0xFF;
        data[offset] = byte1;
        data[offset + 1] = byte2;
        data[offset + 2] = byte3;
        return 3;
    },

    putInt16: function(offset, data, number) {
        number = Math.floor(number);
        if(number > consts.INT16MAX){
            log.error("Int16 out of bounds. " +number +" but max is " +  consts.INT16MAX);
            number = consts.INT16MAX;
        }
        
        var byte1 = (number >> 8) & 0xFF;
        var byte2 = number & 0xFF;
        data[offset] = byte1;
        data[offset + 1] = byte2;
        return 2;
    },

    putInt8: function(offset, data, number) {
        number = Math.floor(number);
        if(number > consts.INT8MAX){
            log.error("Int8 out of bounds. "+ number +" but max is " +  consts.INT8MAX);
            number = consts.INT8MAX;
        }
        
        var byte1 = number & 0xFF;
        data[offset] = byte1;
        return 1;
    },

    putString: function(offset, data, string) {
        for (var i = 0; i < string.length; i++) {
            this.putInt8(offset + i, data, string.charCodeAt(i));
        }
        return string.length;
    },


    readInt8: function(offset, data) {
        return data[offset];
    },



    readInt24: function(offset, data) {
        var byte1 = data[offset];
        var byte2 = data[offset + 1];
        var byte3 = data[offset + 2];

        var int = byte1 << 16 | byte2 << 8 | byte3;

        return int;

    },

    readString: function(offset, data, length) {
        var string = "";
        for (var i = offset; i < length; i++) {
            string += String.fromCharCode(data[i])
        }
        return string;
    }

}
