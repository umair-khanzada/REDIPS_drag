/*jslint white: true, browser: true, undef: true, nomen: true, eqeqeq: true, plusplus: false, bitwise: true, regexp: true, strict: true, newcap: true, immed: true, maxerr: 14 */
/*global window: false, REDIPS: true */

/* enable strict mode */
"use strict";

var redips_init,
	toggle_animation,
	counter = 0;


// redips initialization
redips_init = function () {
	// reference to the REDIPS.drag library
	var	rd = REDIPS.drag;
	// initialization
	rd.init();
	// set drop option to "shift"
	rd.drop_option = 'shift';
	// enable animation on shifted elements
	rd.animation_shift = true;
	// do not ask on delete
	rd.trash_ask = false;
	// add counter to cloned element name
	rd.myhandler_cloned = function () {
		// increase counter
		counter++;
		// append to the DIV element name
		rd.obj.innerHTML += counter;
	};
};


// enable / disable animation
toggle_animation = function (chk) {
	REDIPS.drag.animation_shift = chk.checked;
};


// add onload event listener
if (window.addEventListener) {
	window.addEventListener('load', redips_init, false);
}
else if (window.attachEvent) {
	window.attachEvent('onload', redips_init);
}