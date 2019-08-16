/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"comigo/scanner/test/integration/AllJourneys"
	], function () {
		QUnit.start();
	});
});