sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("comigo.scanner.controller.S0", {
		onScanSuccess: function (oEvent) {
			var oParameters = oEvent.getParameters();
			sap.m.MessageToast.show(oParameters.text);
		}
	});
});