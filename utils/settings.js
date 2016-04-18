/*  
 * Class:         settings
 * Description:   Helper class read Settings.
 * Created:       18.04.2016
 * Last change:   18.04.2016
 * Collaborators: circa94, Kogs
*/

var config = require('../config.json');

'use strict';
module.exports = {

	readSetting : function(prop,defaulValue){
		var value = config[prop];
		return value != null ? value : defaulValue;

	}

}
