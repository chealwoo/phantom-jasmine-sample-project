module("Capability", {
	setup : function() {
	},
	tearDown: function () {
    }
});

test( "test Capability object", function() {
	ok( (com.inq.utils.Capabilities != null), "" );
});

test( "test Capability.getDeviceType() related functions", function() {

	// com.inq.utils.Capabilities.deviceType saves return value of FlashPeer.getDeviceType()
	// Possible values are Standard, Tablet, Phone, and Unsupported.

	com.inq.utils.Capabilities.deviceType = "Phone";
	com.inq.utils.Capabilities.mobile = null;
	ok( com.inq.utils.Capabilities.isPhone(), "isPhone() should return true when com.inq.utils.Capabilities.deviceType is Phone" );
	ok( com.inq.utils.Capabilities.isMobile(), "IsMobile() should return true when com.inq.utils.Capabilities.deviceType is Phone" );

	com.inq.utils.Capabilities.deviceType = "Tablet";
	com.inq.utils.Capabilities.mobile = null;
	ok( com.inq.utils.Capabilities.isTablet(), "IsTablet() should return true when com.inq.utils.Capabilities.deviceType is Tablet" );
	ok( com.inq.utils.Capabilities.isMobile(), "IsMobile() should return true when com.inq.utils.Capabilities.deviceType is Tablet" );

	com.inq.utils.Capabilities.deviceType = null;
	com.inq.utils.Capabilities.mobile = null;
});

/**
 *   Testing com.inq.utils.Capabilities
 *
 *   This replaces HaxeCapabilitiesTestCase
 */
	
module("HaxeButtonTestCase Test", {
	setup : function() {
		// Create mock objects
		Application.applicationSave = Application.application;
		Application.application={clearImage:'clear.png'};
		Application.application.skinConfig={};
		com.inq.ui.Container.callSave = com.inq.ui.Container.call;
	},
	tearDown: function () {
		// Clean up
		com.inq.ui.Container.call = com.inq.ui.Container.callSave;
		Application.application = Application.applicationSave;
    }
});

test( "test com.inq.ui.Button to create a button", function() {
	var elementImg=[{id: '', nodeType: 'IMG', container: null, parentNode:{}, style: {display: 'none'}}];
	ok( (elementImg != null), "elementImg has been created" );

	var elementInput=[{id: '', nodeType: 'INPUT', container: null, parentNode:{}, style: {display: 'none'}}];
	ok( (elementInput != null), "elementInput has been created" );

	var elementTd=[{id: '', nodeType: 'TD', container: null, parentNode:{}, style: {display: 'none'}}];
	ok( (elementTd != null), "elementTd has been created" );

	var elementTable=[{id: '', nodeType: 'TABLE', container: null, parentNode:{}, style: {display: 'none'}}];
	ok( (elementTable == null), "elementTable has been created" );

	var mockElement = { 
		'name': null,
		'id': null,
		'tagName': null,
		'container': null,
		'className': null,
		'nodeName': null,
		'DomElement': function(type) {
			this.tagName = type;
			this.nodeName = type.toLowerCase();
		},
		getElementsByTagName: function(aname) {
			if (aname === "img") {
				return elementImg;
			} else if (aname === "input") {
				return elementInput;
			} else if (aname === "td") {
				return elementTd;
			} else if (aname === "table") {
				return elementTable;
			} else {
				return null;
			}
		}
	};

	com.inq.ui.Container.call = function (that, id) { 
		mockElement.id = id;
		that._div = mockElement;
		that.styles = {};
	};
	var _button = new com.inq.ui.Button('foo');

	ok( ( _button != null ), "_Button has been created." );

	_button.setID('foobar');
	ok( (_button != null), "Testing _button object after setID() is called" );

	ok( (_button._div.id != null), "Testing Button ID is set" );
	ok( (_button._img.id != null), "Testing Image ID is set" );
	ok( (_button._skin.id != null), "Testing Skin ID is set" );
	ok( (_button._span.id != null), "Testing Span ID is set" );
	ok( (_button._table.id != null), "Testing Table ID is set" );

	var _idButton = _button._div.id;
	
	equal( _button._img.id, _idButton + "_img", "Testing Image ID value" );
	equal( _button._skin.id, _idButton + "_skin", "Testing Skin ID value" );
	equal( _button._span.id, _idButton + "_span", "Testing Span ID value" );
	equal( _button._table.id, _idButton + "_table", "Testing Table ID value" );

});
