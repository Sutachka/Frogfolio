(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"shestoe_atlas_1", frames: [[0,0,1600,1060]]},
		{name:"shestoe_atlas_2", frames: [[0,1328,268,183],[0,0,648,1326],[88,1717,150,28],[0,1774,133,32],[0,1640,96,75],[0,1571,113,67],[0,1717,86,55],[98,1640,90,46],[115,1571,74,44],[190,1617,57,46],[160,1513,81,39],[0,1513,158,56]]}
];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.CachedBmp_42 = function() {
	this.initialize(ss["shestoe_atlas_2"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.ОбоиЛавандовые = function() {
	this.initialize(ss["shestoe_atlas_2"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.бедро = function() {
	this.initialize(ss["shestoe_atlas_2"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.голень = function() {
	this.initialize(ss["shestoe_atlas_2"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.голова = function() {
	this.initialize(ss["shestoe_atlas_2"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.грудь = function() {
	this.initialize(ss["shestoe_atlas_2"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.животик = function() {
	this.initialize(ss["shestoe_atlas_2"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.кисть = function() {
	this.initialize(ss["shestoe_atlas_2"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.локоть = function() {
	this.initialize(ss["shestoe_atlas_2"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.плечо = function() {
	this.initialize(ss["shestoe_atlas_2"]);
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.попа = function() {
	this.initialize(ss["shestoe_atlas_2"]);
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.ступня = function() {
	this.initialize(ss["shestoe_atlas_2"]);
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.трава = function() {
	this.initialize(ss["shestoe_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.стопап = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.instance = new lib.ступня();
	this.instance.setTransform(5,0,0.7098,0.7098,7.2417);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.стопап, new cjs.Rectangle(0,0,116.3,53.6), null);


(lib.стопал = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.instance = new lib.ступня();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.стопал, new cjs.Rectangle(0,0,158,56), null);


(lib.попа_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.instance = new lib.попа();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.попа_1, new cjs.Rectangle(0,0,81,39), null);


(lib.плечоп = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.instance = new lib.плечо();
	this.instance.setTransform(0,0,0.6006,0.6006);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.плечоп, new cjs.Rectangle(0,0,34.3,27.7), null);


(lib.плечол = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.instance = new lib.плечо();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.плечол, new cjs.Rectangle(0,0,57,46), null);


(lib.локотьп = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.instance = new lib.локоть();
	this.instance.setTransform(0,0,0.6006,0.6006);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.локотьп, new cjs.Rectangle(0,0,44.5,26.5), null);


(lib.локотьл = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.instance = new lib.локоть();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.локотьл, new cjs.Rectangle(0,0,74,44), null);


(lib.кистьп = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.instance = new lib.кисть();
	this.instance.setTransform(0,0,0.6006,0.6006);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.кистьп, new cjs.Rectangle(0,0,54.1,27.7), null);


(lib.кистьл = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.instance = new lib.кисть();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.кистьл, new cjs.Rectangle(0,0,90,46), null);


(lib.животик_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.instance = new lib.животик();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.животик_1, new cjs.Rectangle(0,0,86,55), null);


(lib.грудь_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.instance = new lib.грудь();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.грудь_1, new cjs.Rectangle(0,0,113,67), null);


(lib.голова_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.instance = new lib.голова();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.голова_1, new cjs.Rectangle(0,0,96,75), null);


(lib.голеньп = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.instance = new lib.голень();
	this.instance.setTransform(2.85,0,0.7098,0.7098,7.2417);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.голеньп, new cjs.Rectangle(0,0,96.5,34.5), null);


(lib.голеньл = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.instance = new lib.голень();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.голеньл, new cjs.Rectangle(0,0,133,32), null);


(lib.бедроп = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.instance = new lib.бедро();
	this.instance.setTransform(2.5,0,0.7098,0.7098,7.2417);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.бедроп, new cjs.Rectangle(0,0,108.1,33.1), null);


(lib.бедрол = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.instance = new lib.бедро();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.бедрол, new cjs.Rectangle(0,0,150,28), null);


(lib.Символ1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,204,249,0.149)").s().p("AiNCJQgRgOAJgrQAJgmAcguQAagvAfgfQAigiAXAAQAWAAAVgJIAfgQQAQgJALAAQAPAAARAOQAQAOACAaQAAAVgIAgIgRA3QgJAgAAASQAAAUgiAVQgfAUgwANQguANgoABIgGABQgnAAgQgOg");
	this.shape.setTransform(15.3062,15.0532);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Символ1, new cjs.Rectangle(0,0,30.6,30.1), null);


(lib.крыло = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.instance = new lib.Символ1();
	this.instance.setTransform(0,30.1,1,1,0,0,0,0,30.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:15.3,regY:15.1,rotation:6.2267,x:16.8,y:16.8},0).wait(1).to({rotation:12.4533,x:18.15,y:18.75},0).wait(1).to({rotation:6.2267,x:16.8,y:16.8},0).wait(1).to({rotation:0,x:15.3,y:15.1},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,35.3,32.3);


(lib.шмель20 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.instance = new lib.крыло();
	this.instance.setTransform(55.45,5.65,1,1,0,18.4698,-161.5302,15.3,15);

	this.instance_1 = new lib.крыло();
	this.instance_1.setTransform(77.05,8.95,1,1,0,0,0,15.3,15.1);

	this.instance_2 = new lib.CachedBmp_42();
	this.instance_2.setTransform(0,23.35,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.шмель20, new cjs.Rectangle(0,-13.4,134,128.3), null);


(lib.шмель70 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.instance = new lib.шмель20();
	this.instance.setTransform(69.8,74,1,1,2.644,0,0,67.2,57.5);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AEYKKQgLgFgDgLQgEgLAIgLQAHgKAOgDQAKgEAKADIgBgDIgBgCIgRhWIg8jHQgZhWAAgTQAFgCAhBnIBKDtIAKAyIACAeQAAAJgFAIQgIAKgNAFIgJABQgJAAgHgEgAmYJGQgOgCgJgKIgEgEQgEgIABgJQABgLALgHQALgHAOACQAMACAHAGIAWiMIARiZQAJhcAIgTQAGAAgJBuIgYD1QgEAfgGAUIgKAbQgDAIgIAGQgJAFgKAAIgFAAgAGOIhQgLgFgDgLQgCgJAHgKIAFgHQAGgFAHgBQAKgDAJACQAAAAAAAAQAAgBAAAAQAAAAgBgBQAAAAAAAAIgahyIAAgBQgQgzgXhOQgbhbgCgZQAGgCAkBzIAoCAIACAFIATBAQAJAiACAWIAAASQAAAHgFAIQgHAKgMADQgFACgFAAQgHAAgGgDgAj1H2QgJgCgGgEIgEgFQgJgJABgKQACgKAJgHQALgGAMACQAKABAIAHIAAgEIAVh4QADgvAIhEQAKhoAKgdQAGABgMCCIgTDCQgGAogIAWIgFALQgDAHgHAFQgIAFgKAAIgFAAgAh0HRQgJgCgGgGIAAgBQgGgGABgHQACgIAGgFQAIgEAJABQAHABAGAFIAAgCIAMg9IALhwQAIhNAHgVQAEAAgJBgIgQCiIgFAWIgGAMQgCAGgGADQgGAEgIAAIgCAAgAIKGQQgIgDgCgIQgBgHAEgIIAFgFQAEgDAFgBQAIgCAGACIgNg+IgpiKQgRg3ABgLQADgBAVA/IA4C4IADAXIAAANQAAAGgDAFQgFAHgJADIgHABQgFAAgFgDgAFQmuQBBhZA0g6QAVgVAYAAIAGgMQAHgGAHgCIAJgBQAGAAAGADIAJAGQAJAJAAANQAAANgJAJQgJAJgMAAQgNAAgKgJQgFgFgCgHIgBgKIgBAAQgPAEgQAPQgVATg1BHQhPBlglArQgFgFBDhagAmHoCQgtg8gagcQgNgNgMgEIgIgDQAAANgJAJQgIAJgNAAQgMAAgKgJQgJgJAAgNQABgMAJgKQAJgJAMAAQANAAAJAJQAEAGADAGQAIAAAJADQAPAGAMANQAUATA0BEQBOBnAdAzIAAAAQgJAAhtiRg");
	this.shape.setTransform(63.35,94.2279);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.шмель70, new cjs.Rectangle(0,2.1,138.1,157.5), null);


// stage content:
(lib.прыжок = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// шмель
	this.instance = new lib.шмель70();
	this.instance.setTransform(853.9,321.1,1,1,0,0,0,69.8,79.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:69.9,regY:78.9,x:838.9,y:286.2},0).wait(1).to({x:825.1,y:263.85},0).wait(1).to({x:811.75,y:248.2},0).wait(1).to({x:798.45,y:237.4},0).wait(1).to({x:784.95,y:230.35},0).wait(1).to({x:771.15,y:226.65},0).wait(1).to({x:756.8,y:226},0).wait(1).to({x:741.75,y:228.35},0).wait(1).to({x:725.8,y:233.75},0).wait(1).to({x:708.6,y:242.5},0).wait(1).to({x:689.8,y:255.15},0).wait(1).to({x:668.6,y:272.75},0).wait(1).to({x:643.75,y:297.3},0).wait(1).to({x:612.1,y:333.95},0).wait(1).to({x:585.15,y:353.5},0).wait(1).to({x:553,y:368.1},0).wait(1).to({x:513.95,y:367},0).wait(1).to({x:476.1,y:330.4},0).wait(1).to({x:453.95,y:272.35},0).wait(1).to({x:442.85,y:215.9},0).wait(1).to({x:436.95,y:164.65},0).wait(1).to({x:431.55,y:133.4},0).wait(1).to({x:422.55,y:110.75},0).wait(1).to({x:409.8,y:96.65},0).wait(1).to({x:393.4,y:91.05},0).wait(1).to({x:373.3,y:94},0).wait(1).to({x:349.55,y:105.5},0).wait(1).to({x:322.1,y:125.5},0).wait(1).to({x:290.9,y:154.05},0).wait(1).to({x:256.05,y:191.1},0).wait(1).to({x:217.5,y:236.75},0).wait(1).to({x:175.25,y:291},0).wait(1).to({x:155.8,y:321.55},0).wait(1).to({x:135.2,y:345.45},0).wait(1).to({x:113.45,y:362.75},0).wait(1).to({x:90.5,y:373.45},0).wait(1).to({x:66.5,y:377.55},0).wait(1).to({x:41.25,y:375},0).wait(1).to({x:14.9,y:365.85},0).wait(1).to({x:-12.65,y:350.1},0).wait(1).to({x:-41.35,y:327.75},0).wait(1).to({x:-71.25,y:298.8},0).wait(1).to({x:-102.25,y:263.25},0).wait(1).to({x:-134.45,y:221.05},0).wait(1).to({x:-167.85,y:172.25},0).wait(1).to({x:-202.35,y:116.8},0).wait(1).to({x:-238.1,y:54.8},0).wait(1).to({x:-275,y:-13.95},0).wait(46).to({_off:true},1).wait(49));

	// Слой_65
	this.instance_1 = new lib.шмель20();
	this.instance_1.setTransform(1524.3,240.5,0.9999,0.9999,0.4398,0,0,28.7,17.7);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(85).to({_off:false},0).wait(1).to({regX:67,regY:49.8,rotation:0.5331,x:1560,y:248.25},0).wait(1).to({rotation:0.6248,x:1557.25,y:223.8},0).wait(1).to({rotation:0.7164,x:1554.15,y:199.3},0).wait(1).to({rotation:0.808,x:1550.45,y:174.85},0).wait(1).to({rotation:0.8996,x:1546.2,y:150.5},0).wait(1).to({rotation:0.9913,x:1541.2,y:126.3},0).wait(1).to({rotation:1.0829,x:1535.2,y:102.3},0).wait(1).to({rotation:1.1745,x:1527.95,y:78.7},0).wait(1).to({rotation:1.2662,x:1518.8,y:55.8},0).wait(1).to({rotation:1.3578,x:1506.75,y:34.25},0).wait(1).to({rotation:1.4494,x:1490.25,y:15.95},0).wait(1).to({rotation:1.541,x:1467.6,y:6.65},0).wait(1).to({rotation:1.6327,x:1443.45,y:10.95},0).wait(1).to({rotation:1.7243,x:1422.25,y:23.7},0).wait(1).to({rotation:1.8159,x:1403.7,y:40.2},0).wait(1).to({rotation:1.9076,x:1387.05,y:58.65},0).wait(1).to({rotation:1.9992,x:1371.75,y:78.15},0).wait(1).to({rotation:2.0908,x:1357.4,y:98.4},0).wait(1).to({rotation:2.1824,x:1346.7,y:113.4},0).wait(1).to({rotation:2.2741,x:1335.6,y:128.1},0).wait(1).to({rotation:2.3657,x:1324.25,y:142.55},0).wait(1).to({rotation:2.4573,x:1312.5,y:156.8},0).wait(1).to({rotation:2.549,x:1300.6,y:170.85},0).wait(1).to({rotation:2.6406,x:1288.4,y:184.7},0).wait(1).to({rotation:2.7322,x:1276.15,y:198.4},0).wait(1).to({rotation:2.8239,x:1263.75,y:212},0).wait(1).to({rotation:2.9155,x:1251.25,y:225.55},0).wait(1).to({rotation:3.0071,x:1238.75,y:239.05},0).wait(1).to({rotation:3.0987,x:1226.25,y:252.5},0).wait(1).to({rotation:3.1904,x:1213.75,y:266.1},0).wait(1).to({rotation:3.282,x:1201.3,y:279.7},0).wait(1).to({rotation:3.3736,x:1188.9,y:293.3},0).wait(1).to({rotation:3.4653,x:1176.6,y:307},0).wait(1).to({rotation:3.5569,x:1164.4,y:320.85},0).wait(1).to({rotation:3.6485,x:1152.4,y:334.75},0).wait(1).to({rotation:3.7401,x:1140.45,y:348.8},0).wait(1).to({rotation:3.8318,x:1136.9,y:357.8},0).wait(1).to({rotation:3.9234,x:1134.6,y:367.2},0).wait(1).to({rotation:4.015,x:1130.75,y:375.05},0).wait(1).to({rotation:3.9992,x:1128.1,y:363.95},0).wait(1).to({rotation:3.9833,x:1125.95,y:352.75},0).wait(1).to({rotation:3.9675,x:1121.25,y:344.2},0).wait(1).to({rotation:3.9516,x:1107.7,y:364.1},0).wait(1).to({rotation:3.9358,x:1094.55,y:384.3},0).wait(1).to({rotation:3.9199,x:1080.85,y:404.2},0).wait(1).to({rotation:3.9041,x:1066.3,y:423.3},0).wait(1).to({rotation:3.8882,x:1050.2,y:441.3},0).wait(1).to({rotation:3.8724,x:1031.65,y:456.6},0).wait(1).to({rotation:3.8565,x:1009,y:463.75},0).wait(1).to({rotation:3.8407,x:987.75,y:453.2},0).wait(1).to({rotation:3.8248,x:969.35,y:437.65},0).wait(1).to({rotation:3.809,x:951.75,y:421.2},0).wait(1).to({rotation:3.7932,x:934.7,y:404.15},0).wait(1).to({rotation:3.7773,x:918,y:386.65},0).wait(1).to({rotation:3.7615,x:901.8,y:368.85},0).wait(1).to({rotation:3.7456,x:885.9,y:350.7},0).wait(1).to({rotation:3.7298,x:870.5,y:332.1},0).wait(1).to({rotation:3.7139,x:856.35,y:312.6},0).wait(1));

	// Каркас_13
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AALDeQgLgFgCgLQgDgLAGgLQAHgLAOgDQAKgDAKADIgBgDIgBgDIgRhWIgQg2IgahYIgRg3QgZhWAAgTQAFgCAhBmIAUA8IAaBUIAbBcIALAzIABAeQAAAIgGAIQgHALgNAEIgJABQgJAAgHgDg");
	this.shape.setTransform(1560.4995,346.976);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AALDeQgLgFgDgLQgDgLAHgLQAHgLANgDQAMgDAJADIgBgDIgBgDIgRhWIgQg2IgahXIgRg4QgZhWAAgTQAEgCAiBmIAUA9IAZBTIAcBdIALAyQACATgBALQAAAJgGAIQgHAKgNAEIgKABQgIAAgHgDg");
	this.shape_1.setTransform(1560.7781,346.776);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AALDeQgLgFgDgLQgDgLAHgLQAHgLANgDQAMgDAJADIgBgDIgBgDIgRhWIgQg2IgahYIgRg3QgZhWAAgTQAEgCAiBmIAUA8IAZBUIAcBdQAIAdACAVQADATgBALQAAAJgGAIQgHAKgNAEIgKABQgIAAgHgDg");
	this.shape_2.setTransform(1561.075,346.626);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AALDeQgLgFgCgLQgDgLAGgLQAHgLAOgDQALgDAJADIgBgDIAAgDIgShWIgQg2IgahYIgRg3QgZhWAAgTQAEgCAjBmIATA8IAZBUIAdBcQAHAeACAVIACAeQAAAJgGAIQgHAKgNAEIgJABQgJAAgHgDg");
	this.shape_3.setTransform(1561.65,346.326);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AALDeQgLgFgDgLQgCgLAGgLQAHgLAOgDQALgDAJADIgBgDIAAgDIgThWIgQg2IgZhXIgRg4QgZhWAAgTQAEgCAjBmIATA9IAZBTIAcBdQAIAdACAVIACAeQAAAJgFAIQgIAKgNAEIgJABQgJAAgHgDg");
	this.shape_4.setTransform(1561.95,346.126);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AALDeQgLgFgDgLQgCgLAGgLQAHgLANgDQAMgDAJADIgBgDIgBgDIgShWIgQg2IgZhYIgQg3QgahWAAgTQAFgCAhBmIAUA8IAZBUIAcBdQAIAdADAVIABAeQAAAJgGAIQgHAKgNAEIgJABQgJAAgHgDg");
	this.shape_5.setTransform(1562.25,345.976);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AALDeQgLgFgCgLQgEgLAHgLQAHgLANgDQAMgDAJADIgBgDIAAgDIgShWIgRg2IgZhYIgRg3QgZhWAAgTQAFgCAhBmIAUA8IAaBUIAbBdQAJAdACAVIABAeQAAAJgGAIQgHAKgNAEIgJABQgJAAgHgDg");
	this.shape_6.setTransform(1562.55,345.826);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AALDeQgLgFgDgLQgDgLAHgLQAHgLANgDQAMgDAJADIgBgDIgBgDIgShWIgQg2IgZhYIgRg3QgZhWAAgTQAEgCAiBmIAUA8IAZBUIAcBcQAIAeACAVIACAeQAAAJgFAIQgIAKgNAEIgJABQgJAAgHgDg");
	this.shape_7.setTransform(1562.85,345.676);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AALDeQgLgFgDgLQgCgLAGgLQAHgLANgDQAMgDAJADIgBgDIgBgDIgShWIgPg2IgahXIgQg4QgahWAAgTQAFgCAhBmIAUA9IAZBTIAcBdIAKAyIACAeQAAAJgGAIQgHAKgNAEIgJABQgJAAgHgDg");
	this.shape_8.setTransform(1563.15,345.476);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AALDeQgLgFgCgLQgDgLAGgLQAHgLAOgDQALgDAJADIgBgDIgBgDIgRhWIgQg2IgahYIgRg3QgZhWAAgTQAEgCAjBmIATA8IAaBUIAbBdIALAyIABAeQAAAJgGAIQgHAKgNAEIgJABQgJAAgHgDg");
	this.shape_9.setTransform(1563.45,345.326);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AALDeQgLgFgDgLQgDgLAHgLQAHgLANgDQAMgDAJADIgBgDIgBgDIgRhWIgQg2IgahYIgRg3QgZhWAAgTQAEgCAiBmIAUA8IAaBUIAbBdIALAyQACATgBALQAAAJgGAIQgHAKgNAEIgKABQgIAAgHgDg");
	this.shape_10.setTransform(1563.7281,345.176);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AALDeQgLgFgDgLQgDgLAHgLQAHgLANgDQAMgDAJADIgBgDIgBgDIgRhWIgQg2IgahYIgRg3QgZhWAAgTQAEgCAiBmIAUA8IAZBUIAcBcIALAzQACATgBALQAAAJgGAIQgHAKgNAEIgKABQgIAAgHgDg");
	this.shape_11.setTransform(1564.0281,345.026);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AALDeQgLgFgDgLQgDgLAHgLQAHgLANgDQAMgDAJADIgBgDIgBgDIgRhWIgQg2IgahXIgRg4QgZhWAAgTQAEgCAiBmIAUA9IAZBTIAcBdQAIAdACAVQADATgBALQAAAJgGAIQgHAKgNAEIgKABQgIAAgHgDg");
	this.shape_12.setTransform(1564.325,344.826);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AALDeQgLgFgDgLQgDgLAHgLQAHgLANgDQAMgDAJADIgBgDIgBgDIgRhWIgRg2IgZhYIgRg3QgZhWAAgTQAEgCAiBmIAUA8IAZBUIAcBdQAIAdACAVQADATgBALQAAAJgGAIQgHAKgNAEIgKABQgIAAgHgDg");
	this.shape_13.setTransform(1564.625,344.676);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AALDeQgLgFgCgLQgDgLAGgLQAHgLAOgDQALgDAJADIgBgDIAAgDIgShWIgQg2IgahYIgRg3QgZhWAAgTQAEgCAjBmIATA8IAaBUIAbBdQAIAdACAVIACAeQAAAJgFAIQgIAKgNAEIgJABQgJAAgHgDg");
	this.shape_14.setTransform(1564.9,344.526);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AALDeQgLgFgDgLQgCgLAGgLQAHgLANgDQAMgDAJADIgBgDIgBgDIgShWIgQg2IgZhYIgQg3QgahWAAgTQAEgCAiBmIAUA8IAZBUIAcBcQAIAeACAVIACAeQAAAJgFAIQgIAKgNAEIgJABQgJAAgHgDg");
	this.shape_15.setTransform(1565.2,344.376);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AALDeQgLgFgDgLQgDgLAHgLQAHgLANgDQAMgDAJADIgBgDIgBgDIgShWIgQg2IgZhXIgQg4QgahWAAgTQAFgCAhBmIAUA9IAZBTIAdBdQAHAdADAVIABAeQAAAJgGAIQgHAKgNAEIgJABQgJAAgHgDg");
	this.shape_16.setTransform(1565.5,344.176);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AALDeQgLgFgDgLQgDgLAHgLQAHgLAOgDQALgDAJADIgBgDIAAgDIgShWIgRg2IgZhYIgRg3QgZhWAAgTQAEgCAjBmIATA8IAaBUIAbBdQAJAdABAVIACAeQAAAJgGAIQgHAKgNAEIgJABQgJAAgHgDg");
	this.shape_17.setTransform(1565.8,344.026);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AALDeQgLgFgDgLQgCgLAGgLQAHgLANgDQAMgDAJADIgBgDIgBgDIgShWIgQg2IgZhYIgRg3QgZhWAAgTQAEgCAiBmIAUA8IAZBUIAcBdIAKAyIACAeQAAAJgGAIQgHAKgNAEIgJABQgJAAgHgDg");
	this.shape_18.setTransform(1566.1,343.876);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AALDeQgLgFgCgLQgEgLAHgLQAHgLANgDQAMgDAJADIgBgDIgBgDIgShWIgPg2IgahYIgQg3QgahWAAgTQAFgCAhBmIAUA8IAZBUIAcBcIALAzIABAeQAAAJgGAIQgHAKgNAEIgJABQgJAAgHgDg");
	this.shape_19.setTransform(1566.4,343.726);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AALDeQgLgFgCgLQgEgLAHgLQAHgLAOgDQALgDAJADIgBgDIgBgCIgRhXIgRg2IgZhXIgRg4QgYhWgBgTQAEgCAjBmIATA9IAaBTIAbBdIALAyIABAeQAAAJgFAIQgIAKgNAEIgJABQgJAAgHgDg");
	this.shape_20.setTransform(1566.7,343.526);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AALDeQgLgFgDgLQgDgLAHgLQAHgLANgDQAMgDAJADIgBgDIgBgDIgRhWIgQg2IgahYIgRg3QgZhWAAgTQAEgCAiBmIAUA8IAZBUIAcBdIALAyQACATgBALQAAAJgGAIQgHAKgNAEIgKABQgIAAgHgDg");
	this.shape_21.setTransform(1566.9781,343.376);
	this.shape_21._off = true;

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AALDeQgLgFgDgLQgDgLAHgLQAHgLANgDQAMgDAJADIgBgDIgBgDIgRhWIgQg2IgahYIgRg3QgZhWAAgTQAEgCAiBmIAUA8IAZBUIAcBcQAIAeACAVQADATgBALQAAAJgGAIQgHAKgNAEIgKABQgIAAgHgDg");
	this.shape_22.setTransform(1567.575,343.076);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AALDeQgLgFgCgLQgEgLAHgLQAHgLANgDQAMgDAJADIgBgDIgBgCIgRhXIgQg2IgahXIgRg4QgZhWAAgTQAFgCAhBmIAUA9IAaBTIAbBdQAIAdADAVIABAeQAAAJgGAIQgHAKgNAEIgJABQgJAAgHgDg");
	this.shape_23.setTransform(1567.85,342.876);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AALDeQgLgFgCgLQgEgLAHgLQAHgLAOgDQALgDAJADIgBgDIgBgDIgRhWIgRg2IgZhYIgRg3QgZhWAAgTQAEgCAjBmIATA8IAaBUIAbBdQAIAdACAVIACAeQAAAJgFAIQgIAKgNAEIgJABQgJAAgHgDg");
	this.shape_24.setTransform(1568.15,342.726);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AALDeQgLgFgDgLQgCgLAGgLQAHgLANgDQAMgDAJADIgBgDIgBgDIgShWIgQg2IgZhYIgQg3QgahWAAgTQAEgCAiBmIAUA8IAZBUIAcBdQAIAdACAVIACAeQAAAJgGAIQgHAKgNAEIgJABQgJAAgHgDg");
	this.shape_25.setTransform(1568.45,342.576);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AALDeQgLgFgDgLQgDgLAHgLQAHgLANgDQAMgDAJADIgBgDIAAgDIgThWIgPg2IgahYIgRg3QgZhWAAgTQAEgCAiBmIAUA8IAZBUIAdBdQAHAcADAWIABAeQAAAJgGAIQgHAKgNAEIgJABQgJAAgHgDg");
	this.shape_26.setTransform(1568.75,342.426);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AALDeQgLgFgDgLQgDgLAHgLQAHgLAOgDQALgDAJADIgBgDIAAgCIgShXIgRg2IgZhXIgRg4QgZhWAAgTQAEgCAjBmIATA9IAaBTIAbBdQAIAdACAVIACAeQAAAJgFAIQgIAKgNAEIgJABQgJAAgHgDg");
	this.shape_27.setTransform(1569.05,342.226);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AALDeQgLgFgDgLQgCgLAGgLQAHgLANgDQAMgDAJADIgBgDIgBgDIgShWIgQg2IgZhYIgQg3QgahWAAgTQAFgCAhBmIAUA9IAZBTIAcBdIAKAyIACAeQAAAJgGAIQgHAKgNAEIgJABQgJAAgHgDg");
	this.shape_28.setTransform(1569.35,342.076);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AALDeQgLgFgCgLQgEgLAHgLQAHgLANgDQAMgDAJADIgBgDIgBgDIgShWIgPg2IgahYIgQg3QgahWAAgTQAFgCAhBmIAUA8IAZBUIAcBdIALAyIABAeQAAAJgGAIQgHAKgNAEIgJABQgJAAgHgDg");
	this.shape_29.setTransform(1569.65,341.926);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AALDeQgLgFgDgLQgDgLAHgLQAHgLANgDQAMgDAJADIgBgDIgBgCIgRhXIgQg2IgahXIgRg4QgZhWAAgTQAEgCAiBmIAUA9IAZBTIAcBdIALAyQACATgBALQAAAJgGAIQgHAKgNAEIgKABQgIAAgHgDg");
	this.shape_30.setTransform(1570.2281,341.576);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AALDeQgLgFgDgLQgDgLAHgLQAHgLANgDQAMgDAJADIgBgDIgBgDIgRhWIgQg2IgahYIgRg3QgZhWAAgTQAEgCAiBmIAUA9IAZBTIAcBdQAIAdACAVQADATgBALQAAAJgGAIQgHAKgNAEIgKABQgIAAgHgDg");
	this.shape_31.setTransform(1570.525,341.426);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AALDeQgLgFgCgLQgEgLAHgLQAHgLANgDQAMgDAJADIgBgDIgBgDIgRhWIgRg2IgZhYIgRg3QgZhWAAgTQAEgCAiBmIAUA8IAaBUIAcBdQAHAdADAVIABAeQAAAJgGAIQgHAKgNAEIgJABQgJAAgHgDg");
	this.shape_32.setTransform(1571.1,341.126);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AALDeQgLgFgDgLQgDgLAHgLQAHgLAOgDQALgDAJADIgBgDIgBgCIgShXIgQg2IgZhXIgRg4QgZhWAAgTQAEgCAjBmIATA9IAZBTIAcBdQAIAdACAVIACAeQAAAJgFAIQgIAKgNAEIgJABQgJAAgHgDg");
	this.shape_33.setTransform(1571.4,340.926);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AALDeQgLgFgDgLQgDgLAHgLQAHgLANgDQAMgDAJADIgBgDIgBgDIgShWIgPg2IgahYIgQg3QgahWAAgTQAFgCAhBmIAUA9IAZBTIAcBdQAIAdACAVIACAeQAAAJgGAIQgHAKgNAEIgJABQgJAAgHgDg");
	this.shape_34.setTransform(1571.7,340.776);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AALDeQgLgFgCgLQgEgLAHgLQAHgLANgDQAMgDAJADIgBgDIAAgDIgShWIgQg2IgahYIgRg3QgZhWAAgTQAEgCAiBmIAUA8IAaBUIAbBdQAJAdACAVIABAeQAAAJgGAIQgHAKgNAEIgJABQgJAAgHgDg");
	this.shape_35.setTransform(1572,340.626);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AALDeQgLgFgDgLQgDgLAHgLQAHgLANgDQAMgDAJADIgBgDIgBgDIgRhWIgRg2IgZhYIgRg3QgZhWAAgTQAEgCAiBmIAUA8IAaBUIAbBdQAIAdACAVIACAeQAAAJgFAIQgIAKgNAEIgJABQgJAAgHgDg");
	this.shape_36.setTransform(1572.3,340.476);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AALDeQgLgFgDgLQgCgLAGgLQAHgLANgDQAMgDAJADIgBgDIgBgCIgShXIgQg2IgZhXIgQg4QgahWAAgTQAFgCAhBmIAUA9IAZBTIAcBdIAKAyIACAeQAAAJgGAIQgHAKgNAEIgJABQgJAAgHgDg");
	this.shape_37.setTransform(1572.6,340.276);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AALDeQgLgFgCgLQgDgLAGgLQAHgLAOgDQALgDAJADIgBgDIgBgDIgShWIgPg2IgahYIgRg3QgZhWAAgTQAEgCAjBmIATA9IAZBTIAcBdIAKAyIACAeQAAAJgGAIQgHAKgNAEIgJABQgJAAgHgDg");
	this.shape_38.setTransform(1572.9,340.126);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AALDeQgLgFgDgLQgDgLAHgLQAHgLANgDQAMgDAJADIgBgDIgBgCIgRhXIgQg2IgahXIgRg4QgZhWAAgTQAEgCAiBmIAUA9IAZBTIAcBdQAIAdACAVQADATgBALQAAAJgGAIQgHAKgNAEIgKABQgIAAgHgDg");
	this.shape_39.setTransform(1573.775,339.626);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("AALDeQgLgFgDgLQgDgLAHgLQAHgLANgDQAMgDAJADIgBgDIgBgDIgRhWIgRg2IgZhXIgRg4QgZhWAAgTQAEgCAiBmIAUA9IAZBTIAcBdQAIAdACAVQADATgBALQAAAJgGAIQgHAKgNAEIgKABQgIAAgHgDg");
	this.shape_40.setTransform(1574.075,339.476);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AALDeQgLgFgDgLQgCgLAGgLQAHgLAOgDQALgDAJADIgBgDIAAgDIgShWIgRg2IgZhYIgRg3QgZhWAAgTQAEgCAjBmIATA8IAaBUIAcBdQAHAdACAVIACAeQAAAJgGAIQgHAKgNAEIgJABQgJAAgHgDg");
	this.shape_41.setTransform(1574.35,339.326);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AALDeQgLgFgDgLQgCgLAGgLQAHgLAOgDQALgDAJADIgBgDIgBgDIgShWIgQg2IgZhYIgRg3QgZhWAAgTQAEgCAjBmIATA8IAZBUIAcBdQAIAdACAVIACAeQAAAJgFAIQgIAKgNAEIgJABQgJAAgHgDg");
	this.shape_42.setTransform(1574.65,339.176);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("AALDeQgLgFgCgLQgEgLAHgLQAHgLANgDQAMgDAJADIgBgDIgBgCIgShXIgPg2IgahXIgQg4QgahWAAgTQAFgCAhBmIAUA9IAZBTIAcBdQAIAdADAVIABAeQAAAJgGAIQgHAKgNAEIgJABQgJAAgHgDg");
	this.shape_43.setTransform(1574.95,338.976);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("AALDeQgLgFgCgLQgEgLAHgLQAHgLANgDQAMgDAJADIgBgDIAAgDIgShWIgRg2IgZhXIgRg4QgZhWAAgTQAEgCAiBmIAUA9IAaBTIAbBdQAJAdACAVIABAeQAAAJgGAIQgHAKgNAEIgJABQgJAAgHgDg");
	this.shape_44.setTransform(1575.25,338.826);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("AALDeQgLgFgDgLQgDgLAHgLQAHgLANgDQAMgDAJADIgBgDIgBgDIgShWIgQg2IgZhYIgRg3QgZhWAAgTQAEgCAiBmIAUA8IAZBUIAcBdIAKAyIACAeQAAAJgGAIQgHAKgNAEIgJABQgJAAgHgDg");
	this.shape_45.setTransform(1575.55,338.676);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s().p("AALDeQgLgFgDgLQgDgLAHgLQAHgLANgDQAMgDAJADIgBgDIgBgDIgShWIgPg2IgahYIgRg3QgZhWAAgTQAFgCAhBmIAUA8IAZBUIAcBdIAKAyIACAeQAAAJgGAIQgHAKgNAEIgJABQgJAAgHgDg");
	this.shape_46.setTransform(1575.85,338.526);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000000").s().p("AALDeQgLgFgCgLQgDgLAGgLQAHgLAOgDQALgDAJADIgBgDIgBgCIgRhXIgQg2IgahXIgRg4QgYhWgBgTQAEgCAiBmIAUA9IAaBTIAbBdIAKAyIACAeQAAAJgFAIQgIAKgNAEIgJABQgJAAgHgDg");
	this.shape_47.setTransform(1576.15,338.326);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#000000").s().p("AALDeQgLgFgCgLQgEgLAHgLQAHgLANgDQAMgDAJADIgBgDIAAgCIgShXIgQg2IgahXIgRg4QgZhWAAgTQAEgCAiBmIAUA9IAaBTIAcBdQAHAdADAVIABAeQAAAJgGAIQgHAKgNAEIgJABQgJAAgHgDg");
	this.shape_48.setTransform(1577.3,337.676);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#000000").s().p("AALDeQgLgFgDgLQgDgLAHgLQAHgLAOgDQALgDAJADIgBgDIAAgDIgShWIgRg2IgZhXIgRg4QgZhWAAgTQAEgCAjBmIATA9IAaBTIAbBdQAIAdACAVIACAeQAAAJgFAIQgIAKgNAEIgJABQgJAAgHgDg");
	this.shape_49.setTransform(1577.6,337.526);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#000000").s().p("AALDeQgLgFgDgLQgCgLAGgLQAHgLANgDQAMgDAJADIgBgDIgBgDIgShWIgQg2IgZhYIgQg3QgahWAAgTQAFgCAhBmIAUA8IAZBUIAcBdQAIAdACAVIACAeQAAAJgFAIQgIAKgNAEIgJABQgJAAgHgDg");
	this.shape_50.setTransform(1577.9,337.376);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#000000").s().p("AALDeQgLgFgCgLQgEgLAHgLQAHgLANgDQAMgDAJADIgBgDIgBgDIgShWIgPg2IgahYIgQg3QgahWAAgTQAFgCAhBmIAUA8IAZBUIAcBdQAJAdACAVIABAeQAAAJgGAIQgHAKgNAEIgJABQgJAAgHgDg");
	this.shape_51.setTransform(1578.2,337.226);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#000000").s().p("AALDeQgLgFgDgLQgDgLAHgLQAHgLAOgDQALgDAJADIgBgDIAAgCIgShXIgRg2IgZhXIgRg4QgZhWAAgTQAEgCAjBmIATA9IAaBTIAbBdQAJAdABAVIACAeQAAAJgGAIQgHAKgNAEIgJABQgJAAgHgDg");
	this.shape_52.setTransform(1578.5,337.026);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#000000").s().p("AALDeQgLgFgDgLQgCgLAGgLQAHgLANgDQAMgDAJADIgBgDIgBgDIgShWIgQg2IgZhXIgRg4QgZhWAAgTQAFgCAhBmIAUA9IAZBTIAcBdIAKAyIACAeQAAAJgGAIQgHAKgNAEIgJABQgJAAgHgDg");
	this.shape_53.setTransform(1578.8,336.876);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#000000").s().p("AALDeQgLgFgCgLQgEgLAHgLQAHgLANgDQAMgDAJADIgBgDIgBgDIgRhWIgQg2IgahYIgRg3QgZhWAAgTQAFgCAhBmIAUA8IAaBUIAbBdIALAyIABAeQAAAJgGAIQgHAKgNAEIgJABQgJAAgHgDg");
	this.shape_54.setTransform(1579.1,336.726);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#000000").s().p("AALDeQgLgFgCgLQgEgLAHgLQAHgLANgDQAMgDAJADIgBgDIAAgDIgShWIgRg2IgZhYIgRg3QgZhWAAgTQAFgCAhBmIAUA8IAaBUIAcBdQAHAdADAVIABAeQAAAJgGAIQgHAKgNAEIgJABQgJAAgHgDg");
	this.shape_55.setTransform(1580.55,335.926);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#000000").s().p("AALDeQgLgFgDgLQgDgLAHgLQAHgLANgDQAMgDAJADIgBgDIgBgCIgShXIgQg2IgZhXIgRg4QgZhWAAgTQAEgCAiBmIAUA9IAZBTIAcBdQAIAdACAVIACAeQAAAJgFAIQgIAKgNAEIgJABQgJAAgHgDg");
	this.shape_56.setTransform(1580.85,335.726);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#000000").s().p("AALDeQgLgFgDgLQgCgLAGgLQAHgLANgDQAMgDAJADIgBgDIgBgDIgShWIgPg2IgahXIgQg4QgahWAAgTQAFgCAhBmIAUA9IAZBTIAcBdQAIAdACAVIACAeQAAAJgGAIQgHAKgNAEIgJABQgJAAgHgDg");
	this.shape_57.setTransform(1581.15,335.576);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#000000").s().p("AALDeQgLgFgCgLQgDgLAGgLQAHgLAOgDQALgDAJADIgBgDIAAgDIgShWIgQg2IgahYIgRg3QgZhWAAgTQAEgCAjBmIATA8IAaBUIAbBdQAJAdACAVIABAeQAAAJgGAIQgHAKgNAEIgJABQgJAAgHgDg");
	this.shape_58.setTransform(1581.45,335.426);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#000000").s().p("AALDeQgLgFgDgLQgCgLAGgLQAHgLAOgDQALgDAJADIgBgDIAAgDIgShWIgRg2IgZhYIgRg3QgZhWAAgTQAEgCAjBmIATA8IAaBUIAbBdQAIAdACAVIACAeQAAAJgFAIQgIAKgNAEIgJABQgJAAgHgDg");
	this.shape_59.setTransform(1581.75,335.276);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#000000").s().p("AALDeQgLgFgDgLQgCgLAGgLQAHgLANgDQAMgDAJADIgBgDIgBgCIgShWIgQg3IgZhXIgQg4QgahWAAgTQAFgCAhBmIAUA9IAZBTIAcBdIALAyIABAeQAAAJgGAIQgHAKgNAEIgJABQgJAAgHgDg");
	this.shape_60.setTransform(1582.05,335.076);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#000000").s().p("AALDeQgLgFgCgLQgEgLAHgLQAHgLANgDQAMgDAJADIgBgDIgBgDIgRhWIgRg2IgZhXIgRg4QgZhWAAgTQAEgCAiBmIAUA9IAaBTIAbBdIALAyIABAeQAAAJgGAIQgHAKgNAEIgJABQgJAAgHgDg");
	this.shape_61.setTransform(1582.35,334.926);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#000000").s().p("AALDeQgLgFgDgLQgDgLAHgLQAHgLANgDQAMgDAJADIgBgDIgBgCIgRhWIgQg3IgahXIgRg4QgZhWAAgTQAEgCAiBmIAUA9IAZBTIAcBdQAIAdACAVQADATgBALQAAAJgGAIQgHAKgNAEIgKABQgIAAgHgDg");
	this.shape_62.setTransform(1583.225,334.426);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#000000").s().p("AALDeQgLgFgDgLQgDgLAHgLQAHgLAOgDQALgDAJADIgBgDIAAgDIgShWIgRg2IgZhYIgRg3QgZhWAAgTQAEgCAjBmIATA8IAaBUIAcBdQAHAdACAVIACAeQAAAJgGAIQgHAKgNAEIgJABQgJAAgHgDg");
	this.shape_63.setTransform(1583.8,334.126);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#000000").s().p("AALDeQgLgFgDgLQgCgLAGgLQAHgLANgDQAMgDAJADIgBgDIgBgDIgShWIgQg2IgZhYIgRg3QgZhWAAgTQAEgCAiBmIAUA8IAZBUIAcBdQAIAdACAVIACAeQAAAJgGAIQgHAKgNAEIgJABQgJAAgHgDg");
	this.shape_64.setTransform(1584.1,333.976);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#000000").s().p("AALDeQgLgFgCgLQgEgLAHgLQAHgLANgDQAMgDAJADIgBgDIgBgCIgShWIgPg3IgahXIgQg4QgahWAAgTQAFgCAhBmIAUA9IAZBTIAcBdQAIAdADAVIABAeQAAAJgGAIQgHAKgNAEIgJABQgJAAgHgDg");
	this.shape_65.setTransform(1584.4,333.776);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#000000").s().p("AALDeQgLgFgCgLQgEgLAHgLQAHgLAOgDQALgDAJADIgBgDIAAgDIgShWIgRg2IgZhXIgRg4QgZhWAAgTQAEgCAjBmIATA9IAaBTIAbBdQAJAdACAVIABAeQAAAJgFAIQgIAKgNAEIgJABQgJAAgHgDg");
	this.shape_66.setTransform(1584.7,333.626);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#000000").s().p("AALDeQgLgFgDgLQgCgLAGgLQAHgLANgDQAMgDAJADIgBgDIgBgDIgShWIgQg2IgZhYIgQg3QgahWAAgTQAEgCAiBmIAUA8IAZBUIAcBdIAKAyIACAeQAAAJgFAIQgIAKgNAEIgJABQgJAAgHgDg");
	this.shape_67.setTransform(1585,333.476);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#000000").s().p("AALDeQgLgFgDgLQgCgLAGgLQAHgLANgDQAMgDAJADIgBgDIgBgDIgShWIgPg2IgahYIgQg3QgahWAAgTQAFgCAhBmIAUA8IAZBUIAcBdIALAyIABAeQAAAJgGAIQgHAKgNAEIgJABQgJAAgHgDg");
	this.shape_68.setTransform(1585.3,333.326);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#000000").s().p("AALDeQgLgFgCgLQgDgLAGgLQAHgLAOgDQAKgDAKADIgBgDIgBgDIgRhWIgQg2IgahYIgRg3QgZhWAAgTQAEgCAiBmIAUA8IAaBUIAbBcIALAzIABAeQAAAIgGAIQgHALgNAEIgJABQgJAAgHgDg");
	this.shape_69.setTransform(1585.5995,333.176);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#000000").s().p("AAEDeQgKgGgDgKQgCgLAHgLQAGgLAOgCQAMgDAIAEIAAgDIgBgDIgOhXIgOg3IgXhYIgPg4QgXhWgBgTQAFgCAhBnIARA8IAXBVIAYBeQAGAdACAVIABAeQgBAJgFAIQgIAKgNADIgJABQgJAAgHgEg");
	this.shape_70.setTransform(1572.725,323.6731);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#000000").s().p("AgDDeQgLgGgCgLQgCgLAIgKQAHgKANgCQAMgDAIAEIAAgDIgBgDIgKhXIgMg4IgUhYIgNg5QgWhWgBgTQAEgCAgBnIAPA+IAWBVIATBeQAGAeAAAVQACATgCALQgBAJgGAIQgIAKgNADIgFAAQgLAAgIgFg");
	this.shape_71.setTransform(1559.9071,314.1639);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#000000").s().p("AgLDeQgLgGgBgLQgCgMAJgKQAHgJANgCQAMgCAIAEIAAgDIgBgDIgGhYIgJg3IgShaIgMg4QgUhXgBgTQAEgCAfBoIANA+IATBVIAQBgIAEAzIgCAeQgBAIgGAIQgJAKgNACIgFABQgKAAgJgGg");
	this.shape_72.setTransform(1547.1,304.6613);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#000000").s().p("AgSDeQgLgHgBgLQgCgLAJgKQAJgKANgBQALgCAJAFIgBgDIAAgDIgDhYIgHg4IgPhaIgKg5QgShXgCgSQAEgCAeBoIALA+IARBWQAKA/ABAiQADAegBAVIgDAeQgBAIgHAHQgIAJgOADIgDAAQgLAAgJgGg");
	this.shape_73.setTransform(1534.2875,295.1052);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#000000").s().p("AgXDdQgKgHgCgLQAAgMAJgJQAIgJAOgBQALgCAIAGIAAgDIAAgEIABhYIgFg4IgMhaIgIg5IgUhpQAGgCAaBoIALA/IAOBWQAHBAAAAhQACAfgCAUQgBATgDALQgBAIgHAHQgJAJgOACIgCAAQgMAAgJgHg");
	this.shape_74.setTransform(1521.1808,285.5537);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#000000").s().p("AgZDcQgKgHgBgLQgBgMAKgJQAJgJAOAAQAKgBAJAFIgBgDIAAgDIAFhYIgCg4QgDgogIgyIgGg5IgRhqQAEgCAaBpIAJA+IALBYQAGBAgCAgQAAAfgDAUIgFAeQgBAIgHAHQgKAJgMABIgDAAQgMAAgJgIg");
	this.shape_75.setTransform(1507.8254,275.9542);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#000000").s().p("AgcDbQgKgIAAgLQAAgMAJgIQAJgIAPAAQAKgBAIAGIAAgDIAAgEIAJhXIAAg4QgCgogGgzIgFg5QgLhYgFgSQAFgCAZBpQAFAeACAhIAIBYQADBAgDAhQgBAegEAUIgGAeQgCAIgHAHQgKAIgMABQgOgBgKgIg");
	this.shape_76.setTransform(1494.5442,266.3731);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#000000").s().p("AggDaQgKgIAAgLQAAgMALgIQAJgIAOAAQALAAAIAGIAAgDIAAgDIAMhYIADg3QgBgogFgzIgDg5QgLhZgEgRQAEgCAZBpQAEAeABAiIAGBXQABBAgGAhQgCAegEAVIgHAdQgCAIgIAGQgKAIgNAAQgOAAgJgJg");
	this.shape_77.setTransform(1481.3571,256.7239);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#000000").s().p("AgkDYQgJgJAAgLQABgLAKgIQAKgIAOABQALAAAIAHIAAgDIAAgEIAPhWIAFg4QABgogDgzIgBg5QgKhXgFgSQAHAHAVBgQAEAdgBAiIAEBYQgCBAgHAhQgDAegGAUIgIAdQgCAHgIAHQgKAHgNAAQgOgBgJgJg");
	this.shape_78.setTransform(1468.2,247.125);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#000000").s().p("AgSDhQgNgBgJgKQgJgIABgMQABgLAKgIQAKgHAOACQAMAAAHAHIAAgDIAAgEQANhAAGgWIAIg3QACgogCgzIAAg5QgHhYgGgSQAFgBAWBqQADAcgCAjIABBYQgDBAgKAgQgEAegHAUIgJAcQgDAIgHAGQgJAHgMAAIgDgBg");
	this.shape_79.setTransform(1455.07,237.4048);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#000000").s().p("AgXDgQgOgCgJgJQgIgKABgLQABgLALgHQALgIANADQAMABAGAHIABgEIAAgDQAQhAAHgVIAKg3QAEgogBgzQAAgeACgaQgGhZgGgRQAEgCAVBqQADAdgDAiIgCBYQgGBAgLAgQgGAegHATIgKAcQgDAIgIAGQgIAFgLAAIgEAAg");
	this.shape_80.setTransform(1442.0928,227.7372);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#000000").s().p("AgeDfQgOgDgIgKQgIgJABgLQADgMALgHQAKgGAOACQAMACAGAHIABgDIABgEQARg/AIgVIAMg2QAGgogBgzIAEg4QgEhZgHgRQAFgCAUBrQACAdgFAiIgEBYQgIBAgNAfIgPAwIgLAcQgDAIgHAFQgJAFgKAAIgGAAg");
	this.shape_81.setTransform(1429.1611,218.0212);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#000000").s().p("AgkDdQgOgDgHgKQgIgKACgLQACgMALgGQALgGAOADQAMACAGAHIABgDIAAgDQAUg/AJgUIAPg2QAHgnABgzIAFg4QgChZgIgRQAGgCASBrQABAdgFAiIgHBYQgLA/gOAfIgRAvIgMAcQgDAHgIAFQgJAFgKAAIgGgBg");
	this.shape_82.setTransform(1416.2461,208.299);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#000000").s().p("AgqDbQgOgDgHgLQgIgKACgLQADgLAMgGQALgGANAEQAMABAGAIIABgDIABgDQAWg+AKgUIARg1QAIgnADgzIAHg4QgBhYgIgSQAFgBARBrQABAdgHAiIgJBXQgNA/gQAeIgTAvIgMAbQgDAHgKAFQgIAEgJAAIgHgBg");
	this.shape_83.setTransform(1403.3352,198.5357);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#000000").s().p("AgxDZQgNgFgIgKQgGgKACgLQAEgLALgGQALgGANAFQAMACAGAIIABgDIABgDQAYg+AMgTIATg0QAKgmADgzIAJg4QABhYgJgSQAGgBAPBrQAAAdgIAiIgMBXQgPA+gRAdQgLAdgKARIgNAbQgEAHgJAEQgHAEgJAAIgJgBg");
	this.shape_84.setTransform(1390.4515,188.7769);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#000000").s().p("Ag3DWQgNgEgHgLQgGgLACgKQAEgLAMgGQALgFANAFQAMADAGAIIAAgDIACgEQAbg8AMgSIAVgzQALgnAFgyIAKg4QADhYgJgSQAFAAAPBqQAAAegKAhIgOBXQgRA9gUAdQgMAcgKARIgPAaQgEAHgJAEQgHADgIAAQgFAAgFgCg");
	this.shape_85.setTransform(1377.5882,178.9841);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#000000").s().p("Ag+DTQgMgEgHgMQgGgKADgLQAEgLAMgFQAMgFANAGQALADAGAIIABgDIABgDQAdg7AOgSIAXgyQANgmAFgzQAGgdAGgZQAFhZgKgRQAFgCAOBsQgBAcgLAiIgRBWQgTA9gVAcQgOAbgKARIgQAZQgEAHgJAEQgGACgHAAQgGAAgHgCg");
	this.shape_86.setTransform(1364.7137,169.1681);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#000000").s().p("AhEDRQgMgGgGgLQgGgLADgLQAFgKAMgFQAMgEANAGQALADAFAJIABgDIACgDQAfg6AOgSIAagxQANgmAIgxQAGgdAHgaQAHhXgLgTQAGAAAMBrQgCAcgMAiIgTBWQgWA8gWAaQgOAbgMAQIgQAZQgFAGgKAEQgFACgGAAQgHAAgHgCg");
	this.shape_87.setTransform(1351.8605,159.344);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#000000").s().p("AhEDPQgMgGgGgLQgGgLAEgLQAFgKAMgEQAMgFANAHQALAEAFAIIABgDIABgDQAhg5APgRIAagxQANgmAFgyIANg2QAFhYgKgSQAFgBANBrQAAAdgMAhQgIAsgJArQgWA8gYAaIgaAqIgSAZQgEAHgKACQgFACgGAAQgHAAgHgDg");
	this.shape_88.setTransform(1340.2036,173.8379);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#000000").s().p("AhEDOQgNgHgFgLQgFgLAEgLQAFgKAMgEQAMgDANAGQALAEAFAJIABgDIABgDQAjg4AOgRIAagwQAOgnADgyIAMg3QAEhXgKgSQAFgCAOBsQAAAcgLAiIgQBXQgVA8gaAZQgPAbgMAPIgSAYQgFAGgJADQgGACgFAAQgHAAgHgDg");
	this.shape_89.setTransform(1328.5861,188.3082);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#000000").s().p("AhFDMQgMgGgFgMQgFgLAFgLQAFgKANgDQAMgEAMAHQALAFAEAJIACgDIABgDQAjg4APgRIAbgvQAOgmABgyQAFgdAFgaQADhZgJgRQAFgCAPBrQAAAegJAhIgPBXQgVA8gbAZQgQAagMAQIgTAXQgFAGgKADIgJABQgIAAgIgEg");
	this.shape_90.setTransform(1316.9434,202.7519);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#000000").s().p("AhGDLQgLgHgFgMQgFgMAFgKQAGgJAMgEQAMgDANAHQAKAGAFAIIABgCIACgDQAkg3AOgRIAdguQANgmAAgzIAIg3QAChZgJgRQAFgCAQBrQAAAegIAhIgMBYQgVA7gdAZQgRAZgMAQIgTAXQgGAGgKACIgHABQgJAAgJgEg");
	this.shape_91.setTransform(1305.3184,217.2107);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#000000").s().p("AhGDJQgLgHgFgMQgEgMAFgKQAGgJANgDQAMgCAMAHQALAFAEAJIABgDIACgCIA0hHIAdguQANgmgCgyQADgeAEgaQAAhZgIgRQAFgCARBrQABAdgIAiIgLBYQgUA8gfAXIgdApIgUAXQgGAFgKACIgHABQgJAAgJgFg");
	this.shape_92.setTransform(1293.6796,231.6587);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#000000").s().p("AhGDIQgLgIgFgMQgDgLAFgLQAGgJANgDQANgCALAIQAKAGAEAJIABgDIACgDIA1hFIAeguQANglgEgzIAGg4QAAhZgJgRQAFgBASBqQABAdgGAiIgJBYQgUA8ghAXQgRAZgNAPIgVAWQgGAGgKABIgGABQgKAAgIgFg");
	this.shape_93.setTransform(1282.0846,246.1318);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#000000").s().p("AhHDGQgLgIgEgMQgDgMAGgKQAGgJANgCQANgCALAIQAKAGADAJIACgDIACgCIA2hFIAfgsQANgmgHgzIAGg4QgDhZgIgRQAGgBASBqQACAdgGAiIgHBZQgUA6giAXIgfAoIgVAVQgGAGgKABIgEABQgLAAgKgGg");
	this.shape_94.setTransform(1270.4516,260.5622);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#000000").s().p("AhHDEQgLgIgDgNQgEgMAGgJQAHgKANgBQAMgCAMAJQAKAGADAJIACgCIACgDIA3hDIAfgsQANgmgIgzIAEg4QgEhZgHgRQAEgBAUBqQADAdgFAiIgFBZQgUA6gkAXQgSAYgOAPQgMAOgKAHQgGAFgKABIgCABQgLAAgLgHg");
	this.shape_95.setTransform(1258.8522,275.0048);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#000000").s().p("AhHDCQgLgIgDgNQgDgMAGgJQAHgJANgBQANgCALAJQAKAHACAJIACgCIACgDIA4hCIAggrQANgmgKgzIADg5QgFhYgHgRQAFgCAVBqQACAdgEAiIgDBZQgUA7glAVQgSAYgOAPIgXAUQgGAGgKAAIgDAAQgLAAgKgHg");
	this.shape_96.setTransform(1247.2507,289.4295);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#000000").s().p("AhIDBQgKgJgDgNQgDgMAHgJQAHgJAOgBQAMAAALAJQAKAGACAKIACgDIACgCIA5hCIAhgqQANglgMgzQAAgeABgbQgGhZgHgRQAFgBAWBpQADAegDAiQAAAsgCAtQgTA6gnAVQgSAYgPAOIgXAUQgHAFgKAAQgMAAgMgHg");
	this.shape_97.setTransform(1235.655,303.8489);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#000000").s().p("AhJDEQgLgIgEgMQgDgMAGgKQAHgJANgCQANgBALAJQAKAGADAJIACgCIABgDIA3hEIAegtQAOglgEgzQACgeAEgaQAAhZgGgRQAEgCAQBrQABAdgHAiIgJBYQgVA8ghAWIggAoQgMAOgKAGQgGAGgKABIgDAAQgLAAgKgHg");
	this.shape_98.setTransform(1222.9317,318.7548);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#000000").s().p("AhMDIQgLgIgEgMQgEgLAGgLQAGgJANgCQANgCALAIQAKAGAEAJIABgDIACgCIAzhHIAcgvQAPgmADgyIAMg3QAHhYgHgSQAEgBAJBrQgBAegKAhIgRBXQgXA6gbAZQgQAagNAQIgWAVQgGAGgKABIgEAAQgKAAgKgFg");
	this.shape_99.setTransform(1210.3069,333.5389);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#000000").s().p("AhODKQgLgHgFgMQgEgMAFgKQAGgKANgCQAMgDAMAHQAKAGAEAJIACgDIABgDIAvhJQAKgRARggQAQgmAKgwIARg2QANhXgHgTQAFAAACBrQgDAegOAfIgYBVQgYA7gWAbQgOAagNARIgVAWQgGAGgJACIgHABQgJAAgJgFg");
	this.shape_100.setTransform(1197.6984,348.2846);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#000000").s().p("AhRDLQgMgGgFgMQgFgMAFgKQAFgKANgDQAMgEAMAHQALAFAEAJIACgDIABgDIAshLIAYgzIAihVIAWgzQAUhWgHgTQAEgBgEBsQgGAcgQAfIggBSQgaA7gQAdQgNAbgMARIgTAXQgFAGgKADIgJABQgIAAgIgEg");
	this.shape_101.setTransform(1185.2066,362.9028);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#000000").s().p("AhVDAQgMgGgGgMQgFgLAEgKQAFgLAMgEQAMgDANAGQALAEAFAJIABgDIABgDIAphOIAVg0QARglAZgtQAOgbANgWQARg1ADgcQgCAbgFA5QgIAbgUAeIgnBOQgbA6gJAfQgNAcgLASIgSAYQgFAGgKADQgFACgFAAQgIAAgHgDg");
	this.shape_102.setTransform(1172.9,377.5,1,1,0,0,0,0,-1.1);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#000000").s().p("AhZC/QgMgGgGgLQgGgLAEgLQAEgKAMgFQAMgEANAGQALAEAFAIIABgDIACgDIAkhQQAIgSALgkQASgkAggqIAfgvQAUgzAFgbQgDAagJA5QgLAbgWAbIguBKQgbA6gFAgQgLAdgKASIgRAZQgFAHgJADQgGACgGAAQgHAAgHgCg");
	this.shape_103.setTransform(1160.75,391.9,1,1,0,0,0,0.1,-1.2);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#000000").s().p("AhbC3QgMgEgHgMQgGgKADgLQAEgLAMgFQALgFANAFQAMADAFAJIABgDIABgDIAhhSIASg2QARglAngnQASgYARgTQAUgoAHgZIgPBGQgMAbgaAYIg0BGQgcA4ABAjIgTAwQgIARgIAJQgEAHgKAEQgGACgHAAQgGAAgGgCg");
	this.shape_104.setTransform(1148.55,406.35,1,1,0,0,0,0.2,-1.7);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#000000").s().p("AhgDFQgNgEgHgLQgIgKADgLQADgLAMgFQAMgGANAFQAMACAGAIIAAgDIABgDIAdhTIAQg5QASgiAtgjIAmgoQAUgjAKgXQAIgfAAgHQACAMgKAaIgSBAQgOAZgcAWIg6BAQgdA3AGAmQgIAdgJATQgHASgHAJQgEAHgJAEQgHADgIAAIgKgBg");
	this.shape_105.setTransform(1136.5,420.6,1,1,0,0,0,0,-0.1);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#000000").s().p("AAZDiQgJgGgCgOQgBgMAIgLQAGgKAKgDIgDgCIgDgEQgig1AJgiIgTg1IgehYIgSg4QgThWALgXQAFgCAQBrQAIAdANAfIAcBTIAjBaQAKAdACARQAJAQAKADQAGAGABAKQABANgIAMQgIAKgMAEIgJABQgHAAgGgEg");
	this.shape_106.setTransform(1151.8075,432.0752);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#000000").s().p("AAzDWQgJgGgDgNQgCgMAIgMQAGgKAJgEIgDgBIgDgDQgvgvgHgZIgmgsQgTgjgHg3IgQg5QgVhWAFgVQAFgBAYBpIATA8IAZBTQAdA3AiAQQATAXALAQQAMAPAIAFQAGAGACAKQABANgGAMQgIALgMAEQgFACgFAAQgGAAgGgEg");
	this.shape_107.setTransform(1151.541,439.5789);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#000000").s().p("AgYDeQgKgHgBgMQgBgLAKgJQAJgJAOAAQAKgCAJAGIgBgDIAAgDIABhYIgFg4IgHhcIgEg5QgJhZABgSQAEgCARBrIAGA/IAIBXIAJBgQABAfgCAVIgEAeQgCAIgHAHQgKAIgMACQgOAAgKgIg");
	this.shape_108.setTransform(1135.7809,438.249);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#000000").s().p("AgdDhQgNgCgIgKQgIgJABgLQABgMAMgHQAKgGAOACQAMABAHAHIAAgDIABgDIARhWIAHg4IAMhbIAIg4QAIhZAAgSQAFgBABBsQgBAegGAhIgLBXIgMBgQgEAegGAUIgLAcQgEAIgHAFQgIAFgLAAIgGAAg");
	this.shape_109.setTransform(1125.6194,426.5971);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#000000").s().p("AhIDTQgNgFgGgMQgGgKADgKQAFgMAMgEQALgFANAGQAMAEAFAIIABgDIABgDIAjhQIASg2IAghWIAUg1QAWhWACgSQAEgBgPBsQgHAcgNAfIgeBUIgfBbQgKAcgKASQgJASgHAIQgFAHgJADQgGACgGAAQgHAAgGgCg");
	this.shape_110.setTransform(1117.3612,414.2);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#000000").s().p("AgyDcQgNgDgIgLQgHgJACgMQADgLALgGQAMgGANAEQAMABAGAIIAAgDIABgDIAYhUIALg4QAJgnARgxIAQg3QARhXAAgTQAEAAgIBsQgEAdgMAgIgXBUQgOA/gFAgQgGAegIATQgGASgGAKQgEAHgJAFQgIAEgJAAIgIgBg");
	this.shape_111.setTransform(1103.0248,433.6368);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#000000").s().p("AgbDiQgOgCgJgJQgJgJABgLQABgMALgHQAKgIAOACQAMAAAHAHIAAgDIABgDIAMhXIAEg5QAFgoAOgyQAGgdAGgbQAMhYgCgSQAEgBAABsQgDAdgJAhIgRBWQgIBAACAgQgDAegFAVQgEATgFAKQgDAHgHAGQgJAHgMAAIgDAAg");
	this.shape_112.setTransform(1088.8725,452.9058);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#000000").s().p("AgfDeQgJgIgBgLQgBgMAKgIQAJgJAOAAQALgBAIAFIgBgDIAAgDIAChYIgEg6QABgnAMg0IAJg4QAEhagCgRQAEgBAHBsQAAAdgHAiIgMBWQgBA/AIAhQACAegDAVQgBAUgEAKQgCAJgHAGQgJAJgNABQgOgBgKgHg");
	this.shape_113.setTransform(1075.0238,471.9499);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#000000").s().p("AgUDhQgKgGgDgLQgCgLAJgKQAHgKAOgCQALgDAJAFIgBgDIAAgDIgLhYIgKg5QgDgnAKg1QAAgeADgbQgBhZgDgSQADgBAPBrQABAegEAhIgGBXQAFA/APAfQAFAeABAVQABATgDALQAAAJgGAHQgJAKgNADIgEABQgLAAgJgGg");
	this.shape_114.setTransform(1062.0702,490.813);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#000000").s().p("AgLDjQgMgFgDgKQgDgLAGgMQAHgKANgEQALgEAJADIgBgDIgBgDIgVhVIgTg3QgGgoAGg2IABg5QgHhYgGgSQAFgBAWBqQADAcgCAjIAABXQALA+AUAcQAJAdAEAVQAEATgBALQAAAIgFAJQgHAKgNAFQgGACgFAAQgGAAgHgDg");
	this.shape_115.setTransform(1049.385,509.4832);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#000000").s().p("AAMDiQgMgEgEgKQgFgKAGgMQADgLANgGQALgGAKACIgCgCIgBgDIgghSIgag0QgLgmAFg4IgEg5QgNhXgHgSQAFgBAdBoQAFAcAAAjIAHBWQAQA8AbAZQANAcAGAUIAGAdQACAJgEAJQgFALgNAHQgHADgIAAIgKgBg");
	this.shape_116.setTransform(1035.1205,527.942);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#000000").s().p("AAhDcQgNAAgHgJQgGgJACgNQADgMALgIQAJgIAKAAIgCgCIgBgDIgwhJIgkgwQgNgkANg7QAAgeABgaQgMhYgOgPQAFgDAjBnQAEAdgEAiIAABWQATA5AnARIAdArIAMAcQADAHgCAKQgDANgKAIQgLAHgMAAIgBAAg");
	this.shape_117.setTransform(1020.24,524.3473);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#000000").s().p("AANC/QgHgJADgNQABgMAMgIQAJgIAKAAIgCgDIgCgCIgwhJIglguQgRgjACg6QgFgegBgjQAghDBCAKQADAEhaA5QgLAXAVAoIAOBVQAaA4AiARQATAYAKATQAKAQADALQAEAIgCAJQgDANgKAJQgLAHgNAAQgNAAgHgJg");
	this.shape_118.setTransform(996.7481,520.0605);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#000000").s().p("AgBDYQgMgDgFgKQgFgLAGgMQAFgLAMgFQALgFAJACIgBgDIgBgDIgehSIgYg1QgLgnAFg3QgCgeABghQAchNAzgDQAEADhHBRQgJAZAOAmIAGBWQAQA9AYAaQAMAcAGAUQAFATABALQABAHgEAKQgGALgMAGQgIADgHAAQgFAAgEgCg");
	this.shape_119.setTransform(979.6044,503.4766);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#000000").s().p("AgfDeQgLgGgCgMQgCgLAJgKQAHgKAOgCQAMgCAIAEIgBgDIAAgDIgJhXIgKg5QgEgoAHg1IADg9QAVhUAigLQAFABgwBhQgGAcAFAkIgBBXQAEA/AOAfQAEAeABAVIgBAeQgBAJgGAHQgJAKgMADIgFAAQgLAAgJgFg");
	this.shape_120.setTransform(962.184,486.1141);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#000000").s().p("AgcDjQgNgCgKgJQgIgJAAgLQABgMALgHQAKgIAOACQAMAAAHAHIAAgDIAAgDIAMhXIADg5QADgoAJgzIAIg6QAPhZANgQQAFAAgUBqIgHA/IgKBXQgFBAAAAhIgHAyQgEATgFAKQgDAJgHAFQgKAHgMAAIgCAAg");
	this.shape_121.setTransform(944.1343,467.9017);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#000000").s().p("AggDdQgJgIgBgMQAAgLALgJQAJgIAOAAQALAAAIAGIAAgDIAAgDIAGhXIgBg6QAAgoAEgzIADg6QAIhaAKgRQAFgBgJBsQgCAeABAhIgDBXQgBBAACAhQAAAegDAVQgDAUgEAKQgCAIgIAGQgKAJgNAAQgNgBgKgIg");
	this.shape_122.setTransform(929.6293,450.2499);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#000000").s().p("AgYDfQgKgHgBgMQgBgLAKgJQAIgJAOAAQALgCAJAGIgBgDIAAgDIAAhYIgEg5IgEhbIgCg7QgBhZAIgTQAFgBACBsIAEBAIAEBXIAIBgQACAegCAWQgBATgEALQgBAHgHAIQgKAIgMACQgOAAgKgIg");
	this.shape_123.setTransform(916.2113,432.474);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#000000").s().p("AgVDgQgLgGgCgLQgBgMAJgKQAIgJAOgBQALgCAIAFIAAgDIAAgDIgGhYIgJg4IgKhbIgHg6QgJhZAFgTQAEgCANBsIAJA/IALBWIAPBgQAEAeAAAVQAAATgDALQgBAJgHAHQgJAKgNABIgEAAQgKAAgJgGg");
	this.shape_124.setTransform(903.3171,414.5365);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#000000").s().p("AgHDgQgLgGgDgLQgCgLAIgLQAIgKANgCQALgCAJADIgBgDIAAgDIgMhXIgMg3IgShaIgMg5QgRhXACgUQAFgBAXBpIAPA+IASBVIAVBfQAGAdABAVIAAAfQgBAIgGAIQgIAKgOADIgHABQgJAAgHgFg");
	this.shape_125.setTransform(889.284,396.5087);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#000000").s().p("AALDeQgLgFgCgLQgDgLAGgLQAHgLAOgDQAKgDAKADIgBgDIgBgDIgRhWIgQg2IgahYIgRg3QgZhWAAgUQAFgBAhBmIAUA8IAaBUIAbBcIALAzIABAeQAAAIgFAIQgIALgNAEIgJACQgIAAgIgEg");
	this.shape_126.setTransform(874.675,378.3519);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1,p:{x:1560.7781,y:346.776}}]},1).to({state:[{t:this.shape_2,p:{x:1561.075,y:346.626}}]},1).to({state:[{t:this.shape_2,p:{x:1561.375,y:346.476}}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10,p:{x:1563.7281,y:345.176}}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12,p:{x:1564.325,y:344.826}}]},1).to({state:[{t:this.shape_13,p:{x:1564.625,y:344.676}}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_10,p:{x:1569.9281,y:341.776}}]},1).to({state:[{t:this.shape_30,p:{x:1570.2281,y:341.576}}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_13,p:{x:1570.825,y:341.276}}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_10,p:{x:1573.1781,y:339.976}}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_40,p:{x:1574.075,y:339.476}}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_1,p:{x:1576.4281,y:338.176}}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_2,p:{x:1577.025,y:337.876}}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_51}]},1).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_53}]},1).to({state:[{t:this.shape_54}]},1).to({state:[{t:this.shape_10,p:{x:1579.3781,y:336.576}}]},1).to({state:[{t:this.shape_30,p:{x:1579.6781,y:336.376}}]},1).to({state:[{t:this.shape_12,p:{x:1579.975,y:336.226}}]},1).to({state:[{t:this.shape_13,p:{x:1580.275,y:336.076}}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_58}]},1).to({state:[{t:this.shape_59}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_61}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_62}]},1).to({state:[{t:this.shape_40,p:{x:1583.525,y:334.276}}]},1).to({state:[{t:this.shape_63}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_65}]},1).to({state:[{t:this.shape_66}]},1).to({state:[{t:this.shape_67}]},1).to({state:[{t:this.shape_68}]},1).to({state:[{t:this.shape_69,p:{x:1585.5995,y:333.176}}]},1).to({state:[{t:this.shape_70}]},1).to({state:[{t:this.shape_71}]},1).to({state:[{t:this.shape_72}]},1).to({state:[{t:this.shape_73}]},1).to({state:[{t:this.shape_74}]},1).to({state:[{t:this.shape_75}]},1).to({state:[{t:this.shape_76}]},1).to({state:[{t:this.shape_77}]},1).to({state:[{t:this.shape_78}]},1).to({state:[{t:this.shape_79}]},1).to({state:[{t:this.shape_80}]},1).to({state:[{t:this.shape_81}]},1).to({state:[{t:this.shape_82}]},1).to({state:[{t:this.shape_83}]},1).to({state:[{t:this.shape_84}]},1).to({state:[{t:this.shape_85}]},1).to({state:[{t:this.shape_86}]},1).to({state:[{t:this.shape_87}]},1).to({state:[{t:this.shape_88}]},1).to({state:[{t:this.shape_89}]},1).to({state:[{t:this.shape_90}]},1).to({state:[{t:this.shape_91}]},1).to({state:[{t:this.shape_92}]},1).to({state:[{t:this.shape_93}]},1).to({state:[{t:this.shape_94}]},1).to({state:[{t:this.shape_95}]},1).to({state:[{t:this.shape_96}]},1).to({state:[{t:this.shape_97}]},1).to({state:[{t:this.shape_98}]},1).to({state:[{t:this.shape_99}]},1).to({state:[{t:this.shape_100}]},1).to({state:[{t:this.shape_101}]},1).to({state:[{t:this.shape_102}]},1).to({state:[{t:this.shape_103}]},1).to({state:[{t:this.shape_104}]},1).to({state:[{t:this.shape_105}]},1).to({state:[{t:this.shape_106}]},1).to({state:[{t:this.shape_107}]},1).to({state:[{t:this.shape_69,p:{x:1145.0495,y:449.126}}]},1).to({state:[{t:this.shape_108}]},1).to({state:[{t:this.shape_109}]},1).to({state:[{t:this.shape_110}]},1).to({state:[{t:this.shape_111}]},1).to({state:[{t:this.shape_112}]},1).to({state:[{t:this.shape_113}]},1).to({state:[{t:this.shape_114}]},1).to({state:[{t:this.shape_115}]},1).to({state:[{t:this.shape_116}]},1).to({state:[{t:this.shape_117}]},1).to({state:[{t:this.shape_118}]},1).to({state:[{t:this.shape_119}]},1).to({state:[{t:this.shape_120}]},1).to({state:[{t:this.shape_121}]},1).to({state:[{t:this.shape_122}]},1).to({state:[{t:this.shape_123}]},1).to({state:[{t:this.shape_124}]},1).to({state:[{t:this.shape_125}]},1).to({state:[{t:this.shape_126}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.shape_21).wait(22).to({_off:false},0).wait(1).to({x:1567.2781,y:343.226},0).to({_off:true},1).wait(20).to({_off:false,x:1573.4781,y:339.826},0).to({_off:true},1).wait(10).to({_off:false,x:1576.7281,y:338.026},0).to({_off:true},1).wait(19).to({_off:false,x:1582.6281,y:334.776},0).wait(1).to({x:1582.9281,y:334.626},0).to({_off:true},1).wait(67));

	// Каркас_21
	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#000000").s().p("AAHCVQgHgDgCgIQgBgHADgIIAFgFQAEgDAFgBQAIgCAGACIAAgCIgEgSIgJgqIgNgtIgbhcQgRg3ABgLQADgBAVA/IAdBdIAWBIIAEASIAEAXIAAANQAAAGgEAFQgFAHgJADIgHABQgFAAgFgDg");
	this.shape_127.setTransform(1585.1221,329.2213);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#000000").s().p("AAHCVQgHgDgCgIQgBgHADgIIAFgEQAEgDAGgCQAHgCAGACIAAgCIgEgSIgJgqIgNgtIgchcQgPg3AAgLQADgBAVA/IAdBdIAWBIIAEASIAEAXIAAANQAAAGgEAFQgFAHgJADIgGABQgGAAgFgDg");
	this.shape_128.setTransform(1585.45,329.0713);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#000000").s().p("AAICVQgIgDgCgIQgBgHADgIIAGgEQADgDAGgCQAHgCAGACIAAgCIgEgSIgIgqIgOgtIgchcQgPg2AAgMQADgBAVA/IAdBdIAWBIIAEASIAEAXIAAANQAAAGgEAFQgFAHgJADIgGABQgGAAgEgDg");
	this.shape_129.setTransform(1585.8,328.9213);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#000000").s().p("AAICVQgIgDgBgIQgCgHADgIIAFgEQAEgDAGgCQAHgCAGACIAAgCIgDgSIgJgqIgOgtIgchcQgPg3AAgLQADgBAVA/IAdBdIAWBIIAEASIAEAXIAAANQAAAGgEAFQgFAHgIADIgHABQgGAAgEgDg");
	this.shape_130.setTransform(1586.15,328.8213);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#000000").s().p("AAICVQgIgDgBgIQgCgHAEgIIAEgEQAFgDAEgCQAIgCAGACIAAgCIgEgSIgIgqIgOgtIgbhcQgQg2AAgMQADgBAVA/IAdBdIAWBIIAEASIAEAXIAAANQAAAGgEAFQgFAHgJADIgGABQgGAAgEgDg");
	this.shape_131.setTransform(1586.5,328.6713);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#000000").s().p("AAICVQgIgDgBgIQgCgHAEgIIAEgEQAFgDAEgCQAIgCAGACIAAgCIgEgSIgIgqIgOgtIgbhcQgQg3AAgLQADgBAVA/IAdBdIAWBIIAEASIAEAXIAAANQAAAGgEAFQgFAHgJADIgGABQgGAAgEgDg");
	this.shape_132.setTransform(1586.85,328.5713);
	this.shape_132._off = true;

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#000000").s().p("AAHCVQgHgDgCgIQgBgHAEgIIAEgEQAEgDAFgCQAIgCAHACIgBgCIgEgSIgJgqIgNgtIgbhcQgQg3AAgLQADgBAVA/IAdBdIAWBIIAFASIADAXIAAANQAAAGgEAFQgEAHgKADIgGABQgGAAgFgDg");
	this.shape_133.setTransform(1587.2,328.4213);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#000000").s().p("AAHCVQgHgDgCgIQgBgHAEgIIAEgEQAFgDAEgCQAIgCAHACIgBgCIgEgSIgJgqIgNgtIgbhcQgQg3AAgLQADgBAVA/IAeBdIAVBIIAFASIACAXIABANQAAAGgEAFQgEAHgKADIgGABQgGAAgFgDg");
	this.shape_134.setTransform(1587.55,328.3213);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#000000").s().p("AAHCVQgHgDgCgIQgBgHADgIIAFgEQAFgDAEgCQAIgCAHACIgBgCIgEgSIgJgqIgNgtIgchcQgPg3AAgLQADgBAVA/IAeBdIAVBIIAFASIACAXIABANQAAAGgEAFQgEAHgKADIgGABQgGAAgFgDg");
	this.shape_135.setTransform(1587.9,328.1713);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#000000").s().p("AAHCVQgHgDgBgIQgCgHADgIIAFgEQAEgDAFgCQAIgCAGACIAAgCIgEgSIgJgqIgNgtIgchcQgPg3AAgLQADgBAVA/IAeBdIAVBIIAEASIADAXIABANQAAAGgEAFQgEAHgKADIgGABQgGAAgFgDg");
	this.shape_136.setTransform(1588.6,327.9213);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#000000").s().p("AAHCVQgHgDgBgIQgCgHADgIIAFgEQAEgDAGgCQAHgCAGACIAAgCIgDgSIgKgqIgNgtIgchcQgPg3AAgLQADgBAVA/IAdBdIAWBIIAEASIAEAXIAAANQAAAGgEAFQgFAHgIADIgHABQgGAAgFgDg");
	this.shape_137.setTransform(1588.95,327.8213);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#000000").s().p("AAICVQgIgDgBgIQgCgHAEgIIAEgEQAEgDAGgCQAHgCAHACIgBgCIgDgSIgJgqIgOgtIgbhcQgRg3ABgLQADgBAVA/IAeBdIAVBIIAFASIADAXIAAANQAAAGgEAFQgEAHgJADIgHABQgGAAgEgDg");
	this.shape_138.setTransform(1589.2971,327.6713);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#000000").s().p("AAICVQgIgDgBgIQgCgHAEgIIAEgEQAEgDAGgCQAHgCAHACIgBgCIgDgSIgJgqIgOgtIgbhcQgRg3ABgLQADgBAVA/IAdBdIAWBIIAFASIADAXIAAANQAAAGgEAFQgEAHgJADIgHABQgGAAgEgDg");
	this.shape_139.setTransform(1589.6471,327.5713);
	this.shape_139._off = true;

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#000000").s().p("AAICVQgIgDgCgIQgBgHADgIIAGgEQADgDAGgCQAHgCAGACIAAgCIgEgSIgIgqIgOgtIgchcQgPg3AAgLQADgBAVA/IAdBdIAWBIIAEASIAEAXIAAANQAAAGgEAFQgFAHgJADIgGABQgGAAgEgDg");
	this.shape_140.setTransform(1590.3,327.3213);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#000000").s().p("AAHCVQgHgDgCgIQgBgHAEgIIAEgEQAEgDAFgCQAIgCAHACIgBgCIgEgSIgJgqIgNgtIgbhcQgQg3AAgLQADgBAVA/IAeBdIAVBIIAFASIADAXIAAANQAAAGgEAFQgEAHgKADIgGABQgGAAgFgDg");
	this.shape_141.setTransform(1592.05,326.6713);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#000000").s().p("AAHCVQgHgDgCgIQgBgHADgIIAFgFIAJgEQAIgCAHACIgBgCIgEgSIgJgqIgNgtIgchcQgPg3AAgLQADgBAVA/IAeBdIAVBIIAFASIACAXIABANQAAAGgEAFQgEAHgKADIgGABQgGAAgFgDg");
	this.shape_142.setTransform(1592.4,326.5713);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#000000").s().p("AAHCVQgHgDgBgIQgCgHADgIIAFgFIAJgEQAIgCAGACIAAgCIgEgSIgJgqIgNgtIgchcQgPg3AAgLQADgBAVA/IAeBdIAVBIIAEASIADAXIABANQAAAGgEAFQgEAHgKADIgGABQgGAAgFgDg");
	this.shape_143.setTransform(1593.1,326.3213);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#000000").s().p("AAICVQgIgDgBgIQgCgHADgIIAFgFIAKgEQAHgCAGACIAAgCIgDgSIgJgqIgOgtIgchcQgPg3AAgLQADgBAVA/IAdBdIAWBIIAEASIADAXIABANQAAAGgEAFQgFAHgIADIgHABQgGAAgEgDg");
	this.shape_144.setTransform(1593.8,326.0713);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#000000").s().p("AAICVQgIgDgBgIQgCgHAEgIIAEgFIAKgEQAHgCAHACIgBgCIgDgSIgJgqIgOgtIgbhcQgRg3ABgLQADgBAVA/IAeBdIAVBIIAFASIADAXIAAANQAAAGgEAFQgEAHgJADIgHABQgGAAgEgDg");
	this.shape_145.setTransform(1594.4971,325.8213);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#000000").s().p("AAICVQgIgDgBgIQgCgHADgIIAFgFQAEgDAGgBQAHgCAGACIAAgCIgDgSIgJgqIgOgtIgchcQgPg3AAgLQADgBAVA/IAdBdIAWBIIAEASIAEAXIAAANQAAAGgEAFQgFAHgIADIgHABQgGAAgEgDg");
	this.shape_146.setTransform(1595.15,325.5713);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#000000").s().p("AAICVQgIgDgBgIQgCgHAEgIIAEgFQAFgDAEgBQAIgCAGACIAAgCIgEgSIgIgqIgOgtIgbhcQgQg3AAgLQADgBAVA/IAdBdIAWBIIAEASIAEAXIAAANQAAAGgEAFQgFAHgJADIgGABQgGAAgEgDg");
	this.shape_147.setTransform(1595.85,325.3213);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#000000").s().p("AAHCVQgHgDgCgIQgBgHAEgIIAEgFQAEgDAFgBQAIgCAHACIgBgCIgEgSIgJgqIgNgtIgbhcQgQg3AAgLQADgBAVA/IAeBdIAVBIIAFASIADAXIAAANQAAAGgEAFQgEAHgKADIgGABQgGAAgFgDg");
	this.shape_148.setTransform(1596.55,325.0713);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#000000").s().p("AAHCVQgHgDgCgIQgBgHADgIIAFgEQAEgDAFgCQAIgCAHACIgBgCIgEgSIgJgqIgNgtIgchcQgPg3AAgLQADgBAVA/IAeBdIAVBIIAFASIADAXIAAANQAAAGgEAFQgEAHgKADIgGABQgGAAgFgDg");
	this.shape_149.setTransform(1596.9,324.9213);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#000000").s().p("AAHCVQgHgDgCgIQgBgHADgIIAFgFQAFgDAEgBQAIgCAHACIgBgCIgEgSIgJgqIgNgtIgchcQgPg3AAgLQADgBAVA/IAeBdIAVBIIAFASIACAXIABANQAAAGgEAFQgEAHgKADIgGABQgGAAgFgDg");
	this.shape_150.setTransform(1597.25,324.8213);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#000000").s().p("AAHCVQgHgDgBgIQgCgHADgIIAFgEQAFgDAEgCQAIgCAGACIAAgCIgEgSIgJgqIgNgtIgchcQgPg3AAgLQADgBAVA/IAeBdIAVBIIAEASIADAXIABANQAAAGgEAFQgEAHgKADIgGABQgGAAgFgDg");
	this.shape_151.setTransform(1597.6,324.6713);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#000000").s().p("AAHCVQgHgDgBgIQgCgHADgIIAFgFQAEgDAGgBQAHgCAGACIAAgCIgDgSIgKgqIgNgtIgchcQgPg3AAgLQADgBAVA/IAdBdIAWBIIAEASIAEAXIAAANQAAAGgEAFQgFAHgIADIgHABQgGAAgFgDg");
	this.shape_152.setTransform(1597.95,324.5713);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#000000").s().p("AAICVQgIgDgBgIQgCgHADgIIAFgEQAEgDAGgCQAHgCAGACIAAgCIgDgSIgJgqIgOgtIgchcQgPg3AAgLQADgBAVA/IAdBdIAWBIIAEASIADAXIABANQAAAGgEAFQgFAHgIADIgHABQgGAAgEgDg");
	this.shape_153.setTransform(1598.3,324.4213);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#000000").s().p("AAICVQgIgDgBgIQgCgHADgIIAFgFQAEgDAGgBQAHgCAGACIAAgCIgDgSIgKgqIgNgtIgchcQgPg3AAgLQADgBAVA/IAdBdIAWBIIAEASIADAXIABANQAAAGgEAFQgFAHgIADIgHABQgGAAgEgDg");
	this.shape_154.setTransform(1598.65,324.3213);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#000000").s().p("AAICVQgIgDgBgIQgCgHAEgIIAEgFQAEgDAGgBQAHgCAHACIgBgCIgDgSIgJgqIgOgtIgbhcQgRg3ABgLQADgBAVA/IAeBdIAVBIIAFASIADAXIAAANQAAAGgEAFQgEAHgJADIgHABQgGAAgEgDg");
	this.shape_155.setTransform(1599.3471,324.0713);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#000000").s().p("AAHCVQgHgDgCgIQgBgHAEgIIAEgFQAEgDAFgBQAIgCAHACIgBgCIgEgSIgJgqIgNgtIgbhcQgQg3AAgLQADgBAVA/IAdBdIAWBIIAFASIADAXIAAANQAAAGgEAFQgEAHgKADIgGABQgGAAgFgDg");
	this.shape_156.setTransform(1600.7,323.5713);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#000000").s().p("AAHCVQgHgDgCgIQgBgHADgIIAFgFQAEgDAFgBQAIgCAHACIgBgCIgEgSIgJgqIgNgtIgchcQgPg3AAgLQADgBAVA/IAeBdIAVBIIAFASIADAXIAAANQAAAGgEAFQgEAHgKADIgGABQgGAAgFgDg");
	this.shape_157.setTransform(1601.4,323.3213);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#000000").s().p("AAHCVQgHgDgCgIQgBgHADgIIAGgEQADgDAFgCQAIgCAHACIgBgCIgEgSIgJgqIgNgtIgchcQgPg3AAgLQADgBAVA/IAeBdIAVBIIAFASIADAXIAAANQAAAGgEAFQgEAHgKADIgGABQgGAAgFgDg");
	this.shape_158.setTransform(1601.75,323.1713);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#000000").s().p("AAHCVQgHgDgBgIQgCgHADgIIAFgFQAFgDAEgBQAIgCAGACIAAgCIgEgSIgJgqIgNgtIgchcQgPg3AAgLQADgBAVA/IAeBdIAVBIIAEASIAEAXIAAANQAAAGgEAFQgEAHgKADIgGABQgGAAgFgDg");
	this.shape_159.setTransform(1602.1,323.0713);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#000000").s().p("AAICVQgIgDgBgIQgCgHADgIIAFgFQAEgDAGgBQAHgCAGACIAAgCIgDgSIgJgqIgOgtIgchcQgPg3AAgLQADgBAVA/IAdBdIAWBIIAEASIADAXIABANQAAAGgEAFQgFAHgIADIgHABQgGAAgEgDg");
	this.shape_160.setTransform(1602.8,322.8213);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#000000").s().p("AAICVQgIgDgBgIQgCgHADgIIAFgEQAEgDAGgCQAHgCAGACIAAgCIgDgSIgKgqIgNgtIgchcQgPg3AAgLQADgBAVA/IAdBdIAWBIIAEASIADAXIABANQAAAGgEAFQgFAHgIADIgHABQgGAAgEgDg");
	this.shape_161.setTransform(1603.15,322.6713);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#000000").s().p("AAICVQgIgDgCgIQgBgHAEgIIAEgFQAEgDAFgBQAIgCAHACIgBgCIgEgSIgJgqIgNgtIgbhcQgQg3AAgLQADgBAVA/IAdBdIAWBIIAEASIADAXIABANQAAAGgEAFQgFAHgJADIgGABQgGAAgEgDg");
	this.shape_162.setTransform(1603.5,322.5713);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#000000").s().p("AAICVQgIgDgCgIQgBgHAEgIIAEgEQAEgDAFgCQAIgCAHACIgBgCIgEgSIgJgqIgNgtIgbhcQgQg3AAgLQADgBAVA/IAdBdIAWBIIAEASIADAXIABANQAAAGgEAFQgFAHgJADIgGABQgGAAgEgDg");
	this.shape_163.setTransform(1603.85,322.4213);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#000000").s().p("AAHCVQgHgDgCgIQgBgHADgIIAGgFQADgDAFgBQAIgCAHACIgBgCIgEgSIgJgqIgNgtIgchcQgPg3AAgLQADgBAVA/IAeBdIAVBIIAFASIADAXIAAANQAAAGgEAFQgEAHgKADIgGABQgGAAgFgDg");
	this.shape_164.setTransform(1606.25,321.5713);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#000000").s().p("AAHCVQgHgDgBgIQgCgHADgIIAGgEQAEgDAEgCQAIgCAGACIAAgCIgEgSIgJgqIgNgtIgchcQgPg3AAgLQADgBAVA/IAeBdIAVBIIAEASIAEAXIAAANQAAAGgEAFQgEAHgKADIgGABQgGAAgFgDg");
	this.shape_165.setTransform(1606.6,321.4213);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#000000").s().p("AAHCVQgHgDgBgIQgCgHADgIIAGgFQADgDAGgBQAHgCAGACIAAgCIgDgSIgKgqIgNgtIgchcQgPg3AAgLQADgBAVA/IAdBdIAWBIIAEASIAEAXIAAANQAAAGgEAFQgFAHgIADIgHABQgGAAgFgDg");
	this.shape_166.setTransform(1606.95,321.3213);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#000000").s().p("AAHCVQgHgDgCgIQgBgHAEgIIAEgEQAEgDAFgCQAIgCAHACIgBgCIgEgSIgJgqIgNgtIgbhcQgQg3AAgLQADgBAVA/IAdBdIAWBIIAFASIACAXIABANQAAAGgEAFQgEAHgKADIgGABQgGAAgFgDg");
	this.shape_167.setTransform(1608.7,320.6713);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#000000").s().p("AAICVQgIgDgBgIQgCgHAEgIIAFgFQAEgDAFgBQAHgCAHACIgBgCIgDgSIgJgqIgNgtIgchcQgQg3AAgLQADgBAVA/IAeBdIAVBIIAFASIADAXIAAANQAAAGgEAFQgEAHgJADIgHABQgGAAgEgDg");
	this.shape_168.setTransform(1609.6993,320.3213);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#000000").s().p("AAHCVQgHgDgBgIQgCgHADgIIAGgFQAEgDAEgBQAIgCAGACIAAgCIgEgSIgJgqIgNgtIgchcQgPg3AAgLQADgBAVA/IAeBdIAVBIIAEASIAEAXIAAANQAAAGgEAFQgEAHgKADIgGABQgGAAgFgDg");
	this.shape_169.setTransform(1611.1,319.8213);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("#000000").s().p("AAHCVQgHgDgBgIQgCgHADgIIAGgEQADgDAGgCQAHgCAGACIAAgCIgDgSIgKgqIgNgtIgchcQgPg3AAgLQADgBAVA/IAdBdIAWBIIAEASIAEAXIAAANQAAAGgEAFQgFAHgIADIgHABQgGAAgFgDg");
	this.shape_170.setTransform(1611.45,319.6713);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#000000").s().p("AAICVQgIgDgBgIQgCgHADgIIAGgFQADgDAGgBQAHgCAGACIAAgCIgDgSIgJgqIgOgtIgchcQgPg3AAgLQADgBAVA/IAdBdIAWBIIAEASIAEAXIAAANQAAAGgEAFQgFAHgIADIgHABQgGAAgEgDg");
	this.shape_171.setTransform(1611.8,319.5713);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("#000000").s().p("AAHCVQgHgDgCgIQgBgHAEgIIAEgFQAEgDAFgBQAIgCAHACIgBgCIgEgSIgJgqIgNgtIgbhcQgQg3AAgLQADgBAVA/IAdBdIAWBIIAFASIACAXIABANQAAAGgEAFQgEAHgKADIgGABQgGAAgFgDg");
	this.shape_172.setTransform(1613.2,319.0713);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#000000").s().p("AAHCVQgHgDgCgIQgBgHAEgIIAEgEQAEgDAFgCQAIgCAHACIgBgCIgEgSIgJgqIgNgtIgbhcQgQg3AAgLQADgBAVA/IAeBdIAVBIIAFASIACAXIABANQAAAGgEAFQgEAHgKADIgGABQgGAAgFgDg");
	this.shape_173.setTransform(1613.55,318.9213);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("#000000").s().p("AAHCVQgHgDgCgIQgBgHADgIIAFgFQAEgDAFgBQAIgCAGACIAAgCIgEgSIgJgqIgNgtIgbhcQgRg3ABgLQADgBAVA/IAdBdIAWBIIAEASIAEAXIAAANQAAAGgEAFQgFAHgJADIgGABQgGAAgFgDg");
	this.shape_174.setTransform(1614.5721,318.5713);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("#000000").s().p("AADCWQgHgEgCgHQgBgIAFgHIADgFQAFgDAFgBQAHgCAHADIgBgCIgDgTIgIgqIgMguIgYhdQgOg3ABgLQADgBATBAIAaBeIATBIIAEATIADAXIAAANQAAAFgEAGQgFAHgJACIgHABQgFAAgFgDg");
	this.shape_175.setTransform(1601.5491,309.9179);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("#000000").s().p("AgCCXQgHgFgCgHQgBgIAFgHIAFgEQADgDAFgBQAIgCAGADIAAgCIgDgSIgHgrIgKguIgVheQgMg4ABgLQADAAARBAIAWBfIASBJIADASIACAXIAAANIgFALQgFAHgJACIgGABQgGAAgEgDg");
	this.shape_176.setTransform(1588.574,301.2694);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("#000000").s().p("AgHCXQgHgFgCgHQgBgHAFgIIAFgEQAEgDAFAAQAHgCAHADIgBgCIgCgTIgFgqIgJgvIgShfQgJg4AAgKQADgCAPBCIATBfIAPBKIADATIACAXIgBANQAAAFgFAFQgFAHgJACIgFAAQgFAAgGgDg");
	this.shape_177.setTransform(1575.5738,292.6171);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f("#000000").s().p("AgMCXQgHgEgCgIQAAgHAFgHIAFgEQAEgDAFgBQAIgBAFADIAAgCIgBgSIgFgrIgHgvQgIgrgHg1QgHg4ABgLQADAAAMBBIAPBgIAOBKIACATIABAXIgBANQAAAGgFAFQgFAGgKACIgDAAQgGAAgGgEg");
	this.shape_178.setTransform(1562.5691,283.9421);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("#000000").s().p("AgOCXQgHgFgBgHQgBgIAFgHIAGgEIAKgDQAGgBAGADIAAgCIgBgSIgDgrIgGgvQgHgrgEg1QgGg4ACgLQADgBAKBCIALBhIAMBKIACATIAAAXIgBANQgBAFgFAFQgFAGgJACIgDAAQgHAAgGgEg");
	this.shape_179.setTransform(1549.2227,275.2589);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f("#000000").s().p("AgPCXQgGgFgCgIQAAgHAFgHIAGgEIAKgDQAGAAAGADIAAgCIAAgTIgCgrIgGgvQgEgrgCg1QgEg5ACgLQADAAAHBCIAIBhIAKBLIACATIgBAXIgCANQAAAFgFAFQgGAGgJABIgCABQgHAAgHgFg");
	this.shape_180.setTransform(1535.7729,266.5575);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f("#000000").s().p("AgQCXQgGgFgBgIQAAgHAFgHIAGgEQAEgCAGgBQAGAAAHAEIgBgDIAAgSIgBgrIgEgwQgEgrABg1QgCg6ABgJQAEgBAGBCQAEAuAAAzQAEAyAEAaIABATIgBAWIgCAOQgBAFgFAFQgGAGgJABQgIAAgIgFg");
	this.shape_181.setTransform(1522.325,257.8498);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f("#000000").s().p("AgQCXQgHgFgBgJQAAgHAGgGIAGgEQAEgCAGgBQAHAAAGAEIgBgDIABgSIAAgqIgDgxQgCgrACg1QAAg5ACgKQAEAAADBCQADAtgCA0QADAyADAaIABATIgCAWIgDAOQAAAEgGAFQgGAGgIAAQgJAAgHgEg");
	this.shape_182.setTransform(1508.875,249.1);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("#000000").s().p("AgRCWQgHgGAAgHQAAgIAGgGIAGgEQAEgCAGAAQAHAAAGAEIAAgCIAAgTIACgrIgCgwQgBgsAFg0QACg5ACgKQAEgBABBDIgDBiQABAxADAaIAAATIgCAXIgDAMQgCAGgFAEQgGAGgIAAQgJAAgHgFg");
	this.shape_183.setTransform(1495.425,240.3748);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f("#000000").s().p("AgVCVQgGgGAAgHQABgIAGgGIAFgDQAGgCAFAAQAGAAAGAEIAAgCIABgSIADgsIgBgvQABgtAHg0QAFg5ACgKQADAAgBBDQAAAsgGA1QgBAyADAZIgBATIgDAXIgDANIgHAJQgGAGgJAAQgJAAgHgGg");
	this.shape_184.setTransform(1482.2286,231.6);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f("#000000").s().p("AgJCaQgKAAgGgGQgGgFgBgIQABgIAHgGQACgDAEAAQAEgCAGABQAHAAAFAEIAAgCIACgTIAEgqIAAgxQADgsAJg0QAGg5ADgJQADgBgDBDQgDAtgHA0QgDAxADAaIgCATIgDAXIgEANQgBAFgGAEQgFAFgIAAIgBAAg");
	this.shape_185.setTransform(1469.1568,222.8269);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f("#000000").s().p("AgeCTQgGgGAAgIQABgHAHgGQACgDAEAAQAEgBAGAAQAIABAEADIAAgCIADgSIAEgqIACgxQAEgsAMgzQAIg4ADgLQADAAgFBDQgFAtgJAzQgFAyADAaIgCATIgEAWIgEANQgCAFgFAEQgGAFgJAAQgJgBgHgGg");
	this.shape_186.setTransform(1456.1313,214.025);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f("#000000").s().p("AgTCZQgJgBgHgGQgFgGAAgIQABgIAHgFIAGgDIAKgBQAIAAAFAFIAAgCIADgSIAFgrIADgwQAGgrAOg0QAKg4ADgKQADAAgHBDQgGAsgMA0QgGAxACAaIgDATIgEAWIgFANQgBAEgFAFQgGAEgJAAIgBAAg");
	this.shape_187.setTransform(1443.095,205.2275);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f("#000000").s().p("AgYCYQgJgCgHgGQgFgGAAgIQACgHAGgGIAHgCQAEgCAGABQAHABAGAEIAAgCIADgSIAHgqIAEgxQAHgrAQgzQAMg3ADgKQADAAgJBCQgIAtgNAyQgIAxABAaIgDATIgFAXIgEAMQgBAFgGAEQgGAEgIAAIgCAAg");
	this.shape_188.setTransform(1430.086,196.4025);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f("#000000").s().p("AgeCXQgJgCgGgHQgFgGABgIQABgHAHgFIAGgDIALAAQAHABAFAFIABgCIAEgSIAHgrIAGgwQAHgrATgyIARhBQAEAAgMBCQgJAtgQAyQgJAwABAaIgDATIgFAWIgFANIgIAIQgGAEgHAAIgEAAg");
	this.shape_189.setTransform(1417.0727,187.5841);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f("#000000").s().p("AgjCVQgJgBgFgHQgFgHAAgHQACgIAHgFIAGgCIALAAQAHABAFAFIABgCIAEgSIAJgqIAGgwQAKgrAUgxIAUhBQAEABgOBBQgLAsgSAxQgLAwAAAbIgDATIgGAWIgFAMQgCAFgGADQgGAEgGAAIgFgBg");
	this.shape_190.setTransform(1404.0672,178.7188);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f("#000000").s().p("AgoCTQgJgBgFgHQgFgHABgIQABgHAIgFIAGgCQAGgBAFABQAHACAFAFIAAgDIAFgRIALgqIAHgwQALgqAXgxIAVg/QAEAAgQBBQgMArgUAxQgNAwAAAaIgDATIgHAWIgGAMQgCAEgGAEQgFADgGAAIgGgBg");
	this.shape_191.setTransform(1391.0557,169.8558);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f("#000000").s().p("AgsCSQgJgCgFgHQgFgHABgIQACgHAIgFIAGgBQAFgBAFABQAIACAEAFIABgCIAFgSIAMgpIAJgwQAMgqAZgwIAXg/QADABgRBAQgOArgWAwQgNAwgBAaIgEATIgIAVIgGAMQgCAFgHADQgEADgGAAIgGgBg");
	this.shape_192.setTransform(1378.0386,160.9583);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f("#000000").s().p("AgnCUQgKgCgFgHQgFgGABgIQACgIAHgEIAGgDQAGAAAFABQAHABAFAFIABgCIAFgSIAKgpIAHgwQAMgrAWgxIAVg/QAEAAgQBBQgMAsgUAxQgNAvAAAbIgDASIgHAWIgGAMQgCAFgGADQgFADgGAAIgFAAg");
	this.shape_193.setTransform(1366.6615,175.0955);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f("#000000").s().p("AgiCVQgJgBgGgHQgFgGAAgIQADgIAGgFIAHgCQAEgBAGABQAIABAFAFIAAgCIAEgSIAKgqIAGgwQAKgrAUgxIAThAQADAAgNBBQgLAsgSAyQgKAwAAAaIgEATIgGAWIgFAMQgCAFgGADQgFADgHAAIgEAAg");
	this.shape_194.setTransform(1355.275,189.1938);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f("#000000").s().p("AgdCXQgKgCgFgGQgGgHABgIQABgHAHgFIAGgDIALAAQAHABAGAFIAAgCIAEgSIAHgrIAGgwQAIgrASgyIAShBQADAAgMBCQgJAtgQAyQgJAwABAaIgDATIgFAWIgFANIgIAIQgGAEgHAAIgDAAg");
	this.shape_195.setTransform(1343.9239,203.2841);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f("#000000").s().p("AgZCYQgJgBgGgHQgGgGABgIQABgHAHgFIAGgDIALgBQAHABAGAFIAAgDIADgSIAGgqIAFgwQAHgrAQgzQAMg4ADgKQAEAAgKBDQgIAsgOAzQgHAxABAaIgDATIgFAWIgEAMQgCAGgGADQgEAEgIAAIgEAAg");
	this.shape_196.setTransform(1332.5552,217.3341);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f("#000000").s().p("AgjCSQgFgHAAgHQABgHAHgGQACgDAEAAQAEgBAGAAQAIABAFAEIAAgCIADgSIAFgrIADgwQAGgrAOg0QAKg4ADgKQADAAgHBDQgGAsgMA0QgGAwACAaIgDATIgEAXIgFAMQgBAGgFAEQgHAEgJAAQgJgCgHgFg");
	this.shape_197.setTransform(1321.195,231.4);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f("#000000").s().p("AgeCTQgGgGAAgIQABgHAGgGIAGgDQAFgBAFAAQAJAAAEAFIAAgDIACgSIAFgqIACgxQAEgrALg0QAJg4ACgKQAEgBgFBDQgFAtgJA0QgFAwACAbIgBASIgFAYIgEAMQgBAFgGAEQgFAFgKAAQgJgBgGgGg");
	this.shape_198.setTransform(1309.8592,245.4498);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f("#000000").s().p("AgKCaQgJAAgGgGQgGgFgBgJQABgHAHgGIAFgDQAFgCAGAAQAHABAFAEIAAgCIACgTIAEgrIAAgwQADgsAJg0QAGg5ADgJQADgBgDBDQgDAtgHA0QgDAxACAaIgBATIgDAXIgEANQgBAFgGAEQgFAFgIAAIgCAAg");
	this.shape_199.setTransform(1298.5068,259.4769);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f("#000000").s().p("AgVCVQgGgFgBgIQABgIAGgGIAGgDQAFgCAFAAQAHAAAGAEIAAgCIABgSIADgrIgBgxQABgrAHg1QAEg5ACgKQAEAAgBBDQgBAtgFA0QgCAxADAaIAAATIgDAXIgEANQgBAFgFAEQgHAGgIAAQgJAAgHgGg");
	this.shape_200.setTransform(1287.21,273.4748);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f("#000000").s().p("AgRCWQgGgFgBgIQABgIAFgGIAGgEIAKgCQAHAAAGAEIAAgCIABgTIABgqIgCgxQgBgrAFg1QADg5ACgKQADAAABBCQABAtgDA1QAAAxADAaIAAATIgCAXIgDANIgGAJQgGAGgJAAQgJAAgHgFg");
	this.shape_201.setTransform(1275.975,287.475);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f("#000000").s().p("AgRCXQgGgGgBgIQAAgHAGgGIAGgEQAEgCAGAAQAGAAAGACIAAgCIABgRIAAgsIgDgvQgCgtACg0QAAg5ACgKQAEAAADBCQADAtgCA1QADAwADAaIABATIgCAYIgDAMQgBAFgFAFQgFAGgJAAQgJAAgIgEg");
	this.shape_202.setTransform(1265.075,301.45);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f("#000000").s().p("AgRCWQgHgGAAgIQAAgHAGgGIAGgEQAEgCAGAAQAHAAAFAEIAAgCIABgTIACgrIgCgwQgBgsAEg0QADg5ACgKQADgBABBDQABAugDAzQABAyADAaIAAATIgCAXIgDAMQgCAGgFAEQgGAGgIAAQgJAAgHgFg");
	this.shape_203.setTransform(1252.425,315.4248);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f("#000000").s().p("AgUCVQgGgGgBgHQAAgIAHgGQACgDAEgBQAEgBAGAAQAHAAAFADIAAgCIACgSIACgrIAAgvQAAgtAGg0QAEg5ADgKQAEAAgCBCQAAAtgFA1QAAAxACAaIgBATIgDAXIgDAMQgBAGgGAEQgGAGgIAAQgJgBgHgFg");
	this.shape_204.setTransform(1239.9705,329.35);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.f("#000000").s().p("AgJCaQgJAAgHgGQgGgGAAgIQABgHAGgGIAGgDQAFgCAFAAQAIAAAFAFIAAgCIACgTIAEgrIAAgwQACgrAIg1QAGg5ADgJQADgBgDBDQgDAtgFA0QgCAxABAaIgBATIgDAXIgEANQgBAFgGAEQgGAFgHAAIgCAAg");
	this.shape_205.setTransform(1227.6568,343.2769);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.f("#000000").s().p("AgdCTQgGgGAAgIQABgHAHgGIAGgDIAKgBQAIABAEADIAAgCIADgSIAFgqIACgxQADgrAJg1QAIg4AEgKQADAAgFBDQgFAtgHA0QgDAxABAaIgCATIgEAWIgEANQgCAFgFAEQgGAFgJAAQgJgBgHgGg");
	this.shape_206.setTransform(1215.3813,357.175);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.f("#000000").s().p("AgSCZQgJgBgGgGQgGgGAAgIQABgIAHgFIAGgDQAFgBAFAAQAIAAAFAFIABgCIABgSIAHgrIADgwQAEgrALg0QAKg4AEgKQAEAAgIBCIgOBhQgGAxABAaIgCATIgFAWIgFANQgBAEgFAFQgGAEgIAAIgCAAg");
	this.shape_207.setTransform(1203.1167,371.0525);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.f("#000000").s().p("AgXCYQgJgCgGgGQgFgGAAgIQABgHAHgGIAGgCQAFgCAFABQAJABAEAEIABgCIADgSIAGgqIAFgwQAGgsAMgzQAMg4AEgJQADAAgJBCQgHAsgKA0QgHAxAAAaIgDATIgFAWIgFAMQgBAFgGAEQgFAEgHAAIgEAAg");
	this.shape_208.setTransform(1190.861,384.9661);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.f("#000000").s().p("AgbCXQgJgCgGgGQgFgHAAgHQACgIAHgFIAGgCQAFgCAFABQAIACAFAEIAAgCIAEgSIAIgqIAFgwQAIgrAOgzQANg4AFgJQAEAAgNBCQgIAsgMAzQgIAwgBAbIgDATIgGAWIgEAMQgCAFgGAEQgGADgHAAIgDAAg");
	this.shape_209.setTransform(1178.5985,398.81);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.f("#000000").s().p("AggCWQgJgCgGgHQgFgGABgIQACgHAHgFIAGgDIAKAAQAJACAEAEIABgCIAEgSIAJgpIAHgwQAIgrAQgzQAPg3AFgJQADABgOBAQgJAtgOAyQgJAxgCAaIgDASIgGAXIgFALQgCAGgHADQgFADgGAAIgFAAg");
	this.shape_210.setTransform(1166.3492,412.6688);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.f("#000000").s().p("AAiCSQgIgCgEgHQgDgGADgJIADgFQADgEAFgDQAHgDAHAAIgBgCIgIgQIgTgnIgXgqQgVgmgTgyQgUg1ACgMQACgCAYA/QASApAXAuQAXAtAPAVIAJAQIAIAWIADANQACAFgDAGQgDAIgIAEQgGADgGAAIgFAAg");
	this.shape_211.setTransform(1175.4479,419.5777);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.f("#000000").s().p("AAcCVQgIgBgFgHQgDgGACgJIADgGIAIgHQAHgDAGAAIgBgCIgIgQIgVgmIgagqQgSgngDg5IgQhBQACgBAXA/QANArAJA0QASAtAXASIAJARIAKAVIAEAMQABAFgCAHQgDAHgHAGQgHAEgHAAIgDgBg");
	this.shape_212.setTransform(1172.2321,427.1573);

	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.f("#000000").s().p("AgOCXQgGgFgCgHQgBgIAGgHIAFgEIAKgDQAGgBAHADIgBgCIgBgSIgDgrIgGgvQgIgrgEg1QgIg4AAgLQAEAAANBBQAHAsAFA0IAMBKIACATIAAAYIgBANQgBAFgFAFQgFAHgJABIgCAAQgHAAgHgEg");
	this.shape_213.setTransform(1162.7229,425.3331);

	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.f("#000000").s().p("AgTCVQgHgGAAgIQABgHAGgGIAFgEQAFgBAGAAQAGAAAGADIAAgCIABgSIADgrIgBgwQAAgsAFg0IABhDQAEAAAFBCQABAtgGA1QAAAxACAaIAAATIgDAXIgDAMQgCAGgFAEQgGAFgIABQgKgBgGgFg");
	this.shape_214.setTransform(1155.4577,415.6748);

	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.f("#000000").s().p("AgXCXQgJAAgGgHQgFgHAAgHQABgIAHgFIAHgDIAKAAQAHABAGAEIAAgCIAEgSIAHgqIAFgwQAHgrAQgzQAKg3gCgLQAEAAgDBDQgGAtgPAyQgIAwAAAbIgDATIgGAWIgFAMQgBAGgGADQgGAEgHAAIgDgBg");
	this.shape_215.setTransform(1149.6393,405.6591);

	this.shape_216 = new cjs.Shape();
	this.shape_216.graphics.f("#000000").s().p("AgLCaQgJAAgHgGQgGgGAAgIQAAgHAHgGIAGgDQAEgCAGAAQAHAAAFAEIAAgCIACgSIAEgrIAAgxQAEgrANg0QAGg4gBgKQADAAABBCQgDAtgMA0QgFAxAEAaIgBATIgDAXIgEAMQgBAGgGAEQgEAFgJAAIgBAAg");
	this.shape_216.setTransform(1135.025,424.9521);

	this.shape_217 = new cjs.Shape();
	this.shape_217.graphics.f("#000000").s().p("AgQCXQgGgFgCgIQAAgHAGgHIAGgEQAEgCAGAAQAGgBAGADIAAgCIAAgSIgBgrIgFgxQAAgrAMg1QADg4gBgLQADADAEA/QgBAtgJA1QAAAxAIAaIABATIgBAXIgCANIgGAKQgGAFgJABIgCABQgIAAgGgFg");
	this.shape_217.setTransform(1120.475,444.1577);

	this.shape_218 = new cjs.Shape();
	this.shape_218.graphics.f("#000000").s().p("AgNCZQgHgFgCgHQAAgIAEgHIAGgEQAEgDAFAAQAHgCAGADIAAgCIgCgTIgGgqIgIgwQgFgrAKg3QAAg4gCgKQADADAHA+QACAtgGA1QAEAxAMAZIADATIABAXIgBANQAAAFgFAFQgFAHgJACIgEAAQgGAAgGgDg");
	this.shape_218.setTransform(1106.7975,463.2813);

	this.shape_219 = new cjs.Shape();
	this.shape_219.graphics.f("#000000").s().p("AgJCaQgIgEgCgHQgCgIAEgHIAFgFQAEgDAFgBQAHgCAGABIAAgCIgEgSIgJgpIgPgwQgHgqAGg3QgDg5gBgKQADgBALBCQAEAtgCA1QAHAwAPAYIAFASIAEAXIAAANQAAAGgEAFQgEAHgJADIgHABQgEAAgFgCg");
	this.shape_219.setTransform(1093.025,482.2876);

	this.shape_220 = new cjs.Shape();
	this.shape_220.graphics.f("#000000").s().p("AADCZQgGgDgEgHQgCgGADgJIAEgFIAIgGQAHgDAHACIgBgCIgGgSIgNgoIgTguQgLgpAEg5IgIhCQADgBAOBBQAHAtABA1QALAvASAWIAHASIAGAWIACANQABAFgDAGQgEAIgJADQgEADgFAAIgIgCg");
	this.shape_220.setTransform(1078.3361,501.2126);

	this.shape_221 = new cjs.Shape();
	this.shape_221.graphics.f("#000000").s().p("AARCYQgIgCgEgHQgDgGACgJIAEgGQADgDAFgDQAHgDAGAAIgBgCIgHgRIgSgmIgYgsQgOgoABg6IgLhCQAEAAAQBAQAJAsAFA1QAPAuAWATIAJARIAIAWIADAMIgBAMQgDAIgIAEQgGAEgGAAIgFgBg");
	this.shape_221.setTransform(1063.575,520.0056);

	this.shape_222 = new cjs.Shape();
	this.shape_222.graphics.f("#000000").s().p("AAcCVQgIAAgGgGQgDgGABgJIACgGQADgFAEgDQAGgFAHAAIgBgCIgKgPIgYgkIgfgoQgQgnAKg8QgJg4gFgJQAEgBASA/QAKAtgCA1QARAsAdAPIAMAPIAMAUIAFAMIABAMQgDAIgGAGQgHAFgJAAIgBAAg");
	this.shape_222.setTransform(1042.6,516.0269);

	this.shape_223 = new cjs.Shape();
	this.shape_223.graphics.f("#000000").s().p("AADCYQgHgEgCgHQgCgHAEgIIAEgFQAEgDAFgCIAOAAIgBgCIgEgSIgLgqIgOguQgLgpgFg2IgNhCQAEgBASBAQAKAsAHA0QAMAwAMAXIAFATIAEAWIABANQAAAGgEAGQgEAHgJADIgHABQgFAAgFgCg");
	this.shape_223.setTransform(1024.525,509.6519);

	this.shape_224 = new cjs.Shape();
	this.shape_224.graphics.f("#000000").s().p("AgNCYQgHgDgCgIQgBgIAFgHIAFgEQAEgDAGgBQAGgCAHADIgBgCIgCgSIgGgrIgKgvQgHgrgBg2QgFg5ABgKQAEAAAJBBQAGAtADA0QAHAxAKAZIADATIACAXIgBANQAAAFgFAFQgFAHgJACIgEABQgGAAgGgEg");
	this.shape_224.setTransform(1006.8589,495.3665);

	this.shape_225 = new cjs.Shape();
	this.shape_225.graphics.f("#000000").s().p("AgPCXQgGgEgCgIQAAgIAFgGIAGgEQAEgCAGgBQAGgBAHADIgBgCIAAgSIgCgrIgGgwQgCgsADg1QABg5ADgKQAEgBABBDQABAtAAA1QADAxAGAZIACATIgBAXIgCANQAAAGgGAFQgFAFgJACIgCAAQgIAAgGgFg");
	this.shape_225.setTransform(987.7729,480.9075);

	this.shape_226 = new cjs.Shape();
	this.shape_226.graphics.f("#000000").s().p("AgXCVQgGgGgBgHQABgIAGgGIAGgDQAFgCAFAAQAHAAAGAEIAAgCIABgSIADgrIgBgwQABgtAHg0QAHg4AGgLQAEAAgIBDIgGBhQgCAxADAaIAAATIgDAXIgEAMQgBAGgFAEQgHAGgIAAQgJgBgHgFg");
	this.shape_226.setTransform(969.2946,466.3);

	this.shape_227 = new cjs.Shape();
	this.shape_227.graphics.f("#000000").s().p("AgQCWQgHgFgBgIQAAgHAGgHIAGgDQAFgCAFAAQAHgBAGAEIAAgCIAAgTIAAgrIgDgwQgCgrADg2QACg5AFgKQADAAgBBDIABBhQABAyAEAZIABATIgCAXIgDANQAAAGgGAEQgGAGgIAAIgDABQgHAAgGgGg");
	this.shape_227.setTransform(955.225,445.307);

	this.shape_228 = new cjs.Shape();
	this.shape_228.graphics.f("#000000").s().p("AgPCXQgGgFgCgHQAAgIAGgHQABgDAEgBQAFgCAFAAQAHgCAGAEIAAgCIgBgTIgCgqIgGgwQgEgsgCg1QgCg4AEgLQACAAAEBCIAJBhIAJBLIACATIgBAXIgBANIgGAKQgFAGgKABIgCABQgHAAgHgFg");
	this.shape_228.setTransform(941.675,424.2581);

	this.shape_229 = new cjs.Shape();
	this.shape_229.graphics.f("#000000").s().p("AgNCXQgIgEgBgIQgBgHAFgHIAGgEQAEgDAFgBQAHgBAGADIAAgCIgCgTIgEgqIgIgvIgOhgQgGg5ACgKQADgBAKBCIAPBgIAOBKIACATIABAXIgBANQAAAGgFAFQgFAGgKACIgCAAQgHAAgGgEg");
	this.shape_229.setTransform(928.1653,403.1089);

	this.shape_230 = new cjs.Shape();
	this.shape_230.graphics.f("#000000").s().p("AgCCXQgIgFgCgHQAAgHAEgIIAFgEIAJgEQAHgCAHADIgBgCIgCgSIgHgrIgKguIgVheQgMg4ACgLQADgBAPBBIAWBfIASBJIAEASIACAXIgBAOIgEAKQgFAHgJACIgFABQgHAAgEgDg");
	this.shape_230.setTransform(913.6857,381.9188);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_127,p:{x:1585.1221,y:329.2213}}]}).to({state:[{t:this.shape_128}]},1).to({state:[{t:this.shape_129}]},1).to({state:[{t:this.shape_130,p:{x:1586.15,y:328.8213}}]},1).to({state:[{t:this.shape_131}]},1).to({state:[{t:this.shape_132}]},1).to({state:[{t:this.shape_133,p:{x:1587.2,y:328.4213}}]},1).to({state:[{t:this.shape_134}]},1).to({state:[{t:this.shape_135,p:{x:1587.9,y:328.1713}}]},1).to({state:[{t:this.shape_135,p:{x:1588.25,y:328.0713}}]},1).to({state:[{t:this.shape_136}]},1).to({state:[{t:this.shape_137,p:{x:1588.95,y:327.8213}}]},1).to({state:[{t:this.shape_138,p:{x:1589.2971,y:327.6713}}]},1).to({state:[{t:this.shape_139}]},1).to({state:[{t:this.shape_139}]},1).to({state:[{t:this.shape_140}]},1).to({state:[{t:this.shape_130,p:{x:1590.65,y:327.1713}}]},1).to({state:[{t:this.shape_132}]},1).to({state:[{t:this.shape_132}]},1).to({state:[{t:this.shape_133,p:{x:1591.7,y:326.8213}}]},1).to({state:[{t:this.shape_141,p:{x:1592.05,y:326.6713}}]},1).to({state:[{t:this.shape_142}]},1).to({state:[{t:this.shape_135,p:{x:1592.75,y:326.4213}}]},1).to({state:[{t:this.shape_143}]},1).to({state:[{t:this.shape_137,p:{x:1593.45,y:326.1713}}]},1).to({state:[{t:this.shape_144}]},1).to({state:[{t:this.shape_138,p:{x:1594.1471,y:325.9213}}]},1).to({state:[{t:this.shape_145}]},1).to({state:[{t:this.shape_139}]},1).to({state:[{t:this.shape_146}]},1).to({state:[{t:this.shape_132}]},1).to({state:[{t:this.shape_147,p:{x:1595.85,y:325.3213}}]},1).to({state:[{t:this.shape_133,p:{x:1596.2,y:325.1713}}]},1).to({state:[{t:this.shape_148,p:{x:1596.55,y:325.0713}}]},1).to({state:[{t:this.shape_149,p:{x:1596.9,y:324.9213}}]},1).to({state:[{t:this.shape_150}]},1).to({state:[{t:this.shape_151}]},1).to({state:[{t:this.shape_152}]},1).to({state:[{t:this.shape_153,p:{x:1598.3,y:324.4213}}]},1).to({state:[{t:this.shape_154,p:{x:1598.65,y:324.3213}}]},1).to({state:[{t:this.shape_138,p:{x:1598.9971,y:324.1713}}]},1).to({state:[{t:this.shape_155,p:{x:1599.3471,y:324.0713}}]},1).to({state:[{t:this.shape_139}]},1).to({state:[{t:this.shape_147,p:{x:1600,y:323.8213}}]},1).to({state:[{t:this.shape_132}]},1).to({state:[{t:this.shape_156}]},1).to({state:[{t:this.shape_141,p:{x:1601.05,y:323.4213}}]},1).to({state:[{t:this.shape_157,p:{x:1601.4,y:323.3213}}]},1).to({state:[{t:this.shape_158,p:{x:1601.75,y:323.1713}}]},1).to({state:[{t:this.shape_159}]},1).to({state:[{t:this.shape_137,p:{x:1602.45,y:322.9213}}]},1).to({state:[{t:this.shape_160}]},1).to({state:[{t:this.shape_161,p:{x:1603.15,y:322.6713}}]},1).to({state:[{t:this.shape_162,p:{x:1603.5,y:322.5713}}]},1).to({state:[{t:this.shape_163,p:{x:1603.85,y:322.4213}}]},1).to({state:[{t:this.shape_155,p:{x:1604.1971,y:322.3213}}]},1).to({state:[{t:this.shape_139}]},1).to({state:[{t:this.shape_147,p:{x:1604.85,y:322.0713}}]},1).to({state:[{t:this.shape_133,p:{x:1605.2,y:321.9213}}]},1).to({state:[{t:this.shape_148,p:{x:1605.55,y:321.8213}}]},1).to({state:[{t:this.shape_149,p:{x:1605.9,y:321.6713}}]},1).to({state:[{t:this.shape_164}]},1).to({state:[{t:this.shape_165}]},1).to({state:[{t:this.shape_166}]},1).to({state:[{t:this.shape_153,p:{x:1607.3,y:321.1713}}]},1).to({state:[{t:this.shape_154,p:{x:1607.65,y:321.0713}}]},1).to({state:[{t:this.shape_163,p:{x:1608,y:320.9213}}]},1).to({state:[{t:this.shape_162,p:{x:1608.35,y:320.8213}}]},1).to({state:[{t:this.shape_167}]},1).to({state:[{t:this.shape_155,p:{x:1609.0471,y:320.5713}}]},1).to({state:[{t:this.shape_139}]},1).to({state:[{t:this.shape_168}]},1).to({state:[{t:this.shape_141,p:{x:1610.05,y:320.1713}}]},1).to({state:[{t:this.shape_157,p:{x:1610.4,y:320.0713}}]},1).to({state:[{t:this.shape_158,p:{x:1610.75,y:319.9213}}]},1).to({state:[{t:this.shape_169}]},1).to({state:[{t:this.shape_170}]},1).to({state:[{t:this.shape_171}]},1).to({state:[{t:this.shape_161,p:{x:1612.15,y:319.4213}}]},1).to({state:[{t:this.shape_162,p:{x:1612.5,y:319.3213}}]},1).to({state:[{t:this.shape_163,p:{x:1612.85,y:319.1713}}]},1).to({state:[{t:this.shape_172}]},1).to({state:[{t:this.shape_173}]},1).to({state:[{t:this.shape_155,p:{x:1613.8971,y:318.8213}}]},1).to({state:[{t:this.shape_139}]},1).to({state:[{t:this.shape_174,p:{x:1614.5721,y:318.5713}}]},1).to({state:[{t:this.shape_175}]},1).to({state:[{t:this.shape_176}]},1).to({state:[{t:this.shape_177}]},1).to({state:[{t:this.shape_178}]},1).to({state:[{t:this.shape_179}]},1).to({state:[{t:this.shape_180}]},1).to({state:[{t:this.shape_181}]},1).to({state:[{t:this.shape_182}]},1).to({state:[{t:this.shape_183}]},1).to({state:[{t:this.shape_184}]},1).to({state:[{t:this.shape_185}]},1).to({state:[{t:this.shape_186}]},1).to({state:[{t:this.shape_187}]},1).to({state:[{t:this.shape_188}]},1).to({state:[{t:this.shape_189}]},1).to({state:[{t:this.shape_190}]},1).to({state:[{t:this.shape_191}]},1).to({state:[{t:this.shape_192}]},1).to({state:[{t:this.shape_193}]},1).to({state:[{t:this.shape_194}]},1).to({state:[{t:this.shape_195}]},1).to({state:[{t:this.shape_196}]},1).to({state:[{t:this.shape_197}]},1).to({state:[{t:this.shape_198}]},1).to({state:[{t:this.shape_199}]},1).to({state:[{t:this.shape_200}]},1).to({state:[{t:this.shape_201}]},1).to({state:[{t:this.shape_202}]},1).to({state:[{t:this.shape_203}]},1).to({state:[{t:this.shape_204}]},1).to({state:[{t:this.shape_205}]},1).to({state:[{t:this.shape_206}]},1).to({state:[{t:this.shape_207}]},1).to({state:[{t:this.shape_208}]},1).to({state:[{t:this.shape_209}]},1).to({state:[{t:this.shape_210}]},1).to({state:[{t:this.shape_211}]},1).to({state:[{t:this.shape_212}]},1).to({state:[{t:this.shape_174,p:{x:1168.2721,y:434.7213}}]},1).to({state:[{t:this.shape_213}]},1).to({state:[{t:this.shape_214}]},1).to({state:[{t:this.shape_215}]},1).to({state:[{t:this.shape_216}]},1).to({state:[{t:this.shape_217}]},1).to({state:[{t:this.shape_218}]},1).to({state:[{t:this.shape_219}]},1).to({state:[{t:this.shape_220}]},1).to({state:[{t:this.shape_221}]},1).to({state:[{t:this.shape_222}]},1).to({state:[{t:this.shape_223}]},1).to({state:[{t:this.shape_224}]},1).to({state:[{t:this.shape_225}]},1).to({state:[{t:this.shape_226}]},1).to({state:[{t:this.shape_227}]},1).to({state:[{t:this.shape_228}]},1).to({state:[{t:this.shape_229}]},1).to({state:[{t:this.shape_230}]},1).to({state:[{t:this.shape_127,p:{x:899.1721,y:360.6713}}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.shape_132).wait(5).to({_off:false},0).to({_off:true},1).wait(11).to({_off:false,x:1591,y:327.0713},0).wait(1).to({x:1591.35,y:326.9213},0).to({_off:true},1).wait(11).to({_off:false,x:1595.5,y:325.4213},0).to({_off:true},1).wait(13).to({_off:false,x:1600.35,y:323.6713},0).to({_off:true},1).wait(99));
	this.timeline.addTween(cjs.Tween.get(this.shape_139).wait(13).to({_off:false},0).wait(1).to({x:1589.9971,y:327.4213},0).to({_off:true},1).wait(13).to({_off:false,x:1594.8471,y:325.6713},0).to({_off:true},1).wait(13).to({_off:false,x:1599.6971,y:323.9213},0).to({_off:true},1).wait(13).to({_off:false,x:1604.5471,y:322.1713},0).to({_off:true},1).wait(13).to({_off:false,x:1609.3971,y:320.4213},0).to({_off:true},1).wait(13).to({_off:false,x:1614.2471,y:318.6713},0).to({_off:true},1).wait(59));

	// Каркас_17
	this.shape_231 = new cjs.Shape();
	this.shape_231.graphics.f("#000000").s().p("AAKDMQgKgFgCgLQgCgJAFgKIAFgHQAGgFAHgBQALgDAIACQAAAAAAAAQAAgBAAAAQAAAAAAgBQgBAAAAAAIgRhSIgJggIAAgBQgPgygWhOQgchbgCgZQAGgDAkB0IAnB/IACAFIATBAQAJAiACAWIAAASQABAHgGAIQgGAKgNADQgFACgFAAQgGAAgHgDg");
	this.shape_231.setTransform(1572.3827,338.2054);

	this.shape_232 = new cjs.Shape();
	this.shape_232.graphics.f("#000000").s().p("AAKDMQgKgFgCgLQgCgJAFgKIAGgHQAFgFAIgBQAKgDAIADQAAgBAAAAQAAAAAAgBQAAAAAAAAQAAAAAAgBQgLg9gGgVIgJggIAAgBIgmh/QgchcgCgZQAGgCAkBzIAoB/IABAFIAUBAQAIAiACAWIAAASQABAIgGAHQgGAKgNADQgFACgFAAQgGAAgHgDg");
	this.shape_232.setTransform(1572.6827,338.0075);

	this.shape_233 = new cjs.Shape();
	this.shape_233.graphics.f("#000000").s().p("AAKDMQgKgFgCgLQgCgJAFgKIAGgHQAFgEAIgCQAKgDAIADQAAgBAAAAQAAAAAAgBQAAAAAAAAQAAAAAAgBQgLg9gGgVIgJggIgBgBIglh/QgchcgCgZQAGgCAkBzIAoB/IABAFIAUBAQAIAiACAWIAAASQABAIgGAHQgGAKgNADQgFACgFAAQgGAAgHgDg");
	this.shape_233.setTransform(1573.0327,337.8075);
	this.shape_233._off = true;

	this.shape_234 = new cjs.Shape();
	this.shape_234.graphics.f("#000000").s().p("AAKDMQgKgFgCgLQgCgJAFgKIAGgHQAFgFAIgBQAKgDAIADQAAgBAAAAQAAAAAAgBQAAAAAAAAQAAAAAAgBQgLg9gGgVIgJggIgBgBIglh/QgchcgCgZQAGgCAkBzIAoB/IABAFIAUBAQAIAiACAWIAAASQABAIgGAHQgGAKgNADQgFACgFAAQgGAAgHgDg");
	this.shape_234.setTransform(1573.3827,337.6575);
	this.shape_234._off = true;

	this.shape_235 = new cjs.Shape();
	this.shape_235.graphics.f("#000000").s().p("AAKDMQgKgFgCgLQgCgJAFgKIAGgHQAFgEAIgCQAKgDAIADQAAgBAAAAQAAAAAAgBQAAAAAAAAQAAAAAAgBIgRhSIgJggIgBgBIglh/QgchcgCgZQAGgCAkBzIAnB/IACAFIATBAQAJAiACAWIAAASQABAIgGAHQgGAKgNADQgFACgFAAQgGAAgHgDg");
	this.shape_235.setTransform(1573.7327,337.4575);

	this.shape_236 = new cjs.Shape();
	this.shape_236.graphics.f("#000000").s().p("AAKDMQgKgFgCgLQgCgJAFgKIAFgHQAGgFAIgBQAKgDAIADQAAgBAAAAQAAAAAAgBQAAAAAAAAQAAAAAAgBIgRhSIgJggIgBgBIglh/QgchcgCgZQAGgCAkBzIAnB/IACAFIATBAQAJAiACAWIAAASQABAIgGAHQgGAKgNADQgFACgFAAQgGAAgHgDg");
	this.shape_236.setTransform(1574.0827,337.3075);
	this.shape_236._off = true;

	this.shape_237 = new cjs.Shape();
	this.shape_237.graphics.f("#000000").s().p("AAKDMQgKgFgDgLQgBgJAEgKIAGgHQAGgEAHgCQALgDAIADQAAgBAAAAQAAAAAAgBQAAAAAAAAQAAAAgBgBQgKg9gHgVIgJggIAAgBIgmh/QgbhcgCgZQAFgCAlBzIAnB/IACAFIATBAQAJAiACAWIgBASQACAIgGAHQgHAKgMADQgFACgFAAQgHAAgGgDg");
	this.shape_237.setTransform(1574.4,337.1075);

	this.shape_238 = new cjs.Shape();
	this.shape_238.graphics.f("#000000").s().p("AAKDMQgKgFgCgLQgCgJAFgKIAGgHQAFgEAIgCQAKgDAIADQAAAAAAgBQAAAAAAAAQAAgBAAAAQAAAAAAgBQgLg9gGgVIgJggIgBgBIglh/QgchcgCgZQAGgCAkBzIAoB/IABAFIAUBAQAIAiACAWIAAASQABAIgGAHQgGAKgNADQgFACgFAAQgGAAgHgDg");
	this.shape_238.setTransform(1574.7327,336.9075);

	this.shape_239 = new cjs.Shape();
	this.shape_239.graphics.f("#000000").s().p("AAKDMQgKgFgCgLQgCgJAFgKIAGgHQAFgEAIgCQAKgDAIADQAAgBAAAAQAAAAAAgBQAAAAAAAAQAAAAAAgBQgLg9gGgVIgJggIgBgBIglh/QgchcgCgZQAGgCAkBzIAoB/IABAFIATBAQAJAiACAWIAAASQABAIgGAHQgGAKgNADQgFACgFAAQgGAAgHgDg");
	this.shape_239.setTransform(1575.4327,336.5575);

	this.shape_240 = new cjs.Shape();
	this.shape_240.graphics.f("#000000").s().p("AAKDMQgKgFgCgLQgCgJAFgKIAFgHQAGgEAIgCQAKgDAIADQAAgBAAAAQAAAAAAgBQAAAAAAAAQAAAAAAgBIgRhSIgJggIgBgBIglh/QgchcgCgZQAGgCAkBzIAnB/IACAFIATBAQAJAiACAWIAAASQABAIgGAHQgGAKgNADQgFACgFAAQgGAAgHgDg");
	this.shape_240.setTransform(1576.1327,336.2075);
	this.shape_240._off = true;

	this.shape_241 = new cjs.Shape();
	this.shape_241.graphics.f("#000000").s().p("AAKDMQgKgFgDgLQgCgJAFgKIAGgHQAGgFAHgBQALgDAIADQAAgBAAAAQAAAAAAgBQAAAAAAAAQAAAAgBgBQgLg9gGgVIgJggIAAgBIgmh/QgbhcgCgZQAFgCAlBzIAnB/IACAFIATBAQAJAiABAWQACALgCAHQABAIgFAHQgHAKgMADQgFACgFAAQgHAAgGgDg");
	this.shape_241.setTransform(1576.4625,336.0575);

	this.shape_242 = new cjs.Shape();
	this.shape_242.graphics.f("#000000").s().p("AAKDMQgKgFgCgLQgCgJAFgKIAGgHQAFgFAIgBQAKgDAIADQAAgBAAAAQAAAAAAgBQAAAAAAAAQAAAAAAgBIgRhSIgJggIgBgBIglh/QgchcgCgZQAGgCAkBzIAoB/IABAFIATBAQAJAiACAWIAAASQABAIgGAHQgGAKgNADQgFACgFAAQgGAAgHgDg");
	this.shape_242.setTransform(1577.4827,335.5075);

	this.shape_243 = new cjs.Shape();
	this.shape_243.graphics.f("#000000").s().p("AAKDMQgKgFgCgLQgCgJAFgKIAFgHQAGgFAHgBQALgDAIADQAAgBAAAAQAAAAAAgBQAAAAAAAAQgBAAAAgBQgLg9gGgVIgJggIAAgBIglh/QgchcgCgZQAGgCAkBzIAnB/IACAFIATBAQAJAiACAWIAAASQABAIgGAHQgGAKgNADQgFACgFAAQgGAAgHgDg");
	this.shape_243.setTransform(1578.1827,335.1575);

	this.shape_244 = new cjs.Shape();
	this.shape_244.graphics.f("#000000").s().p("AAKDMQgKgFgCgLQgCgJAFgKIAGgHQAFgEAIgCQAKgDAIADQAAgBAAAAQAAAAAAgBQAAAAAAAAQAAAAAAgBQgLg9gGgVIgJggIAAgBIgmh/QgchcgCgZQAGgCAkBzIAoB/IABAFIAUBAQAIAiACAWIAAASQABAIgGAHQgGAKgNADQgFACgFAAQgGAAgHgDg");
	this.shape_244.setTransform(1578.4827,334.9575);

	this.shape_245 = new cjs.Shape();
	this.shape_245.graphics.f("#000000").s().p("AAKDMQgKgFgCgLQgCgJAFgKIAGgHQAFgEAIgCQAKgDAIADQAAgBAAAAQAAAAAAgBQAAAAAAAAQAAAAAAgBIgRhSIgJggIgBgBIglh/QgchcgCgZQAGgCAkBzIAoB/IABAFIAUBAQAIAiACAWIAAASQABAIgGAHQgGAKgNADQgFACgFAAQgGAAgHgDg");
	this.shape_245.setTransform(1579.1827,334.6075);

	this.shape_246 = new cjs.Shape();
	this.shape_246.graphics.f("#000000").s().p("AAKDMQgKgFgDgLQgCgJAGgKIAFgHQAGgEAIgCQAKgDAIADQAAgBAAAAQAAAAAAgBQAAAAAAAAQAAAAAAgBQgMg9gGgVIgIggIAAgBIgnh/QgbhcgCgZQAGgCAkBzIAnB/IACAFIAUBAQAIAiACAWIAAASQAAAIgFAHQgGAKgNADQgFACgFAAQgHAAgGgDg");
	this.shape_246.setTransform(1580.2,334.0575);

	this.shape_247 = new cjs.Shape();
	this.shape_247.graphics.f("#000000").s().p("AAKDMQgKgFgCgLQgCgJAFgKIAGgHQAFgFAIgBQAKgDAIADQAAgBAAAAQAAAAAAgBQAAAAAAAAQAAAAAAgBQgLg9gGgVIgJggIgBgBIglh/QgchcgCgZQAGgCAkBzIAoB/IABAFIATBAQAJAiACAWIAAASQABAIgGAHQgGAKgNADQgFACgFAAQgGAAgHgDg");
	this.shape_247.setTransform(1581.2327,333.5575);

	this.shape_248 = new cjs.Shape();
	this.shape_248.graphics.f("#000000").s().p("AAKDMQgKgFgCgLQgCgJAFgKIAGgHQAFgEAIgCQAKgDAIADQAAgBAAAAQAAAAAAgBQAAAAAAAAQAAAAAAgBIgRhSIgJggIgBgBIglh/QgchcgCgZQAGgCAkBzIAoB/IABAFIATBAQAJAiACAWIAAASQABAIgGAHQgGAKgNADQgFACgFAAQgGAAgHgDg");
	this.shape_248.setTransform(1583.2827,332.4575);

	this.shape_249 = new cjs.Shape();
	this.shape_249.graphics.f("#000000").s().p("AAKDMQgKgFgCgLQgCgJAFgKIAFgHQAGgEAIgCQAKgDAIADQAAAAAAgBQAAAAAAAAQAAgBAAAAQAAAAAAgBIgRhSIgJggIgBgBIglh/QgchcgCgZQAGgCAkBzIAnB/IACAFIATBAQAJAiACAWIAAASQABAIgGAHQgGAKgNADQgFACgFAAQgGAAgHgDg");
	this.shape_249.setTransform(1583.6327,332.2575);

	this.shape_250 = new cjs.Shape();
	this.shape_250.graphics.f("#000000").s().p("AAKDMQgKgFgCgLQgCgJAFgKIAFgHQAGgFAHgBQALgDAIADQAAgBAAAAQAAAAAAgBQAAAAAAAAQgBAAAAgBIgQhSIgKggIAAgBQgPgxgWhOQgchcgCgZQAGgCAkBzIAnB/IACAFIATBAQAJAiACAWIAAASQABAIgGAHQgGAKgNADQgFACgFAAQgGAAgHgDg");
	this.shape_250.setTransform(1583.9827,332.1075);

	this.shape_251 = new cjs.Shape();
	this.shape_251.graphics.f("#000000").s().p("AAKDMQgKgFgCgLQgCgJAFgKIAGgHQAFgFAIgBQAKgDAIADQAAgBAAAAQAAAAAAgBQAAAAAAAAQAAAAAAgBIgRhSIgJggIgBgBIglh/QgchcgCgZQAGgCAkBzIAnB/IACAFIATBAQAJAiACAWIAAASQABAIgGAHQgGAKgNADQgFACgFAAQgGAAgHgDg");
	this.shape_251.setTransform(1585.3327,331.4075);

	this.shape_252 = new cjs.Shape();
	this.shape_252.graphics.f("#000000").s().p("AAKDMQgKgFgCgLQgCgJAEgKIAHgHQAFgEAHgCQALgDAIADQAAgBAAAAQAAAAAAgBQAAAAAAAAQAAAAgBgBQgLg9gGgVIgJggIAAgBIgmh/QgbhcgCgZQAGgCAkBzIAoB/IABAFIATBAQAJAiACAWIgBASQACAIgGAHQgHAKgMADQgFACgFAAQgHAAgGgDg");
	this.shape_252.setTransform(1586,331.0075);

	this.shape_253 = new cjs.Shape();
	this.shape_253.graphics.f("#000000").s().p("AAKDMQgKgFgDgLQgCgJAFgKIAGgHQAGgEAHgCQALgDAIADQAAgBAAAAQAAAAAAgBQAAAAAAAAQAAAAgBgBQgLg9gGgVIgJggIAAgBIgmh/QgbhcgCgZQAFgCAlBzIAnB/IACAFIATBAQAJAiABAWQACALgCAHQABAIgFAHQgHAKgMADQgFACgFAAQgHAAgGgDg");
	this.shape_253.setTransform(1588.0625,329.9575);

	this.shape_254 = new cjs.Shape();
	this.shape_254.graphics.f("#000000").s().p("AAKDMQgKgFgCgLQgCgJAFgKIAFgHQAGgEAHgCQALgDAIADIAAgDIgRhSIgKggIAAgBIglh/QgchcgCgZQAGgCAkBzIAnB/IACAFIATBAQAJAiACAWIAAASQABAIgGAHQgGAKgNADQgFACgFAAQgGAAgHgDg");
	this.shape_254.setTransform(1589.7827,329.0575);

	this.shape_255 = new cjs.Shape();
	this.shape_255.graphics.f("#000000").s().p("AAKDMQgKgFgDgLQgCgJAGgKIAFgHQAGgFAIgBQAKgDAIADQAAgBAAAAQAAAAAAgBQAAAAAAAAQAAAAAAgBQgMg9gFgVIgJggIAAgBIgnh/QgbhcgCgZQAGgCAkBzIAnB/IACAFIAUBAQAIAiACAWIAAASQAAAIgFAHQgHAKgMADQgFACgFAAQgHAAgGgDg");
	this.shape_255.setTransform(1591.8,328.0075);

	this.shape_256 = new cjs.Shape();
	this.shape_256.graphics.f("#000000").s().p("AAKDMQgKgFgCgLQgCgJAFgKIAGgHQAFgEAIgCQAKgDAIADQAAAAAAgBQAAAAAAAAQAAgBAAAAQAAAAAAgBIgRhSIgJggIgBgBIglh/QgchcgCgZQAGgCAkBzIAoB/IABAFIAUBAQAIAiACAWIAAASQABAIgGAHQgGAKgNADQgFACgFAAQgGAAgHgDg");
	this.shape_256.setTransform(1592.4827,327.6075);

	this.shape_257 = new cjs.Shape();
	this.shape_257.graphics.f("#000000").s().p("AAKDMQgKgFgCgLQgCgJAFgKIAGgHQAFgFAIgBQAKgDAIADQAAgBAAAAQAAAAAAgBQAAAAAAAAQAAAAAAgBQgLg9gGgVIgJggIgBgBIglh/QgchcgCgZQAGgCAkBzIAoB/IABAFIAUBAQAIAhACAXIAAASQABAIgGAHQgGAKgNADQgFACgFAAQgGAAgHgDg");
	this.shape_257.setTransform(1594.1827,326.7575);

	this.shape_258 = new cjs.Shape();
	this.shape_258.graphics.f("#000000").s().p("AAKDMQgKgFgCgLQgCgJAFgKIAFgHQAGgEAHgCQALgDAIADQAAgBAAAAQAAAAAAgBQAAAAAAAAQgBAAAAgBQgLg9gGgVIgJggIAAgBIglh/QgchcgCgZQAGgCAkBzIAnB/IACAFIATBAQAJAiACAWIAAASQABAIgGAHQgGAKgNADQgFACgFAAQgGAAgHgDg");
	this.shape_258.setTransform(1595.5827,326.0075);

	this.shape_259 = new cjs.Shape();
	this.shape_259.graphics.f("#000000").s().p("AAKDMQgKgFgCgLQgDgJAFgKIAHgHQAFgFAHgBQALgDAIADQAAgBAAAAQAAAAAAgBQAAAAAAAAQAAAAgBgBQgLg9gGgVIgJggIAAgBIglh/QgchcgCgZQAGgCAkBzIAoB/IABAFIATBAQAJAiACAWIgBASQACAIgGAHQgHAKgMADQgFACgFAAQgHAAgGgDg");
	this.shape_259.setTransform(1597.6,324.9575);

	this.shape_260 = new cjs.Shape();
	this.shape_260.graphics.f("#000000").s().p("AAKDMQgKgFgCgLQgCgJAFgKIAFgHQAGgFAHgBQALgDAIACIgBgCIgQhSIgKggIAAgBQgPgygWhOQgchbgCgZQAGgCAkBzIAnB/IACAFIATBAQAJAiACAWIAAASQABAHgGAIQgGAKgNADQgFACgFAAQgGAAgHgDg");
	this.shape_260.setTransform(1601.3827,323.0075);

	this.shape_261 = new cjs.Shape();
	this.shape_261.graphics.f("#000000").s().p("AAEDOQgJgFgDgLQgCgJAGgKQABgFADgCQAGgEAHgCQALgDAIACQAAAAAAgBQAAAAAAAAQAAgBAAAAQAAAAAAAAIgOhTIgIggIAAgBIggiBQgZhcgDgaQAGgCAiB0IAiCBIACAFIAQBBQAIAiAAAWIABASQABAHgGAIQgGAKgNADQgFACgFAAQgGAAgHgDg");
	this.shape_261.setTransform(1588.4827,314.0325);

	this.shape_262 = new cjs.Shape();
	this.shape_262.graphics.f("#000000").s().p("AgBDPQgLgFgDgKQgCgJAGgLIAGgGQAFgFAHgCQAKgDAJACQAAAAAAgBQAAAAAAAAQAAgBAAAAQAAAAgBAAIgKhTIgHghIAAgBIgbiCQgVhegEgYQAGgCAgB0QAPBBANBCIACAFIAOBBQAGAjAAAVIAAASQABAHgFAIQgHAKgMADQgFACgFAAQgGAAgGgDg");
	this.shape_262.setTransform(1575.6077,305.0746);

	this.shape_263 = new cjs.Shape();
	this.shape_263.graphics.f("#000000").s().p("AgGDRQgLgFgDgKQgCgKAFgKIAGgHQAGgEAGgDQAKgDAJACQAAAAAAgBQAAAAAAAAQAAgBAAAAQAAAAAAAAIgIhUIgFghIAAgBQgJgzgMhQIgXh3QAFgBAfB1QANBBAJBDIABAFIAMBCQAFAigBAWIAAARQACAIgGAHQgGAKgMAEQgGACgFAAQgFAAgGgDg");
	this.shape_263.setTransform(1562.6911,296.0629);

	this.shape_264 = new cjs.Shape();
	this.shape_264.graphics.f("#000000").s().p("AgNDSQgLgFgDgKQgDgKAGgKQADgFADgCQAGgEAHgDQAJgDAJACQABgBAAAAQAAAAAAgBQAAAAAAAAQAAAAgBgBIgEhUIgEghIAAgBQgHg0gIhQIgVh3QAFgCAbB3QANBAAFBEIABAGIAJBCQAEAigCAWIABARQABAHgFAIQgHAKgMADQgFADgFAAQgGAAgGgDg");
	this.shape_264.setTransform(1549.8083,287.0549);

	this.shape_265 = new cjs.Shape();
	this.shape_265.graphics.f("#000000").s().p("AgODTQgLgFgEgKQgCgKAGgKQABgEAEgDQAGgEAHgDQAJgDAKABIAAgCIgChUIgCghIAAgCQgGgzgEhRQgNhfgGgZQAGgBAZB3QALBBABBEIABAGIAHBCQABAjgCAUIABARQABAIgFAIQgGAKgMADQgGADgEAAQgHAAgFgDg");
	this.shape_265.setTransform(1536.4805,278.0056);

	this.shape_266 = new cjs.Shape();
	this.shape_266.graphics.f("#000000").s().p("AgPDTQgLgEgDgLQgDgJAGgKIAFgHQAGgFAHgCQAJgDAKAAQAAAAAAgBQAAAAAAAAQAAgBAAAAQAAAAAAAAIAChUIgBghIgBgCQgDg0gBhRQgKhdgFgaQAGAGAWBwQAIBBgCBFIABAFIAEBDQABAjgEAUIABARQABAHgFAIQgGAKgMAEQgFACgFAAQgGAAgGgDg");
	this.shape_266.setTransform(1523.0111,268.9691);

	this.shape_267 = new cjs.Shape();
	this.shape_267.graphics.f("#000000").s().p("AgQDUQgLgFgEgKQgCgJAFgKQADgFADgCQAFgFAIgDQAJgDAKAAQAAAAAAgBQAAAAAAAAQAAgBAAAAQAAAAAAAAIAFhUIAAghIAAgCQgBgzAChSQgIhegHgZQAGgCAWB4QAGBCgFBEIAAAGIABBDQAAAigEAUIABARQABAHgFAIQgGAKgMAEQgFACgFAAQgGAAgGgCg");
	this.shape_267.setTransform(1509.628,259.8807);

	this.shape_268 = new cjs.Shape();
	this.shape_268.graphics.f("#000000").s().p("AgUDUQgLgEgEgLQgDgJAGgKIAFgHQAGgFAHgCQAKgEAJAAIABgDIAIhTIABghIAAgCQABg0AGhQQgEhfgIgZQAFgCAUB5QAFBCgKBEIAAAGIgBBCQgCAjgFATIABARQACAHgFAIQgGAKgMAEQgFACgGAAQgGAAgFgCg");
	this.shape_268.setTransform(1496.5194,250.7866);

	this.shape_269 = new cjs.Shape();
	this.shape_269.graphics.f("#000000").s().p("AgZDUQgLgEgDgKQgDgKAFgKQACgFADgCQAGgFAHgCQAKgEAKAAQAAgBAAAAQAAgBAAAAQAAAAAAgBQAAAAAAAAIAMhTIACghIAAgBQADg0AKhRQgChfgJgZQAGgCASB6QACBCgNBEIAAAFIgEBDQgDAjgGATQAAAKACAFQABAIgFAIQgGAKgLAEQgGACgFAAQgGAAgGgCg");
	this.shape_269.setTransform(1483.4666,241.6366);

	this.shape_270 = new cjs.Shape();
	this.shape_270.graphics.f("#000000").s().p("AgdDUQgLgEgEgKQgDgKAFgKQACgFAEgCQAEgFAIgDQAKgDALgBQAAgBAAAAQABAAAAgBQAAAAAAAAQgBgBAAAAIAOhSIAEghIAAgCQAGgzAMhQQAChfgKgaQAGgBAPB6QABBBgRBEIgBAGIgGBCQgFAjgGASQgBALADAFQABAHgFAIQgFAKgLAFQgGACgGAAQgGAAgFgCg");
	this.shape_270.setTransform(1470.4248,232.4866);

	this.shape_271 = new cjs.Shape();
	this.shape_271.graphics.f("#000000").s().p("AgiDTQgLgEgEgKQgDgJAFgLIAFgHQAGgFAHgCQAKgFALAAIAAgDIARhSIAFghIAAgBQAIg0AQhPQAFhfgKgZQAFgCANB7QgBBBgVBDIgBAGIgIBCQgGAigHASQgCALADAFQACAHgFAIQgFAKgLAFQgHACgGAAQgFAAgFgCg");
	this.shape_271.setTransform(1457.4188,223.3182);

	this.shape_272 = new cjs.Shape();
	this.shape_272.graphics.f("#000000").s().p("AgnDSQgLgDgEgLQgDgJAFgKQABgFAEgDQAFgFAHgCQALgEALgBIAAgDIAUhRIAHghIAAgBQAKgzAUhPQAHhegLgaQAGgCALB7QgEBCgZBCIgBAFIgLBCQgHAigIASQgBAKADAEQACAIgFAIQgFAKgLAFQgHACgGAAQgFAAgFgCg");
	this.shape_272.setTransform(1444.4438,214.1182);

	this.shape_273 = new cjs.Shape();
	this.shape_273.graphics.f("#000000").s().p("AgsDRQgLgDgEgLQgDgJAFgKQABgFAEgDQAFgFAHgCQAKgFAMgBIAAgCIAYhRIAHggIAAgCQAMgyAYhOQAKhegMgbQAGAAAJB6QgGBCgcBBIgBAFIgOBCQgJAigHAQQgCALAEAEQABAHgEAIQgFALgMAEQgGAEgHAAQgFAAgFgDg");
	this.shape_273.setTransform(1431.4438,204.9011);

	this.shape_274 = new cjs.Shape();
	this.shape_274.graphics.f("#000000").s().p("AgxDQQgLgDgEgLQgDgJAFgKQABgFAEgDQAEgFAIgDIAWgGIABgCIAahPIAJggIAAgCQAOgyAbhMQANhegNgbQAGgBAHB7QgIBBggBAIgBAGIgQBAQgKAigIAQQgCAKAEAEQACAIgFAIQgFAKgMAFQgHADgGAAQgFAAgFgCg");
	this.shape_274.setTransform(1418.4438,195.6515);

	this.shape_275 = new cjs.Shape();
	this.shape_275.graphics.f("#000000").s().p("Ag2C8QgLgEgEgKQgEgJAFgKQACgFADgDQAFgFAHgDQALgEAMgCIAAgCIAehOIAKggIAAgCQAQgxAehMQAJgzAAggIAEBVQgJBBgkA/IgBAFIgTBAQgLAhgJAQQgCAKAFAEQABAHgEAJQgFAKgMAFQgGADgHAAQgFAAgFgCg");
	this.shape_275.setTransform(1405.45,186.35,1,1,0,0,0,0,-1.9);

	this.shape_276 = new cjs.Shape();
	this.shape_276.graphics.f("#000000").s().p("Ag7C4QgKgEgFgKQgDgJAEgLQACgFADgCQAGgFAHgDQAKgFAMgCQAAAAAAAAQABgBAAAAQAAAAAAgBQAAAAAAAAIAghNIALggIABgBQASgxAihKQAJgvABgfIACBRQgMBAgmA9IgCAFIgVBAQgLAggLAPQgCAKAFAEQACAIgEAIQgGAKgMAFQgGAEgHAAQgFAAgFgCg");
	this.shape_276.setTransform(1392.45,177.15,1,1,0,0,0,0,-2.1);

	this.shape_277 = new cjs.Shape();
	this.shape_277.graphics.f("#000000").s().p("Ag/DJQgLgEgFgKQgDgJAEgLIAFgHQAFgFAHgDQAKgFANgCQAAgBABAAQAAAAAAgBQABAAAAAAQAAgBgBAAIAkhLIAMgfIAAgBQAUgxAlhIQAKgpACgcQgBgjgCgLQAGAQgDAeIABBIQgOBAgqA7IgCAFIgXA/QgNAggLAOQgCAKAFAEQACAHgEAIQgFALgMAFQgHADgHAAIgJgBg");
	this.shape_277.setTransform(1379.5,167.75,1,1,0,0,0,0,-0.3);

	this.shape_278 = new cjs.Shape();
	this.shape_278.graphics.f("#000000").s().p("AhFDHQgKgEgFgKQgEgJAFgKQABgFAEgDQAEgFAIgDQAKgFANgCQAAgBAAAAQABAAAAgBQAAAAAAAAQAAgBAAAAQAfg2AIgUIAMgeIABgCQAWgvAohHQAKglADgbQAAgngCgMQAGASgEAhIAABDQgQA/guA7IgCAFIgYA9QgPAggMANQgCAKAGAEQABAHgEAIQgFALgMAFQgHADgHAAIgJgBg");
	this.shape_278.setTransform(1366.6,158.5,1,1,0,0,0,0,-0.2);

	this.shape_279 = new cjs.Shape();
	this.shape_279.graphics.f("#000000").s().p("AhBCzQgLgEgEgKQgDgJAFgLIAGgHQAFgFAHgCQAKgFANgBQABgBAAAAQAAgBAAAAQAAAAAAAAQAAgBAAAAIAnhJIAOgfIAAgBQAUgwAghKQAKgtABgeIACBNQgLBAgoA+IgDAFIgaA+QgOAfgMAOQgCAKAFADQABAIgEAIQgFAKgNAFQgGACgGAAQgGAAgFgCg");
	this.shape_279.setTransform(1355.35,172.85,1,1,0,0,0,0,-2.3);

	this.shape_280 = new cjs.Shape();
	this.shape_280.graphics.f("#000000").s().p("Ag+DKQgKgFgEgKQgDgJAGgKIAGgHQAGgFAHgCQAKgDANgCQAAAAAAAAQABAAAAgBQAAAAAAAAQAAgBAAAAIAnhKQAGgJAIgVIAAgBQATgwAXhOQANhdgMgbQAGgCAGB8QgIBBghBBIgCAFIgbA9QgOAggMAOQgCAKAEAEQABAHgFAIQgGAKgNAEQgFACgGAAQgGAAgGgDg");
	this.shape_280.setTransform(1344.225,187.2557);

	this.shape_281 = new cjs.Shape();
	this.shape_281.graphics.f("#000000").s().p("Ag7DKQgLgFgCgLQgCgJAGgKIAGgHQAGgEAHgCQALgDAMAAQAAAAABgBQAAAAAAAAQAAAAAAgBQAAAAAAAAIAohKIAOgdIABgBQAPgyAPhPQAIhfgLgaQAGgBAKB7QgEBBgaBDIgDAGIgbA9QgOAggMAOQgDAKAEAEQABAIgGAHQgGAJgNAEQgFACgEAAQgHAAgHgEg");
	this.shape_281.setTransform(1333.15,201.5541);

	this.shape_282 = new cjs.Shape();
	this.shape_282.graphics.f("#000000").s().p("Ag3DKQgLgGgCgLQgBgJAGgKIAHgGQAGgEAHgCQALgCAMAAQAAAAAAAAQABgBAAAAQAAAAAAAAQAAgBAAAAIAohJIAPgdIAAgBQAOgxAGhSQADhfgKgZQAGgCAOB6QAABCgTBFIgDAGIgbA9QgQAfgLAPQgDAKADAEQAAAIgGAHQgHAJgNADIgIABQgHAAgHgEg");
	this.shape_282.setTransform(1322.0359,215.7991);

	this.shape_283 = new cjs.Shape();
	this.shape_283.graphics.f("#000000").s().p("Ag0DIQgLgGgBgLQgBgKAHgJIAHgGQAGgDAIgBQALgCALABQABAAAAgBQAAAAAAAAQAAgBAAAAQAAAAAAAAIAphJIAPgdIAAgBQANgygEhRQgDhfgIgaQAGgBASB5QADBCgLBGIgDAHIgcA8QgQAfgLAPQgDAKACAFQAAAHgGAHQgIAJgNABIgGABQgJAAgHgFg");
	this.shape_283.setTransform(1310.9685,229.9838);

	this.shape_284 = new cjs.Shape();
	this.shape_284.graphics.f("#000000").s().p("AgzDGQgJgHgBgLQgBgJAIgJIAHgGQAHgDAHgBQALAAALABIABgCIAphIIAPgdIAAgBQALgxgNhTQgIhegHgaQAGgBAWB4QAIBCgFBGIgCAHIgdA9QgQAfgMAOQgEAKADAFQgBAIgHAGQgIAJgNABIgEAAQgJAAgJgGg");
	this.shape_284.setTransform(1300.0578,244.1373);

	this.shape_285 = new cjs.Shape();
	this.shape_285.graphics.f("#000000").s().p("Ag0DDQgJgIAAgKQAAgLAIgHIAHgGQAHgDAHAAQAMAAAKACQAAAAABAAQAAAAAAgBQAAAAAAAAQAAAAAAgBIAqhIIAPgcIAAgBQAJgygWhRQgOhegFgZQAGgCAaB3QAMBBACBGIgDAIIgdA8QgQAegMAQQgEAKACAFQgCAHgGAGQgJAJgNAAIgCAAQgLAAgJgHg");
	this.shape_285.setTransform(1289.425,258.2539);

	this.shape_286 = new cjs.Shape();
	this.shape_286.graphics.f("#000000").s().p("Ag2DAQgHgIgBgLQABgJAIgIQADgEAFgBQAHgDAIABQAKAAAKADQABgBAAAAQAAAAAAAAQABgBAAAAQAAAAgBAAIArhIIAPgcIAAgBQAHgxgfhQQgThdgDgaQAFgBAeB1QAPBBAKBFIgDAIIgdA8QgRAfgNAPQgDAKAAAFQAAAHgIAGQgJAHgNAAIgCAAQgLAAgJgIg");
	this.shape_286.setTransform(1278.85,272.2793);

	this.shape_287 = new cjs.Shape();
	this.shape_287.graphics.f("#000000").s().p("AgiDFQgMgBgJgIQgIgJAAgLQACgJAJgIIAHgEQAHgDAIACQALAAAJAEIACgCQAhg1AJgTIAQgbIAAgBQAEgxgmhNQgZhdgBgZQAFgCAhB0QATBAARBDIgDAIIgeA8QgRAfgMAPQgEAJAAAGQgCAIgIAFQgIAGgLAAIgDAAg");
	this.shape_287.setTransform(1268.2735,286.3046);

	this.shape_288 = new cjs.Shape();
	this.shape_288.graphics.f("#000000").s().p("AgkDCQgMgBgJgJQgHgJABgLQABgJAKgHIAIgEQAHgCAIABQAKABAJAFIACgCIArhIIAQgbIAAgBQADgvgwhMQgdhagBgbQAGgCAkBzIAuCAIgCAJIgfA7QgRAfgNAPQgEAJgBAGQgCAHgIAFQgHAFgKAAIgFAAg");
	this.shape_288.setTransform(1257.6691,300.2383);

	this.shape_289 = new cjs.Shape();
	this.shape_289.graphics.f("#000000").s().p("AgbDKQgMAAgJgJQgIgIAAgLQABgJAIgIIAIgFQAHgCAIABQALAAAJAEQAAgBAAAAQAAAAABAAQAAgBAAAAQAAAAAAAAIAihNIAMgdIAAgBQACgygghOQgWhdgCgaQAGgBAfB1QAQBAAPBEIgCAHIgXA/QgNAhgLARIgEAPQgDAIgFAFQgJAHgLAAIgDAAg");
	this.shape_289.setTransform(1244.65,315.2799);

	this.shape_290 = new cjs.Shape();
	this.shape_290.graphics.f("#000000").s().p("AgnDIQgJgHAAgLQAAgKAIgIIAHgFQAHgDAIAAQAKAAAIADQABAAAAgBQAAAAAAAAQAAgBAAAAQAAAAAAgBIAZhQIAIgfIAAgBQADg0gQhPIgTh4QAGgCAZB3QAMBCAEBFIgBAHIgPBBQgJAigJASIgEAQQAAAIgHAGQgIAIgNAAIgCABQgLAAgJgIg");
	this.shape_290.setTransform(1231.625,330.1539);

	this.shape_291 = new cjs.Shape();
	this.shape_291.graphics.f("#000000").s().p("AgfDOQgJgHgBgKQgBgLAIgIIAGgGQAHgDAHgBQAMgBAHADQAAgBAAAAQABAAAAgBQAAAAAAAAQgBgBAAAAIAQhSIADghIABgBQACg0AAhRQgHhfgGgZQAGgCAUB5QAFBCgGBFIAAAGIgHBCQgEAjgHAUIgDAQQAAAIgGAGQgIAJgMABIgFAAQgJAAgJgFg");
	this.shape_291.setTransform(1218.73,344.7881);

	this.shape_292 = new cjs.Shape();
	this.shape_292.graphics.f("#000000").s().p("AgbDRQgKgGgCgKQgCgLAHgJIAGgGQAGgEAIgBQALgCAHACIABgCIAEhUQABgMgBgWIAAgBQACg0AQhQQAChfgIgaQAGgBANB6QAABCgQBDIAAAFIACBDQAAAigEAVIgCARQAAAIgFAHQgIAKgLABIgIABQgIAAgHgEg");
	this.shape_292.setTransform(1206.3618,359.2491);

	this.shape_293 = new cjs.Shape();
	this.shape_293.graphics.f("#000000").s().p("AgYDSQgLgFgDgLQgCgJAGgKIAGgHQAGgEAHgCQALgDAHACIAAgDIgEhTIgFgjIAAgBQACgzAehPQALhegKgbQAGAAAGB6QgGBCgaBAIABAEIALBCQAEAigCAWIAAARQABAIgFAHQgHAKgLADQgFACgFAAQgHAAgGgDg");
	this.shape_293.setTransform(1194.125,373.4841);

	this.shape_294 = new cjs.Shape();
	this.shape_294.graphics.f("#000000").s().p("AgWDCQgLgFgDgKQgDgJAFgLIAFgHQAGgEAHgDQAKgEAIACQAAgBAAAAQAAgBAAAAQAAAAAAAAQAAgBgBAAQgJg9gGgVIgIgiIAAgBQABgxAuhNQAMg7AAghQABAfAAA/QgMBBgiA8IABACIASBAQAIAjABAVIACASQABAHgFAIQgGAKgMAEQgFADgGAAQgFAAgGgCg");
	this.shape_294.setTransform(1181.9,387.55,1,1,0,0,0,0,-1.4);

	this.shape_295 = new cjs.Shape();
	this.shape_295.graphics.f("#000000").s().p("AgTC0QgLgDgFgKQgDgJAEgLIAFgHQAEgFAIgEQAKgEAHABIAAgCQgSg8gIgUIgMghIAAgCQABgvA9hIQAMgrADgdIgDBLQgQA/gtA2QAAAAABAAQAAAAAAAAQABAAAAABQAAAAAAABIAaA9QAMAhAEAVIADASQABAHgDAIQgFALgMAFQgGADgHAAIgJgBg");
	this.shape_295.setTransform(1169.85,401.35,1,1,0,0,0,0.1,-2.4);

	this.shape_296 = new cjs.Shape();
	this.shape_296.graphics.f("#000000").s().p("AgMDEQgLgCgFgKQgFgJAEgLIAEgHQAEgGAHgEQAKgFAHABQAAAAAAgBQAAAAAAAAQAAgBAAAAQAAAAgBAAIgihMIgRggIAAgCQABgrBLhFQAMggAGgYQAEgwgBgLQAGAUgJAnIgGA9QgWA8g2AwQABAAAAAAQABgBAAAAQABAAAAABQAAAAABAAIAhA6QAPAfAHAVIAEASQADAHgEAIQgDAMgMAFQgHAFgIAAIgHgBg");
	this.shape_296.setTransform(1157.15,415,1,1,0,0,0,0,-0.2);

	this.shape_297 = new cjs.Shape();
	this.shape_297.graphics.f("#000000").s().p("AAXDUQgJgFgEgLIgBgJQAAgHADgHQAEgKAIgLQAAgBAAAAQAAgBAAAAQAAAAAAAAQAAgBgBAAIgShSIgIggIAAgBQgQgygThPQgYhcABgaQAFgBAeB0IAkCAIACAFIAUBAQAIAiAAARQAFAJAHgBQAHAEACAJQADALgFAMQgFAMgLAFQgFADgGAAQgFAAgEgCg");
	this.shape_297.setTransform(1163.4043,424.8753);

	this.shape_298 = new cjs.Shape();
	this.shape_298.graphics.f("#000000").s().p("AAjDIQgIgGgBgMIABgJQACgGAFgHQAHgJAIgFQAAAAAAgBQAAAAAAAAQAAgBgBAAQAAAAAAgBIghhNIgPgdIAAgBQgXgvgchNQgghbACgaQAGgCAlByQAXA+AbA8IADAFIAfA7QAPAfAFATQAGAJAEADQAGAGAAAJQAAAMgIAKQgHAKgMADIgGABQgIAAgGgGg");
	this.shape_298.setTransform(1161.7191,432.5562);

	this.shape_299 = new cjs.Shape();
	this.shape_299.graphics.f("#000000").s().p("AAKDMQgKgFgCgLQgCgJAFgKIAFgHQAGgFAHgBQALgDAIACQAAAAAAAAQAAgBAAAAQAAAAAAgBQgBAAAAAAIgRhSIgJggIAAgBQgPgygWhOQgchbgCgZQAGgCAkBzIAnB/IACAFIATBAQAJAiACAWIAAASQABAHgGAIQgGAKgNADQgFACgFAAQgGAAgHgDg");
	this.shape_299.setTransform(1155.8827,441.2075);

	this.shape_300 = new cjs.Shape();
	this.shape_300.graphics.f("#000000").s().p("AgUDOQgKgHgBgLQgBgJAIgJIAHgGQAGgDAIgBQAJgCAIAFQAAgBAAAAQAAAAAAgBQAAAAAAAAQAAAAAAgBIgEhTIgEgiIgBgBQgFg0gGhQQgLhfAAgaQAFAAASB3QAJBCAFBCIABAGIAJBCQADAjgBAWIgDASQAAAHgHAHQgIAJgNABIgFABQgIAAgIgGg");
	this.shape_300.setTransform(1149.5734,431.1561);

	this.shape_301 = new cjs.Shape();
	this.shape_301.graphics.f("#000000").s().p("AgNDSQgMAAgJgJQgJgIABgKQABgLAJgHQADgDAEgBQAHgDAIABQAKAAAGAFIABgCIAIhUIABghIAAgBQADg0ALhRIAIh4QAGgBgBB6QgDBCgJBDIAAAFIgBBDQgCAigFAWIgGARQgBAIgHAFQgJAHgKAAIgDAAg");
	this.shape_301.setTransform(1141.5256,420.6558);

	this.shape_302 = new cjs.Shape();
	this.shape_302.graphics.f("#000000").s().p("AgwDLQgMgCgIgKQgGgJABgLQADgJAJgHIAJgDQAHgBAHABQALADAGAGIABgDIAUhRIAGghIAAgBQAMgzAchNQAXhdADgYQAGAAgTB4QgOBBgYA/IgBAFIgLBCQgIAigHAVIgIAQQgCAHgJAEQgHAEgIAAIgIAAg");
	this.shape_302.setTransform(1135.6065,409.6868);

	this.shape_303 = new cjs.Shape();
	this.shape_303.graphics.f("#000000").s().p("AgdDQQgNgBgIgJQgIgIAAgLQACgJAJgIIAHgEQAHgCAIAAQALABAGAGIABgDIALhTIACghIAAgCQAHgzAZhOQARhfABgZQAGAAgLB6QgKBBgUBBIAAAEIgEBDQgDAjgGAVIgHARQgBAIgHAFQgIAGgLAAIgDAAg");
	this.shape_303.setTransform(1120.7044,428.5813);

	this.shape_304 = new cjs.Shape();
	this.shape_304.graphics.f("#000000").s().p("AghDMQgJgIAAgKQABgLAHgIIAIgFQAGgDAHAAQAMAAAFAEQABAAAAgBQAAAAAAAAQAAgBAAAAQAAAAgBAAIADhUIgCgiIAAgBQADg0AVhQQALheAAgZQAFAGgCBzQgGBBgRBCIAAAEIAEBDQABAjgDAWIgEASQgBAHgHAGQgJAIgMAAIgDAAQgKAAgJgGg");
	this.shape_304.setTransform(1105.9001,447.3868);

	this.shape_305 = new cjs.Shape();
	this.shape_305.graphics.f("#000000").s().p("AgTDQQgJgHgCgKQgCgLAIgIIAGgGQAGgEAIgBQAKgCAHAEQAAAAAAgBQABAAAAgBQAAAAgBAAQAAgBAAAAIgHhTIgGgiIAAgBQgBgzAShSQAEhfgDgZQAGgCAGB7QgCBCgNBCIABAEIAMBCQAEAiAAAWIgDASQAAAJgGAGQgIAJgMACIgGAAQgIAAgIgEg");
	this.shape_305.setTransform(1091.54,466.0338);

	this.shape_306 = new cjs.Shape();
	this.shape_306.graphics.f("#000000").s().p("AgPDRQgLgFgDgKQgCgKAGgKIAGgGQAGgFAHgCQAJgDAIADQAAAAAAAAQAAgBAAAAQAAgBAAAAQAAAAAAAAQgLg+gFgUIgKghIAAgCQgGgyAPhTQgChggFgZQAFgBAOB5QADBCgJBDIAAAEIAUBAQAIAiACAVIAAATQABAHgFAIQgHAKgMADQgFACgEAAQgHAAgGgEg");
	this.shape_306.setTransform(1078.2327,484.5583);

	this.shape_307 = new cjs.Shape();
	this.shape_307.graphics.f("#000000").s().p("AgEDSQgLgEgEgKQgDgJAFgLQABgFAEgCQAEgFAIgDQAJgEAIACIgBgDIgZhPIgNggIgBgBQgKgyALhUQgIhfgIgZQAGgCAXB4QAHBCgGBDIACADIAZA+QAMAgAFAWIACASQACAHgFAIQgFALgMAEQgHADgGAAQgFAAgEgBg");
	this.shape_307.setTransform(1064.1188,502.9333);

	this.shape_308 = new cjs.Shape();
	this.shape_308.graphics.f("#000000").s().p("AAPDQQgLgDgFgJQgEgJADgLIAEgIQAEgFAHgEQAKgFAIABQAAgBAAAAQgBgBAAAAQAAAAAAAAQAAAAAAAAIgjhMIgRgfIAAgBQgPgwAIhWQgOhegLgYQAGgCAfB2QAMBBgDBDIACADIAhA6QAQAfAHAVIAEASQADAHgEAIQgEAMgMAFQgIAFgIAAIgGgBg");
	this.shape_308.setTransform(1049.1893,521.1983);

	this.shape_309 = new cjs.Shape();
	this.shape_309.graphics.f("#000000").s().p("AAaDJQgMgCgHgIQgFgIACgLIADgJQADgGAGgEQAJgHAJAAQAAAAAAgBQAAAAgBAAQAAgBAAAAQAAAAgBgBIguhFIgVgdIAAgBQgOgtAghZQgEgagFgUIAVAsQAKA/gbBGQAAABAAAAQAAAAAAAAQABABAAgBQABAAAAAAIApA0QAVAcAKAUIAHAQQAEAHgDAJQgCAMgKAHQgJAIgLAAIgCAAgAg8jIQAVAQANAwQgbg4gHgIg");
	this.shape_309.setTransform(1033.1731,520.9553);

	this.shape_310 = new cjs.Shape();
	this.shape_310.graphics.f("#000000").s().p("AAxCcQgLAAgIgIQgGgIACgMIACgIQADgHAHgFQAIgGAJgBQAAgBgBAAQAAAAAAgBQAAAAAAAAQgBAAAAAAIgxhEIgVgaIgBgBQgOgSgPgbQAQASAZAUIADADIArAyQAWAbALATIAHARQAEAHgCAIQgCAMgKAIQgIAIgMAAIgBAAgAhMhjIgGgOQALgeAzgHQAmgJANAFQABADgvAFQgmAIgVAcQgCAFAAAGQAPAgAOAaQgdghAAgZg");
	this.shape_310.setTransform(1011.1333,518.6087);

	this.shape_311 = new cjs.Shape();
	this.shape_311.graphics.f("#000000").s().p("AAOC3QgLgDgEgJQgEgJAEgLIAEgIQAFgGAHgDQAKgEAIABQAAAAAAAAQAAgBAAAAQAAAAgBgBQAAAAAAAAQgXg7gJgTIgOgeIgBgBQgKgYgLghQAMAZAXAaIABAFIAfA7QAPAfAGAWIADASQACAHgEAIQgEALgMAGQgHAEgHAAIgJgCgAg3hrQALgnAogUQAfgUALADQACACgmASQgcATgSAnQgEAPACAQIgJghg");
	this.shape_311.setTransform(993.7225,501.6753);

	this.shape_312 = new cjs.Shape();
	this.shape_312.graphics.f("#000000").s().p("AgWDHQgKgFgCgLQgCgKAHgJIAGgGQAGgFAHgBQAKgDAIAEQAAAAAAgBQAAAAAAgBQAAAAAAAAQAAgBgBAAIgLhSIgIgiIAAgBQgKgzgFhRQARhZAtgOQAFADg3BmQgLA/AcBBIABAFIAQBBQAHAiAAAWIgBASQAAAHgFAIQgIAJgMADIgHABQgIAAgHgEg");
	this.shape_312.setTransform(977.0024,483.8);

	this.shape_313 = new cjs.Shape();
	this.shape_313.graphics.f("#000000").s().p("AgmDJQgIgIAAgLQABgJAIgIIAIgFQAHgDAHABQALAAAGAFIAAgCIAIhUIAAghIAAgCQACg0AIhQQAMhfAOgXQAFAAgRB3QgIBCgBBCIAAAFIAABDQgCAjgEAWIgGARQgBAHgHAGQgIAHgNAAQgNAAgJgIg");
	this.shape_313.setTransform(958.7158,465.025);

	this.shape_314 = new cjs.Shape();
	this.shape_314.graphics.f("#000000").s().p("AgXDMQgKgIAAgKQAAgLAJgHQACgFAFgBQAGgDAIAAQAJAAAIAFIAAgDIAChUIgBghIAAgBQgCg0AChRQAEhgALgYQAFAAgGB4QgCBCADBCIAAAGIAEBCQAAAkgDAVIgEASQgBAHgHAGQgJAJgMAAIgCAAQgLAAgIgHg");
	this.shape_314.setTransform(943.8,446.2056);

	this.shape_315 = new cjs.Shape();
	this.shape_315.graphics.f("#000000").s().p("AgVDOQgKgIgBgKQAAgKAHgIIAHgGQAHgDAHgBQALgBAHAEIAAgCIgDhUIgDghIAAgCQgGgzgDhRQgEhgAHgZQAFAAAEB4QAFBDAHBBIAAAGIAIBCQADAjgDAWIgDASQAAAHgHAHQgJAIgMABIgDABQgKAAgIgGg");
	this.shape_315.setTransform(930.0553,427.3131);

	this.shape_316 = new cjs.Shape();
	this.shape_316.graphics.f("#000000").s().p("AgTDOQgJgGgCgLQgCgJAIgJIAHgGQAGgEAHgBQALgCAHAEIAAgDIgIhTIgFghIAAgBQgIg0gLhQQgMhfAFgZQAFgCAPB4IAUCEIABAFIAMBCQAFAigBAWIgCATQgBAHgGAHQgHAJgNACIgGAAQgIAAgIgFg");
	this.shape_316.setTransform(916.3466,408.332);

	this.shape_317 = new cjs.Shape();
	this.shape_317.graphics.f("#000000").s().p("AgFDOQgJgGgDgLQgCgJAHgKIAGgGQAGgEAHgCQAKgCAIADQAAAAAAgBQAAAAAAAAQAAgBAAAAQAAAAAAAAIgMhTIgIggIAAgCQgLgygRhQQgUhdABgaQAGgBAaB2IAeCBIABAFIAPBBQAHAjAAAWIgBASQAAAIgFAHQgHAJgNADIgIABQgIAAgGgEg");
	this.shape_317.setTransform(901.4476,389.2741);

	this.shape_318 = new cjs.Shape();
	this.shape_318.graphics.f("#000000").s().p("AAKDMQgKgFgCgLQgCgJAFgKIAFgHQAGgFAHgBQALgDAIACQAAAAAAAAQAAgBAAAAQAAAAAAgBQgBAAAAAAIgRhSIgJggIAAgBQgPgygWhOQgchbgCgZQAFgDAlB0IAnB/IACAFIATBAQAJAiACAWIAAASQABAHgGAIQgGAKgNADQgFACgFAAQgGAAgHgDg");
	this.shape_318.setTransform(886.3327,370.1554);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_231}]}).to({state:[{t:this.shape_232,p:{x:1572.6827,y:338.0075}}]},1).to({state:[{t:this.shape_233}]},1).to({state:[{t:this.shape_234}]},1).to({state:[{t:this.shape_235,p:{x:1573.7327,y:337.4575}}]},1).to({state:[{t:this.shape_236}]},1).to({state:[{t:this.shape_237}]},1).to({state:[{t:this.shape_238}]},1).to({state:[{t:this.shape_234}]},1).to({state:[{t:this.shape_239,p:{x:1575.4327,y:336.5575}}]},1).to({state:[{t:this.shape_236}]},1).to({state:[{t:this.shape_240}]},1).to({state:[{t:this.shape_241,p:{x:1576.4625,y:336.0575}}]},1).to({state:[{t:this.shape_233}]},1).to({state:[{t:this.shape_233}]},1).to({state:[{t:this.shape_242,p:{x:1577.4827,y:335.5075}}]},1).to({state:[{t:this.shape_240}]},1).to({state:[{t:this.shape_243}]},1).to({state:[{t:this.shape_244,p:{x:1578.4827,y:334.9575}}]},1).to({state:[{t:this.shape_234}]},1).to({state:[{t:this.shape_245}]},1).to({state:[{t:this.shape_235,p:{x:1579.5327,y:334.4075}}]},1).to({state:[{t:this.shape_236}]},1).to({state:[{t:this.shape_246}]},1).to({state:[{t:this.shape_234}]},1).to({state:[{t:this.shape_233}]},1).to({state:[{t:this.shape_247,p:{x:1581.2327,y:333.5575}}]},1).to({state:[{t:this.shape_240}]},1).to({state:[{t:this.shape_240}]},1).to({state:[{t:this.shape_241,p:{x:1582.2625,y:333.0075}}]},1).to({state:[{t:this.shape_233}]},1).to({state:[{t:this.shape_234}]},1).to({state:[{t:this.shape_248,p:{x:1583.2827,y:332.4575}}]},1).to({state:[{t:this.shape_249}]},1).to({state:[{t:this.shape_250}]},1).to({state:[{t:this.shape_244,p:{x:1584.2827,y:331.9075}}]},1).to({state:[{t:this.shape_234}]},1).to({state:[{t:this.shape_233}]},1).to({state:[{t:this.shape_251,p:{x:1585.3327,y:331.4075}}]},1).to({state:[{t:this.shape_240}]},1).to({state:[{t:this.shape_252}]},1).to({state:[{t:this.shape_234}]},1).to({state:[{t:this.shape_233}]},1).to({state:[{t:this.shape_247,p:{x:1587.0327,y:330.5075}}]},1).to({state:[{t:this.shape_240}]},1).to({state:[{t:this.shape_236}]},1).to({state:[{t:this.shape_253,p:{x:1588.0625,y:329.9575}}]},1).to({state:[{t:this.shape_233}]},1).to({state:[{t:this.shape_234}]},1).to({state:[{t:this.shape_248,p:{x:1589.0827,y:329.4075}}]},1).to({state:[{t:this.shape_236}]},1).to({state:[{t:this.shape_254}]},1).to({state:[{t:this.shape_232,p:{x:1590.0827,y:328.9075}}]},1).to({state:[{t:this.shape_233}]},1).to({state:[{t:this.shape_233}]},1).to({state:[{t:this.shape_251,p:{x:1591.1327,y:328.3575}}]},1).to({state:[{t:this.shape_240}]},1).to({state:[{t:this.shape_255}]},1).to({state:[{t:this.shape_233}]},1).to({state:[{t:this.shape_256}]},1).to({state:[{t:this.shape_247,p:{x:1592.8327,y:327.4575}}]},1).to({state:[{t:this.shape_240}]},1).to({state:[{t:this.shape_236}]},1).to({state:[{t:this.shape_253,p:{x:1593.8625,y:326.9075}}]},1).to({state:[{t:this.shape_257}]},1).to({state:[{t:this.shape_233}]},1).to({state:[{t:this.shape_248,p:{x:1594.8827,y:326.3575}}]},1).to({state:[{t:this.shape_236}]},1).to({state:[{t:this.shape_258}]},1).to({state:[{t:this.shape_232,p:{x:1595.8827,y:325.8575}}]},1).to({state:[{t:this.shape_233}]},1).to({state:[{t:this.shape_234}]},1).to({state:[{t:this.shape_235,p:{x:1596.9327,y:325.3075}}]},1).to({state:[{t:this.shape_240}]},1).to({state:[{t:this.shape_259}]},1).to({state:[{t:this.shape_233}]},1).to({state:[{t:this.shape_234}]},1).to({state:[{t:this.shape_239,p:{x:1598.6327,y:324.4075}}]},1).to({state:[{t:this.shape_236}]},1).to({state:[{t:this.shape_240}]},1).to({state:[{t:this.shape_253,p:{x:1599.6625,y:323.8575}}]},1).to({state:[{t:this.shape_234}]},1).to({state:[{t:this.shape_233}]},1).to({state:[{t:this.shape_242,p:{x:1600.6827,y:323.3575}}]},1).to({state:[{t:this.shape_240}]},1).to({state:[{t:this.shape_260}]},1).to({state:[{t:this.shape_261}]},1).to({state:[{t:this.shape_262}]},1).to({state:[{t:this.shape_263}]},1).to({state:[{t:this.shape_264}]},1).to({state:[{t:this.shape_265}]},1).to({state:[{t:this.shape_266}]},1).to({state:[{t:this.shape_267}]},1).to({state:[{t:this.shape_268}]},1).to({state:[{t:this.shape_269}]},1).to({state:[{t:this.shape_270}]},1).to({state:[{t:this.shape_271}]},1).to({state:[{t:this.shape_272}]},1).to({state:[{t:this.shape_273}]},1).to({state:[{t:this.shape_274}]},1).to({state:[{t:this.shape_275}]},1).to({state:[{t:this.shape_276}]},1).to({state:[{t:this.shape_277}]},1).to({state:[{t:this.shape_278}]},1).to({state:[{t:this.shape_279}]},1).to({state:[{t:this.shape_280}]},1).to({state:[{t:this.shape_281}]},1).to({state:[{t:this.shape_282}]},1).to({state:[{t:this.shape_283}]},1).to({state:[{t:this.shape_284}]},1).to({state:[{t:this.shape_285}]},1).to({state:[{t:this.shape_286}]},1).to({state:[{t:this.shape_287}]},1).to({state:[{t:this.shape_288}]},1).to({state:[{t:this.shape_289}]},1).to({state:[{t:this.shape_290}]},1).to({state:[{t:this.shape_291}]},1).to({state:[{t:this.shape_292}]},1).to({state:[{t:this.shape_293}]},1).to({state:[{t:this.shape_294}]},1).to({state:[{t:this.shape_295}]},1).to({state:[{t:this.shape_296}]},1).to({state:[{t:this.shape_297}]},1).to({state:[{t:this.shape_298}]},1).to({state:[{t:this.shape_299}]},1).to({state:[{t:this.shape_300}]},1).to({state:[{t:this.shape_301}]},1).to({state:[{t:this.shape_302}]},1).to({state:[{t:this.shape_303}]},1).to({state:[{t:this.shape_304}]},1).to({state:[{t:this.shape_305}]},1).to({state:[{t:this.shape_306}]},1).to({state:[{t:this.shape_307}]},1).to({state:[{t:this.shape_308}]},1).to({state:[{t:this.shape_309}]},1).to({state:[{t:this.shape_310}]},1).to({state:[{t:this.shape_311}]},1).to({state:[{t:this.shape_312}]},1).to({state:[{t:this.shape_313}]},1).to({state:[{t:this.shape_314}]},1).to({state:[{t:this.shape_315}]},1).to({state:[{t:this.shape_316}]},1).to({state:[{t:this.shape_317}]},1).to({state:[{t:this.shape_318}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.shape_233).wait(2).to({_off:false},0).to({_off:true},1).wait(10).to({_off:false,x:1576.7827,y:335.8575},0).wait(1).to({x:1577.1327,y:335.6575},0).to({_off:true},1).wait(10).to({_off:false,x:1580.8827,y:333.7075},0).to({_off:true},1).wait(4).to({_off:false,x:1582.5827,y:332.8075},0).to({_off:true},1).wait(6).to({_off:false,x:1584.9827,y:331.5575},0).to({_off:true},1).wait(4).to({_off:false,x:1586.6827,y:330.6575},0).to({_off:true},1).wait(4).to({_off:false,x:1588.3827,y:329.7575},0).to({_off:true},1).wait(5).to({_off:false,x:1590.4327,y:328.7075},0).wait(1).to({x:1590.7827,y:328.5075},0).to({_off:true},1).wait(3).to({_off:false,x:1592.1327,y:327.8075},0).to({_off:true},1).wait(6).to({_off:false,x:1594.5327,y:326.5575},0).to({_off:true},1).wait(4).to({_off:false,x:1596.2327,y:325.6575},0).to({_off:true},1).wait(4).to({_off:false,x:1597.9327,y:324.7575},0).to({_off:true},1).wait(6).to({_off:false,x:1600.3327,y:323.5075},0).to({_off:true},1).wait(61));
	this.timeline.addTween(cjs.Tween.get(this.shape_234).wait(3).to({_off:false},0).to({_off:true},1).wait(4).to({_off:false,x:1575.0827,y:336.7575},0).to({_off:true},1).wait(10).to({_off:false,x:1578.8327,y:334.8075},0).to({_off:true},1).wait(4).to({_off:false,x:1580.5327,y:333.9075},0).to({_off:true},1).wait(6).to({_off:false,x:1582.9327,y:332.6575},0).to({_off:true},1).wait(4).to({_off:false,x:1584.6327,y:331.7575},0).to({_off:true},1).wait(4).to({_off:false,x:1586.3327,y:330.8575},0).to({_off:true},1).wait(6).to({_off:false,x:1588.7327,y:329.6075},0).to({_off:true},1).wait(22).to({_off:false,x:1596.5827,y:325.5075},0).to({_off:true},1).wait(4).to({_off:false,x:1598.2827,y:324.6075},0).to({_off:true},1).wait(4).to({_off:false,x:1599.9827,y:323.7075},0).to({_off:true},1).wait(62));
	this.timeline.addTween(cjs.Tween.get(this.shape_236).wait(5).to({_off:false},0).to({_off:true},1).wait(4).to({_off:false,x:1575.7827,y:336.4075},0).to({_off:true},1).wait(11).to({_off:false,x:1579.8827,y:334.2575},0).to({_off:true},1).wait(22).to({_off:false,x:1587.7327,y:330.1575},0).to({_off:true},1).wait(4).to({_off:false,x:1589.4327,y:329.2575},0).to({_off:true},1).wait(11).to({_off:false,x:1593.5327,y:327.1075},0).to({_off:true},1).wait(4).to({_off:false,x:1595.2327,y:326.2075},0).to({_off:true},1).wait(10).to({_off:false,x:1598.9827,y:324.2575},0).to({_off:true},1).wait(65));
	this.timeline.addTween(cjs.Tween.get(this.shape_240).wait(11).to({_off:false},0).to({_off:true},1).wait(4).to({_off:false,x:1577.8327,y:335.3075},0).to({_off:true},1).wait(10).to({_off:false,x:1581.5827,y:333.3575},0).wait(1).to({x:1581.9327,y:333.1575},0).to({_off:true},1).wait(10).to({_off:false,x:1585.6827,y:331.2075},0).to({_off:true},1).wait(4).to({_off:false,x:1587.3827,y:330.3075},0).to({_off:true},1).wait(11).to({_off:false,x:1591.4827,y:328.1575},0).to({_off:true},1).wait(4).to({_off:false,x:1593.1827,y:327.2575},0).to({_off:true},1).wait(11).to({_off:false,x:1597.2827,y:325.1075},0).to({_off:true},1).wait(5).to({_off:false,x:1599.3327,y:324.0575},0).to({_off:true},1).wait(4).to({_off:false,x:1601.0327,y:323.1575},0).to({_off:true},1).wait(59));

	// Каркас_31
	this.shape_319 = new cjs.Shape();
	this.shape_319.graphics.f("#000000").s().p("AgZDQQgJgCgGgEIgFgFQgIgJABgKQACgKAKgHQAKgGANACQAKABAHAGIAAgDIAQhSIADghIABgFQADguAIhEQALhoAJgeQAGABgMCDIgKByIgBANIgHBCQgGAogIAWIgFALQgDAHgHAFQgIAFgLAAIgEAAg");
	this.shape_319.setTransform(1511.5417,333.5327);

	this.shape_320 = new cjs.Shape();
	this.shape_320.graphics.f("#000000").s().p("AgZDQQgJgCgGgEIgFgFQgIgJABgKQACgKAKgHQAKgGAMACQALABAHAGIAAgDIAPhSIAEghIABgFIALhzQALhmAJgfQAGABgMCDIgKByIgBANIgIBCQgGAogIAVIgFAMQgDAHgGAFQgIAFgLAAIgEAAg");
	this.shape_320.setTransform(1511.7694,333.5327);
	this.shape_320._off = true;

	this.shape_321 = new cjs.Shape();
	this.shape_321.graphics.f("#000000").s().p("AgZDQIgPgHIgFgEQgIgJABgKQACgKAKgHQAKgGAMACQALABAHAGIAAgDIAPhSIAEghIABgFQADguAIhFQAKhnAKgeQAGABgMCDIgKByIgBANIgIBCQgGAogIAVIgFAMQgDAHgGAFQgIAFgLAAIgEAAg");
	this.shape_321.setTransform(1512.0194,333.5327);

	this.shape_322 = new cjs.Shape();
	this.shape_322.graphics.f("#000000").s().p("AgZDQQgJgCgGgFIgFgEQgIgJABgKQACgKAKgHQAKgGAMACQALABAHAGIAAgDIAPhSIAEghIABgFIALhzQAKhnAKgeQAGABgMCDIgKByIgBANIgIBCQgGAogIAVIgFAMQgDAHgGAFQgIAFgLAAIgEAAg");
	this.shape_322.setTransform(1512.4694,333.4827);

	this.shape_323 = new cjs.Shape();
	this.shape_323.graphics.f("#000000").s().p("AgZDQQgJgCgGgEIgFgFQgIgJABgKQACgKAKgHQAKgGAMACQALABAHAGIAAgDIAPhSIAEghIABgFIALhzQALhmAJgfQAGABgMCDIgKByIgBANIgIBCQgGAogHAVIgGAMQgDAHgGAFQgIAFgLAAIgEAAg");
	this.shape_323.setTransform(1512.6694,333.4327);
	this.shape_323._off = true;

	this.shape_324 = new cjs.Shape();
	this.shape_324.graphics.f("#000000").s().p("AgZDQQgJgCgGgFIgFgEQgIgJABgKQACgKAKgHQAKgGAMACQALABAHAGIAAgDIAPhSIAEghIABgFIALhzQALhnAJgeQAGABgMCDIgKByIgBANIgIBCQgGAogIAVIgFAMQgDAHgGAFQgIAFgLAAIgEAAg");
	this.shape_324.setTransform(1513.3694,333.3827);
	this.shape_324._off = true;

	this.shape_325 = new cjs.Shape();
	this.shape_325.graphics.f("#000000").s().p("AgZDQQgJgCgGgEIgFgFQgIgJABgKQACgKAKgHQAKgGAMACQALABAHAGIAAgDIAPhSIAEghIABgFQADguAIhFQAKhmAKgfQAGABgMCDIgKByIgBANIgIBCQgGAogIAVIgFAMQgDAHgGAFQgIAFgLAAIgEAAg");
	this.shape_325.setTransform(1514.5194,333.2327);
	this.shape_325._off = true;

	this.shape_326 = new cjs.Shape();
	this.shape_326.graphics.f("#000000").s().p("AgZDQQgJgCgGgEIgFgFQgIgJABgKQACgKAKgHQAKgGAMACQALABAHAGIAAgDIAPhSIAEghIABgFIALhzQAKhmAKgfQAGABgMCDIgKByIgBANIgIBCQgGAogIAVIgFAMQgDAHgGAFQgIAFgLAAIgEAAg");
	this.shape_326.setTransform(1515.4194,333.1327);
	this.shape_326._off = true;

	this.shape_327 = new cjs.Shape();
	this.shape_327.graphics.f("#000000").s().p("AgZDQQgJgCgGgFIgFgEQgIgJABgKQACgKAKgHQAKgGAMACQALABAHAGIAAgDIAPhSIAEghIABgFIALhzQALhnAJgeQAGABgMCDIgKByIgBANIgIBCQgGAogHAVIgGAMQgDAHgGAFQgIAFgLAAIgEAAg");
	this.shape_327.setTransform(1515.6194,333.1327);
	this.shape_327._off = true;

	this.shape_328 = new cjs.Shape();
	this.shape_328.graphics.f("#000000").s().p("AgZDQQgJgCgGgFIgFgEQgIgJABgKQACgKAKgHQAKgGAMACQALABAHAGIAAgDIAPhSIAEghIABgFQADguAIhFQAKhnAKgeQAGABgMCDIgKByIgBANIgIBCQgGAogIAVIgFAMQgDAHgGAFQgIAFgLAAIgEAAg");
	this.shape_328.setTransform(1517.4694,332.9327);

	this.shape_329 = new cjs.Shape();
	this.shape_329.graphics.f("#000000").s().p("AgZDQQgJgCgGgFIgFgEQgIgJABgKQACgKAKgHQAKgGAMACQALABAHAGIAAgDIAPhSIAEghIABgFIALhzQALhmAJgfQAGABgMCDIgKByIgBANIgIBCQgGAogHAVIgGAMQgDAHgGAFQgIAFgLAAIgEAAg");
	this.shape_329.setTransform(1522.4194,332.3827);

	this.shape_330 = new cjs.Shape();
	this.shape_330.graphics.f("#000000").s().p("AgZDQQgJgCgGgFIgFgEQgIgJABgKQACgKAKgHQAKgGAMACQALABAHAGIAAgDIAPhSIAEghIABgFQADguAIhFQAKhmAKgfQAGABgMCDIgKByIgBANIgIBCQgGAogIAVIgFAMQgDAHgGAFQgIAFgLAAIgEAAg");
	this.shape_330.setTransform(1522.9194,332.3327);

	this.shape_331 = new cjs.Shape();
	this.shape_331.graphics.f("#000000").s().p("AgZDQQgJgCgGgFIgFgEQgIgJABgKQACgKAKgHQAKgGAMACQALABAHAGIAAgDIAPhSIAEghIABgFIALhzQAKhmAKgfQAGABgMCDIgKByIgBANIgIBCQgGAogIAVIgFAMQgDAHgGAFQgIAFgLAAIgEAAg");
	this.shape_331.setTransform(1523.3694,332.2827);

	this.shape_332 = new cjs.Shape();
	this.shape_332.graphics.f("#000000").s().p("AgZDQQgJgCgGgFIgFgEQgIgJABgKQACgKAKgHQAKgGAMACQALABAHAGIAAgDIAPhSIAEghIABgFIALhzQALhmAJgfQAGABgMCDIgKByIgBANIgIBCQgGAogIAVIgFAMQgDAHgGAFQgIAFgLAAIgEAAg");
	this.shape_332.setTransform(1524.2694,332.1827);
	this.shape_332._off = true;

	this.shape_333 = new cjs.Shape();
	this.shape_333.graphics.f("#000000").s().p("AgZDQQgJgCgGgEIgFgFQgIgJABgKQACgKAKgHQAKgGAMACQALABAHAGIAAgDIAPhSIAEghIABgFIALhzQALhmAJgfQAGABgMCDIgKByIgBANIgIBCQgGAogIAWIgFALQgDAHgGAFQgIAFgLAAIgEAAg");
	this.shape_333.setTransform(1527.2194,331.8327);
	this.shape_333._off = true;

	this.shape_334 = new cjs.Shape();
	this.shape_334.graphics.f("#000000").s().p("AgZDQQgJgCgGgEIgFgFQgIgJABgKQACgKAKgHQAKgGAMACQALABAHAGIAAgDIAPhSIAEghIABgFIALhzQALhmAJgfQAGABgMCDIgKByIgBANIgIBCQgGAogHAWIgGALQgDAHgGAFQgIAFgLAAIgEAAg");
	this.shape_334.setTransform(1529.4694,331.5827);

	this.shape_335 = new cjs.Shape();
	this.shape_335.graphics.f("#000000").s().p("AgZDQQgJgCgGgEIgFgFQgIgJABgKQACgKAKgHQAKgGAMACQALABAHAGIAAgDIAPhSIAEghIABgFIALhyQALhoAJgeQAGABgMCDIgKByIgBANIgIBCQgGAogHAWIgGALQgDAHgGAFQgIAFgLAAIgEAAg");
	this.shape_335.setTransform(1529.9194,331.5327);

	this.shape_336 = new cjs.Shape();
	this.shape_336.graphics.f("#000000").s().p("AgZDPQgJgCgGgEIgFgEQgIgJABgKQACgLAKgGQAKgHANACQAKACAHAGIAAgDIAQhSIAEghIAAgFQADguAIhFQALhnAJgeQAGABgMCDIgKByIgBANIgHBCQgGAogIAVIgFALQgDAIgHAFQgJAFgKAAIgEgBg");
	this.shape_336.setTransform(1530.8194,331.4577);

	this.shape_337 = new cjs.Shape();
	this.shape_337.graphics.f("#000000").s().p("AgkDMQgIgDgGgFIgFgEQgHgKACgKQADgKAKgGQALgGANADQAKADAGAHIABgDIAZhQIAIggIABgFQAHgtAFhFQAKhmAKgfQAGABgNCDIgKByIgDAOIgPBAQgLAngKAUIgFALQgEAHgIAEQgHAEgIAAIgIgBg");
	this.shape_337.setTransform(1518.541,321.0558);

	this.shape_338 = new cjs.Shape();
	this.shape_338.graphics.f("#000000").s().p("AguDHQgJgEgFgFIgEgFQgHgLADgJQAEgKALgFQALgEANADQAKAEAGAHIABgCIAihMIALgfIACgEQAJguADhEQAMhnAJgeQAGABgNCDIgLByIgEAOIgXA+QgPAlgMATIgHAKQgFAGgHAEQgGADgGAAQgGAAgFgCg");
	this.shape_338.setTransform(1506.2724,310.6067);

	this.shape_339 = new cjs.Shape();
	this.shape_339.graphics.f("#000000").s().p("Ag5DBQgHgFgGgFIgDgGQgFgKADgKQAFgJALgEQAMgDAOAEQAJAFAEAIIACgDIArhHIAPgdIACgEQAMgtABhEQALhmAJgfQAGABgNCDIgLBzIgGANIgeA7QgTAkgOAQIgJAKQgFAGgIADIgHABQgIAAgIgDg");
	this.shape_339.setTransform(1494.0727,300.0196);

	this.shape_340 = new cjs.Shape();
	this.shape_340.graphics.f("#000000").s().p("AhCC6IgMgLIgDgGQgEgLAEgJQAGgKALgCQAMgCAPAFQAIAGAEAIIABgCIAzhCIATgbIADgCQAOgsgChFQAMhnAJgeQAGABgNCDIgLBzIgIANIglA3QgXAhgQAOIgKAJQgFAFgIACIgFABQgJAAgJgEg");
	this.shape_340.setTransform(1481.9298,289.3673);

	this.shape_341 = new cjs.Shape();
	this.shape_341.graphics.f("#000000").s().p("AhLCxIgLgMIgCgGQgDgMAFgIQAGgIAMgCQAMgCAPAHQAIAHACAJIACgCIA6g7IAWgZIADgCQARgqgEhGQAMhmAKgeQAGABgOCCIgMB0IgJAMIgrAyQgbAegSAMIgKAHQgGAGgIABQgLAAgMgGg");
	this.shape_341.setTransform(1469.8838,278.675);

	this.shape_342 = new cjs.Shape();
	this.shape_342.graphics.f("#000000").s().p("AhTCoQgGgGgDgHIgCgGQgCgMAFgIQAHgIAMgBQAMAAAQAIQAHAIABAJIACgCIBBgzIAZgWQAAgBABAAQAAAAAAAAQABAAAAAAQABAAAAAAQATgogGhHQAMhnAKgeQAGABgPCDIgMBzIgKAMIgxAtQgeAZgUALIgKAGQgHAEgIABQgLAAgLgIg");
	this.shape_342.setTransform(1457.9111,267.875);

	this.shape_343 = new cjs.Shape();
	this.shape_343.graphics.f("#000000").s().p("AhZCeQgGgGgCgIIgCgGQgBgMAHgHQAHgIAMABQANABAPAJQAGAJAAAJIADgCIBGgrIAbgTQABAAAAAAQABgBAAAAQABAAAAABQAAAAABAAQAVglgJhKQANhmAKgeQAGABgPCDIgNBzIgLALIg2AnQghAWgVAHIgLAFQgHAEgIAAQgLgBgKgJg");
	this.shape_343.setTransform(1445.9975,257.025);

	this.shape_344 = new cjs.Shape();
	this.shape_344.graphics.f("#000000").s().p("AhLCfQgLgCgJgJQgFgIgCgHIgBgGQAAgMAIgHQAHgHAMACQANACAPALQAFAKgBAIIADgBIBLgiIAdgQQABAAAAAAQABAAAAAAQAAAAABAAQAAABAAAAQAXgjgKhLQANhnAKgeQAGABgPCDIgOB0QgDAFgJAEIg7AgQgjASgVAFIgMAEQgGADgGAAIgDgBg");
	this.shape_344.setTransform(1434.2107,246.1036);

	this.shape_345 = new cjs.Shape();
	this.shape_345.graphics.f("#000000").s().p("AhQCXQgLgDgIgKQgFgIgBgIIAAgGQABgMAIgGQAJgGALACQAMADAPANQAEAKgCAJIADgBIBPgZIAfgMQAAgBABAAQAAAAABABQAAAAAAABQABAAAAABQAYghgMhNQAOhnAKgeQAFACgPCCIgOB0QgEAFgKAEIg9AYQglAPgWABIgMADIgLABIgEAAg");
	this.shape_345.setTransform(1422.522,235.1313);

	this.shape_346 = new cjs.Shape();
	this.shape_346.graphics.f("#000000").s().p("AhVCNQgJgEgIgLQgEgJgBgHIABgGQACgMAIgFQAKgFALADQAMAEAOAPQADAKgDAJIADgBIBRgPIAggIQABAAAAAAQAAAAABAAQAAAAAAABQAAABABABQAZgfgMhPQANhnAKgeQAGABgQCDQgGA4gJA8QgDAEgLADIhAASQgmAJgWgBIgMABIgIABIgIgBg");
	this.shape_346.setTransform(1410.9318,224.175);

	this.shape_347 = new cjs.Shape();
	this.shape_347.graphics.f("#000000").s().p("Ag9CEIgMAAQgIAAgHgCQgKgFgGgLQgDgJAAgHIABgHQADgMAJgEQAKgEAKAFQAMAEAOARQABALgEAIIADAAIBSgGIAhgEQABAAAAAAQABAAAAAAQAAABABABQAAAAAAABQAZgbgNhSQAOhnAKgdQAGABgQCCQgHA4gJA9QgDAEgMABIhBAKQgWACgQAAQgNAAgKgBg");
	this.shape_347.setTransform(1399.455,213.2766);

	this.shape_348 = new cjs.Shape();
	this.shape_348.graphics.f("#000000").s().p("Ag/B5IgMgCQgIAAgHgCQgJgGgGgMIgBgQIABgGQAFgMAJgDQAKgEAKAGQAMAGAMATQAAAKgFAIIADAAIBTAEIAhgBQADABgBAFQALgLAEgVIgFAmQgEADgMABIhBABQgpAAgUgGgABSAFQANhmALgdQAGABgRCCIgJBEQACgbgGgpg");
	this.shape_348.setTransform(1388.08,202.6);

	this.shape_349 = new cjs.Shape();
	this.shape_349.graphics.f("#000000").s().p("AA8B+IhBgGQgogFgUgJIgMgDIgOgEQgIgGgFgNQgBgJABgHIACgGQAFgLAKgDQAKgDAKAHQAKAHAMAUQgBALgGAHIADAAIBRAPIAiADQACAAgBAGQAJgIAFgRIgFAfQgDADgKAAIgDAAgABPAGQAPhlAKgeQAGABgRCCIgJBAQACgagHgmg");
	this.shape_349.setTransform(1376.8083,192.3786);

	this.shape_350 = new cjs.Shape();
	this.shape_350.graphics.f("#000000").s().p("AA4B9IhAgOQgngLgSgKIgMgEIgOgFQgHgIgEgMQAAgKACgHIACgGQAGgKAKgCQALgCAJAIQAJAIALAWQgCAKgHAHIADAAIBPAYIAhAIQACAAgCAGQAIgGAEgMIgEAZQgCABgGAAIgIAAgABMAHQAPhmALgdQAGABgSCBIgJA8QABgYgGgjg");
	this.shape_350.setTransform(1365.645,182.2781);

	this.shape_351 = new cjs.Shape();
	this.shape_351.graphics.f("#000000").s().p("AA0B7Ig+gVQgmgPgQgNIgMgFIgNgGQgIgIgCgNQABgKACgGIAEgGQAHgKAKgBQALgBAIAJQAJAIAJAYQgDAKgJAGIADABIBMAhIAgALQABABgBAGQAGgEAEgKIgDAVQgCABgEAAIgKgCgABIAHQAQhlAKgeQAGABgSCBIgJA9QABgYgGgkg");
	this.shape_351.setTransform(1354.55,172.1568);

	this.shape_352 = new cjs.Shape();
	this.shape_352.graphics.f("#000000").s().p("AAuB6Ig7gdQgkgTgOgPIgLgGQgHgEgFgEQgHgJgBgMQACgJADgHIADgFQAIgJAKAAQALAAAHAJQAJAJAHAaQgFAJgIAFIADABIBHAqIAdAPQACABgCAGQAFgDAEgHIgDARIgDABQgEAAgJgDgABIBDQAAgZgFgjQAQhlAKgeQAGABgSCCIgJA8QAAAbgHANIAHgog");
	this.shape_352.setTransform(1343.5735,162.0705);

	this.shape_353 = new cjs.Shape();
	this.shape_353.graphics.f("#000000").s().p("AAoB4Ig3gjQghgXgNgRIgKgIIgMgIQgFgJAAgNQACgIAEgGIAEgFQAJgJAKABQAKABAHAKQAHAJAFAbQgGAJgIAEIACABIBCAzIAcASQABABgDAHQAFgCADgGIgDAOIgCABQgEAAgJgFgABCBDQAAgYgEgkQAPhlALgeQAGACgTCBIgJA8QgBAfgHAMIAIgrg");
	this.shape_353.setTransform(1332.6985,151.9661);

	this.shape_354 = new cjs.Shape();
	this.shape_354.graphics.f("#000000").s().p("AAhB3IgygqQgegbgLgSIgJgJIgLgJQgFgJACgMQADgJAEgGIAEgFQAKgHAKABQAKADAGAKQAGALADAbQgHAIgJADIACACIA7A6IAaAVQABABgEAHQAEgBADgFIAIgpQABgZgEgmQAQhmALgdQAFABgTCBIgKBAQgBAdgHAMIgCAMIgBAAQgEAAgKgFg");
	this.shape_354.setTransform(1321.893,141.8821);

	this.shape_355 = new cjs.Shape();
	this.shape_355.graphics.f("#000000").s().p("AAYB1IguguQgcgdgJgUIgIgJIgKgKQgDgKACgMQAEgJAFgFIAFgEQAKgGAKACQAKAEAFALQAEALAAAbQgHAHgKACIADACIA1A/IAYAYQABABgEAGQAEgBAEgGIgEAOIgBAAQgEAAgKgHgAA0AIQAThlAIgeQAGABgTCCQgGAjgJAkQADgagCgtg");
	this.shape_355.setTransform(1309.6917,155.9809);

	this.shape_356 = new cjs.Shape();
	this.shape_356.graphics.f("#000000").s().p("AAQB0IgrgzQgYgfgIgUIgHgKIgJgKQgCgLAEgMQAEgIAGgFIAFgEQAMgFAJAEQAKAFADALQAEAMgEAZQgIAHgKABIACACIAxBEIAVAZQABABgFAHQAFgCAEgGIgFAOIgBAAQgEAAgJgHgAAyAIQAVhjAFgfQAGABgSCCQgIAmgNAmQAGgbABgyg");
	this.shape_356.setTransform(1297.4917,170.0303);

	this.shape_357 = new cjs.Shape();
	this.shape_357.graphics.f("#000000").s().p("AAHByIgmg2QgWgigGgUIgGgKIgIgMQgBgLAGgMQAFgHAGgEIAGgDQAMgEAIAFQAJAGADALQACAMgGAYQgJAGgJAAIABADIAqBHIAUAbQABACgGAGQAGgBAEgGIgHANQgDAAgKgIgAAvAJQAYhjABgfQAGABgRCCQgJAogRApQAIgbAEg3g");
	this.shape_357.setTransform(1285.3116,184.075);

	this.shape_358 = new cjs.Shape();
	this.shape_358.graphics.f("#000000").s().p("AgBBvIgig5QgTgigFgUIgFgMIgGgNQABgLAHgLQAGgGAGgEIAGgCQAMgDAIAGQAJAHABAMQABAMgJAXQgJAEgKgBIACADIAlBLIAPAcQACACgGAGQAFgBAFgHIgIAOQgDAAgJgKgAAtAKQAahigCggQAGABgRCCQgLAsgXArQAMgaAJg+g");
	this.shape_358.setTransform(1273.155,198.1);

	this.shape_359 = new cjs.Shape();
	this.shape_359.graphics.f("#000000").s().p("AgKBuIgdg9QgPgkgEgUIgEgMQgDgIgBgGQACgLAIgKQAHgGAGgCIAHgCQAMgCAHAHQAIAIgBAMQAAAMgLAVQgKAFgJgCIABADIAfBMIANAeQABADgGAEQAUAAAWhlQAchigFghQAGACgQCCQgQA2gmA1QgCAAgJgKg");
	this.shape_359.setTransform(1261.0568,212.1);

	this.shape_360 = new cjs.Shape();
	this.shape_360.graphics.f("#000000").s().p("AgRBWIgYg+QgNglgBgVIgDgMIgDgPQADgLAJgIQAIgFAHgCIAGgBQAMAAAHAIQAHAIgCAMQgCAMgNASQgKAEgJgCIABADIAYBPIALAfQABACgHAEQAUABAbhjQASg3AFgjIgJBcQgRA0grAzQgCgBgIgLg");
	this.shape_360.setTransform(1248.95,226.05,1,1,0,0,0,0.1,-2.1);

	this.shape_361 = new cjs.Shape();
	this.shape_361.graphics.f("#000000").s().p("AgcBmIgShAQgKgmABgWIgCgMQgBgHAAgIQAEgJAKgJIAQgFIAGAAQAMABAGAJQAFAJgDALQgDAMgOAQQgLADgIgDIAAADIARBQIAJAhQABACgIADQATADAihiQAOgnAGgdQAEgsgBgNQAFAVgIAkIgHBGQgSA1gvAvQgDAAgHgMg");
	this.shape_361.setTransform(1236.95,240.05,1,1,0,0,0,0,-0.3);

	this.shape_362 = new cjs.Shape();
	this.shape_362.graphics.f("#000000").s().p("AglBkIgNhBQgGgmACgWIAAgMQgBgIACgHQAFgKALgHQAIgDAHAAIAHABQAMADADAIQAGAKgFALQgEAMgQANQgKACgJgEIABADIAKBSIAGAhQABACgIADQATADAnhgQAMgeAGgZQAGg6gCgNQAIAZgMAuIgFA6QgUA0gzAsQgCAAgHgNg");
	this.shape_362.setTransform(1224.95,253.95,1,1,0,0,0,0,-0.2);

	this.shape_363 = new cjs.Shape();
	this.shape_363.graphics.f("#000000").s().p("AgsBiIgHhCQgDgoAEgVIAAgMIADgPQAGgJAMgGIAQgBIAGABQALAFADAJQAEAKgGAKQgFAMgQAKQgLABgIgEIAAADIADBSIADAhQABACgIADQASAFAtheQAMgaAGgWQAGhCgCgMQALAbgPAzIgFAzQgUAzg4ApQgDAAgFgNg");
	this.shape_363.setTransform(1212.8,267.9,1,1,0,0,0,0,-0.2);

	this.shape_364 = new cjs.Shape();
	this.shape_364.graphics.f("#000000").s().p("AgyBgIgChDQABgnAFgVIACgNQACgHADgHQAHgIAMgFQAKAAAGABIAFACQAMAGACAJQACALgHAKQgGAJgRAJQgKgBgIgFIAAAEIgFBSIABAhQAAACgIADQARAFA0hbQAKgWAHgUQAGhIgCgNQANAegRA3IgFAuQgWAyg8AlQgCgBgEgMg");
	this.shape_364.setTransform(1200.55,281.9,1,1,0,0,0,0,-0.1);

	this.shape_365 = new cjs.Shape();
	this.shape_365.graphics.f("#000000").s().p("Ag3BcIgChDQAAgnAFgVIACgMQABgIAEgHQAHgIAMgEQAJgBAHACIAGACQALAGACAJQACALgHAJQgHAKgQAHQgKABgIgFIAAADIgEBSIABAhQABACgJACQAUAIA6hUQAJgTAHgPQAHhRgCgNQARAjgWA7IgEAmQgYAvhDAgQgCgCgEgMg");
	this.shape_365.setTransform(1187.6,295.55,1,1,0,0,0,0,-0.1);

	this.shape_366 = new cjs.Shape();
	this.shape_366.graphics.f("#000000").s().p("Ag8BXIgDhDQgBgmAFgWIACgNQACgHAEgHQAHgIAMgEQAJAAAHABIAGADQALAFABAKQADALgHAJQgHAKgQAGQgLAAgHgEIAAADIgDBSIABAhQABACgIACQAVAKBAhNQAJgPAGgMIgEAfQgaAthIAZQgCgBgEgNgAA3hkQAVAngcA9QAKhYgDgMg");
	this.shape_366.setTransform(1174.7553,309.375);

	this.shape_367 = new cjs.Shape();
	this.shape_367.graphics.f("#000000").s().p("AhABSIgEhDQgBgnAFgWIACgMQABgIAFgGQAHgIAMgEQAJAAAIABIAGADQAKAGACAKQACAKgHAJQgIAKgPAGQgLAAgIgFIAAADIgBBTIABAhQABACgIABQAXAMBFhFQAJgNAGgMQALhZgDgMQAXArgfA6IgEAeQgcArhNARQgDgCgDgMg");
	this.shape_367.setTransform(1161.9,322.9,1,1,0,0,0,0,-0.1);

	this.shape_368 = new cjs.Shape();
	this.shape_368.graphics.f("#000000").s().p("AhDBMIgFhCQgBgnAEgWIACgNQABgHAFgHQAIgIAMgDQAJAAAHACIAGACQALAGABAKQADAKgIAKQgIAKgPADQgKABgIgFIAAADIgBBTIACAhQAAACgGACQAXANBKg7IAOgVQAMhdgDgNQAaAwgjA6IgEAZQgeAphQAJQgDgCgDgNg");
	this.shape_368.setTransform(1149.1,336.55,1,1,0,0,0,0,-0.1);

	this.shape_369 = new cjs.Shape();
	this.shape_369.graphics.f("#000000").s().p("AhGBLIgFhCQgCgnAEgWIACgMQABgIAFgHQAIgIAMgCQAKgBAHACIAFADQALAGABAKQACALgIAJQgIAKgOADQgKABgIgFIAAADIAABSIACAhQABACgHABQAaAQBMgyQAZgeAIgcQABgfgLgnQATAigJAkQgCAmgVAZQggAmhTAAQgDgCgDgNg");
	this.shape_369.setTransform(1136.363,349.72);

	this.shape_370 = new cjs.Shape();
	this.shape_370.graphics.f("#000000").s().p("AhABaQgDgDgDgMIgGhCQgCgoADgWIACgMQACgIAFgHQAIgHAMgDQAKAAAHACIAFADQALAHABAJQACALgIAJQgIAKgOACQgLABgIgFIAAADIACBSIADAiQAAABgGABQAaASBOgpQAegegFgxQABgogCgIQAZBbgnAqQgaAcg9AAIgfgBg");
	this.shape_370.setTransform(1123.4576,362.7961);

	this.shape_371 = new cjs.Shape();
	this.shape_371.graphics.f("#000000").s().p("AhBBXQgDgDgDgMIgHhCQgDgnAEgWIACgNQABgHAGgHQAIgIANgCQAJAAAHACIAGADQAKAHABAKQABAKgIAJQgJAJgMACQgLABgIgFIAAADIADBTIADAhQAAACgFAAQAaAVBQgfQAegcgEgyQAAgpgBgJQAYBfgoAnQgVAUgsAAQgYAAgfgGg");
	this.shape_371.setTransform(1110.7558,375.9729);

	this.shape_372 = new cjs.Shape();
	this.shape_372.graphics.f("#000000").s().p("AhBBUQgEgEgCgLIgHhCQgEgoADgWIACgMQACgIAGgHQAIgHANgCQAJAAAHACIAGADQAKAHABAKQABALgJAIQgIAJgMABQgLABgIgFIAAAEIADBSIAEAhQAAABAAAAQgBAAAAABQgBAAgBAAQAAAAgCAAQAbAYBQgWQAfgZgFgzQABgqgBgKQAXBjgpAjQgRAPggAAQgdAAgqgMg");
	this.shape_372.setTransform(1098.1223,389.2702);

	this.shape_373 = new cjs.Shape();
	this.shape_373.graphics.f("#000000").s().p("AhCDFQgIgDgGgFIgEgFQgIgKADgKQADgKALgFQALgFALADQAKADAHAHIAAgDIAbhPIAIggIABgGQAMgsAahBQAkhhAQgbQAGACgsB8QgUA2gRA2IgDANIgPBAQgLAngLATIgGALQgFAHgHAEQgHACgHAAIgJAAg");
	this.shape_373.setTransform(1102.2428,410.5981);

	this.shape_374 = new cjs.Shape();
	this.shape_374.graphics.f("#000000").s().p("AhuCgQgGgHgDgHIgBgGQgBgMAGgHQAIgIAMAAQAMAAALAKQAHAHACAKIACgCIBBg0IAYgWIADgCQAagmAUhBQAkhiAHgdQAGABgjCAQgUA1gaA2IgKAKIgwAtQgeAagUAKIgLAHQgGADgJAAQgLgBgKgIg");
	this.shape_374.setTransform(1097.7793,419.9);

	this.shape_375 = new cjs.Shape();
	this.shape_375.graphics.f("#000000").s().p("AgYDPQgKgCgGgEIgEgEQgIgJABgKQABgLAKgGQALgHAMADQAKABAHAGIAAgDIAQhSIAEghIAAgFQADguAIhFQALhnAJgeQAGABgMCDIgKByIgBANIgHBCQgGAogIAVIgFAMQgDAHgHAFQgIAFgJAAIgFgBg");
	this.shape_375.setTransform(1103.0944,435.7661);

	this.shape_376 = new cjs.Shape();
	this.shape_376.graphics.f("#000000").s().p("AgrDMIgPgIIgEgFQgIgJACgKQADgLAKgFQALgGAMADQAKADAHAGIAAgDIAXhQIAGggIABgGQAJgtAQhDQAVhmAHgeQAGACgUCCIgXBwIgDANIgNBBQgJAngJAVIgGAKQgEAIgIAEQgHADgJAAIgGAAg");
	this.shape_376.setTransform(1094.6982,424.4455);

	this.shape_377 = new cjs.Shape();
	this.shape_377.graphics.f("#000000").s().p("Ag+DFQgIgEgGgFIgEgFQgGgKACgKQAEgKALgFQALgEAMAEQAKAEAGAGIABgDIAdhOIAJgfIACgGQANgsAZhBQAdhjAHgeQAGACgcCBQgQA3gVA1IgEANIgSBAQgMAmgMATIgHALQgDAHgJADQgGADgGAAQgGAAgFgCg");
	this.shape_377.setTransform(1086.3432,413.0067);

	this.shape_378 = new cjs.Shape();
	this.shape_378.graphics.f("#000000").s().p("AhQC9QgIgFgFgFIgEgFQgGgLAEgJQAEgLAMgDQAMgEALAFQAKAFAFAHIABgDIAkhLIAMgeIACgGQARgqAig9QAlhgAGgfQAGACgkB/QgUA2gdAyIgFAMIgXA+QgQAlgNASIgIAKQgFAGgIADIgJACQgHAAgHgDg");
	this.shape_378.setTransform(1078.0629,401.41);

	this.shape_379 = new cjs.Shape();
	this.shape_379.graphics.f("#000000").s().p("AhADFQgIgDgGgFIgFgFQgGgKACgKQADgJALgGQALgFAMAEQAKADAGAHIABgDIAbhPIAIggIABgGQAOgsAfg/QAhhiAHgeQAFACggCAQgRA2gaA0IgDANIgPBAQgLAngMATIgGALQgEAHgIAEQgHACgHAAIgJgBg");
	this.shape_379.setTransform(1063.2301,420.9481);

	this.shape_380 = new cjs.Shape();
	this.shape_380.graphics.f("#000000").s().p("AgvDLQgJgCgGgEIgFgFQgIgJABgKQACgKAKgHQALgGAMACQAKACAHAGIABgDIARhSIAEggIAAgHQAJgsAdhBQAdhkAHgdQAGABgdCBQgPA3gVA1IgBANIgJBCQgFAogJAUIgFAMQgDAHgIAFQgJAEgLAAIgCAAg");
	this.shape_380.setTransform(1048.4455,440.3775);

	this.shape_381 = new cjs.Shape();
	this.shape_381.graphics.f("#000000").s().p("AguDLIgFgEQgJgIAAgKQABgLAIgHQAKgIAMABQALAAAIAGIAAgEIAHhTIABghIgBgGQAFguAZhDQAYhkAJgdQAGABgZCBQgNA4gQA2QgCAHACAGIgBBCQgCAogFAWIgEAMQgBAJgHAEQgJAHgNABQgJgCgHgDg");
	this.shape_381.setTransform(1033.7321,459.7);

	this.shape_382 = new cjs.Shape();
	this.shape_382.graphics.f("#000000").s().p("AgdDPIgGgDQgJgGgCgLQAAgKAIgJQAJgJAMAAQAKgBAHAEIAAgDIgChTIgDghIgBgHQABguAWhEQAThmAKgdQAGABgWCCQgKA5gMA2QgBAHACAFIAIBCQADAogDAXIgCAMQgCAIgGAHQgHAHgNACQgJAAgHgDg");
	this.shape_382.setTransform(1019.039,478.875);

	this.shape_383 = new cjs.Shape();
	this.shape_383.graphics.f("#000000").s().p("AgMDTIgGgDQgLgFgCgKQgCgLAHgJQAHgKAMgCQAKgCAIADIAAgDIgMhSIgHghIgCgHQgEgsAThHQAPhnALgdQAGABgSCCIgQBwQAAAGADAGIAQBAQAHAoAAAXIAAAMQgBAIgFAHQgIAJgMADIgGAAIgJAAg");
	this.shape_383.setTransform(1004.4028,497.895);

	this.shape_384 = new cjs.Shape();
	this.shape_384.graphics.f("#000000").s().p("AgHDTIgGgBQgLgFgEgJQgDgKAFgLQAHgKALgEQAKgDAIACIgBgDIgVhQIgMgfIgCgHQgIgsARhJQAKhnAKgeQAGABgNCDIgIBwQAAAGAEAFIAWA/QANAmACAWIABANQABAIgFAIQgGAJgMAFQgGACgFAAIgEgBg");
	this.shape_384.setTransform(991.0061,516.8143);

	this.shape_385 = new cjs.Shape();
	this.shape_385.graphics.f("#000000").s().p("AAYC6QgIgGgCgMQgBgMAIgKQAGgIAIgEIgCgCIhAg0IgcgTQgDAAgEgHQgLgjAzhMQAZhkgFggQAGABgNCDQgNA4geAwQABAGAIgCIA2AmQAhAXAPARIAIAKQAFAGABAJQAAALgGALIgNALIgGACIgHABQgIAAgFgEg");
	this.shape_385.setTransform(978.0274,515.175);

	this.shape_386 = new cjs.Shape();
	this.shape_386.graphics.f("#000000").s().p("AAOC/QgIgHAAgMQABgNAIgIQAIgIAIgCIgCgDIg5g7IgZgWIgHgIQgKglAvhLQAXhlgCgfQAFABgMCDQgNA4gbAyQACAFAHAAIAxAsQAeAcANASIAGALQAFAHgBAIQAAAMgJAJQgGAGgHADIgHACIgFAAQgIAAgGgFg");
	this.shape_386.setTransform(958.7575,513.3313);

	this.shape_387 = new cjs.Shape();
	this.shape_387.graphics.f("#000000").s().p("AAGDOQgLgBgFgJQgFgJADgMQAEgLAJgGQAKgFAJAAIgCgDIgmhKIgRgcIgFgIQgHgpAlhJQAThlADgfQAFAHgPB9QgJA5gUA0QABAGAGACIAiA5QAVAiAHAWIADAMQADAIgDAIQgFALgKAHQgIAEgIABg");
	this.shape_387.setTransform(940.9936,496.175);

	this.shape_388 = new cjs.Shape();
	this.shape_388.graphics.f("#000000").s().p("AgKDSIgGgCQgLgFgDgKQgDgJAHgLQAHgJAMgDQAKgDAIADIAAgDIgQhSIgIggQgCgCAAgFQgEgtAYhGQAShmAHgeQAGABgRCCQgJA5gLA3QAAAGACAFIASBAQAKAnAAAXIAAAMQAAAJgFAHQgGAIgNAEIgHABIgIgBg");
	this.shape_388.setTransform(922.4316,478.3625);

	this.shape_389 = new cjs.Shape();
	this.shape_389.graphics.f("#000000").s().p("AgjDNIgFgEQgJgIAAgKQABgLAIgIQAKgHAMABQALAAAHAFIAAgCIAHhTIABgiIAAgGQACgtAMhGQANhnAOgcQAGABgUCBQgHA6gFA3IAAANIgBBDQgCAogGAXIgEALQgCAIgHAGQgIAGgNAAQgJgBgGgDg");
	this.shape_389.setTransform(904.0706,460);

	this.shape_390 = new cjs.Shape();
	this.shape_390.graphics.f("#000000").s().p("AgkDMIgFgEQgJgJAAgJQABgLAJgHQAKgIAMABQALABAHAGIAAgDIAJhUIACggIAAgGQABguAMhGQANhmAMgdQAGABgSCCIgLBxIgBANIgCBDQgDAogGAWIgEAMQgCAHgIAGQgIAGgNAAQgJgCgGgDg");
	this.shape_390.setTransform(888.3737,440.9);

	this.shape_391 = new cjs.Shape();
	this.shape_391.graphics.f("#000000").s().p("AglDLIgFgDQgJgJABgKQABgLAJgGQAKgIAMABQALABAHAGIAAgDIALhTIACghIAAgGQADgtAKhGQANhnALgdQAGABgRCCIgLByIAAANIgEBDQgDAngHAWIgFAMQgCAHgHAGQgJAGgMAAQgJgCgHgEg");
	this.shape_391.setTransform(872.6787,421.8);

	this.shape_392 = new cjs.Shape();
	this.shape_392.graphics.f("#000000").s().p("AgmDLIgFgFQgIgHAAgLQABgLAKgHQAKgHAMACQALABAHAGIAAgDIAMhTIADghIAAgFQADguAJhFQAMhnALgeQAGACgPCCIgLByIgBAMIgEBDQgFAogHAVIgFAMQgCAIgHAFQgJAGgNAAg");
	this.shape_392.setTransform(857.0092,402.7);

	this.shape_393 = new cjs.Shape();
	this.shape_393.graphics.f("#000000").s().p("AgYDQQgJgCgGgEIgFgEQgIgJABgKQABgKAKgHQAKgHAMACQALABAHAGIAAgDIAOhSIADghIABgGQADgtAIhGQAMhmAJgeQAGABgNCDIgKBxIgBANIgGBDQgFAogIAVIgFALQgCAIgHAFQgJAFgMAAIgCAAg");
	this.shape_393.setTransform(841.3158,383.5771);

	this.shape_394 = new cjs.Shape();
	this.shape_394.graphics.f("#000000").s().p("AgZDPQgJgCgGgEIgFgEQgIgJABgKQACgLAKgGQAKgHAMADQALABAHAGIAAgDIAPhSIAEghIABgFQADguAIhFQALhnAJgeQAGABgMCDIgKByIgBANIgIBCQgGAogHAVIgGALQgDAIgGAFQgIAFgLAAIgEgBg");
	this.shape_394.setTransform(825.6309,364.4577);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_319}]}).to({state:[{t:this.shape_320}]},1).to({state:[{t:this.shape_321}]},1).to({state:[{t:this.shape_320}]},1).to({state:[{t:this.shape_322,p:{x:1512.4694,y:333.4827}}]},1).to({state:[{t:this.shape_323}]},1).to({state:[{t:this.shape_322,p:{x:1512.9194,y:333.4327}}]},1).to({state:[{t:this.shape_323}]},1).to({state:[{t:this.shape_324}]},1).to({state:[{t:this.shape_323}]},1).to({state:[{t:this.shape_324}]},1).to({state:[{t:this.shape_323}]},1).to({state:[{t:this.shape_324}]},1).to({state:[{t:this.shape_325}]},1).to({state:[{t:this.shape_324}]},1).to({state:[{t:this.shape_325}]},1).to({state:[{t:this.shape_324}]},1).to({state:[{t:this.shape_326}]},1).to({state:[{t:this.shape_327}]},1).to({state:[{t:this.shape_326}]},1).to({state:[{t:this.shape_327}]},1).to({state:[{t:this.shape_320}]},1).to({state:[{t:this.shape_327}]},1).to({state:[{t:this.shape_320}]},1).to({state:[{t:this.shape_327}]},1).to({state:[{t:this.shape_320}]},1).to({state:[{t:this.shape_328}]},1).to({state:[{t:this.shape_320}]},1).to({state:[{t:this.shape_322,p:{x:1517.9194,y:332.8827}}]},1).to({state:[{t:this.shape_323}]},1).to({state:[{t:this.shape_322,p:{x:1518.3694,y:332.8327}}]},1).to({state:[{t:this.shape_323}]},1).to({state:[{t:this.shape_324}]},1).to({state:[{t:this.shape_323}]},1).to({state:[{t:this.shape_324}]},1).to({state:[{t:this.shape_323}]},1).to({state:[{t:this.shape_324}]},1).to({state:[{t:this.shape_325}]},1).to({state:[{t:this.shape_324}]},1).to({state:[{t:this.shape_325}]},1).to({state:[{t:this.shape_324}]},1).to({state:[{t:this.shape_326}]},1).to({state:[{t:this.shape_327}]},1).to({state:[{t:this.shape_326}]},1).to({state:[{t:this.shape_327}]},1).to({state:[{t:this.shape_320}]},1).to({state:[{t:this.shape_327}]},1).to({state:[{t:this.shape_320}]},1).to({state:[{t:this.shape_329,p:{x:1522.4194,y:332.3827}}]},1).to({state:[{t:this.shape_320}]},1).to({state:[{t:this.shape_330}]},1).to({state:[{t:this.shape_320}]},1).to({state:[{t:this.shape_331,p:{x:1523.3694,y:332.2827}}]},1).to({state:[{t:this.shape_323}]},1).to({state:[{t:this.shape_331,p:{x:1523.8194,y:332.2327}}]},1).to({state:[{t:this.shape_323}]},1).to({state:[{t:this.shape_332}]},1).to({state:[{t:this.shape_323}]},1).to({state:[{t:this.shape_332}]},1).to({state:[{t:this.shape_323}]},1).to({state:[{t:this.shape_332}]},1).to({state:[{t:this.shape_325}]},1).to({state:[{t:this.shape_332}]},1).to({state:[{t:this.shape_325}]},1).to({state:[{t:this.shape_332}]},1).to({state:[{t:this.shape_326}]},1).to({state:[{t:this.shape_329,p:{x:1526.5194,y:331.9327}}]},1).to({state:[{t:this.shape_326}]},1).to({state:[{t:this.shape_323}]},1).to({state:[{t:this.shape_333}]},1).to({state:[{t:this.shape_323}]},1).to({state:[{t:this.shape_333}]},1).to({state:[{t:this.shape_323}]},1).to({state:[{t:this.shape_333}]},1).to({state:[{t:this.shape_325}]},1).to({state:[{t:this.shape_333}]},1).to({state:[{t:this.shape_325}]},1).to({state:[{t:this.shape_333}]},1).to({state:[{t:this.shape_326}]},1).to({state:[{t:this.shape_334}]},1).to({state:[{t:this.shape_326}]},1).to({state:[{t:this.shape_335,p:{x:1529.9194,y:331.5327}}]},1).to({state:[{t:this.shape_320}]},1).to({state:[{t:this.shape_335,p:{x:1530.3694,y:331.4827}}]},1).to({state:[{t:this.shape_320}]},1).to({state:[{t:this.shape_336}]},1).to({state:[{t:this.shape_337}]},1).to({state:[{t:this.shape_338}]},1).to({state:[{t:this.shape_339}]},1).to({state:[{t:this.shape_340}]},1).to({state:[{t:this.shape_341}]},1).to({state:[{t:this.shape_342}]},1).to({state:[{t:this.shape_343}]},1).to({state:[{t:this.shape_344}]},1).to({state:[{t:this.shape_345}]},1).to({state:[{t:this.shape_346}]},1).to({state:[{t:this.shape_347}]},1).to({state:[{t:this.shape_348}]},1).to({state:[{t:this.shape_349}]},1).to({state:[{t:this.shape_350}]},1).to({state:[{t:this.shape_351}]},1).to({state:[{t:this.shape_352}]},1).to({state:[{t:this.shape_353}]},1).to({state:[{t:this.shape_354}]},1).to({state:[{t:this.shape_355}]},1).to({state:[{t:this.shape_356}]},1).to({state:[{t:this.shape_357}]},1).to({state:[{t:this.shape_358}]},1).to({state:[{t:this.shape_359}]},1).to({state:[{t:this.shape_360}]},1).to({state:[{t:this.shape_361}]},1).to({state:[{t:this.shape_362}]},1).to({state:[{t:this.shape_363}]},1).to({state:[{t:this.shape_364}]},1).to({state:[{t:this.shape_365}]},1).to({state:[{t:this.shape_366}]},1).to({state:[{t:this.shape_367}]},1).to({state:[{t:this.shape_368}]},1).to({state:[{t:this.shape_369}]},1).to({state:[{t:this.shape_370}]},1).to({state:[{t:this.shape_371}]},1).to({state:[{t:this.shape_372}]},1).to({state:[{t:this.shape_373}]},1).to({state:[{t:this.shape_374}]},1).to({state:[{t:this.shape_375}]},1).to({state:[{t:this.shape_376}]},1).to({state:[{t:this.shape_377}]},1).to({state:[{t:this.shape_378}]},1).to({state:[{t:this.shape_379}]},1).to({state:[{t:this.shape_380}]},1).to({state:[{t:this.shape_381}]},1).to({state:[{t:this.shape_382}]},1).to({state:[{t:this.shape_383}]},1).to({state:[{t:this.shape_384}]},1).to({state:[{t:this.shape_385}]},1).to({state:[{t:this.shape_386}]},1).to({state:[{t:this.shape_387}]},1).to({state:[{t:this.shape_388}]},1).to({state:[{t:this.shape_389}]},1).to({state:[{t:this.shape_390}]},1).to({state:[{t:this.shape_391}]},1).to({state:[{t:this.shape_392}]},1).to({state:[{t:this.shape_393}]},1).to({state:[{t:this.shape_394}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.shape_320).wait(1).to({_off:false},0).to({_off:true},1).wait(1).to({_off:false,x:1512.2194,y:333.4827},0).to({_off:true},1).wait(17).to({_off:false,x:1516.3194,y:333.0327},0).to({_off:true},1).wait(1).to({_off:false,x:1516.7694,y:332.9827},0).to({_off:true},1).wait(1).to({_off:false,x:1517.2194,y:332.9327},0).to({_off:true},1).wait(1).to({_off:false,x:1517.6694,y:332.8827},0).to({_off:true},1).wait(17).to({_off:false,x:1521.7694,y:332.4327},0).to({_off:true},1).wait(1).to({_off:false,x:1522.2194,y:332.3827},0).to({_off:true},1).wait(1).to({_off:false,x:1522.6694,y:332.3327},0).to({_off:true},1).wait(1).to({_off:false,x:1523.1194,y:332.2827},0).to({_off:true},1).wait(30).to({_off:false,x:1530.1694,y:331.5327},0).to({_off:true},1).wait(1).to({_off:false,x:1530.6194,y:331.4827},0).to({_off:true},1).wait(59));
	this.timeline.addTween(cjs.Tween.get(this.shape_323).wait(5).to({_off:false},0).to({_off:true},1).wait(1).to({_off:false,x:1513.1194,y:333.3827},0).to({_off:true},1).wait(1).to({_off:false,x:1513.5694,y:333.3327},0).to({_off:true},1).wait(1).to({_off:false,x:1514.0194,y:333.2827},0).to({_off:true},1).wait(17).to({_off:false,x:1518.1194,y:332.8327},0).to({_off:true},1).wait(1).to({_off:false,x:1518.5694,y:332.7827},0).to({_off:true},1).wait(1).to({_off:false,x:1519.0194,y:332.7327},0).to({_off:true},1).wait(1).to({_off:false,x:1519.4694,y:332.6827},0).to({_off:true},1).wait(17).to({_off:false,x:1523.5694,y:332.2327},0).to({_off:true},1).wait(1).to({_off:false,x:1524.0194,y:332.1827},0).to({_off:true},1).wait(1).to({_off:false,x:1524.4694,y:332.1327},0).to({_off:true},1).wait(1).to({_off:false,x:1524.9194,y:332.0827},0).to({_off:true},1).wait(8).to({_off:false,x:1526.9694,y:331.8827},0).to({_off:true},1).wait(1).to({_off:false,x:1527.4194,y:331.8327},0).to({_off:true},1).wait(1).to({_off:false,x:1527.8694,y:331.7827},0).to({_off:true},1).wait(71));
	this.timeline.addTween(cjs.Tween.get(this.shape_324).wait(8).to({_off:false},0).to({_off:true},1).wait(1).to({_off:false,x:1513.8194,y:333.3327},0).to({_off:true},1).wait(1).to({_off:false,x:1514.2694,y:333.2827},0).to({_off:true},1).wait(1).to({_off:false,x:1514.7194,y:333.2327},0).to({_off:true},1).wait(1).to({_off:false,x:1515.1694,y:333.1827},0).to({_off:true},1).wait(15).to({_off:false,x:1518.8194,y:332.7827},0).to({_off:true},1).wait(1).to({_off:false,x:1519.2694,y:332.7327},0).to({_off:true},1).wait(1).to({_off:false,x:1519.7194,y:332.6827},0).to({_off:true},1).wait(1).to({_off:false,x:1520.1694,y:332.6327},0).to({_off:true},1).wait(1).to({_off:false,x:1520.6194,y:332.5827},0).to({_off:true},1).wait(103));
	this.timeline.addTween(cjs.Tween.get(this.shape_325).wait(13).to({_off:false},0).to({_off:true},1).wait(1).to({_off:false,x:1514.9694,y:333.1827},0).to({_off:true},1).wait(21).to({_off:false,x:1519.9694,y:332.6327},0).to({_off:true},1).wait(1).to({_off:false,x:1520.4194,y:332.5827},0).to({_off:true},1).wait(21).to({_off:false,x:1525.4194,y:332.0327},0).to({_off:true},1).wait(1).to({_off:false,x:1525.8694,y:331.9827},0).to({_off:true},1).wait(10).to({_off:false,x:1528.3694,y:331.7327},0).to({_off:true},1).wait(1).to({_off:false,x:1528.8194,y:331.6827},0).to({_off:true},1).wait(67));
	this.timeline.addTween(cjs.Tween.get(this.shape_326).wait(17).to({_off:false},0).to({_off:true},1).wait(1).to({_off:false,x:1515.8694,y:333.0827},0).to({_off:true},1).wait(21).to({_off:false,x:1520.8694,y:332.5327},0).to({_off:true},1).wait(1).to({_off:false,x:1521.3194,y:332.4827},0).to({_off:true},1).wait(21).to({_off:false,x:1526.3194,y:331.9327},0).to({_off:true},1).wait(1).to({_off:false,x:1526.7694,y:331.8827},0).to({_off:true},1).wait(10).to({_off:false,x:1529.2694,y:331.6327},0).to({_off:true},1).wait(1).to({_off:false,x:1529.7194,y:331.5827},0).to({_off:true},1).wait(63));
	this.timeline.addTween(cjs.Tween.get(this.shape_327).wait(18).to({_off:false},0).to({_off:true},1).wait(1).to({_off:false,x:1516.0694,y:333.0827},0).to({_off:true},1).wait(1).to({_off:false,x:1516.5194,y:333.0327},0).to({_off:true},1).wait(1).to({_off:false,x:1516.9694,y:332.9827},0).to({_off:true},1).wait(17).to({_off:false,x:1521.0694,y:332.5327},0).to({_off:true},1).wait(1).to({_off:false,x:1521.5194,y:332.4827},0).to({_off:true},1).wait(1).to({_off:false,x:1521.9694,y:332.4327},0).to({_off:true},1).wait(97));
	this.timeline.addTween(cjs.Tween.get(this.shape_332).wait(56).to({_off:false},0).to({_off:true},1).wait(1).to({_off:false,x:1524.7194,y:332.1327},0).to({_off:true},1).wait(1).to({_off:false,x:1525.1694,y:332.0827},0).to({_off:true},1).wait(1).to({_off:false,x:1525.6194,y:332.0327},0).to({_off:true},1).wait(1).to({_off:false,x:1526.0694,y:331.9827},0).to({_off:true},1).wait(79));
	this.timeline.addTween(cjs.Tween.get(this.shape_333).wait(69).to({_off:false},0).to({_off:true},1).wait(1).to({_off:false,x:1527.6694,y:331.7827},0).to({_off:true},1).wait(1).to({_off:false,x:1528.1194,y:331.7327},0).to({_off:true},1).wait(1).to({_off:false,x:1528.5694,y:331.6827},0).to({_off:true},1).wait(1).to({_off:false,x:1529.0194,y:331.6327},0).to({_off:true},1).wait(66));

	// Каркас_27
	this.shape_395 = new cjs.Shape();
	this.shape_395.graphics.f("#000000").s().p("AgSCYQgJgCgGgGIAAAAQgFgHAAgHQACgHAHgFQAHgFAJACQAIABAFAEIAAgCIADgSIAIgqIADgdIAJhSQAHhNAHgVQAFAAgJBgIgHBSIgHA8IgDASIgFAXIgGAMQgCAFgEAEQgHADgIAAIgCAAg");
	this.shape_395.setTransform(1523.7727,335.3778);

	this.shape_396 = new cjs.Shape();
	this.shape_396.graphics.f("#000000").s().p("AgSCYQgJgCgGgGIAAAAQgFgHAAgHQACgHAHgFQAHgFAJACQAIABAFAEIAAgCIADgSIAIgqIADgdIAIhSQAIhNAHgWQAEAAgIBhIgIBSIgGA8IgDASIgGAWIgFANQgCAFgEAEQgHAEgIAAIgCgBg");
	this.shape_396.setTransform(1524.0006,335.3028);

	this.shape_397 = new cjs.Shape();
	this.shape_397.graphics.f("#000000").s().p("AgRCYQgKgCgFgGIgBAAQgFgHABgHQABgHAHgFQAIgFAJACQAHABAFAEIAAgCIADgSIAIgqIADgdIAJhSQAHhNAHgWQAFAAgJBhIgHBSIgHA8IgCASIgGAWIgFANQgCAFgFAEQgHAEgHAAIgCgBg");
	this.shape_397.setTransform(1524.2446,335.2528);

	this.shape_398 = new cjs.Shape();
	this.shape_398.graphics.f("#000000").s().p("AgSCYQgJgCgGgGIAAAAQgFgHAAgHQACgHAHgFQAHgFAJACQAIABAFAEIAAgCIADgSIAIgqIADgdIAIhTQAJhMAGgWQAEAAgIBhIgIBSIgGA8IgDASIgGAWIgFANQgCAFgEAEQgHAEgIAAIgCgBg");
	this.shape_398.setTransform(1524.4506,335.2028);

	this.shape_399 = new cjs.Shape();
	this.shape_399.graphics.f("#000000").s().p("AgRCYQgKgCgFgGIgBAAQgFgHABgHQABgHAHgFQAIgFAJACQAHABAFAEIAAgCIADgSIAIgqIADgdIAJhTQAHhMAHgWQAFAAgJBhIgHBSIgHA8IgCASIgGAWIgFANQgCAFgFAEQgHAEgHAAIgCgBg");
	this.shape_399.setTransform(1524.6946,335.1528);
	this.shape_399._off = true;

	this.shape_400 = new cjs.Shape();
	this.shape_400.graphics.f("#000000").s().p("AgSCYQgJgCgGgGIAAgBQgFgGAAgHQACgHAHgFQAHgFAJACQAIABAFAEIAAgCIADgSIAIgqIADgdIAIhTQAJhMAGgWQAEAAgIBhIgIBSIgGA8IgDASIgGAWIgFANQgCAFgEAEQgHAEgIAAIgCgBg");
	this.shape_400.setTransform(1524.9006,335.1028);

	this.shape_401 = new cjs.Shape();
	this.shape_401.graphics.f("#000000").s().p("AgRCYQgKgCgFgGIgBgBQgFgGABgHQABgHAHgFQAIgFAJACQAHABAFAEIAAgCIADgSIAIgqIADgdIAJhTQAHhMAHgWQAFAAgJBhIgHBSIgHA8IgCASIgGAWIgFANQgCAFgFAEQgHAEgHAAIgCgBg");
	this.shape_401.setTransform(1525.1446,335.0528);
	this.shape_401._off = true;

	this.shape_402 = new cjs.Shape();
	this.shape_402.graphics.f("#000000").s().p("AgSCYQgJgCgGgGIAAgBQgFgGAAgHQACgHAHgFQAHgFAJACQAIABAFAEIAAgCIADgSIAIgqIADgdIAIhTQAJhMAGgWQAEAAgIBhIgHBSIgHA8IgDASIgGAWIgFANQgCAFgEAEQgHAEgIAAIgCgBg");
	this.shape_402.setTransform(1525.3506,335.0028);
	this.shape_402._off = true;

	this.shape_403 = new cjs.Shape();
	this.shape_403.graphics.f("#000000").s().p("AgSCYQgJgCgGgGIAAgBQgFgGAAgHQACgHAHgFQAHgFAJACQAIABAFAEIAAgCIADgSIAIgqIADgdIAIhTQAJhNAGgVQAEAAgIBhIgHBSIgHA8IgDASIgGAWIgFANQgCAFgEAEQgHAEgIAAIgCgBg");
	this.shape_403.setTransform(1525.8006,334.9028);
	this.shape_403._off = true;

	this.shape_404 = new cjs.Shape();
	this.shape_404.graphics.f("#000000").s().p("AgSCYQgJgCgGgGIgBgBQgEgGAAgHQACgHAHgFQAIgFAIACQAIABAFAEIAAgCIADgSIAIgqIADgdIAIhTQAIhNAHgVQAEAAgIBhIgIBSIgGA8IgDASIgGAWIgFANQgCAFgEAEQgHAEgIAAIgCgBg");
	this.shape_404.setTransform(1526.0504,334.8528);

	this.shape_405 = new cjs.Shape();
	this.shape_405.graphics.f("#000000").s().p("AgSCYQgJgCgGgGIAAgBQgFgGAAgHQACgHAHgFQAHgFAJACQAIABAFAEIAAgCIADgSIAIgqIADgdIAIhTQAJhNAGgVQAEAAgIBhIgHBSIgHA8IgDASIgFAWIgGANQgCAFgEAEQgHAEgIAAIgCgBg");
	this.shape_405.setTransform(1526.2506,334.8028);

	this.shape_406 = new cjs.Shape();
	this.shape_406.graphics.f("#000000").s().p("AgSCYQgJgCgGgGIAAgBQgFgGAAgHQACgHAHgFQAHgFAJACQAIABAFAEIAAgCIADgSIAIgqIADgdIAIhTQAIhNAHgVQAEAAgIBhIgIBSIgGA8IgDASIgGAWIgFANQgCAFgEAEQgHAEgIAAIgCgBg");
	this.shape_406.setTransform(1526.5006,334.7528);

	this.shape_407 = new cjs.Shape();
	this.shape_407.graphics.f("#000000").s().p("AgRCYQgKgCgFgGIgBgBQgFgGABgHQABgHAHgFQAIgFAJACQAHABAFAEIAAgCIADgSIAIgqIADgdIAJhTQAHhNAHgVQAFAAgJBhIgHBSIgHA8IgCASIgGAWIgFANQgCAFgFAEQgHAEgHAAIgCgBg");
	this.shape_407.setTransform(1526.7446,334.7028);
	this.shape_407._off = true;

	this.shape_408 = new cjs.Shape();
	this.shape_408.graphics.f("#000000").s().p("AgSCYQgJgCgGgGIAAAAQgFgHAAgHQACgHAHgFQAHgFAJACQAIABAFAEIAAgCIADgSIAIgqIADgdIAIhSQAJhNAGgWQAEAAgIBhIgIBSIgGA8IgDASIgGAWIgFANQgCAFgEAEQgHAEgIAAIgCgBg");
	this.shape_408.setTransform(1527.4006,334.5028);

	this.shape_409 = new cjs.Shape();
	this.shape_409.graphics.f("#000000").s().p("AgSCYQgJgCgGgGIAAAAQgFgHAAgHQACgHAHgFQAHgFAJACQAIABAFAEIAAgCIADgSIAIgqIADgdIAIhTQAJhMAGgWQAEAAgIBhIgHBSIgHA8IgDASIgGAWIgFANQgCAFgEAEQgHAEgIAAIgCgBg");
	this.shape_409.setTransform(1527.8506,334.4028);

	this.shape_410 = new cjs.Shape();
	this.shape_410.graphics.f("#000000").s().p("AgSCYQgJgCgGgGIgBgBQgEgGAAgHQACgHAHgFQAHgFAJACQAIABAFAEIAAgCIADgSIAIgqIADgdIAIhTQAIhNAHgVQAFAAgJBhIgIBSIgGA8IgDASIgGAWIgFANQgCAFgEAEQgHAEgIAAIgCgBg");
	this.shape_410.setTransform(1529.0004,334.1528);

	this.shape_411 = new cjs.Shape();
	this.shape_411.graphics.f("#000000").s().p("AgSCYQgJgCgGgGIAAgBQgFgGAAgHQACgHAHgFQAHgFAJACQAIABAFAEIAAgCIADgSIAIgqIADgdIAIhTQAJhNAGgVQAEAAgIBhIgIBSIgGA8IgDASIgGAWIgFANQgCAFgEAEQgHAEgIAAIgCgBg");
	this.shape_411.setTransform(1529.9006,333.9528);
	this.shape_411._off = true;

	this.shape_412 = new cjs.Shape();
	this.shape_412.graphics.f("#000000").s().p("AgSCYQgJgCgGgGIgBgBQgEgGAAgHQACgHAHgFQAHgFAJACQAIABAFAEIAAgCIADgSIAIgqIADgdIAIhTQAIhMAHgWQAEAAgIBhIgIBSIgGA8IgDASIgGAWIgFANQgCAFgEAEQgHAEgIAAIgCgBg");
	this.shape_412.setTransform(1531.5004,333.5528);

	this.shape_413 = new cjs.Shape();
	this.shape_413.graphics.f("#000000").s().p("AgSCYQgJgCgGgGIAAgBQgFgGAAgHQACgHAHgFQAHgFAJACQAIABAFAEIAAgCIADgSIAIgqIADgdIAIhTQAJhMAGgWQAEAAgIBhIgHBSIgHA8IgDASIgFAWIgGANQgCAFgEAEQgHAEgIAAIgCgBg");
	this.shape_413.setTransform(1531.7006,333.5028);

	this.shape_414 = new cjs.Shape();
	this.shape_414.graphics.f("#000000").s().p("AgSCYQgJgCgGgGIAAgBQgFgGAAgHQACgHAHgFQAHgFAJACQAIABAFAEIAAgCIADgSIAIgqIADgdIAIhTQAIhMAHgWQAEAAgIBhIgIBSIgGA8IgDASIgGAWIgFANQgCAFgEAEQgHAEgIAAIgCgBg");
	this.shape_414.setTransform(1531.9506,333.4528);
	this.shape_414._off = true;

	this.shape_415 = new cjs.Shape();
	this.shape_415.graphics.f("#000000").s().p("AgSCYQgJgCgGgGIAAAAQgFgHAAgHQACgHAHgFQAHgFAJACQAIABAFAEIAAgCIADgSIAIgqIADgdIAIhSQAJhNAGgWQAEAAgIBhIgHBSIgHA8IgDASIgGAWIgFANQgCAFgEAEQgHAEgIAAIgCgBg");
	this.shape_415.setTransform(1533.7506,333.0028);

	this.shape_416 = new cjs.Shape();
	this.shape_416.graphics.f("#000000").s().p("AgSCYQgJgCgGgGIgBAAQgEgHAAgHQACgHAHgFQAHgFAJACQAIABAFAEIAAgCIADgSIAIgqIADgdIAIhSQAIhNAHgWQAEAAgIBhIgIBSIgGA8IgDASIgGAWIgFANQgCAFgEAEQgHAEgIAAIgCgBg");
	this.shape_416.setTransform(1536.9504,332.2528);

	this.shape_417 = new cjs.Shape();
	this.shape_417.graphics.f("#000000").s().p("AgSCYQgJgCgGgGIAAAAQgFgHAAgHQACgHAHgFQAHgFAJACQAIABAFAEIAAgCIADgSIAIgqIADgdIAIhSQAJhNAGgWQAEAAgIBhIgHBSIgHA8IgDASIgFAWIgGANQgCAFgEAEQgHAEgIAAIgCgBg");
	this.shape_417.setTransform(1537.1506,332.2028);

	this.shape_418 = new cjs.Shape();
	this.shape_418.graphics.f("#000000").s().p("AgSCYQgJgCgGgGIAAAAQgFgHAAgHQACgHAHgFQAHgFAJACQAIABAFAEIAAgCIADgSIAIgqIADgdIAIhTQAIhMAHgWQAEAAgIBhIgIBSIgGA8IgDASIgGAWIgFANQgCAFgEAEQgHAEgIAAIgCgBg");
	this.shape_418.setTransform(1537.4006,332.1528);

	this.shape_419 = new cjs.Shape();
	this.shape_419.graphics.f("#000000").s().p("AgSCYQgJgCgGgGIgBAAQgEgHAAgHQACgHAHgFQAIgFAIACQAIABAFAEIAAgCIADgSIAIgqIADgdIAIhSQAIhNAHgWQAEAAgIBhIgIBSIgGA8IgDASIgGAWIgFANQgCAFgEAEQgHAEgIAAIgCgBg");
	this.shape_419.setTransform(1539.9004,331.5528);

	this.shape_420 = new cjs.Shape();
	this.shape_420.graphics.f("#000000").s().p("AgSCYQgJgCgGgGIgBgBQgEgGAAgHQACgHAHgFQAHgFAJACQAIABAFAEIAAgCIADgSIAIgqIADgdIAIhTQAIhNAHgVQAEAAgIBhIgIBSIgGA8IgDASIgGAWIgFANQgCAFgEAEQgHAEgIAAIgCgBg");
	this.shape_420.setTransform(1542.4004,331.0028);

	this.shape_421 = new cjs.Shape();
	this.shape_421.graphics.f("#000000").s().p("AgdCUQgJgEgEgHIAAgBQgEgHACgHQADgGAIgEQAJgCAIACQAHADAEAGIAAgCIAFgSIAMgpIAGgcIALhSQAKhNAFgVQAFABgKBfIgJBTIgNA7IgFASIgIAVIgGAMQgDAFgHACIgIABIgJgBg");
	this.shape_421.setTransform(1530.786,320.6125);

	this.shape_422 = new cjs.Shape();
	this.shape_422.graphics.f("#000000").s().p("AgnCOQgIgGgDgHIAAgBQgCgJAEgGQAEgFAIgDQAJAAAIAFQAHAEAAAHIABgCIAHgRIAQgoIAJgcQAIghAFgwQAMhMAFgWQAEABgLBgQgFApgHApQgJAngKATIgGASQgFALgFAKIgIAKQgEAEgIABQgIAAgIgEg");
	this.shape_422.setTransform(1518.5928,310.4);

	this.shape_423 = new cjs.Shape();
	this.shape_423.graphics.f("#000000").s().p("AgiCNQgIgCgHgFQgHgIAAgHIgBgCQAAgHAFgGQAGgFAIAAQAJABAGAHQAFAFAAAGIgBABIABgBIAAgBIAJgQIAUglIAMgaQAKgiAFgwIAShhQAFABgNBgQgGApgIApQgMAlgNATIgIAQIgMAUIgKAJQgDADgEAAIgGgBg");
	this.shape_423.setTransform(1506.4596,300.1583);

	this.shape_424 = new cjs.Shape();
	this.shape_424.graphics.f("#000000").s().p("AgsCIQgIgEgGgHQgEgIABgIIAAgBQABgIAGgEQAHgEAIACQAIADAFAHQAEAGgDAGIgBABIABgBIALgQIAXgjIAPgYQAMggAGgwQAQhMADgVQAFABgOBfIgQBSQgPAlgQAQIgJAQIgPATIgLAGQgDABgDAAQgDAAgFgBg");
	this.shape_424.setTransform(1494.4222,289.8942);

	this.shape_425 = new cjs.Shape();
	this.shape_425.graphics.f("#000000").s().p("Ag1CAQgHgEgEgIQgDgKACgHIABgBQADgIAGgDQAIgCAHAEQAIAEADAJQACAEgCAEIgDADIgBABIAEgEIAKgLIAbghIARgWQAPgfAFgxQAShLADgVQAEABgPBfQgHAogMAqQgQAjgUAOIgLAPIgRARIgMAFIgDABQgEAAgGgFg");
	this.shape_425.setTransform(1482.4201,279.6097);

	this.shape_426 = new cjs.Shape();
	this.shape_426.graphics.f("#000000").s().p("Ag9B5QgGgGgCgJQgBgKAEgHIABgBQAEgGAHgBQAHgBAHAFQAHAGABAJIgBAFIgFAFIgCABQAGgCABgEIAJgIIAegdIAUgUQAQgdAFgyQAVhLACgVQAEAAgQBgQgJAngMArQgUAhgVAMIgNAOIgTAPIgMADIgCAAQgFAAgGgHg");
	this.shape_426.setTransform(1470.4963,269.2863);

	this.shape_427 = new cjs.Shape();
	this.shape_427.graphics.f("#000000").s().p("AhEBxQgEgIgBgJQACgJAFgGIABgBQAGgFAGAAQAIABAGAGQAEAHAAAJIAAABIgKAHIgBACQAKgCABgHIAGgEIAhgZQAIgIAOgKQASgdAGgyQAWhKABgVQAFAAgSBgQgJAngPAqQgVAggYAJIgOAMIgVAOIgNABQgFAAgGgKg");
	this.shape_427.setTransform(1458.596,258.925);

	this.shape_428 = new cjs.Shape();
	this.shape_428.graphics.f("#000000").s().p("AhBB0QgEAAgFgMQgDgIACgJQAEgJAGgFIABgBQAHgEAGACQAHADAEAHQAEAHgCAIIgNAHIgBACQAMAAABgHIABgCIADgDIAkgVIAYgQQAUgaAGgzQAZhJAAgWQAEAAgTBgQgKAngQAqQgXAegaAGIgQALIgWAKg");
	this.shape_428.setTransform(1446.7681,248.55);

	this.shape_429 = new cjs.Shape();
	this.shape_429.graphics.f("#000000").s().p("AhHBtQgFgBgCgNQgBgJADgIQAGgIAHgDIABgBQAHgCAHADQAHADACAJQABAFgCAGIgQAHIgCABQANAEADgGIACgGIABgBIAngRIAYgMQAVgaAHg0QAbhIgBgVQAFAAgUBeQgLAogSApQgYAcgdADIgRAJQgMAFgMAEg");
	this.shape_429.setTransform(1434.9628,238.2);

	this.shape_430 = new cjs.Shape();
	this.shape_430.graphics.f("#000000").s().p("AhNBmQgEgBABgPQABgIAEgIQAIgGAHgDIABAAQAJgBAFAFQAFAFABAIIgBAIIgDAAIgRAGIgCABQAMAHAFgGQADgEACgEIAmgNIAZgJQAXgYAHg1QAdhHgBgWQAEAAgVBfQgMAngTAoQgaAbgegBIgSAHIgZAGg");
	this.shape_430.setTransform(1423.1799,227.8);

	this.shape_431 = new cjs.Shape();
	this.shape_431.graphics.f("#000000").s().p("AhQBfQgFgDAEgOQADgIAGgHQAJgFAHAAIABAAQAJABAEAFQAEAHgBAIIgBADIgFABIgTAEIgCABQAMAKAGgFQAFgEADgHIAlgIIAagGQAXgVAIg2QAfhHgCgWQAFABgXBdQgNAngVAoQgbAYgfgEIgSAFQgNACgNABg");
	this.shape_431.setTransform(1411.3927,217.375);

	this.shape_432 = new cjs.Shape();
	this.shape_432.graphics.f("#000000").s().p("AhLBfIgJgHQgDgDAGgPQAFgHAHgFQAJgDAIABIABABQAIACADAGQADAHgDAHIgIABIgSACIgCABQAKAMAGgDQAJgDADgJIAAgBIAjgDIAagEQAZgTAJg3QAhhGgDgWQAFABgYBdQgOAmgWAoQgdAWgggIIgSADIgRAAIgJAAg");
	this.shape_432.setTransform(1399.6355,206.9333);

	this.shape_433 = new cjs.Shape();
	this.shape_433.graphics.f("#000000").s().p("AghBNIgSABIgEgBIABAAQAJgCAFgHIADgFIgLAAIgTAAIgCABQAGAMAFABIgUgCIgGgIQgDgDAJgOQAGgGAIgDQAKgCAHADIABABQAIAEABAHQABAEgBAFIAfABQAKgCARABQAZgRALg4QAWgtAHgZQgFAXgOAxQgOAmgYAoQgSALgSAAQgMAAgOgEgAg6BNQgFgBgGgMIACgBIATAAIALAAIgDAFQgFAHgJACIgBAAIgBAAIgCAAg");
	this.shape_433.setTransform(1387.85,196.7,1,1,0,0,0,0.1,-1.1);

	this.shape_434 = new cjs.Shape();
	this.shape_434.graphics.f("#000000").s().p("AgiBDIgPgBQAEgCAEgDQADgDACgFIgMgBIgTgDIgCABQACAKADAEIgPgEIgFgJQgCgDAMgNQAHgEAJgCQAKABAGAFIABAAQAGAGAAAHIgBAFIAeAEQAKAAARACQAZgPAMg5QAUglAIgYIgSBAQgPAlgZAnQgPAJgPAAQgQAAgQgIgAhABAIALABIAEABQgEABgEAAIgBAAQgDAAgDgDgAgxBCg");
	this.shape_434.setTransform(1376.25,186.7,1,1,0,0,0,0.3,-1.5);

	this.shape_435 = new cjs.Shape();
	this.shape_435.graphics.f("#000000").s().p("AglA6IgJgBIACgCQAGgEADgGIAbAGIAbAGQAZgNAOg6QATghAIgWIgRA5QgPAmgcAmQgMAGgNAAQgRAAgUgMgAg9A6QgEgBgCgGIAMAEIAJACQgFACgFAAIgFgBgAguA5gAhRAuIgDgJQgBgDAOgLQAIgDAJABQAKACAEAHIABAAQAFAHgBAGIAAACIgOgEIgTgEIgCAAQABAJACAFIgOgFg");
	this.shape_435.setTransform(1364.7,176.65,1,1,0,0,0,0.4,-1.8);

	this.shape_436 = new cjs.Shape();
	this.shape_436.graphics.f("#000000").s().p("AgsBEIgFgCQAFgCADgGIABgDIAaAJQALADAPAGQAZgLAQg8QARgbAJgVQAJgdAAgIQABANgKAYIgQAzQgRAmgdAlQgJAEgJAAQgUAAgXgQgAhGBDQgDgBgBgJIAMAGIANADIgEACIgGABQgFAAgGgCgAhWAzIgCgJQAAgDAQgIQAJgCAIADQAJAEADAHIABABQADAGgBAFIgOgFIgSgGIgCAAIAAANIgMgGg");
	this.shape_436.setTransform(1353.15,166.6,1,1,0,0,0,0,-0.2);

	this.shape_437 = new cjs.Shape();
	this.shape_437.graphics.f("#000000").s().p("AguA/IgDgCIAEgEQADgDAAgEQARAJAJADQAKAEAOAIQAagJARg9QAQgYAJgTIgPAuQgSAmgeAkQgHACgGAAQgXAAgXgUgAhKA8QgEgDABgJIANAIIAPAFQgEADgFABIgCAAQgIAAgGgFgAgxA9gAg3AsIgRgIIgCgBIgDANIgKgHIAAgIQAAgEASgFQAJAAAHAFQAJAGABAIIAAABIABAGIgNgGgABYhSQABAPgNAcQALgjABgIg");
	this.shape_437.setTransform(1341.65,156.6,1,1,0,0,0,0,-0.1);

	this.shape_438 = new cjs.Shape();
	this.shape_438.graphics.f("#000000").s().p("AgxA4IgBAAIABgBQAFgEAAgIIgLgGIgQgKIgCgBIgFALIgIgHIABgHQAAgEATgBQAJABAGAGQAGAJABAHIAAABIAAABIAZAQQAKAEANAKQAagGATg+QAQgWAJgTQAMglABgIQACAQgPAdIgPAsQgSAmghAjIgKABQgXAAgYgagAhAA7QgIAAgGgIQgEgDAEgLIANALIAPAIQgFADgHAAIgCAAgAgyA4g");
	this.shape_438.setTransform(1330.2,146.6,1,1,0,0,0,0,-0.1);

	this.shape_439 = new cjs.Shape();
	this.shape_439.graphics.f("#000000").s().p("AgxA4IgCgCIAEgDQADgDABgEIgMgIIgQgKIgCAAIgEAMIgJgIIAAgIQAAgEATgDQAJABAHAGQAHAHABAHIAAACIAAAGIAYAPQAKAEANAKQAZgGAUg+QAPgUAJgRQANgpABgIQADARgRAgIgOApQgSAlghAjIgJABQgYAAgYgagAhMAyQgEgDADgJIAMAJIAOAHQgEADgGAAQgIgBgHgGg");
	this.shape_439.setTransform(1318.0812,160.7253);

	this.shape_440 = new cjs.Shape();
	this.shape_440.graphics.f("#000000").s().p("AgxA3IgEgCQAFgCAEgFIABgCIgMgIIgQgKIgCgBIgEANIgJgIIAAgJQAAgEASgEQAIAAAIAFQAIAHACAHIAAABQABAGgCAFQAQAKAIAEQAJAFAOAKQAZgGAVg9QAOgTAJgQQANgsAAgIQAFASgSAiIgNAmQgSAlgiAjIgJABQgYAAgYgbgAhKAxQgEgDABgIIAMAIIAMAHIgFABQgJAAgHgFgAg1A1g");
	this.shape_440.setTransform(1305.9,174.6,1,1,0,0,0,0,-0.1);

	this.shape_441 = new cjs.Shape();
	this.shape_441.graphics.f("#000000").s().p("AgxA3IgIgEIACgBQAHgBAFgGIgMgIIgQgKIgCAAQgCAIAAAFIgLgJIgBgJQAAgEARgFQAJAAAIADQAIAGADAHIAAABQADAIgEAGIAAABIAYAPQAKAFANAKQAZgGAVg9QANgRAJgPQAOguAAgIQAGATgUAjIgMAkQgSAlgiAhIgJABQgYAAgYgagAhIAvQgDgCAAgHIAKAIIAIAFIgCAAQgHAAgGgEgAg5Azg");
	this.shape_441.setTransform(1293.7696,188.7245);

	this.shape_442 = new cjs.Shape();
	this.shape_442.graphics.f("#000000").s().p("AgxA2IgMgGQAEAAAEgBQAFgCAEgDIgLgHIgQgKIgCgBQgCAKABAFIgMgKIgBgKQAAgEAQgGQAIgCAJADQAIAGAEAGIAAABQADAIgCAGIgDAFIAZAQQAKAEAMALQAagGAWg9QANgQAIgOIgLAiQgTAlgjAhIgJACQgYAAgXgcgAhGAtQgCgBgCgFIAJAGIAEADQgEgBgFgCgABWhRQAHAUgVAlQAPgxgBgIg");
	this.shape_442.setTransform(1281.6109,202.7113);

	this.shape_443 = new cjs.Shape();
	this.shape_443.graphics.f("#000000").s().p("AgxA2IgQgJIgDgCIgDgCIgPgNIgCgKQAAgEAPgHQAIgCAJACQAJAEAEAGIABABQAEAIgCAGQgCAFgEADIAbARIAWAPQAagGAXg8QAMgOAIgOQAPgzgBgHQAIAUgWAmIgLAhQgSAkgkAhIgIABQgZAAgXgbgAhEArQAJADAIgDIAFgDIgJgGIgQgKIgCgBIAAAIQAAAHACADQgCgDAAgHIAAgIIACABIAQAKIAJAGIgFADQgIADgJgDIAAAAIAAAAg");
	this.shape_443.setTransform(1269.4542,216.7218);

	this.shape_444 = new cjs.Shape();
	this.shape_444.graphics.f("#000000").s().p("AgxA1IgQgJIgVgQIgCgLQgBgEAOgHQAJgEAIABQAKADAEAHIABABQAFAHgCAGQgBAHgHAEIgHgEIgQgLIgCAAQgBAQAIABQAJADAIgEIABgBIAdATQAJAFANAKQAagGAXg7QAMgOAHgMIgJAeQgTAlgkAgIgIABQgYAAgYgcgABWhQQAKAVgZAoQAQg2gBgHg");
	this.shape_444.setTransform(1257.3062,230.7337);

	this.shape_445 = new cjs.Shape();
	this.shape_445.graphics.f("#000000").s().p("AgxA1IgRgJIgUgQIgDgLQAAgFAMgIQAIgEAJAAQAKADAFAFIABABQAFAHgBAGQgBAHgHAGIgDABIgEgDIgQgKIgBgBQAAAPAIABQAHABAGgDIAgAVQAJAEANALQAagGAYg7QALgMAHgMIgJAcQgSAlglAgIgIABQgZAAgXgcgABWhQQALAXgaAoQAQg3gBgIg");
	this.shape_445.setTransform(1245.1501,244.7087);

	this.shape_446 = new cjs.Shape();
	this.shape_446.graphics.f("#000000").s().p("AgxA0IgRgJIgUgQIgDgLQgBgFAMgIQAHgEAJgBQAKACAGAEIAAAAQAGAGAAAHQAAAHgHAGIgGAEIgCgBIgQgLIgCgBQACAOAIAAQAFABAFgCIAhAWQAKAGANAKQAagFAYg8QALgLAHgMIgIAcQgTAkgmAgIgHABQgZAAgXgdgABWhQQAMAXgbApQAQg4gBgIg");
	this.shape_446.setTransform(1233.0218,258.7143);

	this.shape_447 = new cjs.Shape();
	this.shape_447.graphics.f("#000000").s().p("AgyA0IgQgKIgUgPIgDgMQgCgEALgJQAHgEAIgCQAKAAAHAEIAAAAQAHAFAAAHQAAAHgFAHQgFAEgFACIgPgKIgCgBQAEANAHgCIAGAAIABAAIAjAYQAKAFAMALQAbgFAZg7IARgWIgIAaQgSAkgnAgIgHABQgZAAgYgdgABWhQQANAYgcAqQARg6gCgIg");
	this.shape_447.setTransform(1220.8676,272.7138);

	this.shape_448 = new cjs.Shape();
	this.shape_448.graphics.f("#000000").s().p("AgyAzIgQgJIgUgQIgEgLQgBgFAJgJQAGgFAIgDQALAAAGADIABABQAHADABAHQABAIgFAHQgFAFgIACIAEADIAjAYIAWAPQAbgEAZg7QAKgLAHgKQARg7gCgHQAPAYgeAqIgHAaQgTAkgnAeIgHABQgaAAgXgdgAg9AeIACgBIgMgIIgCgBQAFALAHgBg");
	this.shape_448.setTransform(1208.7223,286.7138);

	this.shape_449 = new cjs.Shape();
	this.shape_449.graphics.f("#000000").s().p("AgzAyIgQgKIgUgQIgFgLQgCgFAIgIQAGgHAIgDQAKgCAHADIABABQAHAEACAFQACAIgFAHQgFAHgJACIgBAAIAGAFIAjAYQAKAGAMAKQAbgEAcg5IAQgSIgHAXQgTAkgpAcIgGABQgbAAgWgdgAg/AZIgJgGIgCgBQAFAJAGgCgABXhOQARAaghArQASg+gCgHg");
	this.shape_449.setTransform(1196.4534,300.5895);

	this.shape_450 = new cjs.Shape();
	this.shape_450.graphics.f("#000000").s().p("Ag1AwIgQgKIgTgQIgGgLQgCgGAHgIQAEgGAJgEQAKgDAHACIABABQAHACADAHQACAGgEAIQgEAHgJAEIgEAAIgHgFIgBAAQAEAFAEAAIAJAGIAjAZIAWAQQAbgDAeg2IAQgQIgHAVQgUAigrAbIgFAAQgcAAgWgdgABZhMQATAdgkAqQAShAgBgHg");
	this.shape_450.setTransform(1184.226,314.4502);

	this.shape_451 = new cjs.Shape();
	this.shape_451.graphics.f("#000000").s().p("Ag3AtIgPgKIgTgPIgGgMQgCgFAFgIQAEgHAHgFQAKgDAHABIABAAQAJADACAGQADAHgDAHQgDAIgJAEQgEACgDgBIgEgDIgCgBQADADADABIALAIIAjAZQAJAGAOALQAbgDAgg1IAPgNIgGATQgVAigtAYIgEAAQgdAAgWgegABahKQAVAegnAqQAThCgBgGg");
	this.shape_451.setTransform(1171.9984,328.3214);

	this.shape_452 = new cjs.Shape();
	this.shape_452.graphics.f("#000000").s().p("Ag4ArIgQgKIgSgPIgHgMQgCgFADgHQADgIAIgGQAJgEAHABIABAAQAJABADAGQAEAHgCAIQgDAIgIAEQgFAEgFgCIgBgBIgCgBIADACIAOAKIAiAaIAXAQQAbgCAjgyIAOgMIgGASQgVAhguAWIgDAAQgeAAgWgfgABahJQAZAigrAoQAUhEgCgGg");
	this.shape_452.setTransform(1159.789,342.1534);

	this.shape_453 = new cjs.Shape();
	this.shape_453.graphics.f("#000000").s().p("Ag6ApIgPgKIgSgQIgHgLQgDgEACgIQADgIAHgGQAIgGAIAAIABABQAIABAEAFQAFAGgCAJQgCAHgHAFQgFAFgGgCIAAAAIgCAAIACAAIAPAMIAiAaQAJAFANALQAcgBAlgwIANgLIgFASQgXAggvATIgCAAQggAAgVgfgABchHQAaAkguAmQAVhEgBgGg");
	this.shape_453.setTransform(1147.5404,356.039);

	this.shape_454 = new cjs.Shape();
	this.shape_454.graphics.f("#000000").s().p("Ag7AmIgQgKIgRgQIgIgLQgDgEACgHQABgIAGgHQAIgGAIgBIABAAQAIAAAFAFQAFAGgBAIQgBAJgHAFQgFAGgHgBIACAAIAOAMIAiAaQAJAGAOALQAcAAAnguIAMgJQAWhFgCgGQAcAngwAkIgFAQQgXAggxAQQghAAgVggg");
	this.shape_454.setTransform(1135.319,369.9125);

	this.shape_455 = new cjs.Shape();
	this.shape_455.graphics.f("#000000").s().p("Ag8AkIgPgLIgRgPIgJgKQgDgEAAgHQACgIAFgIQAHgHAIgBIABAAQAIgBAFAEQAGAGAAAIQgBAJgGAHQgFAFgHAAIACABIAPAMIAhAbQAJAFAOALQAcABApgrIAMgIQAWhGgBgHQAeAqgzAjIgFAPQgYAfgyAOQgigCgUgfg");
	this.shape_455.setTransform(1123.088,383.7375);

	this.shape_456 = new cjs.Shape();
	this.shape_456.graphics.f("#000000").s().p("Ag9AiIgPgLIgQgQIgJgJIgFgLQABgJAEgHQAHgIAHgCIABAAQAJgBAFAEQAGAEABAJQAAAJgFAHQgEAHgHABIACABIAOAMIAiAaQAJAGANALQAdACAqgpIAMgHQAWhGgBgHQAgAtg1AgIgFAPQgZAegzALQgigCgUgfg");
	this.shape_456.setTransform(1110.8205,397.5875);

	this.shape_457 = new cjs.Shape();
	this.shape_457.graphics.f("#000000").s().p("AghCRIAAgBQgFgGAAgHQACgIAHgFQAHgEAJABQAIACAFAEIAAgCIADgTIAHgqIADgdIAChSQADhNAUgWQAFABgRBgQgFAoADAqIgGA8IgCATIgFAWIgFANQgCAFgFAEQgIADgJAAQgJgCgGgGg");
	this.shape_457.setTransform(1116.2948,415.575);

	this.shape_458 = new cjs.Shape();
	this.shape_458.graphics.f("#000000").s().p("AhEB9QgHgIgBgHIAAgBQAAgIAEgGQAGgEAJAAQAIABAHAFQAFAGABAHIABgCIANgOIAdgeIASgWQAQgeAJgxQAYhKACgUQAFAAgUBfQgLAngOAqQgTAhgSAPIgMANIgRAPIgMAIQgEADgHAAQgIgCgHgFg");
	this.shape_458.setTransform(1112.6388,423.1);

	this.shape_459 = new cjs.Shape();
	this.shape_459.graphics.f("#000000").s().p("AggCVQgJgDgFgGIAAgBQgFgHACgHQACgGAHgFQAJgEAIACQAHACAFAFIABgCIAFgSIALgpIAGgcIARhRIAVhhQAEABgOBfIgQBRIgNA7IgEASIgHAVIgHAMQgCAGgGACQgGACgGAAIgFAAg");
	this.shape_459.setTransform(1109.3345,424.5875);

	this.shape_460 = new cjs.Shape();
	this.shape_460.graphics.f("#000000").s().p("AguCQQgJgFgEgGIAAgBQgEgHACgHQADgHAIgDQAIgDAJADQAHACAEAGIABgCIAHgRIAPgoIAJgcIAZhPQAXhIAEgVQACAIgSBWQgLAogNAnIgTA5IgFASIgKAUIgIALQgDAFgGADIgIAAIgJAAg");
	this.shape_460.setTransform(1102.2368,414.4875);

	this.shape_461 = new cjs.Shape();
	this.shape_461.graphics.f("#000000").s().p("Ag8CKQgIgFgDgHIgBgBQgDgIADgGQAEgHAIgDQAIgBAIADQAHADAEAHIABgCIAJgRIAUgmIAKgaIAhhNQAfhGACgWQAFABgbBdQgOAngSAlIgXA3IgIARIgMATIgJALQgDAEgHACIgFABQgFAAgHgCg");
	this.shape_461.setTransform(1095.2003,404.175);

	this.shape_462 = new cjs.Shape();
	this.shape_462.graphics.f("#000000").s().p("AgwCPQgJgEgEgHIgBgBQgDgHACgHQADgGAHgEQAJgDAIADQAIADAEAFIAAgCIAHgRIARgnIAIgcIAchOQAbhJABgVQAFABgWBeQgLAogRAmIgSA5IgFARIgLAUIgHAMQgDAEgGADIgJABIgIgBg");
	this.shape_462.setTransform(1079.7268,423.1125);

	this.shape_463 = new cjs.Shape();
	this.shape_463.graphics.f("#000000").s().p("AglCUQgJgEgFgGIgBgBQgEgGACgHQACgIAIgEQAHgDAJACQAIABAFAGIAAgCIAFgSIAMgpIAGgdQAJggAPgvQAWhKABgWQAEABgRBfQgJApgNAmIgNA7IgFASIgHAVIgHAMQgDAFgFADQgGACgGAAIgFAAg");
	this.shape_463.setTransform(1064.2663,441.9875);

	this.shape_464 = new cjs.Shape();
	this.shape_464.graphics.f("#000000").s().p("AgZCXQgKgCgFgHIgBAAQgFgHABgHQACgHAHgFQAHgEAJABQAIABAFAFIAAgCIAEgSIAIgqIADgdQAGgiANgvQARhMABgVQAEABgMBfQgGAqgLAnQgHAngBAUIgDASIgGAWIgEANQgCAFgGADQgGAEgIAAIgCAAg");
	this.shape_464.setTransform(1048.8591,460.8028);

	this.shape_465 = new cjs.Shape();
	this.shape_465.graphics.f("#000000").s().p("AgdCSIgBAAQgGgGABgHQABgIAGgFQAIgFAJAAQAHAAAFAFIAAgCIACgTIAFgqIABgeQADghAKgxQANhMAAgVQAEAAgHBgQgEAqgIAnQgEAoACAUIgBATIgEAWIgEANQgCAFgFAEQgHAFgIAAQgKgBgGgGg");
	this.shape_465.setTransform(1033.4861,479.575);

	this.shape_466 = new cjs.Shape();
	this.shape_466.graphics.f("#000000").s().p("AgSCWIgBgBQgGgFgBgHQABgIAGgGQAHgFAIgBQAHAAAGADIAAgCIAAgTIABgqIgCgeQABghAHgxQAIhNAAgWQAEAAgCBhQgBAqgGAoQgBAnAFAUIAAATIgCAWIgDANQAAAGgFAFQgHAEgIACQgKAAgGgFg");
	this.shape_466.setTransform(1018.1808,498.225);

	this.shape_467 = new cjs.Shape();
	this.shape_467.graphics.f("#000000").s().p("AgOCYIgBgBQgGgFgBgGQgBgIAGgHQAGgGAJgBQAGgBAHADIgBgCIgBgTIgEgqIgEgeQgBghAEgyQADhNgBgVQAFgBADBhQAAAqgCAoQABAoAIASIACATIAAAXIgBANQgBAGgEAFQgGAFgJACIgDAAQgHAAgGgDg");
	this.shape_467.setTransform(1003.5229,516.834);

	this.shape_468 = new cjs.Shape();
	this.shape_468.graphics.f("#000000").s().p("AAiCAQgHgDgDgIQgDgIADgIQADgIAFgEIgBAAIgSgIIglgQQAMADAQgFIARAGIAVALIALAHQAEAEADAGQACAIgCAJQgEAJgHADIgBABQgFACgEAAIgFgBgAghA+IAIACIABABIgJgDgAg2A1QgPgWAWg+QAJhMAFgVQAFgBgIBhQgEApgIAmQAGAKAJAFIgVgJg");
	this.shape_468.setTransform(988.0625,518.2649);

	this.shape_469 = new cjs.Shape();
	this.shape_469.graphics.f("#000000").s().p("AAYCJQgFgGgBgIQAAgJAHgHQAEgGAHgCIgBgBIgOgNIgegeIgXgTQgSgbgEg2QgUhLBCgTQAEABgpBYQgDAnAXAnQAVAgAXAFIAOAMIAPARIAIALQADAFAAAGQAAAJgGAHQgHAHgIABIgBAAIgCAAQgHAAgEgDg");
	this.shape_469.setTransform(970.1513,513.5841);

	this.shape_470 = new cjs.Shape();
	this.shape_470.graphics.f("#000000").s().p("AAVCVIgBgBQgIAAgEgGQgEgHACgIQACgJAIgFQAGgEAHAAIgBgCIgKgQIgUglIgSgYQgPgegHgyQgUhLA5gXQAEABggBbQAAAoAWAnQAPAjASANIAKAPIAKAUIAFANQACAGgCAGQgDAIgHAGQgIAEgHAAIgBAAg");
	this.shape_470.setTransform(952.0209,496.7025);

	this.shape_471 = new cjs.Shape();
	this.shape_471.graphics.f("#000000").s().p("AACCYIgBAAQgGgDgCgHQgCgHAEgIQAEgHAIgDQAHgDAHACIgBgCIgFgSIgLgpQgEgKgFgRQgLgggMgwQgUhLAwgaQADABgWBeQABApAVAmQAMAmAJASIAGASIAEAWIABAOQAAAGgCAFQgFAHgJAEIgIABQgFAAgEgCg");
	this.shape_471.setTransform(933.7309,479.4318);

	this.shape_472 = new cjs.Shape();
	this.shape_472.graphics.f("#000000").s().p("AgQCWIgBgBQgGgEgBgIQAAgHAGgHQAHgFAJgBQAGAAAHADIgBgCIAAgTIAAgrIgCgcQgHgigPguQgVhKAmgcQAEABgMBgQAEApATAnQAHAngCAVIACATIgCAWIgCAOQgCAFgEAFQgGAGgJABQgKAAgGgFg");
	this.shape_472.setTransform(915.475,461.775);

	this.shape_473 = new cjs.Shape();
	this.shape_473.graphics.f("#000000").s().p("AgRCVIgBAAQgGgFAAgHQAAgIAGgGQAHgGAJABQAGgBAHAEIgBgCIABgTIABgrIgBgcQgFgigLgvQgPhMAggaQAEABgMBgQACApAQAoQAEAngBAWIAAASIgCAWIgDAOQgCAFgEAFQgHAEgIACQgKgBgGgFg");
	this.shape_473.setTransform(899.675,442.8);

	this.shape_474 = new cjs.Shape();
	this.shape_474.graphics.f("#000000").s().p("AgSCVIgBgBQgGgFAAgIQABgHAGgGQAHgFAJAAQAGAAAHAEIgBgCIACgTIADgqIgBgdQgCgigIgxQgJhMAagYQAEABgLBgQABAoAKAqQADAogCAVIAAASIgEAWIgDAOQgCAFgFAEQgGAFgJABQgJAAgGgGg");
	this.shape_474.setTransform(883.8944,423.8);

	this.shape_475 = new cjs.Shape();
	this.shape_475.graphics.f("#000000").s().p("AgWCUIgBgBQgFgGAAgGQABgJAHgFQAHgFAJABQAGAAAGAEIAAgCIACgSIAFgrIABgdIgFhSQgDhOAUgWQAEABgKBfQgBAqAGApIgCA8IgBATIgEAXIgEAMQgCAFgFAEQgHAFgIABQgKgCgGgFg");
	this.shape_475.setTransform(868.2925,404.75);

	this.shape_476 = new cjs.Shape();
	this.shape_476.graphics.f("#000000").s().p("AgbCSIgBAAQgFgHAAgGQACgIAGgFQAIgFAJABQAHAAAFAFIAAgCIADgTIAGgqIACgdIAChTQADhNANgWQAEABgJBgQgCAqABApIgFA8IgBASIgGAXIgEAMQgCAGgFAEQgHAEgJAAQgJgCgGgGg");
	this.shape_476.setTransform(852.8973,385.675);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_395,p:{x:1523.7727,y:335.3778}}]}).to({state:[{t:this.shape_396,p:{x:1524.0006,y:335.3028}}]},1).to({state:[{t:this.shape_397,p:{x:1524.2446,y:335.2528}}]},1).to({state:[{t:this.shape_398}]},1).to({state:[{t:this.shape_399}]},1).to({state:[{t:this.shape_400,p:{x:1524.9006,y:335.1028}}]},1).to({state:[{t:this.shape_401}]},1).to({state:[{t:this.shape_402}]},1).to({state:[{t:this.shape_401}]},1).to({state:[{t:this.shape_403}]},1).to({state:[{t:this.shape_404}]},1).to({state:[{t:this.shape_405,p:{x:1526.2506,y:334.8028}}]},1).to({state:[{t:this.shape_406,p:{x:1526.5006,y:334.7528}}]},1).to({state:[{t:this.shape_407}]},1).to({state:[{t:this.shape_406,p:{x:1526.9506,y:334.6528}}]},1).to({state:[{t:this.shape_397,p:{x:1527.1946,y:334.5528}}]},1).to({state:[{t:this.shape_408,p:{x:1527.4006,y:334.5028}}]},1).to({state:[{t:this.shape_399}]},1).to({state:[{t:this.shape_409,p:{x:1527.8506,y:334.4028}}]},1).to({state:[{t:this.shape_401}]},1).to({state:[{t:this.shape_402}]},1).to({state:[{t:this.shape_401}]},1).to({state:[{t:this.shape_402}]},1).to({state:[{t:this.shape_410,p:{x:1529.0004,y:334.1528}}]},1).to({state:[{t:this.shape_405,p:{x:1529.2006,y:334.1028}}]},1).to({state:[{t:this.shape_406,p:{x:1529.4506,y:334.0528}}]},1).to({state:[{t:this.shape_407}]},1).to({state:[{t:this.shape_411}]},1).to({state:[{t:this.shape_407}]},1).to({state:[{t:this.shape_408,p:{x:1530.3506,y:333.8028}}]},1).to({state:[{t:this.shape_397,p:{x:1530.5946,y:333.7528}}]},1).to({state:[{t:this.shape_409,p:{x:1530.8006,y:333.7028}}]},1).to({state:[{t:this.shape_399}]},1).to({state:[{t:this.shape_402}]},1).to({state:[{t:this.shape_412,p:{x:1531.5004,y:333.5528}}]},1).to({state:[{t:this.shape_413,p:{x:1531.7006,y:333.5028}}]},1).to({state:[{t:this.shape_414}]},1).to({state:[{t:this.shape_401}]},1).to({state:[{t:this.shape_406,p:{x:1532.4006,y:333.3528}}]},1).to({state:[{t:this.shape_407}]},1).to({state:[{t:this.shape_411}]},1).to({state:[{t:this.shape_407}]},1).to({state:[{t:this.shape_411}]},1).to({state:[{t:this.shape_397,p:{x:1533.5446,y:333.0528}}]},1).to({state:[{t:this.shape_415,p:{x:1533.7506,y:333.0028}}]},1).to({state:[{t:this.shape_399}]},1).to({state:[{t:this.shape_409,p:{x:1534.2006,y:332.9028}}]},1).to({state:[{t:this.shape_412,p:{x:1534.4504,y:332.8528}}]},1).to({state:[{t:this.shape_413,p:{x:1534.6506,y:332.8028}}]},1).to({state:[{t:this.shape_414}]},1).to({state:[{t:this.shape_401}]},1).to({state:[{t:this.shape_414}]},1).to({state:[{t:this.shape_407}]},1).to({state:[{t:this.shape_411}]},1).to({state:[{t:this.shape_407}]},1).to({state:[{t:this.shape_403}]},1).to({state:[{t:this.shape_407}]},1).to({state:[{t:this.shape_415,p:{x:1536.7006,y:332.3028}}]},1).to({state:[{t:this.shape_416}]},1).to({state:[{t:this.shape_417,p:{x:1537.1506,y:332.2028}}]},1).to({state:[{t:this.shape_418}]},1).to({state:[{t:this.shape_401}]},1).to({state:[{t:this.shape_414}]},1).to({state:[{t:this.shape_401}]},1).to({state:[{t:this.shape_400,p:{x:1538.3006,y:331.9528}}]},1).to({state:[{t:this.shape_401}]},1).to({state:[{t:this.shape_411}]},1).to({state:[{t:this.shape_407}]},1).to({state:[{t:this.shape_403}]},1).to({state:[{t:this.shape_407}]},1).to({state:[{t:this.shape_403}]},1).to({state:[{t:this.shape_419}]},1).to({state:[{t:this.shape_417,p:{x:1540.1006,y:331.5028}}]},1).to({state:[{t:this.shape_396,p:{x:1540.3506,y:331.4528}}]},1).to({state:[{t:this.shape_399}]},1).to({state:[{t:this.shape_414}]},1).to({state:[{t:this.shape_401}]},1).to({state:[{t:this.shape_400,p:{x:1541.2506,y:331.2528}}]},1).to({state:[{t:this.shape_401}]},1).to({state:[{t:this.shape_402}]},1).to({state:[{t:this.shape_407}]},1).to({state:[{t:this.shape_403}]},1).to({state:[{t:this.shape_420}]},1).to({state:[{t:this.shape_405,p:{x:1542.6006,y:330.9528}}]},1).to({state:[{t:this.shape_410,p:{x:1542.8504,y:330.9028}}]},1).to({state:[{t:this.shape_395,p:{x:1543.0727,y:330.8278}}]},1).to({state:[{t:this.shape_421}]},1).to({state:[{t:this.shape_422}]},1).to({state:[{t:this.shape_423}]},1).to({state:[{t:this.shape_424}]},1).to({state:[{t:this.shape_425}]},1).to({state:[{t:this.shape_426}]},1).to({state:[{t:this.shape_427}]},1).to({state:[{t:this.shape_428}]},1).to({state:[{t:this.shape_429}]},1).to({state:[{t:this.shape_430}]},1).to({state:[{t:this.shape_431}]},1).to({state:[{t:this.shape_432}]},1).to({state:[{t:this.shape_433}]},1).to({state:[{t:this.shape_434}]},1).to({state:[{t:this.shape_435}]},1).to({state:[{t:this.shape_436}]},1).to({state:[{t:this.shape_437}]},1).to({state:[{t:this.shape_438}]},1).to({state:[{t:this.shape_439}]},1).to({state:[{t:this.shape_440}]},1).to({state:[{t:this.shape_441}]},1).to({state:[{t:this.shape_442}]},1).to({state:[{t:this.shape_443}]},1).to({state:[{t:this.shape_444}]},1).to({state:[{t:this.shape_445}]},1).to({state:[{t:this.shape_446}]},1).to({state:[{t:this.shape_447}]},1).to({state:[{t:this.shape_448}]},1).to({state:[{t:this.shape_449}]},1).to({state:[{t:this.shape_450}]},1).to({state:[{t:this.shape_451}]},1).to({state:[{t:this.shape_452}]},1).to({state:[{t:this.shape_453}]},1).to({state:[{t:this.shape_454}]},1).to({state:[{t:this.shape_455}]},1).to({state:[{t:this.shape_456}]},1).to({state:[{t:this.shape_457}]},1).to({state:[{t:this.shape_458}]},1).to({state:[{t:this.shape_395,p:{x:1116.4727,y:434.6778}}]},1).to({state:[{t:this.shape_459}]},1).to({state:[{t:this.shape_460}]},1).to({state:[{t:this.shape_461}]},1).to({state:[{t:this.shape_462}]},1).to({state:[{t:this.shape_463}]},1).to({state:[{t:this.shape_464}]},1).to({state:[{t:this.shape_465}]},1).to({state:[{t:this.shape_466}]},1).to({state:[{t:this.shape_467}]},1).to({state:[{t:this.shape_468}]},1).to({state:[{t:this.shape_469}]},1).to({state:[{t:this.shape_470}]},1).to({state:[{t:this.shape_471}]},1).to({state:[{t:this.shape_472}]},1).to({state:[{t:this.shape_473}]},1).to({state:[{t:this.shape_474}]},1).to({state:[{t:this.shape_475}]},1).to({state:[{t:this.shape_476}]},1).to({state:[{t:this.shape_395,p:{x:837.5236,y:366.5778}}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.shape_399).wait(4).to({_off:false},0).to({_off:true},1).wait(12).to({_off:false,x:1527.6446,y:334.4528},0).to({_off:true},1).wait(14).to({_off:false,x:1531.0446,y:333.6528},0).to({_off:true},1).wait(12).to({_off:false,x:1533.9946,y:332.9528},0).to({_off:true},1).wait(28).to({_off:false,x:1540.5946,y:331.4028},0).to({_off:true},1).wait(69));
	this.timeline.addTween(cjs.Tween.get(this.shape_401).wait(6).to({_off:false},0).to({_off:true},1).wait(1).to({_off:false,x:1525.5946,y:334.9528},0).to({_off:true},1).wait(10).to({_off:false,x:1528.0946,y:334.3528},0).to({_off:true},1).wait(1).to({_off:false,x:1528.5446,y:334.2528},0).to({_off:true},1).wait(15).to({_off:false,x:1532.1946,y:333.4028},0).to({_off:true},1).wait(12).to({_off:false,x:1535.1446,y:332.7028},0).to({_off:true},1).wait(10).to({_off:false,x:1537.6446,y:332.1028},0).to({_off:true},1).wait(1).to({_off:false,x:1538.0946,y:332.0028},0).to({_off:true},1).wait(1).to({_off:false,x:1538.5446,y:331.9028},0).to({_off:true},1).wait(10).to({_off:false,x:1541.0446,y:331.3028},0).to({_off:true},1).wait(1).to({_off:false,x:1541.4946,y:331.2028},0).to({_off:true},1).wait(65));
	this.timeline.addTween(cjs.Tween.get(this.shape_402).wait(7).to({_off:false},0).to({_off:true},1).wait(12).to({_off:false,x:1528.3006,y:334.3028},0).to({_off:true},1).wait(1).to({_off:false,x:1528.7506,y:334.2028},0).to({_off:true},1).wait(10).to({_off:false,x:1531.2506,y:333.6028},0).to({_off:true},1).wait(45).to({_off:false,x:1541.7006,y:331.1528},0).to({_off:true},1).wait(64));
	this.timeline.addTween(cjs.Tween.get(this.shape_403).wait(9).to({_off:false},0).to({_off:true},1).wait(45).to({_off:false,x:1536.2506,y:332.4528},0).to({_off:true},1).wait(12).to({_off:false,x:1539.2006,y:331.7528},0).to({_off:true},1).wait(1).to({_off:false,x:1539.6506,y:331.6528},0).to({_off:true},1).wait(10).to({_off:false,x:1542.1506,y:331.0528},0).to({_off:true},1).wait(62));
	this.timeline.addTween(cjs.Tween.get(this.shape_407).wait(13).to({_off:false},0).to({_off:true},1).wait(12).to({_off:false,x:1529.6946,y:334.0028},0).to({_off:true},1).wait(1).to({_off:false,x:1530.1446,y:333.9028},0).to({_off:true},1).wait(10).to({_off:false,x:1532.6446,y:333.3028},0).to({_off:true},1).wait(1).to({_off:false,x:1533.0946,y:333.2028},0).to({_off:true},1).wait(10).to({_off:false,x:1535.5946,y:332.6028},0).to({_off:true},1).wait(1).to({_off:false,x:1536.0446,y:332.5028},0).to({_off:true},1).wait(1).to({_off:false,x:1536.4946,y:332.4028},0).to({_off:true},1).wait(10).to({_off:false,x:1538.9946,y:331.8028},0).to({_off:true},1).wait(1).to({_off:false,x:1539.4446,y:331.7028},0).to({_off:true},1).wait(10).to({_off:false,x:1541.9446,y:331.1028},0).to({_off:true},1).wait(63));
	this.timeline.addTween(cjs.Tween.get(this.shape_411).wait(27).to({_off:false},0).to({_off:true},1).wait(12).to({_off:false,x:1532.8506,y:333.2528},0).to({_off:true},1).wait(1).to({_off:false,x:1533.3006,y:333.1528},0).to({_off:true},1).wait(10).to({_off:false,x:1535.8006,y:332.5528},0).to({_off:true},1).wait(12).to({_off:false,x:1538.7506,y:331.8528},0).to({_off:true},1).wait(77));
	this.timeline.addTween(cjs.Tween.get(this.shape_414).wait(36).to({_off:false},0).to({_off:true},1).wait(12).to({_off:false,x:1534.9006,y:332.7528},0).to({_off:true},1).wait(1).to({_off:false,x:1535.3506,y:332.6528},0).to({_off:true},1).wait(10).to({_off:false,x:1537.8506,y:332.0528},0).to({_off:true},1).wait(12).to({_off:false,x:1540.8006,y:331.3528},0).to({_off:true},1).wait(68));

	// Каркас_35
	this.shape_477 = new cjs.Shape();
	this.shape_477.graphics.f("#000000").s().p("AgbDiQgOgCgIgKIgEgEQgFgIACgJQABgLALgHQALgHANACQAMACAHAGIABgDIAQhZIAFgwIALhjIAGg1QAJhcAIgTQAGAAgJBuIgFA8IgJBbIgKBdQgEAfgGAUIgKAbQgDAIgHAGQgJAFgKAAIgGAAg");
	this.shape_477.setTransform(1495.4027,339.7472);

	this.shape_478 = new cjs.Shape();
	this.shape_478.graphics.f("#000000").s().p("AgbDiQgOgCgIgKIgDgEQgFgIABgJQABgLALgHQALgHANACQAMACAHAGIABgDIAQhZIAGgvIAKhkIAGg1QAJhcAIgTQAGAAgJBuIgFA8IgIBbIgLBdQgEAfgGAUIgKAbQgDAIgHAGQgJAFgKAAIgGAAg");
	this.shape_478.setTransform(1495.6247,339.6472);
	this.shape_478._off = true;

	this.shape_479 = new cjs.Shape();
	this.shape_479.graphics.f("#000000").s().p("AgbDiQgOgCgIgKIgDgDQgFgIABgKQABgLALgHQALgHANACQAMACAHAGIABgDIAQhZIAGgvIAKhkIAGg1QAJhcAIgTQAGAAgJBuIgFA8IgIBcIgLBcQgEAfgGAVQgFARgFAJQgDAIgHAGQgJAFgKAAIgGAAg");
	this.shape_479.setTransform(1495.8747,339.5472);

	this.shape_480 = new cjs.Shape();
	this.shape_480.graphics.f("#000000").s().p("AgbDiQgOgCgIgKIgDgEQgFgIABgJQABgLALgHQALgHANACQAMACAHAGIABgDIAQhZIAGgvIAKhkIAGg1QAJhcAIgTQAGAAgJBuIgFA8IgIBbIgLBdQgEAfgGAUQgFASgFAJQgDAIgHAGQgJAFgKAAIgGAAg");
	this.shape_480.setTransform(1496.1247,339.4972);

	this.shape_481 = new cjs.Shape();
	this.shape_481.graphics.f("#000000").s().p("AgbDiQgOgCgIgKIgDgDQgFgIABgKQABgLALgHQALgHANACQAMACAHAGIABgDIAQhZIAGgvIAKhkIAGg1QAKhcAHgTQAGAAgJBuIgFA8IgJBcIgKBcQgEAfgGAVQgFARgFAJQgDAIgHAGQgJAFgKAAIgGAAg");
	this.shape_481.setTransform(1496.3747,339.3972);

	this.shape_482 = new cjs.Shape();
	this.shape_482.graphics.f("#000000").s().p("AgbDiQgOgCgIgKIgDgEQgGgIACgJQABgLALgHQALgHANACQAMACAHAGIABgDIAQhZIAGgvIAKhkIAGg1QAKhcAHgTQAGAAgJBuIgFA8IgJBbIgKBdQgEAfgGAUQgFASgFAJQgDAIgHAGQgJAFgKAAIgGAAg");
	this.shape_482.setTransform(1496.608,339.3472);
	this.shape_482._off = true;

	this.shape_483 = new cjs.Shape();
	this.shape_483.graphics.f("#000000").s().p("AgbDiQgOgCgIgKIgEgEQgFgHACgKQABgLALgHQALgHANACQAMACAHAGIABgDIAQhZIAFgvIALhkIAGg1QAKhcAHgTQAGAAgJBuIgFA8IgJBbIgKBdQgEAfgGAVQgFARgFAJQgDAIgHAGQgJAFgKAAIgGAAg");
	this.shape_483.setTransform(1496.8657,339.2472);

	this.shape_484 = new cjs.Shape();
	this.shape_484.graphics.f("#000000").s().p("AgbDiQgOgCgIgKIgEgEQgFgIACgJQABgLALgHQALgHANACQAMACAHAGIABgDIAQhZIAFgvIALhkIAGg1QAKhcAHgTQAGAAgJBuIgFA8IgJBbIgKBdQgEAfgGAUIgKAbQgDAIgHAGQgJAFgKAAIgGAAg");
	this.shape_484.setTransform(1497.112,339.1972);
	this.shape_484._off = true;

	this.shape_485 = new cjs.Shape();
	this.shape_485.graphics.f("#000000").s().p("AgbDiQgOgCgIgKIgDgEQgFgHABgKQABgLALgHQALgHANACQAMACAHAGIABgDIAQhZIAGgvIAKhkIAGg1QAJhcAIgTQAGAAgJBuIgFA8IgIBbIgLBdQgEAfgGAVQgFARgFAJQgDAIgHAGQgJAFgKAAIgGAAg");
	this.shape_485.setTransform(1497.3247,339.0972);

	this.shape_486 = new cjs.Shape();
	this.shape_486.graphics.f("#000000").s().p("AgbDiQgOgCgIgKIgDgEQgFgHABgKQABgLALgHQALgHANACQAMACAHAGIABgDIAQhZIAGgvIAKhkIAGg1QAJhcAIgTQAGAAgJBuIgFA8IgIBbIgLBdIgKA0IgKAaQgDAIgHAGQgJAFgKAAIgGAAg");
	this.shape_486.setTransform(1497.8247,338.9472);
	this.shape_486._off = true;

	this.shape_487 = new cjs.Shape();
	this.shape_487.graphics.f("#000000").s().p("AgbDiQgOgCgIgKIgDgEQgFgIABgJQABgLALgHQALgHANACQAMACAHAGIABgDIAQhZIAGgvIAKhkIAGg1QAKhcAHgTQAGAAgJBuIgFA8IgJBbIgKBdQgEAfgGAUQgFASgFAJQgDAIgHAGQgJAFgKAAIgGAAg");
	this.shape_487.setTransform(1498.0747,338.8972);
	this.shape_487._off = true;

	this.shape_488 = new cjs.Shape();
	this.shape_488.graphics.f("#000000").s().p("AgbDiQgOgCgIgKIgDgEQgFgHABgKQABgLALgHQALgHANACQAMACAHAGIABgDIAQhZIAGgvIAKhkIAGg1QAKhcAHgTQAGAAgJBuIgFA8IgJBbIgKBdQgEAfgGAVQgFAQgFAKQgDAIgHAGQgJAFgKAAIgGAAg");
	this.shape_488.setTransform(1498.3247,338.7972);
	this.shape_488._off = true;

	this.shape_489 = new cjs.Shape();
	this.shape_489.graphics.f("#000000").s().p("AgbDiQgOgCgIgKIgEgEQgFgHACgKQABgLALgHQALgHANACQAMACAHAGIABgDIAQhZIAFgvIALhkIAGg1QAKhcAHgTQAGAAgJBuIgFA8IgJBbIgKBdQgEAfgGAVQgFAQgFAKQgDAIgHAGQgJAFgKAAIgGAAg");
	this.shape_489.setTransform(1498.812,338.6472);

	this.shape_490 = new cjs.Shape();
	this.shape_490.graphics.f("#000000").s().p("AgbDiQgOgCgIgKIgDgEQgFgHABgKQABgLALgHQALgHANACQAMACAHAGIABgDIAQhZIAGgvIAKhkIAGg1QAJhcAIgTQAGAAgJBuIgFA8IgIBbIgLBdQgEAfgGAVIgKAaQgDAIgHAGQgJAFgKAAIgGAAg");
	this.shape_490.setTransform(1499.2747,338.4972);

	this.shape_491 = new cjs.Shape();
	this.shape_491.graphics.f("#000000").s().p("AgbDiQgOgCgIgKIgEgEQgFgIACgJQABgLALgHQALgHANACQAMACAHAGIABgDIAQhZIAFgvIALhkIAGg1QAKhcAHgTQAGAAgJBuIgFA8IgJBbIgKBdQgEAfgGAVIgKAaQgDAIgHAGQgJAFgKAAIgGAAg");
	this.shape_491.setTransform(1500.762,338.0472);

	this.shape_492 = new cjs.Shape();
	this.shape_492.graphics.f("#000000").s().p("AgbDiQgOgCgIgKIgDgEQgFgIABgJQABgLALgHQALgHANACQAMACAHAGIABgDIAQhZIAGgvIAKhkIAGg1QAJhcAIgTQAGAAgJBuIgFA8IgIBbIgLBdQgEAfgGAVIgKAaQgDAIgHAGQgJAFgKAAIgGAAg");
	this.shape_492.setTransform(1501.2247,337.8972);

	this.shape_493 = new cjs.Shape();
	this.shape_493.graphics.f("#000000").s().p("AgbDiQgOgCgIgKIgDgEQgFgIABgJQABgLALgHQALgHANACQAMACAHAGIABgDIAQhZIAGgvIAKhkIAGg1QAJhcAIgTQAGAAgJBuIgFA8IgIBbIgLBdIgKA0IgKAaQgDAIgHAGQgJAFgKAAIgGAAg");
	this.shape_493.setTransform(1501.7247,337.7472);

	this.shape_494 = new cjs.Shape();
	this.shape_494.graphics.f("#000000").s().p("AgbDiQgOgCgIgKIgDgEQgFgIABgJQABgLALgHQALgHANACQAMACAHAGIABgDIAQhZIAGgwIAKhjIAGg1QAKhcAHgTQAGAAgJBuIgFA8IgJBbIgKBdQgEAfgGAUQgFASgFAJQgDAIgHAGQgJAFgKAAIgGAAg");
	this.shape_494.setTransform(1501.9747,337.6972);

	this.shape_495 = new cjs.Shape();
	this.shape_495.graphics.f("#000000").s().p("AgbDiQgOgCgIgKIgDgDQgGgIACgKQABgLALgHQALgHANACQAMACAHAGIABgDIAQhZIAFgvIALhkIAGg1QAKhcAHgTQAGAAgJBuIgFA8IgJBcIgKBcQgEAfgGAVQgFARgFAJQgDAIgHAGQgJAFgKAAIgGAAg");
	this.shape_495.setTransform(1502.458,337.4972);

	this.shape_496 = new cjs.Shape();
	this.shape_496.graphics.f("#000000").s().p("AgbDiQgOgCgIgKIgDgDQgFgIABgKQABgLALgHQALgHANACQAMACAHAGIABgDIAQhZIAGgvIAKhkIAGg1QAJhcAIgTQAGAAgJBuIgFA8IgIBbIgLBdQgEAfgGAVQgFARgFAJQgDAIgHAGQgJAFgKAAIgGAAg");
	this.shape_496.setTransform(1503.4247,337.1972);

	this.shape_497 = new cjs.Shape();
	this.shape_497.graphics.f("#000000").s().p("AgbDiQgOgCgIgKIgDgEQgFgHABgKQABgLALgHQALgHANACQAMACAHAGIABgDIAQhZIAGgvIAKhkIAGg1QAKhcAHgTQAGAAgJBuIgFA8IgJBbIgKBdQgEAfgGAVQgFARgFAJQgDAIgHAGQgJAFgKAAIgGAAg");
	this.shape_497.setTransform(1503.9247,337.0472);

	this.shape_498 = new cjs.Shape();
	this.shape_498.graphics.f("#000000").s().p("AgbDiQgOgCgIgKIgEgEQgFgHACgKQABgLALgHQALgHANACQAMACAHAGIABgDIAQhZIAFgvIALhkIAGg1QAKhcAHgTQAGAAgJBuIgFA8IgJBbIgKBdQgEAfgGAVIgKAaQgDAIgHAGQgJAFgKAAIgGAAg");
	this.shape_498.setTransform(1506.362,336.2972);

	this.shape_499 = new cjs.Shape();
	this.shape_499.graphics.f("#000000").s().p("AgbDiQgOgCgIgKIgDgEQgFgIABgJQABgLALgHQALgHANACQAMACAHAGIABgDIAQhZIAGgvIAKhkIAGg1QAKhcAHgTQAGAAgJBuIgFA8IgJBbIgKBdQgEAfgGAVQgFAQgFAKQgDAIgHAGQgJAFgKAAIgGAAg");
	this.shape_499.setTransform(1507.8247,335.8472);

	this.shape_500 = new cjs.Shape();
	this.shape_500.graphics.f("#000000").s().p("AgbDiQgOgCgIgKIgDgEQgGgIACgJQABgLALgHQALgHANACQAMACAHAGIABgDIAQhZIAFgvIALhkIAGg1QAKhcAHgTQAGAAgJBuIgFA8IgJBbIgKBdQgEAfgGAUQgFASgFAJQgDAIgHAGQgJAFgKAAIgGAAg");
	this.shape_500.setTransform(1508.058,335.7972);

	this.shape_501 = new cjs.Shape();
	this.shape_501.graphics.f("#000000").s().p("AgbDiQgOgCgIgKIgEgEQgFgIACgJQABgLALgHQALgHANACQAMACAHAGIABgDIAQhZIAFgwIALhjIAGg1QAKhcAHgTQAGAAgJBuIgFA8IgJBbIgKBdQgEAfgGAUIgKAbQgDAIgHAGQgJAFgKAAIgGAAg");
	this.shape_501.setTransform(1508.562,335.6472);

	this.shape_502 = new cjs.Shape();
	this.shape_502.graphics.f("#000000").s().p("AgbDiQgOgCgIgKIgDgEQgFgIABgJQABgLALgHQALgHANACQAMACAHAGIABgDIAQhZIAGgwIAKhjIAGg1QAJhcAIgTQAGAAgJBuIgFA8IgIBbIgLBdQgEAfgGAUIgKAbQgDAIgHAGQgJAFgKAAIgGAAg");
	this.shape_502.setTransform(1509.0247,335.4972);

	this.shape_503 = new cjs.Shape();
	this.shape_503.graphics.f("#000000").s().p("AgbDiQgOgCgIgKIgDgEQgFgIABgJQABgLALgHQALgHANACQAMACAHAGIABgDIAQhZIAGgvIAKhkIAGg1QAJhcAIgTQAGAAgJBuIgFA8IgIBbIgLBdIgKAzIgKAbQgDAIgHAGQgJAFgKAAIgGAAg");
	this.shape_503.setTransform(1509.2747,335.3972);

	this.shape_504 = new cjs.Shape();
	this.shape_504.graphics.f("#000000").s().p("AgbDiQgOgCgIgKIgEgDQgFgIACgKQABgLALgHQALgHANACQAMACAHAGIABgDIAQhZIAFgvIALhkIAGg1QAKhcAHgTQAGAAgJBuIgFA8IgJBcIgKBcQgEAfgGAVQgFARgFAJQgDAIgHAGQgJAFgKAAIgGAAg");
	this.shape_504.setTransform(1510.0157,335.1472);

	this.shape_505 = new cjs.Shape();
	this.shape_505.graphics.f("#000000").s().p("AgbDiQgOgCgIgKIgDgEQgGgIACgJQABgLALgHQALgHANACQAMACAHAGIABgDIAQhZIAFgwIALhjIAGg1QAKhcAHgTQAGAAgJBuIgFA8IgJBbIgKBdQgEAfgGAUQgFASgFAJQgDAIgHAGQgJAFgKAAIgGAAg");
	this.shape_505.setTransform(1515.608,333.4472);

	this.shape_506 = new cjs.Shape();
	this.shape_506.graphics.f("#000000").s().p("Ag3DXQgOgFgGgLIgCgEQgEgJADgJQAFgKAMgFQALgFANAFQAMAEAFAIIABgDQAbg/AHgVIAPgsQAMgpAHg4IAKg1QAPhaAEgUQAGAAgKBuIgKA8IgRBaQgPA8gOAdQgKAdgJATQgIAQgIAIQgEAHgJAEQgHADgGAAQgGAAgGgDg");
	this.shape_506.setTransform(1502.5283,322.3625);

	this.shape_507 = new cjs.Shape();
	this.shape_507.graphics.f("#000000").s().p("AhSDIQgMgIgEgMIgBgFQgCgJAFgIQAGgJANgDQAMgCAMAIQAKAGAEAJIABgDQAog4ALgTIAYgnQAQgnALg4IAOgyQAShbADgTQAFAAgMBuQgFAcgJAfIgYBYQgYA5gXAYQgPAbgOARIgUAUQgGAGgKACIgGABQgJAAgJgGg");
	this.shape_507.setTransform(1489.2079,311.1063);

	this.shape_508 = new cjs.Shape();
	this.shape_508.graphics.f("#000000").s().p("AhqC1QgJgLgCgMIAAgFQAAgKAGgGQAIgJANABQANABAJAJQAJAIACAJIACgBQAzgvAOgQIAfghQAXgkAMg4IASgwQAYhZgBgTQAFAAgOBtQgGAcgNAdIggBXQgeA0gfASQgVAWgRAOQgOAMgKADQgGAFgLABQgMgCgLgIg");
	this.shape_508.setTransform(1476.1776,299.55);

	this.shape_509 = new cjs.Shape();
	this.shape_509.graphics.f("#000000").s().p("AhoCsQgNgDgIgMQgIgMABgMIABgFQADgJAHgFQAJgHANADQAMADAIAMQAHAKAAAJIACgBQA8gjARgOIAlgYQAaggAPg4IAXguQAbhYgDgUQAFAAgPBuQgIAbgRAcIgmBUQgmAugkAKIgtAbQgRAJgKACQgFACgFAAIgHgBg");
	this.shape_509.setTransform(1463.4415,287.715);

	this.shape_510 = new cjs.Shape();
	this.shape_510.graphics.f("#000000").s().p("Ah7CXQgMgGgFgNQgFgNAEgMIABgFQAFgIAIgEQAKgEAMAFQAMAGAEANQAGALgDAJIADgBIBVgfQAPgHAagJQAfgbARg4IAagsQAfhWgFgVQAFABgRBsQgKAbgTAaIguBRQgqAogqAAQgcALgVAGQgRAFgLAAIgGAAQgGAAgGgCg");
	this.shape_510.setTransform(1451.0937,275.6946);

	this.shape_511 = new cjs.Shape();
	this.shape_511.graphics.f("#000000").s().p("Ah3B0QgJAAgIgGQgJgIgEgOQgCgOAGgLIADgEQAGgHAJgCQAKgCALAIQAKAHACAOQADAMgEAIIADAAQBFgIAVgFQAPgDAbgDQAhgXAVg4QAPgWAPgTQAUguAGgcQgDAcgJAxQgLAagXAYIg0BNQgvAhgsgLQgeAFgWACg");
	this.shape_511.setTransform(1439.05,263.6,1,1,0,0,0,0.1,-1.6);

	this.shape_512 = new cjs.Shape();
	this.shape_512.graphics.f("#000000").s().p("AgzBtIg1gDQgRgDgKgEQgJgCgHgHQgIgLAAgNQABgPAIgJIADgDQAIgHAJABQALAAAJAKQAIAKgBANQAAANgFAHIADAAIBbAGQAPAAAbADQAjgRAYg5IAigmQARgkAIgYQAFghgBgJQAEAOgIAcIgMBAQgMAZgZAWIg7BJQgaANgYAAQgWAAgVgLg");
	this.shape_512.setTransform(1427.5,252.3,1,1,0,0,0,0,-0.2);

	this.shape_513 = new cjs.Shape();
	this.shape_513.graphics.f("#000000").s().p("Ag+BaQgegIgUgGQgRgHgJgGQgIgDgFgJQgGgMADgNQADgOAKgHIAEgDQAJgDAJABQALACAGAMQAGAKgDAOQgCALgIAHIADABQBCATAWAEQAQAFAYAJQAkgMAdg6QATgTARgPQAQgdAIgWIgLA5QgNAXgcAUIhBBDQgSAGgPAAQggAAgbgWgACahvQAGAQgNAiQAIgpgBgJg");
	this.shape_513.setTransform(1416.25,241.55,1,1,0,0,0,0,-0.1);

	this.shape_514 = new cjs.Shape();
	this.shape_514.graphics.f("#000000").s().p("AhHBFQgdgNgSgMQgPgJgHgIQgIgFgDgJQgDgNAFgLQAGgNAMgFIAEgCQAKgDAIAEQAKAEAEANQADAMgFALQgFAMgIAEIACACIBRApQAPAHAVAPQAkgFAig7QAUgSATgMQAOgYAJgTQAKgygBgIQAIATgRAnIgLAvQgOAYgeARIhHA+IgPABQgpAAgegkg");
	this.shape_514.setTransform(1405.4,230.75,1,1,0,0,0,0,-0.1);

	this.shape_515 = new cjs.Shape();
	this.shape_515.graphics.f("#000000").s().p("AhPAwQgZgTgQgPIgSgUQgGgHgBgKQgBgMAIgMQAJgLAMgDIAFgBQAJAAAHAFQAKAHABANQABAMgJALQgGAKgKADIADABQA0AsATANQANAKASATQAiAAAmg5QAWgRAUgLQANgTAJgQQANg4gCgJQAKAWgVArIgKApQgPAWghAPIhLA4IgDAAQgwAAgbg0g");
	this.shape_515.setTransform(1394.8427,220.2145);

	this.shape_516 = new cjs.Shape();
	this.shape_516.graphics.f("#000000").s().p("AhWAbQgVgWgMgRIgOgaQgEgHABgKQABgMALgKQAKgJANAAIAFAAQAKABAFAGQAIAJgCANQgBANgKAIQgJAJgKAAIACADQAqA1AQAQQALAOAMAWQAhAFAsg4QAXgOAUgKQANgQAJgPQAPg8gBgIQALAYgZAsIgKAlQgQAWgjALIhPAyQgvgHgTg9g");
	this.shape_516.setTransform(1384.569,209.6);

	this.shape_517 = new cjs.Shape();
	this.shape_517.graphics.f("#000000").s().p("AhcATQgPgagIgVQgHgPgCgLQgCgJACgJQAFgMAMgHQAMgIAMADIAFABQAJAEAFAHQAGAKgFAMQgDAMgNAHQgKAGgKgBIACADIAqBQQAIAOAHAaQAfAJAxg3QAYgMAVgHQAMgPAJgMIgKAhQgRAVgkAIIhTArQgsgMgIhDgAB6hPQANAcgdAsQARg+gBgKg");
	this.shape_517.setTransform(1374.518,198.0688);

	this.shape_518 = new cjs.Shape();
	this.shape_518.graphics.f("#000000").s().p("AhfANQgKgdgEgVIgDgcQAAgJAEgIQAHgLANgFQAOgEALAFIAFACQAIAFADAIQAEAMgHAKQgHAMgNADQgLAEgJgDIAAADIAZBXQAFAQABAbQAbAMA4gzQAZgLAVgFQAMgMAIgLIgJAeQgRAUgnAFQgpASgtARQgogRAGhHgABsg/QAPAeghAsQAThBgBgJg");
	this.shape_518.setTransform(1364.6068,186.4684);

	this.shape_519 = new cjs.Shape();
	this.shape_519.graphics.f("#000000").s().p("AheAIQgDgeAAgWQABgSACgKQABgJAGgHQAJgJAOgCQAOgCAKAHIAEADQAIAHAAAJQACALgJAKQgIAKgOAAQgMACgJgFIABADQADBEADAWQABARgFAbQAYAPA9gwQAagIAWgDQALgLAIgKQAVhEgBgIQAQAigkAqIgJAdQgSARgnACQgrAPgvANQghgWAShHg");
	this.shape_519.setTransform(1354.4847,175.1868);

	this.shape_520 = new cjs.Shape();
	this.shape_520.graphics.f("#000000").s().p("AhSADQADgfAFgVQAEgRAFgJQACgIAIgHQALgHANABQAPACAIAIIADAEQAFAIAAAJQgBAMgKAHQgLAIgNgCQgMgBgIgGIAAADIgNBZQgBAQgMAaQAGAGAMgBIgXAFQgcgZAghFgAAGA9QAbgHAWAAIARgRIgIAZQgSARgogCIg1AMQAVgHAggVgABfgqQARAlgoAqQAYhHgBgIg");
	this.shape_520.setTransform(1343.4089,164.2125);

	this.shape_521 = new cjs.Shape();
	this.shape_521.graphics.f("#000000").s().p("AhEgBQAJgdAJgUIAPgYQAEgIAJgEQAMgFAMAEQANAEAHALIADAEQAEAJgDAIQgDAMgNAFQgKAEgNgEQgMgDgFgIIgBADQgZBAgGAVQgFAQgSAXQAFAFAKABIgUACQgXgaAthBgAAEA+QAbgEAWACIARgQIgIAYQgTAQgpgGIg4AIQAXgFAjgTgABegjQARAngpAoQAZhFgBgKg");
	this.shape_521.setTransform(1332.2267,153.5111);

	this.shape_522 = new cjs.Shape();
	this.shape_522.graphics.f("#000000").s().p("Ag1gEQAPgbANgRQALgOAIgHQAGgGAIgDQANgDAMAGQAMAIAFALIABAGQADAIgFAJQgFAKgNACQgMADgMgHQgKgGgEgIIgCACQglA5gLAUQgIAOgXAUQADAEAIABIgRABQgQgaA5g6gAAABMIg5ADQAXgEAlgPQAbgBAWADIAQgNIgIAWQgMAJgTAAQgNAAgQgEgABegfQARAqgrAmQAahGAAgKg");
	this.shape_522.setTransform(1320.9915,143.1);

	this.shape_523 = new cjs.Shape();
	this.shape_523.graphics.f("#000000").s().p("AgCBCIg3gCQAWgCAlgLQAbAAAVAHIAPgLQAdhIAAgKQARAtguAlIgHATQgKAHgPAAQgPAAgUgHgAhgA+QgMgZBFgwQAVgYAQgOQAMgMAJgFQAIgFAJgBQANABALAIQAKAKACAMIABAFQAAAKgGAHQgIAIgNAAQgMAAgKgJQgKgIgCgJIgCACQgvAxgPAQQgLANgbAOQACAEAEACIgMgBg");
	this.shape_523.setTransform(1309.7586,133.475);

	this.shape_524 = new cjs.Shape();
	this.shape_524.graphics.f("#000000").s().p("AAEBCIg6ADQAXgEAmgOQAbgCAWAGIAMgMQAQhNgBgKQAZAugoApIgEATQgKAJgTAAQgNAAgSgFgAhaBFQgMgXBEg0QATgYAPgOIAVgSQAHgGAKgCQANAAALAHQALAJADAMIABAFQACAKgGAHQgGAJgOABQgMACgLgJQgKgGgDgKIgDADQgvAxgNARQgLAOgbAOQABADAFACIgMAAg");
	this.shape_524.setTransform(1297.9715,148.3689);

	this.shape_525 = new cjs.Shape();
	this.shape_525.graphics.f("#000000").s().p("AgegDQATgYAPgPIATgUQAGgGAJgDQANgBAMAGQANAHAEAMIABAFIAAAIQgEgKgHgJIgBgCIABACQACAGAAAeQgFADgHACIgBAAIgFAAIAAAAIgBAAQgIAAgJgFIAAAAQgLgGgEgJIgDAEIg7BDQgLANgbAQQACACAEABQgEgBgCgCQAbgQALgNIA7hDIADgEQAEAJALAGIAAAAQAJAFAIAAIABAAIAAAAIAFAAIABAAQAHgCAFgDIgCA2IgKALIgCAAIgBAAIgBAAQgKgCgMAAIAAAAIgBAAIgVABQgnARgXAGQgQADgHgCIgLABQgMgVBCg2gAAMAvIAVgBIABAAIAAAAQAMAAAKACIABAAIABAAIACAAIAKgLIgBASQgPAQgtgIIg7AHQAXgGAngRgABGAlIAAAAgABGAlIAAAAgABIgRQAEgDACgFQADgEAAgFQAQAjgbAkIACg2g");
	this.shape_525.setTransform(1286.3462,163.385);

	this.shape_526 = new cjs.Shape();
	this.shape_526.graphics.f("#000000").s().p("AgcgCQATgZAOgOIARgVQAFgHAJgEQANgDAMAGQAOAGAFALIACAFQADAJgEAIIgDAFQAIAbgRAdIACAQQgNARgugEIg6ALQAWgIAlgTIABgBQAPgDAOAAIAAAAIAAAAIASACIAAAAIAIgLIgGgvQAKgDAFgGQgGgRgRgSQADAHAFAlIgBABIgBAAIgGABIgBAAIgBAAQgHgBgHgDQgLgFgFgIIgEAEQgsAzgOASQgJANgcAQQACACAEABIgKACQgNgUBBg5gAA3g9IgCgBIACABgAhGBJQgEgBgCgCQAcgQAJgNQAOgSAsgzIAEgEQAFAIALAFQAHADAHABIABAAIABAAIAGgBIABAAIABgBIAGAvIgIALIAAAAIgSgCIAAAAIAAAAQgOAAgPADIgBABQglATgWAIQgNAEgHAAIgEgBgABFAeIAAAAgAA/gRIAAAAg");
	this.shape_526.setTransform(1274.9628,178.2721);

	this.shape_527 = new cjs.Shape();
	this.shape_527.graphics.f("#000000").s().p("AgdAAQASgaAPgOIAPgWQAEgHAJgFQAMgEANAEQAOAFAGALIADAEQAEAJgEAIQgDAMgNAEIgEACIgGgLIgOgeQAEAMAJAdIAAAAIgBAAQgFAAgGgCIgBAAIAAAAQgLgDgGgIIgFAEIg4BGQgKAOgbARQABACAEAAIgJACQgMgRA+g8gAAog8IgFgGIAFAGgAhGBLQgEAAgBgCQAbgRAKgOIA4hGIAFgEQAGAIALADIAAAAIABAAQAGACAFAAIABAAIAAAAIAHAAQALAWgGATIAFAQQgLARgwAAQgcAIgfAHQAWgIAmgXQAUgGARAAIAAAAIAAAAIAKABIABAAQAEgGABgGIgMgpIAMApQgBAGgEAGIgBAAIgKgBIAAAAIAAAAQgRAAgUAGQgmAXgWAIQgNAGgHAAIgCgBgABBAWIAAAAg");
	this.shape_527.setTransform(1263.86,192.8875);

	this.shape_528 = new cjs.Shape();
	this.shape_528.graphics.f("#000000").s().p("AgdAAQASgZAOgOIANgXIADgFIgCgBIACABQADgEAGgEQAMgFANACQAOADAHALIADAEQAFAIgDAJQgCALgMAGIgHADQATAdgJAXQgIASgxADQgdAMggAJQAWgKAmgbIAEgBIABAAQATgHASAAIABAAIAAAAIAGAAQAEgJAAgJQAAgOgKgQIAFgBQgNgUgagYIAAAAQAGAHASAZIAKANIgBAAIgBAAIAAAAIgBAAIgGAAIgDgBQgMgCgGgIIgGAFIg2BIQgJANgcASQACACADAAIgIACQgNgPA9hAgAhFBNQgDAAgCgCQAcgSAJgNIA2hIIAGgFQAGAIAMACIADABIAGAAIABAAIAAAAIABAAIABAAQAKAQAAAOQAAAJgEAJIgGAAIAAAAIgBAAQgSAAgTAHIgBAAIgEABQgmAbgWAKQgMAGgGAAIgBAAgAgyBHIAAAAg");
	this.shape_528.setTransform(1252.7134,207.3083);

	this.shape_529 = new cjs.Shape();
	this.shape_529.graphics.f("#000000").s().p("AgdABQASgYANgPIAJgTIAUAUIAMAMIAHAAQAWAZgGAVQgFASgyAIQgeAOgfAMQAVgMAmgeQAZgLAXAAQABgGAAgFQAAgRgPgRIgBAAQgMgCgHgGIAAAAIgGAGQgpA1gMATQgJAPgcASQABAAAAABQAAAAABAAQAAAAABAAQAAAAABAAIAAAAIABAAIgBAAIAAAAQgBAAAAAAQgBAAAAAAQgBAAAAAAQAAgBgBAAQAcgSAJgPQAMgTApg1IAGgGIAAAAQAHAGAMACIABAAQAPARAAARQAAAFgBAGQgXAAgZALQgmAegVAMQgMAGgGAAIgHADQgNgOA7hDgAAMg7IABgCQADgIAIgHQALgGANABQAPADAIAJIADAEQAGAHgCAKQgBALgLAHQgHAFgJAAQgNgQgZgSgAABhCIALAHIgBACIgKgJgAAMg7IAAAAg");
	this.shape_529.setTransform(1241.5318,221.4609);

	this.shape_530 = new cjs.Shape();
	this.shape_530.graphics.f("#000000").s().p("AgcADQAQgZAOgOIAFgMIAOALIANAJQgHgCgEgDIgGAHQgoA2gMATQgJAPgbASIADABIAAAAIAAAAIABAAIAAAAIAAAAIgBAAIAAAAIAAAAIgDgBQAbgSAJgPQAMgTAog2IAGgHQAEADAHACQAVARAAASIgBAGQgXACgYAMQgkAhgUANQgMAIgGAAIgGADQgMgMA5hFgAAHAbQAYgMAXgCIABgGQAAgSgVgRIAGABIgOgMIgSgLIACgLQADgIAHgHQAKgHAOAAQAOABAJAIIAEADQAGAIgBAJQAAAMgKAIQgKAHgOAAIgCAAQASASAFAWQgDASgyAMIg7AeQAUgNAkghgAAigcIAAAAgAgPg/QABgBAWAOIgBACQgQgMgGgDgAAIgyIAAAAg");
	this.shape_530.setTransform(1230.2226,235.425);

	this.shape_531 = new cjs.Shape();
	this.shape_531.graphics.f("#000000").s().p("AgcAEQAQgaAOgNIABgFIAHADIALAFIgFAGIgyBLQgIAOgbAUIABABIABAAIABgBIABAAIABAAIgHAEQgLgLA2hIgAhEBUIgBgBQAbgUAIgOIAyhLIAFgGQAeAQAAAUIAAADQgYACgWAPQgpApgTANIgJAFIgBAAIgBAAIgBABIgBAAgAhABTIAAAAgAAFAYQAWgPAYgCIAAgDQAAgUgegQIABgCIAIADIgOgIIgLgFIgCAEQgZgOgIgDQABgBAiAOQACgJAAgHQACgJAHgHQAKgJANgBQAOAAAKAHIAEADQAHAHAAAJQABAMgKAJQgJAJgNAAQgHABgGgCQAVAQAIAVQAAAQgyARQgfAUghATQATgNApgpg");
	this.shape_531.setTransform(1218.8365,249.2234);

	this.shape_532 = new cjs.Shape();
	this.shape_532.graphics.f("#000000").s().p("AgcAFQAQgaAOgNIAAgBIgBAAQgigMgKgCQABgCAtAMIgBAEIARAGIgDADQgmA4gKAUQgIAOgbAVIAAABIABAAIAAAAIACAAIgFADQgLgKA0hKgAhCBWIgBAAIAAgBQAbgVAIgOQAKgUAmg4IADgDIACgDIgQgGIgCgBQAEgMgCgIQAAgIAHgJQAIgJAOgDQAOgCALAHIAEACQAHAHABAJQADALgJAKQgIAJgOACQgMADgJgFIgBADQAYAMALAUQABAOgyAVQgcAXggAUQASgOAlgsQAVgQAZgEQgBgSgcgLQAcALABASQgZAEgVAQQglAsgSAOQgHAHgEABIgCAAIAAAAgAATgdIAAAAg");
	this.shape_532.setTransform(1207.264,262.8515);

	this.shape_533 = new cjs.Shape();
	this.shape_533.graphics.f("#000000").s().p("AgbAHQAOgZANgNIgHgBQglgGgKgBQABgCAyAGIAFABQAEgPgDgIQgBgJAFgJQAJgKAMgEQAPgDALAFIAEADQAIAFACAJQADALgHALQgIAKgNADQgMAEgJgEIgDAGQAVAHALAPQADAOgwAaIg5AuQAQgQAjgtQAUgRAYgFQgCgQgYgHIABgCIgRgFIAAABIgCACIASAEIgCACQgkA5gLAUQgIAOgaAWQAAAAAAAAQABAAAAAAQAAAAABAAQAAAAABAAQgBAAAAAAQgBAAAAAAQAAAAgBAAQAAAAAAAAQAagWAIgOQALgUAkg5IACgCQAYAHACAQQgYAFgUARQgjAtgQAQQgIAHgDACIgFADQgJgIAxhMgAASgbIAAAAg");
	this.shape_533.setTransform(1195.5657,276.3438);

	this.shape_534 = new cjs.Shape();
	this.shape_534.graphics.f("#000000").s().p("AgfAHQAIgRAJgNIgSgFQABgBASAEIAIgLQAEgQgDgJQAAgJAEgIQAIgKANgEQAOgDALAFIAEADQAJAGABAIQADAMgHAKQgIAKgNADQgLAEgKgEIgFAJIgEAIIANADQAlAMANAWQABANg0ATIg1AfQASgOAfghQAYgOAZgBQgBgWgwgKIgKgDIACgDIgSgEIgBACIARAFQgaAzgIATQgHAPgXAWIABABIABAAIABAAIAAAAIABAAIgHAEQgPgMAwhLgAg6BaIgBAAIgBAAIgBgBQAXgWAHgPQAIgTAagzIAKADQAwAKABAWQgZABgYAOQgfAhgSAOQgOALgHAAIgBAAIAAAAgAADgSIAAAAg");
	this.shape_534.setTransform(1180.9209,289.2438);

	this.shape_535 = new cjs.Shape();
	this.shape_535.graphics.f("#000000").s().p("AgrAGQALgcALgRQAEgQgDgJQAAgIAGgJQAHgLANgDQAOgDALAGIAEACQAJAGABAJQADAKgIALQgHALgOACQgMADgHgDIgFAIIgIAUIgGgCIAGADIgaA/QgFAQgUAXQACADAFAAIAAAAIAAAAIgLAEQgUgTAthIgAg5BdQgFAAgCgDQAUgXAFgQIAag/IAlAPQAsAPAAAUIAAACIgBAAIgKAAIAAAAIgBAAQgQAAgRAGIgFACQgfAZgVAMQgOAIgJAAIAAAAIAAAAgAASAwIAFgCQARgGAQAAIABAAIAAAAIAKAAIABAAIAAgCQAAgUgsgPIglgPIAAgBQBaAZgCAcQgBANg3ALIg1AVQAVgMAfgZgAgNgMIAAAAg");
	this.shape_535.setTransform(1167.2322,301.9721);

	this.shape_536 = new cjs.Shape();
	this.shape_536.graphics.f("#000000").s().p("Ag1AHQAJgeAJgSIABgZQAAgJAGgIQAHgLAOgDQANgDALAGIAEACQAIAGACAJQADALgIALQgIAKgNADQgLACgJgDIgDAIQgWBAgFAWQgEAQgRAYQAFAEAJAAIgTAEQgXgYAphEgAAWBAQAbgGAYAHQAGgUgtgWQghgTgJgEQBeAngGAbQgDAMg4ACIg3AMQAWgHAigVg");
	this.shape_536.setTransform(1153.6296,314.5221);

	this.shape_537 = new cjs.Shape();
	this.shape_537.graphics.f("#000000").s().p("Ag9AHQAGgeAHgTIACgaQAAgJAFgIQAJgLAMgCQAPgDAKAGIAEACQAIAGABAJQADALgIALQgIAKgMACQgLADgKgEIgCAHQgQBCgDAWQgDARgNAYQASAVBJgfQAbgCAXALQAIgSgqgbQgegXgKgGQBaAzgKAZQgEALg4gGQguACgvABQgbgdAlhAg");
	this.shape_537.setTransform(1140.1055,326.975);

	this.shape_538 = new cjs.Shape();
	this.shape_538.graphics.f("#000000").s().p("AAXBmIhdgLQgdgiAgg7QADgfAGgUIABgbQAAgIAGgIQAJgLAMgDQAPgDALAHIAEACQAHAGABAJQADALgIALQgHAKgOACQgLACgJgDIgCAGIgMBZQAAASgKAYQAUAYBHgSQAbADAWAPQAKgQgnggIgkgjQBSBAgMAWQgCADgKAAQgPAAghgJg");
	this.shape_538.setTransform(1126.6873,340.4);

	this.shape_539 = new cjs.Shape();
	this.shape_539.graphics.f("#000000").s().p("AAXBqIhagZQgegoAag2IADgzIACgcQAAgJAGgIQAJgJANgDQAOgCALAFIAEADQAHAGACAJQACALgIAKQgHAKgOADQgLACgKgEIAAAFIgFBaQABARgGAaQAWAcBEgFQAaAHATASQALgOgjglIgfgnQBKBKgOATQgCACgFAAQgOAAgmgRg");
	this.shape_539.setTransform(1113.4131,353.9479);

	this.shape_540 = new cjs.Shape();
	this.shape_540.graphics.f("#000000").s().p("AAXBtIhUgoQgggrAUgxQgDgfACgVIACgcQAAgIAGgJQAIgKANgCQAPgCAKAFIAEADQAIAGABAJQADAMgJAKQgHAKgOABQgMADgIgEIgBAEIAEBaQABARgBAaQAWAfA/AIQAZALAQAWQAMgMgegqIgbgqQBABTgPAQQgBAAAAAAQgBAAAAABQgBAAgBAAQAAAAgBAAQgMAAgngZg");
	this.shape_540.setTransform(1100.2494,367.5464);

	this.shape_541 = new cjs.Shape();
	this.shape_541.graphics.f("#000000").s().p("AAYBvIhMg1QgggwAMgrQgFgegBgWQAAgSACgKQABgJAFgIQAJgKANgCQAOgCALAGIAEADQAIAGABAJQACALgIAKQgIAJgOADQgMACgIgEIAAADQAHBFAEAUQADARADAaQAWAiA4AUQAWAPANAZQANgKgZgtIgWguQA2BbgRANIgCABQgLAAgmghg");
	this.shape_541.setTransform(1087.0485,381.1848);

	this.shape_542 = new cjs.Shape();
	this.shape_542.graphics.f("#000000").s().p("AgTBQIhEhCQgEgsA9gdQAUgXAPgQQANgLAKgFQAHgFAKgBQANAAAKAJQAMAKABAMIABAFQAAAKgGAHQgIAIgNAAQgMAAgLgJQgJgIgCgJIgCACIg+BDQgKANgWAOQABAfBFAeQASASAKAVQAfgCAQgpQAQgdACgIQgVBVgqAEIgCABQgTAAgXgpg");
	this.shape_542.setTransform(1084.9279,394.3026);

	this.shape_543 = new cjs.Shape();
	this.shape_543.graphics.f("#000000").s().p("AihCaQgKgKgCgMIgBgFQAAgKAGgHQAIgJANAAQANABAJAJQAKAIACAJIACgCIA/hDIAeglQAcgfApgpIAlgnQBChBAUgIQAEAEhOBNIgpAtIg+BCQgoAvgSAZQgUAYgRAOQgNAMgKAFQgGAFgKABQgOgBgKgIg");
	this.shape_543.setTransform(1077.7097,425.325);

	this.shape_544 = new cjs.Shape();
	this.shape_544.graphics.f("#000000").s().p("Ag2DaQgOgEgHgKIgCgFQgFgIADgJQADgLAMgGQALgFANAEQAMADAGAHIABgDQAVhBAGgVIAMguIAZhhIAOgzIAXhtQAFAAgOBtIgOA7IgWBZIgWBaQgIAegIAUIgNAZQgFAHgIAFQgIADgHAAIgKgBg");
	this.shape_544.setTransform(1080.2329,430.4931);

	this.shape_545 = new cjs.Shape();
	this.shape_545.graphics.f("#000000").s().p("AhRDPQgNgGgGgLIgCgEQgDgJAEgJQAEgKANgFQAMgDAMAFQAMAFAEAIIACgDIAnhSIAQgtIAphcIAVgwQAchXAAgUQAFABgTBtQgJAbgOAcIgkBVIggBWQgMAdgLATIgRAXQgEAHgKADQgFACgGAAQgHAAgHgDg");
	this.shape_545.setTransform(1070.9163,418.3889);

	this.shape_546 = new cjs.Shape();
	this.shape_546.graphics.f("#000000").s().p("AhqDAQgMgHgEgMIgCgEQgCgKAFgIQAGgJAMgDQANgCALAHQALAFAEAJIACgCIAxhNIAWgqQAVglAhgwIAcgrQAkhUgDgVQAGABgZBrQgLAagUAaIgxBOQgdA1gOAcQgPAbgOASIgTAUQgGAGgJADIgHAAQgJAAgJgFg");
	this.shape_546.setTransform(1061.7688,406.0329);

	this.shape_547 = new cjs.Shape();
	this.shape_547.graphics.f("#000000").s().p("AhWDNQgNgFgGgLIgCgFQgEgJAEgIQAEgLAMgEQAMgFAMAFQAMAFAFAHIABgCIAlhUIAPguQARgmAggyIAagtQAhhWgCgUQAGAAgXBtQgLAagRAbIgsBQQgZA5gFAfQgLAdgKATQgIAQgIAHQgFAIgJAEQgGACgGAAQgGAAgHgDg");
	this.shape_547.setTransform(1047.0406,425.5691);

	this.shape_548 = new cjs.Shape();
	this.shape_548.graphics.f("#000000").s().p("AhADXQgOgDgIgJIgDgFQgFgIACgJQADgLALgHQALgGANADQAMADAHAHIAAgDIAXhZIAIgwQANgoAfg0QAMgYAMgWQAdhXgBgUQAGABgVBsQgJAbgQAcIgoBSQgRA6ADAhQgHAfgHAUQgGARgGAJQgDAHgIAGQgJAEgJAAIgHgBg");
	this.shape_548.setTransform(1032.4296,444.8618);

	this.shape_549 = new cjs.Shape();
	this.shape_549.graphics.f("#000000").s().p("AgqDeQgOAAgKgJIgDgDQgGgIAAgJQABgLAKgJQAKgHANABQAMAAAIAGIAAgDIAIhbIABgyQAJgoAeg3QAKgZALgXQAahXAAgUQAGABgSBsQgIAbgPAdIgjBUQgLA7AKAhQgCAggCAVQgDARgFAKQgCAJgHAGQgKAHgMAAIgCAAg");
	this.shape_549.setTransform(1017.9624,463.9766);

	this.shape_550 = new cjs.Shape();
	this.shape_550.graphics.f("#000000").s().p("AgrDdIgEgDQgIgGgBgKQgBgLAJgKQAIgJAOgBQAMgCAIAEIAAgDQgEhFgDgVQgCgRgFgiQAEgoAdg5IATgxQAXhZABgTQAFAAgPBtQgHAcgNAdIgeBWQgGA7ATAgQAEAfAAAVIgDAdQgBAIgGAIQgIAKgOABIgFAAQgLAAgIgFg");
	this.shape_550.setTransform(1003.5363,482.8882);

	this.shape_551 = new cjs.Shape();
	this.shape_551.graphics.f("#000000").s().p("AgVDhIgEgCQgIgFgDgJQgDgLAHgLQAHgLANgDQALgEAIADIAAgDIgVhYIgPgyQAAgoAdg7IAPgyQAUhaACgTQAFAAgNBtQgGAdgKAdIgaBXQABA7AaAdQAJAeADAVIACAcQABAJgGAIQgGAMgOADQgFACgFAAQgIAAgGgDg");
	this.shape_551.setTransform(989.1868,501.5592);

	this.shape_552 = new cjs.Shape();
	this.shape_552.graphics.f("#000000").s().p("AgCDiIgFgBQgJgEgDgIQgFgLAFgMQAFgLAMgGQALgFAJABIgCgCIgihUIgXgvQgEgnAbg/IAOgzQAPhaADgTQAFAAgKBuIgNA6IgWBYQAHA5AiAZQAOAcAGAUIAGAcQADAJgEAJQgFAMgNAFQgJAEgIAAIgHgBg");
	this.shape_552.setTransform(975.1664,519.975);

	this.shape_553 = new cjs.Shape();
	this.shape_553.graphics.f("#000000").s().p("AAWDgIgFgBQgKgCgFgHQgGgJACgNQACgMALgIQAKgIAJAAIgCgDQglg5gOgSIgggpQgLgmAUhCIAHg1QAFhcAAgTQAGAAADBuIgGA8IgKBaQAQA2ApARQATAZAKASQAJAQADAKQAEAIgCAKQgDANgKAIQgMAIgLAAIgBAAg");
	this.shape_553.setTransform(966.3753,515.1014);

	this.shape_554 = new cjs.Shape();
	this.shape_554.graphics.f("#000000").s().p("AAMDiIgFgBQgJgCgEgIQgGgJADgNQAEgMALgHQAKgHAJABIgBgDIgshPIgdgsQgJgnAThBIAGg0IAHhvQAGgBABBuIgFA8IgKBaQANA5AlATQARAbAJATQAHARACAKQADAJgCAJQgFANgLAHQgKAFgJAAIgFAAg");
	this.shape_554.setTransform(943.7177,515.3459);

	this.shape_555 = new cjs.Shape();
	this.shape_555.graphics.f("#000000").s().p("AgFDlIgFgCQgIgEgEgIQgFgLAGgMQAGgLAMgFQAKgFAJACIgBgDIgehVIgVgvQgIgnANhAIAEg1QAFhcAFgTQAGAAgCBuIgCA8IgGBaQALA8AbAYQAMAdAGAVQAEARAAALQADAIgFAJQgGAMgMAFQgIADgHAAQgEAAgFgBg");
	this.shape_555.setTransform(927.0324,497.7342);

	this.shape_556 = new cjs.Shape();
	this.shape_556.graphics.f("#000000").s().p("AgRDkIgEgCQgIgGgCgJQgDgLAHgLQAIgJANgEQALgDAJAEIgBgDQgLhEgGgWQgDgQgJggQgFgpAGg8IABg2QAEhcAJgUQAEAAgDBuQgBAdABAfIgBBbQAIA9AQAcQAHAfADAVIAAAcQAAAJgFAIQgIALgNADIgJACQgIAAgHgEg");
	this.shape_556.setTransform(909.6321,479.9061);

	this.shape_557 = new cjs.Shape();
	this.shape_557.graphics.f("#000000").s().p("AgXDhIgEgEQgHgGAAgJQgCgLAKgKQAIgJAOgBQALgBAIAFIAAgDQAAhFgDgWIgFgwIgDhlQgBgbAAgbQADhcANgUQAFAAgHBuQgBAdAEAfIAEBbQAEA+AGAfIABA1IgEAbQgBAJgHAIQgJAJgOABIgCAAQgMAAgJgGg");
	this.shape_557.setTransform(891.7148,461.8313);

	this.shape_558 = new cjs.Shape();
	this.shape_558.graphics.f("#000000").s().p("AgZDfIgEgEQgGgGgBgKQAAgLAJgJQAJgIAOgBQAMAAAHAFIAAgDQADhFgCgXIgDgvIAAhlIAAg2QAEhcAMgTQAGAAgIBuQgBAcADAgIABBbQACA+AEAfQABAfgCAVQgCASgEAKQgBAJgHAHQgJAJgNAAQgOAAgKgHg");
	this.shape_558.setTransform(874.8019,443.825);

	this.shape_559 = new cjs.Shape();
	this.shape_559.graphics.f("#000000").s().p("AgGDlQgOAAgJgIIgEgEQgGgGAAgKQAAgLAKgJQAKgIANAAQAMAAAHAGIAAgDIAFhbIAAgwIAChkIABg2QAGhcALgUQAFAAgIBuQgBAdABAfIgBBcIACBdQAAAfgDAVIgHAcQgCAIgHAHQgKAJgLAAIgCgBg");
	this.shape_559.setTransform(858.112,425.7514);

	this.shape_560 = new cjs.Shape();
	this.shape_560.graphics.f("#000000").s().p("AgMDkQgPAAgJgJIgDgEQgGgHAAgJQABgLAKgJQAKgHAOABQALAAAHAGIAAgDQAJhEAAgXIACgvIAFhkIADg2QAHhcAKgTQAFAAgIBuQgCAcABAgIgEBbIgCBdQgCAfgEAVQgDASgFAJQgCAJgIAGQgKAHgLAAIgBAAg");
	this.shape_560.setTransform(841.6851,407.6766);

	this.shape_561 = new cjs.Shape();
	this.shape_561.graphics.f("#000000").s().p("AgUDjQgOgBgJgJIgDgEQgFgIAAgJQABgLALgIQAKgHAOABQAMACAGAGIAAgDQAMhEABgXIAEgvIAIhkIAEg1QAJhcAIgTQAGAAgIBuIgEA8IgGBbIgGBdQgDAfgFAVQgEARgFAKQgCAIgJAGQgIAGgLAAIgEAAg");
	this.shape_561.setTransform(825.2598,389.5813);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_477,p:{x:1495.4027,y:339.7472}}]}).to({state:[{t:this.shape_478}]},1).to({state:[{t:this.shape_479,p:{x:1495.8747,y:339.5472}}]},1).to({state:[{t:this.shape_480,p:{x:1496.1247,y:339.4972}}]},1).to({state:[{t:this.shape_481,p:{x:1496.3747,y:339.3972}}]},1).to({state:[{t:this.shape_482}]},1).to({state:[{t:this.shape_483}]},1).to({state:[{t:this.shape_484}]},1).to({state:[{t:this.shape_485,p:{x:1497.3247,y:339.0972}}]},1).to({state:[{t:this.shape_478}]},1).to({state:[{t:this.shape_486}]},1).to({state:[{t:this.shape_487}]},1).to({state:[{t:this.shape_488}]},1).to({state:[{t:this.shape_482}]},1).to({state:[{t:this.shape_489,p:{x:1498.812,y:338.6472}}]},1).to({state:[{t:this.shape_484}]},1).to({state:[{t:this.shape_490,p:{x:1499.2747,y:338.4972}}]},1).to({state:[{t:this.shape_478}]},1).to({state:[{t:this.shape_486}]},1).to({state:[{t:this.shape_487}]},1).to({state:[{t:this.shape_488}]},1).to({state:[{t:this.shape_482}]},1).to({state:[{t:this.shape_491,p:{x:1500.762,y:338.0472}}]},1).to({state:[{t:this.shape_484}]},1).to({state:[{t:this.shape_492,p:{x:1501.2247,y:337.8972}}]},1).to({state:[{t:this.shape_478}]},1).to({state:[{t:this.shape_493,p:{x:1501.7247,y:337.7472}}]},1).to({state:[{t:this.shape_494}]},1).to({state:[{t:this.shape_487}]},1).to({state:[{t:this.shape_495}]},1).to({state:[{t:this.shape_484}]},1).to({state:[{t:this.shape_479,p:{x:1502.9247,y:337.3472}}]},1).to({state:[{t:this.shape_478}]},1).to({state:[{t:this.shape_496}]},1).to({state:[{t:this.shape_480,p:{x:1503.6747,y:337.1472}}]},1).to({state:[{t:this.shape_497}]},1).to({state:[{t:this.shape_482}]},1).to({state:[{t:this.shape_489,p:{x:1504.4157,y:336.8972}}]},1).to({state:[{t:this.shape_484}]},1).to({state:[{t:this.shape_490,p:{x:1504.8747,y:336.7472}}]},1).to({state:[{t:this.shape_478}]},1).to({state:[{t:this.shape_486}]},1).to({state:[{t:this.shape_487}]},1).to({state:[{t:this.shape_488}]},1).to({state:[{t:this.shape_482}]},1).to({state:[{t:this.shape_498,p:{x:1506.362,y:336.2972}}]},1).to({state:[{t:this.shape_484}]},1).to({state:[{t:this.shape_490,p:{x:1506.8247,y:336.1472}}]},1).to({state:[{t:this.shape_478}]},1).to({state:[{t:this.shape_486}]},1).to({state:[{t:this.shape_487}]},1).to({state:[{t:this.shape_499,p:{x:1507.8247,y:335.8472}}]},1).to({state:[{t:this.shape_500}]},1).to({state:[{t:this.shape_491,p:{x:1508.312,y:335.6972}}]},1).to({state:[{t:this.shape_501}]},1).to({state:[{t:this.shape_492,p:{x:1508.7747,y:335.5472}}]},1).to({state:[{t:this.shape_502}]},1).to({state:[{t:this.shape_503}]},1).to({state:[{t:this.shape_481,p:{x:1509.5247,y:335.2972}}]},1).to({state:[{t:this.shape_487}]},1).to({state:[{t:this.shape_504}]},1).to({state:[{t:this.shape_484}]},1).to({state:[{t:this.shape_485,p:{x:1510.4747,y:334.9972}}]},1).to({state:[{t:this.shape_478}]},1).to({state:[{t:this.shape_485,p:{x:1510.9747,y:334.8472}}]},1).to({state:[{t:this.shape_487}]},1).to({state:[{t:this.shape_488}]},1).to({state:[{t:this.shape_482}]},1).to({state:[{t:this.shape_489,p:{x:1511.962,y:334.5472}}]},1).to({state:[{t:this.shape_484}]},1).to({state:[{t:this.shape_490,p:{x:1512.4247,y:334.3972}}]},1).to({state:[{t:this.shape_478}]},1).to({state:[{t:this.shape_486}]},1).to({state:[{t:this.shape_487}]},1).to({state:[{t:this.shape_488}]},1).to({state:[{t:this.shape_482}]},1).to({state:[{t:this.shape_498,p:{x:1513.912,y:333.9472}}]},1).to({state:[{t:this.shape_484}]},1).to({state:[{t:this.shape_492,p:{x:1514.3747,y:333.7972}}]},1).to({state:[{t:this.shape_478}]},1).to({state:[{t:this.shape_493,p:{x:1514.8747,y:333.6472}}]},1).to({state:[{t:this.shape_487}]},1).to({state:[{t:this.shape_499,p:{x:1515.3747,y:333.4972}}]},1).to({state:[{t:this.shape_505}]},1).to({state:[{t:this.shape_491,p:{x:1515.862,y:333.3472}}]},1).to({state:[{t:this.shape_477,p:{x:1516.1027,y:333.2972}}]},1).to({state:[{t:this.shape_506}]},1).to({state:[{t:this.shape_507}]},1).to({state:[{t:this.shape_508}]},1).to({state:[{t:this.shape_509}]},1).to({state:[{t:this.shape_510}]},1).to({state:[{t:this.shape_511}]},1).to({state:[{t:this.shape_512}]},1).to({state:[{t:this.shape_513}]},1).to({state:[{t:this.shape_514}]},1).to({state:[{t:this.shape_515}]},1).to({state:[{t:this.shape_516}]},1).to({state:[{t:this.shape_517}]},1).to({state:[{t:this.shape_518}]},1).to({state:[{t:this.shape_519}]},1).to({state:[{t:this.shape_520}]},1).to({state:[{t:this.shape_521}]},1).to({state:[{t:this.shape_522}]},1).to({state:[{t:this.shape_523}]},1).to({state:[{t:this.shape_524}]},1).to({state:[{t:this.shape_525}]},1).to({state:[{t:this.shape_526}]},1).to({state:[{t:this.shape_527}]},1).to({state:[{t:this.shape_528}]},1).to({state:[{t:this.shape_529}]},1).to({state:[{t:this.shape_530}]},1).to({state:[{t:this.shape_531}]},1).to({state:[{t:this.shape_532}]},1).to({state:[{t:this.shape_533}]},1).to({state:[{t:this.shape_534}]},1).to({state:[{t:this.shape_535}]},1).to({state:[{t:this.shape_536}]},1).to({state:[{t:this.shape_537}]},1).to({state:[{t:this.shape_538}]},1).to({state:[{t:this.shape_539}]},1).to({state:[{t:this.shape_540}]},1).to({state:[{t:this.shape_541}]},1).to({state:[{t:this.shape_542}]},1).to({state:[{t:this.shape_543}]},1).to({state:[{t:this.shape_477,p:{x:1089.712,y:442.2972}}]},1).to({state:[{t:this.shape_544}]},1).to({state:[{t:this.shape_545}]},1).to({state:[{t:this.shape_546}]},1).to({state:[{t:this.shape_547}]},1).to({state:[{t:this.shape_548}]},1).to({state:[{t:this.shape_549}]},1).to({state:[{t:this.shape_550}]},1).to({state:[{t:this.shape_551}]},1).to({state:[{t:this.shape_552}]},1).to({state:[{t:this.shape_553}]},1).to({state:[{t:this.shape_554}]},1).to({state:[{t:this.shape_555}]},1).to({state:[{t:this.shape_556}]},1).to({state:[{t:this.shape_557}]},1).to({state:[{t:this.shape_558}]},1).to({state:[{t:this.shape_559}]},1).to({state:[{t:this.shape_560}]},1).to({state:[{t:this.shape_561}]},1).to({state:[{t:this.shape_477,p:{x:808.862,y:371.4972}}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.shape_478).wait(1).to({_off:false},0).to({_off:true},1).wait(7).to({_off:false,x:1497.5747,y:339.0472},0).to({_off:true},1).wait(7).to({_off:false,x:1499.5247,y:338.4472},0).to({_off:true},1).wait(7).to({_off:false,x:1501.4747,y:337.8472},0).to({_off:true},1).wait(6).to({_off:false,x:1503.1747,y:337.2972},0).to({_off:true},1).wait(7).to({_off:false,x:1505.1247,y:336.6972},0).to({_off:true},1).wait(7).to({_off:false,x:1507.0747,y:336.0972},0).to({_off:true},1).wait(14).to({_off:false,x:1510.7247,y:334.9472},0).to({_off:true},1).wait(7).to({_off:false,x:1512.6747,y:334.3472},0).to({_off:true},1).wait(7).to({_off:false,x:1514.6247,y:333.7472},0).to({_off:true},1).wait(64));
	this.timeline.addTween(cjs.Tween.get(this.shape_482).wait(5).to({_off:false},0).to({_off:true},1).wait(7).to({_off:false,x:1498.558,y:338.7472},0).to({_off:true},1).wait(7).to({_off:false,x:1500.508,y:338.1472},0).to({_off:true},1).wait(14).to({_off:false,x:1504.158,y:336.9972},0).to({_off:true},1).wait(7).to({_off:false,x:1506.108,y:336.3972},0).to({_off:true},1).wait(22).to({_off:false,x:1511.708,y:334.6472},0).to({_off:true},1).wait(7).to({_off:false,x:1513.658,y:334.0472},0).to({_off:true},1).wait(68));
	this.timeline.addTween(cjs.Tween.get(this.shape_484).wait(7).to({_off:false},0).to({_off:true},1).wait(7).to({_off:false,x:1499.062,y:338.5972},0).to({_off:true},1).wait(7).to({_off:false,x:1501.012,y:337.9972},0).to({_off:true},1).wait(6).to({_off:false,x:1502.712,y:337.4472},0).to({_off:true},1).wait(7).to({_off:false,x:1504.662,y:336.8472},0).to({_off:true},1).wait(7).to({_off:false,x:1506.612,y:336.2472},0).to({_off:true},1).wait(14).to({_off:false,x:1510.262,y:335.0972},0).to({_off:true},1).wait(7).to({_off:false,x:1512.212,y:334.4972},0).to({_off:true},1).wait(7).to({_off:false,x:1514.162,y:333.8972},0).to({_off:true},1).wait(66));
	this.timeline.addTween(cjs.Tween.get(this.shape_486).wait(10).to({_off:false},0).to({_off:true},1).wait(7).to({_off:false,x:1499.7747,y:338.3472},0).to({_off:true},1).wait(22).to({_off:false,x:1505.3747,y:336.5972},0).to({_off:true},1).wait(7).to({_off:false,x:1507.3247,y:335.9972},0).to({_off:true},1).wait(22).to({_off:false,x:1512.9247,y:334.2472},0).to({_off:true},1).wait(71));
	this.timeline.addTween(cjs.Tween.get(this.shape_487).wait(11).to({_off:false},0).to({_off:true},1).wait(7).to({_off:false,x:1500.0247,y:338.2972},0).to({_off:true},1).wait(8).to({_off:false,x:1502.2247,y:337.5972},0).to({_off:true},1).wait(13).to({_off:false,x:1505.6247,y:336.5472},0).to({_off:true},1).wait(7).to({_off:false,x:1507.5747,y:335.9472},0).to({_off:true},1).wait(8).to({_off:false,x:1509.7747,y:335.2472},0).to({_off:true},1).wait(5).to({_off:false,x:1511.2247,y:334.7972},0).to({_off:true},1).wait(7).to({_off:false,x:1513.1747,y:334.1972},0).to({_off:true},1).wait(7).to({_off:false,x:1515.1247,y:333.5972},0).to({_off:true},1).wait(62));
	this.timeline.addTween(cjs.Tween.get(this.shape_488).wait(12).to({_off:false},0).to({_off:true},1).wait(7).to({_off:false,x:1500.2747,y:338.1972},0).to({_off:true},1).wait(22).to({_off:false,x:1505.8747,y:336.4472},0).to({_off:true},1).wait(22).to({_off:false,x:1511.4747,y:334.6972},0).to({_off:true},1).wait(7).to({_off:false,x:1513.4247,y:334.0972},0).to({_off:true},1).wait(69));

	// Каркас_45
	this.shape_562 = new cjs.Shape();
	this.shape_562.graphics.f("#000000").s().p("AhOAvQBChXAyg7QAVgVAYAAIAHgMQAGgGAHgCIAJgBQAHAAAFADIAJAGQAJAJAAANQAAANgJAJQgJAJgMAAQgNAAgJgJQgFgFgDgHIgBgKIAAAAIgBAAQgPAEgQAPQgUATg1BHQhPBlgmAqQgDgFBChag");
	this.shape_562.setTransform(1575.0913,256.325);

	this.shape_563 = new cjs.Shape();
	this.shape_563.graphics.f("#000000").s().p("AhOAwQBBhYAzg7QAUgVAYAAIAHgMQAGgGAIgCIAIgBQAHAAAGADIAJAGQAJAJAAANQAAANgJAJQgJAJgNAAQgMAAgKgJQgFgFgCgHIgBgKIgBAAQgPAEgRAPQgUATg0BHQhQBlglAqQgEgFBDhZg");
	this.shape_563.setTransform(1575.1609,256.175);
	this.shape_563._off = true;

	this.shape_564 = new cjs.Shape();
	this.shape_564.graphics.f("#000000").s().p("AhOAvQBBhXAzg7QAUgVAYAAIAHgMQAGgGAIgCIAIgBQAHAAAGADIAJAGQAJAJAAANQAAANgJAJQgJAJgNAAQgMAAgKgJQgFgFgCgHQgCgFABgFIgBAAQgPAEgRAPQgUATg0BHQhQBlglAqQgEgFBDhag");
	this.shape_564.setTransform(1575.2608,256.075);
	this.shape_564._off = true;

	this.shape_565 = new cjs.Shape();
	this.shape_565.graphics.f("#000000").s().p("AhOAwQBBhYAzg7QAUgVAYAAIAHgMQAGgGAIgCIAIgBQAHAAAGADIAJAGQAJAJAAANQAAANgJAJQgJAJgNAAQgMAAgKgJQgFgFgCgHIgBgKIgBAAIAAAAQgPAEgRAPQgUATg0BHQhQBlglAqQgEgFBDhZg");
	this.shape_565.setTransform(1575.3608,255.925);
	this.shape_565._off = true;

	this.shape_566 = new cjs.Shape();
	this.shape_566.graphics.f("#000000").s().p("AhOAwQBBhYAzg7QAUgVAYAAIAHgMQAGgGAIgCIAIgBQAHAAAGADIAJAGQAJAJAAANQAAANgJAJQgJAJgNAAQgMAAgKgJQgFgFgCgHIgBgKIgBAAIAAAAQgPAFgRAOQgUATg0BHQhQBlglAqQgEgFBDhZg");
	this.shape_566.setTransform(1575.7108,255.425);
	this.shape_566._off = true;

	this.shape_567 = new cjs.Shape();
	this.shape_567.graphics.f("#000000").s().p("AhOAwQBBhYAzg7QAUgVAYAAIAHgMQAGgGAIgCIAIgBQAHAAAGADIAJAGQAJAJAAANQAAANgJAJQgJAJgNAAQgMAAgKgJQgFgFgCgHIgBgKIgBAAIAAAAQgOAEgSAPQgUATg0BHQhQBlglAqQgEgFBDhZg");
	this.shape_567.setTransform(1575.9608,255.075);
	this.shape_567._off = true;

	this.shape_568 = new cjs.Shape();
	this.shape_568.graphics.f("#000000").s().p("AhOAwQBBhYAzg7QAUgVAYAAIAHgMQAGgGAIgCIAIgBQAHAAAGADIAJAGQAJAJAAANQAAANgJAJQgJAJgNAAQgMAAgKgJQgFgFgCgHQgCgFABgFIgBAAIAAAAQgPAEgRAPQgUATg0BHQhQBlglAqQgEgFBDhZg");
	this.shape_568.setTransform(1576.6608,254.125);

	this.shape_569 = new cjs.Shape();
	this.shape_569.graphics.f("#000000").s().p("AhOAwQBBhYAzg7QAUgVAYAAIAHgMQAGgGAIgBIAIgCQAHAAAGADIAJAGQAJAJAAANQAAANgJAJQgJAJgNAAQgMAAgKgJQgFgFgCgHIgBgKIgBAAIAAAAQgPAFgRAOQgUATg0BHQhQBlglAqQgEgFBDhZg");
	this.shape_569.setTransform(1577.0609,253.475);

	this.shape_570 = new cjs.Shape();
	this.shape_570.graphics.f("#000000").s().p("AhOAvQBBhXAzg7QAUgVAYAAIAHgMQAGgGAIgCIAIgBQAHAAAGADIAJAGQAJAJAAANQAAANgJAJQgJAJgNAAQgMAAgKgJQgFgFgCgHQgCgFABgFIgBAAIAAAAQgPAEgRAPQgUATg0BHQhQBlglAqQgEgFBDhag");
	this.shape_570.setTransform(1577.2608,253.275);

	this.shape_571 = new cjs.Shape();
	this.shape_571.graphics.f("#000000").s().p("AhOAwQBBhYAzg7QAUgVAYAAIAHgMQAGgGAIgCIAIgBQAHAAAGADIAJAGQAJAJAAANQAAANgJAJQgJAJgNAAQgMAAgKgJQgFgFgCgHQgCgFABgFIgBAAQgPAEgRAPQgUATg0BHQhQBlglAqQgEgFBDhZg");
	this.shape_571.setTransform(1578.0109,252.175);

	this.shape_572 = new cjs.Shape();
	this.shape_572.graphics.f("#000000").s().p("AhOAwQBBhYAzg7QAUgVAYAAIAHgMQAGgGAIgCIAIgBQAHAAAGADIAJAGQAJAJAAANQAAANgJAJQgJAJgNAAQgMAAgKgJQgFgFgCgHIgBgKIgBAAQgPAFgRAOQgUATg0BHQhQBlglAqQgEgFBDhZg");
	this.shape_572.setTransform(1578.2609,251.775);

	this.shape_573 = new cjs.Shape();
	this.shape_573.graphics.f("#000000").s().p("AhOAvQBBhXAzg7QAUgVAYAAIAHgMQAGgGAIgCIAIgBQAHAAAGADIAJAGQAJAJAAANQAAANgJAJQgJAJgNAAQgMAAgKgJQgFgFgCgHIgBgKIgBAAIAAAAQgPAEgRAPQgUATg0BHQhQBlglAqQgEgFBDhag");
	this.shape_573.setTransform(1579.2608,250.475);

	this.shape_574 = new cjs.Shape();
	this.shape_574.graphics.f("#000000").s().p("AhOAwQBBhYAzg7QAUgVAYAAIAHgMQAGgGAIgCIAIgBQAHAAAGADIAJAGQAJAJAAANQAAANgJAJQgJAJgNAAQgMAAgKgJQgFgFgCgHIgBgKIgBAAIAAAAQgOAFgSAOQgUATg0BHQhQBlglAqQgEgFBDhZg");
	this.shape_574.setTransform(1581.0608,247.875);

	this.shape_575 = new cjs.Shape();
	this.shape_575.graphics.f("#000000").s().p("AhOAvQBBhYAzg6QAUgVAYAAIAHgMQAGgGAIgCIAIgBQAHAAAGADIAJAGQAJAJAAANQAAANgJAJQgJAJgNAAQgMAAgKgJQgFgFgCgHIgBgKIgBAAIAAAAQgPAEgRAPQgUATg0BHQhQBkglArQgEgFBDhag");
	this.shape_575.setTransform(1582.4608,245.975);

	this.shape_576 = new cjs.Shape();
	this.shape_576.graphics.f("#000000").s().p("AhNAxQBBhYAxg8QAUgVAYgBIAHgMQAGgGAIgCIAIgBIAMACIAKAHQAJAJAAAMQABANgKAJQgJAJgMAAQgNAAgJgJQgFgEgCgHIgCgKIgBAAQgPAEgQAPQgUAUgzBIQhPBlglAqQgFgEBDhag");
	this.shape_576.setTransform(1571.7406,236.35);

	this.shape_577 = new cjs.Shape();
	this.shape_577.graphics.f("#000000").s().p("AhMAyQBBhYAvg9QAUgVAYgCIAHgMQAFgGAIgCIAIgBQAHAAAGACIAJAGQAJAJABAMQAAANgJAKQgIAJgNAAQgMABgKgJQgFgFgCgGIgCgLIgBAAQgPAGgQAPQgTAUgyBHQhPBmglAqQgFgEBDhag");
	this.shape_577.setTransform(1561.0358,226.725);

	this.shape_578 = new cjs.Shape();
	this.shape_578.graphics.f("#000000").s().p("AhLAzIBuiWQAUgVAYgDQABgGAFgFQAGgHAIgCIAIgBQAHgBAFADIAKAGQAJAIABANQAAANgIAJQgJAJgNABQgMAAgKgIQgFgFgCgGIgCgLIgBABIAAAAQgOAFgRAPQgSAVgxBIQhPBmglAqQgFgEBDhag");
	this.shape_578.setTransform(1550.3358,217.1208);

	this.shape_579 = new cjs.Shape();
	this.shape_579.graphics.f("#000000").s().p("AhKA0IBsiXQATgWAYgCIAGgMQAGgHAIgCIAIgCQAHAAAGACIAJAGQAJAJABAMQABANgIAKQgJAJgMABQgNABgJgJQgGgFgCgGIgDgKIAAAAQgOAGgQAPQgTAVgvBJQhPBmglArQgFgFBDhag");
	this.shape_579.setTransform(1539.6161,207.525);

	this.shape_580 = new cjs.Shape();
	this.shape_580.graphics.f("#000000").s().p("AhIA2QBAhZAqg/QASgXAYgDIAGgMQAGgGAIgDIAIgCQAHAAAFACIAKAGQAKAIAAAMQACANgJAKQgIAJgNACQgMABgKgJQgGgFgCgGQgDgFABgFIgBAAQgPAGgPAQQgSAVgtBKQhQBnglAqQgEgFBDhZg");
	this.shape_580.setTransform(1528.8971,197.92);

	this.shape_581 = new cjs.Shape();
	this.shape_581.graphics.f("#000000").s().p("AhHA3QBAhYAohBQASgXAYgEIAGgMQAFgGAIgDIAIgCQAHAAAGACIAJAFQAKAJABAMQABANgIAKQgIAKgNAAQgMACgKgJQgFgEgDgHQgDgEAAgGIAAAAQgOAHgQAQQgSAWgrBLQhQBmglAqQgEgFBDhZg");
	this.shape_581.setTransform(1518.1914,188.32);

	this.shape_582 = new cjs.Shape();
	this.shape_582.graphics.f("#000000").s().p("AhGA4QBAhYAmhCQASgXAXgEQACgHAEgGQAGgGAHgDIAIgCQAHAAAGABIAKAGQAKAIABAMQABANgIAKQgIAKgMABQgNACgJgJQgGgEgDgGQgDgFAAgFIAAAAQgOAHgPAQQgSAWgqBMQhQBmglAqQgEgEBDhag");
	this.shape_582.setTransform(1507.4727,178.7438);

	this.shape_583 = new cjs.Shape();
	this.shape_583.graphics.f("#000000").s().p("AhFA5QBAhYAkhDQARgYAYgEIAFgMQAGgHAHgDIAIgCQAHAAAGABQAFACAFAEQAKAHABANQACANgIAKQgIAKgMABQgNACgJgIQgGgFgDgGQgDgEAAgGIgBAAQgOAHgOARQgRAWgpBNQhQBmgkAqQgFgEBDhag");
	this.shape_583.setTransform(1496.7726,169.1438);

	this.shape_584 = new cjs.Shape();
	this.shape_584.graphics.f("#000000").s().p("AhEA6QBBhYAihEQAQgYAYgFIAFgMQAFgHAIgDIAIgCQAHAAAGABIAKAFQAKAIABAMQACANgIAKQgHALgNABQgMACgKgIQgGgFgDgFIgDgKIAAAAIgBAAQgNAHgPARQgQAWgoBOQhPBnglApQgEgEBChag");
	this.shape_584.setTransform(1486.0482,159.5438);

	this.shape_585 = new cjs.Shape();
	this.shape_585.graphics.f("#000000").s().p("AhDA7QBBhZAghDQAQgZAXgGIAFgMQAGgHAHgDIAIgCIANABIAKAFQAKAHACANQACAMgIALQgHAKgNACQgMACgKgIQgGgEgDgHQgDgEAAgFIgBAAQgOAHgOARQgPAYgnBNQhPBoglApQgEgFBChZg");
	this.shape_585.setTransform(1475.3405,149.95);

	this.shape_586 = new cjs.Shape();
	this.shape_586.graphics.f("#000000").s().p("AhCA8QBBhYAehGQAPgYAYgGQABgGAEgHQAEgGAIgEIAIgCQAHgBAGABIAKAFQAKAIACAMQADANgIAKQgIALgMACQgMACgKgIQgGgEgDgGIgEgKIAAAAQgOAIgOARQgPAYglBOQhPBnglAqQgEgEBChag");
	this.shape_586.setTransform(1464.6155,140.3625);

	this.shape_587 = new cjs.Shape();
	this.shape_587.graphics.f("#000000").s().p("AhAA9QBAhYAchGQAPgaAYgFQABgHADgGQAFgHAHgEIAJgCQAHgBAFACQAGABAEADQALAIACAMQADANgIAKQgHALgMACQgNACgJgIQgHgDgDgHQgDgDgBgGIAAAAQgOAIgNASQgPAXgjBQQhQBmgkAqQgFgEBDhag");
	this.shape_587.setTransform(1453.892,130.7679);

	this.shape_588 = new cjs.Shape();
	this.shape_588.graphics.f("#000000").s().p("Ag/A+QA/hYAbhHQAPgZAXgHIAEgNQAFgGAHgEIAJgCQAHgCAFACIALAEQAKAIACAMQADANgHAKQgHALgNACQgMADgKgIQgGgEgDgGIgEgKIgBAAIAAABQgNAHgNATQgOAYgiBQQhQBmgkAqQgFgEBDhag");
	this.shape_588.setTransform(1443.1536,121.1875);

	this.shape_589 = new cjs.Shape();
	this.shape_589.graphics.f("#000000").s().p("Ag+A/QBAhZAYhHQAPgaAXgHIAEgMQAEgIAIgDIAIgDQAHgBAGABIAKAFQALAHACAMQADANgHAKQgHALgMADQgNACgJgHIgKgKIgEgJIgBAAQgNAIgMASQgPAZggBQQhPBnglAqQgEgEBChag");
	this.shape_589.setTransform(1432.4186,111.6125);

	this.shape_590 = new cjs.Shape();
	this.shape_590.graphics.f("#000000").s().p("Ag9BAQBAhZAWhIQAOgZAXgIIAEgNQAEgHAHgEIAJgCQAGgCAHABIAKAFQALAHADAMQACANgGAKQgHALgMADQgNADgJgIQgHgDgDgGIgFgKIAAAAIAAABQgOAIgMATQgNAYgfBRQhPBngkAqQgFgEBChag");
	this.shape_590.setTransform(1421.7204,102.03);

	this.shape_591 = new cjs.Shape();
	this.shape_591.graphics.f("#000000").s().p("Ag7BAQA/hZAVhIQANgZAXgJIAEgMQAEgIAHgEIAIgCIANgBIAKAEQAMAHACAMQADANgGALQgHAKgMADQgMADgKgHQgGgDgEgGIgFgJIAAAAQgNAJgMASQgNAZgdBSQhPBnglAqQgEgFBChag");
	this.shape_591.setTransform(1410.9831,92.475);

	this.shape_592 = new cjs.Shape();
	this.shape_592.graphics.f("#000000").s().p("Ag6BBQA/hYAThJQAMgbAXgIQAAgGAEgHQAEgIAHgEIAIgCIANAAIAKADQAMAHACAMQAEAMgHAMQgGALgMACQgNAEgJgHQgHgEgEgGQgDgDgBgGIgBABQgMAJgMASQgNAZgbBTQhPBmglAqQgEgDBChbg");
	this.shape_592.setTransform(1400.2585,82.9);

	this.shape_593 = new cjs.Shape();
	this.shape_593.graphics.f("#000000").s().p("Ag4BCQA/hYAQhKQAMgbAXgIIADgNQAEgIAHgEIAJgDIAMgBIALAEQALAHADAMQADAMgGALQgGAMgMADQgMADgKgHQgGgDgFgGIgEgJIgBAAIAAAAQgMAJgMAUQgMAZgaBTQhOBnglAqQgFgFBDhag");
	this.shape_593.setTransform(1389.5107,73.325);

	this.shape_594 = new cjs.Shape();
	this.shape_594.graphics.f("#000000").s().p("Ag3BDQBEhWANhKQALgaAXgKQAAgGADgHQAEgHAHgFIAJgDIAMgBIALAEQALAGADAMQAEANgGALQgGALgMAEQgNADgJgHQgHgDgEgGQgEgDgBgGIAAAAIgBABQgMAJgLATQgMAagaBTQhSBjgmApQgFgFBGhXg");
	this.shape_594.setTransform(1377.0376,87.375);

	this.shape_595 = new cjs.Shape();
	this.shape_595.graphics.f("#000000").s().p("Ag1BDQBHhTAKhLQAMgaAWgKIADgNQAEgHAHgFIAIgDQAHgCAGABIALAEQAKAGAEAMQAEAMgGALQgGAMgMADQgMAEgKgHQgGgDgFgFIgFgKIAAABQgNAKgKATQgMAZgZBTQhWBggoAoQgEgFBJhVg");
	this.shape_595.setTransform(1364.547,101.4583);

	this.shape_596 = new cjs.Shape();
	this.shape_596.graphics.f("#000000").s().p("Ag0BEQBKhQAIhLQAMgbAWgKQAAgGADgHQADgIAHgEIAIgDQAHgCAGAAIALAEQALAGAEAMQAEAMgGALQgGAMgMADQgMAFgKgHQgHgDgEgGQgEgDgBgGIgBAAIAAABQgMAJgKAUQgMAZgYBUQhaBcgpAmQgFgFBNhSg");
	this.shape_596.setTransform(1352.0676,115.52);

	this.shape_597 = new cjs.Shape();
	this.shape_597.graphics.f("#000000").s().p("AgyBFQBNhNAFhMQALgbAXgKIACgNQAEgIAGgFIAJgCQAGgCAGgBIALAEQAMAGADAMQAFAMgGALQgGAMgMADQgMAFgKgHQgHgCgEgGQgEgDgBgGIgBAAIAAABQgMAJgKAUQgLAagYBTQheBZgqAjQgEgFBQhOg");
	this.shape_597.setTransform(1339.564,129.6);

	this.shape_598 = new cjs.Shape();
	this.shape_598.graphics.f("#000000").s().p("AgwBGQBQhKADhNQAKgcAXgJIACgOQADgHAHgFIAIgDQAHgCAGAAIALADQALAGAEAMQAFAMgGALQgGAMgLAEQgMAEgLgGQgGgDgFgFIgFgJIAAAAIgBAAQgMAKgKATQgLAbgXBTQhgBVgtAiQgDgFBThLg");
	this.shape_598.setTransform(1327.0442,143.7);

	this.shape_599 = new cjs.Shape();
	this.shape_599.graphics.f("#000000").s().p("AgvBGQBThHAAhNQALgbAWgLQAAgGACgHQAEgIAGgEIAIgEQAHgCAGAAIALADQALAGAEALQAFAMgFAMQgFAMgMAEQgMAEgLgGQgHgDgEgFIgGgJIAAABIAAAAQgMAKgKAUQgLAZgWBUQhkBRgtAhQgEgGBWhIg");
	this.shape_599.setTransform(1314.5247,157.825);

	this.shape_600 = new cjs.Shape();
	this.shape_600.graphics.f("#000000").s().p("AguBHQBWhEgChOQAKgbAWgLIACgNQADgIAHgFIAIgDQAGgCAHAAIAKADQAMAFAEALQAGAMgGAMQgFAMgMAEQgMAFgLgGQgGgDgFgFIgFgJIgBABQgMAKgJAUQgLAagVBUQhnBMgvAfQgDgGBYhEg");
	this.shape_600.setTransform(1302.0016,171.925);

	this.shape_601 = new cjs.Shape();
	this.shape_601.graphics.f("#000000").s().p("AgsBIQBZhBgFhOQAKgbAWgLQgBgGADgIQADgHAGgFIAIgEIANgDIAKAEQAMAEAFAMQAEAMgEAMQgFALgMAFQgLAGgMgGQgGgDgFgFIgGgJIAAAAQgMALgJATQgLAbgUBUQhqBIgwAdQgDgFBbhCg");
	this.shape_601.setTransform(1289.4577,186);

	this.shape_602 = new cjs.Shape();
	this.shape_602.graphics.f("#000000").s().p("AgqBJQBag9gGhQQAJgbAWgLIACgNQADgIAGgFIAIgEIAMgDIALADQAMAFAFALQAFAMgFAMQgFAMgLAFQgMAEgLgFIgMgHIgFgJIgBAAQgMALgJAUQgKAagTBUQhtBEgyAbQgCgFBeg+g");
	this.shape_602.setTransform(1276.9104,200.125);

	this.shape_603 = new cjs.Shape();
	this.shape_603.graphics.f("#000000").s().p("AgoBKQBdg6gKhQQAKgcAVgLIACgNQADgIAGgFIAIgEQAHgDAFAAIALADQAMAEAFAMQAFAMgEALQgFAMgMAFQgLAFgMgFQgGgCgFgGQgEgDgCgFIAAAAIAAABQgLAKgKAUQgJAagTBUQhwBBgyAYQgCgGBgg5g");
	this.shape_603.setTransform(1264.3421,214.25);

	this.shape_604 = new cjs.Shape();
	this.shape_604.graphics.f("#000000").s().p("AgnBKQBgg0gMhTQAJgbAVgLQAAgHACgHQADgIAGgFIAHgEQAGgDAHAAIALACQALAEAGAMQAFAMgEAMQgFALgLAGQgMAFgLgFQgIgCgEgGQgEgCgCgGIAAAAQgLALgKAVQgJAagSBUQhyA8gzAWQgCgGBig2g");
	this.shape_604.setTransform(1251.7993,228.4);

	this.shape_605 = new cjs.Shape();
	this.shape_605.graphics.f("#000000").s().p("AgmBMQBigygOhTQAIgbAWgMQgBgGACgHQADgIAGgGIAHgEQAGgDAHAAIALACQAMAEAFALQAGAMgFANQgEAMgLAFQgMAGgMgFQgGgDgFgFIgGgJIgBABQgLAKgJAWQgJAagRBUQh0A3g0AUQgCgGBkgxg");
	this.shape_605.setTransform(1239.2195,242.5);

	this.shape_606 = new cjs.Shape();
	this.shape_606.graphics.f("#000000").s().p("AgkBNQBjgugQhUQAIgbAWgMIABgOQACgIAHgFIAHgFQAGgDAGAAIALACQANAEAFALQAFAMgEAMQgEAMgLAFQgLAGgNgFQgGgCgFgEIgGgJIgBAAIAAABQgLAKgIAVQgJAbgQBUQh3Axg1ATQgCgGBngtg");
	this.shape_606.setTransform(1226.6323,256.65);

	this.shape_607 = new cjs.Shape();
	this.shape_607.graphics.f("#000000").s().p("AgjBOQBlgqgShVQAIgcAVgMIABgNQADgIAGgGIAHgEQAGgDAGgBIALACQAMAEAGALQAGAMgEAMQgEAMgLAFQgLAGgNgEQgGgCgFgFIgHgIIAAAAQgLALgIAVQgJAagPBVQh5Atg1AQQgCgGBogpg");
	this.shape_607.setTransform(1214.0289,270.775);

	this.shape_608 = new cjs.Shape();
	this.shape_608.graphics.f("#000000").s().p("AghBPQBmgmgUhWQAHgdAWgLQgCgHACgHQADgIAGgFIAHgFQAGgDAGgBIALACQANAEAFALQAGALgEAMQgDAMgMAGQgLAGgMgEQgHgCgFgEIgGgJIgBAAQgKAMgJAUQgIAbgOBVQh7Aog2AOQgBgGBqglg");
	this.shape_608.setTransform(1201.4134,284.925);

	this.shape_609 = new cjs.Shape();
	this.shape_609.graphics.f("#000000").s().p("AgfBQQBoghgXhYQAHgcAVgNIABgNQACgIAGgGIAHgFIAMgEIALACQAMAEAGALQAGALgDAMQgEAMgLAGQgLAGgMgDQgHgCgFgFIgGgIIgBAAIAAAAQgLALgIAWQgEAMAKAsQACAkgdASQh8Akg3ALQAAgFBrghg");
	this.shape_609.setTransform(1188.7894,299.05);

	this.shape_610 = new cjs.Shape();
	this.shape_610.graphics.f("#000000").s().p("AgeBRQBpgdgZhZQAHgdAVgMIAAgOQADgIAGgFIAGgFQAGgDAGgBIALABQANADAGALQAGAMgDAMQgEANgLAFQgLAGgMgDQgHgCgFgEIgGgJIgBABQgLALgHAVQgEANAKAsQADAlgeARQh9Aeg3AKQAAgGBsgcg");
	this.shape_610.setTransform(1176.1749,313.225);

	this.shape_611 = new cjs.Shape();
	this.shape_611.graphics.f("#000000").s().p("AgdBSQBrgagchZQAIgdAUgMQgBgHABgHQADgIAFgGIAHgFQAGgDAGgBIALABQANADAGALQAGAMgDAMQgDAMgLAGQgLAHgNgDQgHgCgFgFIgGgIIgBAAQgKAMgIAVQgDANAKAtQADAlgdAQQh+AZg4AIQAAgHBtgXg");
	this.shape_611.setTransform(1163.5249,327.375);

	this.shape_612 = new cjs.Shape();
	this.shape_612.graphics.f("#000000").s().p("AgpBJQBXhCgJhPQAJgcAVgMIACgNQADgIAGgFIAIgEQAGgDAGAAIALACQAMAEAFAMQAGAMgFAMQgEAMgMAFQgMAFgLgFQgHgCgFgFIgGgJIAAAAIAAAAQgLALgJAVQgJAagRBVQhoBMgwAdQgDgFBahEg");
	this.shape_612.setTransform(1159.3464,331.825);

	this.shape_613 = new cjs.Shape();
	this.shape_613.graphics.f("#000000").s().p("Ag3BEQA0hgANhKQAKgbAWgKIADgOQAEgHAGgFIAJgDQAHgCAGAAIALAEQALAGAEALQAEAMgGAMQgFAMgMADQgNAEgKgHQgGgCgFgGQgEgDgBgFIgBAAQgMAKgKAUQgKAZgVBVQhABxgeAvQgFgEA1hjg");
	this.shape_613.setTransform(1154.1834,336.87);

	this.shape_614 = new cjs.Shape();
	this.shape_614.graphics.f("#000000").s().p("AhJA3QBIhTApg/QAUgWAXgCIAFgMQAFgHAHgEQAEgBABgDIANgBIAKAEQALAHADALQAEAMgHAMQgGALgMADQgMADgQgEQgGgEgCgHIgCgKIgBAAIAAAAQgOAGgRAPQgSAVgwBJQhXBfgoAnQgEgFBJhUg");
	this.shape_614.setTransform(1159.8897,357.375);

	this.shape_615 = new cjs.Shape();
	this.shape_615.graphics.f("#000000").s().p("AhKA1QBFhVAtg9QATgWAYgCIAGgMQAFgGAIgDIAGgEQAGgBAGABIAKAFQALAIACAMQACANgHAKQgHALgNACQgMACgPgGQgEgFgDgGIgCgLIAAAAQgPAGgQAPQgUAUgxBIQhUBhgoApQgDgFBHhWg");
	this.shape_615.setTransform(1156.3497,351.5375);

	this.shape_616 = new cjs.Shape();
	this.shape_616.graphics.f("#000000").s().p("AhMAyQBDhWAwg8QATgVAZgCIAGgLQAGgHAHgCIAHgDQAHAAAGACIAKAFQAKAJABAMQABANgIAKQgIAKgNABQgNABgMgIQgFgFgCgGIgCgLIAAAAQgPAGgRAOQgTAUgzBHQhSBkgmApQgFgFBGhYg");
	this.shape_616.setTransform(1150.4919,346.675);

	this.shape_617 = new cjs.Shape();
	this.shape_617.graphics.f("#000000").s().p("AhTAqQBEhVA7g1QAWgSAYACIAHgLQAGgGAIgCIAHgDIAMACIAJAGQAKAJAAAMQABAOgJAIQgIALgNAAQgMAAgOgHQgFgHgBgGIAAgLIgBAAQgPAEgSAMQgXASg6BAQhTBigmAqQgFgFBGhYg");
	this.shape_617.setTransform(1153.1664,327);

	this.shape_618 = new cjs.Shape();
	this.shape_618.graphics.f("#000000").s().p("AhSArQBDhWA6g1QAXgSAXABIAHgMQAHgGAIgBIAGgDIANACIAJAGQAKAJAAANQAAAMgJAKQgIAJgNAAQgMABgNgIQgFgFgBgHIgBgKIAAAAQgQADgSANQgVARg7BCQhSBjgmApQgEgEBFhZg");
	this.shape_618.setTransform(1136.5915,344.25);

	this.shape_619 = new cjs.Shape();
	this.shape_619.graphics.f("#000000").s().p("AhSAsQBEhWA4g3QAWgTAYABIAHgLQAGgFAIgDIAHgCQAHAAAFACQAGACAEAFQAJAIAAAMQABANgJAKQgJAJgMABQgNABgMgJQgFgGgBgGQgCgFABgGIgBAAQgPAEgSANQgVASg5BDQhTBjglApQgFgFBFhYg");
	this.shape_619.setTransform(1120.0162,361.5);

	this.shape_620 = new cjs.Shape();
	this.shape_620.graphics.f("#000000").s().p("AhRAtQBDhXA3g3QAVgUAZABIAHgLQAGgGAIgCIAHgCQAHAAAFACIAJAGQAKAJAAANQAAANgIAJQgJAKgNgBQgMABgMgIQgFgGgBgGQgCgFABgGIgBAAQgPADgSAOQgVASg4BEQhSBjglAqQgFgFBFhYg");
	this.shape_620.setTransform(1103.4611,378.7708);

	this.shape_621 = new cjs.Shape();
	this.shape_621.graphics.f("#000000").s().p("AhQAuQBChYA2g3QAWgUAYAAIAHgLQAGgGAIgCIAHgCQAHAAAGACIAJAHQAJAJAAAMQAAANgIAJQgJAJgNABQgMAAgMgJQgEgFgCgHIgBgKIgBAAIAAAAQgPAEgRAOQgVASg3BEQhSBlglApQgFgFBFhYg");
	this.shape_621.setTransform(1086.8611,396.025);

	this.shape_622 = new cjs.Shape();
	this.shape_622.graphics.f("#000000").s().p("AhPAuQBChXA1g5QAVgUAYAAIAHgLQAGgGAIgCIAHgCQAHAAAGADIAJAGQAKAJgBAMQAAANgIAJQgJAKgNAAQgMAAgLgJQgFgFgCgHQgCgFABgFIAAAAIgBAAQgPAEgRAOQgVATg2BFQhRBkglAqQgEgFBEhZg");
	this.shape_622.setTransform(1070.2872,413.275);

	this.shape_623 = new cjs.Shape();
	this.shape_623.graphics.f("#000000").s().p("AhPAvQBChYA0g5QAUgUAYgBIAHgLQAGgGAIgCIAIgCQAHAAAGADIAJAGQAJAJAAANQAAANgJAJQgJAJgMAAQgNAAgKgJQgFgFgCgHIgBgKIgBAAIAAAAQgPAEgRAOQgVAUg0BFQhRBlglAqQgEgFBDhZg");
	this.shape_623.setTransform(1053.7109,426.375);

	this.shape_624 = new cjs.Shape();
	this.shape_624.graphics.f("#000000").s().p("AhdATQBDhXBRgdQAbgMAXAJIAKgIQAJgEAHABIAIACQAGADAFAEIAGAKQAFALgFAMQgEAMgMAFQgLAFgMgFQgMgEgGgMQgDgHABgGQAAgGADgFIgBAAIAAAAQgPgBgWAHQgaAKhKAvQhRBjgmAqQgEgFBEhYg");
	this.shape_624.setTransform(1014.0355,441.4139);

	this.shape_625 = new cjs.Shape();
	this.shape_625.graphics.f("#000000").s().p("AhXAiQBChYBEgsQAYgRAYAEQADgGAGgEQAHgFAIgBIAIABQAHABAFAEIAHAIQAIAKgDANQgCAMgLAIQgKAHgNgDQgMgBgIgLQgDgHgBgGQgCgGACgFIAAAAQgQACgTALQgXAPhBA8QhRBkglAqQgEgFBDhZg");
	this.shape_625.setTransform(996.1976,420.5);

	this.shape_626 = new cjs.Shape();
	this.shape_626.graphics.f("#000000").s().p("AheALQBDhXBXgUQAcgJAWALQAEgFAHgCQAJgDAHADIAIADQAGAEADAFIAFAKQADAMgGALQgHALgMADQgMAEgLgGQgLgHgCgMQgCgGABgHIADgKIAAAAQgPgDgWAFQgbAIhOAnQhSBjgmAqQgDgFBEhYg");
	this.shape_626.setTransform(964.9164,384.8932);

	this.shape_627 = new cjs.Shape();
	this.shape_627.graphics.f("#000000").s().p("AhcATQBDhYBRgcQAbgMAWAIIALgHQAJgEAHACIAIACQAGADAEAFIAGAJQAEAMgFALQgFAMgMAFQgMAEgLgEQgMgFgDgMQgDgHABgHIACgKIAAAAIgBAAQgPgBgVAHQgaAKhKAvQhSBjglAqQgFgFBFhYg");
	this.shape_627.setTransform(949.8427,365.4775);

	this.shape_628 = new cjs.Shape();
	this.shape_628.graphics.f("#000000").s().p("AhaAaQBChWBLgmQAZgOAYAGIAKgJQAHgEAJAAIAIACQAHADAEADIAGAJQAGAMgEALQgDANgMAGQgLAGgMgEQgMgEgGgLQgDgHAAgHIACgKIgBAAIAAAAQgQAAgUAJQgZANhFA1QhRBlgmApQgEgFBEhZg");
	this.shape_628.setTransform(934.716,346.075);

	this.shape_629 = new cjs.Shape();
	this.shape_629.graphics.f("#000000").s().p("AhXAiQBChYBEgtQAYgRAYAEIAJgJQAHgFAIAAIAIAAIAMAFIAHAJQAHAKgCAMQgDANgLAHQgKAHgNgCQgMgDgHgLQgDgGgBgHQgCgFACgFIAAAAQgQABgTALQgXAQhBA7QhRBlglApQgEgEBDhZg");
	this.shape_629.setTransform(919.4938,326.725);

	this.shape_630 = new cjs.Shape();
	this.shape_630.graphics.f("#000000").s().p("AhTApQBChYA7g0QAWgSAYABIAJgLQAGgFAIgCIAIAAQAHACAGACIAIAHQAIAKgCANQAAANgLAIQgJAHgNAAQgNgCgIgJIgGgNIAAgKIgBAAQgPACgSAOQgWARg7BBQhQBlglAqQgEgFBDhZg");
	this.shape_630.setTransform(904.205,307.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_562,p:{x:1575.0913,y:256.325}}]}).to({state:[{t:this.shape_563}]},1).to({state:[{t:this.shape_564}]},1).to({state:[{t:this.shape_565}]},1).to({state:[{t:this.shape_563}]},1).to({state:[{t:this.shape_563}]},1).to({state:[{t:this.shape_563}]},1).to({state:[{t:this.shape_566}]},1).to({state:[{t:this.shape_563}]},1).to({state:[{t:this.shape_564}]},1).to({state:[{t:this.shape_567}]},1).to({state:[{t:this.shape_565}]},1).to({state:[{t:this.shape_563}]},1).to({state:[{t:this.shape_563}]},1).to({state:[{t:this.shape_566}]},1).to({state:[{t:this.shape_563}]},1).to({state:[{t:this.shape_564}]},1).to({state:[{t:this.shape_563}]},1).to({state:[{t:this.shape_568}]},1).to({state:[{t:this.shape_563}]},1).to({state:[{t:this.shape_563}]},1).to({state:[{t:this.shape_567}]},1).to({state:[{t:this.shape_565}]},1).to({state:[{t:this.shape_569}]},1).to({state:[{t:this.shape_563}]},1).to({state:[{t:this.shape_570,p:{x:1577.2608,y:253.275}}]},1).to({state:[{t:this.shape_563}]},1).to({state:[{t:this.shape_563}]},1).to({state:[{t:this.shape_563}]},1).to({state:[{t:this.shape_565}]},1).to({state:[{t:this.shape_566}]},1).to({state:[{t:this.shape_563}]},1).to({state:[{t:this.shape_564}]},1).to({state:[{t:this.shape_565}]},1).to({state:[{t:this.shape_571,p:{x:1578.0109,y:252.175}}]},1).to({state:[{t:this.shape_563}]},1).to({state:[{t:this.shape_567}]},1).to({state:[{t:this.shape_572}]},1).to({state:[{t:this.shape_563}]},1).to({state:[{t:this.shape_564}]},1).to({state:[{t:this.shape_565}]},1).to({state:[{t:this.shape_571,p:{x:1578.6109,y:251.325}}]},1).to({state:[{t:this.shape_563}]},1).to({state:[{t:this.shape_563}]},1).to({state:[{t:this.shape_565}]},1).to({state:[{t:this.shape_563}]},1).to({state:[{t:this.shape_566}]},1).to({state:[{t:this.shape_567}]},1).to({state:[{t:this.shape_573,p:{x:1579.2608,y:250.475}}]},1).to({state:[{t:this.shape_563}]},1).to({state:[{t:this.shape_563}]},1).to({state:[{t:this.shape_565}]},1).to({state:[{t:this.shape_563}]},1).to({state:[{t:this.shape_566}]},1).to({state:[{t:this.shape_563}]},1).to({state:[{t:this.shape_570,p:{x:1579.8608,y:249.625}}]},1).to({state:[{t:this.shape_563}]},1).to({state:[{t:this.shape_571,p:{x:1580.0108,y:249.375}}]},1).to({state:[{t:this.shape_567}]},1).to({state:[{t:this.shape_565}]},1).to({state:[{t:this.shape_563}]},1).to({state:[{t:this.shape_563}]},1).to({state:[{t:this.shape_570,p:{x:1580.4608,y:248.775}}]},1).to({state:[{t:this.shape_563}]},1).to({state:[{t:this.shape_564}]},1).to({state:[{t:this.shape_563}]},1).to({state:[{t:this.shape_565}]},1).to({state:[{t:this.shape_563}]},1).to({state:[{t:this.shape_563}]},1).to({state:[{t:this.shape_574}]},1).to({state:[{t:this.shape_565}]},1).to({state:[{t:this.shape_564}]},1).to({state:[{t:this.shape_563}]},1).to({state:[{t:this.shape_567}]},1).to({state:[{t:this.shape_563}]},1).to({state:[{t:this.shape_563}]},1).to({state:[{t:this.shape_566}]},1).to({state:[{t:this.shape_565}]},1).to({state:[{t:this.shape_564}]},1).to({state:[{t:this.shape_563}]},1).to({state:[{t:this.shape_571,p:{x:1582.0108,y:246.575}}]},1).to({state:[{t:this.shape_565}]},1).to({state:[{t:this.shape_563}]},1).to({state:[{t:this.shape_563}]},1).to({state:[{t:this.shape_567}]},1).to({state:[{t:this.shape_575,p:{x:1582.4608,y:245.975}}]},1).to({state:[{t:this.shape_576}]},1).to({state:[{t:this.shape_577}]},1).to({state:[{t:this.shape_578}]},1).to({state:[{t:this.shape_579}]},1).to({state:[{t:this.shape_580}]},1).to({state:[{t:this.shape_581}]},1).to({state:[{t:this.shape_582}]},1).to({state:[{t:this.shape_583}]},1).to({state:[{t:this.shape_584}]},1).to({state:[{t:this.shape_585}]},1).to({state:[{t:this.shape_586}]},1).to({state:[{t:this.shape_587}]},1).to({state:[{t:this.shape_588}]},1).to({state:[{t:this.shape_589}]},1).to({state:[{t:this.shape_590}]},1).to({state:[{t:this.shape_591}]},1).to({state:[{t:this.shape_592}]},1).to({state:[{t:this.shape_593}]},1).to({state:[{t:this.shape_594}]},1).to({state:[{t:this.shape_595}]},1).to({state:[{t:this.shape_596}]},1).to({state:[{t:this.shape_597}]},1).to({state:[{t:this.shape_598}]},1).to({state:[{t:this.shape_599}]},1).to({state:[{t:this.shape_600}]},1).to({state:[{t:this.shape_601}]},1).to({state:[{t:this.shape_602}]},1).to({state:[{t:this.shape_603}]},1).to({state:[{t:this.shape_604}]},1).to({state:[{t:this.shape_605}]},1).to({state:[{t:this.shape_606}]},1).to({state:[{t:this.shape_607}]},1).to({state:[{t:this.shape_608}]},1).to({state:[{t:this.shape_609}]},1).to({state:[{t:this.shape_610}]},1).to({state:[{t:this.shape_611}]},1).to({state:[{t:this.shape_612}]},1).to({state:[{t:this.shape_613}]},1).to({state:[{t:this.shape_614}]},1).to({state:[{t:this.shape_615}]},1).to({state:[{t:this.shape_616}]},1).to({state:[{t:this.shape_617}]},1).to({state:[{t:this.shape_618}]},1).to({state:[{t:this.shape_619}]},1).to({state:[{t:this.shape_620}]},1).to({state:[{t:this.shape_621}]},1).to({state:[{t:this.shape_622}]},1).to({state:[{t:this.shape_623}]},1).to({state:[{t:this.shape_562,p:{x:1037.1412,y:439.525}}]},1).to({state:[{t:this.shape_624}]},1).to({state:[{t:this.shape_625}]},1).to({state:[{t:this.shape_575,p:{x:978.1108,y:399.775}}]},1).to({state:[{t:this.shape_626}]},1).to({state:[{t:this.shape_627}]},1).to({state:[{t:this.shape_628}]},1).to({state:[{t:this.shape_629}]},1).to({state:[{t:this.shape_630}]},1).to({state:[{t:this.shape_573,p:{x:888.8608,y:288.125}}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.shape_563).wait(1).to({_off:false},0).to({_off:true},1).wait(2).to({_off:false,x:1575.4109,y:255.825},0).wait(1).to({x:1575.5108,y:255.675},0).wait(1).to({x:1575.6108,y:255.575},0).to({_off:true},1).wait(1).to({_off:false,x:1575.7609,y:255.325},0).to({_off:true},1).wait(3).to({_off:false,x:1576.1109,y:254.825},0).wait(1).to({x:1576.2108,y:254.725},0).to({_off:true},1).wait(1).to({_off:false,x:1576.3609,y:254.475},0).to({_off:true},1).wait(1).to({_off:false,x:1576.5608,y:254.225},0).to({_off:true},1).wait(1).to({_off:false,x:1576.7109,y:253.975},0).wait(1).to({x:1576.8108,y:253.875},0).to({_off:true},1).wait(3).to({_off:false,x:1577.1608,y:253.375},0).to({_off:true},1).wait(1).to({_off:false,x:1577.3109,y:253.125},0).wait(1).to({x:1577.4108,y:253.025},0).wait(1).to({x:1577.5108,y:252.875},0).to({_off:true},1).wait(2).to({_off:false,x:1577.7608,y:252.525},0).to({_off:true},1).wait(3).to({_off:false,x:1578.1108,y:252.025},0).to({_off:true},1).wait(2).to({_off:false,x:1578.3609,y:251.675},0).to({_off:true},1).wait(3).to({_off:false,x:1578.7108,y:251.175},0).wait(1).to({x:1578.8108,y:251.075},0).to({_off:true},1).wait(1).to({_off:false,x:1578.9609,y:250.825},0).to({_off:true},1).wait(3).to({_off:false,x:1579.3109,y:250.325},0).wait(1).to({x:1579.4108,y:250.225},0).to({_off:true},1).wait(1).to({_off:false,x:1579.5609,y:249.975},0).to({_off:true},1).wait(1).to({_off:false,x:1579.7608,y:249.725},0).to({_off:true},1).wait(1).to({_off:false,x:1579.9109,y:249.475},0).to({_off:true},1).wait(3).to({_off:false,x:1580.2609,y:248.975},0).wait(1).to({x:1580.3608,y:248.875},0).to({_off:true},1).wait(1).to({_off:false,x:1580.5109,y:248.625},0).to({_off:true},1).wait(1).to({_off:false,x:1580.7108,y:248.375},0).to({_off:true},1).wait(1).to({_off:false,x:1580.8609,y:248.125},0).wait(1).to({x:1580.9608,y:248.025},0).to({_off:true},1).wait(3).to({_off:false,x:1581.3108,y:247.525},0).to({_off:true},1).wait(1).to({_off:false,x:1581.4609,y:247.275},0).wait(1).to({x:1581.5608,y:247.175},0).to({_off:true},1).wait(3).to({_off:false,x:1581.9108,y:246.675},0).to({_off:true},1).wait(2).to({_off:false,x:1582.1609,y:246.325},0).wait(1).to({x:1582.2608,y:246.175},0).to({_off:true},1).wait(60));
	this.timeline.addTween(cjs.Tween.get(this.shape_564).wait(2).to({_off:false},0).to({_off:true},1).wait(6).to({_off:false,x:1575.8608,y:255.225},0).to({_off:true},1).wait(6).to({_off:false,x:1576.4608,y:254.375},0).to({_off:true},1).wait(15).to({_off:false,x:1577.8608,y:252.425},0).to({_off:true},1).wait(6).to({_off:false,x:1578.4608,y:251.575},0).to({_off:true},1).wait(24).to({_off:false,x:1580.6108,y:248.525},0).to({_off:true},1).wait(6).to({_off:false,x:1581.2109,y:247.675},0).to({_off:true},1).wait(6).to({_off:false,x:1581.8109,y:246.825},0).to({_off:true},1).wait(65));
	this.timeline.addTween(cjs.Tween.get(this.shape_565).wait(3).to({_off:false},0).to({_off:true},1).wait(7).to({_off:false,x:1576.0608,y:254.975},0).to({_off:true},1).wait(10).to({_off:false,x:1577.0108,y:253.625},0).to({_off:true},1).wait(6).to({_off:false,x:1577.6108,y:252.775},0).to({_off:true},1).wait(3).to({_off:false,x:1577.9608,y:252.275},0).to({_off:true},1).wait(6).to({_off:false,x:1578.5608,y:251.425},0).to({_off:true},1).wait(3).to({_off:false,x:1578.9108,y:250.925},0).to({_off:true},1).wait(6).to({_off:false,x:1579.5108,y:250.075},0).to({_off:true},1).wait(7).to({_off:false,x:1580.2108,y:249.125},0).to({_off:true},1).wait(6).to({_off:false,x:1580.8108,y:248.275},0).to({_off:true},1).wait(3).to({_off:false,x:1581.1608,y:247.775},0).to({_off:true},1).wait(6).to({_off:false,x:1581.7608,y:246.925},0).to({_off:true},1).wait(3).to({_off:false,x:1582.1108,y:246.425},0).to({_off:true},1).wait(62));
	this.timeline.addTween(cjs.Tween.get(this.shape_566).wait(7).to({_off:false},0).to({_off:true},1).wait(6).to({_off:false,x:1576.3108,y:254.575},0).to({_off:true},1).wait(15).to({_off:false,x:1577.6609,y:252.625},0).to({_off:true},1).wait(15).to({_off:false,x:1579.0608,y:250.675},0).to({_off:true},1).wait(6).to({_off:false,x:1579.6608,y:249.825},0).to({_off:true},1).wait(22).to({_off:false,x:1581.6608,y:247.025},0).to({_off:true},1).wait(67));
	this.timeline.addTween(cjs.Tween.get(this.shape_567).wait(10).to({_off:false},0).to({_off:true},1).wait(10).to({_off:false,x:1576.9108,y:253.725},0).to({_off:true},1).wait(14).to({_off:false,x:1578.2108,y:251.925},0).to({_off:true},1).wait(10).to({_off:false,x:1579.1608,y:250.575},0).to({_off:true},1).wait(10).to({_off:false,x:1580.1108,y:249.225},0).to({_off:true},1).wait(14).to({_off:false,x:1581.4108,y:247.425},0).to({_off:true},1).wait(10).to({_off:false,x:1582.3608,y:246.075},0).to({_off:true},1).wait(59));

	// Каркас_41
	this.shape_631 = new cjs.Shape();
	this.shape_631.graphics.f("#000000").s().p("AAXgDQgsg8gagcQgNgMgLgFIgIgCQAAANgJAIQgJAJgNAAQgMAAgKgJQgJgJAAgMQABgNAJgJQAJgJAMAAQANAAAJAJQAFAFACAGQAJAAAIAEQAPAFANANQATATAzBFQBOBmAeAzIgBAAQgJAAhtiRg");
	this.shape_631.setTransform(1492.075,252.9815);

	this.shape_632 = new cjs.Shape();
	this.shape_632.graphics.f("#000000").s().p("AAYgDQgug8gZgcQgNgNgLgEIgIgCQAAANgJAIQgJAJgMAAQgNABgJgJQgJgJAAgNQgBgMAJgKQAJgJANAAQANAAAJAJQAEAFADAGQAIAAAJADQAPAGANANQATATAzBEQBOBmAdA0IAAAAQgJAAhsiRg");
	this.shape_632.setTransform(1490.3237,251.3065);

	this.shape_633 = new cjs.Shape();
	this.shape_633.graphics.f("#000000").s().p("AAYgDQgug8gZgcQgNgNgLgEIgIgCQAAANgJAJQgIAJgNAAQgMABgKgKQgJgJAAgMQgBgNAJgJQAJgJANgBQANAAAJAJQAEAGADAFQAIAAAJAEQAPAEANAOQATATAzBEQBOBmAdA0IAAAAQgJAAhsiRg");
	this.shape_633.setTransform(1488.5737,249.6315);

	this.shape_634 = new cjs.Shape();
	this.shape_634.graphics.f("#000000").s().p("AAYgEQgtg8gagcQgMgMgMgEIgHgCQAAANgJAIQgJAJgMABQgNABgJgKQgJgIgBgNQAAgMAJgKQAIgJANgBQANAAAJAJQAFAFACAGQAJAAAJADQAOAFANANQATATA0BFQBPBmAbA0IAAAAQgJAAhsiSg");
	this.shape_634.setTransform(1486.7987,247.9815);

	this.shape_635 = new cjs.Shape();
	this.shape_635.graphics.f("#000000").s().p("AAYgEQgsg8gbgcQgMgNgMgEIgHgCQAAANgJAJQgIAJgNABQgMABgKgJQgJgJgBgNQAAgMAIgKQAJgJANgBQANAAAJAJIAHALQAJAAAJADQAOAFANANQATATA0BEQBPBmAbA0IAAABQgJAAhsiSg");
	this.shape_635.setTransform(1485.0486,246.3065);

	this.shape_636 = new cjs.Shape();
	this.shape_636.graphics.f("#000000").s().p("AAYgFQgsg8gagcQgNgMgMgEIgHgCQABANgJAJQgJAKgNAAQgMABgKgJQgJgIgBgNQAAgNAIgKQAJgJAMgBQANAAAKAIQAEAGADAGQAJgBAJADQAOAGANAMQATATA0BFQBOBmAcA0IAAABQgJAAhsiTg");
	this.shape_636.setTransform(1483.2986,244.6565);

	this.shape_637 = new cjs.Shape();
	this.shape_637.graphics.f("#000000").s().p("AAZgFQgug8gZgbQgNgNgMgEIgHgCQABANgJAJQgIAJgNABQgNABgKgJQgJgIgBgNQAAgMAIgKQAJgJAMgBQANgBAKAJIAHALIASACQAOAGAOAMQATATAzBFQBOBmAcA0IgBAAQgIAAhriSg");
	this.shape_637.setTransform(1481.5236,242.9801);

	this.shape_638 = new cjs.Shape();
	this.shape_638.graphics.f("#000000").s().p("AAZgFQgug8gZgcQgNgMgMgEIgHgCQABANgJAJQgJAKgMAAQgMABgKgIQgKgJgBgMQAAgNAIgKQAJgJAMgBQANgBAJAJQAGAEACAHQAJgBAJADQAOAFAOANQATASAzBFQBOBmAcA1IgBAAQgIAAhriSg");
	this.shape_638.setTransform(1479.7736,241.3301);

	this.shape_639 = new cjs.Shape();
	this.shape_639.graphics.f("#000000").s().p("AAZgGQgtg8gagbQgNgNgMgEIgHgBQABANgJAJQgIAKgNAAQgMABgKgIQgKgIgBgNQAAgNAIgKQAIgJANgBQANgBAJAIQAGAGACAFQAJAAAJADQAOAEAOAOQATATAzBEQBOBmAcA1IgBAAQgIAAhriTg");
	this.shape_639.setTransform(1478.0235,239.655);

	this.shape_640 = new cjs.Shape();
	this.shape_640.graphics.f("#000000").s().p("AAZgGQgsg8gbgcQgMgMgMgEIgIgCQABANgIAJQgIAKgNABQgMABgKgIQgKgIgBgNQgBgMAIgLQAJgJAMgBQAMgBALAIQAEAFAEAGQAHAAAKACQAPAFANANQATATA0BEQBOBnAbA1IgBAAQgJAAhqiTg");
	this.shape_640.setTransform(1476.2485,238.005);

	this.shape_641 = new cjs.Shape();
	this.shape_641.graphics.f("#000000").s().p("AAZgGQgtg8gagcQgNgMgMgEIgHgBQABANgIAJQgIAKgNABQgMABgLgJQgJgIgBgMQgCgNAJgKQAIgJAMgCQANAAAKAHIAIALQAIAAAKACQAOAFAOANQATATA0BEQBOBnAaA1IAAAAQgJAAhqiTg");
	this.shape_641.setTransform(1474.5138,236.3299);

	this.shape_642 = new cjs.Shape();
	this.shape_642.graphics.f("#000000").s().p("AAZgHQgtg8gagbQgNgMgMgEIgHgCQABANgIAJQgIALgNAAQgMACgKgIQgKgIgBgNQgCgMAJgLQAHgJANgCQANgBAKAIQAFAFADAGQAIgBAKADQAOAEAOAOQATATA0BEQBOBmAaA2IAAAAQgJAAhqiUg");
	this.shape_642.setTransform(1472.7638,234.6702);

	this.shape_643 = new cjs.Shape();
	this.shape_643.graphics.f("#000000").s().p("AAagHQgtg8gbgbQgMgMgMgEIgIgCQACANgIAKQgIAKgNABQgMABgLgIQgJgIgCgMQgBgNAIgKQAIgKAMgBQANgCAKAIQAGAGACAFQAJAAAJACQAPAEANAOQATATA0BEQBOBmAaA2IAAAAQgJAAhpiUg");
	this.shape_643.setTransform(1470.9882,232.9946);

	this.shape_644 = new cjs.Shape();
	this.shape_644.graphics.f("#000000").s().p("AAagHQgtg8gbgbQgMgNgMgDIgIgCQACANgIAKQgIAKgMABQgNABgKgIQgKgHgCgNQgBgMAIgLQAIgKAMgBQANgCAKAIIAIALQAJgBAJADQAPAEANAOQATASA0BEQBOBnAaA2IAAAAQgJAAhpiUg");
	this.shape_644.setTransform(1469.2382,231.3446);

	this.shape_645 = new cjs.Shape();
	this.shape_645.graphics.f("#000000").s().p("AAagIQgtg8gbgbQgMgMgMgEIgHgBQABANgIAJQgIAKgMACQgNABgKgIQgKgHgCgNQgBgMAIgLQAIgJAMgCQAMgCALAIQAFAFADAGQAJgBAJACQAPAEANAOQATASA1BFQBNBmAaA2IAAAAQgJAAhpiUg");
	this.shape_645.setTransform(1467.4882,229.6696);

	this.shape_646 = new cjs.Shape();
	this.shape_646.graphics.f("#000000").s().p("AAagIQgtg8gbgbQgMgNgMgDIgHgBQABANgIAJQgHAKgNACQgMABgLgHQgJgIgCgNQgCgMAIgLQAHgJANgCQANgCAKAIQAFAEADAGQAJAAAJACQAPAEANAOQATATA1BEQBNBmAaA2IgBAAQgIAAhpiUg");
	this.shape_646.setTransform(1465.73,228.0189);

	this.shape_647 = new cjs.Shape();
	this.shape_647.graphics.f("#000000").s().p("AAagIQgsg8gcgbQgMgMgMgEIgHgBQABANgHAJQgIALgMABQgNACgKgIQgLgHgBgNQgCgMAIgLQAHgKANgCQANgBAKAHQAFAFADAGQAJgCAJADQAPAEANAOQATATA1BEQBNBmAaA2IgBAAQgIAAhpiUg");
	this.shape_647.setTransform(1463.9875,226.3439);

	this.shape_648 = new cjs.Shape();
	this.shape_648.graphics.f("#000000").s().p("AAagIQgsg9gcgbQgMgMgMgDIgHgCQABANgHAKQgIAKgMACQgNACgKgIQgKgHgCgNQgCgMAIgLQAHgJANgDQAMgBALAHQAFAFADAFQAJAAAJABQAPAFANANQATATA1BEQBOBmAZA3IgBAAQgJAAhoiUg");
	this.shape_648.setTransform(1462.2375,224.6939);

	this.shape_649 = new cjs.Shape();
	this.shape_649.graphics.f("#000000").s().p("AAagJQgsg8gcgbQgMgMgMgEIgHgBQACANgIAKQgHAKgNACQgMACgLgIQgKgHgCgMQgCgNAHgKQAIgLAMgCQANgBAKAHQAGAEADAGQAJgBAJACQAPAEANAOQATATA1BEQBOBmAYA3IAAAAQgJAAhoiVg");
	this.shape_649.setTransform(1460.4618,223.0182);

	this.shape_650 = new cjs.Shape();
	this.shape_650.graphics.f("#000000").s().p("AAagJQgsg9gcgaQgMgNgMgDIgHgBQACANgIAKQgHAKgMACQgNACgLgHQgJgIgDgMQgCgNAHgKQAIgLAMgCQANgCAKAIIAJAKQAJgCAJADQAPAEANAOQATASA1BEQBOBnAYA3IAAAAQgIAAhpiVg");
	this.shape_650.setTransform(1458.7278,221.359);

	this.shape_651 = new cjs.Shape();
	this.shape_651.graphics.f("#000000").s().p("AAagJQgsg9gcgaQgMgNgMgDIgHgBQACAMgHALQgIAKgMACQgMADgLgIQgLgHgCgMQgCgNAHgLQAIgKAMgCQAMgCALAHQAGAEADAGQAIgBAKACQAPAEANAOQATASA1BEQBOBnAYA3IAAAAQgJAAhoiVg");
	this.shape_651.setTransform(1456.9528,219.6841);

	this.shape_652 = new cjs.Shape();
	this.shape_652.graphics.f("#000000").s().p("AAbgKQgtg8gcgbQgMgMgMgDIgHgBQACANgHAKQgHAKgNACQgMADgLgIQgKgGgDgNQgCgNAHgKQAIgLAMgCQANgCAKAHIAJAKQAIgCAKACQAPAEANAOQATASA1BFQBOBmAYA4IAAAAQgJAAhniWg");
	this.shape_652.setTransform(1455.2028,218.0328);

	this.shape_653 = new cjs.Shape();
	this.shape_653.graphics.f("#000000").s().p("AAbgKQgtg9gcgaQgMgMgMgEIgHAAQADAMgIAKQgHALgMACQgNADgLgIQgKgGgCgNQgDgMAHgLQAIgLAMgCQANgCAKAHQAGAEADAGQAIgCAKACQAPAEANAOQAUATA0BDQBOBnAYA3IgBABQgJAAhmiWg");
	this.shape_653.setTransform(1453.4571,216.3591);

	this.shape_654 = new cjs.Shape();
	this.shape_654.graphics.f("#000000").s().p("AAbgLQgtg8gbgaQgOgNgLgDIgHgBQADANgIAKQgGALgNACQgMADgLgHQgLgIgCgMQgCgMAGgLQAHgLANgCQAMgCALAGQAFAFAEAFQAIgBAKABQAPAEANAOQAUATA1BEQBMBmAYA4IAAABQgIAAhniXg");
	this.shape_654.setTransform(1451.7015,214.7065);

	this.shape_655 = new cjs.Shape();
	this.shape_655.graphics.f("#000000").s().p("AAbgLQgsg8gcgaQgOgNgLgDIgHgBQADANgHAKQgIALgMADQgMACgLgHQgLgGgCgNQgCgMAGgLQAHgLAMgDQANgCALAHQAFAEAEAGQAIgCAKACQAPADANAOQAUATA1BEQBNBmAXA4IAAAAQgIAAhniWg");
	this.shape_655.setTransform(1449.9515,213.0328);

	this.shape_656 = new cjs.Shape();
	this.shape_656.graphics.f("#000000").s().p("AAbgLQgsg9gcgaQgOgMgKgDIgIgBQADAMgHALQgHALgMACQgNADgLgHQgKgGgDgNQgDgMAHgLQAHgLAMgDQANgCALAHQAFAEAEAFQAIgBAKABQAPAEANAOQAUASA1BEQBNBnAXA4IAAAAQgJAAhmiWg");
	this.shape_656.setTransform(1448.205,211.3815);

	this.shape_657 = new cjs.Shape();
	this.shape_657.graphics.f("#000000").s().p("AAcgMQgtg8gcgaQgNgMgLgEIgHAAQADANgHAKQgHAKgMADQgNADgLgHQgKgGgDgNQgDgMAHgLQAHgLAMgDQAMgCALAGQAGAFADAFQAJgCAJACQAPAEAOAOQATASA1BEQBOBnAWA4IAAAAQgJAAhliXg");
	this.shape_657.setTransform(1446.43,209.7063);

	this.shape_658 = new cjs.Shape();
	this.shape_658.graphics.f("#000000").s().p("AAcgMQgtg9gcgaQgNgMgLgDIgHAAQADAMgHALQgHAKgMADQgMADgLgGQgLgHgDgMQgDgNAHgLQAHgLALgDQANgCALAGQAGAEADAGQAJgCAJABQAPAEAOAOQATASA1BFQBOBmAWA5IAAAAQgIAAhmiXg");
	this.shape_658.setTransform(1444.68,208.055);

	this.shape_659 = new cjs.Shape();
	this.shape_659.graphics.f("#000000").s().p("AAbgMQgsg9gcgZQgNgNgLgDIgIAAQADANgGAKQgHALgMADQgMADgMgHQgKgGgDgNQgDgMAGgLQAGgLANgDQANgDAKAHQAGAEAEAFQAIgCAKACQAPADANAOQAUATA1BEQBNBmAXA5IAAAAQgJAAhmiXg");
	this.shape_659.setTransform(1442.9526,206.373);

	this.shape_660 = new cjs.Shape();
	this.shape_660.graphics.f("#000000").s().p("AAcgNQgsg8gdgaQgMgMgMgDIgHgBQADANgHALQgGAKgMAEQgMADgMgHQgLgGgDgMQgDgNAHgLQAGgLAMgDQAMgDAMAGQAGAFADAFQAJgCAJABQAPADAOAPQATATA2BDQBMBnAXA5IgBAAQgIAAhliYg");
	this.shape_660.setTransform(1441.1776,204.7187);

	this.shape_661 = new cjs.Shape();
	this.shape_661.graphics.f("#000000").s().p("AAcgMQgsg+gdgZQgMgMgMgDIgHAAQAEAMgHALQgHALgMADQgMAEgLgHQgLgGgEgNQgDgMAHgLQAGgLAMgDQAMgEAMAHQAFAEAEAFQAJgCAJABQAPADAOAPQATATA2BDQBMBnAXA5IgBAAQgIAAhliXg");
	this.shape_661.setTransform(1439.4276,203.045);

	this.shape_662 = new cjs.Shape();
	this.shape_662.graphics.f("#000000").s().p("AAcgNQgsg9gdgZQgMgMgMgEIgHAAQAEANgHALQgGAKgMAEQgNAEgLgHQgLgGgDgMQgEgNAHgLQAGgLAMgDQANgEALAHQAFAEAEAFQAJgCAJABQAPADAOAPQATASA2BEQBNBmAWA6IgBAAQgIAAhliYg");
	this.shape_662.setTransform(1437.6888,201.3937);

	this.shape_663 = new cjs.Shape();
	this.shape_663.graphics.f("#000000").s().p("AAcgNQgsg+gdgZQgMgMgMgDIgHAAQADAMgGALQgGAMgMADQgMAEgMgHQgLgGgDgMQgDgMAGgMQAGgLAMgDQANgEAKAGQAGAEAEAGQAJgCAJAAQAPADAOAPQATASA2BEQBNBnAVA5IAAAAQgJAAhkiXg");
	this.shape_663.setTransform(1435.925,199.7168);

	this.shape_664 = new cjs.Shape();
	this.shape_664.graphics.f("#000000").s().p("AAcgOQgsg8gdgaQgMgMgMgDIgHAAQADAMgGALQgGALgMAEQgMADgLgGQgLgGgEgMQgDgMAGgMQAGgLAMgDQAMgEALAGQAGAEAEAFQAJgCAJABQAPADAOAPQATASA2BEQBNBmAVA6IAAAAQgJAAhkiYg");
	this.shape_664.setTransform(1434.1855,198.0655);

	this.shape_665 = new cjs.Shape();
	this.shape_665.graphics.f("#000000").s().p("AAcgOQgsg8gdgaQgMgMgMgDIgHAAQAEAMgGALQgGAMgMADQgMAEgMgGQgLgGgEgMQgDgMAGgMQAGgLAMgEQAMgDALAGQAGAEAEAFQAJgDAJABQAPADAOAPQATASA2BEQBNBnAVA5IgBAAQgIAAhkiYg");
	this.shape_665.setTransform(1432.4105,196.3918);

	this.shape_666 = new cjs.Shape();
	this.shape_666.graphics.f("#000000").s().p("AAdgOQgtg9gdgZQgMgNgMgDIgHABQAEAMgGALQgGALgMAEQgMAEgMgGQgLgGgDgMQgFgMAHgMQAGgLAMgEQAMgDALAFQAGAEAEAFQAJgCAJABQAPADAOAOQATATA2BDQBNBoAVA5IAAAAQgJAAhjiYg");
	this.shape_666.setTransform(1430.658,194.7369);

	this.shape_667 = new cjs.Shape();
	this.shape_667.graphics.f("#000000").s().p("AAdgPQgsg8gegaQgMgMgLgDQgFgBgDABQAEANgGALQgGALgLAEQgNAEgLgGQgLgGgEgMQgEgMAGgMQAGgLALgEQANgDALAFQAGAEAEAFQAIgDAKABQAPADAOAPQAUASA1BEQBNBnAVA6IgBAAQgIAAhjiZg");
	this.shape_667.setTransform(1428.9319,193.0619);

	this.shape_668 = new cjs.Shape();
	this.shape_668.graphics.f("#000000").s().p("AAdgPQgsg9gegZQgMgMgLgDIgIAAQAFAMgGALQgGAMgMAEQgMAEgMgGQgLgFgEgNQgEgMAGgLQAGgLALgFQAMgDAMAFQAGADAEAGQAIgCAKAAQAPADAOAPQAUASA2BDQBMBoAUA6IAAAAQgIAAhjiZg");
	this.shape_668.setTransform(1427.1569,191.4119);

	this.shape_669 = new cjs.Shape();
	this.shape_669.graphics.f("#000000").s().p("AAdgPQgsg9gdgZQgOgMgKgDIgIAAQAFAMgGAMQgFALgNAEQgMAEgLgFQgMgGgEgMQgEgMAGgMQAFgLAMgEQAMgEAMAFQAGAEAEAFQAIgDAKABQAPADAOAPQAUASA2BDQBMBoAUA6IAAAAQgIAAhjiZg");
	this.shape_669.setTransform(1425.4036,189.7329);

	this.shape_670 = new cjs.Shape();
	this.shape_670.graphics.f("#000000").s().p("AAdgQQgsg8gdgZQgOgNgKgDIgHABQAEAMgGALQgGAMgLAEQgMAEgMgFQgLgGgFgMQgDgMAFgMQAFgLAMgEQAMgEAMAFIAKAJQAIgCAKAAQAPACAOAPQAUASA2BEQBMBnAUA6IAAABQgJAAhiiag");
	this.shape_670.setTransform(1423.6779,188.0592);

	this.shape_671 = new cjs.Shape();
	this.shape_671.graphics.f("#000000").s().p("AAegQQgsg9gegZQgNgMgLgDIgHABQAEAMgFALQgFAMgMAEQgMAEgMgFQgLgFgFgNQgEgMAFgLQAGgLAMgFQAMgEALAFQAGADAFAGQAHgDALAAQAPADAOAPQATASA2BEQBNBmATA7IAAABQgIAAhiiag");
	this.shape_671.setTransform(1421.8988,186.4079);

	this.shape_672 = new cjs.Shape();
	this.shape_672.graphics.f("#000000").s().p("AAdgQQgsg9gdgZQgOgMgKgDIgHABQAEAMgFALQgFAMgMAEQgMAFgMgGQgLgFgFgMQgEgMAFgMQAFgLAMgEQAMgFAMAFIAKAJQAIgDAKAAQAPADAOAPQAUATA2BDQBMBnAUA6IgBAAQgIAAhiiZg");
	this.shape_672.setTransform(1420.1734,184.7246);

	this.shape_673 = new cjs.Shape();
	this.shape_673.graphics.f("#000000").s().p("AAdgRQgsg8gdgZQgOgMgKgDIgHABQAEAMgFALQgFAMgMAEQgLAEgNgFQgMgFgEgMQgEgMAFgLQAFgMAMgEQAMgFAMAFIAKAJQAIgDAKAAQAPADAOAPQAUASA2BDQBMBoAUA6IgBAAQgIAAhiiag");
	this.shape_673.setTransform(1418.4184,183.0733);

	this.shape_674 = new cjs.Shape();
	this.shape_674.graphics.f("#000000").s().p("AAegQQgrg+gfgYQgNgMgLgDIgHABQAFAMgFALQgFAMgMAEQgMAFgMgGQgMgEgEgMQgFgMAFgMQAGgLALgFQAMgEAMAFQAGADAFAFQAHgDALAAQAPADAOAPQATASA3BDQBMBoATA6IgBAAQgIAAhhiZg");
	this.shape_674.setTransform(1416.6434,181.3996);

	this.shape_675 = new cjs.Shape();
	this.shape_675.graphics.f("#000000").s().p("AAegRQgsg9gegYQgOgNgKgCIgHABQAFAMgGALQgEAMgMAEQgMAFgMgFQgMgFgEgMQgFgMAFgMQAFgLAMgFQAMgEAMAEIAKAJQAIgDAKAAQAPACAOAPQAUASA2BEQBNBnASA7IAAAAQgJAAhgiag");
	this.shape_675.setTransform(1414.9184,179.7424);

	this.shape_676 = new cjs.Shape();
	this.shape_676.graphics.f("#000000").s().p("AAegRQgsg+gegYQgOgMgKgDIgHABQAFAMgFAMQgFALgMAFQgMAFgMgFQgLgFgFgMQgFgLAFgMQAFgMAMgFQAMgEALAEQAHADAEAFQAIgDAKAAQAPADAOAPQAUASA3BDQBMBoASA7IAAAAQgJAAhgiag");
	this.shape_676.setTransform(1413.175,178.0687);

	this.shape_677 = new cjs.Shape();
	this.shape_677.graphics.f("#000000").s().p("AAegSQgsg9gegYQgNgMgLgDQgEgBgDACQAFAMgFALQgFAMgLAFQgMAFgMgFQgLgFgGgLQgEgMAEgMQAFgLAMgGQALgEAMAEQAGADAFAFQAIgDAKAAQAPACAPAPQATASA3BEQBMBnASA8IAAAAQgJAAhgibg");
	this.shape_677.setTransform(1411.4125,176.4174);

	this.shape_678 = new cjs.Shape();
	this.shape_678.graphics.f("#000000").s().p("AAegSQgrg9gfgYQgNgMgLgDIgHABQAGAMgGAMQgEALgMAFQgMAGgMgFQgMgFgEgMQgFgLAEgMQAFgMAMgFQALgFAMAFQAGADAFAEQAIgDAKAAQAPACAPAQQATASA3BDQBMBnASA8IgBAAQgIAAhgibg");
	this.shape_678.setTransform(1409.6684,174.7437);

	this.shape_679 = new cjs.Shape();
	this.shape_679.graphics.f("#000000").s().p("AAegSQgsg+gegXQgNgNgLgCIgHABQAGAMgFALQgFAMgLAFQgMAGgMgFQgMgFgFgLQgFgMAEgMQAFgMAMgFQALgFAMAEQAGADAFAFQAIgDAKAAQAPABAPAQQATASA3BDQBMBoASA8IgBAAQgIAAhgibg");
	this.shape_679.setTransform(1407.9309,173.0858);

	this.shape_680 = new cjs.Shape();
	this.shape_680.graphics.f("#000000").s().p("AAegTQgsg9gegYQgNgMgLgDQgEAAgDACQAGALgFAMQgFAMgLAFQgLAFgNgEQgMgFgFgLQgFgMAEgMQAGgLAKgGQAMgFAMAEQAGADAFAFQAIgDAKgBQAPADAPAPQATASA3BDQBMBoARA7IAAABQgIAAhgicg");
	this.shape_680.setTransform(1406.1611,171.412);

	this.shape_681 = new cjs.Shape();
	this.shape_681.graphics.f("#000000").s().p("AAegTQgrg9gfgYQgNgMgLgDIgHABQAGAMgFAMQgEAMgMAFQgLAFgMgEQgMgFgFgLQgGgLAFgNQAEgMALgFQAMgFAMAEQAGADAFAFQAIgEAKAAQAPACAPAPQATASA3BEQBLBnASA8IAAAAQgIAAhgibg");
	this.shape_681.setTransform(1404.4114,169.766);

	this.shape_682 = new cjs.Shape();
	this.shape_682.graphics.f("#000000").s().p("AAegTQgrg9gfgYQgNgMgLgDIgGACQAFALgFAMQgDAMgMAFQgLAGgNgFQgMgEgFgLQgFgMAEgMQAEgMALgFQAMgFAMADQAGADAFAFQAIgDAKgBQAPACAPAPQATASA3BEQBMBnARA8IgBAAQgIAAhfibg");
	this.shape_682.setTransform(1402.6611,168.0841);

	this.shape_683 = new cjs.Shape();
	this.shape_683.graphics.f("#000000").s().p("AAfgUQgsg8gfgYQgNgNgLgCQgDgBgDACQAFAMgEAMQgFAMgLAFQgLAGgMgFQgMgEgGgLQgGgLAFgNQAEgMALgFQAMgFAMADQAGADAFAFQAIgEAKAAQAPABAPAQQATASA3BDQBMBoARA8IAAAAQgIAAhficg");
	this.shape_683.setTransform(1400.9036,166.4328);

	this.shape_684 = new cjs.Shape();
	this.shape_684.graphics.f("#000000").s().p("AAfgUQgsg9gfgYQgNgMgLgDQgDAAgDACQAFAMgEALQgEAMgLAGQgLAGgNgFQgMgDgGgMQgFgLAEgNQAEgMALgFQAMgFAMADIALAHQAIgDAKgBQAPACAPAQQATASA3BDQBMBnARA9IgBAAQgIAAheicg");
	this.shape_684.setTransform(1399.1779,164.7578);

	this.shape_685 = new cjs.Shape();
	this.shape_685.graphics.f("#000000").s().p("AAfgUQgrg+gggXQgNgMgLgDIgGACQAGALgFAMQgDAMgMAGQgLAFgNgEQgMgDgFgMQgGgLAEgNQAEgMALgFQAMgFAMADQAHADAEAEQAIgDAKgBQAPABAPAQQATASA4BDQBLBoAQA9IAAAAQgIAAheicg");
	this.shape_685.setTransform(1397.4036,163.1078);

	this.shape_686 = new cjs.Shape();
	this.shape_686.graphics.f("#000000").s().p("AAfgUQgrg+gggXQgNgMgKgDQgFAAgCACQAGAMgEALQgEAMgLAGQgMAGgMgEQgMgEgGgLQgGgLAEgNQAEgMALgGQAMgFAMADQAHADAEAEQAIgDAKgBQAPACAPAPQATASA4BDQBLBoAQA9IAAAAQgJAAhdicg");
	this.shape_686.setTransform(1395.67,161.4236);

	this.shape_687 = new cjs.Shape();
	this.shape_687.graphics.f("#000000").s().p("AAfgVQgrg9gggYQgNgMgKgCQgFgBgCADQAGALgEAMQgEAMgLAGQgMAGgMgEQgMgEgGgLQgFgLADgNQAEgMALgGQAMgFAMADQAHADAEAEQAIgDAKgBQAPABAPAQQATASA4BDQBLBoAQA9IAAAAQgJAAhdidg");
	this.shape_687.setTransform(1393.9438,159.7736);

	this.shape_688 = new cjs.Shape();
	this.shape_688.graphics.f("#000000").s().p("AAfgVQgrg9gggXQgNgMgKgDIgHACQAGALgEAMQgDAMgMAGQgLAGgMgEQgMgDgGgLQgGgLADgNQAEgMALgGQAMgGAMAEQAHACAEAFQAIgFAKAAQAPABAPAQQATASA4BDQBMBoAPA9IAAAAQgIAAheidg");
	this.shape_688.setTransform(1392.1605,158.0904);

	this.shape_689 = new cjs.Shape();
	this.shape_689.graphics.f("#000000").s().p("AAfgVQgrg+gggXQgNgMgKgCQgFgBgCADQAGALgDAMQgEAMgLAGQgLAGgNgEQgMgDgGgLQgGgLAEgNQAEgMAKgGQAMgGAMAEQAHACAEAEQAIgDAKgCQAPACAPAQQATASA4BDQBLBnAQA+IgBAAQgIAAhdidg");
	this.shape_689.setTransform(1390.4355,156.4403);

	this.shape_690 = new cjs.Shape();
	this.shape_690.graphics.f("#000000").s().p("AAfgWQgrg9gggXQgNgMgKgDQgEAAgDACQAGAMgDALQgEANgLAGQgLAGgMgEQgMgDgHgLQgGgLAEgNQAEgMAKgGQAMgGAMADQAHADAEAEQAIgEAKgBQAPABAPAQQAUASA3BDQBLBoAQA9IgBABQgIAAhdieg");
	this.shape_690.setTransform(1388.6855,154.7548);

	this.shape_691 = new cjs.Shape();
	this.shape_691.graphics.f("#000000").s().p("AAfgWQgrg+gggXQgMgMgLgCIgHACQAHALgEAMQgDAMgLAHQgLAGgNgDQgMgEgGgLQgGgLADgMQAEgNAKgGQAMgGAMADQAHADAFAEQAHgEAKgBQAPABAPAQQAUASA3BDQBLBnAPA+IAAABQgIAAhdieg");
	this.shape_691.setTransform(1386.925,153.1048);

	this.shape_692 = new cjs.Shape();
	this.shape_692.graphics.f("#000000").s().p("AAggWQgrg+ghgWQgMgMgLgDIgGACQAGAMgEALQgDANgLAGQgLAHgMgEQgMgDgHgLQgGgLADgNQADgMALgGQAMgGAMADQAHACAFAEQAHgEAKgBQAPABAPAQQAUASA3BDQBLBnAPA+IAAAAQgJAAhbidg");
	this.shape_692.setTransform(1385.1888,151.4298);

	this.shape_693 = new cjs.Shape();
	this.shape_693.graphics.f("#000000").s().p("AAggXQgrg9gggXQgOgMgKgCQgEgBgCADQAGALgDAMQgDAMgLAHQgLAGgNgDQgMgDgGgLQgHgLADgNQADgMALgGQAMgGAMACQAHADAFAEQAHgEAKgBQAPABAPAQQAUARA4BDQBKBoAPA+IgBAAQgIAAhbieg");
	this.shape_693.setTransform(1383.4276,149.768);

	this.shape_694 = new cjs.Shape();
	this.shape_694.graphics.f("#000000").s().p("AAggXQgrg8gggYQgOgMgKgCQgEgBgCADQAHALgEAMQgDAMgLAHQgLAHgMgDQgNgEgGgKQgGgLACgNQADgMALgHQAMgGAMADQAHACAFAEQAHgEAKgBQAPABAPAQQAUASA4BCQBLBoAOA+IgBAAQgIAAhbieg");
	this.shape_694.setTransform(1381.6882,148.093);

	this.shape_695 = new cjs.Shape();
	this.shape_695.graphics.f("#000000").s().p("AAfgXQgrg9gggXQgNgMgKgDQgFAAgCADQAHALgDAMQgDANgLAGQgLAHgMgDQgNgDgGgLQgHgLADgNQADgMALgGQAKgHANADIAMAGQAHgEALgCQAPABAPAQQATASA4BDQBLBoAOA+IAAAAQgIAAhcieg");
	this.shape_695.setTransform(1379.9526,146.4451);

	this.shape_696 = new cjs.Shape();
	this.shape_696.graphics.f("#000000").s().p("AAggXQgrg+gggWQgOgMgKgDQgEAAgCADQAHAKgDANQgDAMgLAHQgLAHgMgDQgNgDgGgLQgHgLADgMQADgNAKgGQALgHANADQAHACAFAEQAHgFAKgBQAPABAPAQQAUASA4BCQBLBoANA/IAAAAQgIAAhbieg");
	this.shape_696.setTransform(1378.1903,144.7701);

	this.shape_697 = new cjs.Shape();
	this.shape_697.graphics.f("#000000").s().p("AAggYQgrg9ghgXQgNgMgKgCQgFgBgBADQAHALgEAMQgCANgLAGQgLAHgMgCQgNgDgGgLQgHgLACgMQADgNALgGQAKgHANACIAMAGQAHgDALgCQAPAAAPARQATARA5BDQBKBoAOA/IAAAAQgIAAhbifg");
	this.shape_697.setTransform(1376.4515,143.1042);

	this.shape_698 = new cjs.Shape();
	this.shape_698.graphics.f("#000000").s().p("AAggYQgrg9ghgXQgNgMgKgCIgGACQAHAMgDALQgDANgKAHQgLAHgNgDQgMgDgHgKQgHgLADgNQACgMALgHQAKgGANACQAHACAFAEQAHgFALgBQAPAAAPARQATARA5BDQBKBoAOA/IgBAAQgIAAhaifg");
	this.shape_698.setTransform(1374.7153,141.4312);

	this.shape_699 = new cjs.Shape();
	this.shape_699.graphics.f("#000000").s().p("AAggYQgrg+ghgWQgNgMgKgDQgEAAgCADQAHALgDAMQgDAMgKAHQgLAIgMgDQgNgCgHgLQgGgLACgMQADgNAKgHQAKgGANACQAHACAFAEQAHgFALgCQAPABAPAQQATASA5BDQBKBnANA/IAAABQgIAAhaifg");
	this.shape_699.setTransform(1372.9515,139.7548);

	this.shape_700 = new cjs.Shape();
	this.shape_700.graphics.f("#000000").s().p("AAggYQgrg+ghgWQgNgMgKgCQgEgBgCADQAHALgDAMQgCANgLAHQgKAHgNgDQgMgCgHgKQgHgLACgNQADgMAKgHQAKgHANACQAHACAFAEQAHgFALgCQAPABAPAQQAUASA4BDQBLBoAMA/IAAAAQgIAAhaifg");
	this.shape_700.setTransform(1371.2109,138.0798);

	this.shape_701 = new cjs.Shape();
	this.shape_701.graphics.f("#000000").s().p("AAggZQgrg9ghgWQgNgMgKgDQgEAAgCADQAHALgCAMQgCANgLAGQgLAIgMgDQgNgCgHgKQgHgLACgMQADgNAKgHQAKgHANACQAHACAFAEQAHgFALgCQAPAAAPARQAUASA4BCQBLBoAMA/IAAABQgIAAhaigg");
	this.shape_701.setTransform(1369.4688,136.4048);

	this.shape_702 = new cjs.Shape();
	this.shape_702.graphics.f("#000000").s().p("AAggZQgqg9gigWQgNgMgKgDQgEAAgCADQAHALgCAMQgCAMgLAIQgKAHgNgCQgMgCgHgLQgIgKACgNQADgMAKgHQAKgIANACIAMAGQAHgFALgCQAPAAAPARQAUASA4BCQBLBoAMBAIAAAAQgIAAhaigg");
	this.shape_702.setTransform(1367.7039,134.7297);

	this.shape_703 = new cjs.Shape();
	this.shape_703.graphics.f("#000000").s().p("AAggZQgqg9gigWQgMgMgLgDQgEAAgCAEQAIAKgDAMQgCANgKAHQgLAHgMgCQgNgCgHgKQgHgKACgNQACgMAKgIQAKgHANACQAHABAFAEQAHgFALgCQAPAAAPARQAUASA4BCQBLBoAMBAIgBAAQgIAAhZigg");
	this.shape_703.setTransform(1365.9859,133.0297);

	this.shape_704 = new cjs.Shape();
	this.shape_704.graphics.f("#000000").s().p("AAhgZQgrg+ghgWQgOgLgKgDQgEAAgCADQAIALgCAMQgCANgLAHQgKAHgNgCQgMgBgIgLQgHgKACgNQACgMAKgIQAKgHANACQAHABAGAEQAHgFAKgCQAPABAPAQQAUASA4BCQBLBoAMBAIgBAAQgIAAhYigg");
	this.shape_704.setTransform(1364.2289,131.3547);

	this.shape_705 = new cjs.Shape();
	this.shape_705.graphics.f("#000000").s().p("AAhgZQgrg9ghgWQgOgMgKgDQgDAAgDADQAIALgCAMQgCAMgKAIQgKAIgNgCQgNgCgHgKQgIgLACgMQACgNAKgHQAKgIANACQAHACAGADQAHgFAKgCQAPAAAPARQAUASA5BCQBJBoAMBAIAAAAQgIAAhYigg");
	this.shape_705.setTransform(1362.4789,129.6797);

	this.shape_706 = new cjs.Shape();
	this.shape_706.graphics.f("#000000").s().p("AAhgZQgrg+ghgWQgOgMgKgCQgDAAgCADQAHAKgCANQgCANgKAHQgJAHgOgBQgMgCgIgKQgHgKABgNQADgMAJgIQAKgIANACQAHABAGAEQAHgFAKgCQAPAAAPARQAUARA5BDQBKBoALBAIAAAAQgJAAhXigg");
	this.shape_706.setTransform(1360.7375,128.0047);

	this.shape_707 = new cjs.Shape();
	this.shape_707.graphics.f("#000000").s().p("AAhgZQgrg+ghgWQgOgMgKgCQgDAAgCADQAHALgCAMQgBANgKAHQgKAIgNgCQgNgBgHgKQgIgLACgMQABgNAKgIQAKgHANABQAHACAGADQAHgFAKgCQAPAAAPARQAUARA5BDQBKBoALBAIgBAAQgIAAhXigg");
	this.shape_707.setTransform(1358.9875,126.3047);

	this.shape_708 = new cjs.Shape();
	this.shape_708.graphics.f("#000000").s().p("AAhgaQgrg9ghgWQgOgLgKgDQgDAAgCADQAHAKgBANQgCANgKAHQgJAIgOgCQgMgBgIgKQgIgLACgMQABgNAKgHQAKgIANABQAHACAGADQAHgFAKgCQAPgBAPARQAUASA5BCQBKBoALBBIgBAAQgIAAhXihg");
	this.shape_708.setTransform(1357.2382,124.654);

	this.shape_709 = new cjs.Shape();
	this.shape_709.graphics.f("#000000").s().p("AAhgaQgrg9gigWQgNgMgKgCQgEAAgCADQAJAKgCANQgCANgKAHQgJAIgOgBQgMgCgIgKQgIgJACgOQABgMAKgIQAKgIANACQAHABAFADQAHgFAKgCQAPgBAQARQATASA6BCQBJBoALBBIAAAAQgIAAhXihg");
	this.shape_709.setTransform(1355.5132,122.954);

	this.shape_710 = new cjs.Shape();
	this.shape_710.graphics.f("#000000").s().p("AAhgaQgqg9gigWQgOgMgJgCQgFAAgBADQAIALgCAMQgBANgKAHQgJAJgOgCQgMgBgIgKQgIgKABgNQACgMAJgIQALgIAMABQAHABAGAEQAHgFAKgDQAPAAAPARQAVARA4BCQBKBoAKBBIAAAAQgIAAhXihg");
	this.shape_710.setTransform(1353.7441,121.2797);

	this.shape_711 = new cjs.Shape();
	this.shape_711.graphics.f("#000000").s().p("AAhgaQgrg9gigWQgNgMgKgCQgEAAgBAEQAHAKgBAMQgBAMgKAJQgJAHgNAAQgNgCgIgJQgIgLABgMQABgNAKgIQAKgIANABQAHACAFADQAHgFAKgDQAPAAAQARQAUARA5BCQBJBoALBBIgBAAQgIAAhWihg");
	this.shape_711.setTransform(1352.0191,119.5797);

	this.shape_712 = new cjs.Shape();
	this.shape_712.graphics.f("#000000").s().p("AAhgaQgrg+gigVQgNgLgKgDQgEAAgBADQAIAKgBANQgCANgJAHQgKAJgNgCQgMAAgJgKQgIgKABgNQACgMAJgJQAKgIANABQAHABAFAEQAHgFALgDQAOgBAQARQAUASA5BCQBKBpAKBAIAAAAQgIAAhXihg");
	this.shape_712.setTransform(1350.2694,117.927);

	this.shape_713 = new cjs.Shape();
	this.shape_713.graphics.f("#000000").s().p("AAhgaQgqg+gjgVQgNgMgKgCQgDAAgCAEQAIAKgBAMQgBANgKAIQgJAIgNgBQgNgBgIgKQgIgJABgNQABgNAJgIQAKgIANABQAHABAGADQAGgFALgDQAOgBAQARQAUASA5BCQBKBoAJBBIAAAAQgIAAhWihg");
	this.shape_713.setTransform(1348.5194,116.229);

	this.shape_714 = new cjs.Shape();
	this.shape_714.graphics.f("#000000").s().p("AAhgaQgqg+gigVQgOgMgKgCQgDAAgCADQAJAKgCAMQAAANgKAIQgKAJgNgBQgMgBgJgKQgIgJABgNQABgNAJgIQAKgJANABQAHACAGADQAGgFALgEQAOAAAQARQAUASA5BCQBKBoAJBBIAAABQgIAAhWiig");
	this.shape_714.setTransform(1346.7735,114.552);

	this.shape_715 = new cjs.Shape();
	this.shape_715.graphics.f("#000000").s().p("AAhgaQgqg+gigVQgOgLgKgDQgDAAgCAEQAJAJgCANQAAANgKAIQgJAIgNgBQgNAAgIgKQgIgJAAgNQABgNAJgIQAKgJANABIANAEQAGgFALgDQAOgBAQARQAUASA5BCQBKBoAJBBIAAAAQgJAAhVihg");
	this.shape_715.setTransform(1345.0485,112.879);

	this.shape_716 = new cjs.Shape();
	this.shape_716.graphics.f("#000000").s().p("AAhgbQgpg9gjgVQgOgMgKgDQgDAAgCAEQAJAKgBAMQgBANgJAIQgKAJgNgBQgMAAgJgKQgIgJAAgNQABgNAJgIQAKgIANAAQAHABAGADQAGgFALgEQAOAAAQARQAUARA5BCQBKBoAJBCIgBABQgHAAhWijg");
	this.shape_716.setTransform(1343.275,111.2019);

	this.shape_717 = new cjs.Shape();
	this.shape_717.graphics.f("#000000").s().p("AAhgbQgqg9gigVQgOgMgKgCQgEAAgBADQAJAKgBAMQAAANgKAJQgKAIgNAAQgMgBgIgJQgJgKABgNQAAgMAKgJQAIgIANAAQAHABAHADQAFgGAMgDQAOAAAQARQATARA7BCQBIBoAKBCIgBABQgIAAhVijg");
	this.shape_717.setTransform(1341.55,109.504);

	this.shape_718 = new cjs.Shape();
	this.shape_718.graphics.f("#000000").s().p("AAigbQgrg9gigVQgOgMgJgCQgFAAgBAEQAJAJgBANQAAANgJAIQgKAJgNgBQgMAAgJgKQgJgJABgNQABgMAJgJQAJgIANAAIANADQAGgFALgEQAOAAAQARQAUASA6BBQBJBpAJBCIgBAAQgIAAhUijg");
	this.shape_718.setTransform(1339.7987,107.8269);

	this.shape_719 = new cjs.Shape();
	this.shape_719.graphics.f("#000000").s().p("AAigbQgqg+gjgVQgOgLgJgDQgFAAAAAEQAIAKAAAMQgBANgJAIQgJAJgNAAQgNAAgIgKQgJgJAAgNQABgMAJgJQAJgIANgBQAHABAGADQAGgGALgDQAOAAAQARQAVARA5BCQBJBpAIBBIAAABQgIAAhUijg");
	this.shape_719.setTransform(1338.0487,106.154);

	this.shape_720 = new cjs.Shape();
	this.shape_720.graphics.f("#000000").s().p("AAhgbQgpg+gkgUQgNgMgKgDQgDABgCAEQAJAJAAAMQgBANgJAJQgJAJgNgBQgMAAgJgJQgJgJAAgNQAAgNAJgJQAKgIANAAIANADQAGgFAKgEQAPAAAQARQAUARA5BCQBKBoAIBDIAAAAQgIAAhVijg");
	this.shape_720.setTransform(1336.3237,104.4769);

	this.shape_721 = new cjs.Shape();
	this.shape_721.graphics.f("#000000").s().p("AAigbQgqg+gkgUQgNgMgJgCQgEAAgCAEQAJAJAAAMQAAANgJAJQgJAJgNAAQgMAAgKgJQgJgKAAgMQAAgNAKgJQAJgJANAAQAHABAGADQAGgGALgEQAOAAAQARQAUARA6BCQBJBoAHBDIAAAAQgHAAhUijg");
	this.shape_721.setTransform(1334.55,102.779);

	this.shape_722 = new cjs.Shape();
	this.shape_722.graphics.f("#000000").s().p("AAigbQgqg+gkgVQgNgMgKgCQgDAAgCAEQAJAKAAAMQAAANgJAJQgJAJgNAAQgMAAgJgJQgJgJAAgNQAAgNAJgJQAJgJANAAIANADQAGgFAKgEQAPgBAQARQAUASA6BCQBJBoAHBDIAAAAQgIAAhTijg");
	this.shape_722.setTransform(1332.825,101.1217);

	this.shape_723 = new cjs.Shape();
	this.shape_723.graphics.f("#000000").s().p("AAigbQgqg+gjgVQgOgLgKgDQgDABgBAEQAJAJgBAMQAAANgIAJQgJAJgNAAQgNAAgJgJQgJgJAAgNQAAgMAJgJQAJgJANAAQAHAAAGADQAGgGAKgEQAPgBAQASQAUARA6BCQBJBoAHBDIAAAAQgIAAhTijg");
	this.shape_723.setTransform(1331.075,99.4239);

	this.shape_724 = new cjs.Shape();
	this.shape_724.graphics.f("#000000").s().p("AAigbQgqg+gjgUQgOgMgKgCQgDAAgBAEQAJAJAAAMQAAANgJAJQgJAJgNAAQgMABgJgJQgJgJgBgNQAAgNAJgJQAJgJANAAIANADQAGgFAKgFQAPAAAQARQAUARA6BCQBJBpAHBCIgBAAQgIAAhSijg");
	this.shape_724.setTransform(1329.325,97.7289);

	this.shape_725 = new cjs.Shape();
	this.shape_725.graphics.f("#000000").s().p("AAigcQgqg9gjgVQgOgMgJgCQgFAAAAAFQAJAIAAANQAAAMgIAKQgJAJgNAAQgNAAgJgIQgJgJAAgNQgBgMAJgKQAJgJANAAIANADQAGgGAKgEQAPgBAQARQAUASA6BBQBJBpAHBDIgBAAQgHAAhTikg");
	this.shape_725.setTransform(1327.5987,96.0717);

	this.shape_726 = new cjs.Shape();
	this.shape_726.graphics.f("#000000").s().p("AAigcQgpg9glgVQgNgLgJgDQgEABgCAEQAKAJAAAMQABANgJAJQgJAKgNAAQgMAAgJgJQgJgIgCgNQAAgNAJgJQAJgJANgBQAGAAAGADQAHgGAKgEQAPgBAQARQATASA7BBQBJBpAGBDIAAAAQgIAAhSikg");
	this.shape_726.setTransform(1325.85,94.3737);

	this.shape_727 = new cjs.Shape();
	this.shape_727.graphics.f("#000000").s().p("AAigcQgpg9gkgVQgOgLgJgCQgEAAgBAEQAJAJABAMQABANgJAJQgJAJgNABQgMAAgKgIQgJgJgBgNQAAgMAIgJQAJgKANAAQAHAAAGACQAGgGAKgEQAPgBAQASQAVARA5BCQBJBoAGBDIAAAAQgIAAhSikg");
	this.shape_727.setTransform(1324.0986,92.6969);

	this.shape_728 = new cjs.Shape();
	this.shape_728.graphics.f("#000000").s().p("AAigcQgqg+gkgUQgNgMgKgCQgDAAgBAFQAKAIAAANQAAANgIAJQgJAKgNAAQgMABgKgJQgJgJgBgMQAAgNAIgJQAJgKAMgBIAOADQAFgGALgEQAOgBARARQAUASA6BBQBJBoAGBEIgBAAQgIAAhRikg");
	this.shape_728.setTransform(1322.3735,91.0237);

	this.shape_729 = new cjs.Shape();
	this.shape_729.graphics.f("#000000").s().p("AAigcQgpg+glgUQgNgMgKgCQgDABgBAEQAKAJAAAMQABANgJAJQgJAKgMAAQgNABgJgIQgKgJgBgNQAAgMAIgKQAJgJANgBIANACQAFgGALgEQAOgBARARQAUASA6BBQBIBoAHBEIAAAAQgIAAhSikg");
	this.shape_729.setTransform(1320.6236,89.3467);

	this.shape_730 = new cjs.Shape();
	this.shape_730.graphics.f("#000000").s().p("AAigcQgpg+glgUQgNgLgKgDQgDABgBAEQAJAJABAMQABANgIAJQgIAKgOABQgMABgKgJQgJgIgBgNQgBgNAIgJQAJgKANgBQAHAAAGADQAFgGALgFQAOgBARASQAUAQA6BCQBJBpAFBDIAAAAQgIAAhRikg");
	this.shape_730.setTransform(1318.8735,87.6489);

	this.shape_731 = new cjs.Shape();
	this.shape_731.graphics.f("#000000").s().p("AAigcQgpg+glgUQgNgMgKgCQgDAAgBAFQAKAIAAANQACANgJAJQgIAKgNABQgNABgJgJQgKgIgBgNQAAgMAHgKQAJgKANgBQAHAAAGACQAGgGAKgEQAOgCARASQAUASA6BBQBJBpAFBDIAAAAQgIAAhRikg");
	this.shape_731.setTransform(1317.1484,85.9926);

	this.shape_732 = new cjs.Shape();
	this.shape_732.graphics.f("#000000").s().p("AAjgcQgqg+gkgUQgOgMgJgCQgFABAAAEQAKAJABAMQABANgIAJQgIAKgNABQgNABgKgIQgJgIgCgNQAAgNAIgKQAIgJANgBQAHAAAGACQAGgGAKgFQAOgCARASQAUASA6BBQBJBpAFBDIgBAAQgIAAhPikg");
	this.shape_732.setTransform(1315.3735,84.2946);

	this.shape_733 = new cjs.Shape();
	this.shape_733.graphics.f("#000000").s().p("AAjgdQgqg9gkgUQgOgLgJgDQgEABgBAEQAKAIABAMQABANgIAKQgIAKgNABQgMABgKgIQgKgIgBgNQgBgNAIgJQAIgKANgCQAHAAAGADQAGgHAKgEQAOgCARASQAUARA7BBQBIBpAFBEIgBAAQgHAAhQilg");
	this.shape_733.setTransform(1313.6484,82.6217);

	this.shape_734 = new cjs.Shape();
	this.shape_734.graphics.f("#000000").s().p("ABfBRQgXgygmg8Qgpg9glgUQgOgLgJgDQgDAAgBAFQAKAIABANQABANgIAJQgIAKgNABQgMABgKgIQgKgIgBgNQgCgMAIgKQAJgJAMgCIAOACQAFgGAKgFQAPgCAQASQAVARA6BCQBIBoAFBEIAAAAQgEAAgXg3g");
	this.shape_734.setTransform(1311.9132,80.9226);

	this.shape_735 = new cjs.Shape();
	this.shape_735.graphics.f("#000000").s().p("AAkgcQgpg9gkgVQgOgMgKgCQgDAAgDADQAIALgDAMQgCAMgKAIQgLAHgMgCQgNgCgHgKQgIgLADgNQACgMAKgHQALgIAMACIANAGQAHgFAKgCQAPAAAPAQQAVASA5BBQBKBoAHBDIgBABQgIAAhTikg");
	this.shape_735.setTransform(1299.2188,94.1047);

	this.shape_736 = new cjs.Shape();
	this.shape_736.graphics.f("#000000").s().p("AAlgWQgqg9gjgVQgNgMgLgDIgHABQAEAMgGALQgFAMgMAEQgMAEgMgFQgLgFgEgMQgFgMAGgMQAFgLAMgFQANgEALAFIAKAJQAIgCAKAAQAPABAPAPQAUARA5BCQBKBoAKBBIAAABQgIAAhXiig");
	this.shape_736.setTransform(1286.6738,106.8035);

	this.shape_737 = new cjs.Shape();
	this.shape_737.graphics.f("#000000").s().p("AAlgPQgrg9ghgWQgOgMgMgDIgHgCQABANgJAJQgIAKgNABQgMABgKgJQgKgIgBgMQAAgNAIgKQAIgJANgBQANgBAJAIQAFAFADAGQAIAAAJACQAPAFAOALQAUASA5BCQBLBoAMA/IAAAAQgIAAhaifg");
	this.shape_737.setTransform(1274.2485,119.4283);

	this.shape_738 = new cjs.Shape();
	this.shape_738.graphics.f("#000000").s().p("AAigIQgrg8gggXQgOgMgMgEIgIgEQgDAMgKAHQgLAHgMgDQgMgCgIgLQgGgLACgMQACgMALgIQALgGAMACQANADAHAKQAEAGAAAHQAJABAHAFQAOAGAOAKQAUASA4BCQBMBnAPA+IAAABQgIAAheieg");
	this.shape_738.setTransform(1262.0015,132.0063);

	this.shape_739 = new cjs.Shape();
	this.shape_739.graphics.f("#000000").s().p("AAjgKQgsg8ghgWQgOgLgMgEIgIgDQgCANgKAHQgJAIgNgCQgMgBgJgKQgIgKACgNQABgMAKgIQAKgIANABQANACAIAKQAEAGABAGIARAFQAOAGAOAKQAUARA6BBQBNBmAPA+IAAAAQgJAAheicg");
	this.shape_739.setTransform(1249.6632,145.4443);

	this.shape_740 = new cjs.Shape();
	this.shape_740.graphics.f("#000000").s().p("AAjgMQgtg8gigVQgNgMgNgCIgIgDQAAANgJAIQgKAJgMgBQgNAAgJgJQgIgKAAgMQAAgNAKgJQAJgJAMABQANABAJAJQAEAFADAGQAIAAAJAEQAPAFAOAKQAUARA7BAQBPBlAPA/IAAAAQgIAAhhibg");
	this.shape_740.setTransform(1237.35,158.9036);

	this.shape_741 = new cjs.Shape();
	this.shape_741.graphics.f("#000000").s().p("AAkgPQgug7gjgUQgNgLgNgCIgIgDQABANgJAJQgIAKgNAAQgMABgKgIQgKgJAAgMQgBgNAJgKQAIgJANgBQANAAAJAIQAFAFADAGQAIAAAJACQAPAFAOAKQAVAQA8A/QBRBlAPA+IgBABQgIAAhhibg");
	this.shape_741.setTransform(1225.0486,172.3547);

	this.shape_742 = new cjs.Shape();
	this.shape_742.graphics.f("#000000").s().p("AAkgRQgvg7gjgSQgOgLgNgCIgIgCQADANgJAKQgHAKgNACQgMABgLgHQgKgIgCgNQgBgMAHgLQAIgJAMgCQANgCAKAIQAGAEADAGQAIgBAKACQAPADAOALQAVAQA+A+QBSBjAPA/IAAAAQgJAAhiiZg");
	this.shape_742.setTransform(1212.7625,185.8174);

	this.shape_743 = new cjs.Shape();
	this.shape_743.graphics.f("#000000").s().p("AAkgUQgwg5gkgSQgOgLgNgBIgHgBQACANgGAKQgHALgMACQgNADgLgHQgLgGgCgNQgDgMAGgLQAIgLAMgDQAMgCAMAGQAFAFAEAFQAIgCAKACQAOACAPALQAWAQA/A8QBSBiAQBAIAAAAQgJAAhjiZg");
	this.shape_743.setTransform(1200.5,199.2562);

	this.shape_744 = new cjs.Shape();
	this.shape_744.graphics.f("#000000").s().p("AAjgWQgwg5glgRQgPgKgLgBIgIAAQAEAMgGALQgGALgMAEQgMAEgMgGQgLgGgEgMQgDgMAFgMQAGgLAMgEQAMgDAMAFQAGAEAEAFQAIgCAKAAQAPACAPALQAWAQBAA7QBUBgAQBBIAAAAQgJAAhliYg");
	this.shape_744.setTransform(1188.2569,212.7119);

	this.shape_745 = new cjs.Shape();
	this.shape_745.graphics.f("#000000").s().p("AAjgYQgxg4gmgQQgPgJgLgCIgIABQAGAMgGALQgFAMgLAFQgMAEgMgEQgLgFgGgMQgEgMAEgMQAGgLALgFQAMgFAMAFIALAIQAHgDAKAAQAQABAQALQAWAPBBA6QBVBfAQBBIgBAAQgIAAhmiXg");
	this.shape_745.setTransform(1176.0125,226.1438);

	this.shape_746 = new cjs.Shape();
	this.shape_746.graphics.f("#000000").s().p("AAjgaQgyg3gmgQQgPgJgMgBQgEgBgDACQAGAMgEAMQgEALgLAHQgLAFgNgDQgMgEgGgMQgGgMAEgMQAEgLALgGQAMgGAMAEQAGACAGAFQAHgEAKAAQAPgBARAMQAWAPBCA5QBXBdAQBCIgBAAQgIAAhniWg");
	this.shape_746.setTransform(1163.795,239.6);

	this.shape_747 = new cjs.Shape();
	this.shape_747.graphics.f("#000000").s().p("AAigcQg0g3gmgOQgPgJgLgBIgHACQAHAMgDALQgDANgLAGQgLAHgNgDQgMgDgGgKQgHgLADgNQADgMAKgHQALgGANACIAMAGQAHgDAKgDQAPAAARAMQAWANBEA4QBYBcAQBCIAAAAQgJAAhoiUg");
	this.shape_747.setTransform(1151.6403,253.0217);

	this.shape_748 = new cjs.Shape();
	this.shape_748.graphics.f("#000000").s().p("AAhgdQg0g2gngNQgPgJgLAAQgFAAgCADQAIAKgCAMQgCANgKAHQgKAIgNgCQgNgCgHgKQgIgKACgNQACgMAKgIQAKgHANABQAHACAFADQAHgEAKgDQAPgCASANQAWANBFA2QBaBbAQBCIgBAAQgJAAhpiTg");
	this.shape_748.setTransform(1139.4375,266.3234);

	this.shape_749 = new cjs.Shape();
	this.shape_749.graphics.f("#000000").s().p("AAggeQg0g1gpgMQgPgJgLAAQgEABgCADQAJAKgBAMQgBANgKAIQgJAIgNAAQgMgBgJgKQgJgJABgNQABgMAJgJQAKgJANABQAHABAGADQAGgFAKgEQAPgCASAMQAXANBGA1QBbBZAQBEIgBAAQgIAAhriTg");
	this.shape_749.setTransform(1127.27,279.6172);

	this.shape_750 = new cjs.Shape();
	this.shape_750.graphics.f("#000000").s().p("AAegfQg1g0gogLQgPgIgLAAQgEABgCADQAKAJAAAMQAAANgJAJQgIAJgNABQgNAAgJgJQgJgJgBgMQAAgNAIgJQAKgJANgBQAHAAAFADQAHgGAJgEQAPgDATAMQAXANBHAzQBbBZARBDIAAAAQgJAAhtiSg");
	this.shape_750.setTransform(1115.1,292.9015);

	this.shape_751 = new cjs.Shape();
	this.shape_751.graphics.f("#000000").s().p("AAdgfQg1gzgqgKQgPgIgLAAIgFAEQAKAJABAMQACAMgIAKQgIAKgNACQgMABgKgIQgKgIgCgNQgBgMAIgKQAIgJANgCQAHAAAGABQAFgGAKgFQAOgDATAMQAYAMBIAyQBdBXARBEIgBAAQgIAAhuiRg");
	this.shape_751.setTransform(1102.9632,306.192);

	this.shape_752 = new cjs.Shape();
	this.shape_752.graphics.f("#000000").s().p("AAcgfQg2gygqgJQgQgIgKAAQgEABAAAEQAKAHACANQADAMgHAKQgIALgMADQgMACgLgHQgKgHgDgNQgCgMAHgLQAHgKAMgDQAHAAAHABQAEgHAKgGQAOgEAUAMQAYAMBJAxQBeBUARBFIgBAAQgJAAhuiPg");
	this.shape_752.setTransform(1090.8278,319.447);

	this.shape_753 = new cjs.Shape();
	this.shape_753.graphics.f("#000000").s().p("AAhgEQgihCgYgeQgLgOgMgGIgHgEQgDANgKAGQgLAHgMgDQgNgDgHgLQgGgLACgMQADgNALgHQALgGAMACQAMADAHALQAEAGABAHQAIACAIAFQANAIALANQAQAVArBMQA8ByAMA7IgBAAQgIAAhLing");
	this.shape_753.setTransform(1088.2903,327.3198);

	this.shape_754 = new cjs.Shape();
	this.shape_754.graphics.f("#000000").s().p("AAGAQQgKhKABgmQgEgRgHgNIACgLQgNACgKgIQgJgIgCgMQgCgMAHgLQAJgKALgCQANgBAJAHQALAIABAMQADANgJAKQgEAGgFADQABAIgCAHQADAOAJAOQAGAbAEBUQARB/AMA6QgIgDgii0g");
	this.shape_754.setTransform(1089.4414,336.7125);

	this.shape_755 = new cjs.Shape();
	this.shape_755.graphics.f("#000000").s().p("AAHAUQgpg+gRgiQgLgOgMgIIgCgLQgLAGgMgEQgNgDgGgLQgGgLADgNQAEgMALgGQALgGAMADQAMADAHALQAGAMgDAMIgHAMQAEAHABAHQAIAMAQAIQAQAVApBJQBHBsAiAwIgBAAQgIAAhriUg");
	this.shape_755.setTransform(1077.625,351.9702);

	this.shape_756 = new cjs.Shape();
	this.shape_756.graphics.f("#000000").s().p("AB6BAQghgsgzgwQg3gxgrgHQgRgGgMAAIgJAAQAEAMgHALQgGALgMADQgMAEgMgGQgLgGgDgMQgEgNAGgLQAHgLAMgEQAMgDALAGQAGAEAEAFQAJgCAJABQAQAAAQAGQAZAKBKAuQBgBTASBGIgBAAQgDAAgigyg");
	this.shape_756.setTransform(1070.8855,347.7163);

	this.shape_757 = new cjs.Shape();
	this.shape_757.graphics.f("#000000").s().p("ABnBDQgYgygqg4Qgvg3gugIQgQgJgKAAQgDACABAEQALAGAEAMQAEAMgGALQgFALgNAEQgMAFgLgGQgLgGgFgMQgDgMAFgMQAGgLAMgEIANgBQAEgHAJgHQANgFAVAOQAYAMBHA1QAqAwAWA8QAVA0gCAMIAAAAQgEAAgXg5g");
	this.shape_757.setTransform(1070.466,343.5361);

	this.shape_758 = new cjs.Shape();
	this.shape_758.graphics.f("#000000").s().p("AAigHQg2gzgogMQgPgIgPgDIgHgHQgGAKgMAEQgNADgLgFQgLgHgDgMQgEgMAGgLQAGgLANgEQAMgDALAFQALAHAEAMQABAHgBAGQAIAFAEAFQANAGASACQAXANBHAzQBdBXAUBBIgBAAQgIAAhxiOg");
	this.shape_758.setTransform(1065.1355,326.4037);

	this.shape_759 = new cjs.Shape();
	this.shape_759.graphics.f("#000000").s().p("AAhgGQg1g0glgPQgQgJgOgCIgHgHQgFALgNAEQgMAFgLgFQgMgFgEgNQgFgMAGgLQAFgLAMgFQAMgFALAGQAMAFAFAMIABANQAIAEAFAFQANAHARADQAXANBEA3QBcBZAVA+IgBAAQgJAAhwiOg");
	this.shape_759.setTransform(1051.3988,344.5804);

	this.shape_760 = new cjs.Shape();
	this.shape_760.graphics.f("#000000").s().p("AAggFQg0g2gkgRQgPgKgOgDIgHgGQgFAMgLAFQgMAGgMgFQgMgFgFgLQgFgMAEgMQAEgMAMgFQAMgFALAEQAMAFAGALQACAHAAAHQAJADAFAFQAOAGAQAFQAWAOBCA5QBaBcAWA8IgBAAQgIAAhwiOg");
	this.shape_760.setTransform(1037.7111,362.8178);

	this.shape_761 = new cjs.Shape();
	this.shape_761.graphics.f("#000000").s().p("AAfgEQgzg4gigTQgOgKgOgDIgIgGQgDAMgLAGQgLAGgNgDQgMgEgGgLQgGgLADgMQAEgMALgHQAMgGALAEQANAEAGAKQADAHAAAHIAPAHIAdAMQAWAPA/A8QBYBeAXA7IAAAAQgIAAhwiPg");
	this.shape_761.setTransform(1024.0105,381.0421);

	this.shape_762 = new cjs.Shape();
	this.shape_762.graphics.f("#000000").s().p("AAdgEQgxg5gggVQgOgLgNgDIgIgFQgDANgLAGQgKAHgNgDQgMgDgHgKQgHgLADgMQADgNAKgHQALgGAMACQAMADAIAKIAEANIAQAHIAdANQAVARA8A+QBVBgAZA4IgBABQgJAAhuiQg");
	this.shape_762.setTransform(1010.3653,399.2612);

	this.shape_763 = new cjs.Shape();
	this.shape_763.graphics.f("#000000").s().p("AAbgEQgvg5gegYQgOgMgNgDIgHgEQgCANgKAHQgLAHgMgBQgMgCgJgLQgHgJACgNQABgMALgJQAKgHAMACQANABAIALQAEAGABAGQAJABAHAEQAPAGAOAKQAUARA6BAQBSBiAbA3IgBABQgJAAhuiRg");
	this.shape_763.setTransform(996.7289,417.5105);

	this.shape_764 = new cjs.Shape();
	this.shape_764.graphics.f("#000000").s().p("AAagDQgvg7gcgaQgMgMgNgEIgIgDQAAANgKAIQgKAIgMgBQgNAAgJgKQgIgKABgMQABgNAKgJQAKgIAMABQANABAIAJIAGAMIARAFQAOAFAOAMQAUASA2BCQBRBkAbA1IAAAAQgJAAhtiQg");
	this.shape_764.setTransform(974.5944,426.5801);

	this.shape_765 = new cjs.Shape();
	this.shape_765.graphics.f("#000000").s().p("AAfghQg9gpgrgCQgRgFgMACIgIABQAGAMgEAMQgDAMgLAGQgLAGgNgDQgMgDgGgMQgGgLADgMQAEgMALgGQALgHAMAEQAHACAFAFQAHgEAKgCQAQgCARAFQAZAIBQAkQBpBHAaBEIgBAAQgJAAiAiAg");
	this.shape_765.setTransform(938.1105,440.5996);

	this.shape_766 = new cjs.Shape();
	this.shape_766.graphics.f("#000000").s().p("AAdgRQg1gzglgQQgPgKgMgBIgIAAQADANgHAKQgGALgMADQgMADgMgGQgLgHgDgMQgDgMAGgLQAHgLAMgDQAMgEAMAHIAJAJQAJgCAJABQAQACAPAJQAXAOBEA2QBdBYAaA7IgBAAQgJAAh3iJg");
	this.shape_766.setTransform(923.375,417.0957);

	this.shape_767 = new cjs.Shape();
	this.shape_767.graphics.f("#000000").s().p("AB/AoQgkgog5gqQg+gnguAIQgRgDgMADIgIADQAHAKgCANQgCANgLAGQgKAIgNgCQgMgCgIgKQgHgLACgNQADgMAKgHQAKgIANACQAHACAFADIAQgHQAPgDASACQAbAFBUAcQBHArA5BiIgBAAQgEAAglgwg");
	this.shape_767.setTransform(889.3438,380.7789);

	this.shape_768 = new cjs.Shape();
	this.shape_768.graphics.f("#000000").s().p("AB9AzQgkgpg2gtQg8grgsgBQgRgFgMACIgIACQAGALgEAMQgEAMgLAGQgLAGgNgEQgMgDgGgLQgGgLAEgNQAEgMALgGQALgGAMADQAHADAFAEQAHgDAKgCQAQgCARAFQAZAIBQAlQA0AlAlA0QAiAsABALIgBAAQgEAAgkgvg");
	this.shape_768.setTransform(872.3855,361.5415);

	this.shape_769 = new cjs.Shape();
	this.shape_769.graphics.f("#000000").s().p("AAhgaQg4gwgpgJQgRgHgMABIgIAAQAFAMgFALQgFAMgMAFQgMAEgMgFQgLgFgFgMQgFgMAFgMQAGgLALgFQAMgEAMAFQAHADAEAFQAHgDAKAAQAPAAARAHQAYALBLAuQBiBSAWBBIgBAAQgKAAh2iIg");
	this.shape_769.setTransform(855.5934,342.1786);

	this.shape_770 = new cjs.Shape();
	this.shape_770.graphics.f("#000000").s().p("AAfgSQg1g0glgQQgPgJgMgBIgJAAQAEAMgHALQgGAKgNAEQgMADgLgHQgLgGgDgMQgDgNAGgLQAGgLANgDQANgDAKAGQAGAFAEAFQAIgCAKABQAPABAQAKQAWANBEA3QBdBZAXA8IgBAAQgJAAhziLg");
	this.shape_770.setTransform(838.9026,322.8488);

	this.shape_771 = new cjs.Shape();
	this.shape_771.graphics.f("#000000").s().p("AAcgKQgxg4gggXQgOgLgMgCIgIgCQACANgIAKQgIAKgMABQgNACgKgIQgLgIgBgMQgCgNAIgKQAIgKAMgCQANgBAKAIQAGAEADAGQAIgBAJACQAPAEAPALQAVAQA8A/QBVBgAaA3IAAAAQgJAAhwiOg");
	this.shape_771.setTransform(822.3132,303.5948);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_631,p:{x:1492.075,y:252.9815}}]}).to({state:[{t:this.shape_632}]},1).to({state:[{t:this.shape_633}]},1).to({state:[{t:this.shape_634}]},1).to({state:[{t:this.shape_635}]},1).to({state:[{t:this.shape_636}]},1).to({state:[{t:this.shape_637}]},1).to({state:[{t:this.shape_638}]},1).to({state:[{t:this.shape_639}]},1).to({state:[{t:this.shape_640}]},1).to({state:[{t:this.shape_641}]},1).to({state:[{t:this.shape_642}]},1).to({state:[{t:this.shape_643}]},1).to({state:[{t:this.shape_644}]},1).to({state:[{t:this.shape_645}]},1).to({state:[{t:this.shape_646}]},1).to({state:[{t:this.shape_647}]},1).to({state:[{t:this.shape_648}]},1).to({state:[{t:this.shape_649}]},1).to({state:[{t:this.shape_650}]},1).to({state:[{t:this.shape_651}]},1).to({state:[{t:this.shape_652}]},1).to({state:[{t:this.shape_653}]},1).to({state:[{t:this.shape_654}]},1).to({state:[{t:this.shape_655}]},1).to({state:[{t:this.shape_656}]},1).to({state:[{t:this.shape_657}]},1).to({state:[{t:this.shape_658}]},1).to({state:[{t:this.shape_659}]},1).to({state:[{t:this.shape_660}]},1).to({state:[{t:this.shape_661}]},1).to({state:[{t:this.shape_662}]},1).to({state:[{t:this.shape_663}]},1).to({state:[{t:this.shape_664}]},1).to({state:[{t:this.shape_665}]},1).to({state:[{t:this.shape_666}]},1).to({state:[{t:this.shape_667}]},1).to({state:[{t:this.shape_668}]},1).to({state:[{t:this.shape_669}]},1).to({state:[{t:this.shape_670}]},1).to({state:[{t:this.shape_671}]},1).to({state:[{t:this.shape_672}]},1).to({state:[{t:this.shape_673}]},1).to({state:[{t:this.shape_674}]},1).to({state:[{t:this.shape_675}]},1).to({state:[{t:this.shape_676}]},1).to({state:[{t:this.shape_677}]},1).to({state:[{t:this.shape_678}]},1).to({state:[{t:this.shape_679}]},1).to({state:[{t:this.shape_680}]},1).to({state:[{t:this.shape_681}]},1).to({state:[{t:this.shape_682}]},1).to({state:[{t:this.shape_683}]},1).to({state:[{t:this.shape_684}]},1).to({state:[{t:this.shape_685}]},1).to({state:[{t:this.shape_686}]},1).to({state:[{t:this.shape_687}]},1).to({state:[{t:this.shape_688}]},1).to({state:[{t:this.shape_689}]},1).to({state:[{t:this.shape_690}]},1).to({state:[{t:this.shape_691}]},1).to({state:[{t:this.shape_692}]},1).to({state:[{t:this.shape_693}]},1).to({state:[{t:this.shape_694}]},1).to({state:[{t:this.shape_695}]},1).to({state:[{t:this.shape_696}]},1).to({state:[{t:this.shape_697}]},1).to({state:[{t:this.shape_698}]},1).to({state:[{t:this.shape_699}]},1).to({state:[{t:this.shape_700}]},1).to({state:[{t:this.shape_701}]},1).to({state:[{t:this.shape_702}]},1).to({state:[{t:this.shape_703}]},1).to({state:[{t:this.shape_704}]},1).to({state:[{t:this.shape_705}]},1).to({state:[{t:this.shape_706}]},1).to({state:[{t:this.shape_707}]},1).to({state:[{t:this.shape_708}]},1).to({state:[{t:this.shape_709}]},1).to({state:[{t:this.shape_710}]},1).to({state:[{t:this.shape_711}]},1).to({state:[{t:this.shape_712}]},1).to({state:[{t:this.shape_713}]},1).to({state:[{t:this.shape_714}]},1).to({state:[{t:this.shape_715}]},1).to({state:[{t:this.shape_716}]},1).to({state:[{t:this.shape_717}]},1).to({state:[{t:this.shape_718}]},1).to({state:[{t:this.shape_719}]},1).to({state:[{t:this.shape_720}]},1).to({state:[{t:this.shape_721}]},1).to({state:[{t:this.shape_722}]},1).to({state:[{t:this.shape_723}]},1).to({state:[{t:this.shape_724}]},1).to({state:[{t:this.shape_725}]},1).to({state:[{t:this.shape_726}]},1).to({state:[{t:this.shape_727}]},1).to({state:[{t:this.shape_728}]},1).to({state:[{t:this.shape_729}]},1).to({state:[{t:this.shape_730}]},1).to({state:[{t:this.shape_731}]},1).to({state:[{t:this.shape_732}]},1).to({state:[{t:this.shape_733}]},1).to({state:[{t:this.shape_734}]},1).to({state:[{t:this.shape_735}]},1).to({state:[{t:this.shape_736}]},1).to({state:[{t:this.shape_737}]},1).to({state:[{t:this.shape_738}]},1).to({state:[{t:this.shape_739}]},1).to({state:[{t:this.shape_740}]},1).to({state:[{t:this.shape_741}]},1).to({state:[{t:this.shape_742}]},1).to({state:[{t:this.shape_743}]},1).to({state:[{t:this.shape_744}]},1).to({state:[{t:this.shape_745}]},1).to({state:[{t:this.shape_746}]},1).to({state:[{t:this.shape_747}]},1).to({state:[{t:this.shape_748}]},1).to({state:[{t:this.shape_749}]},1).to({state:[{t:this.shape_750}]},1).to({state:[{t:this.shape_751}]},1).to({state:[{t:this.shape_752}]},1).to({state:[{t:this.shape_753}]},1).to({state:[{t:this.shape_754}]},1).to({state:[{t:this.shape_755}]},1).to({state:[{t:this.shape_756}]},1).to({state:[{t:this.shape_757}]},1).to({state:[{t:this.shape_758}]},1).to({state:[{t:this.shape_759}]},1).to({state:[{t:this.shape_760}]},1).to({state:[{t:this.shape_761}]},1).to({state:[{t:this.shape_762}]},1).to({state:[{t:this.shape_763}]},1).to({state:[{t:this.shape_764}]},1).to({state:[{t:this.shape_631,p:{x:952.475,y:435.6815}}]},1).to({state:[{t:this.shape_765}]},1).to({state:[{t:this.shape_766}]},1).to({state:[{t:this.shape_631,p:{x:909.125,y:393.8066}}]},1).to({state:[{t:this.shape_767}]},1).to({state:[{t:this.shape_768}]},1).to({state:[{t:this.shape_769}]},1).to({state:[{t:this.shape_770}]},1).to({state:[{t:this.shape_771}]},1).to({state:[{t:this.shape_631,p:{x:805.875,y:284.3597}}]},1).wait(1));

	// Каркас_5
	this.ikNode_25 = new lib.стопал();
	this.ikNode_25.name = "ikNode_25";
	this.ikNode_25.setTransform(1622,424.95,0.9279,0.9279,61.5786,0,0,0.1,-0.1);

	this.ikNode_23 = new lib.голеньл();
	this.ikNode_23.name = "ikNode_23";
	this.ikNode_23.setTransform(1550.05,352.5,0.9285,0.9285,55.8568,0,0,13.7,25);

	this.ikNode_21 = new lib.бедрол();
	this.ikNode_21.name = "ikNode_21";
	this.ikNode_21.setTransform(1651.25,417.55,0.9285,0.9285,-147.8036,0,0,21.1,10.4);

	this.ikNode_15 = new lib.кистьл();
	this.ikNode_15.name = "ikNode_15";
	this.ikNode_15.setTransform(1547.15,433.8,0.9953,0.9953,-66.9023,0,0,90.8,0.8);

	this.ikNode_13 = new lib.локотьл();
	this.ikNode_13.name = "ikNode_13";
	this.ikNode_13.setTransform(1518.15,391.8,0.9953,0.9953,-93.3004,0,0,69.8,6.7);

	this.ikNode_11 = new lib.плечол();
	this.ikNode_11.name = "ikNode_11";
	this.ikNode_11.setTransform(1511,354.3,0.9951,0.9951,-59.698,0,0,44.6,14.6);

	this.ikNode_3 = new lib.голова_1();
	this.ikNode_3.name = "ikNode_3";
	this.ikNode_3.setTransform(1504.1,332.75,0.9956,0.9956,-29.6306,0,0,64.2,50.4);

	this.ikNode_2 = new lib.грудь_1();
	this.ikNode_2.name = "ikNode_2";
	this.ikNode_2.setTransform(1550.3,337.9,0.9971,0.9971,12.8846,0,0,71.4,33.8);

	this.ikNode_17 = new lib.животик_1();
	this.ikNode_17.name = "ikNode_17";
	this.ikNode_17.setTransform(1595.8,356.15,0.9953,0.9953,40.8667,0,0,43.6,23.2);

	this.ikNode_19 = new lib.попа_1();
	this.ikNode_19.name = "ikNode_19";
	this.ikNode_19.setTransform(1630.55,391.15,0.9946,0.9946,48.1957,0,0,31.2,18.1);

	this.ikNode_27 = new lib.бедроп();
	this.ikNode_27.name = "ikNode_27";
	this.ikNode_27.setTransform(1596.5,387.25,0.995,0.995,-166.8301,0,0,44.4,10.4);

	this.ikNode_29 = new lib.голеньп();
	this.ikNode_29.name = "ikNode_29";
	this.ikNode_29.setTransform(1537.3,363.9,0.9941,0.9941,20.5836,0,0,14.2,12.7);

	this.ikNode_31 = new lib.стопап();
	this.ikNode_31.name = "ikNode_31";
	this.ikNode_31.setTransform(1616.7,400.2,0.994,0.994,70.6389,0,0,15.8,5.1);

	this.ikNode_33 = new lib.плечоп();
	this.ikNode_33.name = "ikNode_33";
	this.ikNode_33.setTransform(1480.7,334.85,1.6021,1.6021,-51.7903,0,0,18.1,14.3);

	this.ikNode_35 = new lib.локотьп();
	this.ikNode_35.name = "ikNode_35";
	this.ikNode_35.setTransform(1487.25,376.65,1.6021,1.6021,-69.4249,0,0,31.9,12.6);

	this.ikNode_37 = new lib.кистьп();
	this.ikNode_37.name = "ikNode_37";
	this.ikNode_37.setTransform(1491.7,433.35,1.602,1.602,-89.2316,0,0,37.6,8.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.ikNode_37,p:{regX:37.6,scaleX:1.602,scaleY:1.602,rotation:-89.2316,x:1491.7,y:433.35,regY:8.4}},{t:this.ikNode_35,p:{scaleX:1.6021,scaleY:1.6021,rotation:-69.4249,x:1487.25,y:376.65,regY:12.6}},{t:this.ikNode_33,p:{scaleX:1.6021,scaleY:1.6021,rotation:-51.7903,x:1480.7,y:334.85,regX:18.1}},{t:this.ikNode_31,p:{regY:5.1,rotation:70.6389,x:1616.7,y:400.2,scaleX:0.994,scaleY:0.994}},{t:this.ikNode_29,p:{regX:14.2,regY:12.7,scaleX:0.9941,scaleY:0.9941,rotation:20.5836,x:1537.3,y:363.9}},{t:this.ikNode_27,p:{scaleX:0.995,scaleY:0.995,rotation:-166.8301,x:1596.5,y:387.25,regY:10.4,regX:44.4}},{t:this.ikNode_19,p:{regX:31.2,scaleX:0.9946,scaleY:0.9946,rotation:48.1957,x:1630.55,y:391.15,regY:18.1}},{t:this.ikNode_17,p:{scaleX:0.9953,scaleY:0.9953,rotation:40.8667,x:1595.8,y:356.15,regY:23.2}},{t:this.ikNode_2,p:{scaleX:0.9971,scaleY:0.9971,rotation:12.8846,x:1550.3,y:337.9}},{t:this.ikNode_3,p:{scaleX:0.9956,scaleY:0.9956,rotation:-29.6306,x:1504.1,y:332.75,regX:64.2,regY:50.4}},{t:this.ikNode_11,p:{regX:44.6,scaleX:0.9951,scaleY:0.9951,rotation:-59.698,x:1511,y:354.3,regY:14.6}},{t:this.ikNode_13,p:{scaleX:0.9953,scaleY:0.9953,rotation:-93.3004,x:1518.15,y:391.8,regY:6.7,regX:69.8}},{t:this.ikNode_15,p:{regX:90.8,scaleX:0.9953,scaleY:0.9953,rotation:-66.9023,x:1547.15,y:433.8,regY:0.8}},{t:this.ikNode_21,p:{regX:21.1,rotation:-147.8036,x:1651.25,y:417.55,regY:10.4,scaleX:0.9285,scaleY:0.9285}},{t:this.ikNode_23,p:{regX:13.7,regY:25,scaleX:0.9285,scaleY:0.9285,rotation:55.8568,x:1550.05,y:352.5}},{t:this.ikNode_25,p:{rotation:61.5786,x:1622,y:424.95,regX:0.1,scaleX:0.9279,scaleY:0.9279,regY:-0.1}}]},86).to({state:[{t:this.ikNode_37,p:{regX:37.5,scaleX:1.6019,scaleY:1.6019,rotation:-87.7891,x:1480.85,y:424.15,regY:8.4}},{t:this.ikNode_35,p:{scaleX:1.602,scaleY:1.602,rotation:-68.3916,x:1477.3,y:369.05,regY:12.6}},{t:this.ikNode_33,p:{scaleX:1.602,scaleY:1.602,rotation:-51.0235,x:1471.6,y:326.55,regX:18.1}},{t:this.ikNode_31,p:{regY:5.2,rotation:72.3077,x:1607.55,y:392.95,scaleX:0.994,scaleY:0.994}},{t:this.ikNode_29,p:{regX:14.3,regY:12.6,scaleX:0.994,scaleY:0.994,rotation:20.9295,x:1528,y:355.9}},{t:this.ikNode_27,p:{scaleX:0.9949,scaleY:0.9949,rotation:-166.8966,x:1587.45,y:378.6,regY:10.4,regX:44.4}},{t:this.ikNode_19,p:{regX:31.3,scaleX:0.9945,scaleY:0.9945,rotation:47.9196,x:1621.75,y:383.05,regY:18.1}},{t:this.ikNode_17,p:{scaleX:0.9952,scaleY:0.9952,rotation:40.5904,x:1586.25,y:348.35,regY:23.2}},{t:this.ikNode_2,p:{scaleX:0.997,scaleY:0.997,rotation:12.8881,x:1540.3,y:330.2}},{t:this.ikNode_3,p:{scaleX:0.9954,scaleY:0.9954,rotation:-28.7911,x:1494.85,y:324.05,regX:64.2,regY:50.4}},{t:this.ikNode_11,p:{regX:44.7,scaleX:0.995,scaleY:0.995,rotation:-58.8113,x:1502.05,y:346.05,regY:14.6}},{t:this.ikNode_13,p:{scaleX:0.9952,scaleY:0.9952,rotation:-91.4233,x:1508.15,y:383.6,regY:6.7,regX:69.8}},{t:this.ikNode_15,p:{regX:90.9,scaleX:0.9952,scaleY:0.9952,rotation:-65.0091,x:1535.45,y:426.7,regY:0.8}},{t:this.ikNode_21,p:{regX:21.2,rotation:-148.4164,x:1642.6,y:409.1,regY:10.4,scaleX:0.9285,scaleY:0.9285}},{t:this.ikNode_23,p:{regX:13.6,regY:24.9,scaleX:0.9284,scaleY:0.9284,rotation:55.1716,x:1540.4,y:344.95}},{t:this.ikNode_25,p:{rotation:63.1998,x:1613.25,y:416.9,regX:0.1,scaleX:0.9279,scaleY:0.9279,regY:-0.1}}]},1).to({state:[{t:this.ikNode_37,p:{regX:37.5,scaleX:1.6019,scaleY:1.6019,rotation:-86.354,x:1467.65,y:415.25,regY:8.4}},{t:this.ikNode_35,p:{scaleX:1.602,scaleY:1.602,rotation:-67.3596,x:1465.05,y:359.95,regY:12.6}},{t:this.ikNode_33,p:{scaleX:1.602,scaleY:1.602,rotation:-50.2523,x:1459.9,y:317.5,regX:18.1}},{t:this.ikNode_31,p:{regY:5,rotation:73.9826,x:1596,y:384.35,scaleX:0.994,scaleY:0.994}},{t:this.ikNode_29,p:{regX:14.3,regY:12.6,scaleX:0.994,scaleY:0.994,rotation:21.2698,x:1516.4,y:346.8}},{t:this.ikNode_27,p:{scaleX:0.9949,scaleY:0.9949,rotation:-166.9713,x:1575.9,y:369.45,regY:10.4,regX:44.4}},{t:this.ikNode_19,p:{regX:31.3,scaleX:0.9945,scaleY:0.9945,rotation:47.6415,x:1610.25,y:373.9,regY:18.1}},{t:this.ikNode_17,p:{scaleX:0.9952,scaleY:0.9952,rotation:40.3113,x:1574.55,y:339.2,regY:23.2}},{t:this.ikNode_2,p:{scaleX:0.997,scaleY:0.997,rotation:12.8881,x:1528.65,y:321.15}},{t:this.ikNode_3,p:{scaleX:0.9954,scaleY:0.9954,rotation:-27.9462,x:1483.25,y:314.7,regX:64.2,regY:50.4}},{t:this.ikNode_11,p:{regX:44.7,scaleX:0.995,scaleY:0.995,rotation:-57.9295,x:1490.15,y:336.95,regY:14.5}},{t:this.ikNode_13,p:{scaleX:0.9952,scaleY:0.9952,rotation:-89.5379,x:1495.8,y:374.6,regY:6.7,regX:69.8}},{t:this.ikNode_15,p:{regX:90.9,scaleX:0.9951,scaleY:0.9951,rotation:-63.1191,x:1521.75,y:418.6,regY:0.8}},{t:this.ikNode_21,p:{regX:21.2,rotation:-149.0329,x:1631.05,y:399.7,regY:10.5,scaleX:0.9284,scaleY:0.9284}},{t:this.ikNode_23,p:{regX:13.7,regY:24.9,scaleX:0.9284,scaleY:0.9284,rotation:54.4884,x:1528.35,y:336.9}},{t:this.ikNode_25,p:{rotation:64.8223,x:1602,y:407.9,regX:0.2,scaleX:0.9278,scaleY:0.9278,regY:-0.1}}]},1).to({state:[{t:this.ikNode_37,p:{regX:37.5,scaleX:1.6019,scaleY:1.6019,rotation:-84.9194,x:1454.35,y:406.4,regY:8.4}},{t:this.ikNode_35,p:{scaleX:1.602,scaleY:1.602,rotation:-66.3264,x:1452.8,y:350.9,regY:12.6}},{t:this.ikNode_33,p:{scaleX:1.6021,scaleY:1.6021,rotation:-49.4815,x:1448.3,y:308.45,regX:18.1}},{t:this.ikNode_31,p:{regY:5,rotation:75.6559,x:1584.3,y:375.75,scaleX:0.994,scaleY:0.994}},{t:this.ikNode_29,p:{regX:14.3,regY:12.6,scaleX:0.994,scaleY:0.994,rotation:21.611,x:1504.9,y:337.75}},{t:this.ikNode_27,p:{scaleX:0.9949,scaleY:0.9949,rotation:-167.0435,x:1564.3,y:360.35,regY:10.4,regX:44.4}},{t:this.ikNode_19,p:{regX:31.3,scaleX:0.9945,scaleY:0.9945,rotation:47.3621,x:1598.75,y:364.65,regY:18.1}},{t:this.ikNode_17,p:{scaleX:0.9952,scaleY:0.9952,rotation:40.0327,x:1562.95,y:330.2,regY:23.2}},{t:this.ikNode_2,p:{scaleX:0.997,scaleY:0.997,rotation:12.8873,x:1516.95,y:312.2}},{t:this.ikNode_3,p:{scaleX:0.9955,scaleY:0.9955,rotation:-27.1032,x:1471.75,y:305.15,regX:64.3,regY:50.4}},{t:this.ikNode_11,p:{regX:44.6,scaleX:0.995,scaleY:0.995,rotation:-57.0454,x:1478.55,y:328.05,regY:14.6}},{t:this.ikNode_13,p:{scaleX:0.9952,scaleY:0.9952,rotation:-87.6485,x:1483.7,y:365.65,regY:6.8,regX:69.8}},{t:this.ikNode_15,p:{regX:90.9,scaleX:0.9951,scaleY:0.9951,rotation:-61.2279,x:1508,y:410.45,regY:0.8}},{t:this.ikNode_21,p:{regX:21.1,rotation:-149.651,x:1619.8,y:390.5,regY:10.5,scaleX:0.9285,scaleY:0.9285}},{t:this.ikNode_23,p:{regX:13.6,regY:25,scaleX:0.9284,scaleY:0.9284,rotation:53.8049,x:1516.05,y:328.7}},{t:this.ikNode_25,p:{rotation:66.4455,x:1590.65,y:398.85,regX:0.2,scaleX:0.9279,scaleY:0.9279,regY:-0.1}}]},1).to({state:[{t:this.ikNode_37,p:{regX:37.5,scaleX:1.6019,scaleY:1.6019,rotation:-83.4842,x:1441.05,y:397.45,regY:8.4}},{t:this.ikNode_35,p:{scaleX:1.602,scaleY:1.602,rotation:-65.2955,x:1440.6,y:341.8,regY:12.6}},{t:this.ikNode_33,p:{scaleX:1.602,scaleY:1.602,rotation:-48.7105,x:1436.65,y:299.3,regX:18.1}},{t:this.ikNode_31,p:{regY:5.1,rotation:77.3313,x:1572.35,y:367.2,scaleX:0.994,scaleY:0.994}},{t:this.ikNode_29,p:{regX:14.3,regY:12.6,scaleX:0.994,scaleY:0.994,rotation:21.952,x:1493.35,y:328.65}},{t:this.ikNode_27,p:{scaleX:0.9949,scaleY:0.9949,rotation:-167.1175,x:1552.85,y:351.25,regY:10.4,regX:44.4}},{t:this.ikNode_19,p:{regX:31.3,scaleX:0.9946,scaleY:0.9946,rotation:47.0834,x:1587.25,y:355.4,regY:18.1}},{t:this.ikNode_17,p:{scaleX:0.9952,scaleY:0.9952,rotation:39.7538,x:1551.3,y:321.05,regY:23.2}},{t:this.ikNode_2,p:{scaleX:0.997,scaleY:0.997,rotation:12.8873,x:1505.3,y:303.2}},{t:this.ikNode_3,p:{scaleX:0.9954,scaleY:0.9954,rotation:-26.2603,x:1460.05,y:295.8,regX:64.2,regY:50.4}},{t:this.ikNode_11,p:{regX:44.7,scaleX:0.995,scaleY:0.995,rotation:-56.1632,x:1466.8,y:318.9,regY:14.6}},{t:this.ikNode_13,p:{scaleX:0.9952,scaleY:0.9952,rotation:-85.76,x:1471.4,y:356.75,regY:6.8,regX:69.8}},{t:this.ikNode_15,p:{regX:90.9,scaleX:0.9951,scaleY:0.9951,rotation:-59.3379,x:1494.25,y:402.3,regY:0.9}},{t:this.ikNode_21,p:{regX:21.1,rotation:-150.2669,x:1608.3,y:381.3,regY:10.4,scaleX:0.9284,scaleY:0.9284}},{t:this.ikNode_23,p:{regX:13.6,regY:24.9,scaleX:0.9284,scaleY:0.9284,rotation:53.1229,x:1504.05,y:320.5}},{t:this.ikNode_25,p:{rotation:68.0689,x:1579.35,y:389.75,regX:0.2,scaleX:0.9279,scaleY:0.9279,regY:-0.1}}]},1).to({state:[{t:this.ikNode_37,p:{regX:37.5,scaleX:1.6019,scaleY:1.6019,rotation:-82.0506,x:1427.85,y:388.45,regY:8.4}},{t:this.ikNode_35,p:{scaleX:1.602,scaleY:1.602,rotation:-64.2631,x:1428.3,y:332.75,regY:12.6}},{t:this.ikNode_33,p:{scaleX:1.602,scaleY:1.602,rotation:-47.9398,x:1424.9,y:290.2,regX:18.1}},{t:this.ikNode_31,p:{regY:5.1,rotation:79.0037,x:1560.6,y:358.6,scaleX:0.994,scaleY:0.994}},{t:this.ikNode_29,p:{regX:14.3,regY:12.6,scaleX:0.994,scaleY:0.994,rotation:22.2917,x:1481.85,y:319.65}},{t:this.ikNode_27,p:{scaleX:0.9949,scaleY:0.9949,rotation:-167.1913,x:1541.35,y:342.25,regY:10.4,regX:44.4}},{t:this.ikNode_19,p:{regX:31.3,scaleX:0.9946,scaleY:0.9946,rotation:46.8047,x:1575.8,y:346.15,regY:18.1}},{t:this.ikNode_17,p:{scaleX:0.9952,scaleY:0.9952,rotation:39.4738,x:1539.6,y:311.95,regY:23.2}},{t:this.ikNode_2,p:{scaleX:0.997,scaleY:0.997,rotation:12.8864,x:1493.65,y:294.15}},{t:this.ikNode_3,p:{scaleX:0.9954,scaleY:0.9954,rotation:-25.4161,x:1448.4,y:286.2,regX:64.2,regY:50.3}},{t:this.ikNode_11,p:{regX:44.7,scaleX:0.995,scaleY:0.995,rotation:-55.2805,x:1455.15,y:309.8,regY:14.6}},{t:this.ikNode_13,p:{scaleX:0.9952,scaleY:0.9952,rotation:-83.8704,x:1459.05,y:347.65,regY:6.8,regX:69.8}},{t:this.ikNode_15,p:{regX:90.9,scaleX:0.9951,scaleY:0.9951,rotation:-57.4482,x:1480.4,y:394,regY:0.8}},{t:this.ikNode_21,p:{regX:21.1,rotation:-150.8838,x:1596.9,y:371.95,regY:10.5,scaleX:0.9285,scaleY:0.9285}},{t:this.ikNode_23,p:{regX:13.6,regY:24.9,scaleX:0.9284,scaleY:0.9284,rotation:52.4396,x:1492,y:312.4}},{t:this.ikNode_25,p:{rotation:69.6923,x:1568.05,y:380.7,regX:0.2,scaleX:0.9279,scaleY:0.9279,regY:-0.1}}]},1).to({state:[{t:this.ikNode_37,p:{regX:37.5,scaleX:1.6019,scaleY:1.6019,rotation:-80.6151,x:1414.55,y:379.5,regY:8.4}},{t:this.ikNode_35,p:{scaleX:1.602,scaleY:1.602,rotation:-63.2304,x:1416.05,y:323.7,regY:12.6}},{t:this.ikNode_33,p:{scaleX:1.602,scaleY:1.602,rotation:-47.168,x:1413.25,y:281.15,regX:18.1}},{t:this.ikNode_31,p:{regY:5.1,rotation:80.6784,x:1548.85,y:350.05,scaleX:0.994,scaleY:0.994}},{t:this.ikNode_29,p:{regX:14.3,regY:12.6,scaleX:0.994,scaleY:0.994,rotation:22.6324,x:1470.35,y:310.6}},{t:this.ikNode_27,p:{scaleX:0.9949,scaleY:0.9949,rotation:-167.2644,x:1529.8,y:333.15,regY:10.4,regX:44.4}},{t:this.ikNode_19,p:{regX:31.3,scaleX:0.9945,scaleY:0.9945,rotation:46.5256,x:1564.3,y:336.9,regY:18.1}},{t:this.ikNode_17,p:{scaleX:0.9952,scaleY:0.9952,rotation:39.1947,x:1527.95,y:302.85,regY:23.2}},{t:this.ikNode_2,p:{scaleX:0.997,scaleY:0.997,rotation:12.8864,x:1482,y:285.15}},{t:this.ikNode_3,p:{scaleX:0.9955,scaleY:0.9955,rotation:-24.5709,x:1436.8,y:276.95,regX:64.2,regY:50.4}},{t:this.ikNode_11,p:{regX:44.6,scaleX:0.995,scaleY:0.995,rotation:-54.3983,x:1443.4,y:300.8,regY:14.6}},{t:this.ikNode_13,p:{scaleX:0.9952,scaleY:0.9952,rotation:-81.9805,x:1446.7,y:338.65,regY:6.8,regX:69.8}},{t:this.ikNode_15,p:{regX:90.9,scaleX:0.9951,scaleY:0.9951,rotation:-55.5577,x:1466.7,y:385.75,regY:0.9}},{t:this.ikNode_21,p:{regX:21.1,rotation:-151.5004,x:1585.3,y:362.75,regY:10.4,scaleX:0.9284,scaleY:0.9284}},{t:this.ikNode_23,p:{regX:13.6,regY:24.9,scaleX:0.9284,scaleY:0.9284,rotation:51.7566,x:1479.85,y:304.15}},{t:this.ikNode_25,p:{rotation:71.3157,x:1556.75,y:371.6,regX:0.1,scaleX:0.9279,scaleY:0.9279,regY:-0.1}}]},1).to({state:[{t:this.ikNode_37,p:{regX:37.5,scaleX:1.6019,scaleY:1.6019,rotation:-79.1794,x:1401.25,y:370.55,regY:8.4}},{t:this.ikNode_35,p:{scaleX:1.602,scaleY:1.602,rotation:-62.1984,x:1403.8,y:314.55,regY:12.6}},{t:this.ikNode_33,p:{scaleX:1.602,scaleY:1.602,rotation:-46.3967,x:1401.55,y:272.1,regX:18.1}},{t:this.ikNode_31,p:{regY:5,rotation:82.3512,x:1537.15,y:341.35,scaleX:0.994,scaleY:0.994}},{t:this.ikNode_29,p:{regX:14.3,regY:12.6,scaleX:0.994,scaleY:0.994,rotation:22.9734,x:1458.8,y:301.6}},{t:this.ikNode_27,p:{scaleX:0.9949,scaleY:0.9949,rotation:-167.3392,x:1518.25,y:324,regY:10.4,regX:44.4}},{t:this.ikNode_19,p:{regX:31.4,scaleX:0.9946,scaleY:0.9946,rotation:46.2464,x:1552.9,y:327.65,regY:18}},{t:this.ikNode_17,p:{scaleX:0.9953,scaleY:0.9953,rotation:38.9163,x:1516.35,y:293.75,regY:23.2}},{t:this.ikNode_2,p:{scaleX:0.997,scaleY:0.997,rotation:12.8856,x:1470.3,y:276.15}},{t:this.ikNode_3,p:{scaleX:0.9954,scaleY:0.9954,rotation:-23.728,x:1425.3,y:267.55,regX:64.2,regY:50.4}},{t:this.ikNode_11,p:{regX:44.7,scaleX:0.995,scaleY:0.995,rotation:-53.5151,x:1431.75,y:291.7,regY:14.6}},{t:this.ikNode_13,p:{scaleX:0.9952,scaleY:0.9952,rotation:-80.0913,x:1434.25,y:329.7,regY:6.7,regX:69.8}},{t:this.ikNode_15,p:{regX:90.9,scaleX:0.9951,scaleY:0.9951,rotation:-53.6667,x:1452.7,y:377.3,regY:0.8}},{t:this.ikNode_21,p:{regX:21.1,rotation:-152.1176,x:1573.9,y:353.45,regY:10.4,scaleX:0.9284,scaleY:0.9284}},{t:this.ikNode_23,p:{regX:13.6,regY:24.9,scaleX:0.9284,scaleY:0.9284,rotation:51.073,x:1467.8,y:296}},{t:this.ikNode_25,p:{rotation:72.9382,x:1545.45,y:362.55,regX:0.1,scaleX:0.9279,scaleY:0.9279,regY:-0.1}}]},1).to({state:[{t:this.ikNode_37,p:{regX:37.5,scaleX:1.6019,scaleY:1.6019,rotation:-77.7455,x:1388,y:361.4,regY:8.4}},{t:this.ikNode_35,p:{scaleX:1.602,scaleY:1.602,rotation:-61.1663,x:1391.6,y:305.55,regY:12.6}},{t:this.ikNode_33,p:{scaleX:1.602,scaleY:1.602,rotation:-45.6263,x:1389.95,y:262.85,regX:18.1}},{t:this.ikNode_31,p:{regY:5.1,rotation:84.0256,x:1525.3,y:332.9,scaleX:0.994,scaleY:0.994}},{t:this.ikNode_29,p:{regX:14.3,regY:12.6,scaleX:0.994,scaleY:0.994,rotation:23.3147,x:1447.35,y:292.55}},{t:this.ikNode_27,p:{scaleX:0.9949,scaleY:0.9949,rotation:-167.4119,x:1506.8,y:314.85,regY:10.5,regX:44.4}},{t:this.ikNode_19,p:{regX:31.4,scaleX:0.9945,scaleY:0.9945,rotation:45.9672,x:1541.4,y:318.4,regY:18.1}},{t:this.ikNode_17,p:{scaleX:0.9953,scaleY:0.9953,rotation:38.6376,x:1504.7,y:284.7,regY:23.2}},{t:this.ikNode_2,p:{scaleX:0.997,scaleY:0.997,rotation:12.8845,x:1458.65,y:267.1}},{t:this.ikNode_3,p:{scaleX:0.9954,scaleY:0.9954,rotation:-22.8823,x:1413.65,y:258.1,regX:64.2,regY:50.4}},{t:this.ikNode_11,p:{regX:44.7,scaleX:0.995,scaleY:0.995,rotation:-52.6323,x:1420.05,y:282.6,regY:14.6}},{t:this.ikNode_13,p:{scaleX:0.9952,scaleY:0.9952,rotation:-78.2011,x:1422.1,y:320.6,regY:6.8,regX:69.9}},{t:this.ikNode_15,p:{regX:90.9,scaleX:0.9951,scaleY:0.9951,rotation:-51.776,x:1438.9,y:368.9,regY:0.8}},{t:this.ikNode_21,p:{regX:21.1,rotation:-152.7342,x:1562.4,y:344.2,regY:10.4,scaleX:0.9284,scaleY:0.9284}},{t:this.ikNode_23,p:{regX:13.6,regY:24.9,scaleX:0.9284,scaleY:0.9284,rotation:50.3917,x:1455.75,y:287.95}},{t:this.ikNode_25,p:{rotation:74.5616,x:1534.2,y:353.5,regX:0.1,scaleX:0.9279,scaleY:0.9279,regY:-0.2}}]},1).to({state:[{t:this.ikNode_37,p:{regX:37.5,scaleX:1.6019,scaleY:1.6019,rotation:-76.3112,x:1374.7,y:352.4,regY:8.4}},{t:this.ikNode_35,p:{scaleX:1.602,scaleY:1.602,rotation:-60.1339,x:1379.3,y:296.45,regY:12.6}},{t:this.ikNode_33,p:{scaleX:1.602,scaleY:1.602,rotation:-44.8545,x:1378.25,y:253.9,regX:18.1}},{t:this.ikNode_31,p:{regY:5,rotation:85.6992,x:1513.6,y:324.25,scaleX:0.994,scaleY:0.994}},{t:this.ikNode_29,p:{regX:14.2,regY:12.6,scaleX:0.994,scaleY:0.994,rotation:23.6557,x:1435.65,y:283.35}},{t:this.ikNode_27,p:{scaleX:0.9949,scaleY:0.9949,rotation:-167.4859,x:1495.25,y:305.85,regY:10.4,regX:44.4}},{t:this.ikNode_19,p:{regX:31.3,scaleX:0.9946,scaleY:0.9946,rotation:45.6881,x:1529.85,y:309.1,regY:18.1}},{t:this.ikNode_17,p:{scaleX:0.9952,scaleY:0.9952,rotation:38.358,x:1493.05,y:275.65,regY:23.2}},{t:this.ikNode_2,p:{scaleX:0.997,scaleY:0.997,rotation:12.8845,x:1447,y:258.05}},{t:this.ikNode_3,p:{scaleX:0.9954,scaleY:0.9954,rotation:-22.0392,x:1402.15,y:248.6,regX:64.2,regY:50.4}},{t:this.ikNode_11,p:{regX:44.7,scaleX:0.995,scaleY:0.995,rotation:-51.7486,x:1408.3,y:273.5,regY:14.5}},{t:this.ikNode_13,p:{scaleX:0.9952,scaleY:0.9952,rotation:-76.3123,x:1409.8,y:311.65,regY:6.8,regX:69.8}},{t:this.ikNode_15,p:{regX:90.9,scaleX:0.9951,scaleY:0.9951,rotation:-49.8862,x:1425,y:360.35,regY:0.8}},{t:this.ikNode_21,p:{regX:21.1,rotation:-153.3507,x:1551,y:334.8,regY:10.5,scaleX:0.9284,scaleY:0.9284}},{t:this.ikNode_23,p:{regX:13.7,regY:25,scaleX:0.9284,scaleY:0.9284,rotation:49.7091,x:1443.65,y:279.9}},{t:this.ikNode_25,p:{rotation:76.185,x:1522.9,y:344.4,regX:0.1,scaleX:0.9279,scaleY:0.9279,regY:-0.2}}]},1).to({state:[{t:this.ikNode_37,p:{regX:37.5,scaleX:1.6019,scaleY:1.6019,rotation:-74.8766,x:1361.4,y:343.3,regY:8.4}},{t:this.ikNode_35,p:{scaleX:1.602,scaleY:1.602,rotation:-59.1009,x:1367.05,y:287.3,regY:12.6}},{t:this.ikNode_33,p:{scaleX:1.602,scaleY:1.602,rotation:-44.0843,x:1366.65,y:244.8,regX:18.1}},{t:this.ikNode_31,p:{regY:5.1,rotation:87.3744,x:1501.7,y:315.7,scaleX:0.994,scaleY:0.994}},{t:this.ikNode_29,p:{regX:14.3,regY:12.6,scaleX:0.994,scaleY:0.994,rotation:23.9956,x:1424.3,y:274.4}},{t:this.ikNode_27,p:{scaleX:0.9949,scaleY:0.9949,rotation:-167.5596,x:1483.7,y:296.8,regY:10.4,regX:44.4}},{t:this.ikNode_19,p:{regX:31.2,scaleX:0.9946,scaleY:0.9946,rotation:45.4096,x:1518.3,y:299.85,regY:18.1}},{t:this.ikNode_17,p:{scaleX:0.9952,scaleY:0.9952,rotation:38.0785,x:1481.35,y:266.5,regY:23.2}},{t:this.ikNode_2,p:{scaleX:0.997,scaleY:0.997,rotation:12.8845,x:1435.3,y:249.1}},{t:this.ikNode_3,p:{scaleX:0.9954,scaleY:0.9954,rotation:-21.1962,x:1390.5,y:239.2,regX:64.2,regY:50.4}},{t:this.ikNode_11,p:{regX:44.7,scaleX:0.995,scaleY:0.995,rotation:-50.8659,x:1396.6,y:264.45,regY:14.6}},{t:this.ikNode_13,p:{scaleX:0.9952,scaleY:0.9952,rotation:-74.4229,x:1397.4,y:302.6,regY:6.8,regX:69.8}},{t:this.ikNode_15,p:{regX:90.9,scaleX:0.9952,scaleY:0.9952,rotation:-47.9968,x:1411.1,y:351.85,regY:0.8}},{t:this.ikNode_21,p:{regX:21.1,rotation:-153.9672,x:1539.55,y:325.5,regY:10.5,scaleX:0.9285,scaleY:0.9285}},{t:this.ikNode_23,p:{regX:13.7,regY:24.9,scaleX:0.9284,scaleY:0.9284,rotation:49.0247,x:1431.7,y:271.75}},{t:this.ikNode_25,p:{rotation:77.8078,x:1511.6,y:335.35,regX:0.1,scaleX:0.9279,scaleY:0.9279,regY:-0.2}}]},1).to({state:[{t:this.ikNode_37,p:{regX:37.5,scaleX:1.6019,scaleY:1.6019,rotation:-73.4417,x:1348.1,y:334.2,regY:8.4}},{t:this.ikNode_35,p:{scaleX:1.602,scaleY:1.602,rotation:-58.0704,x:1354.95,y:278.25,regY:12.7}},{t:this.ikNode_33,p:{scaleX:1.602,scaleY:1.602,rotation:-43.3127,x:1354.85,y:235.65,regX:18.1}},{t:this.ikNode_31,p:{regY:5.1,rotation:89.0483,x:1489.95,y:307.1,scaleX:0.994,scaleY:0.994}},{t:this.ikNode_29,p:{regX:14.3,regY:12.6,scaleX:0.994,scaleY:0.994,rotation:24.3373,x:1412.75,y:265.3}},{t:this.ikNode_27,p:{scaleX:0.9949,scaleY:0.9949,rotation:-167.6327,x:1472.2,y:287.65,regY:10.4,regX:44.4}},{t:this.ikNode_19,p:{regX:31.3,scaleX:0.9945,scaleY:0.9945,rotation:45.1305,x:1506.9,y:290.6,regY:18}},{t:this.ikNode_17,p:{scaleX:0.9952,scaleY:0.9952,rotation:37.8006,x:1469.75,y:257.5,regY:23.2}},{t:this.ikNode_2,p:{scaleX:0.997,scaleY:0.997,rotation:12.8837,x:1423.65,y:240.1}},{t:this.ikNode_3,p:{scaleX:0.9955,scaleY:0.9955,rotation:-20.3511,x:1378.95,y:229.75,regX:64.2,regY:50.4}},{t:this.ikNode_11,p:{regX:44.7,scaleX:0.995,scaleY:0.995,rotation:-49.9835,x:1384.95,y:255.45,regY:14.6}},{t:this.ikNode_13,p:{scaleX:0.9952,scaleY:0.9952,rotation:-72.5332,x:1385.15,y:293.6,regY:6.8,regX:69.8}},{t:this.ikNode_15,p:{regX:90.9,scaleX:0.9951,scaleY:0.9951,rotation:-46.1052,x:1397.1,y:343.15,regY:0.8}},{t:this.ikNode_21,p:{regX:21.1,rotation:-154.5834,x:1527.9,y:316.4,regY:10.3,scaleX:0.9285,scaleY:0.9285}},{t:this.ikNode_23,p:{regX:13.7,regY:24.9,scaleX:0.9284,scaleY:0.9284,rotation:48.3426,x:1419.7,y:263.6}},{t:this.ikNode_25,p:{rotation:79.4304,x:1500.35,y:326.25,regX:0.1,scaleX:0.9279,scaleY:0.9279,regY:-0.2}}]},1).to({state:[{t:this.ikNode_37,p:{regX:37.5,scaleX:1.6019,scaleY:1.6019,rotation:-72.0074,x:1334.85,y:325,regY:8.4}},{t:this.ikNode_35,p:{scaleX:1.602,scaleY:1.602,rotation:-57.0365,x:1342.6,y:269.1,regY:12.6}},{t:this.ikNode_33,p:{scaleX:1.602,scaleY:1.602,rotation:-42.5415,x:1343.25,y:226.65,regX:18.1}},{t:this.ikNode_31,p:{regY:5.1,rotation:90.7178,x:1478.1,y:298.5,scaleX:0.994,scaleY:0.994}},{t:this.ikNode_29,p:{regX:14.3,regY:12.7,scaleX:0.994,scaleY:0.994,rotation:24.6782,x:1401.2,y:256.4}},{t:this.ikNode_27,p:{scaleX:0.9949,scaleY:0.9949,rotation:-167.7072,x:1460.65,y:278.55,regY:10.4,regX:44.4}},{t:this.ikNode_19,p:{regX:31.3,scaleX:0.9946,scaleY:0.9946,rotation:44.8514,x:1495.3,y:281.35,regY:18.1}},{t:this.ikNode_17,p:{scaleX:0.9952,scaleY:0.9952,rotation:37.5212,x:1458.05,y:248.45,regY:23.3}},{t:this.ikNode_2,p:{scaleX:0.997,scaleY:0.997,rotation:12.8828,x:1412,y:231.1}},{t:this.ikNode_3,p:{scaleX:0.9955,scaleY:0.9955,rotation:-19.5076,x:1367.35,y:220.35,regX:64.2,regY:50.4}},{t:this.ikNode_11,p:{regX:44.6,scaleX:0.995,scaleY:0.995,rotation:-49.101,x:1373.15,y:246.4,regY:14.6}},{t:this.ikNode_13,p:{scaleX:0.9952,scaleY:0.9952,rotation:-70.6441,x:1372.8,y:284.5,regY:6.8,regX:69.8}},{t:this.ikNode_15,p:{regX:90.9,scaleX:0.9951,scaleY:0.9951,rotation:-44.2141,x:1383.25,y:334.45,regY:0.8}},{t:this.ikNode_21,p:{regX:21.1,rotation:-155.2005,x:1516.5,y:307.1,regY:10.3,scaleX:0.9285,scaleY:0.9285}},{t:this.ikNode_23,p:{regX:13.7,regY:24.9,scaleX:0.9284,scaleY:0.9284,rotation:47.6585,x:1407.6,y:255.55}},{t:this.ikNode_25,p:{rotation:81.0529,x:1488.95,y:317.35,regX:0.2,scaleX:0.9279,scaleY:0.9279,regY:-0.1}}]},1).to({state:[{t:this.ikNode_37,p:{regX:37.5,scaleX:1.6019,scaleY:1.6019,rotation:-70.5738,x:1321.6,y:315.85,regY:8.4}},{t:this.ikNode_35,p:{scaleX:1.602,scaleY:1.602,rotation:-56.0049,x:1330.4,y:260,regY:12.6}},{t:this.ikNode_33,p:{scaleX:1.602,scaleY:1.602,rotation:-41.7711,x:1331.55,y:217.55,regX:18.1}},{t:this.ikNode_31,p:{regY:5.1,rotation:92.3905,x:1466.35,y:289.85,scaleX:0.994,scaleY:0.994}},{t:this.ikNode_29,p:{regX:14.3,regY:12.6,scaleX:0.994,scaleY:0.994,rotation:25.0194,x:1389.7,y:247.2}},{t:this.ikNode_27,p:{scaleX:0.9949,scaleY:0.9949,rotation:-167.7799,x:1449.1,y:269.5,regY:10.4,regX:44.4}},{t:this.ikNode_19,p:{regX:31.4,scaleX:0.9945,scaleY:0.9945,rotation:44.5723,x:1483.95,y:272.15,regY:18.1}},{t:this.ikNode_17,p:{scaleX:0.9952,scaleY:0.9952,rotation:37.2424,x:1446.5,y:239.3,regY:23.2}},{t:this.ikNode_2,p:{scaleX:0.997,scaleY:0.997,rotation:12.8828,x:1400.3,y:222.1}},{t:this.ikNode_3,p:{scaleX:0.9955,scaleY:0.9955,rotation:-18.6641,x:1355.75,y:210.95,regX:64.2,regY:50.4}},{t:this.ikNode_11,p:{regX:44.7,scaleX:0.995,scaleY:0.995,rotation:-48.2188,x:1361.55,y:237.35,regY:14.6}},{t:this.ikNode_13,p:{scaleX:0.9952,scaleY:0.9952,rotation:-68.7542,x:1360.4,y:275.4,regY:6.7,regX:69.8}},{t:this.ikNode_15,p:{regX:90.8,scaleX:0.9951,scaleY:0.9951,rotation:-42.3234,x:1369.25,y:325.9,regY:0.9}},{t:this.ikNode_21,p:{regX:21.1,rotation:-155.8179,x:1505.05,y:297.9,regY:10.3,scaleX:0.9285,scaleY:0.9285}},{t:this.ikNode_23,p:{regX:13.6,regY:25,scaleX:0.9284,scaleY:0.9284,rotation:46.9748,x:1395.5,y:247.45}},{t:this.ikNode_25,p:{rotation:82.6768,x:1477.65,y:308.25,regX:0.2,scaleX:0.9279,scaleY:0.9279,regY:-0.1}}]},1).to({state:[{t:this.ikNode_37,p:{regX:37.5,scaleX:1.6019,scaleY:1.6019,rotation:-69.1391,x:1308.3,y:306.6,regY:8.4}},{t:this.ikNode_35,p:{scaleX:1.602,scaleY:1.602,rotation:-54.9725,x:1318.15,y:250.85,regY:12.6}},{t:this.ikNode_33,p:{scaleX:1.602,scaleY:1.602,rotation:-41.0005,x:1319.95,y:208.45,regX:18.1}},{t:this.ikNode_31,p:{regY:5.1,rotation:94.0654,x:1454.55,y:281.3,scaleX:0.994,scaleY:0.994}},{t:this.ikNode_29,p:{regX:14.3,regY:12.6,scaleX:0.994,scaleY:0.994,rotation:25.3589,x:1378.2,y:238.15}},{t:this.ikNode_27,p:{scaleX:0.9949,scaleY:0.9949,rotation:-167.8537,x:1437.55,y:260.35,regY:10.4,regX:44.4}},{t:this.ikNode_19,p:{regX:31.3,scaleX:0.9946,scaleY:0.9946,rotation:44.2932,x:1472.4,y:262.85,regY:18.1}},{t:this.ikNode_17,p:{scaleX:0.9952,scaleY:0.9952,rotation:36.9632,x:1434.75,y:230.2,regY:23.2}},{t:this.ikNode_2,p:{scaleX:0.997,scaleY:0.997,rotation:12.882,x:1388.65,y:213.1}},{t:this.ikNode_3,p:{scaleX:0.9955,scaleY:0.9955,rotation:-17.8198,x:1344.2,y:201.55,regX:64.2,regY:50.4}},{t:this.ikNode_11,p:{regX:44.7,scaleX:0.995,scaleY:0.995,rotation:-47.3349,x:1349.85,y:228.25,regY:14.6}},{t:this.ikNode_13,p:{scaleX:0.9952,scaleY:0.9952,rotation:-66.8649,x:1348.15,y:266.35,regY:6.8,regX:69.8}},{t:this.ikNode_15,p:{regX:90.9,scaleX:0.9951,scaleY:0.9951,rotation:-40.4342,x:1355.3,y:316.95,regY:0.8}},{t:this.ikNode_21,p:{regX:21.1,rotation:-156.4334,x:1493.6,y:288.45,regY:10.4,scaleX:0.9284,scaleY:0.9284}},{t:this.ikNode_23,p:{regX:13.6,regY:25,scaleX:0.9284,scaleY:0.9284,rotation:46.2926,x:1383.45,y:239.3}},{t:this.ikNode_25,p:{rotation:84.2994,x:1466.35,y:299.15,regX:0.2,scaleX:0.9279,scaleY:0.9279,regY:-0.1}}]},1).to({state:[{t:this.ikNode_37,p:{regX:37.5,scaleX:1.6019,scaleY:1.6019,rotation:-67.7029,x:1294.95,y:297.35,regY:8.4}},{t:this.ikNode_35,p:{scaleX:1.602,scaleY:1.602,rotation:-53.9409,x:1305.85,y:241.7,regY:12.6}},{t:this.ikNode_33,p:{scaleX:1.602,scaleY:1.602,rotation:-40.2284,x:1308.2,y:199.35,regX:18.1}},{t:this.ikNode_31,p:{regY:5.1,rotation:95.7383,x:1442.75,y:272.75,scaleX:0.994,scaleY:0.994}},{t:this.ikNode_29,p:{regX:14.3,regY:12.6,scaleX:0.994,scaleY:0.994,rotation:25.6997,x:1366.6,y:229.1}},{t:this.ikNode_27,p:{scaleX:0.9949,scaleY:0.9949,rotation:-167.9275,x:1426,y:251.3,regY:10.4,regX:44.4}},{t:this.ikNode_19,p:{regX:31.4,scaleX:0.9945,scaleY:0.9945,rotation:44.0147,x:1460.95,y:253.65,regY:18.1}},{t:this.ikNode_17,p:{scaleX:0.9952,scaleY:0.9952,rotation:36.6852,x:1423.15,y:221.05,regY:23.2}},{t:this.ikNode_2,p:{scaleX:0.997,scaleY:0.997,rotation:12.8809,x:1377,y:204.1}},{t:this.ikNode_3,p:{scaleX:0.9954,scaleY:0.9954,rotation:-16.9758,x:1332.6,y:192.1,regX:64.2,regY:50.4}},{t:this.ikNode_11,p:{regX:44.8,scaleX:0.995,scaleY:0.995,rotation:-46.4521,x:1338.2,y:219.1,regY:14.6}},{t:this.ikNode_13,p:{scaleX:0.9952,scaleY:0.9952,rotation:-64.976,x:1335.9,y:257.25,regY:6.8,regX:69.8}},{t:this.ikNode_15,p:{regX:90.9,scaleX:0.9951,scaleY:0.9951,rotation:-38.5436,x:1341.35,y:308.1,regY:0.8}},{t:this.ikNode_21,p:{regX:21.2,rotation:-157.0506,x:1482.05,y:279.1,regY:10.4,scaleX:0.9284,scaleY:0.9284}},{t:this.ikNode_23,p:{regX:13.6,regY:24.9,scaleX:0.9284,scaleY:0.9284,rotation:45.61,x:1371.65,y:231.05}},{t:this.ikNode_25,p:{rotation:85.9223,x:1455.05,y:289.95,regX:0.1,scaleX:0.9279,scaleY:0.9279,regY:-0.1}}]},1).to({state:[{t:this.ikNode_37,p:{regX:37.5,scaleX:1.6019,scaleY:1.6019,rotation:-66.2693,x:1281.75,y:288.1,regY:8.4}},{t:this.ikNode_35,p:{scaleX:1.602,scaleY:1.602,rotation:-52.9083,x:1293.6,y:232.5,regY:12.6}},{t:this.ikNode_33,p:{scaleX:1.6021,scaleY:1.6021,rotation:-39.4575,x:1296.55,y:190.25,regX:18.1}},{t:this.ikNode_31,p:{regY:5.2,rotation:97.4128,x:1430.8,y:264.05,scaleX:0.9939,scaleY:0.9939}},{t:this.ikNode_29,p:{regX:14.3,regY:12.6,scaleX:0.994,scaleY:0.994,rotation:26.0403,x:1355.1,y:220.1}},{t:this.ikNode_27,p:{scaleX:0.9949,scaleY:0.9949,rotation:-168.001,x:1414.55,y:242.2,regY:10.4,regX:44.4}},{t:this.ikNode_19,p:{regX:31.3,scaleX:0.9945,scaleY:0.9945,rotation:43.7356,x:1449.45,y:244.3,regY:18}},{t:this.ikNode_17,p:{scaleX:0.9952,scaleY:0.9952,rotation:36.4064,x:1411.45,y:212.05,regY:23.2}},{t:this.ikNode_2,p:{scaleX:0.997,scaleY:0.997,rotation:12.8809,x:1365.35,y:195.05}},{t:this.ikNode_3,p:{scaleX:0.9955,scaleY:0.9955,rotation:-16.1308,x:1321.15,y:182.6,regX:64.3,regY:50.4}},{t:this.ikNode_11,p:{regX:44.7,scaleX:0.995,scaleY:0.995,rotation:-45.5704,x:1326.35,y:210.1,regY:14.6}},{t:this.ikNode_13,p:{scaleX:0.9952,scaleY:0.9952,rotation:-63.0865,x:1323.55,y:248.2,regY:6.8,regX:69.8}},{t:this.ikNode_15,p:{regX:90.9,scaleX:0.9951,scaleY:0.9951,rotation:-36.6536,x:1327.5,y:299.2,regY:0.9}},{t:this.ikNode_21,p:{regX:21.1,rotation:-157.6681,x:1470.75,y:269.8,regY:10.5,scaleX:0.9284,scaleY:0.9284}},{t:this.ikNode_23,p:{regX:13.6,regY:24.9,scaleX:0.9284,scaleY:0.9284,rotation:44.9268,x:1359.6,y:223}},{t:this.ikNode_25,p:{rotation:87.5456,x:1443.75,y:280.85,regX:0.1,scaleX:0.9279,scaleY:0.9279,regY:-0.1}}]},1).to({state:[{t:this.ikNode_37,p:{regX:37.5,scaleX:1.6019,scaleY:1.6019,rotation:-64.8346,x:1268.45,y:278.9,regY:8.4}},{t:this.ikNode_35,p:{scaleX:1.602,scaleY:1.602,rotation:-51.8762,x:1281.4,y:223.35,regY:12.6}},{t:this.ikNode_33,p:{scaleX:1.602,scaleY:1.602,rotation:-38.6865,x:1284.85,y:181.25,regX:18.1}},{t:this.ikNode_31,p:{regY:5.1,rotation:99.0865,x:1419.15,y:255.45,scaleX:0.994,scaleY:0.994}},{t:this.ikNode_29,p:{regX:14.3,regY:12.6,scaleX:0.994,scaleY:0.994,rotation:26.3802,x:1343.7,y:210.95}},{t:this.ikNode_27,p:{scaleX:0.9949,scaleY:0.9949,rotation:-168.075,x:1403.05,y:233.1,regY:10.4,regX:44.4}},{t:this.ikNode_19,p:{regX:31.3,scaleX:0.9945,scaleY:0.9945,rotation:43.4564,x:1437.9,y:235.1,regY:18.1}},{t:this.ikNode_17,p:{scaleX:0.9952,scaleY:0.9952,rotation:36.1262,x:1399.85,y:203.1,regY:23.3}},{t:this.ikNode_2,p:{scaleX:0.997,scaleY:0.997,rotation:12.879,x:1353.65,y:186.05}},{t:this.ikNode_3,p:{scaleX:0.9954,scaleY:0.9954,rotation:-15.2872,x:1309.5,y:173.2,regX:64.2,regY:50.4}},{t:this.ikNode_11,p:{regX:44.7,scaleX:0.995,scaleY:0.995,rotation:-44.6869,x:1314.7,y:201,regY:14.6}},{t:this.ikNode_13,p:{scaleX:0.9952,scaleY:0.9952,rotation:-61.1965,x:1311.2,y:239.15,regY:6.8,regX:69.8}},{t:this.ikNode_15,p:{regX:90.9,scaleX:0.9951,scaleY:0.9951,rotation:-34.7625,x:1313.4,y:290.1,regY:0.8}},{t:this.ikNode_21,p:{regX:21.1,rotation:-158.2844,x:1459.2,y:260.65,regY:10.3,scaleX:0.9284,scaleY:0.9284}},{t:this.ikNode_23,p:{regX:13.6,regY:24.9,scaleX:0.9284,scaleY:0.9284,rotation:44.2435,x:1347.65,y:214.9}},{t:this.ikNode_25,p:{rotation:89.1689,x:1432.5,y:271.75,regX:0.1,scaleX:0.9279,scaleY:0.9279,regY:-0.1}}]},1).to({state:[{t:this.ikNode_37,p:{regX:37.5,scaleX:1.6019,scaleY:1.6019,rotation:-56.0702,x:1245.05,y:286.15,regY:8.4}},{t:this.ikNode_35,p:{scaleX:1.602,scaleY:1.602,rotation:-43.5134,x:1265.85,y:233.15,regY:12.6}},{t:this.ikNode_33,p:{scaleX:1.602,scaleY:1.602,rotation:-33.74,x:1273,y:191.45,regX:18.1}},{t:this.ikNode_31,p:{regY:5.1,rotation:91.9953,x:1407.75,y:268.2,scaleX:0.994,scaleY:0.994}},{t:this.ikNode_29,p:{regX:14.3,regY:12.6,scaleX:0.994,scaleY:0.994,rotation:26.0077,x:1331.9,y:224.25}},{t:this.ikNode_27,p:{scaleX:0.9949,scaleY:0.9949,rotation:-167.1678,x:1390.9,y:247.3,regY:10.4,regX:44.4}},{t:this.ikNode_19,p:{regX:31.3,scaleX:0.9946,scaleY:0.9946,rotation:43.1778,x:1425.85,y:249.15,regY:18.1}},{t:this.ikNode_17,p:{scaleX:0.9953,scaleY:0.9953,rotation:35.8477,x:1387.7,y:217.15,regY:23.2}},{t:this.ikNode_2,p:{scaleX:0.997,scaleY:0.997,rotation:12.8783,x:1341.4,y:200.4}},{t:this.ikNode_3,p:{scaleX:0.9955,scaleY:0.9955,rotation:-14.4412,x:1297.35,y:187.1,regX:64.2,regY:50.4}},{t:this.ikNode_11,p:{regX:44.7,scaleX:0.995,scaleY:0.995,rotation:-48.7149,x:1301.4,y:212.2,regY:14.6}},{t:this.ikNode_13,p:{scaleX:0.9952,scaleY:0.9952,rotation:-64.2168,x:1300.65,y:250.45,regY:6.8,regX:69.8}},{t:this.ikNode_15,p:{regX:90.9,scaleX:0.9951,scaleY:0.9951,rotation:-37.781,x:1305.5,y:301.3,regY:0.8}},{t:this.ikNode_21,p:{regX:21.1,rotation:-157.9033,x:1447.3,y:274.55,regY:10.4,scaleX:0.9285,scaleY:0.9285}},{t:this.ikNode_23,p:{regX:13.6,regY:24.9,scaleX:0.9284,scaleY:0.9284,rotation:43.6928,x:1336.1,y:228.1}},{t:this.ikNode_25,p:{rotation:84.0342,x:1421.4,y:284.3,regX:0.2,scaleX:0.9279,scaleY:0.9279,regY:-0.1}}]},1).to({state:[{t:this.ikNode_37,p:{regX:37.5,scaleX:1.6019,scaleY:1.6019,rotation:-47.3045,x:1222.35,y:292.05,regY:8.4}},{t:this.ikNode_35,p:{scaleX:1.602,scaleY:1.602,rotation:-35.1522,x:1250.75,y:242.65,regY:12.6}},{t:this.ikNode_33,p:{scaleX:1.602,scaleY:1.602,rotation:-28.7921,x:1261.45,y:201.75,regX:18.1}},{t:this.ikNode_31,p:{regY:5.1,rotation:84.9076,x:1396.35,y:281,scaleX:0.994,scaleY:0.994}},{t:this.ikNode_29,p:{regX:14.3,regY:12.6,scaleX:0.994,scaleY:0.994,rotation:25.6351,x:1320.25,y:237.45}},{t:this.ikNode_27,p:{scaleX:0.9949,scaleY:0.9949,rotation:-166.2621,x:1378.85,y:261.5,regY:10.4,regX:44.4}},{t:this.ikNode_19,p:{regX:31.3,scaleX:0.9946,scaleY:0.9946,rotation:42.8986,x:1413.8,y:263.3,regY:18.1}},{t:this.ikNode_17,p:{scaleX:0.9952,scaleY:0.9952,rotation:35.5681,x:1375.5,y:231.5,regY:23.2}},{t:this.ikNode_2,p:{scaleX:0.997,scaleY:0.997,rotation:12.8783,x:1329.2,y:214.7}},{t:this.ikNode_3,p:{scaleX:0.9955,scaleY:0.9955,rotation:-13.5981,x:1285.2,y:200.95,regX:64.2,regY:50.3}},{t:this.ikNode_11,p:{regX:44.7,scaleX:0.995,scaleY:0.995,rotation:-52.7414,x:1288.4,y:223.2,regY:14.6}},{t:this.ikNode_13,p:{scaleX:0.9952,scaleY:0.9952,rotation:-67.2369,x:1290.25,y:261.4,regY:6.8,regX:69.8}},{t:this.ikNode_15,p:{regX:90.9,scaleX:0.9951,scaleY:0.9951,rotation:-40.8011,x:1297.75,y:311.95,regY:0.8}},{t:this.ikNode_21,p:{regX:21.1,rotation:-157.5241,x:1435.4,y:288.55,regY:10.4,scaleX:0.9284,scaleY:0.9284}},{t:this.ikNode_23,p:{regX:13.6,regY:25,scaleX:0.9284,scaleY:0.9284,rotation:43.1412,x:1324.35,y:241.5}},{t:this.ikNode_25,p:{rotation:78.8998,x:1410.45,y:296.6,regX:0.1,scaleX:0.9279,scaleY:0.9279,regY:-0.2}}]},1).to({state:[{t:this.ikNode_37,p:{regX:37.5,scaleX:1.6019,scaleY:1.6019,rotation:-38.5399,x:1200.55,y:296.45,regY:8.3}},{t:this.ikNode_35,p:{scaleX:1.602,scaleY:1.602,rotation:-26.7891,x:1235.9,y:251.85,regY:12.6}},{t:this.ikNode_33,p:{scaleX:1.6021,scaleY:1.6021,rotation:-23.8453,x:1250.1,y:212,regX:18.1}},{t:this.ikNode_31,p:{regY:5.1,rotation:77.8167,x:1384.95,y:293.75,scaleX:0.994,scaleY:0.994}},{t:this.ikNode_29,p:{regX:14.3,regY:12.6,scaleX:0.994,scaleY:0.994,rotation:25.263,x:1308.55,y:250.8}},{t:this.ikNode_27,p:{scaleX:0.9949,scaleY:0.9949,rotation:-165.354,x:1366.75,y:275.85,regY:10.3,regX:44.4}},{t:this.ikNode_19,p:{regX:31.3,scaleX:0.9945,scaleY:0.9945,rotation:42.6199,x:1401.7,y:277.4,regY:18.1}},{t:this.ikNode_17,p:{scaleX:0.9952,scaleY:0.9952,rotation:35.289,x:1363.3,y:245.75,regY:23.2}},{t:this.ikNode_2,p:{scaleX:0.997,scaleY:0.997,rotation:12.8783,x:1317,y:229}},{t:this.ikNode_3,p:{scaleX:0.9955,scaleY:0.9955,rotation:-12.7536,x:1273.15,y:215,regX:64.2,regY:50.4}},{t:this.ikNode_11,p:{regX:44.6,scaleX:0.995,scaleY:0.995,rotation:-56.7681,x:1275.55,y:234.25,regY:14.6}},{t:this.ikNode_13,p:{scaleX:0.9952,scaleY:0.9952,rotation:-70.2565,x:1280.05,y:272.05,regY:6.7,regX:69.8}},{t:this.ikNode_15,p:{regX:90.9,scaleX:0.9951,scaleY:0.9951,rotation:-43.8196,x:1290.35,y:322.2,regY:0.8}},{t:this.ikNode_21,p:{regX:21.1,rotation:-157.1429,x:1423.45,y:302.45,regY:10.4,scaleX:0.9284,scaleY:0.9284}},{t:this.ikNode_23,p:{regX:13.6,regY:24.9,scaleX:0.9284,scaleY:0.9284,rotation:42.5888,x:1312.85,y:254.6}},{t:this.ikNode_25,p:{rotation:73.7646,x:1399.4,y:309,regX:0.1,scaleX:0.9279,scaleY:0.9279,regY:-0.2}}]},1).to({state:[{t:this.ikNode_37,p:{regX:37.5,scaleX:1.6019,scaleY:1.6019,rotation:-29.7749,x:1179.95,y:300,regY:8.4}},{t:this.ikNode_35,p:{scaleX:1.602,scaleY:1.602,rotation:-18.4279,x:1221.4,y:260.9,regY:12.6}},{t:this.ikNode_33,p:{scaleX:1.6021,scaleY:1.6021,rotation:-18.8978,x:1239,y:222.35,regX:18.1}},{t:this.ikNode_31,p:{regY:5.1,rotation:70.7256,x:1373.6,y:306.45,scaleX:0.994,scaleY:0.994}},{t:this.ikNode_29,p:{regX:14.3,regY:12.6,scaleX:0.994,scaleY:0.994,rotation:24.8903,x:1297,y:264.05}},{t:this.ikNode_27,p:{scaleX:0.9949,scaleY:0.9949,rotation:-164.4476,x:1354.7,y:289.9,regY:10.4,regX:44.4}},{t:this.ikNode_19,p:{regX:31.2,scaleX:0.9945,scaleY:0.9945,rotation:42.3405,x:1389.6,y:291.3,regY:18.1}},{t:this.ikNode_17,p:{scaleX:0.9952,scaleY:0.9952,rotation:35.0097,x:1351.1,y:260.05,regY:23.2}},{t:this.ikNode_2,p:{scaleX:0.997,scaleY:0.997,rotation:12.8775,x:1304.75,y:243.3}},{t:this.ikNode_3,p:{scaleX:0.9955,scaleY:0.9955,rotation:-11.9088,x:1261.15,y:228.8,regX:64.3,regY:50.4}},{t:this.ikNode_11,p:{regX:44.7,scaleX:0.995,scaleY:0.995,rotation:-60.7958,x:1263.15,y:245.15,regY:14.6}},{t:this.ikNode_13,p:{scaleX:0.9952,scaleY:0.9952,rotation:-73.276,x:1270.4,y:282.7,regY:6.8,regX:69.8}},{t:this.ikNode_15,p:{regX:90.9,scaleX:0.9951,scaleY:0.9951,rotation:-46.8398,x:1283.25,y:332.2,regY:0.8}},{t:this.ikNode_21,p:{regX:21.1,rotation:-156.7623,x:1411.55,y:316.45,regY:10.4,scaleX:0.9285,scaleY:0.9285}},{t:this.ikNode_23,p:{regX:13.6,regY:24.9,scaleX:0.9284,scaleY:0.9284,rotation:42.0375,x:1301.25,y:267.8}},{t:this.ikNode_25,p:{rotation:68.6306,x:1388.2,y:321.45,regX:0.2,scaleX:0.9278,scaleY:0.9278,regY:-0.1}}]},1).to({state:[{t:this.ikNode_37,p:{regX:37.5,scaleX:1.6019,scaleY:1.6019,rotation:-27.9486,x:1168.2,y:316.2,regY:8.4}},{t:this.ikNode_35,p:{scaleX:1.602,scaleY:1.602,rotation:-19.2533,x:1209.05,y:276.5,regY:12.6}},{t:this.ikNode_33,p:{scaleX:1.6021,scaleY:1.6021,rotation:-19.3287,x:1226.45,y:237.9,regX:18.1}},{t:this.ikNode_31,p:{regY:5.2,rotation:83.7292,x:1359.6,y:324,scaleX:0.9939,scaleY:0.9939}},{t:this.ikNode_29,p:{regX:14.3,regY:12.6,scaleX:0.994,scaleY:0.994,rotation:26.9309,x:1284.65,y:278.75}},{t:this.ikNode_27,p:{scaleX:0.9949,scaleY:0.9949,rotation:-165.0379,x:1342.6,y:304.05,regY:10.4,regX:44.5}},{t:this.ikNode_19,p:{regX:31.3,scaleX:0.9946,scaleY:0.9946,rotation:42.063,x:1377.6,y:305.5,regY:18.1}},{t:this.ikNode_17,p:{scaleX:0.9953,scaleY:0.9953,rotation:34.7297,x:1338.85,y:274.3,regY:23.2}},{t:this.ikNode_2,p:{scaleX:0.997,scaleY:0.997,rotation:12.8775,x:1292.55,y:257.65}},{t:this.ikNode_3,p:{scaleX:0.9955,scaleY:0.9955,rotation:-11.0636,x:1248.95,y:242.8,regX:64.2,regY:50.4}},{t:this.ikNode_11,p:{regX:44.7,scaleX:0.995,scaleY:0.995,rotation:-57.4288,x:1250.95,y:259.9,regY:14.6}},{t:this.ikNode_13,p:{scaleX:0.9952,scaleY:0.9952,rotation:-64.372,x:1255.95,y:297.95,regY:6.8,regX:69.8}},{t:this.ikNode_15,p:{regX:90.9,scaleX:0.9951,scaleY:0.9951,rotation:-45.697,x:1260.9,y:348.8,regY:0.8}},{t:this.ikNode_21,p:{regX:21.1,rotation:-157.6042,x:1399.5,y:330.45,regY:10.4,scaleX:0.9285,scaleY:0.9285}},{t:this.ikNode_23,p:{regX:13.6,regY:24.9,scaleX:0.9284,scaleY:0.9284,rotation:41.4165,x:1288.45,y:283.55}},{t:this.ikNode_25,p:{rotation:81.028,x:1376.05,y:336.3,regX:0.2,scaleX:0.9278,scaleY:0.9278,regY:-0.1}}]},1).to({state:[{t:this.ikNode_37,p:{regX:37.4,scaleX:1.6019,scaleY:1.6019,rotation:-26.1235,x:1156.35,y:332.45,regY:8.4}},{t:this.ikNode_35,p:{scaleX:1.602,scaleY:1.602,rotation:-20.0792,x:1196.8,y:292.05,regY:12.6}},{t:this.ikNode_33,p:{scaleX:1.602,scaleY:1.602,rotation:-19.7601,x:1213.9,y:253.3,regX:18.1}},{t:this.ikNode_31,p:{regY:5.2,rotation:96.7277,x:1345.6,y:341.45,scaleX:0.994,scaleY:0.994}},{t:this.ikNode_29,p:{regX:14.3,regY:12.6,scaleX:0.994,scaleY:0.994,rotation:28.9707,x:1272.35,y:293.55}},{t:this.ikNode_27,p:{scaleX:0.9949,scaleY:0.9949,rotation:-165.6272,x:1330.55,y:318.3,regY:10.3,regX:44.4}},{t:this.ikNode_19,p:{regX:31.3,scaleX:0.9946,scaleY:0.9946,rotation:41.7822,x:1365.5,y:319.5,regY:18.1}},{t:this.ikNode_17,p:{scaleX:0.9952,scaleY:0.9952,rotation:34.451,x:1326.75,y:288.6,regY:23.2}},{t:this.ikNode_2,p:{scaleX:0.997,scaleY:0.997,rotation:12.8775,x:1280.35,y:271.95}},{t:this.ikNode_3,p:{scaleX:0.9955,scaleY:0.9955,rotation:-10.2201,x:1236.9,y:256.65,regX:64.2,regY:50.4}},{t:this.ikNode_11,p:{regX:44.6,scaleX:0.995,scaleY:0.995,rotation:-54.0627,x:1238.65,y:274.75,regY:14.6}},{t:this.ikNode_13,p:{scaleX:0.9952,scaleY:0.9952,rotation:-55.4681,x:1241.5,y:313.05,regY:6.8,regX:69.8}},{t:this.ikNode_15,p:{regX:90.9,scaleX:0.9951,scaleY:0.9951,rotation:-44.5552,x:1238.5,y:364.05,regY:0.8}},{t:this.ikNode_21,p:{regX:21.1,rotation:-158.4476,x:1387.5,y:344.5,regY:10.5,scaleX:0.9284,scaleY:0.9284}},{t:this.ikNode_23,p:{regX:13.6,regY:25,scaleX:0.9284,scaleY:0.9284,rotation:40.7944,x:1275.75,y:299.3}},{t:this.ikNode_25,p:{rotation:93.4214,x:1363.85,y:350.95,regX:0.1,scaleX:0.9279,scaleY:0.9279,regY:-0.1}}]},1).to({state:[{t:this.ikNode_37,p:{regX:37.5,scaleX:1.6019,scaleY:1.6019,rotation:-24.298,x:1144.85,y:348.55,regY:8.4}},{t:this.ikNode_35,p:{scaleX:1.602,scaleY:1.602,rotation:-20.9046,x:1184.55,y:307.65,regY:12.6}},{t:this.ikNode_33,p:{scaleX:1.6021,scaleY:1.6021,rotation:-20.191,x:1201.35,y:268.8,regX:18.1}},{t:this.ikNode_31,p:{regY:5,rotation:109.7307,x:1331.75,y:358.85,scaleX:0.9939,scaleY:0.9939}},{t:this.ikNode_29,p:{regX:14.3,regY:12.6,scaleX:0.994,scaleY:0.994,rotation:31.0108,x:1260.1,y:308.25}},{t:this.ikNode_27,p:{scaleX:0.9949,scaleY:0.9949,rotation:-166.2172,x:1318.5,y:332.45,regY:10.3,regX:44.4}},{t:this.ikNode_19,p:{regX:31.3,scaleX:0.9946,scaleY:0.9946,rotation:41.5033,x:1353.4,y:333.7,regY:18.1}},{t:this.ikNode_17,p:{scaleX:0.9952,scaleY:0.9952,rotation:34.1717,x:1314.55,y:302.85,regY:23.2}},{t:this.ikNode_2,p:{scaleX:0.997,scaleY:0.997,rotation:12.8764,x:1268.15,y:286.3}},{t:this.ikNode_3,p:{scaleX:0.9955,scaleY:0.9955,rotation:-9.3742,x:1224.8,y:270.65,regX:64.2,regY:50.4}},{t:this.ikNode_11,p:{regX:44.7,scaleX:0.995,scaleY:0.995,rotation:-50.6961,x:1226.6,y:289.55,regY:14.6}},{t:this.ikNode_13,p:{scaleX:0.9952,scaleY:0.9952,rotation:-46.5644,x:1227.15,y:327.9,regY:6.8,regX:69.9}},{t:this.ikNode_15,p:{regX:90.9,scaleX:0.9951,scaleY:0.9951,rotation:-43.412,x:1216.2,y:377.9,regY:0.8}},{t:this.ikNode_21,p:{regX:21.1,rotation:-159.2915,x:1375.45,y:358.55,regY:10.5,scaleX:0.9284,scaleY:0.9284}},{t:this.ikNode_23,p:{regX:13.6,regY:24.9,scaleX:0.9284,scaleY:0.9284,rotation:40.1726,x:1263.15,y:314.95}},{t:this.ikNode_25,p:{rotation:105.8197,x:1351.65,y:365.85,regX:0.2,scaleX:0.9279,scaleY:0.9279,regY:-0.1}}]},1).to({state:[{t:this.ikNode_37,p:{regX:37.5,scaleX:1.6019,scaleY:1.6019,rotation:-22.4721,x:1133.15,y:364.75,regY:8.4}},{t:this.ikNode_35,p:{scaleX:1.602,scaleY:1.602,rotation:-21.7311,x:1172.25,y:323.3,regY:12.6}},{t:this.ikNode_33,p:{scaleX:1.602,scaleY:1.602,rotation:-20.6213,x:1188.8,y:284.35,regX:18.1}},{t:this.ikNode_31,p:{regY:5.1,rotation:122.734,x:1317.55,y:376.05,scaleX:0.9939,scaleY:0.9939}},{t:this.ikNode_29,p:{regX:14.2,regY:12.6,scaleX:0.994,scaleY:0.994,rotation:33.0514,x:1247.7,y:323.05}},{t:this.ikNode_27,p:{scaleX:0.9949,scaleY:0.9949,rotation:-166.8071,x:1306.4,y:346.5,regY:10.4,regX:44.4}},{t:this.ikNode_19,p:{regX:31.2,scaleX:0.9945,scaleY:0.9945,rotation:41.2236,x:1341.25,y:347.7,regY:18.1}},{t:this.ikNode_17,p:{scaleX:0.9952,scaleY:0.9952,rotation:33.8908,x:1302.3,y:317.1,regY:23.2}},{t:this.ikNode_2,p:{scaleX:0.997,scaleY:0.997,rotation:12.8764,x:1256,y:300.65}},{t:this.ikNode_3,p:{scaleX:0.9955,scaleY:0.9955,rotation:-8.5294,x:1212.75,y:284.4,regX:64.2,regY:50.3}},{t:this.ikNode_11,p:{regX:44.7,scaleX:0.995,scaleY:0.995,rotation:-47.3298,x:1214.5,y:304.25,regY:14.6}},{t:this.ikNode_13,p:{scaleX:0.9952,scaleY:0.9952,rotation:-37.6599,x:1212.65,y:342.7,regY:6.8,regX:69.8}},{t:this.ikNode_15,p:{regX:90.8,scaleX:0.9951,scaleY:0.9951,rotation:-42.27,x:1194.1,y:390.4,regY:0.8}},{t:this.ikNode_21,p:{regX:21.1,rotation:-160.1347,x:1363.35,y:372.65,regY:10.5,scaleX:0.9284,scaleY:0.9284}},{t:this.ikNode_23,p:{regX:13.6,regY:24.9,scaleX:0.9284,scaleY:0.9284,rotation:39.5508,x:1250.45,y:330.65}},{t:this.ikNode_25,p:{rotation:118.2171,x:1339.6,y:380.5,regX:0.1,scaleX:0.9279,scaleY:0.9279,regY:-0.1}}]},1).to({state:[{t:this.ikNode_37,p:{regX:37.5,scaleX:1.6019,scaleY:1.6019,rotation:-18.8029,x:1115.65,y:374.1,regY:8.4}},{t:this.ikNode_35,p:{scaleX:1.602,scaleY:1.602,rotation:-17.5643,x:1157.75,y:335.6,regY:12.6}},{t:this.ikNode_33,p:{scaleX:1.602,scaleY:1.602,rotation:-16.7882,x:1176.75,y:297.75,regX:18.1}},{t:this.ikNode_31,p:{regY:5.2,rotation:126.2366,x:1305.4,y:390.45,scaleX:0.9939,scaleY:0.9939}},{t:this.ikNode_29,p:{regX:14.3,regY:12.6,scaleX:0.994,scaleY:0.994,rotation:32.9299,x:1235.65,y:337.65}},{t:this.ikNode_27,p:{scaleX:0.9949,scaleY:0.9949,rotation:-167.0714,x:1294.35,y:360.65,regY:10.5,regX:44.4}},{t:this.ikNode_19,p:{regX:31.3,scaleX:0.9946,scaleY:0.9946,rotation:40.9445,x:1329.25,y:361.8,regY:18.1}},{t:this.ikNode_17,p:{scaleX:0.9953,scaleY:0.9953,rotation:33.6128,x:1290.2,y:331.4,regY:23.2}},{t:this.ikNode_2,p:{scaleX:0.997,scaleY:0.997,rotation:12.8764,x:1243.75,y:314.95}},{t:this.ikNode_3,p:{scaleX:0.9955,scaleY:0.9955,rotation:-4.6132,x:1201.25,y:297.1,regX:64.2,regY:50.4}},{t:this.ikNode_11,p:{regX:44.6,scaleX:0.995,scaleY:0.995,rotation:-41.9007,x:1202.05,y:317.4,regY:14.6}},{t:this.ikNode_13,p:{scaleX:0.9952,scaleY:0.9952,rotation:-41.1307,x:1196.65,y:355.35,regY:6.7,regX:69.8}},{t:this.ikNode_15,p:{regX:90.8,scaleX:0.9951,scaleY:0.9951,rotation:-46.8652,x:1181.05,y:404.15,regY:0.8}},{t:this.ikNode_21,p:{regX:21.1,rotation:-161.0416,x:1351.25,y:386.8,regY:10.4,scaleX:0.9284,scaleY:0.9284}},{t:this.ikNode_23,p:{regX:13.6,regY:25,scaleX:0.9284,scaleY:0.9284,rotation:37.5014,x:1237.65,y:346.65}},{t:this.ikNode_25,p:{rotation:113.636,x:1328.55,y:393.15,regX:0.1,scaleX:0.9278,scaleY:0.9278,regY:-0.2}}]},1).to({state:[{t:this.ikNode_37,p:{regX:37.5,scaleX:1.6019,scaleY:1.6019,rotation:-15.1336,x:1098.45,y:383.05,regY:8.4}},{t:this.ikNode_35,p:{scaleX:1.602,scaleY:1.602,rotation:-13.3979,x:1143.3,y:347.85,regY:12.7}},{t:this.ikNode_33,p:{scaleX:1.602,scaleY:1.602,rotation:-12.9547,x:1164.85,y:311.3,regX:18.1}},{t:this.ikNode_31,p:{regY:5.1,rotation:129.74,x:1293.4,y:404.95,scaleX:0.9939,scaleY:0.9939}},{t:this.ikNode_29,p:{regX:14.3,regY:12.6,scaleX:0.994,scaleY:0.994,rotation:32.8082,x:1223.4,y:352.15}},{t:this.ikNode_27,p:{scaleX:0.9949,scaleY:0.9949,rotation:-167.3381,x:1282.25,y:375.05,regY:10.4,regX:44.4}},{t:this.ikNode_19,p:{regX:31.3,scaleX:0.9945,scaleY:0.9945,rotation:40.6653,x:1317.15,y:375.85,regY:18.1}},{t:this.ikNode_17,p:{scaleX:0.9952,scaleY:0.9952,rotation:33.3331,x:1278,y:345.7,regY:23.2}},{t:this.ikNode_2,p:{scaleX:0.997,scaleY:0.997,rotation:12.8764,x:1231.55,y:329.25}},{t:this.ikNode_3,p:{scaleX:0.9955,scaleY:0.9955,rotation:-0.6973,x:1189.65,y:309.6,regX:64.2,regY:50.3}},{t:this.ikNode_11,p:{regX:44.7,scaleX:0.995,scaleY:0.995,rotation:-36.4722,x:1189.8,y:330.45,regY:14.6}},{t:this.ikNode_13,p:{scaleX:0.9952,scaleY:0.9952,rotation:-44.6018,x:1180.85,y:367.8,regY:6.8,regX:69.8}},{t:this.ikNode_15,p:{regX:90.9,scaleX:0.9951,scaleY:0.9951,rotation:-51.4601,x:1168.2,y:417.4,regY:0.9}},{t:this.ikNode_21,p:{regX:21.1,rotation:-161.948,x:1339.2,y:400.9,regY:10.4,scaleX:0.9284,scaleY:0.9284}},{t:this.ikNode_23,p:{regX:13.6,regY:24.9,scaleX:0.9284,scaleY:0.9284,rotation:35.4502,x:1225.1,y:362.5}},{t:this.ikNode_25,p:{rotation:109.0547,x:1317.45,y:405.8,regX:0.1,scaleX:0.9279,scaleY:0.9279,regY:-0.1}}]},1).to({state:[{t:this.ikNode_37,p:{regX:37.5,scaleX:1.6019,scaleY:1.6019,rotation:-11.4638,x:1081.6,y:391.65,regY:8.4}},{t:this.ikNode_35,p:{scaleX:1.602,scaleY:1.602,rotation:-9.2318,x:1128.9,y:359.65,regY:12.6}},{t:this.ikNode_33,p:{scaleX:1.6021,scaleY:1.6021,rotation:-9.1219,x:1152.9,y:324.7,regX:18.1}},{t:this.ikNode_31,p:{regY:5.1,rotation:133.2426,x:1281.35,y:419.4,scaleX:0.9939,scaleY:0.9939}},{t:this.ikNode_29,p:{regX:14.3,regY:12.7,scaleX:0.994,scaleY:0.994,rotation:32.6874,x:1211.25,y:366.75}},{t:this.ikNode_27,p:{scaleX:0.9949,scaleY:0.9949,rotation:-167.6027,x:1270.05,y:389.3,regY:10.4,regX:44.5}},{t:this.ikNode_19,p:{regX:31.2,scaleX:0.9946,scaleY:0.9946,rotation:40.3866,x:1305.1,y:389.9,regY:18.1}},{t:this.ikNode_17,p:{scaleX:0.9953,scaleY:0.9953,rotation:33.0547,x:1265.75,y:359.9,regY:23.2}},{t:this.ikNode_2,p:{scaleX:0.997,scaleY:0.997,rotation:12.8764,x:1219.3,y:343.5}},{t:this.ikNode_3,p:{scaleX:0.9955,scaleY:0.9955,rotation:3.2144,x:1178.3,y:322.4,regX:64.2,regY:50.4}},{t:this.ikNode_11,p:{regX:44.7,scaleX:0.995,scaleY:0.995,rotation:-31.0429,x:1177.5,y:343.4,regY:14.5}},{t:this.ikNode_13,p:{scaleX:0.9952,scaleY:0.9952,rotation:-48.0721,x:1165.05,y:379.8,regY:6.8,regX:69.8}},{t:this.ikNode_15,p:{regX:90.9,scaleX:0.9951,scaleY:0.9951,rotation:-56.0553,x:1155.4,y:430,regY:0.8}},{t:this.ikNode_21,p:{regX:21.1,rotation:-162.8551,x:1327.15,y:414.85,regY:10.5,scaleX:0.9285,scaleY:0.9285}},{t:this.ikNode_23,p:{regX:13.6,regY:24.9,scaleX:0.9284,scaleY:0.9284,rotation:33.3996,x:1212.4,y:378.35}},{t:this.ikNode_25,p:{rotation:104.4736,x:1306.2,y:418.4,regX:0.2,scaleX:0.9279,scaleY:0.9279,regY:-0.1}}]},1).to({state:[{t:this.ikNode_37,p:{regX:37.5,scaleX:1.6019,scaleY:1.6019,rotation:-7.7945,x:1065.1,y:399.95,regY:8.4}},{t:this.ikNode_35,p:{scaleX:1.602,scaleY:1.602,rotation:-5.0645,x:1114.65,y:371.5,regY:12.6}},{t:this.ikNode_33,p:{scaleX:1.602,scaleY:1.602,rotation:-5.2873,x:1140.85,y:338.25,regX:18.1}},{t:this.ikNode_31,p:{regY:5.1,rotation:136.7455,x:1269.3,y:433.75,scaleX:0.9939,scaleY:0.9939}},{t:this.ikNode_29,p:{regX:14.3,regY:12.6,scaleX:0.994,scaleY:0.994,rotation:32.5664,x:1199.15,y:381.2}},{t:this.ikNode_27,p:{scaleX:0.9949,scaleY:0.9949,rotation:-167.869,x:1257.95,y:403.65,regY:10.4,regX:44.5}},{t:this.ikNode_19,p:{regX:31.3,scaleX:0.9946,scaleY:0.9946,rotation:40.1072,x:1293.05,y:404.05,regY:18.1}},{t:this.ikNode_17,p:{scaleX:0.9952,scaleY:0.9952,rotation:32.7737,x:1253.65,y:374.2,regY:23.2}},{t:this.ikNode_2,p:{scaleX:0.997,scaleY:0.997,rotation:12.8764,x:1207.1,y:357.8}},{t:this.ikNode_3,p:{scaleX:0.9954,scaleY:0.9954,rotation:7.1306,x:1166.85,y:335.1,regX:64.2,regY:50.4}},{t:this.ikNode_11,p:{regX:44.7,scaleX:0.995,scaleY:0.995,rotation:-25.6137,x:1165.25,y:356.5,regY:14.5}},{t:this.ikNode_13,p:{scaleX:0.9952,scaleY:0.9952,rotation:-51.543,x:1149.45,y:391.6,regY:6.8,regX:69.8}},{t:this.ikNode_15,p:{regX:90.9,scaleX:0.9952,scaleY:0.9952,rotation:-60.6495,x:1142.85,y:442.2,regY:0.8}},{t:this.ikNode_21,p:{regX:21.1,rotation:-163.7632,x:1315,y:429,regY:10.4,scaleX:0.9284,scaleY:0.9284}},{t:this.ikNode_23,p:{regX:13.6,regY:24.9,scaleX:0.9284,scaleY:0.9284,rotation:31.3509,x:1199.8,y:394.25}},{t:this.ikNode_25,p:{rotation:99.8926,x:1295.1,y:430.9,regX:0.1,scaleX:0.9279,scaleY:0.9279,regY:-0.2}}]},1).to({state:[{t:this.ikNode_37,p:{regX:37.5,scaleX:1.6019,scaleY:1.6019,rotation:-4.1247,x:1049.1,y:407.95,regY:8.4}},{t:this.ikNode_35,p:{scaleX:1.602,scaleY:1.602,rotation:-0.8983,x:1100.45,y:383.15,regY:12.6}},{t:this.ikNode_33,p:{scaleX:1.6021,scaleY:1.6021,rotation:-1.4529,x:1129,y:351.75,regX:18.1}},{t:this.ikNode_31,p:{regY:5.1,rotation:140.2487,x:1257.25,y:448.15,scaleX:0.9939,scaleY:0.9939}},{t:this.ikNode_29,p:{regX:14.3,regY:12.6,scaleX:0.994,scaleY:0.994,rotation:32.4441,x:1186.95,y:395.75}},{t:this.ikNode_27,p:{scaleX:0.9949,scaleY:0.9949,rotation:-168.1341,x:1246,y:417.8,regY:10.5,regX:44.4}},{t:this.ikNode_19,p:{regX:31.3,scaleX:0.9945,scaleY:0.9945,rotation:39.8282,x:1280.9,y:418.05,regY:18.1}},{t:this.ikNode_17,p:{scaleX:0.9952,scaleY:0.9952,rotation:32.4947,x:1241.45,y:388.45,regY:23.2}},{t:this.ikNode_2,p:{scaleX:0.997,scaleY:0.997,rotation:12.8764,x:1194.9,y:372.15}},{t:this.ikNode_3,p:{scaleX:0.9955,scaleY:0.9955,rotation:11.0467,x:1155.55,y:347.8,regX:64.2,regY:50.4}},{t:this.ikNode_11,p:{regX:44.7,scaleX:0.995,scaleY:0.995,rotation:-20.1854,x:1153.15,y:369.6,regY:14.6}},{t:this.ikNode_13,p:{scaleX:0.9952,scaleY:0.9952,rotation:-55.0131,x:1134.1,y:403.1,regY:6.8,regX:69.8}},{t:this.ikNode_15,p:{regX:90.9,scaleX:0.9952,scaleY:0.9952,rotation:-65.2453,x:1130.45,y:453.95,regY:0.8}},{t:this.ikNode_21,p:{regX:21.1,rotation:-164.6703,x:1302.95,y:443.1,regY:10.4,scaleX:0.9285,scaleY:0.9285}},{t:this.ikNode_23,p:{regX:13.6,regY:25,scaleX:0.9284,scaleY:0.9284,rotation:29.3014,x:1187.15,y:410.25}},{t:this.ikNode_25,p:{rotation:95.3115,x:1283.65,y:443.35,regX:0.1,scaleX:0.9278,scaleY:0.9278,regY:-0.2}}]},1).to({state:[{t:this.ikNode_37,p:{regX:37.5,scaleX:1.6019,scaleY:1.6019,rotation:-0.4579,x:1033.6,y:415.7,regY:8.4}},{t:this.ikNode_35,p:{scaleX:1.602,scaleY:1.602,rotation:3.262,x:1086.45,y:394.7,regY:12.6}},{t:this.ikNode_33,p:{scaleX:1.6021,scaleY:1.6021,rotation:2.3756,x:1117.05,y:365.3,regX:18.1}},{t:this.ikNode_31,p:{regY:5.1,rotation:143.7527,x:1245.15,y:462.65,scaleX:0.9939,scaleY:0.9939}},{t:this.ikNode_29,p:{regX:14.3,regY:12.6,scaleX:0.994,scaleY:0.994,rotation:32.3236,x:1174.85,y:410.45}},{t:this.ikNode_27,p:{scaleX:0.9949,scaleY:0.9949,rotation:-168.4016,x:1234,y:432.05,regY:10.5,regX:44.4}},{t:this.ikNode_19,p:{regX:31.2,scaleX:0.9946,scaleY:0.9946,rotation:39.5486,x:1268.95,y:432.25,regY:18.1}},{t:this.ikNode_17,p:{scaleX:0.9952,scaleY:0.9952,rotation:32.2152,x:1229.15,y:403,regY:23.3}},{t:this.ikNode_2,p:{scaleX:0.997,scaleY:0.997,rotation:12.8764,x:1182.8,y:386.55}},{t:this.ikNode_3,p:{scaleX:0.9955,scaleY:0.9955,rotation:-3.4642,x:1140.5,y:368.1,regX:64.3,regY:50.4}},{t:this.ikNode_11,p:{regX:44.7,scaleX:0.995,scaleY:0.995,rotation:-14.757,x:1141,y:382.7,regY:14.6}},{t:this.ikNode_13,p:{scaleX:0.9952,scaleY:0.9952,rotation:-58.4833,x:1118.9,y:414.25,regY:6.8,regX:69.8}},{t:this.ikNode_15,p:{regX:90.8,scaleX:0.9952,scaleY:0.9952,rotation:-69.8365,x:1118.35,y:465.35,regY:0.8}},{t:this.ikNode_21,p:{regX:21.1,rotation:-164.082,x:1291.15,y:457.15,regY:10.4,scaleX:0.9285,scaleY:0.9285}},{t:this.ikNode_23,p:{regX:13.6,regY:24.9,scaleX:0.9284,scaleY:0.9284,rotation:33.2372,x:1175.75,y:422.95}},{t:this.ikNode_25,p:{rotation:117.9418,x:1269.7,y:462.65,regX:0.1,scaleX:0.9279,scaleY:0.9279,regY:-0.1}}]},1).to({state:[{t:this.ikNode_37,p:{regX:37.5,scaleX:1.6019,scaleY:1.6019,rotation:-10.0916,x:1027.8,y:445.3,regY:8.4}},{t:this.ikNode_35,p:{scaleX:1.602,scaleY:1.602,rotation:-5.8709,x:1076.8,y:416.2,regY:12.6}},{t:this.ikNode_33,p:{scaleX:1.602,scaleY:1.602,rotation:-4.4159,x:1103.6,y:383.4,regX:18.1}},{t:this.ikNode_31,p:{regY:5.1,rotation:140.1244,x:1232.95,y:477.15,scaleX:0.9939,scaleY:0.9939}},{t:this.ikNode_29,p:{regX:14.3,regY:12.6,scaleX:0.994,scaleY:0.994,rotation:32.3758,x:1162.55,y:424.9}},{t:this.ikNode_27,p:{scaleX:0.9949,scaleY:0.9949,rotation:-168.6499,x:1221.95,y:446.45,regY:10.4,regX:44.4}},{t:this.ikNode_19,p:{regX:31.3,scaleX:0.9946,scaleY:0.9946,rotation:39.2688,x:1256.85,y:446.25,regY:18.1}},{t:this.ikNode_17,p:{scaleX:0.9952,scaleY:0.9952,rotation:31.9366,x:1216.95,y:417.2,regY:23.3}},{t:this.ikNode_2,p:{scaleX:0.997,scaleY:0.997,rotation:12.8747,x:1170.55,y:400.8}},{t:this.ikNode_3,p:{scaleX:0.9954,scaleY:0.9954,rotation:9.6877,x:1127.7,y:383.1,regX:64.2,regY:50.4}},{t:this.ikNode_11,p:{regX:44.8,scaleX:0.995,scaleY:0.995,rotation:-18.2635,x:1128.65,y:401.65,regY:14.6}},{t:this.ikNode_13,p:{scaleX:0.9952,scaleY:0.9952,rotation:-50.654,x:1108.4,y:434.4,regY:6.8,regX:69.8}},{t:this.ikNode_15,p:{regX:90.9,scaleX:0.9951,scaleY:0.9951,rotation:-52.5604,x:1100.95,y:484.95,regY:0.8}},{t:this.ikNode_21,p:{regX:21.1,rotation:-164.5024,x:1279.1,y:471.1,regY:10.4,scaleX:0.9284,scaleY:0.9284}},{t:this.ikNode_23,p:{regX:13.6,regY:25,scaleX:0.9284,scaleY:0.9284,rotation:32.2997,x:1163.45,y:437.8}},{t:this.ikNode_25,p:{rotation:106.3511,x:1258.05,y:476.15,regX:0.2,scaleX:0.9279,scaleY:0.9279,regY:-0.1}}]},1).to({state:[{t:this.ikNode_37,p:{regX:37.5,scaleX:1.6019,scaleY:1.6019,rotation:-19.7262,x:1024.15,y:473.95,regY:8.4}},{t:this.ikNode_35,p:{scaleX:1.602,scaleY:1.602,rotation:-15.0097,x:1067.8,y:437.45,regY:12.6}},{t:this.ikNode_33,p:{scaleX:1.6021,scaleY:1.6021,rotation:-11.2105,x:1090.6,y:401.65,regX:18.1}},{t:this.ikNode_31,p:{regY:5.2,rotation:136.4973,x:1220.7,y:491.75,scaleX:0.9939,scaleY:0.9939}},{t:this.ikNode_29,p:{regX:14.3,regY:12.6,scaleX:0.994,scaleY:0.994,rotation:32.4268,x:1150.5,y:439.4}},{t:this.ikNode_27,p:{scaleX:0.9949,scaleY:0.9949,rotation:-168.8989,x:1209.85,y:460.65,regY:10.4,regX:44.4}},{t:this.ikNode_19,p:{regX:31.3,scaleX:0.9946,scaleY:0.9946,rotation:38.9889,x:1244.8,y:460.4,regY:18.1}},{t:this.ikNode_17,p:{scaleX:0.9953,scaleY:0.9953,rotation:31.6572,x:1204.85,y:431.4,regY:23.2}},{t:this.ikNode_2,p:{scaleX:0.997,scaleY:0.997,rotation:12.8754,x:1158.4,y:415.15}},{t:this.ikNode_3,p:{scaleX:0.9954,scaleY:0.9954,rotation:4.3772,x:1115.9,y:396.5,regX:64.2,regY:50.4}},{t:this.ikNode_11,p:{regX:44.7,scaleX:0.995,scaleY:0.995,rotation:-21.773,x:1116.7,y:420.55,regY:14.6}},{t:this.ikNode_13,p:{scaleX:0.9952,scaleY:0.9952,rotation:-42.824,x:1098.55,y:454.45,regY:6.8,regX:69.8}},{t:this.ikNode_15,p:{regX:90.9,scaleX:0.9951,scaleY:0.9951,rotation:-35.2804,x:1084.4,y:503.6,regY:0.9}},{t:this.ikNode_21,p:{regX:21.1,rotation:-164.9232,x:1267.05,y:485.2,regY:10.4,scaleX:0.9285,scaleY:0.9285}},{t:this.ikNode_23,p:{regX:13.6,regY:24.9,scaleX:0.9284,scaleY:0.9284,rotation:31.362,x:1151.25,y:452.65}},{t:this.ikNode_25,p:{rotation:94.7638,x:1246.5,y:489.35,regX:0.1,scaleX:0.9279,scaleY:0.9279,regY:-0.1}}]},1).to({state:[{t:this.ikNode_37,p:{regX:37.5,scaleX:1.6018,scaleY:1.6018,rotation:-29.3623,x:1022.05,y:501.15,regY:8.4}},{t:this.ikNode_35,p:{scaleX:1.602,scaleY:1.602,rotation:-24.1481,x:1059.3,y:458.2,regY:12.6}},{t:this.ikNode_33,p:{scaleX:1.602,scaleY:1.602,rotation:-18.0039,x:1077.8,y:420.05,regX:18.1}},{t:this.ikNode_31,p:{regY:5.1,rotation:132.8705,x:1208.6,y:506.45,scaleX:0.9939,scaleY:0.9939}},{t:this.ikNode_29,p:{regX:14.3,regY:12.6,scaleX:0.994,scaleY:0.994,rotation:32.4781,x:1138.25,y:453.95}},{t:this.ikNode_27,p:{scaleX:0.9949,scaleY:0.9949,rotation:-169.1476,x:1197.75,y:475.1,regY:10.3,regX:44.4}},{t:this.ikNode_19,p:{regX:31.2,scaleX:0.9945,scaleY:0.9945,rotation:38.7087,x:1232.7,y:474.45,regY:18.1}},{t:this.ikNode_17,p:{scaleX:0.9952,scaleY:0.9952,rotation:31.3781,x:1192.6,y:445.75,regY:23.2}},{t:this.ikNode_2,p:{scaleX:0.997,scaleY:0.997,rotation:12.8764,x:1146.25,y:429.55}},{t:this.ikNode_3,p:{scaleX:0.9954,scaleY:0.9954,rotation:-0.9292,x:1104.25,y:409.8,regX:64.2,regY:50.3}},{t:this.ikNode_11,p:{regX:44.7,scaleX:0.995,scaleY:0.995,rotation:-25.282,x:1105.3,y:439.4,regY:14.6}},{t:this.ikNode_13,p:{scaleX:0.9952,scaleY:0.9952,rotation:-34.9952,x:1089.3,y:474.5,regY:6.8,regX:69.8}},{t:this.ikNode_15,p:{regX:90.9,scaleX:0.9952,scaleY:0.9952,rotation:-18.0032,x:1068.6,y:521,regY:0.8}},{t:this.ikNode_21,p:{regX:21.1,rotation:-165.3432,x:1255.15,y:499.3,regY:10.4,scaleX:0.9285,scaleY:0.9285}},{t:this.ikNode_23,p:{regX:13.6,regY:24.9,scaleX:0.9284,scaleY:0.9284,rotation:30.4243,x:1139.1,y:467.65}},{t:this.ikNode_25,p:{rotation:83.181,x:1234.85,y:502.8,regX:0.2,scaleX:0.9279,scaleY:0.9279,regY:-0.1}}]},1).to({state:[{t:this.ikNode_37,p:{regX:37.5,scaleX:1.6019,scaleY:1.6019,rotation:-38.9984,x:1021.55,y:526.65,regY:8.4}},{t:this.ikNode_35,p:{scaleX:1.602,scaleY:1.602,rotation:-33.2885,x:1051.25,y:478.5,regY:12.6}},{t:this.ikNode_33,p:{scaleX:1.6021,scaleY:1.6021,rotation:-24.7998,x:1065.2,y:438.4,regX:18.1}},{t:this.ikNode_31,p:{regY:5.2,rotation:129.2439,x:1196.45,y:521.05,scaleX:0.9939,scaleY:0.9939}},{t:this.ikNode_29,p:{regX:14.3,regY:12.6,scaleX:0.994,scaleY:0.994,rotation:32.5295,x:1126.2,y:468.55}},{t:this.ikNode_27,p:{scaleX:0.9949,scaleY:0.9949,rotation:-169.3955,x:1185.75,y:489.25,regY:10.4,regX:44.4}},{t:this.ikNode_19,p:{regX:31.3,scaleX:0.9946,scaleY:0.9946,rotation:38.4305,x:1220.75,y:488.65,regY:18.1}},{t:this.ikNode_17,p:{scaleX:0.9952,scaleY:0.9952,rotation:31.0974,x:1180.4,y:460.15,regY:23.2}},{t:this.ikNode_2,p:{scaleX:0.997,scaleY:0.997,rotation:12.8764,x:1134.1,y:444}},{t:this.ikNode_3,p:{scaleX:0.9955,scaleY:0.9955,rotation:-0.0878,x:1092.25,y:423.95,regX:64.2,regY:50.4}},{t:this.ikNode_11,p:{regX:44.7,scaleX:0.995,scaleY:0.995,rotation:-28.7912,x:1094.65,y:458.1,regY:14.6}},{t:this.ikNode_13,p:{scaleX:0.9952,scaleY:0.9952,rotation:-27.163,x:1080.55,y:494.1,regY:6.8,regX:69.8}},{t:this.ikNode_15,p:{regX:90.9,scaleX:0.9952,scaleY:0.9952,rotation:-0.7274,x:1053.65,y:537.45,regY:0.8}},{t:this.ikNode_21,p:{regX:21.1,rotation:-169.3883,x:1242.85,y:513.75,regY:10.4,scaleX:0.9284,scaleY:0.9284}},{t:this.ikNode_23,p:{regX:13.6,regY:24.9,scaleX:0.9284,scaleY:0.9284,rotation:31.9459,x:1124.75,y:490.3}},{t:this.ikNode_25,p:{rotation:118.3478,x:1219.75,y:527.85,regX:0.1,scaleX:0.9279,scaleY:0.9279,regY:-0.1}}]},1).to({state:[{t:this.ikNode_37,p:{regX:37.5,scaleX:1.6019,scaleY:1.6019,rotation:-37.5628,x:1018.4,y:561.1,regY:8.4}},{t:this.ikNode_35,p:{scaleX:1.602,scaleY:1.602,rotation:-32.2547,x:1049.4,y:513.3,regY:12.6}},{t:this.ikNode_33,p:{scaleX:1.602,scaleY:1.602,rotation:-24.0285,x:1063.95,y:473.4,regX:18.1}},{t:this.ikNode_31,p:{regY:5.1,rotation:130.9189,x:1194.85,y:556.45,scaleX:0.9939,scaleY:0.9939}},{t:this.ikNode_29,p:{regX:14.3,regY:12.6,scaleX:0.994,scaleY:0.994,rotation:32.8699,x:1125.1,y:503.55}},{t:this.ikNode_27,p:{scaleX:0.9949,scaleY:0.9949,rotation:-169.4715,x:1184.45,y:524.4,regY:10.3,regX:44.4}},{t:this.ikNode_19,p:{regX:31.3,scaleX:0.9946,scaleY:0.9946,rotation:38.1506,x:1219.5,y:523.45,regY:18.1}},{t:this.ikNode_17,p:{scaleX:0.9952,scaleY:0.9952,rotation:30.8169,x:1179,y:495.2,regY:23.2}},{t:this.ikNode_2,p:{scaleX:0.997,scaleY:0.997,rotation:12.8747,x:1132.8,y:479}},{t:this.ikNode_3,p:{scaleX:0.9955,scaleY:0.9955,rotation:-6.4761,x:1090.15,y:460.75,regX:64.2,regY:50.4}},{t:this.ikNode_11,p:{regX:44.7,scaleX:0.995,scaleY:0.995,rotation:-27.9067,x:1093.05,y:493.15,regY:14.6}},{t:this.ikNode_13,p:{scaleX:0.9952,scaleY:0.9952,rotation:-25.2692,x:1078.55,y:528.95,regY:6.7,regX:69.8}},{t:this.ikNode_15,p:{regX:90.9,scaleX:0.9952,scaleY:0.9952,rotation:1.1518,x:1050.4,y:571.25,regY:0.8}},{t:this.ikNode_21,p:{regX:21.1,rotation:-170.0085,x:1241.6,y:548.5,regY:10.4,scaleX:0.9285,scaleY:0.9285}},{t:this.ikNode_23,p:{regX:13.6,regY:24.9,scaleX:0.9284,scaleY:0.9284,rotation:31.2606,x:1123.35,y:526.25}},{t:this.ikNode_25,p:{rotation:119.9681,x:1218.7,y:562.7,regX:0.1,scaleX:0.9278,scaleY:0.9278,regY:-0.1}}]},1).to({state:[{t:this.ikNode_37,p:{regX:37.5,scaleX:1.6019,scaleY:1.6019,rotation:-36.1266,x:1015.25,y:595.55,regY:8.4}},{t:this.ikNode_35,p:{scaleX:1.602,scaleY:1.602,rotation:-31.2195,x:1047.55,y:548.1,regY:12.6}},{t:this.ikNode_33,p:{scaleX:1.602,scaleY:1.602,rotation:-23.256,x:1062.6,y:508.45,regX:18.1}},{t:this.ikNode_31,p:{regY:5.2,rotation:132.5954,x:1193.3,y:591.8,scaleX:0.9939,scaleY:0.9939}},{t:this.ikNode_29,p:{regX:14.3,regY:12.6,scaleX:0.994,scaleY:0.994,rotation:33.2095,x:1123.95,y:538.6}},{t:this.ikNode_27,p:{scaleX:0.9949,scaleY:0.9949,rotation:-169.5475,x:1183.35,y:559.25,regY:10.4,regX:44.4}},{t:this.ikNode_19,p:{regX:31.3,scaleX:0.9946,scaleY:0.9946,rotation:37.8708,x:1218.2,y:558.15,regY:18.1}},{t:this.ikNode_17,p:{scaleX:0.9952,scaleY:0.9952,rotation:30.538,x:1177.65,y:530.2,regY:23.3}},{t:this.ikNode_2,p:{scaleX:0.997,scaleY:0.997,rotation:12.8739,x:1131.4,y:514}},{t:this.ikNode_3,p:{scaleX:0.9955,scaleY:0.9955,rotation:-12.8644,x:1088.05,y:497.5,regX:64.2,regY:50.4}},{t:this.ikNode_11,p:{regX:44.7,scaleX:0.995,scaleY:0.995,rotation:-27.0232,x:1091.5,y:528.15,regY:14.6}},{t:this.ikNode_13,p:{scaleX:0.9952,scaleY:0.9952,rotation:-23.378,x:1076.65,y:563.95,regY:6.8,regX:69.8}},{t:this.ikNode_15,p:{regX:90.9,scaleX:0.9952,scaleY:0.9952,rotation:3.035,x:1047.1,y:605.15,regY:0.8}},{t:this.ikNode_21,p:{regX:21.2,rotation:-170.6284,x:1240.25,y:583.05,regY:10.5,scaleX:0.9285,scaleY:0.9285}},{t:this.ikNode_23,p:{regX:13.6,regY:24.9,scaleX:0.9284,scaleY:0.9284,rotation:30.5763,x:1122,y:562.2}},{t:this.ikNode_25,p:{rotation:121.589,x:1217.65,y:597.65,regX:0.1,scaleX:0.9278,scaleY:0.9278,regY:-0.1}}]},1).to({state:[{t:this.ikNode_37,p:{regX:37.5,scaleX:1.6019,scaleY:1.6019,rotation:-34.6913,x:1012.4,y:629.85,regY:8.4}},{t:this.ikNode_35,p:{scaleX:1.602,scaleY:1.602,rotation:-30.1852,x:1045.75,y:582.95,regY:12.6}},{t:this.ikNode_33,p:{scaleX:1.6021,scaleY:1.6021,rotation:-22.4844,x:1061.35,y:543.55,regX:18.1}},{t:this.ikNode_31,p:{regY:5.1,rotation:134.271,x:1191.8,y:627.35,scaleX:0.9939,scaleY:0.9939}},{t:this.ikNode_29,p:{regX:14.3,regY:12.6,scaleX:0.994,scaleY:0.994,rotation:33.5496,x:1122.95,y:573.7}},{t:this.ikNode_27,p:{scaleX:0.9949,scaleY:0.9949,rotation:-169.6225,x:1182.1,y:594.2,regY:10.4,regX:44.4}},{t:this.ikNode_19,p:{regX:31.3,scaleX:0.9946,scaleY:0.9946,rotation:37.5939,x:1217,y:593.1,regY:18.1}},{t:this.ikNode_17,p:{scaleX:0.9953,scaleY:0.9953,rotation:30.2608,x:1176.45,y:565.3,regY:23.2}},{t:this.ikNode_2,p:{scaleX:0.997,scaleY:0.997,rotation:12.8739,x:1130.15,y:549.2}},{t:this.ikNode_3,p:{scaleX:0.9955,scaleY:0.9955,rotation:2.4168,x:1088.95,y:528.05,regX:64.2,regY:50.4}},{t:this.ikNode_11,p:{regX:44.8,scaleX:0.995,scaleY:0.995,rotation:-26.1395,x:1090.3,y:563.1,regY:14.6}},{t:this.ikNode_13,p:{scaleX:0.9952,scaleY:0.9952,rotation:-21.4848,x:1074.85,y:598.85,regY:6.8,regX:69.8}},{t:this.ikNode_15,p:{regX:90.9,scaleX:0.9952,scaleY:0.9952,rotation:4.9213,x:1044,y:639.05,regY:0.8}},{t:this.ikNode_21,p:{regX:21.1,rotation:-171.2483,x:1239.2,y:617.8,regY:10.5,scaleX:0.9285,scaleY:0.9285}},{t:this.ikNode_23,p:{regX:13.6,regY:24.9,scaleX:0.9284,scaleY:0.9284,rotation:29.8939,x:1120.75,y:598.45}},{t:this.ikNode_25,p:{rotation:123.2084,x:1216.7,y:632.7,regX:0.2,scaleX:0.9278,scaleY:0.9278,regY:-0.1}}]},1).to({state:[{t:this.ikNode_37,p:{regX:37.5,scaleX:1.6019,scaleY:1.6019,rotation:-33.2564,x:1009.8,y:630.3,regY:8.4}},{t:this.ikNode_35,p:{scaleX:1.602,scaleY:1.602,rotation:-29.1525,x:1043.95,y:584.05,regY:12.6}},{t:this.ikNode_33,p:{scaleX:1.6021,scaleY:1.6021,rotation:-21.7133,x:1060.05,y:544.8,regX:18.1}},{t:this.ikNode_31,p:{regY:5.1,rotation:148.1128,x:1187.95,y:632.3,scaleX:0.9939,scaleY:0.9939}},{t:this.ikNode_29,p:{regX:14.3,regY:12.6,scaleX:0.994,scaleY:0.994,rotation:36.0292,x:1121.5,y:575.75}},{t:this.ikNode_27,p:{scaleX:0.9949,scaleY:0.9949,rotation:-170.323,x:1181.05,y:595.4,regY:10.5,regX:44.4}},{t:this.ikNode_19,p:{regX:31.3,scaleX:0.9945,scaleY:0.9945,rotation:37.314,x:1215.85,y:594.2,regY:18.1}},{t:this.ikNode_17,p:{scaleX:0.9952,scaleY:0.9952,rotation:29.9794,x:1175.2,y:566.65,regY:23.2}},{t:this.ikNode_2,p:{scaleX:0.997,scaleY:0.997,rotation:12.8739,x:1128.85,y:550.55}},{t:this.ikNode_3,p:{scaleX:0.9955,scaleY:0.9955,rotation:-7.7248,x:1087.1,y:530.55,regX:64.3,regY:50.4}},{t:this.ikNode_11,p:{regX:44.8,scaleX:0.995,scaleY:0.995,rotation:-25.2557,x:1088.95,y:564.5,regY:14.6}},{t:this.ikNode_13,p:{scaleX:0.9952,scaleY:0.9952,rotation:-19.5948,x:1072.95,y:599.9,regY:6.8,regX:69.8}},{t:this.ikNode_15,p:{regX:90.9,scaleX:0.9952,scaleY:0.9952,rotation:6.8097,x:1040.7,y:639.1,regY:0.8}},{t:this.ikNode_21,p:{regX:21.2,rotation:-171.5331,x:1238,y:619,regY:10.4,scaleX:0.9285,scaleY:0.9285}},{t:this.ikNode_23,p:{regX:13.6,regY:24.9,scaleX:0.9284,scaleY:0.9284,rotation:28.922,x:1119.55,y:600.05}},{t:this.ikNode_25,p:{rotation:133.9252,x:1216.1,y:632.65,regX:0.1,scaleX:0.9278,scaleY:0.9278,regY:-0.1}}]},1).to({state:[{t:this.ikNode_37,p:{regX:37.5,scaleX:1.6019,scaleY:1.6019,rotation:-31.8206,x:1007.25,y:630.7,regY:8.4}},{t:this.ikNode_35,p:{scaleX:1.602,scaleY:1.602,rotation:-28.1199,x:1042.1,y:585.05,regY:12.6}},{t:this.ikNode_33,p:{scaleX:1.6021,scaleY:1.6021,rotation:-20.9413,x:1058.8,y:546.2,regX:18.1}},{t:this.ikNode_31,p:{regY:5.1,rotation:161.9528,x:1184.15,y:637.2,scaleX:0.9939,scaleY:0.9939}},{t:this.ikNode_29,p:{regX:14.3,regY:12.6,scaleX:0.994,scaleY:0.994,rotation:38.511,x:1120.1,y:577.8}},{t:this.ikNode_27,p:{scaleX:0.9949,scaleY:0.9949,rotation:-171.0232,x:1179.75,y:596.75,regY:10.4,regX:44.5}},{t:this.ikNode_19,p:{regX:31.3,scaleX:0.9946,scaleY:0.9946,rotation:37.0343,x:1214.75,y:595.35,regY:18.1}},{t:this.ikNode_17,p:{scaleX:0.9953,scaleY:0.9953,rotation:29.7,x:1173.9,y:567.9,regY:23.2}},{t:this.ikNode_2,p:{scaleX:0.997,scaleY:0.997,rotation:12.8739,x:1127.5,y:551.9}},{t:this.ikNode_3,p:{scaleX:0.9955,scaleY:0.9955,rotation:-17.8714,x:1085,y:533.3,regX:64.2,regY:50.4}},{t:this.ikNode_11,p:{regX:44.6,scaleX:0.995,scaleY:0.995,rotation:-24.3719,x:1087.55,y:565.9,regY:14.6}},{t:this.ikNode_13,p:{scaleX:0.9952,scaleY:0.9952,rotation:-17.7054,x:1071.05,y:600.9,regY:6.7,regX:69.8}},{t:this.ikNode_15,p:{regX:90.8,scaleX:0.9951,scaleY:0.9951,rotation:8.6993,x:1037.5,y:639.1,regY:0.8}},{t:this.ikNode_21,p:{regX:21.2,rotation:-171.8194,x:1236.95,y:620,regY:10.4,scaleX:0.9284,scaleY:0.9284}},{t:this.ikNode_23,p:{regX:13.6,regY:24.9,scaleX:0.9284,scaleY:0.9284,rotation:27.9512,x:1118.4,y:601.6}},{t:this.ikNode_25,p:{rotation:144.6411,x:1215.5,y:632.7,regX:0.1,scaleX:0.9278,scaleY:0.9278,regY:-0.2}}]},1).to({state:[{t:this.ikNode_37,p:{regX:37.5,scaleX:1.6019,scaleY:1.6019,rotation:-30.386,x:1004.65,y:631.05,regY:8.4}},{t:this.ikNode_35,p:{scaleX:1.602,scaleY:1.602,rotation:-27.0876,x:1040.3,y:586.1,regY:12.6}},{t:this.ikNode_33,p:{scaleX:1.6021,scaleY:1.6021,rotation:-20.1706,x:1057.45,y:547.4,regX:18.1}},{t:this.ikNode_31,p:{regY:5.1,rotation:161.041,x:1185.8,y:631.75,scaleX:0.9939,scaleY:0.9939}},{t:this.ikNode_29,p:{regX:14.3,regY:12.6,scaleX:0.994,scaleY:0.994,rotation:39.1292,x:1122.45,y:571.65}},{t:this.ikNode_27,p:{scaleX:0.9949,scaleY:0.9949,rotation:-170.0286,x:1181.85,y:591.6,regY:10.4,regX:44.4}},{t:this.ikNode_19,p:{regX:31.3,scaleX:0.9946,scaleY:0.9946,rotation:37.6433,x:1216.75,y:590.65,regY:18}},{t:this.ikNode_17,p:{scaleX:0.9953,scaleY:0.9953,rotation:23.135,x:1173,y:568.15,regY:23.2}},{t:this.ikNode_2,p:{scaleX:0.997,scaleY:0.997,rotation:12.8747,x:1126.2,y:553.3}},{t:this.ikNode_3,p:{scaleX:0.9954,scaleY:0.9954,rotation:-13.8867,x:1084.3,y:533.75,regX:64.3,regY:50.4}},{t:this.ikNode_11,p:{regX:44.7,scaleX:0.995,scaleY:0.995,rotation:-23.4892,x:1086.35,y:567.15,regY:14.6}},{t:this.ikNode_13,p:{scaleX:0.9952,scaleY:0.9952,rotation:-15.8154,x:1069.4,y:601.95,regY:6.8,regX:69.9}},{t:this.ikNode_15,p:{regX:90.9,scaleX:0.9952,scaleY:0.9952,rotation:10.5892,x:1034.4,y:639,regY:0.8}},{t:this.ikNode_21,p:{regX:21.1,rotation:-172.6178,x:1239.1,y:615.3,regY:10.4,scaleX:0.9285,scaleY:0.9285}},{t:this.ikNode_23,p:{regX:13.6,regY:25,scaleX:0.9284,scaleY:0.9284,rotation:27.2612,x:1120.15,y:598.7}},{t:this.ikNode_25,p:{rotation:143.5762,x:1217.65,y:628.35,regX:0.1,scaleX:0.9279,scaleY:0.9279,regY:-0.1}}]},1).to({state:[{t:this.ikNode_37,p:{regX:37.5,scaleX:1.6019,scaleY:1.6019,rotation:-28.9513,x:1002.2,y:631.35,regY:8.4}},{t:this.ikNode_35,p:{scaleX:1.602,scaleY:1.602,rotation:-26.055,x:1038.35,y:587.25,regY:12.6}},{t:this.ikNode_33,p:{scaleX:1.6021,scaleY:1.6021,rotation:-19.4,x:1056.15,y:548.7,regX:18.1}},{t:this.ikNode_31,p:{regY:5,rotation:160.1299,x:1186.9,y:626.15,scaleX:0.9939,scaleY:0.9939}},{t:this.ikNode_29,p:{regX:14.3,regY:12.6,scaleX:0.994,scaleY:0.994,rotation:39.7484,x:1124.1,y:565.25}},{t:this.ikNode_27,p:{scaleX:0.9949,scaleY:0.9949,rotation:-169.0332,x:1183.3,y:586.15,regY:10.4,regX:44.4}},{t:this.ikNode_19,p:{regX:31.3,scaleX:0.9946,scaleY:0.9946,rotation:38.2521,x:1218.2,y:585.6,regY:18}},{t:this.ikNode_17,p:{scaleX:0.9953,scaleY:0.9953,rotation:16.5687,x:1172.1,y:568.3,regY:23.2}},{t:this.ikNode_2,p:{scaleX:0.997,scaleY:0.997,rotation:12.8747,x:1124.9,y:554.7}},{t:this.ikNode_3,p:{scaleX:0.9955,scaleY:0.9955,rotation:-9.9024,x:1083.25,y:534.1,regX:64.2,regY:50.3}},{t:this.ikNode_11,p:{regX:44.7,scaleX:0.995,scaleY:0.995,rotation:-22.6053,x:1085,y:568.4,regY:14.5}},{t:this.ikNode_13,p:{scaleX:0.9952,scaleY:0.9952,rotation:-13.9248,x:1067.55,y:603.05,regY:6.8,regX:69.8}},{t:this.ikNode_15,p:{regX:90.8,scaleX:0.9952,scaleY:0.9952,rotation:12.4785,x:1031.35,y:638.8,regY:0.9}},{t:this.ikNode_21,p:{regX:21.1,rotation:-173.4176,x:1240.6,y:610.2,regY:10.4,scaleX:0.9285,scaleY:0.9285}},{t:this.ikNode_23,p:{regX:13.6,regY:24.9,scaleX:0.9284,scaleY:0.9284,rotation:26.5722,x:1121.45,y:595.2}},{t:this.ikNode_25,p:{rotation:142.5131,x:1219.2,y:623.8,regX:0.1,scaleX:0.9278,scaleY:0.9278,regY:-0.1}}]},1).to({state:[{t:this.ikNode_37,p:{regX:37.5,scaleX:1.6019,scaleY:1.6019,rotation:-27.5165,x:999.8,y:631.8,regY:8.4}},{t:this.ikNode_35,p:{scaleX:1.602,scaleY:1.602,rotation:-25.0239,x:1036.65,y:588.3,regY:12.6}},{t:this.ikNode_33,p:{scaleX:1.6021,scaleY:1.6021,rotation:-18.6294,x:1054.9,y:550,regX:18.1}},{t:this.ikNode_31,p:{regY:5.2,rotation:159.2174,x:1187.2,y:619.9,scaleX:0.994,scaleY:0.994}},{t:this.ikNode_29,p:{regX:14.3,regY:12.6,scaleX:0.994,scaleY:0.994,rotation:40.3683,x:1125.1,y:558.65}},{t:this.ikNode_27,p:{scaleX:0.9949,scaleY:0.9949,rotation:-168.0379,x:1184.1,y:580.5,regY:10.4,regX:44.4}},{t:this.ikNode_19,p:{regX:31.4,scaleX:0.9945,scaleY:0.9945,rotation:38.8612,x:1218.9,y:580.6,regY:18.1}},{t:this.ikNode_17,p:{scaleX:0.9953,scaleY:0.9953,rotation:10.0035,x:1171.25,y:568.55,regY:23.2}},{t:this.ikNode_2,p:{scaleX:0.997,scaleY:0.997,rotation:12.8764,x:1123.55,y:556.1}},{t:this.ikNode_3,p:{scaleX:0.9954,scaleY:0.9954,rotation:-5.9178,x:1082.45,y:534.7,regX:64.2,regY:50.4}},{t:this.ikNode_11,p:{regX:44.6,scaleX:0.995,scaleY:0.995,rotation:-21.7221,x:1083.8,y:569.9,regY:14.6}},{t:this.ikNode_13,p:{scaleX:0.9952,scaleY:0.9952,rotation:-12.0349,x:1065.75,y:603.95,regY:6.7,regX:69.8}},{t:this.ikNode_15,p:{regX:90.9,scaleX:0.9951,scaleY:0.9951,rotation:14.3684,x:1028.45,y:638.6,regY:0.8}},{t:this.ikNode_21,p:{regX:21.2,rotation:-174.217,x:1241.25,y:605.05,regY:10.3,scaleX:0.9285,scaleY:0.9285}},{t:this.ikNode_23,p:{regX:13.6,regY:24.9,scaleX:0.9284,scaleY:0.9284,rotation:25.8815,x:1122.1,y:591.55}},{t:this.ikNode_25,p:{rotation:141.4492,x:1220.2,y:619.05,regX:0.1,scaleX:0.9278,scaleY:0.9278,regY:-0.1}}]},1).to({state:[{t:this.ikNode_37,p:{regX:37.5,scaleX:1.6019,scaleY:1.6019,rotation:-26.0825,x:997.4,y:632.15,regY:8.4}},{t:this.ikNode_35,p:{scaleX:1.602,scaleY:1.602,rotation:-23.992,x:1034.85,y:589.4,regY:12.6}},{t:this.ikNode_33,p:{scaleX:1.602,scaleY:1.602,rotation:-17.858,x:1053.55,y:551.25,regX:18.1}},{t:this.ikNode_31,p:{regY:5.1,rotation:156.7498,x:1185.5,y:626,scaleX:0.9939,scaleY:0.9939}},{t:this.ikNode_29,p:{regX:14.3,regY:12.6,scaleX:0.994,scaleY:0.994,rotation:39.4347,x:1122.3,y:565.6}},{t:this.ikNode_27,p:{scaleX:0.9949,scaleY:0.9949,rotation:-168.596,x:1181.45,y:586.75,regY:10.4,regX:44.4}},{t:this.ikNode_19,p:{regX:31.3,scaleX:0.9945,scaleY:0.9945,rotation:37.9152,x:1216.3,y:586.45,regY:18.1}},{t:this.ikNode_17,p:{scaleX:0.9953,scaleY:0.9953,rotation:14.4393,x:1169.65,y:570.75,regY:23.2}},{t:this.ikNode_2,p:{scaleX:0.997,scaleY:0.997,rotation:12.8764,x:1122.25,y:557.5}},{t:this.ikNode_3,p:{scaleX:0.9955,scaleY:0.9955,rotation:-1.9352,x:1081.65,y:535.25,regX:64.2,regY:50.4}},{t:this.ikNode_11,p:{regX:44.6,scaleX:0.995,scaleY:0.995,rotation:-20.8402,x:1082.45,y:571.2,regY:14.6}},{t:this.ikNode_13,p:{scaleX:0.9952,scaleY:0.9952,rotation:-10.1459,x:1064.05,y:605.05,regY:6.8,regX:69.9}},{t:this.ikNode_15,p:{regX:90.9,scaleX:0.9952,scaleY:0.9952,rotation:16.2583,x:1025.5,y:638.4,regY:0.8}},{t:this.ikNode_21,p:{regX:21.1,rotation:-174.8593,x:1238.9,y:610.9,regY:10.4,scaleX:0.9285,scaleY:0.9285}},{t:this.ikNode_23,p:{regX:13.6,regY:24.9,scaleX:0.9284,scaleY:0.9284,rotation:25.347,x:1119.35,y:598.8}},{t:this.ikNode_25,p:{rotation:140.538,x:1217.8,y:625.3,regX:0.1,scaleX:0.9278,scaleY:0.9278,regY:-0.1}}]},1).to({state:[{t:this.ikNode_37,p:{regX:37.5,scaleX:1.6019,scaleY:1.6019,rotation:-24.648,x:995.05,y:632.45,regY:8.4}},{t:this.ikNode_35,p:{scaleX:1.602,scaleY:1.602,rotation:-22.9603,x:1033.05,y:590.5,regY:12.6}},{t:this.ikNode_33,p:{scaleX:1.6021,scaleY:1.6021,rotation:-17.0877,x:1052.3,y:552.6,regX:18.1}},{t:this.ikNode_31,p:{regY:5.1,rotation:154.2839,x:1183.45,y:631.8,scaleX:0.9939,scaleY:0.9939}},{t:this.ikNode_29,p:{regX:14.3,regY:12.6,scaleX:0.994,scaleY:0.994,rotation:38.5005,x:1119.2,y:572.45}},{t:this.ikNode_27,p:{scaleX:0.9949,scaleY:0.9949,rotation:-169.154,x:1178.65,y:593.1,regY:10.3,regX:44.4}},{t:this.ikNode_19,p:{regX:31.2,scaleX:0.9945,scaleY:0.9945,rotation:36.9708,x:1213.4,y:592.2,regY:18.1}},{t:this.ikNode_17,p:{scaleX:0.9953,scaleY:0.9953,rotation:18.8755,x:1168.25,y:573.05,regY:23.2}},{t:this.ikNode_2,p:{scaleX:0.997,scaleY:0.997,rotation:12.8775,x:1121,y:558.95}},{t:this.ikNode_3,p:{scaleX:0.9955,scaleY:0.9955,rotation:2.0441,x:1080.85,y:535.75,regX:64.2,regY:50.4}},{t:this.ikNode_11,p:{regX:44.7,scaleX:0.995,scaleY:0.995,rotation:-19.958,x:1081.35,y:572.45,regY:14.6}},{t:this.ikNode_13,p:{scaleX:0.9952,scaleY:0.9952,rotation:-8.2582,x:1062.1,y:606.05,regY:6.8,regX:69.8}},{t:this.ikNode_15,p:{regX:90.9,scaleX:0.9951,scaleY:0.9951,rotation:18.1477,x:1022.6,y:638.1,regY:0.8}},{t:this.ikNode_21,p:{regX:21.2,rotation:-175.5029,x:1236.05,y:616.55,regY:10.5,scaleX:0.9285,scaleY:0.9285}},{t:this.ikNode_23,p:{regX:13.6,regY:24.9,scaleX:0.9284,scaleY:0.9284,rotation:24.8128,x:1116.4,y:605.95}},{t:this.ikNode_25,p:{rotation:139.6282,x:1215.1,y:631.45,regX:0.1,scaleX:0.9279,scaleY:0.9279,regY:-0.1}}]},1).to({state:[{t:this.ikNode_37,p:{regX:37.5,scaleX:1.6019,scaleY:1.6019,rotation:-23.2125,x:992.65,y:632.75,regY:8.4}},{t:this.ikNode_35,p:{scaleX:1.602,scaleY:1.602,rotation:-21.9284,x:1031.25,y:591.55,regY:12.6}},{t:this.ikNode_33,p:{scaleX:1.6021,scaleY:1.6021,rotation:-16.317,x:1051.05,y:553.95,regX:18.1}},{t:this.ikNode_31,p:{regY:5.1,rotation:151.818,x:1181.15,y:637.5,scaleX:0.9939,scaleY:0.9939}},{t:this.ikNode_29,p:{regX:14.3,regY:12.6,scaleX:0.994,scaleY:0.994,rotation:37.5669,x:1115.8,y:579.25}},{t:this.ikNode_27,p:{scaleX:0.9949,scaleY:0.9949,rotation:-169.7112,x:1175.6,y:599.05,regY:10.5,regX:44.4}},{t:this.ikNode_19,p:{regX:31.3,scaleX:0.9945,scaleY:0.9945,rotation:36.0254,x:1210.4,y:597.85,regY:18}},{t:this.ikNode_17,p:{scaleX:0.9953,scaleY:0.9953,rotation:23.3121,x:1166.65,y:575.25,regY:23.2}},{t:this.ikNode_2,p:{scaleX:0.997,scaleY:0.997,rotation:12.879,x:1119.8,y:560.4}},{t:this.ikNode_3,p:{scaleX:0.9955,scaleY:0.9955,rotation:6.0272,x:1080.1,y:536.3,regX:64.2,regY:50.4}},{t:this.ikNode_11,p:{regX:44.8,scaleX:0.995,scaleY:0.995,rotation:-19.0762,x:1080.2,y:573.8,regY:14.6}},{t:this.ikNode_13,p:{scaleX:0.9952,scaleY:0.9952,rotation:-6.3681,x:1060.4,y:607.15,regY:6.8,regX:69.8}},{t:this.ikNode_15,p:{regX:90.9,scaleX:0.9951,scaleY:0.9951,rotation:20.0387,x:1019.9,y:637.85,regY:0.8}},{t:this.ikNode_21,p:{regX:21.1,rotation:-176.1458,x:1233.05,y:622.35,regY:10.4,scaleX:0.9285,scaleY:0.9285}},{t:this.ikNode_23,p:{regX:13.6,regY:24.9,scaleX:0.9284,scaleY:0.9284,rotation:24.2776,x:1113.15,y:612.9}},{t:this.ikNode_25,p:{rotation:138.7204,x:1212.25,y:637.5,regX:0.1,scaleX:0.9279,scaleY:0.9279,regY:-0.1}}]},1).to({state:[{t:this.ikNode_37,p:{regX:37.5,scaleX:1.6019,scaleY:1.6019,rotation:-21.7795,x:990.4,y:633.1,regY:8.4}},{t:this.ikNode_35,p:{scaleX:1.602,scaleY:1.602,rotation:-20.8977,x:1029.5,y:592.6,regY:12.6}},{t:this.ikNode_33,p:{scaleX:1.6021,scaleY:1.6021,rotation:-15.5453,x:1049.7,y:555.25,regX:18.1}},{t:this.ikNode_31,p:{regY:5.1,rotation:149.3518,x:1178.6,y:643.1,scaleX:0.9939,scaleY:0.9939}},{t:this.ikNode_29,p:{regX:14.3,regY:12.6,scaleX:0.994,scaleY:0.994,rotation:36.6338,x:1112.2,y:585.85}},{t:this.ikNode_27,p:{scaleX:0.9949,scaleY:0.9949,rotation:-170.2694,x:1172.2,y:605.2,regY:10.4,regX:44.4}},{t:this.ikNode_19,p:{regX:31.3,scaleX:0.9945,scaleY:0.9945,rotation:35.0809,x:1206.95,y:603.5,regY:18.1}},{t:this.ikNode_17,p:{scaleX:0.9953,scaleY:0.9953,rotation:27.7484,x:1165.15,y:577.5,regY:23.2}},{t:this.ikNode_2,p:{scaleX:0.997,scaleY:0.997,rotation:12.8809,x:1118.5,y:561.85}},{t:this.ikNode_3,p:{scaleX:0.9955,scaleY:0.9955,rotation:10.0104,x:1079.35,y:536.7,regX:64.2,regY:50.3}},{t:this.ikNode_11,p:{regX:44.7,scaleX:0.995,scaleY:0.995,rotation:-18.1932,x:1078.8,y:575.1,regY:14.6}},{t:this.ikNode_13,p:{scaleX:0.9952,scaleY:0.9952,rotation:-4.4797,x:1058.6,y:608.1,regY:6.8,regX:69.8}},{t:this.ikNode_15,p:{regX:90.9,scaleX:0.9951,scaleY:0.9951,rotation:21.929,x:1017,y:637.45,regY:0.8}},{t:this.ikNode_21,p:{regX:21.1,rotation:-176.7883,x:1229.7,y:627.8,regY:10.4,scaleX:0.9285,scaleY:0.9285}},{t:this.ikNode_23,p:{regX:13.6,regY:25,scaleX:0.9284,scaleY:0.9284,rotation:23.7427,x:1109.6,y:619.95}},{t:this.ikNode_25,p:{rotation:137.8081,x:1209.05,y:643.4,regX:0.1,scaleX:0.9278,scaleY:0.9278,regY:-0.1}}]},1).to({state:[{t:this.ikNode_37,p:{regX:37.5,scaleX:1.6019,scaleY:1.6019,rotation:-20.3448,x:988,y:633.35,regY:8.4}},{t:this.ikNode_35,p:{scaleX:1.602,scaleY:1.602,rotation:-19.8658,x:1027.7,y:593.75,regY:12.6}},{t:this.ikNode_33,p:{scaleX:1.602,scaleY:1.602,rotation:-14.7753,x:1048.5,y:556.5,regX:18.1}},{t:this.ikNode_31,p:{regY:5.1,rotation:151.0268,x:1177.1,y:644.8,scaleX:0.9939,scaleY:0.9939}},{t:this.ikNode_29,p:{regX:14.3,regY:12.6,scaleX:0.994,scaleY:0.994,rotation:36.9761,x:1111,y:587.2}},{t:this.ikNode_27,p:{scaleX:0.9949,scaleY:0.9949,rotation:-170.3408,x:1171.05,y:606.35,regY:10.4,regX:44.4}},{t:this.ikNode_19,p:{regX:31.3,scaleX:0.9946,scaleY:0.9946,rotation:34.8014,x:1205.85,y:604.65,regY:18.1}},{t:this.ikNode_17,p:{scaleX:0.9953,scaleY:0.9953,rotation:27.469,x:1163.85,y:578.9,regY:23.2}},{t:this.ikNode_2,p:{scaleX:0.997,scaleY:0.997,rotation:12.882,x:1117.25,y:563.3}},{t:this.ikNode_3,p:{scaleX:0.9955,scaleY:0.9955,rotation:10.8533,x:1078.25,y:537.9,regX:64.2,regY:50.4}},{t:this.ikNode_11,p:{regX:44.7,scaleX:0.995,scaleY:0.995,rotation:-17.3096,x:1077.5,y:576.3,regY:14.5}},{t:this.ikNode_13,p:{scaleX:0.9952,scaleY:0.9952,rotation:-2.5916,x:1056.9,y:609.1,regY:6.8,regX:69.8}},{t:this.ikNode_15,p:{regX:90.8,scaleX:0.9952,scaleY:0.9952,rotation:23.8177,x:1014.3,y:637.1,regY:0.8}},{t:this.ikNode_21,p:{regX:21.1,rotation:-177.4039,x:1228.7,y:629,regY:10.4,scaleX:0.9284,scaleY:0.9284}},{t:this.ikNode_23,p:{regX:13.6,regY:24.9,scaleX:0.9284,scaleY:0.9284,rotation:23.0599,x:1108.5,y:622.2}},{t:this.ikNode_25,p:{rotation:139.4305,x:1208.2,y:644.6,regX:0.1,scaleX:0.9278,scaleY:0.9278,regY:-0.1}}]},1).to({state:[{t:this.ikNode_37,p:{regX:37.5,scaleX:1.6019,scaleY:1.6019,rotation:-18.9111,x:985.7,y:633.7,regY:8.4}},{t:this.ikNode_35,p:{scaleX:1.602,scaleY:1.602,rotation:-18.8345,x:1025.85,y:594.75,regY:12.6}},{t:this.ikNode_33,p:{scaleX:1.602,scaleY:1.602,rotation:-14.0042,x:1047.2,y:557.85,regX:18.1}},{t:this.ikNode_31,p:{regY:5.1,rotation:152.7029,x:1175.7,y:646.55,scaleX:0.9939,scaleY:0.9939}},{t:this.ikNode_29,p:{regX:14.2,regY:12.6,scaleX:0.994,scaleY:0.994,rotation:37.319,x:1109.7,y:588.5}},{t:this.ikNode_27,p:{scaleX:0.9949,scaleY:0.9949,rotation:-170.4121,x:1169.9,y:607.6,regY:10.4,regX:44.4}},{t:this.ikNode_19,p:{regX:31.4,scaleX:0.9945,scaleY:0.9945,rotation:34.522,x:1204.9,y:605.85,regY:18.1}},{t:this.ikNode_17,p:{scaleX:0.9953,scaleY:0.9953,rotation:27.1901,x:1162.65,y:580.35,regY:23.2}},{t:this.ikNode_2,p:{scaleX:0.997,scaleY:0.997,rotation:12.8828,x:1115.95,y:564.7}},{t:this.ikNode_3,p:{scaleX:0.9955,scaleY:0.9955,rotation:11.6989,x:1077.45,y:538.95,regX:64.3,regY:50.4}},{t:this.ikNode_11,p:{regX:44.7,scaleX:0.995,scaleY:0.995,rotation:-16.4271,x:1076.25,y:577.75,regY:14.6}},{t:this.ikNode_13,p:{scaleX:0.9952,scaleY:0.9952,rotation:-0.7028,x:1055.15,y:610.05,regY:6.8,regX:69.8}},{t:this.ikNode_15,p:{regX:90.9,scaleX:0.9951,scaleY:0.9951,rotation:25.7066,x:1011.7,y:636.65,regY:0.8}},{t:this.ikNode_21,p:{regX:21.1,rotation:-178.0193,x:1227.6,y:630.1,regY:10.4,scaleX:0.9285,scaleY:0.9285}},{t:this.ikNode_23,p:{regX:13.7,regY:24.9,scaleX:0.9284,scaleY:0.9284,rotation:22.376,x:1107.45,y:624.7}},{t:this.ikNode_25,p:{rotation:141.0543,x:1207.35,y:645.8,regX:0.1,scaleX:0.9279,scaleY:0.9279,regY:-0.1}}]},1).to({state:[{t:this.ikNode_37,p:{regX:37.5,scaleX:1.6019,scaleY:1.6019,rotation:-17.4769,x:983.4,y:633.95,regY:8.4}},{t:this.ikNode_35,p:{scaleX:1.602,scaleY:1.602,rotation:-17.8026,x:1024.1,y:595.8,regY:12.6}},{t:this.ikNode_33,p:{scaleX:1.602,scaleY:1.602,rotation:-13.2326,x:1045.9,y:559.15,regX:18.1}},{t:this.ikNode_31,p:{regY:5,rotation:154.3775,x:1174.2,y:648.45,scaleX:0.994,scaleY:0.994}},{t:this.ikNode_29,p:{regX:14.3,regY:12.6,scaleX:0.994,scaleY:0.994,rotation:37.661,x:1108.7,y:589.9}},{t:this.ikNode_27,p:{scaleX:0.9949,scaleY:0.9949,rotation:-170.4844,x:1168.85,y:608.75,regY:10.4,regX:44.4}},{t:this.ikNode_19,p:{regX:31.3,scaleX:0.9946,scaleY:0.9946,rotation:34.2413,x:1203.65,y:606.95,regY:18.1}},{t:this.ikNode_17,p:{scaleX:0.9953,scaleY:0.9953,rotation:26.9108,x:1161.4,y:581.65,regY:23.2}},{t:this.ikNode_2,p:{scaleX:0.997,scaleY:0.997,rotation:12.8837,x:1114.65,y:566.15}},{t:this.ikNode_3,p:{scaleX:0.9954,scaleY:0.9954,rotation:12.5416,x:1076.35,y:539.95,regX:64.2,regY:50.4}},{t:this.ikNode_11,p:{regX:44.7,scaleX:0.995,scaleY:0.995,rotation:-15.5443,x:1075.05,y:579.1,regY:14.6}},{t:this.ikNode_13,p:{scaleX:0.9952,scaleY:0.9952,rotation:1.1825,x:1053.4,y:611.1,regY:6.8,regX:69.8}},{t:this.ikNode_15,p:{regX:90.9,scaleX:0.9952,scaleY:0.9952,rotation:27.5968,x:1009.05,y:636.3,regY:0.9}},{t:this.ikNode_21,p:{regX:21.1,rotation:-178.6345,x:1226.6,y:631.2,regY:10.4,scaleX:0.9285,scaleY:0.9285}},{t:this.ikNode_23,p:{regX:13.6,regY:24.9,scaleX:0.9284,scaleY:0.9284,rotation:21.6933,x:1106.25,y:627.05}},{t:this.ikNode_25,p:{rotation:142.6752,x:1206.45,y:647,regX:0.1,scaleX:0.9278,scaleY:0.9278,regY:-0.1}}]},1).to({state:[{t:this.ikNode_37,p:{regX:37.5,scaleX:1.6019,scaleY:1.6019,rotation:-16.0432,x:981.1,y:634.2,regY:8.4}},{t:this.ikNode_35,p:{scaleX:1.602,scaleY:1.602,rotation:-16.7711,x:1022.4,y:596.9,regY:12.6}},{t:this.ikNode_33,p:{scaleX:1.602,scaleY:1.602,rotation:-12.4625,x:1044.6,y:560.4,regX:18.1}},{t:this.ikNode_31,p:{regY:5.2,rotation:156.0533,x:1172.6,y:650,scaleX:0.9939,scaleY:0.9939}},{t:this.ikNode_29,p:{regX:14.3,regY:12.6,scaleX:0.994,scaleY:0.994,rotation:38.0044,x:1107.45,y:591.2}},{t:this.ikNode_27,p:{scaleX:0.9949,scaleY:0.9949,rotation:-170.5565,x:1167.75,y:609.95,regY:10.4,regX:44.4}},{t:this.ikNode_19,p:{regX:31.3,scaleX:0.9946,scaleY:0.9946,rotation:33.9631,x:1202.55,y:608.15,regY:18.1}},{t:this.ikNode_17,p:{scaleX:0.9952,scaleY:0.9952,rotation:26.6311,x:1160.1,y:583.05,regY:23.2}},{t:this.ikNode_2,p:{scaleX:0.997,scaleY:0.997,rotation:12.8845,x:1113.35,y:567.55}},{t:this.ikNode_3,p:{scaleX:0.9954,scaleY:0.9954,rotation:13.387,x:1075.3,y:540.95,regX:64.2,regY:50.4}},{t:this.ikNode_11,p:{regX:44.7,scaleX:0.995,scaleY:0.995,rotation:-14.6617,x:1073.8,y:580.4,regY:14.6}},{t:this.ikNode_13,p:{scaleX:0.9952,scaleY:0.9952,rotation:3.0718,x:1051.7,y:611.85,regY:6.7,regX:69.8}},{t:this.ikNode_15,p:{regX:90.9,scaleX:0.9951,scaleY:0.9951,rotation:29.4871,x:1006.55,y:635.7,regY:0.8}},{t:this.ikNode_21,p:{regX:21.1,rotation:-179.2504,x:1225.55,y:632.3,regY:10.4,scaleX:0.9285,scaleY:0.9285}},{t:this.ikNode_23,p:{regX:13.6,regY:24.9,scaleX:0.9284,scaleY:0.9284,rotation:21.0099,x:1105.1,y:629.5}},{t:this.ikNode_25,p:{rotation:144.2967,x:1205.7,y:648.25,regX:0.1,scaleX:0.9278,scaleY:0.9278,regY:-0.2}}]},1).to({state:[{t:this.ikNode_37,p:{regX:37.5,scaleX:1.6019,scaleY:1.6019,rotation:-14.6082,x:978.9,y:634.4,regY:8.4}},{t:this.ikNode_35,p:{scaleX:1.602,scaleY:1.602,rotation:-15.7402,x:1020.65,y:597.9,regY:12.6}},{t:this.ikNode_33,p:{scaleX:1.6021,scaleY:1.6021,rotation:-11.6917,x:1043.35,y:561.7,regX:18.1}},{t:this.ikNode_31,p:{regY:5.1,rotation:157.7287,x:1171.15,y:651.75,scaleX:0.9939,scaleY:0.9939}},{t:this.ikNode_29,p:{regX:14.3,regY:12.6,scaleX:0.994,scaleY:0.994,rotation:38.3477,x:1106.3,y:592.5}},{t:this.ikNode_27,p:{scaleX:0.9949,scaleY:0.9949,rotation:-170.6278,x:1166.65,y:611.2,regY:10.4,regX:44.4}},{t:this.ikNode_19,p:{regX:31.3,scaleX:0.9946,scaleY:0.9946,rotation:33.6828,x:1201.4,y:609.3,regY:18.1}},{t:this.ikNode_17,p:{scaleX:0.9952,scaleY:0.9952,rotation:26.3521,x:1158.8,y:584.35,regY:23.2}},{t:this.ikNode_2,p:{scaleX:0.997,scaleY:0.997,rotation:12.8845,x:1112.1,y:568.9}},{t:this.ikNode_3,p:{scaleX:0.9954,scaleY:0.9954,rotation:14.2299,x:1074.3,y:542.05,regX:64.2,regY:50.4}},{t:this.ikNode_11,p:{regX:44.7,scaleX:0.995,scaleY:0.995,rotation:-13.7788,x:1072.55,y:581.7,regY:14.6}},{t:this.ikNode_13,p:{scaleX:0.9952,scaleY:0.9952,rotation:4.9609,x:1049.9,y:612.95,regY:6.8,regX:69.8}},{t:this.ikNode_15,p:{regX:90.9,scaleX:0.9951,scaleY:0.9951,rotation:31.3754,x:1004.05,y:635.15,regY:0.8}},{t:this.ikNode_21,p:{regX:21.2,rotation:-179.8663,x:1224.35,y:633.4,regY:10.4,scaleX:0.9285,scaleY:0.9285}},{t:this.ikNode_23,p:{regX:13.6,regY:24.9,scaleX:0.9284,scaleY:0.9284,rotation:20.3266,x:1104,y:631.9}},{t:this.ikNode_25,p:{rotation:145.919,x:1204.85,y:649.45,regX:0.1,scaleX:0.9278,scaleY:0.9278,regY:-0.2}}]},1).to({state:[{t:this.ikNode_37,p:{regX:37.5,scaleX:1.6019,scaleY:1.6019,rotation:-13.174,x:976.6,y:634.65,regY:8.4}},{t:this.ikNode_35,p:{scaleX:1.602,scaleY:1.602,rotation:-14.7083,x:1018.8,y:598.9,regY:12.6}},{t:this.ikNode_33,p:{scaleX:1.6021,scaleY:1.6021,rotation:-10.9204,x:1042,y:563,regX:18.1}},{t:this.ikNode_31,p:{regY:5.2,rotation:159.4049,x:1169.65,y:653.4,scaleX:0.9939,scaleY:0.9939}},{t:this.ikNode_29,p:{regX:14.3,regY:12.7,scaleX:0.994,scaleY:0.994,rotation:38.6888,x:1105.05,y:594.05}},{t:this.ikNode_27,p:{scaleX:0.9949,scaleY:0.9949,rotation:-170.7001,x:1165.4,y:612.35,regY:10.4,regX:44.5}},{t:this.ikNode_19,p:{regX:31.3,scaleX:0.9946,scaleY:0.9946,rotation:33.4043,x:1200.3,y:610.4,regY:18.1}},{t:this.ikNode_17,p:{scaleX:0.9953,scaleY:0.9953,rotation:26.0736,x:1157.55,y:585.75,regY:23.2}},{t:this.ikNode_2,p:{scaleX:0.997,scaleY:0.997,rotation:12.8856,x:1110.8,y:570.4}},{t:this.ikNode_3,p:{scaleX:0.9955,scaleY:0.9955,rotation:15.0739,x:1073.3,y:543,regX:64.2,regY:50.4}},{t:this.ikNode_11,p:{regX:44.7,scaleX:0.995,scaleY:0.995,rotation:-12.8954,x:1071.2,y:582.95,regY:14.5}},{t:this.ikNode_13,p:{scaleX:0.9952,scaleY:0.9952,rotation:6.8492,x:1048.2,y:613.9,regY:6.8,regX:69.8}},{t:this.ikNode_15,p:{regX:90.9,scaleX:0.9951,scaleY:0.9951,rotation:33.2646,x:1001.6,y:634.55,regY:0.8}},{t:this.ikNode_21,p:{regX:21.2,rotation:179.5245,x:1223.3,y:634.5,regY:10.4,scaleX:0.9285,scaleY:0.9285}},{t:this.ikNode_23,p:{regX:13.6,regY:24.9,scaleX:0.9284,scaleY:0.9284,rotation:19.6441,x:1102.95,y:634.3}},{t:this.ikNode_25,p:{rotation:147.542,x:1203.9,y:650.55,regX:0.1,scaleX:0.9278,scaleY:0.9278,regY:-0.1}}]},1).to({state:[{t:this.ikNode_37,p:{regX:37.5,scaleX:1.6019,scaleY:1.6019,rotation:-11.7396,x:974.4,y:634.85,regY:8.4}},{t:this.ikNode_35,p:{scaleX:1.602,scaleY:1.602,rotation:-13.6758,x:1017,y:599.9,regY:12.6}},{t:this.ikNode_33,p:{scaleX:1.6021,scaleY:1.6021,rotation:-10.1498,x:1040.8,y:564.3,regX:18.1}},{t:this.ikNode_31,p:{regY:5.1,rotation:161.0783,x:1168.3,y:655.25,scaleX:0.9939,scaleY:0.9939}},{t:this.ikNode_29,p:{regX:14.3,regY:12.6,scaleX:0.994,scaleY:0.994,rotation:39.0322,x:1103.85,y:595.25}},{t:this.ikNode_27,p:{scaleX:0.9949,scaleY:0.9949,rotation:-170.772,x:1164.4,y:613.55,regY:10.4,regX:44.4}},{t:this.ikNode_19,p:{regX:31.3,scaleX:0.9945,scaleY:0.9945,rotation:33.1254,x:1199.1,y:611.6,regY:18.1}},{t:this.ikNode_17,p:{scaleX:0.9952,scaleY:0.9952,rotation:25.7946,x:1156.2,y:587.3,regY:23.3}},{t:this.ikNode_2,p:{scaleX:0.997,scaleY:0.997,rotation:12.8864,x:1109.5,y:571.8}},{t:this.ikNode_3,p:{scaleX:0.9955,scaleY:0.9955,rotation:15.9187,x:1072.35,y:544.15,regX:64.2,regY:50.4}},{t:this.ikNode_11,p:{regX:44.7,scaleX:0.995,scaleY:0.995,rotation:-12.0128,x:1069.95,y:584.4,regY:14.6}},{t:this.ikNode_13,p:{scaleX:0.9952,scaleY:0.9952,rotation:8.7389,x:1046.5,y:614.9,regY:6.8,regX:69.8}},{t:this.ikNode_15,p:{regX:90.9,scaleX:0.9951,scaleY:0.9951,rotation:35.1549,x:999.2,y:633.95,regY:0.8}},{t:this.ikNode_21,p:{regX:21.2,rotation:178.9095,x:1222.3,y:635.65,regY:10.4,scaleX:0.9285,scaleY:0.9285}},{t:this.ikNode_23,p:{regX:13.6,regY:24.9,scaleX:0.9284,scaleY:0.9284,rotation:18.9606,x:1101.85,y:636.7}},{t:this.ikNode_25,p:{rotation:149.1641,x:1203.05,y:651.75,regX:0.1,scaleX:0.9279,scaleY:0.9279,regY:-0.1}}]},1).to({state:[{t:this.ikNode_37,p:{regX:37.5,scaleX:1.602,scaleY:1.602,rotation:-10.3048,x:972.15,y:635.05,regY:8.4}},{t:this.ikNode_35,p:{scaleX:1.602,scaleY:1.602,rotation:-12.6457,x:1015.3,y:600.95,regY:12.6}},{t:this.ikNode_33,p:{scaleX:1.6021,scaleY:1.6021,rotation:-9.3801,x:1039.6,y:565.55,regX:18.1}},{t:this.ikNode_31,p:{regY:5.1,rotation:162.754,x:1166.8,y:656.95,scaleX:0.9939,scaleY:0.9939}},{t:this.ikNode_29,p:{regX:14.3,regY:12.6,scaleX:0.994,scaleY:0.994,rotation:39.3748,x:1102.65,y:596.65}},{t:this.ikNode_27,p:{scaleX:0.9949,scaleY:0.9949,rotation:-170.8441,x:1163.3,y:614.8,regY:10.4,regX:44.4}},{t:this.ikNode_19,p:{regX:31.3,scaleX:0.9946,scaleY:0.9946,rotation:32.8472,x:1198.05,y:612.7,regY:18.1}},{t:this.ikNode_17,p:{scaleX:0.9953,scaleY:0.9953,rotation:25.5157,x:1155,y:588.5,regY:23.2}},{t:this.ikNode_2,p:{scaleX:0.997,scaleY:0.997,rotation:12.8871,x:1108.25,y:573.25}},{t:this.ikNode_3,p:{scaleX:0.9954,scaleY:0.9954,rotation:16.7619,x:1071.45,y:545.2,regX:64.2,regY:50.4}},{t:this.ikNode_11,p:{regX:44.7,scaleX:0.995,scaleY:0.995,rotation:-11.1302,x:1068.7,y:585.75,regY:14.6}},{t:this.ikNode_13,p:{scaleX:0.9952,scaleY:0.9952,rotation:10.6282,x:1044.8,y:615.75,regY:6.8,regX:69.8}},{t:this.ikNode_15,p:{regX:90.9,scaleX:0.9951,scaleY:0.9951,rotation:37.0446,x:996.85,y:633.3,regY:0.8}},{t:this.ikNode_21,p:{regX:21.2,rotation:178.2945,x:1221.3,y:636.8,regY:10.4,scaleX:0.9285,scaleY:0.9285}},{t:this.ikNode_23,p:{regX:13.6,regY:24.9,scaleX:0.9284,scaleY:0.9284,rotation:18.2777,x:1100.75,y:639.1}},{t:this.ikNode_25,p:{rotation:150.7856,x:1202.25,y:652.9,regX:0.1,scaleX:0.9279,scaleY:0.9279,regY:-0.1}}]},1).to({state:[{t:this.ikNode_37,p:{regX:37.5,scaleX:1.6019,scaleY:1.6019,rotation:-8.8709,x:970,y:635.25,regY:8.4}},{t:this.ikNode_35,p:{scaleX:1.602,scaleY:1.602,rotation:-11.6135,x:1013.5,y:601.9,regY:12.6}},{t:this.ikNode_33,p:{scaleX:1.6021,scaleY:1.6021,rotation:-8.6087,x:1038.25,y:566.85,regX:18.1}},{t:this.ikNode_31,p:{regY:5.2,rotation:164.4301,x:1165.2,y:658.6,scaleX:0.9939,scaleY:0.9939}},{t:this.ikNode_29,p:{regX:14.3,regY:12.6,scaleX:0.994,scaleY:0.994,rotation:39.7159,x:1101.5,y:597.95}},{t:this.ikNode_27,p:{scaleX:0.9949,scaleY:0.9949,rotation:-170.9162,x:1162.1,y:616.15,regY:10.3,regX:44.4}},{t:this.ikNode_19,p:{regX:31.4,scaleX:0.9946,scaleY:0.9946,rotation:32.5668,x:1197,y:613.9,regY:18.1}},{t:this.ikNode_17,p:{scaleX:0.9952,scaleY:0.9952,rotation:25.2359,x:1153.75,y:589.85,regY:23.2}},{t:this.ikNode_2,p:{scaleX:0.997,scaleY:0.997,rotation:12.8873,x:1106.95,y:574.7}},{t:this.ikNode_3,p:{scaleX:0.9955,scaleY:0.9955,rotation:17.6067,x:1070.4,y:546.2,regX:64.2,regY:50.4}},{t:this.ikNode_11,p:{regX:44.7,scaleX:0.995,scaleY:0.995,rotation:-10.2486,x:1067.45,y:587.05,regY:14.6}},{t:this.ikNode_13,p:{scaleX:0.9952,scaleY:0.9952,rotation:12.5178,x:1043.15,y:616.7,regY:6.8,regX:69.8}},{t:this.ikNode_15,p:{regX:90.9,scaleX:0.9951,scaleY:0.9951,rotation:38.9342,x:994.6,y:632.65,regY:0.8}},{t:this.ikNode_21,p:{regX:21.1,rotation:177.6773,x:1220.35,y:637.9,regY:10.4,scaleX:0.9285,scaleY:0.9285}},{t:this.ikNode_23,p:{regX:13.6,regY:24.9,scaleX:0.9284,scaleY:0.9284,rotation:17.594,x:1099.7,y:641.5}},{t:this.ikNode_25,p:{rotation:152.4071,x:1201.4,y:654.1,regX:0.1,scaleX:0.9278,scaleY:0.9278,regY:-0.1}}]},1).to({state:[{t:this.ikNode_37,p:{regX:37.5,scaleX:1.6019,scaleY:1.6019,rotation:-7.4378,x:967.85,y:635.4,regY:8.4}},{t:this.ikNode_35,p:{scaleX:1.602,scaleY:1.602,rotation:-10.5819,x:1011.8,y:603,regY:12.6}},{t:this.ikNode_33,p:{scaleX:1.6021,scaleY:1.6021,rotation:-7.8375,x:1037.15,y:568.15,regX:18.2}},{t:this.ikNode_31,p:{regY:5.1,rotation:166.1056,x:1163.8,y:660.45,scaleX:0.994,scaleY:0.994}},{t:this.ikNode_29,p:{regX:14.3,regY:12.6,scaleX:0.994,scaleY:0.994,rotation:40.0606,x:1100.35,y:599.35}},{t:this.ikNode_27,p:{scaleX:0.9949,scaleY:0.9949,rotation:-170.9875,x:1160.9,y:617.25,regY:10.3,regX:44.5}},{t:this.ikNode_19,p:{regX:31.3,scaleX:0.9946,scaleY:0.9946,rotation:32.2878,x:1195.85,y:615,regY:18.1}},{t:this.ikNode_17,p:{scaleX:0.9952,scaleY:0.9952,rotation:24.9573,x:1152.5,y:591.25,regY:23.2}},{t:this.ikNode_2,p:{scaleX:0.997,scaleY:0.997,rotation:12.8881,x:1105.65,y:576.05}},{t:this.ikNode_3,p:{scaleX:0.9955,scaleY:0.9955,rotation:18.4499,x:1069.45,y:547.3,regX:64.2,regY:50.4}},{t:this.ikNode_11,p:{regX:44.7,scaleX:0.9951,scaleY:0.9951,rotation:-9.3648,x:1066.2,y:588.45,regY:14.6}},{t:this.ikNode_13,p:{scaleX:0.9952,scaleY:0.9952,rotation:14.4068,x:1041.55,y:617.7,regY:6.8,regX:69.9}},{t:this.ikNode_15,p:{regX:90.9,scaleX:0.9951,scaleY:0.9951,rotation:40.8242,x:992.4,y:632,regY:0.8}},{t:this.ikNode_21,p:{regX:21.1,rotation:177.0636,x:1219.25,y:638.9,regY:10.4,scaleX:0.9285,scaleY:0.9285}},{t:this.ikNode_23,p:{regX:13.6,regY:24.9,scaleX:0.9284,scaleY:0.9284,rotation:16.9107,x:1098.65,y:643.85}},{t:this.ikNode_25,p:{rotation:154.0295,x:1200.5,y:655.25,regX:0.2,scaleX:0.9278,scaleY:0.9278,regY:-0.1}}]},1).wait(1));

	// Каркас_5
	this.ikNode_25_1 = new lib.стопал();
	this.ikNode_25_1.name = "ikNode_25_1";
	this.ikNode_25_1.setTransform(1199.4,653.85,0.9303,0.9303,154.0288,0,0,-0.6,0.1);

	this.ikNode_23_1 = new lib.голеньл();
	this.ikNode_23_1.name = "ikNode_23_1";
	this.ikNode_23_1.setTransform(1097.55,642.55,0.9309,0.9309,16.9133,0,0,13.1,25.1);

	this.ikNode_21_1 = new lib.бедрол();
	this.ikNode_21_1.name = "ikNode_21_1";
	this.ikNode_21_1.setTransform(1218.05,637.7,0.9307,0.9307,177.0595,0,0,21.7,10.2);

	this.ikNode_15_1 = new lib.кистьл();
	this.ikNode_15_1.name = "ikNode_15_1";
	this.ikNode_15_1.setTransform(991.1,630.75,0.9971,0.9971,40.8249,0,0,90.5,0.6);

	this.ikNode_13_1 = new lib.локотьл();
	this.ikNode_13_1.name = "ikNode_13_1";
	this.ikNode_13_1.setTransform(1040.3,616.1,0.9973,0.9973,14.4096,0,0,70,6.3);

	this.ikNode_11_1 = new lib.плечол();
	this.ikNode_11_1.name = "ikNode_11_1";
	this.ikNode_11_1.setTransform(1065.05,587,0.9973,0.9973,-9.3679,0,0,45,14.4);

	this.ikNode_3_1 = new lib.голова_1();
	this.ikNode_3_1.name = "ikNode_3_1";
	this.ikNode_3_1.setTransform(1068.35,545.75,0.9976,0.9976,18.4527,0,0,63.5,50.1);

	this.ikNode_2_1 = new lib.грудь_1();
	this.ikNode_2_1.name = "ikNode_2_1";
	this.ikNode_2_1.setTransform(1104.45,574.65,0.9985,0.9985,12.8907,0,0,71.2,34.2);

	this.ikNode_17_1 = new lib.животик_1();
	this.ikNode_17_1.name = "ikNode_17_1";
	this.ikNode_17_1.setTransform(1151.4,589.85,0.9975,0.9975,24.9582,0,0,43.2,23.8);

	this.ikNode_19_1 = new lib.попа_1();
	this.ikNode_19_1.name = "ikNode_19_1";
	this.ikNode_19_1.setTransform(1194.75,613.75,0.9972,0.9972,32.2871,0,0,30.9,18.4);

	this.ikNode_27_1 = new lib.бедроп();
	this.ikNode_27_1.name = "ikNode_27_1";
	this.ikNode_27_1.setTransform(1159.85,615.8,0.9971,0.9971,-170.985,0,0,45,11.5);

	this.ikNode_29_1 = new lib.голеньп();
	this.ikNode_29_1.name = "ikNode_29_1";
	this.ikNode_29_1.setTransform(1099.1,598.1,0.9964,0.9964,40.0604,0,0,13.6,13);

	this.ikNode_31_1 = new lib.стопап();
	this.ikNode_31_1.name = "ikNode_31_1";
	this.ikNode_31_1.setTransform(1162.65,659.1,0.9965,0.9965,166.1044,0,0,16.1,5.4);

	this.ikNode_33_1 = new lib.плечоп();
	this.ikNode_33_1.name = "ikNode_33_1";
	this.ikNode_33_1.setTransform(1035.95,566.75,1.6058,1.6058,-7.8401,0,0,17.9,13.9);

	this.ikNode_35_1 = new lib.локотьп();
	this.ikNode_35_1.name = "ikNode_35_1";
	this.ikNode_35_1.setTransform(1010.6,601.45,1.6058,1.6058,-10.5831,0,0,31,12);

	this.ikNode_37_1 = new lib.кистьп();
	this.ikNode_37_1.name = "ikNode_37_1";
	this.ikNode_37_1.setTransform(966.75,634.05,1.6056,1.6056,-7.4393,0,0,38.4,8.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.ikNode_37_1,p:{regX:38.4,scaleX:1.6056,scaleY:1.6056,rotation:-7.4393,x:966.75,y:634.05}},{t:this.ikNode_35_1,p:{scaleX:1.6058,scaleY:1.6058,rotation:-10.5831,x:1010.6,y:601.45,regX:31}},{t:this.ikNode_33_1,p:{scaleX:1.6058,scaleY:1.6058,rotation:-7.8401,x:1035.95,y:566.75,regY:13.9}},{t:this.ikNode_31_1,p:{regY:5.4,scaleX:0.9965,scaleY:0.9965,rotation:166.1044,x:1162.65,y:659.1}},{t:this.ikNode_29_1,p:{regY:13,scaleX:0.9964,scaleY:0.9964,rotation:40.0604,x:1099.1,y:598.1,regX:13.6}},{t:this.ikNode_27_1,p:{scaleX:0.9971,scaleY:0.9971,rotation:-170.985,x:1159.85,y:615.8,regX:45,regY:11.5}},{t:this.ikNode_19_1,p:{scaleX:0.9972,scaleY:0.9972,rotation:32.2871,x:1194.75,y:613.75,regY:18.4,regX:30.9}},{t:this.ikNode_17_1,p:{scaleX:0.9975,scaleY:0.9975,rotation:24.9582,x:1151.4,y:589.85,regY:23.8}},{t:this.ikNode_2_1,p:{scaleX:0.9985,scaleY:0.9985,rotation:12.8907,x:1104.45,y:574.65,regY:34.2}},{t:this.ikNode_3_1,p:{regX:63.5,rotation:18.4527,x:1068.35,y:545.75,scaleX:0.9976,scaleY:0.9976}},{t:this.ikNode_11_1,p:{regX:45,rotation:-9.3679,x:1065.05,y:587,scaleX:0.9973,scaleY:0.9973,regY:14.4}},{t:this.ikNode_13_1,p:{scaleX:0.9973,scaleY:0.9973,rotation:14.4096,x:1040.3,y:616.1,regY:6.3,regX:70}},{t:this.ikNode_15_1,p:{regY:0.6,scaleX:0.9971,scaleY:0.9971,rotation:40.8249,x:991.1,y:630.75,regX:90.5}},{t:this.ikNode_21_1,p:{rotation:177.0595,x:1218.05,y:637.7,regX:21.7,scaleX:0.9307,scaleY:0.9307,regY:10.2}},{t:this.ikNode_23_1,p:{regY:25.1,rotation:16.9133,x:1097.55,y:642.55,scaleX:0.9309,scaleY:0.9309,regX:13.1}},{t:this.ikNode_25_1,p:{scaleX:0.9303,scaleY:0.9303,rotation:154.0288,x:1199.4,y:653.85,regX:-0.6}}]}).to({state:[{t:this.ikNode_37_1,p:{regX:38.5,scaleX:1.6055,scaleY:1.6055,rotation:-7.4454,x:968.15,y:634.9}},{t:this.ikNode_35_1,p:{scaleX:1.6057,scaleY:1.6057,rotation:-10.5875,x:1012.05,y:602.65,regX:31}},{t:this.ikNode_33_1,p:{scaleX:1.6056,scaleY:1.6056,rotation:-7.8441,x:1037.2,y:567.8,regY:13.9}},{t:this.ikNode_31_1,p:{regY:5.3,scaleX:0.9964,scaleY:0.9964,rotation:166.0985,x:1164.25,y:660.65}},{t:this.ikNode_29_1,p:{regY:12.9,scaleX:0.9963,scaleY:0.9963,rotation:40.0611,x:1101.15,y:599.3,regX:13.6}},{t:this.ikNode_27_1,p:{scaleX:0.997,scaleY:0.997,rotation:-170.9826,x:1161.6,y:615.85,regX:45,regY:11.5}},{t:this.ikNode_19_1,p:{scaleX:0.997,scaleY:0.997,rotation:32.2874,x:1196.3,y:615.1,regY:18.4,regX:30.9}},{t:this.ikNode_17_1,p:{scaleX:0.9974,scaleY:0.9974,rotation:24.9643,x:1153.25,y:590.65,regY:23.8}},{t:this.ikNode_2_1,p:{scaleX:0.9984,scaleY:0.9984,rotation:12.8942,x:1106.15,y:575.45,regY:34.2}},{t:this.ikNode_3_1,p:{regX:63.6,rotation:18.4538,x:1070.3,y:546.4,scaleX:0.9976,scaleY:0.9976}},{t:this.ikNode_11_1,p:{regX:45.1,rotation:-9.3711,x:1066.55,y:588.1,scaleX:0.9973,scaleY:0.9973,regY:14.4}},{t:this.ikNode_13_1,p:{scaleX:0.9972,scaleY:0.9972,rotation:14.4135,x:1041.95,y:616.7,regY:6.3,regX:70}},{t:this.ikNode_15_1,p:{regY:0.5,scaleX:0.997,scaleY:0.997,rotation:40.827,x:992.75,y:632,regX:90.5}},{t:this.ikNode_21_1,p:{rotation:177.049,x:1219.75,y:638.3,regX:21.7,scaleX:0.9307,scaleY:0.9307,regY:10.2}},{t:this.ikNode_23_1,p:{regY:25.2,rotation:16.9195,x:1099.25,y:643.45,scaleX:0.9309,scaleY:0.9309,regX:13.1}},{t:this.ikNode_25_1,p:{scaleX:0.9302,scaleY:0.9302,rotation:154.0255,x:1201.4,y:655.05,regX:-0.6}}]},1).to({state:[{t:this.ikNode_37_1,p:{regX:38.5,scaleX:1.6055,scaleY:1.6055,rotation:-7.4454,x:968.15,y:634.9}},{t:this.ikNode_35_1,p:{scaleX:1.6057,scaleY:1.6057,rotation:-10.5875,x:1012.05,y:602.65,regX:31}},{t:this.ikNode_33_1,p:{scaleX:1.6056,scaleY:1.6056,rotation:-7.8441,x:1037.2,y:567.8,regY:13.9}},{t:this.ikNode_31_1,p:{regY:5.3,scaleX:0.9964,scaleY:0.9964,rotation:166.0985,x:1164.25,y:660.65}},{t:this.ikNode_29_1,p:{regY:12.9,scaleX:0.9963,scaleY:0.9963,rotation:40.0611,x:1101.15,y:599.25,regX:13.6}},{t:this.ikNode_27_1,p:{scaleX:0.997,scaleY:0.997,rotation:-170.9826,x:1161.6,y:615.85,regX:45,regY:11.5}},{t:this.ikNode_19_1,p:{scaleX:0.997,scaleY:0.997,rotation:32.2874,x:1196.3,y:615.1,regY:18.4,regX:30.9}},{t:this.ikNode_17_1,p:{scaleX:0.9974,scaleY:0.9974,rotation:24.9643,x:1153.25,y:590.65,regY:23.8}},{t:this.ikNode_2_1,p:{scaleX:0.9984,scaleY:0.9984,rotation:12.8942,x:1106.15,y:575.45,regY:34.2}},{t:this.ikNode_3_1,p:{regX:63.6,rotation:18.4538,x:1070.3,y:546.4,scaleX:0.9976,scaleY:0.9976}},{t:this.ikNode_11_1,p:{regX:45.1,rotation:-9.3711,x:1066.55,y:588.1,scaleX:0.9973,scaleY:0.9973,regY:14.4}},{t:this.ikNode_13_1,p:{scaleX:0.9972,scaleY:0.9972,rotation:14.4135,x:1041.95,y:616.7,regY:6.3,regX:70}},{t:this.ikNode_15_1,p:{regY:0.5,scaleX:0.997,scaleY:0.997,rotation:40.827,x:992.75,y:632,regX:90.5}},{t:this.ikNode_21_1,p:{rotation:177.049,x:1219.75,y:638.3,regX:21.7,scaleX:0.9307,scaleY:0.9307,regY:10.2}},{t:this.ikNode_23_1,p:{regY:25.2,rotation:16.9195,x:1099.25,y:643.45,scaleX:0.9309,scaleY:0.9309,regX:13.1}},{t:this.ikNode_25_1,p:{scaleX:0.9302,scaleY:0.9302,rotation:154.0255,x:1201.4,y:655.05,regX:-0.6}}]},1).to({state:[{t:this.ikNode_37_1,p:{regX:38.5,scaleX:1.6055,scaleY:1.6055,rotation:-7.4454,x:968.15,y:634.9}},{t:this.ikNode_35_1,p:{scaleX:1.6057,scaleY:1.6057,rotation:-10.5875,x:1012.05,y:602.65,regX:31}},{t:this.ikNode_33_1,p:{scaleX:1.6056,scaleY:1.6056,rotation:-7.8441,x:1037.2,y:567.8,regY:13.9}},{t:this.ikNode_31_1,p:{regY:5.3,scaleX:0.9964,scaleY:0.9964,rotation:166.0985,x:1164.25,y:660.65}},{t:this.ikNode_29_1,p:{regY:12.9,scaleX:0.9963,scaleY:0.9963,rotation:40.0611,x:1101.15,y:599.25,regX:13.6}},{t:this.ikNode_27_1,p:{scaleX:0.997,scaleY:0.997,rotation:-170.9826,x:1161.6,y:615.85,regX:45,regY:11.5}},{t:this.ikNode_19_1,p:{scaleX:0.997,scaleY:0.997,rotation:32.2874,x:1196.3,y:615.1,regY:18.4,regX:30.9}},{t:this.ikNode_17_1,p:{scaleX:0.9974,scaleY:0.9974,rotation:24.9643,x:1153.25,y:590.65,regY:23.8}},{t:this.ikNode_2_1,p:{scaleX:0.9984,scaleY:0.9984,rotation:12.8942,x:1106.15,y:575.45,regY:34.2}},{t:this.ikNode_3_1,p:{regX:63.6,rotation:18.4538,x:1070.3,y:546.4,scaleX:0.9976,scaleY:0.9976}},{t:this.ikNode_11_1,p:{regX:45.1,rotation:-9.3711,x:1066.55,y:588.1,scaleX:0.9973,scaleY:0.9973,regY:14.4}},{t:this.ikNode_13_1,p:{scaleX:0.9972,scaleY:0.9972,rotation:14.4135,x:1041.95,y:616.7,regY:6.3,regX:70}},{t:this.ikNode_15_1,p:{regY:0.5,scaleX:0.997,scaleY:0.997,rotation:40.827,x:992.75,y:632,regX:90.5}},{t:this.ikNode_21_1,p:{rotation:177.049,x:1219.75,y:638.3,regX:21.7,scaleX:0.9307,scaleY:0.9307,regY:10.2}},{t:this.ikNode_23_1,p:{regY:25.2,rotation:16.9195,x:1099.25,y:643.45,scaleX:0.9309,scaleY:0.9309,regX:13.1}},{t:this.ikNode_25_1,p:{scaleX:0.9302,scaleY:0.9302,rotation:154.0255,x:1201.4,y:655.05,regX:-0.6}}]},1).to({state:[{t:this.ikNode_37_1,p:{regX:38.5,scaleX:1.6055,scaleY:1.6055,rotation:-7.4454,x:968.15,y:634.9}},{t:this.ikNode_35_1,p:{scaleX:1.6057,scaleY:1.6057,rotation:-10.5875,x:1012.05,y:602.65,regX:31}},{t:this.ikNode_33_1,p:{scaleX:1.6056,scaleY:1.6056,rotation:-7.8441,x:1037.2,y:567.8,regY:13.9}},{t:this.ikNode_31_1,p:{regY:5.3,scaleX:0.9964,scaleY:0.9964,rotation:166.0985,x:1164.25,y:660.65}},{t:this.ikNode_29_1,p:{regY:12.9,scaleX:0.9963,scaleY:0.9963,rotation:40.0611,x:1101.15,y:599.25,regX:13.6}},{t:this.ikNode_27_1,p:{scaleX:0.997,scaleY:0.997,rotation:-170.9826,x:1161.6,y:615.85,regX:45,regY:11.5}},{t:this.ikNode_19_1,p:{scaleX:0.997,scaleY:0.997,rotation:32.2874,x:1196.3,y:615.1,regY:18.4,regX:30.9}},{t:this.ikNode_17_1,p:{scaleX:0.9974,scaleY:0.9974,rotation:24.9643,x:1153.25,y:590.65,regY:23.8}},{t:this.ikNode_2_1,p:{scaleX:0.9984,scaleY:0.9984,rotation:12.8942,x:1106.15,y:575.45,regY:34.2}},{t:this.ikNode_3_1,p:{regX:63.6,rotation:18.4538,x:1070.3,y:546.4,scaleX:0.9976,scaleY:0.9976}},{t:this.ikNode_11_1,p:{regX:45.1,rotation:-9.3711,x:1066.55,y:588.1,scaleX:0.9973,scaleY:0.9973,regY:14.4}},{t:this.ikNode_13_1,p:{scaleX:0.9972,scaleY:0.9972,rotation:14.4135,x:1041.95,y:616.7,regY:6.3,regX:70}},{t:this.ikNode_15_1,p:{regY:0.5,scaleX:0.997,scaleY:0.997,rotation:40.827,x:992.75,y:632,regX:90.5}},{t:this.ikNode_21_1,p:{rotation:177.049,x:1219.75,y:638.3,regX:21.7,scaleX:0.9307,scaleY:0.9307,regY:10.2}},{t:this.ikNode_23_1,p:{regY:25.2,rotation:16.9195,x:1099.25,y:643.45,scaleX:0.9309,scaleY:0.9309,regX:13.1}},{t:this.ikNode_25_1,p:{scaleX:0.9302,scaleY:0.9302,rotation:154.0255,x:1201.4,y:655.05,regX:-0.6}}]},1).to({state:[{t:this.ikNode_37_1,p:{regX:38.5,scaleX:1.6055,scaleY:1.6055,rotation:-7.4454,x:968.15,y:634.9}},{t:this.ikNode_35_1,p:{scaleX:1.6057,scaleY:1.6057,rotation:-10.5875,x:1012.05,y:602.6,regX:31}},{t:this.ikNode_33_1,p:{scaleX:1.6056,scaleY:1.6056,rotation:-7.8441,x:1037.2,y:567.8,regY:13.9}},{t:this.ikNode_31_1,p:{regY:5.3,scaleX:0.9964,scaleY:0.9964,rotation:166.0985,x:1164.25,y:660.65}},{t:this.ikNode_29_1,p:{regY:12.9,scaleX:0.9963,scaleY:0.9963,rotation:40.0611,x:1101.15,y:599.25,regX:13.6}},{t:this.ikNode_27_1,p:{scaleX:0.997,scaleY:0.997,rotation:-170.9826,x:1161.6,y:615.85,regX:45,regY:11.5}},{t:this.ikNode_19_1,p:{scaleX:0.997,scaleY:0.997,rotation:32.2874,x:1196.3,y:615.1,regY:18.4,regX:30.9}},{t:this.ikNode_17_1,p:{scaleX:0.9974,scaleY:0.9974,rotation:24.9643,x:1153.25,y:590.65,regY:23.8}},{t:this.ikNode_2_1,p:{scaleX:0.9984,scaleY:0.9984,rotation:12.8942,x:1106.15,y:575.45,regY:34.2}},{t:this.ikNode_3_1,p:{regX:63.6,rotation:18.4538,x:1070.3,y:546.4,scaleX:0.9976,scaleY:0.9976}},{t:this.ikNode_11_1,p:{regX:45.1,rotation:-9.3711,x:1066.55,y:588.1,scaleX:0.9973,scaleY:0.9973,regY:14.4}},{t:this.ikNode_13_1,p:{scaleX:0.9972,scaleY:0.9972,rotation:14.4135,x:1041.95,y:616.7,regY:6.3,regX:70}},{t:this.ikNode_15_1,p:{regY:0.5,scaleX:0.997,scaleY:0.997,rotation:40.827,x:992.75,y:632,regX:90.5}},{t:this.ikNode_21_1,p:{rotation:177.049,x:1219.75,y:638.3,regX:21.7,scaleX:0.9307,scaleY:0.9307,regY:10.2}},{t:this.ikNode_23_1,p:{regY:25.2,rotation:16.9195,x:1099.25,y:643.45,scaleX:0.9309,scaleY:0.9309,regX:13.1}},{t:this.ikNode_25_1,p:{scaleX:0.9302,scaleY:0.9302,rotation:154.0255,x:1201.4,y:655.05,regX:-0.6}}]},1).to({state:[{t:this.ikNode_37_1,p:{regX:38.5,scaleX:1.6055,scaleY:1.6055,rotation:-7.4454,x:968.15,y:634.9}},{t:this.ikNode_35_1,p:{scaleX:1.6057,scaleY:1.6057,rotation:-10.5875,x:1012.05,y:602.6,regX:31}},{t:this.ikNode_33_1,p:{scaleX:1.6056,scaleY:1.6056,rotation:-7.8441,x:1037.2,y:567.8,regY:13.9}},{t:this.ikNode_31_1,p:{regY:5.3,scaleX:0.9964,scaleY:0.9964,rotation:166.0985,x:1164.25,y:660.65}},{t:this.ikNode_29_1,p:{regY:12.9,scaleX:0.9963,scaleY:0.9963,rotation:40.0611,x:1101.15,y:599.25,regX:13.6}},{t:this.ikNode_27_1,p:{scaleX:0.997,scaleY:0.997,rotation:-170.9826,x:1161.6,y:615.85,regX:45,regY:11.5}},{t:this.ikNode_19_1,p:{scaleX:0.997,scaleY:0.997,rotation:32.2874,x:1196.3,y:615.1,regY:18.4,regX:30.9}},{t:this.ikNode_17_1,p:{scaleX:0.9974,scaleY:0.9974,rotation:24.9643,x:1153.25,y:590.65,regY:23.8}},{t:this.ikNode_2_1,p:{scaleX:0.9984,scaleY:0.9984,rotation:12.8942,x:1106.15,y:575.45,regY:34.2}},{t:this.ikNode_3_1,p:{regX:63.6,rotation:18.4538,x:1070.3,y:546.4,scaleX:0.9976,scaleY:0.9976}},{t:this.ikNode_11_1,p:{regX:45.1,rotation:-9.3711,x:1066.55,y:588.1,scaleX:0.9973,scaleY:0.9973,regY:14.4}},{t:this.ikNode_13_1,p:{scaleX:0.9972,scaleY:0.9972,rotation:14.4135,x:1041.95,y:616.7,regY:6.3,regX:70}},{t:this.ikNode_15_1,p:{regY:0.5,scaleX:0.997,scaleY:0.997,rotation:40.827,x:992.75,y:632,regX:90.5}},{t:this.ikNode_21_1,p:{rotation:177.049,x:1219.7,y:638.3,regX:21.7,scaleX:0.9307,scaleY:0.9307,regY:10.2}},{t:this.ikNode_23_1,p:{regY:25.2,rotation:16.9195,x:1099.25,y:643.45,scaleX:0.9309,scaleY:0.9309,regX:13.1}},{t:this.ikNode_25_1,p:{scaleX:0.9302,scaleY:0.9302,rotation:154.0255,x:1201.4,y:655.05,regX:-0.6}}]},1).to({state:[{t:this.ikNode_37_1,p:{regX:38.5,scaleX:1.6055,scaleY:1.6055,rotation:-7.4454,x:968.15,y:634.9}},{t:this.ikNode_35_1,p:{scaleX:1.6057,scaleY:1.6057,rotation:-10.5875,x:1012.05,y:602.6,regX:31}},{t:this.ikNode_33_1,p:{scaleX:1.6056,scaleY:1.6056,rotation:-7.8441,x:1037.2,y:567.8,regY:13.9}},{t:this.ikNode_31_1,p:{regY:5.3,scaleX:0.9964,scaleY:0.9964,rotation:166.0985,x:1164.25,y:660.65}},{t:this.ikNode_29_1,p:{regY:12.9,scaleX:0.9963,scaleY:0.9963,rotation:40.0611,x:1101.15,y:599.25,regX:13.6}},{t:this.ikNode_27_1,p:{scaleX:0.997,scaleY:0.997,rotation:-170.9826,x:1161.6,y:615.85,regX:45,regY:11.5}},{t:this.ikNode_19_1,p:{scaleX:0.997,scaleY:0.997,rotation:32.2874,x:1196.3,y:615.1,regY:18.4,regX:30.9}},{t:this.ikNode_17_1,p:{scaleX:0.9974,scaleY:0.9974,rotation:24.9643,x:1153.25,y:590.65,regY:23.8}},{t:this.ikNode_2_1,p:{scaleX:0.9984,scaleY:0.9984,rotation:12.8942,x:1106.15,y:575.45,regY:34.2}},{t:this.ikNode_3_1,p:{regX:63.6,rotation:18.4538,x:1070.3,y:546.4,scaleX:0.9976,scaleY:0.9976}},{t:this.ikNode_11_1,p:{regX:45.1,rotation:-9.3711,x:1066.55,y:588.1,scaleX:0.9973,scaleY:0.9973,regY:14.4}},{t:this.ikNode_13_1,p:{scaleX:0.9972,scaleY:0.9972,rotation:14.4135,x:1041.95,y:616.7,regY:6.3,regX:70}},{t:this.ikNode_15_1,p:{regY:0.5,scaleX:0.997,scaleY:0.997,rotation:40.827,x:992.75,y:632,regX:90.5}},{t:this.ikNode_21_1,p:{rotation:177.049,x:1219.7,y:638.3,regX:21.7,scaleX:0.9307,scaleY:0.9307,regY:10.2}},{t:this.ikNode_23_1,p:{regY:25.2,rotation:16.9195,x:1099.25,y:643.45,scaleX:0.9309,scaleY:0.9309,regX:13.1}},{t:this.ikNode_25_1,p:{scaleX:0.9302,scaleY:0.9302,rotation:154.0255,x:1201.4,y:655.05,regX:-0.6}}]},1).to({state:[{t:this.ikNode_37_1,p:{regX:38.5,scaleX:1.6055,scaleY:1.6055,rotation:-7.4454,x:968.15,y:634.9}},{t:this.ikNode_35_1,p:{scaleX:1.6057,scaleY:1.6057,rotation:-10.5875,x:1012.05,y:602.6,regX:31}},{t:this.ikNode_33_1,p:{scaleX:1.6056,scaleY:1.6056,rotation:-7.8441,x:1037.2,y:567.8,regY:13.9}},{t:this.ikNode_31_1,p:{regY:5.3,scaleX:0.9964,scaleY:0.9964,rotation:166.0985,x:1164.25,y:660.65}},{t:this.ikNode_29_1,p:{regY:12.9,scaleX:0.9963,scaleY:0.9963,rotation:40.0611,x:1101.15,y:599.25,regX:13.6}},{t:this.ikNode_27_1,p:{scaleX:0.997,scaleY:0.997,rotation:-170.9826,x:1161.6,y:615.85,regX:45,regY:11.5}},{t:this.ikNode_19_1,p:{scaleX:0.997,scaleY:0.997,rotation:32.2874,x:1196.3,y:615.1,regY:18.4,regX:30.9}},{t:this.ikNode_17_1,p:{scaleX:0.9974,scaleY:0.9974,rotation:24.9643,x:1153.25,y:590.65,regY:23.8}},{t:this.ikNode_2_1,p:{scaleX:0.9984,scaleY:0.9984,rotation:12.8942,x:1106.15,y:575.45,regY:34.2}},{t:this.ikNode_3_1,p:{regX:63.6,rotation:18.4538,x:1070.3,y:546.4,scaleX:0.9976,scaleY:0.9976}},{t:this.ikNode_11_1,p:{regX:45.1,rotation:-9.3711,x:1066.55,y:588.05,scaleX:0.9973,scaleY:0.9973,regY:14.4}},{t:this.ikNode_13_1,p:{scaleX:0.9972,scaleY:0.9972,rotation:14.4135,x:1041.95,y:616.7,regY:6.3,regX:70}},{t:this.ikNode_15_1,p:{regY:0.5,scaleX:0.997,scaleY:0.997,rotation:40.827,x:992.75,y:632,regX:90.5}},{t:this.ikNode_21_1,p:{rotation:177.049,x:1219.7,y:638.3,regX:21.7,scaleX:0.9307,scaleY:0.9307,regY:10.2}},{t:this.ikNode_23_1,p:{regY:25.2,rotation:16.9195,x:1099.25,y:643.45,scaleX:0.9309,scaleY:0.9309,regX:13.1}},{t:this.ikNode_25_1,p:{scaleX:0.9302,scaleY:0.9302,rotation:154.0255,x:1201.4,y:655.05,regX:-0.6}}]},1).to({state:[{t:this.ikNode_37_1,p:{regX:38.5,scaleX:1.6055,scaleY:1.6055,rotation:-7.4454,x:968.15,y:634.9}},{t:this.ikNode_35_1,p:{scaleX:1.6057,scaleY:1.6057,rotation:-10.5875,x:1012,y:602.6,regX:31}},{t:this.ikNode_33_1,p:{scaleX:1.6056,scaleY:1.6056,rotation:-7.8441,x:1037.2,y:567.8,regY:13.9}},{t:this.ikNode_31_1,p:{regY:5.3,scaleX:0.9964,scaleY:0.9964,rotation:166.0985,x:1164.25,y:660.65}},{t:this.ikNode_29_1,p:{regY:12.9,scaleX:0.9963,scaleY:0.9963,rotation:40.0611,x:1101.15,y:599.25,regX:13.6}},{t:this.ikNode_27_1,p:{scaleX:0.997,scaleY:0.997,rotation:-170.9826,x:1161.55,y:615.85,regX:45,regY:11.5}},{t:this.ikNode_19_1,p:{scaleX:0.997,scaleY:0.997,rotation:32.2874,x:1196.3,y:615.1,regY:18.4,regX:30.9}},{t:this.ikNode_17_1,p:{scaleX:0.9974,scaleY:0.9974,rotation:24.9643,x:1153.25,y:590.65,regY:23.8}},{t:this.ikNode_2_1,p:{scaleX:0.9984,scaleY:0.9984,rotation:12.8942,x:1106.15,y:575.45,regY:34.2}},{t:this.ikNode_3_1,p:{regX:63.6,rotation:18.4538,x:1070.3,y:546.4,scaleX:0.9976,scaleY:0.9976}},{t:this.ikNode_11_1,p:{regX:45.1,rotation:-9.3711,x:1066.55,y:588.05,scaleX:0.9973,scaleY:0.9973,regY:14.4}},{t:this.ikNode_13_1,p:{scaleX:0.9972,scaleY:0.9972,rotation:14.4135,x:1041.95,y:616.7,regY:6.3,regX:70}},{t:this.ikNode_15_1,p:{regY:0.5,scaleX:0.997,scaleY:0.997,rotation:40.827,x:992.75,y:632,regX:90.5}},{t:this.ikNode_21_1,p:{rotation:177.049,x:1219.7,y:638.3,regX:21.7,scaleX:0.9307,scaleY:0.9307,regY:10.2}},{t:this.ikNode_23_1,p:{regY:25.2,rotation:16.9195,x:1099.25,y:643.45,scaleX:0.9309,scaleY:0.9309,regX:13.1}},{t:this.ikNode_25_1,p:{scaleX:0.9302,scaleY:0.9302,rotation:154.0255,x:1201.4,y:655.05,regX:-0.6}}]},1).to({state:[{t:this.ikNode_37_1,p:{regX:38.5,scaleX:1.6055,scaleY:1.6055,rotation:-7.4454,x:968.15,y:634.9}},{t:this.ikNode_35_1,p:{scaleX:1.6057,scaleY:1.6057,rotation:-10.5875,x:1012,y:602.6,regX:31}},{t:this.ikNode_33_1,p:{scaleX:1.6056,scaleY:1.6056,rotation:-7.8441,x:1037.2,y:567.8,regY:13.9}},{t:this.ikNode_31_1,p:{regY:5.3,scaleX:0.9964,scaleY:0.9964,rotation:166.0985,x:1164.25,y:660.65}},{t:this.ikNode_29_1,p:{regY:12.9,scaleX:0.9963,scaleY:0.9963,rotation:40.0611,x:1101.15,y:599.25,regX:13.6}},{t:this.ikNode_27_1,p:{scaleX:0.997,scaleY:0.997,rotation:-170.9833,x:1161.55,y:615.8,regX:45,regY:11.5}},{t:this.ikNode_19_1,p:{scaleX:0.997,scaleY:0.997,rotation:32.2874,x:1196.3,y:615.1,regY:18.4,regX:30.9}},{t:this.ikNode_17_1,p:{scaleX:0.9974,scaleY:0.9974,rotation:24.9643,x:1153.25,y:590.65,regY:23.8}},{t:this.ikNode_2_1,p:{scaleX:0.9984,scaleY:0.9984,rotation:12.8942,x:1106.15,y:575.45,regY:34.2}},{t:this.ikNode_3_1,p:{regX:63.6,rotation:18.4538,x:1070.3,y:546.4,scaleX:0.9976,scaleY:0.9976}},{t:this.ikNode_11_1,p:{regX:45.1,rotation:-9.3711,x:1066.55,y:588.05,scaleX:0.9973,scaleY:0.9973,regY:14.4}},{t:this.ikNode_13_1,p:{scaleX:0.9972,scaleY:0.9972,rotation:14.4135,x:1041.95,y:616.7,regY:6.3,regX:70}},{t:this.ikNode_15_1,p:{regY:0.5,scaleX:0.997,scaleY:0.997,rotation:40.827,x:992.75,y:632,regX:90.5}},{t:this.ikNode_21_1,p:{rotation:177.049,x:1219.7,y:638.3,regX:21.7,scaleX:0.9307,scaleY:0.9307,regY:10.2}},{t:this.ikNode_23_1,p:{regY:25.2,rotation:16.9195,x:1099.25,y:643.45,scaleX:0.9309,scaleY:0.9309,regX:13.1}},{t:this.ikNode_25_1,p:{scaleX:0.9302,scaleY:0.9302,rotation:154.0255,x:1201.4,y:655.05,regX:-0.6}}]},1).to({state:[{t:this.ikNode_37_1,p:{regX:38.5,scaleX:1.6055,scaleY:1.6055,rotation:-7.4454,x:968.15,y:634.9}},{t:this.ikNode_35_1,p:{scaleX:1.6057,scaleY:1.6057,rotation:-10.5875,x:1012,y:602.6,regX:31}},{t:this.ikNode_33_1,p:{scaleX:1.6056,scaleY:1.6056,rotation:-7.8441,x:1037.2,y:567.8,regY:13.9}},{t:this.ikNode_31_1,p:{regY:5.3,scaleX:0.9964,scaleY:0.9964,rotation:166.0985,x:1164.25,y:660.65}},{t:this.ikNode_29_1,p:{regY:12.9,scaleX:0.9963,scaleY:0.9963,rotation:40.0611,x:1101.15,y:599.25,regX:13.6}},{t:this.ikNode_27_1,p:{scaleX:0.997,scaleY:0.997,rotation:-170.9833,x:1161.55,y:615.8,regX:45,regY:11.5}},{t:this.ikNode_19_1,p:{scaleX:0.997,scaleY:0.997,rotation:32.2874,x:1196.3,y:615.05,regY:18.4,regX:30.9}},{t:this.ikNode_17_1,p:{scaleX:0.9974,scaleY:0.9974,rotation:24.9643,x:1153.25,y:590.65,regY:23.8}},{t:this.ikNode_2_1,p:{scaleX:0.9984,scaleY:0.9984,rotation:12.8942,x:1106.15,y:575.45,regY:34.2}},{t:this.ikNode_3_1,p:{regX:63.6,rotation:18.4538,x:1070.3,y:546.4,scaleX:0.9976,scaleY:0.9976}},{t:this.ikNode_11_1,p:{regX:45.1,rotation:-9.3711,x:1066.55,y:588.05,scaleX:0.9973,scaleY:0.9973,regY:14.4}},{t:this.ikNode_13_1,p:{scaleX:0.9972,scaleY:0.9972,rotation:14.4135,x:1041.95,y:616.7,regY:6.3,regX:70}},{t:this.ikNode_15_1,p:{regY:0.5,scaleX:0.997,scaleY:0.997,rotation:40.827,x:992.75,y:632,regX:90.5}},{t:this.ikNode_21_1,p:{rotation:177.049,x:1219.7,y:638.25,regX:21.7,scaleX:0.9307,scaleY:0.9307,regY:10.2}},{t:this.ikNode_23_1,p:{regY:25.2,rotation:16.9195,x:1099.25,y:643.45,scaleX:0.9309,scaleY:0.9309,regX:13.1}},{t:this.ikNode_25_1,p:{scaleX:0.9302,scaleY:0.9302,rotation:154.0255,x:1201.4,y:655.05,regX:-0.6}}]},1).to({state:[{t:this.ikNode_37_1,p:{regX:38.5,scaleX:1.6055,scaleY:1.6055,rotation:-7.4454,x:968.15,y:634.9}},{t:this.ikNode_35_1,p:{scaleX:1.6057,scaleY:1.6057,rotation:-10.5875,x:1012,y:602.6,regX:31}},{t:this.ikNode_33_1,p:{scaleX:1.6056,scaleY:1.6056,rotation:-7.8441,x:1037.2,y:567.8,regY:13.9}},{t:this.ikNode_31_1,p:{regY:5.3,scaleX:0.9964,scaleY:0.9964,rotation:166.0985,x:1164.25,y:660.65}},{t:this.ikNode_29_1,p:{regY:12.9,scaleX:0.9963,scaleY:0.9963,rotation:40.0611,x:1101.15,y:599.25,regX:13.6}},{t:this.ikNode_27_1,p:{scaleX:0.997,scaleY:0.997,rotation:-170.9833,x:1161.55,y:615.8,regX:45,regY:11.5}},{t:this.ikNode_19_1,p:{scaleX:0.997,scaleY:0.997,rotation:32.2874,x:1196.3,y:615.05,regY:18.4,regX:30.9}},{t:this.ikNode_17_1,p:{scaleX:0.9974,scaleY:0.9974,rotation:24.9643,x:1153.25,y:590.65,regY:23.8}},{t:this.ikNode_2_1,p:{scaleX:0.9984,scaleY:0.9984,rotation:12.8942,x:1106.15,y:575.45,regY:34.2}},{t:this.ikNode_3_1,p:{regX:63.6,rotation:18.4538,x:1070.3,y:546.4,scaleX:0.9976,scaleY:0.9976}},{t:this.ikNode_11_1,p:{regX:45.1,rotation:-9.3711,x:1066.55,y:588.05,scaleX:0.9973,scaleY:0.9973,regY:14.4}},{t:this.ikNode_13_1,p:{scaleX:0.9972,scaleY:0.9972,rotation:14.4135,x:1041.95,y:616.7,regY:6.3,regX:70}},{t:this.ikNode_15_1,p:{regY:0.5,scaleX:0.997,scaleY:0.997,rotation:40.827,x:992.75,y:632,regX:90.5}},{t:this.ikNode_21_1,p:{rotation:177.049,x:1219.7,y:638.25,regX:21.7,scaleX:0.9307,scaleY:0.9307,regY:10.2}},{t:this.ikNode_23_1,p:{regY:25.2,rotation:16.9195,x:1099.25,y:643.45,scaleX:0.9309,scaleY:0.9309,regX:13.1}},{t:this.ikNode_25_1,p:{scaleX:0.9302,scaleY:0.9302,rotation:154.0255,x:1201.4,y:655.05,regX:-0.6}}]},1).to({state:[{t:this.ikNode_37_1,p:{regX:38.5,scaleX:1.6055,scaleY:1.6055,rotation:-7.4454,x:968.15,y:634.9}},{t:this.ikNode_35_1,p:{scaleX:1.6057,scaleY:1.6057,rotation:-10.5875,x:1012,y:602.6,regX:31}},{t:this.ikNode_33_1,p:{scaleX:1.6056,scaleY:1.6056,rotation:-7.8441,x:1037.2,y:567.8,regY:13.9}},{t:this.ikNode_31_1,p:{regY:5.3,scaleX:0.9964,scaleY:0.9964,rotation:166.0985,x:1164.25,y:660.65}},{t:this.ikNode_29_1,p:{regY:12.9,scaleX:0.9963,scaleY:0.9963,rotation:40.0611,x:1101.15,y:599.25,regX:13.6}},{t:this.ikNode_27_1,p:{scaleX:0.997,scaleY:0.997,rotation:-170.9833,x:1161.55,y:615.8,regX:45,regY:11.5}},{t:this.ikNode_19_1,p:{scaleX:0.997,scaleY:0.997,rotation:32.2874,x:1196.3,y:615.05,regY:18.4,regX:30.9}},{t:this.ikNode_17_1,p:{scaleX:0.9974,scaleY:0.9974,rotation:24.9643,x:1153.25,y:590.65,regY:23.8}},{t:this.ikNode_2_1,p:{scaleX:0.9984,scaleY:0.9984,rotation:12.8942,x:1106.1,y:575.45,regY:34.2}},{t:this.ikNode_3_1,p:{regX:63.6,rotation:18.4538,x:1070.3,y:546.4,scaleX:0.9976,scaleY:0.9976}},{t:this.ikNode_11_1,p:{regX:45.1,rotation:-9.3711,x:1066.55,y:588.05,scaleX:0.9973,scaleY:0.9973,regY:14.4}},{t:this.ikNode_13_1,p:{scaleX:0.9972,scaleY:0.9972,rotation:14.4135,x:1041.95,y:616.7,regY:6.3,regX:70}},{t:this.ikNode_15_1,p:{regY:0.5,scaleX:0.997,scaleY:0.997,rotation:40.827,x:992.75,y:632,regX:90.5}},{t:this.ikNode_21_1,p:{rotation:177.05,x:1219.7,y:638.25,regX:21.7,scaleX:0.9307,scaleY:0.9307,regY:10.2}},{t:this.ikNode_23_1,p:{regY:25.2,rotation:16.9195,x:1099.25,y:643.45,scaleX:0.9309,scaleY:0.9309,regX:13.1}},{t:this.ikNode_25_1,p:{scaleX:0.9302,scaleY:0.9302,rotation:154.0255,x:1201.4,y:655.05,regX:-0.6}}]},1).to({state:[{t:this.ikNode_37_1,p:{regX:38.5,scaleX:1.6055,scaleY:1.6055,rotation:-7.4454,x:968.15,y:634.9}},{t:this.ikNode_35_1,p:{scaleX:1.6057,scaleY:1.6057,rotation:-10.5875,x:1012,y:602.6,regX:31}},{t:this.ikNode_33_1,p:{scaleX:1.6056,scaleY:1.6056,rotation:-7.8441,x:1037.2,y:567.8,regY:13.9}},{t:this.ikNode_31_1,p:{regY:5.3,scaleX:0.9964,scaleY:0.9964,rotation:166.0985,x:1164.25,y:660.65}},{t:this.ikNode_29_1,p:{regY:12.9,scaleX:0.9963,scaleY:0.9963,rotation:40.0611,x:1101.15,y:599.25,regX:13.6}},{t:this.ikNode_27_1,p:{scaleX:0.997,scaleY:0.997,rotation:-170.9833,x:1161.55,y:615.8,regX:45,regY:11.5}},{t:this.ikNode_19_1,p:{scaleX:0.997,scaleY:0.997,rotation:32.2874,x:1196.3,y:615.05,regY:18.4,regX:30.9}},{t:this.ikNode_17_1,p:{scaleX:0.9974,scaleY:0.9974,rotation:24.9643,x:1153.25,y:590.65,regY:23.8}},{t:this.ikNode_2_1,p:{scaleX:0.9984,scaleY:0.9984,rotation:12.8942,x:1106.1,y:575.45,regY:34.2}},{t:this.ikNode_3_1,p:{regX:63.6,rotation:18.4538,x:1070.3,y:546.4,scaleX:0.9976,scaleY:0.9976}},{t:this.ikNode_11_1,p:{regX:45.1,rotation:-9.3711,x:1066.55,y:588.05,scaleX:0.9973,scaleY:0.9973,regY:14.4}},{t:this.ikNode_13_1,p:{scaleX:0.9972,scaleY:0.9972,rotation:14.4135,x:1041.95,y:616.7,regY:6.3,regX:70}},{t:this.ikNode_15_1,p:{regY:0.5,scaleX:0.997,scaleY:0.997,rotation:40.827,x:992.75,y:632,regX:90.5}},{t:this.ikNode_21_1,p:{rotation:177.05,x:1219.7,y:638.25,regX:21.7,scaleX:0.9307,scaleY:0.9307,regY:10.2}},{t:this.ikNode_23_1,p:{regY:25.2,rotation:16.9195,x:1099.25,y:643.45,scaleX:0.9309,scaleY:0.9309,regX:13.1}},{t:this.ikNode_25_1,p:{scaleX:0.9302,scaleY:0.9302,rotation:154.0255,x:1201.4,y:655.05,regX:-0.6}}]},1).to({state:[{t:this.ikNode_37_1,p:{regX:38.5,scaleX:1.6055,scaleY:1.6055,rotation:-7.4454,x:968.15,y:634.9}},{t:this.ikNode_35_1,p:{scaleX:1.6057,scaleY:1.6057,rotation:-10.5875,x:1012,y:602.6,regX:31}},{t:this.ikNode_33_1,p:{scaleX:1.6056,scaleY:1.6056,rotation:-7.8441,x:1037.2,y:567.8,regY:13.9}},{t:this.ikNode_31_1,p:{regY:5.3,scaleX:0.9964,scaleY:0.9964,rotation:166.0985,x:1164.25,y:660.65}},{t:this.ikNode_29_1,p:{regY:12.9,scaleX:0.9963,scaleY:0.9963,rotation:40.0611,x:1101.15,y:599.25,regX:13.6}},{t:this.ikNode_27_1,p:{scaleX:0.997,scaleY:0.997,rotation:-170.9833,x:1161.55,y:615.8,regX:45,regY:11.5}},{t:this.ikNode_19_1,p:{scaleX:0.997,scaleY:0.997,rotation:32.2874,x:1196.3,y:615.05,regY:18.4,regX:30.9}},{t:this.ikNode_17_1,p:{scaleX:0.9974,scaleY:0.9974,rotation:24.9643,x:1153.25,y:590.65,regY:23.8}},{t:this.ikNode_2_1,p:{scaleX:0.9984,scaleY:0.9984,rotation:12.8942,x:1106.1,y:575.45,regY:34.2}},{t:this.ikNode_3_1,p:{regX:63.6,rotation:18.4538,x:1070.3,y:546.4,scaleX:0.9976,scaleY:0.9976}},{t:this.ikNode_11_1,p:{regX:45.1,rotation:-9.3711,x:1066.55,y:588.05,scaleX:0.9973,scaleY:0.9973,regY:14.4}},{t:this.ikNode_13_1,p:{scaleX:0.9972,scaleY:0.9972,rotation:14.4135,x:1041.95,y:616.7,regY:6.3,regX:70}},{t:this.ikNode_15_1,p:{regY:0.5,scaleX:0.997,scaleY:0.997,rotation:40.827,x:992.75,y:632,regX:90.5}},{t:this.ikNode_21_1,p:{rotation:177.05,x:1219.7,y:638.25,regX:21.7,scaleX:0.9307,scaleY:0.9307,regY:10.2}},{t:this.ikNode_23_1,p:{regY:25.2,rotation:16.9195,x:1099.25,y:643.45,scaleX:0.9309,scaleY:0.9309,regX:13.1}},{t:this.ikNode_25_1,p:{scaleX:0.9302,scaleY:0.9302,rotation:154.0255,x:1201.4,y:655.05,regX:-0.6}}]},1).to({state:[{t:this.ikNode_37_1,p:{regX:38.5,scaleX:1.6055,scaleY:1.6055,rotation:-7.4454,x:968.15,y:634.9}},{t:this.ikNode_35_1,p:{scaleX:1.6057,scaleY:1.6057,rotation:-10.5875,x:1012,y:602.6,regX:31}},{t:this.ikNode_33_1,p:{scaleX:1.6056,scaleY:1.6056,rotation:-7.8441,x:1037.2,y:567.8,regY:13.9}},{t:this.ikNode_31_1,p:{regY:5.3,scaleX:0.9964,scaleY:0.9964,rotation:166.0985,x:1164.25,y:660.65}},{t:this.ikNode_29_1,p:{regY:12.9,scaleX:0.9963,scaleY:0.9963,rotation:40.0611,x:1101.15,y:599.25,regX:13.6}},{t:this.ikNode_27_1,p:{scaleX:0.997,scaleY:0.997,rotation:-170.9833,x:1161.55,y:615.8,regX:45,regY:11.5}},{t:this.ikNode_19_1,p:{scaleX:0.997,scaleY:0.997,rotation:32.2874,x:1196.3,y:615.05,regY:18.4,regX:30.9}},{t:this.ikNode_17_1,p:{scaleX:0.9974,scaleY:0.9974,rotation:24.9643,x:1153.25,y:590.65,regY:23.8}},{t:this.ikNode_2_1,p:{scaleX:0.9984,scaleY:0.9984,rotation:12.8942,x:1106.1,y:575.45,regY:34.2}},{t:this.ikNode_3_1,p:{regX:63.6,rotation:18.4538,x:1070.3,y:546.4,scaleX:0.9976,scaleY:0.9976}},{t:this.ikNode_11_1,p:{regX:45.1,rotation:-9.3711,x:1066.55,y:588.05,scaleX:0.9973,scaleY:0.9973,regY:14.4}},{t:this.ikNode_13_1,p:{scaleX:0.9972,scaleY:0.9972,rotation:14.4135,x:1041.95,y:616.7,regY:6.3,regX:70}},{t:this.ikNode_15_1,p:{regY:0.5,scaleX:0.997,scaleY:0.997,rotation:40.827,x:992.75,y:632,regX:90.5}},{t:this.ikNode_21_1,p:{rotation:177.05,x:1219.7,y:638.25,regX:21.7,scaleX:0.9307,scaleY:0.9307,regY:10.2}},{t:this.ikNode_23_1,p:{regY:25.2,rotation:16.9195,x:1099.25,y:643.45,scaleX:0.9309,scaleY:0.9309,regX:13.1}},{t:this.ikNode_25_1,p:{scaleX:0.9302,scaleY:0.9302,rotation:154.0255,x:1201.4,y:655.05,regX:-0.6}}]},1).to({state:[{t:this.ikNode_37_1,p:{regX:38.5,scaleX:1.6055,scaleY:1.6055,rotation:-7.4454,x:968.15,y:634.9}},{t:this.ikNode_35_1,p:{scaleX:1.6057,scaleY:1.6057,rotation:-10.5875,x:1012,y:602.6,regX:31}},{t:this.ikNode_33_1,p:{scaleX:1.6056,scaleY:1.6056,rotation:-7.8441,x:1037.2,y:567.8,regY:13.9}},{t:this.ikNode_31_1,p:{regY:5.3,scaleX:0.9964,scaleY:0.9964,rotation:166.0985,x:1164.25,y:660.65}},{t:this.ikNode_29_1,p:{regY:12.9,scaleX:0.9963,scaleY:0.9963,rotation:40.0611,x:1101.15,y:599.25,regX:13.6}},{t:this.ikNode_27_1,p:{scaleX:0.997,scaleY:0.997,rotation:-170.9833,x:1161.55,y:615.8,regX:45,regY:11.5}},{t:this.ikNode_19_1,p:{scaleX:0.997,scaleY:0.997,rotation:32.2874,x:1196.3,y:615.05,regY:18.4,regX:30.9}},{t:this.ikNode_17_1,p:{scaleX:0.9974,scaleY:0.9974,rotation:24.9643,x:1153.25,y:590.65,regY:23.8}},{t:this.ikNode_2_1,p:{scaleX:0.9984,scaleY:0.9984,rotation:12.8942,x:1106.1,y:575.45,regY:34.2}},{t:this.ikNode_3_1,p:{regX:63.6,rotation:18.4538,x:1070.3,y:546.4,scaleX:0.9976,scaleY:0.9976}},{t:this.ikNode_11_1,p:{regX:45.1,rotation:-9.3711,x:1066.55,y:588.05,scaleX:0.9973,scaleY:0.9973,regY:14.4}},{t:this.ikNode_13_1,p:{scaleX:0.9972,scaleY:0.9972,rotation:14.4135,x:1041.95,y:616.7,regY:6.3,regX:70}},{t:this.ikNode_15_1,p:{regY:0.5,scaleX:0.997,scaleY:0.997,rotation:40.827,x:992.75,y:632,regX:90.5}},{t:this.ikNode_21_1,p:{rotation:177.05,x:1219.7,y:638.25,regX:21.7,scaleX:0.9307,scaleY:0.9307,regY:10.2}},{t:this.ikNode_23_1,p:{regY:25.2,rotation:16.9195,x:1099.25,y:643.45,scaleX:0.9309,scaleY:0.9309,regX:13.1}},{t:this.ikNode_25_1,p:{scaleX:0.9302,scaleY:0.9302,rotation:154.0255,x:1201.4,y:655.05,regX:-0.6}}]},1).to({state:[{t:this.ikNode_37_1,p:{regX:38.5,scaleX:1.6055,scaleY:1.6055,rotation:-7.4454,x:968.15,y:634.9}},{t:this.ikNode_35_1,p:{scaleX:1.6057,scaleY:1.6057,rotation:-10.5875,x:1012,y:602.6,regX:31}},{t:this.ikNode_33_1,p:{scaleX:1.6056,scaleY:1.6056,rotation:-7.8441,x:1037.15,y:567.8,regY:13.9}},{t:this.ikNode_31_1,p:{regY:5.3,scaleX:0.9964,scaleY:0.9964,rotation:166.0985,x:1164.25,y:660.65}},{t:this.ikNode_29_1,p:{regY:12.9,scaleX:0.9963,scaleY:0.9963,rotation:40.0611,x:1101.15,y:599.25,regX:13.6}},{t:this.ikNode_27_1,p:{scaleX:0.997,scaleY:0.997,rotation:-170.9833,x:1161.55,y:615.8,regX:45,regY:11.5}},{t:this.ikNode_19_1,p:{scaleX:0.997,scaleY:0.997,rotation:32.2874,x:1196.3,y:615.05,regY:18.4,regX:30.9}},{t:this.ikNode_17_1,p:{scaleX:0.9974,scaleY:0.9974,rotation:24.9643,x:1153.25,y:590.65,regY:23.8}},{t:this.ikNode_2_1,p:{scaleX:0.9984,scaleY:0.9984,rotation:12.8942,x:1106.1,y:575.45,regY:34.2}},{t:this.ikNode_3_1,p:{regX:63.6,rotation:18.4538,x:1070.3,y:546.4,scaleX:0.9976,scaleY:0.9976}},{t:this.ikNode_11_1,p:{regX:45.1,rotation:-9.3711,x:1066.55,y:588.05,scaleX:0.9973,scaleY:0.9973,regY:14.4}},{t:this.ikNode_13_1,p:{scaleX:0.9972,scaleY:0.9972,rotation:14.4135,x:1041.95,y:616.7,regY:6.3,regX:70}},{t:this.ikNode_15_1,p:{regY:0.5,scaleX:0.997,scaleY:0.997,rotation:40.827,x:992.75,y:632,regX:90.5}},{t:this.ikNode_21_1,p:{rotation:177.05,x:1219.7,y:638.25,regX:21.7,scaleX:0.9307,scaleY:0.9307,regY:10.2}},{t:this.ikNode_23_1,p:{regY:25.2,rotation:16.9195,x:1099.2,y:643.45,scaleX:0.9309,scaleY:0.9309,regX:13.1}},{t:this.ikNode_25_1,p:{scaleX:0.9302,scaleY:0.9302,rotation:154.0255,x:1201.4,y:655.05,regX:-0.6}}]},1).to({state:[{t:this.ikNode_37_1,p:{regX:38.5,scaleX:1.6055,scaleY:1.6055,rotation:-7.4454,x:968.15,y:634.9}},{t:this.ikNode_35_1,p:{scaleX:1.6057,scaleY:1.6057,rotation:-10.5875,x:1012,y:602.6,regX:31}},{t:this.ikNode_33_1,p:{scaleX:1.6056,scaleY:1.6056,rotation:-7.8441,x:1037.15,y:567.8,regY:13.9}},{t:this.ikNode_31_1,p:{regY:5.3,scaleX:0.9964,scaleY:0.9964,rotation:166.0985,x:1164.25,y:660.65}},{t:this.ikNode_29_1,p:{regY:12.9,scaleX:0.9963,scaleY:0.9963,rotation:40.0611,x:1101.15,y:599.25,regX:13.6}},{t:this.ikNode_27_1,p:{scaleX:0.997,scaleY:0.997,rotation:-170.9833,x:1161.55,y:615.8,regX:45,regY:11.5}},{t:this.ikNode_19_1,p:{scaleX:0.997,scaleY:0.997,rotation:32.2874,x:1196.3,y:615.05,regY:18.4,regX:30.9}},{t:this.ikNode_17_1,p:{scaleX:0.9974,scaleY:0.9974,rotation:24.9643,x:1153.25,y:590.65,regY:23.8}},{t:this.ikNode_2_1,p:{scaleX:0.9984,scaleY:0.9984,rotation:12.8942,x:1106.1,y:575.4,regY:34.2}},{t:this.ikNode_3_1,p:{regX:63.6,rotation:18.4538,x:1070.3,y:546.4,scaleX:0.9976,scaleY:0.9976}},{t:this.ikNode_11_1,p:{regX:45.1,rotation:-9.3711,x:1066.55,y:588.05,scaleX:0.9973,scaleY:0.9973,regY:14.4}},{t:this.ikNode_13_1,p:{scaleX:0.9972,scaleY:0.9972,rotation:14.4135,x:1041.95,y:616.7,regY:6.3,regX:70}},{t:this.ikNode_15_1,p:{regY:0.5,scaleX:0.997,scaleY:0.997,rotation:40.827,x:992.75,y:632,regX:90.5}},{t:this.ikNode_21_1,p:{rotation:177.05,x:1219.7,y:638.25,regX:21.7,scaleX:0.9307,scaleY:0.9307,regY:10.2}},{t:this.ikNode_23_1,p:{regY:25.2,rotation:16.9195,x:1099.2,y:643.45,scaleX:0.9309,scaleY:0.9309,regX:13.1}},{t:this.ikNode_25_1,p:{scaleX:0.9302,scaleY:0.9302,rotation:154.0255,x:1201.4,y:655.05,regX:-0.6}}]},1).to({state:[{t:this.ikNode_37_1,p:{regX:38.5,scaleX:1.6055,scaleY:1.6055,rotation:-7.4454,x:968.15,y:634.9}},{t:this.ikNode_35_1,p:{scaleX:1.6057,scaleY:1.6057,rotation:-10.5875,x:1012,y:602.6,regX:31}},{t:this.ikNode_33_1,p:{scaleX:1.6056,scaleY:1.6056,rotation:-7.8441,x:1037.15,y:567.8,regY:13.9}},{t:this.ikNode_31_1,p:{regY:5.3,scaleX:0.9964,scaleY:0.9964,rotation:166.0985,x:1164.25,y:660.6}},{t:this.ikNode_29_1,p:{regY:12.9,scaleX:0.9963,scaleY:0.9963,rotation:40.0611,x:1101.15,y:599.25,regX:13.6}},{t:this.ikNode_27_1,p:{scaleX:0.997,scaleY:0.997,rotation:-170.9833,x:1161.55,y:615.8,regX:45,regY:11.5}},{t:this.ikNode_19_1,p:{scaleX:0.997,scaleY:0.997,rotation:32.2874,x:1196.3,y:615.05,regY:18.4,regX:30.9}},{t:this.ikNode_17_1,p:{scaleX:0.9974,scaleY:0.9974,rotation:24.9643,x:1153.25,y:590.65,regY:23.8}},{t:this.ikNode_2_1,p:{scaleX:0.9984,scaleY:0.9984,rotation:12.8942,x:1106.1,y:575.4,regY:34.2}},{t:this.ikNode_3_1,p:{regX:63.6,rotation:18.4538,x:1070.3,y:546.4,scaleX:0.9976,scaleY:0.9976}},{t:this.ikNode_11_1,p:{regX:45.1,rotation:-9.3711,x:1066.55,y:588.05,scaleX:0.9973,scaleY:0.9973,regY:14.4}},{t:this.ikNode_13_1,p:{scaleX:0.9972,scaleY:0.9972,rotation:14.4135,x:1041.95,y:616.7,regY:6.3,regX:70}},{t:this.ikNode_15_1,p:{regY:0.5,scaleX:0.997,scaleY:0.997,rotation:40.827,x:992.75,y:632,regX:90.5}},{t:this.ikNode_21_1,p:{rotation:177.05,x:1219.7,y:638.25,regX:21.7,scaleX:0.9307,scaleY:0.9307,regY:10.2}},{t:this.ikNode_23_1,p:{regY:25.2,rotation:16.9195,x:1099.2,y:643.45,scaleX:0.9309,scaleY:0.9309,regX:13.1}},{t:this.ikNode_25_1,p:{scaleX:0.9302,scaleY:0.9302,rotation:154.0255,x:1201.4,y:655.05,regX:-0.6}}]},1).to({state:[{t:this.ikNode_37_1,p:{regX:38.5,scaleX:1.6055,scaleY:1.6055,rotation:-7.4454,x:968.15,y:634.85}},{t:this.ikNode_35_1,p:{scaleX:1.6057,scaleY:1.6057,rotation:-10.5875,x:1012,y:602.6,regX:31}},{t:this.ikNode_33_1,p:{scaleX:1.6056,scaleY:1.6056,rotation:-7.8441,x:1037.15,y:567.8,regY:13.9}},{t:this.ikNode_31_1,p:{regY:5.3,scaleX:0.9964,scaleY:0.9964,rotation:166.0985,x:1164.25,y:660.6}},{t:this.ikNode_29_1,p:{regY:12.9,scaleX:0.9963,scaleY:0.9963,rotation:40.0611,x:1101.15,y:599.25,regX:13.6}},{t:this.ikNode_27_1,p:{scaleX:0.997,scaleY:0.997,rotation:-170.9833,x:1161.55,y:615.8,regX:45,regY:11.5}},{t:this.ikNode_19_1,p:{scaleX:0.997,scaleY:0.997,rotation:32.2874,x:1196.3,y:615.05,regY:18.4,regX:30.9}},{t:this.ikNode_17_1,p:{scaleX:0.9974,scaleY:0.9974,rotation:24.9643,x:1153.25,y:590.65,regY:23.8}},{t:this.ikNode_2_1,p:{scaleX:0.9984,scaleY:0.9984,rotation:12.8942,x:1106.1,y:575.4,regY:34.2}},{t:this.ikNode_3_1,p:{regX:63.6,rotation:18.4538,x:1070.3,y:546.4,scaleX:0.9976,scaleY:0.9976}},{t:this.ikNode_11_1,p:{regX:45.1,rotation:-9.3711,x:1066.55,y:588.05,scaleX:0.9973,scaleY:0.9973,regY:14.4}},{t:this.ikNode_13_1,p:{scaleX:0.9972,scaleY:0.9972,rotation:14.4135,x:1041.95,y:616.7,regY:6.3,regX:70}},{t:this.ikNode_15_1,p:{regY:0.5,scaleX:0.997,scaleY:0.997,rotation:40.827,x:992.75,y:632,regX:90.5}},{t:this.ikNode_21_1,p:{rotation:177.05,x:1219.7,y:638.25,regX:21.7,scaleX:0.9307,scaleY:0.9307,regY:10.2}},{t:this.ikNode_23_1,p:{regY:25.2,rotation:16.9195,x:1099.2,y:643.45,scaleX:0.9309,scaleY:0.9309,regX:13.1}},{t:this.ikNode_25_1,p:{scaleX:0.9302,scaleY:0.9302,rotation:154.0255,x:1201.4,y:655.05,regX:-0.6}}]},1).to({state:[{t:this.ikNode_37_1,p:{regX:38.5,scaleX:1.6055,scaleY:1.6055,rotation:-7.4454,x:968.15,y:634.85}},{t:this.ikNode_35_1,p:{scaleX:1.6057,scaleY:1.6057,rotation:-10.5875,x:1012,y:602.6,regX:31}},{t:this.ikNode_33_1,p:{scaleX:1.6056,scaleY:1.6056,rotation:-7.8441,x:1037.15,y:567.8,regY:13.9}},{t:this.ikNode_31_1,p:{regY:5.3,scaleX:0.9964,scaleY:0.9964,rotation:166.0985,x:1164.25,y:660.6}},{t:this.ikNode_29_1,p:{regY:12.9,scaleX:0.9963,scaleY:0.9963,rotation:40.0611,x:1101.15,y:599.25,regX:13.6}},{t:this.ikNode_27_1,p:{scaleX:0.997,scaleY:0.997,rotation:-170.9833,x:1161.55,y:615.8,regX:45,regY:11.5}},{t:this.ikNode_19_1,p:{scaleX:0.997,scaleY:0.997,rotation:32.2874,x:1196.3,y:615.05,regY:18.4,regX:30.9}},{t:this.ikNode_17_1,p:{scaleX:0.9974,scaleY:0.9974,rotation:24.9643,x:1153.25,y:590.65,regY:23.8}},{t:this.ikNode_2_1,p:{scaleX:0.9984,scaleY:0.9984,rotation:12.8942,x:1106.1,y:575.4,regY:34.2}},{t:this.ikNode_3_1,p:{regX:63.6,rotation:18.4538,x:1070.3,y:546.4,scaleX:0.9976,scaleY:0.9976}},{t:this.ikNode_11_1,p:{regX:45.1,rotation:-9.3711,x:1066.55,y:588.05,scaleX:0.9973,scaleY:0.9973,regY:14.4}},{t:this.ikNode_13_1,p:{scaleX:0.9972,scaleY:0.9972,rotation:14.4135,x:1041.95,y:616.7,regY:6.3,regX:70}},{t:this.ikNode_15_1,p:{regY:0.5,scaleX:0.997,scaleY:0.997,rotation:40.827,x:992.7,y:632,regX:90.5}},{t:this.ikNode_21_1,p:{rotation:177.05,x:1219.7,y:638.25,regX:21.7,scaleX:0.9307,scaleY:0.9307,regY:10.2}},{t:this.ikNode_23_1,p:{regY:25.2,rotation:16.9195,x:1099.2,y:643.45,scaleX:0.9309,scaleY:0.9309,regX:13.1}},{t:this.ikNode_25_1,p:{scaleX:0.9302,scaleY:0.9302,rotation:154.0255,x:1201.4,y:655.05,regX:-0.6}}]},1).to({state:[{t:this.ikNode_37_1,p:{regX:38.5,scaleX:1.6055,scaleY:1.6055,rotation:-7.4454,x:968.15,y:634.85}},{t:this.ikNode_35_1,p:{scaleX:1.6057,scaleY:1.6057,rotation:-10.5875,x:1012,y:602.6,regX:31}},{t:this.ikNode_33_1,p:{scaleX:1.6056,scaleY:1.6056,rotation:-7.8441,x:1037.15,y:567.8,regY:13.9}},{t:this.ikNode_31_1,p:{regY:5.3,scaleX:0.9964,scaleY:0.9964,rotation:166.0985,x:1164.25,y:660.6}},{t:this.ikNode_29_1,p:{regY:12.9,scaleX:0.9963,scaleY:0.9963,rotation:40.0611,x:1101.15,y:599.25,regX:13.6}},{t:this.ikNode_27_1,p:{scaleX:0.997,scaleY:0.997,rotation:-170.9833,x:1161.55,y:615.8,regX:45,regY:11.5}},{t:this.ikNode_19_1,p:{scaleX:0.997,scaleY:0.997,rotation:32.2874,x:1196.3,y:615.05,regY:18.4,regX:30.9}},{t:this.ikNode_17_1,p:{scaleX:0.9974,scaleY:0.9974,rotation:24.9643,x:1153.25,y:590.65,regY:23.8}},{t:this.ikNode_2_1,p:{scaleX:0.9984,scaleY:0.9984,rotation:12.8942,x:1106.1,y:575.4,regY:34.2}},{t:this.ikNode_3_1,p:{regX:63.6,rotation:18.4538,x:1070.3,y:546.4,scaleX:0.9976,scaleY:0.9976}},{t:this.ikNode_11_1,p:{regX:45.1,rotation:-9.3711,x:1066.55,y:588.05,scaleX:0.9973,scaleY:0.9973,regY:14.4}},{t:this.ikNode_13_1,p:{scaleX:0.9972,scaleY:0.9972,rotation:14.4135,x:1041.95,y:616.7,regY:6.3,regX:70}},{t:this.ikNode_15_1,p:{regY:0.5,scaleX:0.997,scaleY:0.997,rotation:40.827,x:992.7,y:632,regX:90.5}},{t:this.ikNode_21_1,p:{rotation:177.05,x:1219.7,y:638.25,regX:21.7,scaleX:0.9307,scaleY:0.9307,regY:10.2}},{t:this.ikNode_23_1,p:{regY:25.2,rotation:16.9177,x:1099.2,y:643.5,scaleX:0.9309,scaleY:0.9309,regX:13.1}},{t:this.ikNode_25_1,p:{scaleX:0.9302,scaleY:0.9302,rotation:154.0255,x:1201.4,y:655.05,regX:-0.6}}]},1).to({state:[{t:this.ikNode_37_1,p:{regX:38.5,scaleX:1.6055,scaleY:1.6055,rotation:-7.4454,x:968.15,y:634.85}},{t:this.ikNode_35_1,p:{scaleX:1.6057,scaleY:1.6057,rotation:-10.5875,x:1012,y:602.6,regX:31}},{t:this.ikNode_33_1,p:{scaleX:1.6056,scaleY:1.6056,rotation:-7.8441,x:1037.15,y:567.8,regY:13.9}},{t:this.ikNode_31_1,p:{regY:5.3,scaleX:0.9964,scaleY:0.9964,rotation:166.0985,x:1164.25,y:660.6}},{t:this.ikNode_29_1,p:{regY:12.9,scaleX:0.9963,scaleY:0.9963,rotation:40.0611,x:1101.15,y:599.25,regX:13.6}},{t:this.ikNode_27_1,p:{scaleX:0.997,scaleY:0.997,rotation:-170.9833,x:1161.55,y:615.8,regX:45,regY:11.5}},{t:this.ikNode_19_1,p:{scaleX:0.997,scaleY:0.997,rotation:32.2874,x:1196.3,y:615.05,regY:18.4,regX:30.9}},{t:this.ikNode_17_1,p:{scaleX:0.9974,scaleY:0.9974,rotation:24.9643,x:1153.2,y:590.65,regY:23.8}},{t:this.ikNode_2_1,p:{scaleX:0.9984,scaleY:0.9984,rotation:12.8942,x:1106.1,y:575.4,regY:34.2}},{t:this.ikNode_3_1,p:{regX:63.6,rotation:18.4538,x:1070.3,y:546.4,scaleX:0.9976,scaleY:0.9976}},{t:this.ikNode_11_1,p:{regX:45.1,rotation:-9.3711,x:1066.55,y:588.05,scaleX:0.9973,scaleY:0.9973,regY:14.4}},{t:this.ikNode_13_1,p:{scaleX:0.9972,scaleY:0.9972,rotation:14.4135,x:1041.9,y:616.7,regY:6.3,regX:70}},{t:this.ikNode_15_1,p:{regY:0.5,scaleX:0.997,scaleY:0.997,rotation:40.827,x:992.7,y:631.95,regX:90.5}},{t:this.ikNode_21_1,p:{rotation:177.05,x:1219.7,y:638.25,regX:21.7,scaleX:0.9307,scaleY:0.9307,regY:10.2}},{t:this.ikNode_23_1,p:{regY:25.2,rotation:16.9177,x:1099.2,y:643.5,scaleX:0.9309,scaleY:0.9309,regX:13.1}},{t:this.ikNode_25_1,p:{scaleX:0.9302,scaleY:0.9302,rotation:154.0255,x:1201.4,y:655.05,regX:-0.6}}]},1).to({state:[{t:this.ikNode_37_1,p:{regX:38.5,scaleX:1.6055,scaleY:1.6055,rotation:-7.4454,x:968.15,y:634.85}},{t:this.ikNode_35_1,p:{scaleX:1.6057,scaleY:1.6057,rotation:-10.5875,x:1012,y:602.6,regX:31}},{t:this.ikNode_33_1,p:{scaleX:1.6056,scaleY:1.6056,rotation:-7.8441,x:1037.15,y:567.8,regY:13.9}},{t:this.ikNode_31_1,p:{regY:5.3,scaleX:0.9964,scaleY:0.9964,rotation:166.0985,x:1164.25,y:660.6}},{t:this.ikNode_29_1,p:{regY:12.9,scaleX:0.9963,scaleY:0.9963,rotation:40.0611,x:1101.15,y:599.25,regX:13.6}},{t:this.ikNode_27_1,p:{scaleX:0.997,scaleY:0.997,rotation:-170.9833,x:1161.55,y:615.8,regX:45,regY:11.5}},{t:this.ikNode_19_1,p:{scaleX:0.997,scaleY:0.997,rotation:32.2874,x:1196.3,y:615.05,regY:18.4,regX:30.9}},{t:this.ikNode_17_1,p:{scaleX:0.9974,scaleY:0.9974,rotation:24.9635,x:1153.2,y:590.65,regY:23.8}},{t:this.ikNode_2_1,p:{scaleX:0.9984,scaleY:0.9984,rotation:12.8942,x:1106.1,y:575.4,regY:34.2}},{t:this.ikNode_3_1,p:{regX:63.6,rotation:18.4538,x:1070.3,y:546.4,scaleX:0.9976,scaleY:0.9976}},{t:this.ikNode_11_1,p:{regX:45.1,rotation:-9.3711,x:1066.55,y:588.05,scaleX:0.9973,scaleY:0.9973,regY:14.4}},{t:this.ikNode_13_1,p:{scaleX:0.9972,scaleY:0.9972,rotation:14.4135,x:1041.9,y:616.7,regY:6.3,regX:70}},{t:this.ikNode_15_1,p:{regY:0.5,scaleX:0.997,scaleY:0.997,rotation:40.827,x:992.7,y:631.95,regX:90.5}},{t:this.ikNode_21_1,p:{rotation:177.05,x:1219.7,y:638.25,regX:21.7,scaleX:0.9307,scaleY:0.9307,regY:10.2}},{t:this.ikNode_23_1,p:{regY:25.2,rotation:16.9177,x:1099.2,y:643.5,scaleX:0.9309,scaleY:0.9309,regX:13.1}},{t:this.ikNode_25_1,p:{scaleX:0.9302,scaleY:0.9302,rotation:154.0255,x:1201.4,y:655.05,regX:-0.6}}]},1).to({state:[{t:this.ikNode_37_1,p:{regX:38.5,scaleX:1.6055,scaleY:1.6055,rotation:-7.4454,x:968.15,y:634.85}},{t:this.ikNode_35_1,p:{scaleX:1.6057,scaleY:1.6057,rotation:-10.5875,x:1012,y:602.6,regX:31}},{t:this.ikNode_33_1,p:{scaleX:1.6056,scaleY:1.6056,rotation:-7.8441,x:1037.15,y:567.8,regY:13.9}},{t:this.ikNode_31_1,p:{regY:5.3,scaleX:0.9964,scaleY:0.9964,rotation:166.0985,x:1164.25,y:660.6}},{t:this.ikNode_29_1,p:{regY:12.9,scaleX:0.9963,scaleY:0.9963,rotation:40.0611,x:1101.15,y:599.2,regX:13.6}},{t:this.ikNode_27_1,p:{scaleX:0.997,scaleY:0.997,rotation:-170.9833,x:1161.55,y:615.8,regX:45,regY:11.5}},{t:this.ikNode_19_1,p:{scaleX:0.997,scaleY:0.997,rotation:32.2874,x:1196.3,y:615.05,regY:18.4,regX:30.9}},{t:this.ikNode_17_1,p:{scaleX:0.9974,scaleY:0.9974,rotation:24.9635,x:1153.2,y:590.7,regY:23.8}},{t:this.ikNode_2_1,p:{scaleX:0.9984,scaleY:0.9984,rotation:12.8942,x:1106.1,y:575.4,regY:34.2}},{t:this.ikNode_3_1,p:{regX:63.6,rotation:18.4538,x:1070.3,y:546.4,scaleX:0.9976,scaleY:0.9976}},{t:this.ikNode_11_1,p:{regX:45.1,rotation:-9.3711,x:1066.55,y:588.05,scaleX:0.9973,scaleY:0.9973,regY:14.4}},{t:this.ikNode_13_1,p:{scaleX:0.9972,scaleY:0.9972,rotation:14.4135,x:1041.9,y:616.7,regY:6.3,regX:70}},{t:this.ikNode_15_1,p:{regY:0.5,scaleX:0.997,scaleY:0.997,rotation:40.827,x:992.7,y:631.95,regX:90.5}},{t:this.ikNode_21_1,p:{rotation:177.05,x:1219.7,y:638.25,regX:21.7,scaleX:0.9307,scaleY:0.9307,regY:10.2}},{t:this.ikNode_23_1,p:{regY:25.2,rotation:16.9177,x:1099.2,y:643.5,scaleX:0.9309,scaleY:0.9309,regX:13.1}},{t:this.ikNode_25_1,p:{scaleX:0.9302,scaleY:0.9302,rotation:154.0255,x:1201.4,y:655.05,regX:-0.6}}]},1).to({state:[{t:this.ikNode_37_1,p:{regX:38.5,scaleX:1.6055,scaleY:1.6055,rotation:-7.4454,x:968.15,y:634.85}},{t:this.ikNode_35_1,p:{scaleX:1.6057,scaleY:1.6057,rotation:-10.5875,x:1012.05,y:602.55,regX:31}},{t:this.ikNode_33_1,p:{scaleX:1.6056,scaleY:1.6056,rotation:-7.8441,x:1037.15,y:567.8,regY:13.9}},{t:this.ikNode_31_1,p:{regY:5.3,scaleX:0.9964,scaleY:0.9964,rotation:166.0985,x:1164.25,y:660.6}},{t:this.ikNode_29_1,p:{regY:12.9,scaleX:0.9963,scaleY:0.9963,rotation:40.0611,x:1101.15,y:599.2,regX:13.6}},{t:this.ikNode_27_1,p:{scaleX:0.997,scaleY:0.997,rotation:-170.9833,x:1161.55,y:615.8,regX:45,regY:11.5}},{t:this.ikNode_19_1,p:{scaleX:0.997,scaleY:0.997,rotation:32.2874,x:1196.3,y:615.05,regY:18.4,regX:30.9}},{t:this.ikNode_17_1,p:{scaleX:0.9974,scaleY:0.9974,rotation:24.9635,x:1153.2,y:590.7,regY:23.8}},{t:this.ikNode_2_1,p:{scaleX:0.9984,scaleY:0.9984,rotation:12.8942,x:1106.1,y:575.4,regY:34.2}},{t:this.ikNode_3_1,p:{regX:63.6,rotation:18.4538,x:1070.3,y:546.4,scaleX:0.9976,scaleY:0.9976}},{t:this.ikNode_11_1,p:{regX:45.1,rotation:-9.3711,x:1066.55,y:588.05,scaleX:0.9973,scaleY:0.9973,regY:14.4}},{t:this.ikNode_13_1,p:{scaleX:0.9972,scaleY:0.9972,rotation:14.4135,x:1041.9,y:616.7,regY:6.3,regX:70}},{t:this.ikNode_15_1,p:{regY:0.5,scaleX:0.997,scaleY:0.997,rotation:40.827,x:992.7,y:631.95,regX:90.5}},{t:this.ikNode_21_1,p:{rotation:177.05,x:1219.7,y:638.25,regX:21.7,scaleX:0.9307,scaleY:0.9307,regY:10.2}},{t:this.ikNode_23_1,p:{regY:25.2,rotation:16.9177,x:1099.2,y:643.5,scaleX:0.9309,scaleY:0.9309,regX:13.1}},{t:this.ikNode_25_1,p:{scaleX:0.9302,scaleY:0.9302,rotation:154.026,x:1201.35,y:655.05,regX:-0.6}}]},1).to({state:[{t:this.ikNode_37_1,p:{regX:38.5,scaleX:1.6055,scaleY:1.6055,rotation:-7.4454,x:968.15,y:634.85}},{t:this.ikNode_35_1,p:{scaleX:1.6057,scaleY:1.6057,rotation:-10.5875,x:1012.05,y:602.55,regX:31}},{t:this.ikNode_33_1,p:{scaleX:1.6056,scaleY:1.6056,rotation:-7.8441,x:1037.15,y:567.8,regY:13.9}},{t:this.ikNode_31_1,p:{regY:5.3,scaleX:0.9964,scaleY:0.9964,rotation:166.0985,x:1164.25,y:660.6}},{t:this.ikNode_29_1,p:{regY:12.9,scaleX:0.9963,scaleY:0.9963,rotation:40.0611,x:1101.15,y:599.2,regX:13.6}},{t:this.ikNode_27_1,p:{scaleX:0.997,scaleY:0.997,rotation:-170.9833,x:1161.55,y:615.8,regX:45,regY:11.5}},{t:this.ikNode_19_1,p:{scaleX:0.997,scaleY:0.997,rotation:32.2874,x:1196.3,y:615.05,regY:18.4,regX:30.9}},{t:this.ikNode_17_1,p:{scaleX:0.9974,scaleY:0.9974,rotation:24.9635,x:1153.2,y:590.7,regY:23.8}},{t:this.ikNode_2_1,p:{scaleX:0.9984,scaleY:0.9984,rotation:12.8942,x:1106.1,y:575.4,regY:34.2}},{t:this.ikNode_3_1,p:{regX:63.6,rotation:18.4538,x:1070.3,y:546.4,scaleX:0.9976,scaleY:0.9976}},{t:this.ikNode_11_1,p:{regX:45.1,rotation:-9.3711,x:1066.55,y:588.05,scaleX:0.9973,scaleY:0.9973,regY:14.4}},{t:this.ikNode_13_1,p:{scaleX:0.9972,scaleY:0.9972,rotation:14.4135,x:1041.9,y:616.7,regY:6.3,regX:70}},{t:this.ikNode_15_1,p:{regY:0.5,scaleX:0.997,scaleY:0.997,rotation:40.827,x:992.7,y:631.95,regX:90.5}},{t:this.ikNode_21_1,p:{rotation:177.05,x:1219.7,y:638.25,regX:21.7,scaleX:0.9307,scaleY:0.9307,regY:10.2}},{t:this.ikNode_23_1,p:{regY:25.2,rotation:16.9177,x:1099.2,y:643.5,scaleX:0.9309,scaleY:0.9309,regX:13.1}},{t:this.ikNode_25_1,p:{scaleX:0.9302,scaleY:0.9302,rotation:154.026,x:1201.35,y:655.05,regX:-0.6}}]},1).to({state:[{t:this.ikNode_37_1,p:{regX:38.5,scaleX:1.6055,scaleY:1.6055,rotation:-7.4454,x:968.15,y:634.85}},{t:this.ikNode_35_1,p:{scaleX:1.6057,scaleY:1.6057,rotation:-10.5875,x:1012.05,y:602.55,regX:31}},{t:this.ikNode_33_1,p:{scaleX:1.6056,scaleY:1.6056,rotation:-7.8441,x:1037.15,y:567.8,regY:13.9}},{t:this.ikNode_31_1,p:{regY:5.3,scaleX:0.9964,scaleY:0.9964,rotation:166.0985,x:1164.25,y:660.6}},{t:this.ikNode_29_1,p:{regY:12.9,scaleX:0.9963,scaleY:0.9963,rotation:40.0611,x:1101.15,y:599.2,regX:13.6}},{t:this.ikNode_27_1,p:{scaleX:0.997,scaleY:0.997,rotation:-170.9833,x:1161.55,y:615.8,regX:45,regY:11.5}},{t:this.ikNode_19_1,p:{scaleX:0.997,scaleY:0.997,rotation:32.2874,x:1196.3,y:615.05,regY:18.4,regX:30.9}},{t:this.ikNode_17_1,p:{scaleX:0.9974,scaleY:0.9974,rotation:24.9635,x:1153.2,y:590.7,regY:23.8}},{t:this.ikNode_2_1,p:{scaleX:0.9984,scaleY:0.9984,rotation:12.8942,x:1106.1,y:575.4,regY:34.2}},{t:this.ikNode_3_1,p:{regX:63.6,rotation:18.4538,x:1070.3,y:546.4,scaleX:0.9976,scaleY:0.9976}},{t:this.ikNode_11_1,p:{regX:45.1,rotation:-9.3711,x:1066.55,y:588.05,scaleX:0.9973,scaleY:0.9973,regY:14.4}},{t:this.ikNode_13_1,p:{scaleX:0.9972,scaleY:0.9972,rotation:14.4135,x:1041.9,y:616.7,regY:6.3,regX:70}},{t:this.ikNode_15_1,p:{regY:0.5,scaleX:0.997,scaleY:0.997,rotation:40.827,x:992.7,y:631.95,regX:90.5}},{t:this.ikNode_21_1,p:{rotation:177.05,x:1219.7,y:638.25,regX:21.7,scaleX:0.9307,scaleY:0.9307,regY:10.2}},{t:this.ikNode_23_1,p:{regY:25.2,rotation:16.9177,x:1099.2,y:643.5,scaleX:0.9309,scaleY:0.9309,regX:13.1}},{t:this.ikNode_25_1,p:{scaleX:0.9302,scaleY:0.9302,rotation:154.026,x:1201.35,y:655.05,regX:-0.6}}]},1).to({state:[{t:this.ikNode_37_1,p:{regX:38.5,scaleX:1.6055,scaleY:1.6055,rotation:-7.4454,x:968.15,y:634.85}},{t:this.ikNode_35_1,p:{scaleX:1.6057,scaleY:1.6057,rotation:-10.5875,x:1012.05,y:602.55,regX:31}},{t:this.ikNode_33_1,p:{scaleX:1.6056,scaleY:1.6056,rotation:-7.8441,x:1037.15,y:567.8,regY:13.9}},{t:this.ikNode_31_1,p:{regY:5.3,scaleX:0.9964,scaleY:0.9964,rotation:166.0985,x:1164.25,y:660.6}},{t:this.ikNode_29_1,p:{regY:12.9,scaleX:0.9963,scaleY:0.9963,rotation:40.0611,x:1101.15,y:599.2,regX:13.6}},{t:this.ikNode_27_1,p:{scaleX:0.997,scaleY:0.997,rotation:-170.9833,x:1161.55,y:615.8,regX:45,regY:11.5}},{t:this.ikNode_19_1,p:{scaleX:0.997,scaleY:0.997,rotation:32.2874,x:1196.3,y:615.05,regY:18.4,regX:30.9}},{t:this.ikNode_17_1,p:{scaleX:0.9974,scaleY:0.9974,rotation:24.9635,x:1153.2,y:590.7,regY:23.8}},{t:this.ikNode_2_1,p:{scaleX:0.9984,scaleY:0.9984,rotation:12.8942,x:1106.1,y:575.4,regY:34.2}},{t:this.ikNode_3_1,p:{regX:63.6,rotation:18.4538,x:1070.3,y:546.4,scaleX:0.9976,scaleY:0.9976}},{t:this.ikNode_11_1,p:{regX:45.1,rotation:-9.3711,x:1066.55,y:588.05,scaleX:0.9973,scaleY:0.9973,regY:14.4}},{t:this.ikNode_13_1,p:{scaleX:0.9972,scaleY:0.9972,rotation:14.4135,x:1041.9,y:616.7,regY:6.3,regX:70}},{t:this.ikNode_15_1,p:{regY:0.5,scaleX:0.997,scaleY:0.997,rotation:40.827,x:992.7,y:631.95,regX:90.5}},{t:this.ikNode_21_1,p:{rotation:177.05,x:1219.65,y:638.25,regX:21.7,scaleX:0.9307,scaleY:0.9307,regY:10.2}},{t:this.ikNode_23_1,p:{regY:25.2,rotation:16.9177,x:1099.2,y:643.5,scaleX:0.9309,scaleY:0.9309,regX:13.1}},{t:this.ikNode_25_1,p:{scaleX:0.9302,scaleY:0.9302,rotation:154.026,x:1201.35,y:655.05,regX:-0.6}}]},1).to({state:[{t:this.ikNode_37_1,p:{regX:38.5,scaleX:1.6055,scaleY:1.6055,rotation:-7.4454,x:968.15,y:634.85}},{t:this.ikNode_35_1,p:{scaleX:1.6057,scaleY:1.6057,rotation:-10.5875,x:1012.05,y:602.55,regX:31}},{t:this.ikNode_33_1,p:{scaleX:1.6056,scaleY:1.6056,rotation:-7.8441,x:1037.15,y:567.8,regY:13.9}},{t:this.ikNode_31_1,p:{regY:5.3,scaleX:0.9964,scaleY:0.9964,rotation:166.0985,x:1164.25,y:660.6}},{t:this.ikNode_29_1,p:{regY:12.9,scaleX:0.9963,scaleY:0.9963,rotation:40.0611,x:1101.15,y:599.2,regX:13.6}},{t:this.ikNode_27_1,p:{scaleX:0.997,scaleY:0.997,rotation:-170.9833,x:1161.55,y:615.8,regX:45,regY:11.5}},{t:this.ikNode_19_1,p:{scaleX:0.997,scaleY:0.997,rotation:32.2874,x:1196.3,y:615.05,regY:18.4,regX:30.9}},{t:this.ikNode_17_1,p:{scaleX:0.9974,scaleY:0.9974,rotation:24.9635,x:1153.2,y:590.7,regY:23.8}},{t:this.ikNode_2_1,p:{scaleX:0.9984,scaleY:0.9984,rotation:12.8942,x:1106.1,y:575.4,regY:34.2}},{t:this.ikNode_3_1,p:{regX:63.6,rotation:18.4538,x:1070.3,y:546.4,scaleX:0.9976,scaleY:0.9976}},{t:this.ikNode_11_1,p:{regX:45.1,rotation:-9.3711,x:1066.55,y:588.05,scaleX:0.9973,scaleY:0.9973,regY:14.4}},{t:this.ikNode_13_1,p:{scaleX:0.9972,scaleY:0.9972,rotation:14.4135,x:1041.9,y:616.7,regY:6.3,regX:70}},{t:this.ikNode_15_1,p:{regY:0.5,scaleX:0.997,scaleY:0.997,rotation:40.827,x:992.7,y:631.95,regX:90.5}},{t:this.ikNode_21_1,p:{rotation:177.05,x:1219.65,y:638.25,regX:21.7,scaleX:0.9307,scaleY:0.9307,regY:10.2}},{t:this.ikNode_23_1,p:{regY:25.2,rotation:16.9177,x:1099.2,y:643.5,scaleX:0.9309,scaleY:0.9309,regX:13.1}},{t:this.ikNode_25_1,p:{scaleX:0.9302,scaleY:0.9302,rotation:154.026,x:1201.35,y:655.05,regX:-0.6}}]},1).to({state:[{t:this.ikNode_37_1,p:{regX:38.5,scaleX:1.6055,scaleY:1.6055,rotation:-7.4454,x:968.15,y:634.85}},{t:this.ikNode_35_1,p:{scaleX:1.6057,scaleY:1.6057,rotation:-10.5875,x:1012.05,y:602.55,regX:31}},{t:this.ikNode_33_1,p:{scaleX:1.6056,scaleY:1.6056,rotation:-7.8441,x:1037.15,y:567.8,regY:13.9}},{t:this.ikNode_31_1,p:{regY:5.3,scaleX:0.9964,scaleY:0.9964,rotation:166.0985,x:1164.25,y:660.6}},{t:this.ikNode_29_1,p:{regY:12.9,scaleX:0.9963,scaleY:0.9963,rotation:40.0611,x:1101.15,y:599.2,regX:13.6}},{t:this.ikNode_27_1,p:{scaleX:0.997,scaleY:0.997,rotation:-170.9833,x:1161.55,y:615.8,regX:45,regY:11.5}},{t:this.ikNode_19_1,p:{scaleX:0.997,scaleY:0.997,rotation:32.2874,x:1196.3,y:615.05,regY:18.4,regX:30.9}},{t:this.ikNode_17_1,p:{scaleX:0.9974,scaleY:0.9974,rotation:24.9635,x:1153.2,y:590.7,regY:23.8}},{t:this.ikNode_2_1,p:{scaleX:0.9984,scaleY:0.9984,rotation:12.8942,x:1106.1,y:575.4,regY:34.2}},{t:this.ikNode_3_1,p:{regX:63.6,rotation:18.4538,x:1070.3,y:546.4,scaleX:0.9976,scaleY:0.9976}},{t:this.ikNode_11_1,p:{regX:45.1,rotation:-9.3711,x:1066.55,y:588.05,scaleX:0.9973,scaleY:0.9973,regY:14.4}},{t:this.ikNode_13_1,p:{scaleX:0.9972,scaleY:0.9972,rotation:14.4135,x:1041.9,y:616.7,regY:6.3,regX:70}},{t:this.ikNode_15_1,p:{regY:0.5,scaleX:0.997,scaleY:0.997,rotation:40.827,x:992.7,y:631.95,regX:90.5}},{t:this.ikNode_21_1,p:{rotation:177.05,x:1219.65,y:638.25,regX:21.7,scaleX:0.9307,scaleY:0.9307,regY:10.2}},{t:this.ikNode_23_1,p:{regY:25.2,rotation:16.9177,x:1099.2,y:643.5,scaleX:0.9309,scaleY:0.9309,regX:13.1}},{t:this.ikNode_25_1,p:{scaleX:0.9302,scaleY:0.9302,rotation:154.026,x:1201.35,y:655.05,regX:-0.6}}]},1).to({state:[{t:this.ikNode_37_1,p:{regX:38.5,scaleX:1.6055,scaleY:1.6055,rotation:-7.4454,x:968.15,y:634.85}},{t:this.ikNode_35_1,p:{scaleX:1.6057,scaleY:1.6057,rotation:-10.5875,x:1012.05,y:602.55,regX:31}},{t:this.ikNode_33_1,p:{scaleX:1.6056,scaleY:1.6056,rotation:-7.8441,x:1037.15,y:567.8,regY:13.9}},{t:this.ikNode_31_1,p:{regY:5.3,scaleX:0.9964,scaleY:0.9964,rotation:166.0985,x:1164.25,y:660.6}},{t:this.ikNode_29_1,p:{regY:12.9,scaleX:0.9963,scaleY:0.9963,rotation:40.0611,x:1101.15,y:599.2,regX:13.6}},{t:this.ikNode_27_1,p:{scaleX:0.997,scaleY:0.997,rotation:-170.9833,x:1161.55,y:615.8,regX:45,regY:11.5}},{t:this.ikNode_19_1,p:{scaleX:0.997,scaleY:0.997,rotation:32.2874,x:1196.3,y:615.05,regY:18.4,regX:30.9}},{t:this.ikNode_17_1,p:{scaleX:0.9974,scaleY:0.9974,rotation:24.9635,x:1153.2,y:590.7,regY:23.8}},{t:this.ikNode_2_1,p:{scaleX:0.9984,scaleY:0.9984,rotation:12.8942,x:1106.1,y:575.4,regY:34.2}},{t:this.ikNode_3_1,p:{regX:63.6,rotation:18.4538,x:1070.3,y:546.4,scaleX:0.9976,scaleY:0.9976}},{t:this.ikNode_11_1,p:{regX:45.1,rotation:-9.3711,x:1066.55,y:588.05,scaleX:0.9973,scaleY:0.9973,regY:14.4}},{t:this.ikNode_13_1,p:{scaleX:0.9972,scaleY:0.9972,rotation:14.4135,x:1041.9,y:616.7,regY:6.3,regX:70}},{t:this.ikNode_15_1,p:{regY:0.5,scaleX:0.997,scaleY:0.997,rotation:40.827,x:992.7,y:631.95,regX:90.5}},{t:this.ikNode_21_1,p:{rotation:177.05,x:1219.65,y:638.25,regX:21.7,scaleX:0.9307,scaleY:0.9307,regY:10.2}},{t:this.ikNode_23_1,p:{regY:25.2,rotation:16.9177,x:1099.2,y:643.5,scaleX:0.9309,scaleY:0.9309,regX:13.1}},{t:this.ikNode_25_1,p:{scaleX:0.9302,scaleY:0.9302,rotation:154.026,x:1201.35,y:655.05,regX:-0.6}}]},1).to({state:[{t:this.ikNode_37_1,p:{regX:38.5,scaleX:1.6055,scaleY:1.6055,rotation:-7.4454,x:968.15,y:634.85}},{t:this.ikNode_35_1,p:{scaleX:1.6057,scaleY:1.6057,rotation:-10.5875,x:1012.05,y:602.55,regX:31}},{t:this.ikNode_33_1,p:{scaleX:1.6056,scaleY:1.6056,rotation:-7.8441,x:1037.15,y:567.8,regY:13.9}},{t:this.ikNode_31_1,p:{regY:5.3,scaleX:0.9964,scaleY:0.9964,rotation:166.0985,x:1164.25,y:660.6}},{t:this.ikNode_29_1,p:{regY:12.9,scaleX:0.9963,scaleY:0.9963,rotation:40.0611,x:1101.15,y:599.2,regX:13.6}},{t:this.ikNode_27_1,p:{scaleX:0.997,scaleY:0.997,rotation:-170.9833,x:1161.55,y:615.8,regX:45,regY:11.5}},{t:this.ikNode_19_1,p:{scaleX:0.997,scaleY:0.997,rotation:32.2874,x:1196.3,y:615.05,regY:18.4,regX:30.9}},{t:this.ikNode_17_1,p:{scaleX:0.9974,scaleY:0.9974,rotation:24.9635,x:1153.2,y:590.7,regY:23.8}},{t:this.ikNode_2_1,p:{scaleX:0.9984,scaleY:0.9984,rotation:12.8942,x:1106.1,y:575.4,regY:34.2}},{t:this.ikNode_3_1,p:{regX:63.6,rotation:18.4538,x:1070.3,y:546.4,scaleX:0.9976,scaleY:0.9976}},{t:this.ikNode_11_1,p:{regX:45.1,rotation:-9.3711,x:1066.55,y:588.05,scaleX:0.9973,scaleY:0.9973,regY:14.4}},{t:this.ikNode_13_1,p:{scaleX:0.9972,scaleY:0.9972,rotation:14.4135,x:1041.9,y:616.7,regY:6.3,regX:70}},{t:this.ikNode_15_1,p:{regY:0.5,scaleX:0.997,scaleY:0.997,rotation:40.827,x:992.7,y:631.95,regX:90.5}},{t:this.ikNode_21_1,p:{rotation:177.05,x:1219.65,y:638.25,regX:21.7,scaleX:0.9307,scaleY:0.9307,regY:10.2}},{t:this.ikNode_23_1,p:{regY:25.2,rotation:16.9177,x:1099.2,y:643.5,scaleX:0.9309,scaleY:0.9309,regX:13.1}},{t:this.ikNode_25_1,p:{scaleX:0.9302,scaleY:0.9302,rotation:154.026,x:1201.35,y:655.05,regX:-0.6}}]},1).to({state:[{t:this.ikNode_37_1,p:{regX:38.5,scaleX:1.6055,scaleY:1.6055,rotation:-7.4454,x:968.15,y:634.85}},{t:this.ikNode_35_1,p:{scaleX:1.6057,scaleY:1.6057,rotation:-10.5875,x:1012.05,y:602.55,regX:31}},{t:this.ikNode_33_1,p:{scaleX:1.6056,scaleY:1.6056,rotation:-7.8441,x:1037.15,y:567.8,regY:13.9}},{t:this.ikNode_31_1,p:{regY:5.3,scaleX:0.9964,scaleY:0.9964,rotation:166.0985,x:1164.2,y:660.6}},{t:this.ikNode_29_1,p:{regY:12.9,scaleX:0.9963,scaleY:0.9963,rotation:40.0611,x:1101.15,y:599.2,regX:13.6}},{t:this.ikNode_27_1,p:{scaleX:0.997,scaleY:0.997,rotation:-170.9833,x:1161.55,y:615.8,regX:45,regY:11.5}},{t:this.ikNode_19_1,p:{scaleX:0.997,scaleY:0.997,rotation:32.2874,x:1196.25,y:615.05,regY:18.4,regX:30.9}},{t:this.ikNode_17_1,p:{scaleX:0.9974,scaleY:0.9974,rotation:24.9635,x:1153.2,y:590.7,regY:23.8}},{t:this.ikNode_2_1,p:{scaleX:0.9984,scaleY:0.9984,rotation:12.8942,x:1106.1,y:575.4,regY:34.2}},{t:this.ikNode_3_1,p:{regX:63.6,rotation:18.4538,x:1070.3,y:546.4,scaleX:0.9976,scaleY:0.9976}},{t:this.ikNode_11_1,p:{regX:45.1,rotation:-9.3711,x:1066.55,y:588.05,scaleX:0.9973,scaleY:0.9973,regY:14.4}},{t:this.ikNode_13_1,p:{scaleX:0.9972,scaleY:0.9972,rotation:14.4135,x:1041.9,y:616.7,regY:6.3,regX:70}},{t:this.ikNode_15_1,p:{regY:0.5,scaleX:0.997,scaleY:0.997,rotation:40.827,x:992.7,y:631.95,regX:90.5}},{t:this.ikNode_21_1,p:{rotation:177.05,x:1219.65,y:638.2,regX:21.7,scaleX:0.9307,scaleY:0.9307,regY:10.2}},{t:this.ikNode_23_1,p:{regY:25.2,rotation:16.9177,x:1099.2,y:643.5,scaleX:0.9309,scaleY:0.9309,regX:13.1}},{t:this.ikNode_25_1,p:{scaleX:0.9302,scaleY:0.9302,rotation:154.026,x:1201.35,y:655.05,regX:-0.6}}]},1).to({state:[{t:this.ikNode_37_1,p:{regX:38.5,scaleX:1.6055,scaleY:1.6055,rotation:-7.4454,x:968.15,y:634.85}},{t:this.ikNode_35_1,p:{scaleX:1.6057,scaleY:1.6057,rotation:-10.5875,x:1012.05,y:602.55,regX:31}},{t:this.ikNode_33_1,p:{scaleX:1.6056,scaleY:1.6056,rotation:-7.8441,x:1037.15,y:567.8,regY:13.9}},{t:this.ikNode_31_1,p:{regY:5.3,scaleX:0.9964,scaleY:0.9964,rotation:166.0985,x:1164.2,y:660.6}},{t:this.ikNode_29_1,p:{regY:12.9,scaleX:0.9963,scaleY:0.9963,rotation:40.0611,x:1101.15,y:599.2,regX:13.6}},{t:this.ikNode_27_1,p:{scaleX:0.997,scaleY:0.997,rotation:-170.9833,x:1161.55,y:615.8,regX:45,regY:11.5}},{t:this.ikNode_19_1,p:{scaleX:0.997,scaleY:0.997,rotation:32.2874,x:1196.25,y:615.05,regY:18.4,regX:30.9}},{t:this.ikNode_17_1,p:{scaleX:0.9974,scaleY:0.9974,rotation:24.9635,x:1153.2,y:590.7,regY:23.8}},{t:this.ikNode_2_1,p:{scaleX:0.9984,scaleY:0.9984,rotation:12.8942,x:1106.1,y:575.4,regY:34.2}},{t:this.ikNode_3_1,p:{regX:63.6,rotation:18.4538,x:1070.3,y:546.4,scaleX:0.9976,scaleY:0.9976}},{t:this.ikNode_11_1,p:{regX:45.1,rotation:-9.3702,x:1066.6,y:588,scaleX:0.9973,scaleY:0.9973,regY:14.4}},{t:this.ikNode_13_1,p:{scaleX:0.9972,scaleY:0.9972,rotation:14.4135,x:1041.9,y:616.7,regY:6.3,regX:70}},{t:this.ikNode_15_1,p:{regY:0.5,scaleX:0.997,scaleY:0.997,rotation:40.827,x:992.7,y:631.95,regX:90.5}},{t:this.ikNode_21_1,p:{rotation:177.05,x:1219.65,y:638.2,regX:21.7,scaleX:0.9307,scaleY:0.9307,regY:10.2}},{t:this.ikNode_23_1,p:{regY:25.2,rotation:16.9177,x:1099.2,y:643.5,scaleX:0.9309,scaleY:0.9309,regX:13.1}},{t:this.ikNode_25_1,p:{scaleX:0.9302,scaleY:0.9302,rotation:154.026,x:1201.35,y:655.05,regX:-0.6}}]},1).to({state:[{t:this.ikNode_37_1,p:{regX:38.5,scaleX:1.6055,scaleY:1.6055,rotation:-7.4443,x:968.15,y:634.85}},{t:this.ikNode_35_1,p:{scaleX:1.6057,scaleY:1.6057,rotation:-10.5875,x:1012.05,y:602.55,regX:31}},{t:this.ikNode_33_1,p:{scaleX:1.6056,scaleY:1.6056,rotation:-7.8441,x:1037.15,y:567.8,regY:13.9}},{t:this.ikNode_31_1,p:{regY:5.3,scaleX:0.9964,scaleY:0.9964,rotation:166.0985,x:1164.2,y:660.6}},{t:this.ikNode_29_1,p:{regY:12.9,scaleX:0.9963,scaleY:0.9963,rotation:40.0611,x:1101.15,y:599.2,regX:13.6}},{t:this.ikNode_27_1,p:{scaleX:0.997,scaleY:0.997,rotation:-170.9833,x:1161.55,y:615.8,regX:45,regY:11.5}},{t:this.ikNode_19_1,p:{scaleX:0.997,scaleY:0.997,rotation:32.2874,x:1196.25,y:615.05,regY:18.4,regX:30.9}},{t:this.ikNode_17_1,p:{scaleX:0.9974,scaleY:0.9974,rotation:24.9635,x:1153.2,y:590.7,regY:23.8}},{t:this.ikNode_2_1,p:{scaleX:0.9984,scaleY:0.9984,rotation:12.8942,x:1106.1,y:575.4,regY:34.2}},{t:this.ikNode_3_1,p:{regX:63.6,rotation:18.4538,x:1070.3,y:546.35,scaleX:0.9976,scaleY:0.9976}},{t:this.ikNode_11_1,p:{regX:45.1,rotation:-9.3702,x:1066.6,y:588,scaleX:0.9973,scaleY:0.9973,regY:14.4}},{t:this.ikNode_13_1,p:{scaleX:0.9972,scaleY:0.9972,rotation:14.4135,x:1041.9,y:616.7,regY:6.3,regX:70}},{t:this.ikNode_15_1,p:{regY:0.5,scaleX:0.997,scaleY:0.997,rotation:40.827,x:992.7,y:631.95,regX:90.5}},{t:this.ikNode_21_1,p:{rotation:177.0518,x:1219.65,y:638.25,regX:21.7,scaleX:0.9307,scaleY:0.9307,regY:10.2}},{t:this.ikNode_23_1,p:{regY:25.2,rotation:16.9177,x:1099.2,y:643.45,scaleX:0.9309,scaleY:0.9309,regX:13.1}},{t:this.ikNode_25_1,p:{scaleX:0.9302,scaleY:0.9302,rotation:154.026,x:1201.35,y:655.05,regX:-0.6}}]},1).to({state:[{t:this.ikNode_37_1,p:{regX:38.5,scaleX:1.6055,scaleY:1.6055,rotation:-7.4443,x:968.15,y:634.85}},{t:this.ikNode_35_1,p:{scaleX:1.6057,scaleY:1.6057,rotation:-10.5875,x:1012.05,y:602.55,regX:31}},{t:this.ikNode_33_1,p:{scaleX:1.6056,scaleY:1.6056,rotation:-7.8441,x:1037.15,y:567.8,regY:13.9}},{t:this.ikNode_31_1,p:{regY:5.3,scaleX:0.9964,scaleY:0.9964,rotation:166.0985,x:1164.2,y:660.6}},{t:this.ikNode_29_1,p:{regY:12.9,scaleX:0.9963,scaleY:0.9963,rotation:40.0611,x:1101.15,y:599.2,regX:13.6}},{t:this.ikNode_27_1,p:{scaleX:0.997,scaleY:0.997,rotation:-170.9833,x:1161.55,y:615.8,regX:45,regY:11.5}},{t:this.ikNode_19_1,p:{scaleX:0.997,scaleY:0.997,rotation:32.2874,x:1196.25,y:615.05,regY:18.4,regX:30.9}},{t:this.ikNode_17_1,p:{scaleX:0.9974,scaleY:0.9974,rotation:24.9635,x:1153.2,y:590.7,regY:23.8}},{t:this.ikNode_2_1,p:{scaleX:0.9984,scaleY:0.9984,rotation:12.8942,x:1106.1,y:575.4,regY:34.2}},{t:this.ikNode_3_1,p:{regX:63.6,rotation:18.4538,x:1070.3,y:546.35,scaleX:0.9976,scaleY:0.9976}},{t:this.ikNode_11_1,p:{regX:45.1,rotation:-9.3702,x:1066.6,y:588,scaleX:0.9973,scaleY:0.9973,regY:14.4}},{t:this.ikNode_13_1,p:{scaleX:0.9972,scaleY:0.9972,rotation:14.4135,x:1041.9,y:616.7,regY:6.3,regX:70}},{t:this.ikNode_15_1,p:{regY:0.5,scaleX:0.997,scaleY:0.997,rotation:40.827,x:992.7,y:631.95,regX:90.5}},{t:this.ikNode_21_1,p:{rotation:177.0518,x:1219.65,y:638.25,regX:21.7,scaleX:0.9307,scaleY:0.9307,regY:10.2}},{t:this.ikNode_23_1,p:{regY:25.2,rotation:16.9177,x:1099.2,y:643.45,scaleX:0.9309,scaleY:0.9309,regX:13.1}},{t:this.ikNode_25_1,p:{scaleX:0.9302,scaleY:0.9302,rotation:154.026,x:1201.35,y:655.05,regX:-0.6}}]},1).to({state:[{t:this.ikNode_37_1,p:{regX:38.5,scaleX:1.6055,scaleY:1.6055,rotation:-7.4443,x:968.15,y:634.85}},{t:this.ikNode_35_1,p:{scaleX:1.6057,scaleY:1.6057,rotation:-10.5875,x:1012.05,y:602.55,regX:31}},{t:this.ikNode_33_1,p:{scaleX:1.6056,scaleY:1.6056,rotation:-7.8441,x:1037.15,y:567.8,regY:13.9}},{t:this.ikNode_31_1,p:{regY:5.3,scaleX:0.9964,scaleY:0.9964,rotation:166.0985,x:1164.2,y:660.6}},{t:this.ikNode_29_1,p:{regY:12.9,scaleX:0.9963,scaleY:0.9963,rotation:40.0611,x:1101.15,y:599.2,regX:13.6}},{t:this.ikNode_27_1,p:{scaleX:0.997,scaleY:0.997,rotation:-170.9833,x:1161.55,y:615.8,regX:45,regY:11.5}},{t:this.ikNode_19_1,p:{scaleX:0.997,scaleY:0.997,rotation:32.2874,x:1196.25,y:615.05,regY:18.4,regX:30.9}},{t:this.ikNode_17_1,p:{scaleX:0.9974,scaleY:0.9974,rotation:24.9635,x:1153.2,y:590.7,regY:23.8}},{t:this.ikNode_2_1,p:{scaleX:0.9984,scaleY:0.9984,rotation:12.8942,x:1106.1,y:575.4,regY:34.2}},{t:this.ikNode_3_1,p:{regX:63.6,rotation:18.4538,x:1070.3,y:546.35,scaleX:0.9976,scaleY:0.9976}},{t:this.ikNode_11_1,p:{regX:45.1,rotation:-9.3702,x:1066.6,y:588,scaleX:0.9973,scaleY:0.9973,regY:14.4}},{t:this.ikNode_13_1,p:{scaleX:0.9972,scaleY:0.9972,rotation:14.4135,x:1041.9,y:616.7,regY:6.3,regX:70}},{t:this.ikNode_15_1,p:{regY:0.5,scaleX:0.997,scaleY:0.997,rotation:40.827,x:992.7,y:631.95,regX:90.5}},{t:this.ikNode_21_1,p:{rotation:177.0518,x:1219.65,y:638.25,regX:21.7,scaleX:0.9307,scaleY:0.9307,regY:10.2}},{t:this.ikNode_23_1,p:{regY:25.2,rotation:16.9177,x:1099.2,y:643.45,scaleX:0.9309,scaleY:0.9309,regX:13.1}},{t:this.ikNode_25_1,p:{scaleX:0.9302,scaleY:0.9302,rotation:154.026,x:1201.35,y:655,regX:-0.6}}]},1).to({state:[{t:this.ikNode_37_1,p:{regX:38.5,scaleX:1.6055,scaleY:1.6055,rotation:-7.4443,x:968.15,y:634.85}},{t:this.ikNode_35_1,p:{scaleX:1.6057,scaleY:1.6057,rotation:-10.5875,x:1012.05,y:602.55,regX:31}},{t:this.ikNode_33_1,p:{scaleX:1.6056,scaleY:1.6056,rotation:-7.8441,x:1037.15,y:567.8,regY:13.9}},{t:this.ikNode_31_1,p:{regY:5.3,scaleX:0.9964,scaleY:0.9964,rotation:166.0985,x:1164.2,y:660.6}},{t:this.ikNode_29_1,p:{regY:12.9,scaleX:0.9963,scaleY:0.9963,rotation:40.0611,x:1101.15,y:599.2,regX:13.6}},{t:this.ikNode_27_1,p:{scaleX:0.997,scaleY:0.997,rotation:-170.9833,x:1161.55,y:615.8,regX:45,regY:11.5}},{t:this.ikNode_19_1,p:{scaleX:0.997,scaleY:0.997,rotation:32.2874,x:1196.25,y:615.05,regY:18.4,regX:30.9}},{t:this.ikNode_17_1,p:{scaleX:0.9974,scaleY:0.9974,rotation:24.9635,x:1153.2,y:590.7,regY:23.8}},{t:this.ikNode_2_1,p:{scaleX:0.9984,scaleY:0.9984,rotation:12.8942,x:1106.1,y:575.4,regY:34.2}},{t:this.ikNode_3_1,p:{regX:63.6,rotation:18.4538,x:1070.3,y:546.35,scaleX:0.9976,scaleY:0.9976}},{t:this.ikNode_11_1,p:{regX:45.1,rotation:-9.3702,x:1066.6,y:588,scaleX:0.9973,scaleY:0.9973,regY:14.4}},{t:this.ikNode_13_1,p:{scaleX:0.9972,scaleY:0.9972,rotation:14.4135,x:1041.9,y:616.7,regY:6.3,regX:70}},{t:this.ikNode_15_1,p:{regY:0.5,scaleX:0.997,scaleY:0.997,rotation:40.827,x:992.7,y:631.95,regX:90.5}},{t:this.ikNode_21_1,p:{rotation:177.0518,x:1219.65,y:638.25,regX:21.7,scaleX:0.9307,scaleY:0.9307,regY:10.2}},{t:this.ikNode_23_1,p:{regY:25.2,rotation:16.9177,x:1099.2,y:643.45,scaleX:0.9309,scaleY:0.9309,regX:13.1}},{t:this.ikNode_25_1,p:{scaleX:0.9302,scaleY:0.9302,rotation:154.026,x:1201.35,y:655,regX:-0.6}}]},1).to({state:[{t:this.ikNode_37_1,p:{regX:38.5,scaleX:1.6055,scaleY:1.6055,rotation:-7.4443,x:968.15,y:634.85}},{t:this.ikNode_35_1,p:{scaleX:1.6057,scaleY:1.6057,rotation:-10.5875,x:1012.05,y:602.55,regX:31}},{t:this.ikNode_33_1,p:{scaleX:1.6056,scaleY:1.6056,rotation:-7.8441,x:1037.15,y:567.8,regY:13.9}},{t:this.ikNode_31_1,p:{regY:5.3,scaleX:0.9964,scaleY:0.9964,rotation:166.0985,x:1164.2,y:660.6}},{t:this.ikNode_29_1,p:{regY:12.9,scaleX:0.9963,scaleY:0.9963,rotation:40.0611,x:1101.15,y:599.2,regX:13.6}},{t:this.ikNode_27_1,p:{scaleX:0.997,scaleY:0.997,rotation:-170.9842,x:1161.55,y:615.8,regX:45,regY:11.5}},{t:this.ikNode_19_1,p:{scaleX:0.997,scaleY:0.997,rotation:32.2874,x:1196.25,y:615.05,regY:18.4,regX:30.9}},{t:this.ikNode_17_1,p:{scaleX:0.9974,scaleY:0.9974,rotation:24.9635,x:1153.2,y:590.7,regY:23.8}},{t:this.ikNode_2_1,p:{scaleX:0.9984,scaleY:0.9984,rotation:12.8942,x:1106.1,y:575.4,regY:34.2}},{t:this.ikNode_3_1,p:{regX:63.6,rotation:18.4538,x:1070.3,y:546.35,scaleX:0.9976,scaleY:0.9976}},{t:this.ikNode_11_1,p:{regX:45.1,rotation:-9.3702,x:1066.6,y:588,scaleX:0.9973,scaleY:0.9973,regY:14.4}},{t:this.ikNode_13_1,p:{scaleX:0.9972,scaleY:0.9972,rotation:14.4135,x:1041.9,y:616.7,regY:6.3,regX:70}},{t:this.ikNode_15_1,p:{regY:0.5,scaleX:0.997,scaleY:0.997,rotation:40.827,x:992.7,y:631.95,regX:90.5}},{t:this.ikNode_21_1,p:{rotation:177.0518,x:1219.65,y:638.25,regX:21.7,scaleX:0.9307,scaleY:0.9307,regY:10.2}},{t:this.ikNode_23_1,p:{regY:25.2,rotation:16.9177,x:1099.2,y:643.45,scaleX:0.9309,scaleY:0.9309,regX:13.1}},{t:this.ikNode_25_1,p:{scaleX:0.9302,scaleY:0.9302,rotation:154.026,x:1201.35,y:655,regX:-0.6}}]},1).to({state:[{t:this.ikNode_37_1,p:{regX:38.5,scaleX:1.6055,scaleY:1.6055,rotation:-7.4443,x:968.15,y:634.85}},{t:this.ikNode_35_1,p:{scaleX:1.6057,scaleY:1.6057,rotation:-10.5875,x:1012.05,y:602.55,regX:31}},{t:this.ikNode_33_1,p:{scaleX:1.6056,scaleY:1.6056,rotation:-7.8441,x:1037.15,y:567.8,regY:13.9}},{t:this.ikNode_31_1,p:{regY:5.3,scaleX:0.9964,scaleY:0.9964,rotation:166.0985,x:1164.2,y:660.6}},{t:this.ikNode_29_1,p:{regY:12.9,scaleX:0.9963,scaleY:0.9963,rotation:40.0611,x:1101.15,y:599.2,regX:13.6}},{t:this.ikNode_27_1,p:{scaleX:0.997,scaleY:0.997,rotation:-170.9842,x:1161.55,y:615.8,regX:45,regY:11.5}},{t:this.ikNode_19_1,p:{scaleX:0.997,scaleY:0.997,rotation:32.2874,x:1196.25,y:615.05,regY:18.4,regX:30.9}},{t:this.ikNode_17_1,p:{scaleX:0.9974,scaleY:0.9974,rotation:24.9635,x:1153.2,y:590.7,regY:23.8}},{t:this.ikNode_2_1,p:{scaleX:0.9984,scaleY:0.9984,rotation:12.8942,x:1106.1,y:575.4,regY:34.2}},{t:this.ikNode_3_1,p:{regX:63.6,rotation:18.4538,x:1070.3,y:546.35,scaleX:0.9976,scaleY:0.9976}},{t:this.ikNode_11_1,p:{regX:45.1,rotation:-9.3702,x:1066.6,y:588,scaleX:0.9973,scaleY:0.9973,regY:14.4}},{t:this.ikNode_13_1,p:{scaleX:0.9972,scaleY:0.9972,rotation:14.4135,x:1041.9,y:616.7,regY:6.3,regX:70}},{t:this.ikNode_15_1,p:{regY:0.5,scaleX:0.997,scaleY:0.997,rotation:40.827,x:992.7,y:631.95,regX:90.5}},{t:this.ikNode_21_1,p:{rotation:177.0518,x:1219.65,y:638.25,regX:21.7,scaleX:0.9307,scaleY:0.9307,regY:10.2}},{t:this.ikNode_23_1,p:{regY:25.2,rotation:16.9177,x:1099.15,y:643.45,scaleX:0.9309,scaleY:0.9309,regX:13.1}},{t:this.ikNode_25_1,p:{scaleX:0.9302,scaleY:0.9302,rotation:154.026,x:1201.35,y:655,regX:-0.6}}]},1).to({state:[{t:this.ikNode_37_1,p:{regX:38.5,scaleX:1.6055,scaleY:1.6055,rotation:-7.4443,x:968.15,y:634.85}},{t:this.ikNode_35_1,p:{scaleX:1.6057,scaleY:1.6057,rotation:-10.5875,x:1012.05,y:602.55,regX:31}},{t:this.ikNode_33_1,p:{scaleX:1.6056,scaleY:1.6056,rotation:-7.8441,x:1037.15,y:567.75,regY:13.9}},{t:this.ikNode_31_1,p:{regY:5.3,scaleX:0.9964,scaleY:0.9964,rotation:166.0985,x:1164.2,y:660.6}},{t:this.ikNode_29_1,p:{regY:12.9,scaleX:0.9963,scaleY:0.9963,rotation:40.0611,x:1101.15,y:599.2,regX:13.6}},{t:this.ikNode_27_1,p:{scaleX:0.997,scaleY:0.997,rotation:-170.9842,x:1161.55,y:615.8,regX:45,regY:11.5}},{t:this.ikNode_19_1,p:{scaleX:0.997,scaleY:0.997,rotation:32.2874,x:1196.25,y:615.05,regY:18.4,regX:30.9}},{t:this.ikNode_17_1,p:{scaleX:0.9974,scaleY:0.9974,rotation:24.9635,x:1153.2,y:590.7,regY:23.8}},{t:this.ikNode_2_1,p:{scaleX:0.9984,scaleY:0.9984,rotation:12.8942,x:1106.1,y:575.4,regY:34.2}},{t:this.ikNode_3_1,p:{regX:63.6,rotation:18.4538,x:1070.3,y:546.35,scaleX:0.9976,scaleY:0.9976}},{t:this.ikNode_11_1,p:{regX:45.1,rotation:-9.3702,x:1066.6,y:588,scaleX:0.9973,scaleY:0.9973,regY:14.4}},{t:this.ikNode_13_1,p:{scaleX:0.9972,scaleY:0.9972,rotation:14.4135,x:1041.9,y:616.7,regY:6.3,regX:70}},{t:this.ikNode_15_1,p:{regY:0.5,scaleX:0.997,scaleY:0.997,rotation:40.827,x:992.7,y:631.95,regX:90.5}},{t:this.ikNode_21_1,p:{rotation:177.0518,x:1219.65,y:638.25,regX:21.7,scaleX:0.9307,scaleY:0.9307,regY:10.2}},{t:this.ikNode_23_1,p:{regY:25.2,rotation:16.9177,x:1099.15,y:643.45,scaleX:0.9309,scaleY:0.9309,regX:13.1}},{t:this.ikNode_25_1,p:{scaleX:0.9302,scaleY:0.9302,rotation:154.026,x:1201.35,y:655,regX:-0.6}}]},1).to({state:[{t:this.ikNode_37_1,p:{regX:38.5,scaleX:1.6055,scaleY:1.6055,rotation:-7.4443,x:968.15,y:634.85}},{t:this.ikNode_35_1,p:{scaleX:1.6057,scaleY:1.6057,rotation:-10.5875,x:1012.05,y:602.55,regX:31}},{t:this.ikNode_33_1,p:{scaleX:1.6056,scaleY:1.6056,rotation:-7.8441,x:1037.15,y:567.75,regY:13.9}},{t:this.ikNode_31_1,p:{regY:5.3,scaleX:0.9964,scaleY:0.9964,rotation:166.0985,x:1164.2,y:660.6}},{t:this.ikNode_29_1,p:{regY:12.9,scaleX:0.9963,scaleY:0.9963,rotation:40.0611,x:1101.15,y:599.2,regX:13.6}},{t:this.ikNode_27_1,p:{scaleX:0.997,scaleY:0.997,rotation:-170.9842,x:1161.55,y:615.8,regX:45,regY:11.5}},{t:this.ikNode_19_1,p:{scaleX:0.997,scaleY:0.997,rotation:32.2874,x:1196.25,y:615.05,regY:18.4,regX:30.9}},{t:this.ikNode_17_1,p:{scaleX:0.9974,scaleY:0.9974,rotation:24.9635,x:1153.2,y:590.7,regY:23.8}},{t:this.ikNode_2_1,p:{scaleX:0.9984,scaleY:0.9984,rotation:12.8942,x:1106.1,y:575.4,regY:34.2}},{t:this.ikNode_3_1,p:{regX:63.6,rotation:18.4538,x:1070.25,y:546.35,scaleX:0.9976,scaleY:0.9976}},{t:this.ikNode_11_1,p:{regX:45.1,rotation:-9.3702,x:1066.6,y:588,scaleX:0.9973,scaleY:0.9973,regY:14.4}},{t:this.ikNode_13_1,p:{scaleX:0.9972,scaleY:0.9972,rotation:14.4135,x:1041.9,y:616.7,regY:6.3,regX:70}},{t:this.ikNode_15_1,p:{regY:0.5,scaleX:0.997,scaleY:0.997,rotation:40.827,x:992.7,y:631.95,regX:90.5}},{t:this.ikNode_21_1,p:{rotation:177.0518,x:1219.65,y:638.25,regX:21.7,scaleX:0.9307,scaleY:0.9307,regY:10.2}},{t:this.ikNode_23_1,p:{regY:25.2,rotation:16.9177,x:1099.15,y:643.45,scaleX:0.9309,scaleY:0.9309,regX:13.1}},{t:this.ikNode_25_1,p:{scaleX:0.9302,scaleY:0.9302,rotation:154.026,x:1201.35,y:655,regX:-0.6}}]},1).to({state:[{t:this.ikNode_37_1,p:{regX:38.5,scaleX:1.6055,scaleY:1.6055,rotation:-7.4443,x:968.15,y:634.8}},{t:this.ikNode_35_1,p:{scaleX:1.6057,scaleY:1.6057,rotation:-10.5875,x:1012.05,y:602.55,regX:31}},{t:this.ikNode_33_1,p:{scaleX:1.6056,scaleY:1.6056,rotation:-7.8441,x:1037.15,y:567.75,regY:13.9}},{t:this.ikNode_31_1,p:{regY:5.3,scaleX:0.9964,scaleY:0.9964,rotation:166.0985,x:1164.2,y:660.6}},{t:this.ikNode_29_1,p:{regY:12.9,scaleX:0.9963,scaleY:0.9963,rotation:40.0611,x:1101.15,y:599.2,regX:13.6}},{t:this.ikNode_27_1,p:{scaleX:0.997,scaleY:0.997,rotation:-170.9842,x:1161.55,y:615.8,regX:45,regY:11.5}},{t:this.ikNode_19_1,p:{scaleX:0.997,scaleY:0.997,rotation:32.2874,x:1196.25,y:615.05,regY:18.4,regX:30.9}},{t:this.ikNode_17_1,p:{scaleX:0.9974,scaleY:0.9974,rotation:24.9631,x:1153.2,y:590.7,regY:23.8}},{t:this.ikNode_2_1,p:{scaleX:0.9984,scaleY:0.9984,rotation:12.8942,x:1106.1,y:575.4,regY:34.2}},{t:this.ikNode_3_1,p:{regX:63.6,rotation:18.4538,x:1070.25,y:546.35,scaleX:0.9976,scaleY:0.9976}},{t:this.ikNode_11_1,p:{regX:45.1,rotation:-9.3702,x:1066.6,y:588,scaleX:0.9973,scaleY:0.9973,regY:14.4}},{t:this.ikNode_13_1,p:{scaleX:0.9972,scaleY:0.9972,rotation:14.4135,x:1041.9,y:616.7,regY:6.3,regX:70}},{t:this.ikNode_15_1,p:{regY:0.5,scaleX:0.997,scaleY:0.997,rotation:40.827,x:992.7,y:631.95,regX:90.5}},{t:this.ikNode_21_1,p:{rotation:177.0518,x:1219.65,y:638.25,regX:21.7,scaleX:0.9307,scaleY:0.9307,regY:10.2}},{t:this.ikNode_23_1,p:{regY:25.2,rotation:16.9177,x:1099.15,y:643.45,scaleX:0.9309,scaleY:0.9309,regX:13.1}},{t:this.ikNode_25_1,p:{scaleX:0.9302,scaleY:0.9302,rotation:154.0272,x:1201.4,y:655.05,regX:-0.6}}]},1).to({state:[{t:this.ikNode_37_1,p:{regX:38.5,scaleX:1.6055,scaleY:1.6055,rotation:-7.4443,x:968.15,y:634.8}},{t:this.ikNode_35_1,p:{scaleX:1.6057,scaleY:1.6057,rotation:-10.5875,x:1012.05,y:602.55,regX:31}},{t:this.ikNode_33_1,p:{scaleX:1.6056,scaleY:1.6056,rotation:-7.8441,x:1037.15,y:567.75,regY:13.9}},{t:this.ikNode_31_1,p:{regY:5.3,scaleX:0.9964,scaleY:0.9964,rotation:166.0985,x:1164.2,y:660.6}},{t:this.ikNode_29_1,p:{regY:12.9,scaleX:0.9963,scaleY:0.9963,rotation:40.0611,x:1101.15,y:599.2,regX:13.6}},{t:this.ikNode_27_1,p:{scaleX:0.997,scaleY:0.997,rotation:-170.9842,x:1161.55,y:615.8,regX:45,regY:11.5}},{t:this.ikNode_19_1,p:{scaleX:0.997,scaleY:0.997,rotation:32.2874,x:1196.25,y:615.05,regY:18.4,regX:30.9}},{t:this.ikNode_17_1,p:{scaleX:0.9974,scaleY:0.9974,rotation:24.9631,x:1153.2,y:590.7,regY:23.8}},{t:this.ikNode_2_1,p:{scaleX:0.9984,scaleY:0.9984,rotation:12.8942,x:1106.1,y:575.4,regY:34.2}},{t:this.ikNode_3_1,p:{regX:63.6,rotation:18.4538,x:1070.25,y:546.35,scaleX:0.9976,scaleY:0.9976}},{t:this.ikNode_11_1,p:{regX:45.1,rotation:-9.3702,x:1066.6,y:588,scaleX:0.9973,scaleY:0.9973,regY:14.4}},{t:this.ikNode_13_1,p:{scaleX:0.9972,scaleY:0.9972,rotation:14.4135,x:1041.9,y:616.7,regY:6.3,regX:70}},{t:this.ikNode_15_1,p:{regY:0.5,scaleX:0.997,scaleY:0.997,rotation:40.827,x:992.7,y:631.95,regX:90.5}},{t:this.ikNode_21_1,p:{rotation:177.0518,x:1219.65,y:638.25,regX:21.7,scaleX:0.9307,scaleY:0.9307,regY:10.2}},{t:this.ikNode_23_1,p:{regY:25.2,rotation:16.9177,x:1099.15,y:643.45,scaleX:0.9309,scaleY:0.9309,regX:13.1}},{t:this.ikNode_25_1,p:{scaleX:0.9302,scaleY:0.9302,rotation:154.0272,x:1201.4,y:655.05,regX:-0.6}}]},1).to({state:[{t:this.ikNode_37_1,p:{regX:38.5,scaleX:1.6055,scaleY:1.6055,rotation:-7.4443,x:968.15,y:634.8}},{t:this.ikNode_35_1,p:{scaleX:1.6057,scaleY:1.6057,rotation:-10.5875,x:1012.05,y:602.55,regX:31}},{t:this.ikNode_33_1,p:{scaleX:1.6056,scaleY:1.6056,rotation:-7.8441,x:1037.15,y:567.75,regY:13.9}},{t:this.ikNode_31_1,p:{regY:5.3,scaleX:0.9964,scaleY:0.9964,rotation:166.0985,x:1164.2,y:660.6}},{t:this.ikNode_29_1,p:{regY:12.9,scaleX:0.9963,scaleY:0.9963,rotation:40.0611,x:1101.15,y:599.2,regX:13.6}},{t:this.ikNode_27_1,p:{scaleX:0.997,scaleY:0.997,rotation:-170.9842,x:1161.55,y:615.8,regX:45,regY:11.5}},{t:this.ikNode_19_1,p:{scaleX:0.997,scaleY:0.997,rotation:32.2874,x:1196.25,y:615.05,regY:18.4,regX:30.9}},{t:this.ikNode_17_1,p:{scaleX:0.9974,scaleY:0.9974,rotation:24.9631,x:1153.2,y:590.7,regY:23.8}},{t:this.ikNode_2_1,p:{scaleX:0.9984,scaleY:0.9984,rotation:12.8942,x:1106.1,y:575.4,regY:34.2}},{t:this.ikNode_3_1,p:{regX:63.6,rotation:18.4538,x:1070.25,y:546.35,scaleX:0.9976,scaleY:0.9976}},{t:this.ikNode_11_1,p:{regX:45.1,rotation:-9.3702,x:1066.6,y:588,scaleX:0.9973,scaleY:0.9973,regY:14.4}},{t:this.ikNode_13_1,p:{scaleX:0.9972,scaleY:0.9972,rotation:14.4135,x:1041.85,y:616.7,regY:6.3,regX:70}},{t:this.ikNode_15_1,p:{regY:0.5,scaleX:0.997,scaleY:0.997,rotation:40.827,x:992.7,y:631.95,regX:90.5}},{t:this.ikNode_21_1,p:{rotation:177.0518,x:1219.65,y:638.25,regX:21.7,scaleX:0.9307,scaleY:0.9307,regY:10.2}},{t:this.ikNode_23_1,p:{regY:25.2,rotation:16.9177,x:1099.15,y:643.45,scaleX:0.9309,scaleY:0.9309,regX:13.1}},{t:this.ikNode_25_1,p:{scaleX:0.9302,scaleY:0.9302,rotation:154.0272,x:1201.4,y:655.05,regX:-0.6}}]},1).to({state:[{t:this.ikNode_37_1,p:{regX:38.5,scaleX:1.6055,scaleY:1.6055,rotation:-7.4443,x:968.15,y:634.8}},{t:this.ikNode_35_1,p:{scaleX:1.6057,scaleY:1.6057,rotation:-10.5875,x:1012.05,y:602.55,regX:31}},{t:this.ikNode_33_1,p:{scaleX:1.6056,scaleY:1.6056,rotation:-7.8441,x:1037.15,y:567.75,regY:13.9}},{t:this.ikNode_31_1,p:{regY:5.3,scaleX:0.9964,scaleY:0.9964,rotation:166.0985,x:1164.2,y:660.6}},{t:this.ikNode_29_1,p:{regY:12.9,scaleX:0.9963,scaleY:0.9963,rotation:40.0611,x:1101.15,y:599.2,regX:13.6}},{t:this.ikNode_27_1,p:{scaleX:0.997,scaleY:0.997,rotation:-170.9842,x:1161.55,y:615.8,regX:45,regY:11.5}},{t:this.ikNode_19_1,p:{scaleX:0.997,scaleY:0.997,rotation:32.2874,x:1196.25,y:615.05,regY:18.4,regX:30.9}},{t:this.ikNode_17_1,p:{scaleX:0.9974,scaleY:0.9974,rotation:24.9631,x:1153.2,y:590.7,regY:23.8}},{t:this.ikNode_2_1,p:{scaleX:0.9984,scaleY:0.9984,rotation:12.8942,x:1106.1,y:575.4,regY:34.2}},{t:this.ikNode_3_1,p:{regX:63.6,rotation:18.4538,x:1070.25,y:546.35,scaleX:0.9976,scaleY:0.9976}},{t:this.ikNode_11_1,p:{regX:45.1,rotation:-9.3702,x:1066.6,y:588,scaleX:0.9973,scaleY:0.9973,regY:14.4}},{t:this.ikNode_13_1,p:{scaleX:0.9972,scaleY:0.9972,rotation:14.4135,x:1041.85,y:616.7,regY:6.3,regX:70}},{t:this.ikNode_15_1,p:{regY:0.5,scaleX:0.997,scaleY:0.997,rotation:40.827,x:992.7,y:631.95,regX:90.5}},{t:this.ikNode_21_1,p:{rotation:177.0518,x:1219.65,y:638.25,regX:21.7,scaleX:0.9307,scaleY:0.9307,regY:10.2}},{t:this.ikNode_23_1,p:{regY:25.2,rotation:16.9177,x:1099.15,y:643.45,scaleX:0.9309,scaleY:0.9309,regX:13.1}},{t:this.ikNode_25_1,p:{scaleX:0.9302,scaleY:0.9302,rotation:154.0272,x:1201.4,y:655.05,regX:-0.6}}]},1).to({state:[{t:this.ikNode_37_1,p:{regX:38.5,scaleX:1.6055,scaleY:1.6055,rotation:-7.4443,x:968.15,y:634.8}},{t:this.ikNode_35_1,p:{scaleX:1.6057,scaleY:1.6057,rotation:-10.5875,x:1012,y:602.55,regX:31}},{t:this.ikNode_33_1,p:{scaleX:1.6056,scaleY:1.6056,rotation:-7.8441,x:1037.1,y:567.7,regY:13.9}},{t:this.ikNode_31_1,p:{regY:5.3,scaleX:0.9964,scaleY:0.9964,rotation:166.0985,x:1164.15,y:660.6}},{t:this.ikNode_29_1,p:{regY:12.9,scaleX:0.9963,scaleY:0.9963,rotation:40.0611,x:1101.1,y:599.1,regX:13.6}},{t:this.ikNode_27_1,p:{scaleX:0.997,scaleY:0.997,rotation:-170.9853,x:1161.45,y:615.75,regX:45,regY:11.5}},{t:this.ikNode_19_1,p:{scaleX:0.997,scaleY:0.997,rotation:32.2874,x:1196.2,y:615.05,regY:18.4,regX:30.9}},{t:this.ikNode_17_1,p:{scaleX:0.9974,scaleY:0.9974,rotation:24.9631,x:1153.15,y:590.6,regY:23.8}},{t:this.ikNode_2_1,p:{scaleX:0.9984,scaleY:0.9984,rotation:12.8942,x:1106.1,y:575.4,regY:34.2}},{t:this.ikNode_3_1,p:{regX:63.6,rotation:18.4538,x:1070.25,y:546.35,scaleX:0.9976,scaleY:0.9976}},{t:this.ikNode_11_1,p:{regX:45.1,rotation:-9.3696,x:1066.6,y:588,scaleX:0.9972,scaleY:0.9972,regY:14.4}},{t:this.ikNode_13_1,p:{scaleX:0.9972,scaleY:0.9972,rotation:14.4135,x:1041.8,y:616.7,regY:6.3,regX:70}},{t:this.ikNode_15_1,p:{regY:0.5,scaleX:0.997,scaleY:0.997,rotation:40.827,x:992.65,y:631.95,regX:90.5}},{t:this.ikNode_21_1,p:{rotation:177.0528,x:1219.55,y:638.1,regX:21.7,scaleX:0.9307,scaleY:0.9307,regY:10.2}},{t:this.ikNode_23_1,p:{regY:25.2,rotation:16.9165,x:1099.15,y:643.35,scaleX:0.9309,scaleY:0.9309,regX:13.1}},{t:this.ikNode_25_1,p:{scaleX:0.9302,scaleY:0.9302,rotation:154.0281,x:1201.3,y:655.05,regX:-0.6}}]},1).to({state:[{t:this.ikNode_37_1,p:{regX:38.5,scaleX:1.6055,scaleY:1.6055,rotation:-1.1431,x:981.3,y:652.35}},{t:this.ikNode_35_1,p:{scaleX:1.6057,scaleY:1.6057,rotation:-22.7941,x:1017.35,y:611.4,regX:31}},{t:this.ikNode_33_1,p:{scaleX:1.6056,scaleY:1.6056,rotation:-19.2243,x:1035.15,y:572.35,regY:13.9}},{t:this.ikNode_31_1,p:{regY:5.4,scaleX:0.9964,scaleY:0.9964,rotation:160.2672,x:1170.45,y:656.65}},{t:this.ikNode_29_1,p:{regY:12.9,scaleX:0.9963,scaleY:0.9963,rotation:34.226,x:1101.5,y:601.85,regX:13.6}},{t:this.ikNode_27_1,p:{scaleX:0.997,scaleY:0.997,rotation:-176.8161,x:1163.2,y:612.4,regX:45,regY:11.5}},{t:this.ikNode_19_1,p:{scaleX:0.997,scaleY:0.997,rotation:26.4035,x:1197.75,y:608.15,regY:18.4,regX:30.9}},{t:this.ikNode_17_1,p:{scaleX:0.9974,scaleY:0.9974,rotation:19.0542,x:1152.4,y:588.25,regY:23.8}},{t:this.ikNode_2_1,p:{scaleX:0.9984,scaleY:0.9984,rotation:10.7745,x:1104.5,y:575.95,regY:34.2}},{t:this.ikNode_3_1,p:{regX:63.6,rotation:6.7419,x:1065.15,y:551.75,scaleX:0.9976,scaleY:0.9976}},{t:this.ikNode_11_1,p:{regX:45,rotation:-26.6337,x:1065.1,y:589.15,scaleX:0.9972,scaleY:0.9972,regY:14.5}},{t:this.ikNode_13_1,p:{scaleX:0.9972,scaleY:0.9972,rotation:-7.9466,x:1050,y:623.8,regY:6.3,regX:70}},{t:this.ikNode_15_1,p:{regY:0.6,scaleX:0.997,scaleY:0.997,rotation:32.6608,x:1010.35,y:656.6,regX:90.4}},{t:this.ikNode_21_1,p:{rotation:172.2384,x:1223.05,y:629.05,regX:21.6,scaleX:0.9307,scaleY:0.9307,regY:10.2}},{t:this.ikNode_23_1,p:{regY:25.2,rotation:11.472,x:1103.45,y:644.55,scaleX:0.9308,scaleY:0.9308,regX:13.1}},{t:this.ikNode_25_1,p:{scaleX:0.9302,scaleY:0.9302,rotation:147.7446,x:1206.2,y:646.35,regX:-0.6}}]},1).to({state:[{t:this.ikNode_37_1,p:{regX:38.5,scaleX:1.6055,scaleY:1.6055,rotation:5.1569,x:997.05,y:666.5}},{t:this.ikNode_35_1,p:{scaleX:1.6057,scaleY:1.6057,rotation:-35.0013,x:1023.65,y:618.85,regX:31}},{t:this.ikNode_33_1,p:{scaleX:1.6056,scaleY:1.6056,rotation:-30.6049,x:1033.5,y:577,regY:13.9}},{t:this.ikNode_31_1,p:{regY:5.4,scaleX:0.9964,scaleY:0.9964,rotation:154.4337,x:1176.35,y:651.9}},{t:this.ikNode_29_1,p:{regY:12.9,scaleX:0.9964,scaleY:0.9964,rotation:28.3905,x:1102.15,y:604.45,regX:13.6}},{t:this.ikNode_27_1,p:{scaleX:0.997,scaleY:0.997,rotation:177.3544,x:1164.7,y:608.75,regX:45,regY:11.5}},{t:this.ikNode_19_1,p:{scaleX:0.997,scaleY:0.997,rotation:20.5184,x:1198.55,y:600.9,regY:18.4,regX:30.9}},{t:this.ikNode_17_1,p:{scaleX:0.9974,scaleY:0.9974,rotation:13.1438,x:1151.35,y:585.8,regY:23.8}},{t:this.ikNode_2_1,p:{scaleX:0.9984,scaleY:0.9984,rotation:8.6538,x:1102.85,y:576.4,regY:34.2}},{t:this.ikNode_3_1,p:{regX:63.6,rotation:-4.9668,x:1060.6,y:557.6,scaleX:0.9976,scaleY:0.9976}},{t:this.ikNode_11_1,p:{regX:45,rotation:-43.8977,x:1063.6,y:589.95,scaleX:0.9972,scaleY:0.9972,regY:14.4}},{t:this.ikNode_13_1,p:{scaleX:0.9972,scaleY:0.9972,rotation:-30.3121,x:1059.5,y:627.6,regY:6.2,regX:70}},{t:this.ikNode_15_1,p:{regY:0.6,scaleX:0.997,scaleY:0.997,rotation:24.4952,x:1035.3,y:673.05,regX:90.4}},{t:this.ikNode_21_1,p:{rotation:167.4239,x:1225.55,y:619.65,regX:21.6,scaleX:0.9307,scaleY:0.9307,regY:10.2}},{t:this.ikNode_23_1,p:{regY:25.2,rotation:6.024,x:1107.7,y:645.1,scaleX:0.9309,scaleY:0.9309,regX:13.2}},{t:this.ikNode_25_1,p:{scaleX:0.9302,scaleY:0.9302,rotation:141.4617,x:1210.15,y:637.25,regX:-0.6}}]},1).to({state:[{t:this.ikNode_37_1,p:{regX:38.5,scaleX:1.6055,scaleY:1.6055,rotation:11.458,x:1014.75,y:676.9}},{t:this.ikNode_35_1,p:{scaleX:1.6057,scaleY:1.6057,rotation:-47.2074,x:1030.65,y:624.55,regX:31}},{t:this.ikNode_33_1,p:{scaleX:1.6056,scaleY:1.6056,rotation:-41.985,x:1032,y:581.7,regY:13.9}},{t:this.ikNode_31_1,p:{regY:5.4,scaleX:0.9964,scaleY:0.9964,rotation:148.601,x:1181.8,y:646.5}},{t:this.ikNode_29_1,p:{regY:12.9,scaleX:0.9963,scaleY:0.9963,rotation:22.5555,x:1103.1,y:606.85,regX:13.6}},{t:this.ikNode_27_1,p:{scaleX:0.997,scaleY:0.997,rotation:171.5219,x:1165.85,y:604.8,regX:45,regY:11.5}},{t:this.ikNode_19_1,p:{scaleX:0.9971,scaleY:0.9971,rotation:14.6326,x:1198.6,y:593.45,regY:18.4,regX:30.9}},{t:this.ikNode_17_1,p:{scaleX:0.9974,scaleY:0.9974,rotation:7.2338,x:1150.2,y:583.5,regY:23.9}},{t:this.ikNode_2_1,p:{scaleX:0.9984,scaleY:0.9984,rotation:6.5326,x:1101.15,y:576.8,regY:34.2}},{t:this.ikNode_3_1,p:{regX:63.6,rotation:-16.6798,x:1056.85,y:563.85,scaleX:0.9975,scaleY:0.9975}},{t:this.ikNode_11_1,p:{regX:45,rotation:-61.1607,x:1062.2,y:591,scaleX:0.9972,scaleY:0.9972,regY:14.5}},{t:this.ikNode_13_1,p:{scaleX:0.9972,scaleY:0.9972,rotation:-52.6763,x:1069.4,y:628.25,regY:6.3,regX:70}},{t:this.ikNode_15_1,p:{regY:0.6,scaleX:0.997,scaleY:0.997,rotation:16.3306,x:1064.5,y:679.3,regX:90.5}},{t:this.ikNode_21_1,p:{rotation:162.6096,x:1227.1,y:609.85,regX:21.6,scaleX:0.9306,scaleY:0.9306,regY:10.2}},{t:this.ikNode_23_1,p:{regY:25.1,rotation:0.5776,x:1111.7,y:645,scaleX:0.9309,scaleY:0.9309,regX:13.1}},{t:this.ikNode_25_1,p:{scaleX:0.9302,scaleY:0.9302,rotation:135.1781,x:1213.15,y:627.55,regX:-0.6}}]},1).to({state:[{t:this.ikNode_37_1,p:{regX:38.5,scaleX:1.6055,scaleY:1.6055,rotation:17.7601,x:1033.35,y:683.2}},{t:this.ikNode_35_1,p:{scaleX:1.6057,scaleY:1.6057,rotation:-59.414,x:1037.95,y:628.65,regX:31}},{t:this.ikNode_33_1,p:{scaleX:1.6056,scaleY:1.6056,rotation:-53.365,x:1030.85,y:586.35,regY:13.9}},{t:this.ikNode_31_1,p:{regY:5.4,scaleX:0.9964,scaleY:0.9964,rotation:142.7689,x:1186.75,y:640.4}},{t:this.ikNode_29_1,p:{regY:12.9,scaleX:0.9963,scaleY:0.9963,rotation:16.7207,x:1104.55,y:608.95,regX:13.6}},{t:this.ikNode_27_1,p:{scaleX:0.997,scaleY:0.997,rotation:165.6894,x:1166.65,y:600.65,regX:45,regY:11.5}},{t:this.ikNode_19_1,p:{scaleX:0.9971,scaleY:0.9971,rotation:8.748,x:1198.05,y:585.9,regY:18.4,regX:30.9}},{t:this.ikNode_17_1,p:{scaleX:0.9975,scaleY:0.9975,rotation:1.3245,x:1148.8,y:580.9,regY:23.8}},{t:this.ikNode_2_1,p:{scaleX:0.9984,scaleY:0.9984,rotation:4.4116,x:1099.5,y:577.2,regY:34.2}},{t:this.ikNode_3_1,p:{regX:63.6,rotation:-28.3938,x:1053.8,y:570.35,scaleX:0.9975,scaleY:0.9975}},{t:this.ikNode_11_1,p:{regX:45,rotation:-78.4246,x:1060.6,y:592,scaleX:0.9972,scaleY:0.9972,regY:14.4}},{t:this.ikNode_13_1,p:{scaleX:0.9972,scaleY:0.9972,rotation:-75.0405,x:1078.75,y:625.25,regY:6.3,regX:70.1}},{t:this.ikNode_15_1,p:{regY:0.6,scaleX:0.997,scaleY:0.997,rotation:8.1642,x:1093.4,y:674.5,regX:90.4}},{t:this.ikNode_21_1,p:{rotation:157.7949,x:1227.75,y:599.8,regX:21.6,scaleX:0.9307,scaleY:0.9307,regY:10.2}},{t:this.ikNode_23_1,p:{regY:25.2,rotation:-4.8644,x:1115.9,y:644.7,scaleX:0.9309,scaleY:0.9309,regX:13.1}},{t:this.ikNode_25_1,p:{scaleX:0.9302,scaleY:0.9302,rotation:128.8947,x:1215.05,y:617.55,regX:-0.6}}]},1).to({state:[{t:this.ikNode_37_1,p:{regX:38.5,scaleX:1.6055,scaleY:1.6055,rotation:24.0612,x:1052.2,y:685.3}},{t:this.ikNode_35_1,p:{scaleX:1.6057,scaleY:1.6057,rotation:-71.6217,x:1045.1,y:630.95,regX:31}},{t:this.ikNode_33_1,p:{scaleX:1.6056,scaleY:1.6056,rotation:-64.7454,x:1029.85,y:590.95,regY:13.9}},{t:this.ikNode_31_1,p:{regY:5.4,scaleX:0.9964,scaleY:0.9964,rotation:136.9374,x:1191.2,y:633.65}},{t:this.ikNode_29_1,p:{regY:12.9,scaleX:0.9964,scaleY:0.9964,rotation:10.8847,x:1106,y:610.65,regX:13.6}},{t:this.ikNode_27_1,p:{scaleX:0.997,scaleY:0.997,rotation:159.8572,x:1167.1,y:596.2,regX:45,regY:11.5}},{t:this.ikNode_19_1,p:{scaleX:0.9971,scaleY:0.9971,rotation:2.8623,x:1196.8,y:578.2,regY:18.4,regX:30.9}},{t:this.ikNode_17_1,p:{scaleX:0.9974,scaleY:0.9974,rotation:-4.5812,x:1147.3,y:578.35,regY:23.8}},{t:this.ikNode_2_1,p:{scaleX:0.9984,scaleY:0.9984,rotation:2.2896,x:1097.9,y:577.65,regY:34.2}},{t:this.ikNode_3_1,p:{regX:63.6,rotation:-40.1069,x:1051.65,y:576.75,scaleX:0.9975,scaleY:0.9975}},{t:this.ikNode_11_1,p:{regX:45,rotation:-95.6823,x:1059.2,y:593,scaleX:0.9973,scaleY:0.9973,regY:14.4}},{t:this.ikNode_13_1,p:{scaleX:0.9972,scaleY:0.9972,rotation:-97.3999,x:1086.5,y:619.6,regY:6.3,regX:70}},{t:this.ikNode_15_1,p:{regY:0.6,scaleX:0.997,scaleY:0.997,rotation:0,x:1118.8,y:659.25,regX:90.5}},{t:this.ikNode_21_1,p:{rotation:152.9804,x:1227.65,y:589.65,regX:21.6,scaleX:0.9307,scaleY:0.9307,regY:10.2}},{t:this.ikNode_23_1,p:{regY:25.2,rotation:-10.3099,x:1119.85,y:643.85,scaleX:0.9309,scaleY:0.9309,regX:13.1}},{t:this.ikNode_25_1,p:{scaleX:0.9302,scaleY:0.9302,rotation:122.6123,x:1216,y:607.35,regX:-0.6}}]},1).to({state:[{t:this.ikNode_37_1,p:{regX:38.5,scaleX:1.6055,scaleY:1.6055,rotation:-1.5288,x:1043.15,y:671.4}},{t:this.ikNode_35_1,p:{scaleX:1.6057,scaleY:1.6057,rotation:-66.6552,x:1040.7,y:616.65,regX:31}},{t:this.ikNode_33_1,p:{scaleX:1.6056,scaleY:1.6056,rotation:-60.3518,x:1028.6,y:575.55,regY:13.9}},{t:this.ikNode_31_1,p:{regY:5.3,scaleX:0.9963,scaleY:0.9963,rotation:145.1505,x:1182.75,y:641.7}},{t:this.ikNode_29_1,p:{regY:12.9,scaleX:0.9963,scaleY:0.9963,rotation:19.099,x:1101.75,y:606.8,regX:13.6}},{t:this.ikNode_27_1,p:{scaleX:0.997,scaleY:0.997,rotation:168.0697,x:1164.3,y:601.2,regX:45,regY:11.5}},{t:this.ikNode_19_1,p:{scaleX:0.9971,scaleY:0.9971,rotation:11.0752,x:1196.25,y:587.6,regY:18.4,regX:30.9}},{t:this.ikNode_17_1,p:{scaleX:0.9974,scaleY:0.9974,rotation:3.6277,x:1147.2,y:580.85,regY:23.9}},{t:this.ikNode_2_1,p:{scaleX:0.9984,scaleY:0.9984,rotation:2.2896,x:1097.85,y:577.65,regY:34.2}},{t:this.ikNode_3_1,p:{regX:63.6,rotation:-25.3993,x:1052.65,y:568.25,scaleX:0.9976,scaleY:0.9976}},{t:this.ikNode_11_1,p:{regX:45.1,rotation:-89.5748,x:1058.4,y:590.65,scaleX:0.9973,scaleY:0.9973,regY:14.4}},{t:this.ikNode_13_1,p:{scaleX:0.9972,scaleY:0.9972,rotation:-97.2098,x:1082.75,y:620.05,regY:6.4,regX:70}},{t:this.ikNode_15_1,p:{regY:0.6,scaleX:0.997,scaleY:0.997,rotation:-2.6719,x:1114.85,y:659.85,regX:90.5}},{t:this.ikNode_21_1,p:{rotation:159.093,x:1225.6,y:602.15,regX:21.6,scaleX:0.9307,scaleY:0.9307,regY:10.2}},{t:this.ikNode_23_1,p:{regY:25.1,rotation:-3.2439,x:1112.7,y:644.5,scaleX:0.9309,scaleY:0.9309,regX:13.1}},{t:this.ikNode_25_1,p:{scaleX:0.9302,scaleY:0.9302,rotation:127.1953,x:1212.7,y:620.2,regX:-0.6}}]},1).to({state:[{t:this.ikNode_37_1,p:{regX:38.5,scaleX:1.6054,scaleY:1.6054,rotation:-27.1208,x:1037.5,y:656}},{t:this.ikNode_35_1,p:{scaleX:1.6057,scaleY:1.6057,rotation:-61.69,x:1039.85,y:601.45,regX:30.9}},{t:this.ikNode_33_1,p:{scaleX:1.6056,scaleY:1.6056,rotation:-55.9591,x:1031,y:559.45,regY:13.9}},{t:this.ikNode_31_1,p:{regY:5.4,scaleX:0.9964,scaleY:0.9964,rotation:153.3635,x:1173.4,y:648.4}},{t:this.ikNode_29_1,p:{regY:12.8,scaleX:0.9963,scaleY:0.9963,rotation:27.3107,x:1098.3,y:602.2,regX:13.6}},{t:this.ikNode_27_1,p:{scaleX:0.997,scaleY:0.997,rotation:176.2837,x:1161,y:605.65,regX:45,regY:11.5}},{t:this.ikNode_19_1,p:{scaleX:0.9971,scaleY:0.9971,rotation:19.2893,x:1194.5,y:596.7,regY:18.3,regX:30.9}},{t:this.ikNode_17_1,p:{scaleX:0.9975,scaleY:0.9975,rotation:11.8408,x:1147,y:583.05,regY:23.8}},{t:this.ikNode_2_1,p:{scaleX:0.9984,scaleY:0.9984,rotation:2.2896,x:1097.8,y:577.6,regY:34.2}},{t:this.ikNode_3_1,p:{regX:63.6,rotation:-10.693,x:1055.3,y:559.7,scaleX:0.9975,scaleY:0.9975}},{t:this.ikNode_11_1,p:{regX:45,rotation:-83.4642,x:1057.65,y:588.5,scaleX:0.9973,scaleY:0.9973,regY:14.4}},{t:this.ikNode_13_1,p:{scaleX:0.9972,scaleY:0.9972,rotation:-97.019,x:1078.7,y:620.25,regY:6.3,regX:70}},{t:this.ikNode_15_1,p:{regY:0.6,scaleX:0.997,scaleY:0.997,rotation:-5.3454,x:1110.75,y:660.1,regX:90.5}},{t:this.ikNode_21_1,p:{rotation:165.2048,x:1222.2,y:614.35,regX:21.7,scaleX:0.9306,scaleY:0.9306,regY:10.2}},{t:this.ikNode_23_1,p:{regY:25.2,rotation:3.8179,x:1105.45,y:644.5,scaleX:0.9309,scaleY:0.9309,regX:13.1}},{t:this.ikNode_25_1,p:{scaleX:0.9302,scaleY:0.9302,rotation:131.7809,x:1207.65,y:632.6,regX:-0.6}}]},1).to({state:[{t:this.ikNode_37_1,p:{regX:38.4,scaleX:1.6055,scaleY:1.6055,rotation:-52.7145,x:1035,y:641.95}},{t:this.ikNode_35_1,p:{scaleX:1.6057,scaleY:1.6057,rotation:-56.7246,x:1042.3,y:587.55,regX:31}},{t:this.ikNode_33_1,p:{scaleX:1.6056,scaleY:1.6056,rotation:-51.5663,x:1036.65,y:545.05,regY:13.9}},{t:this.ikNode_31_1,p:{regY:5.4,scaleX:0.9964,scaleY:0.9964,rotation:161.5762,x:1163.55,y:653.75}},{t:this.ikNode_29_1,p:{regY:12.8,scaleX:0.9963,scaleY:0.9963,rotation:35.5232,x:1095.8,y:597.3,regX:13.6}},{t:this.ikNode_27_1,p:{scaleX:0.997,scaleY:0.997,rotation:-175.5092,x:1157.25,y:609.75,regX:45,regY:11.5}},{t:this.ikNode_19_1,p:{scaleX:0.9971,scaleY:0.9971,rotation:27.5031,x:1191.7,y:605.75,regY:18.4,regX:30.9}},{t:this.ikNode_17_1,p:{scaleX:0.9974,scaleY:0.9974,rotation:20.0534,x:1146.7,y:585.25,regY:23.8}},{t:this.ikNode_2_1,p:{scaleX:0.9984,scaleY:0.9984,rotation:2.2896,x:1097.75,y:577.55,regY:34.2}},{t:this.ikNode_3_1,p:{regX:63.6,rotation:4.0094,x:1059.3,y:552.15,scaleX:0.9976,scaleY:0.9976}},{t:this.ikNode_11_1,p:{regX:45,rotation:-77.3515,x:1057.1,y:586.15,scaleX:0.9973,scaleY:0.9973,regY:14.4}},{t:this.ikNode_13_1,p:{scaleX:0.9972,scaleY:0.9972,rotation:-96.8274,x:1074.65,y:620.05,regY:6.3,regX:70}},{t:this.ikNode_15_1,p:{regY:0.6,scaleX:0.997,scaleY:0.997,rotation:-8.0199,x:1106.55,y:659.9,regX:90.5}},{t:this.ikNode_21_1,p:{rotation:171.3168,x:1217.55,y:626.1,regX:21.6,scaleX:0.9307,scaleY:0.9307,regY:10.2}},{t:this.ikNode_23_1,p:{regY:25.2,rotation:10.8852,x:1098.15,y:643.65,scaleX:0.9309,scaleY:0.9309,regX:13.1}},{t:this.ikNode_25_1,p:{scaleX:0.9302,scaleY:0.9302,rotation:136.3632,x:1201.05,y:644.4,regX:-0.6}}]},1).to({state:[{t:this.ikNode_37_1,p:{regX:38.4,scaleX:1.6054,scaleY:1.6054,rotation:-62.7413,x:1012.25,y:622.95}},{t:this.ikNode_35_1,p:{scaleX:1.6057,scaleY:1.6057,rotation:-59.016,x:1017.35,y:568.3,regX:31}},{t:this.ikNode_33_1,p:{scaleX:1.6056,scaleY:1.6056,rotation:-53.858,x:1010.05,y:526.1,regY:13.9}},{t:this.ikNode_31_1,p:{regY:5.4,scaleX:0.9963,scaleY:0.9963,rotation:125.7635,x:1140.45,y:629.65}},{t:this.ikNode_29_1,p:{regY:12.9,scaleX:0.9963,scaleY:0.9963,rotation:33.2313,x:1070.45,y:576.1,regX:13.6}},{t:this.ikNode_27_1,p:{scaleX:0.997,scaleY:0.997,rotation:-176.0824,x:1132.2,y:587.95,regX:44.9,regY:11.5}},{t:this.ikNode_19_1,p:{scaleX:0.9971,scaleY:0.9971,rotation:27.5031,x:1166.55,y:583.8,regY:18.4,regX:30.9}},{t:this.ikNode_17_1,p:{scaleX:0.9974,scaleY:0.9974,rotation:20.0534,x:1121.5,y:563.25,regY:23.8}},{t:this.ikNode_2_1,p:{scaleX:0.9984,scaleY:0.9984,rotation:2.2896,x:1072.55,y:555.6,regY:34.2}},{t:this.ikNode_3_1,p:{regX:63.6,rotation:4.0094,x:1034.1,y:530.2,scaleX:0.9976,scaleY:0.9976}},{t:this.ikNode_11_1,p:{regX:45.1,rotation:-77.6386,x:1031.95,y:564.35,scaleX:0.9972,scaleY:0.9972,regY:14.4}},{t:this.ikNode_13_1,p:{scaleX:0.9972,scaleY:0.9972,rotation:-97.1135,x:1049.7,y:598.25,regY:6.3,regX:70}},{t:this.ikNode_15_1,p:{regY:0.6,scaleX:0.997,scaleY:0.997,rotation:-34.0906,x:1081.7,y:637.9,regX:90.5}},{t:this.ikNode_21_1,p:{rotation:171.0297,x:1192.1,y:604.55,regX:21.6,scaleX:0.9307,scaleY:0.9307,regY:10.2}},{t:this.ikNode_23_1,p:{regY:25.1,rotation:9.7386,x:1072.75,y:622.6,scaleX:0.9308,scaleY:0.9308,regX:13.1}},{t:this.ikNode_25_1,p:{scaleX:0.9302,scaleY:0.9302,rotation:118.3148,x:1175.6,y:621.35,regX:-0.6}}]},1).to({state:[{t:this.ikNode_37_1,p:{regX:38.5,scaleX:1.6055,scaleY:1.6055,rotation:-72.7687,x:989.65,y:603.75}},{t:this.ikNode_35_1,p:{scaleX:1.6057,scaleY:1.6057,rotation:-61.3075,x:992.35,y:549.15,regX:31}},{t:this.ikNode_33_1,p:{scaleX:1.6056,scaleY:1.6056,rotation:-56.1502,x:983.5,y:507.15,regY:13.9}},{t:this.ikNode_31_1,p:{regY:5.4,scaleX:0.9964,scaleY:0.9964,rotation:89.9561,x:1117.25,y:605.65}},{t:this.ikNode_29_1,p:{regY:12.8,scaleX:0.9963,scaleY:0.9963,rotation:30.9394,x:1045.25,y:554.7,regX:13.6}},{t:this.ikNode_27_1,p:{scaleX:0.997,scaleY:0.997,rotation:-176.6545,x:1106.9,y:566.15,regX:45,regY:11.5}},{t:this.ikNode_19_1,p:{scaleX:0.9971,scaleY:0.9971,rotation:27.5031,x:1141.45,y:561.8,regY:18.4,regX:30.9}},{t:this.ikNode_17_1,p:{scaleX:0.9974,scaleY:0.9974,rotation:20.0534,x:1096.35,y:541.25,regY:23.8}},{t:this.ikNode_2_1,p:{scaleX:0.9984,scaleY:0.9984,rotation:2.2896,x:1047.3,y:533.6,regY:34.2}},{t:this.ikNode_3_1,p:{regX:63.6,rotation:4.0094,x:1008.85,y:508.3,scaleX:0.9976,scaleY:0.9976}},{t:this.ikNode_11_1,p:{regX:45.1,rotation:-77.9246,x:1006.7,y:542.55,scaleX:0.9972,scaleY:0.9972,regY:14.4}},{t:this.ikNode_13_1,p:{scaleX:0.9972,scaleY:0.9972,rotation:-97.3999,x:1024.85,y:576.55,regY:6.3,regX:70}},{t:this.ikNode_15_1,p:{regY:0.6,scaleX:0.997,scaleY:0.997,rotation:-60.161,x:1056.95,y:615.9,regX:90.5}},{t:this.ikNode_21_1,p:{rotation:170.7434,x:1166.45,y:583,regX:21.7,scaleX:0.9307,scaleY:0.9307,regY:10.2}},{t:this.ikNode_23_1,p:{regY:25.2,rotation:8.5931,x:1047.3,y:601.7,scaleX:0.9309,scaleY:0.9309,regX:13.1}},{t:this.ikNode_25_1,p:{scaleX:0.9302,scaleY:0.9302,rotation:100.2658,x:1150.1,y:598.35,regX:-0.6}}]},1).to({state:[{t:this.ikNode_37_1,p:{regX:38.5,scaleX:1.6055,scaleY:1.6055,rotation:-81.0763,x:962,y:577.8}},{t:this.ikNode_35_1,p:{scaleX:1.6057,scaleY:1.6057,rotation:-67.6107,x:958.6,y:523.3,regX:30.9}},{t:this.ikNode_33_1,p:{scaleX:1.6056,scaleY:1.6056,rotation:-60.1616,x:947,y:481.95,regY:13.9}},{t:this.ikNode_31_1,p:{regY:5.4,scaleX:0.9964,scaleY:0.9964,rotation:64.4596,x:1088.5,y:588}},{t:this.ikNode_29_1,p:{regY:12.9,scaleX:0.9963,scaleY:0.9963,rotation:23.4906,x:1010.7,y:547.15,regX:13.7}},{t:this.ikNode_27_1,p:{scaleX:0.997,scaleY:0.997,rotation:166.447,x:1072.85,y:540,regX:45,regY:11.5}},{t:this.ikNode_19_1,p:{scaleX:0.9971,scaleY:0.9971,rotation:27.5031,x:1106.65,y:531.8,regY:18.4,regX:30.9}},{t:this.ikNode_17_1,p:{scaleX:0.9974,scaleY:0.9974,rotation:20.0534,x:1061.55,y:511.3,regY:23.8}},{t:this.ikNode_2_1,p:{scaleX:0.9984,scaleY:0.9984,rotation:2.2896,x:1012.45,y:503.55,regY:34.2}},{t:this.ikNode_3_1,p:{regX:63.6,rotation:9.7382,x:972.85,y:480.2,scaleX:0.9975,scaleY:0.9975}},{t:this.ikNode_11_1,p:{regX:45,rotation:-73.3407,x:971.25,y:509.5,scaleX:0.9972,scaleY:0.9972,regY:14.3}},{t:this.ikNode_13_1,p:{scaleX:0.9972,scaleY:0.9972,rotation:-89.0961,x:986.8,y:544.7,regY:6.3,regX:70}},{t:this.ikNode_15_1,p:{regY:0.6,scaleX:0.997,scaleY:0.997,rotation:-69.9005,x:1012.75,y:588.3,regX:90.5}},{t:this.ikNode_21_1,p:{rotation:166.733,x:1131.6,y:553.05,regX:21.6,scaleX:0.9307,scaleY:0.9307,regY:10.3}},{t:this.ikNode_23_1,p:{regY:25.2,rotation:8.5931,x:1013.9,y:580.2,scaleX:0.9309,scaleY:0.9309,regX:13.1}},{t:this.ikNode_25_1,p:{scaleX:0.9302,scaleY:0.9302,rotation:74.485,x:1116.7,y:576.7,regX:-0.6}}]},1).to({state:[{t:this.ikNode_37_1,p:{regX:38.5,scaleX:1.6055,scaleY:1.6055,rotation:-89.3846,x:934.5,y:551.1}},{t:this.ikNode_35_1,p:{scaleX:1.6057,scaleY:1.6057,rotation:-73.9135,x:925.25,y:497.2,regX:31}},{t:this.ikNode_33_1,p:{scaleX:1.6056,scaleY:1.6056,rotation:-64.1726,x:910.85,y:456.95,regY:13.9}},{t:this.ikNode_31_1,p:{regY:5.4,scaleX:0.9964,scaleY:0.9964,rotation:38.9606,x:1064.1,y:569.1}},{t:this.ikNode_29_1,p:{regY:12.9,scaleX:0.9964,scaleY:0.9964,rotation:16.0418,x:981.7,y:538.6,regX:13.6}},{t:this.ikNode_27_1,p:{scaleX:0.997,scaleY:0.997,rotation:149.5437,x:1039.2,y:513.75,regX:45,regY:11.6}},{t:this.ikNode_19_1,p:{scaleX:0.9971,scaleY:0.9971,rotation:27.5031,x:1071.9,y:501.85,regY:18.4,regX:30.9}},{t:this.ikNode_17_1,p:{scaleX:0.9974,scaleY:0.9974,rotation:20.0534,x:1026.75,y:481.35,regY:23.8}},{t:this.ikNode_2_1,p:{scaleX:0.9984,scaleY:0.9984,rotation:2.2896,x:977.6,y:473.5,regY:34.2}},{t:this.ikNode_3_1,p:{regX:63.6,rotation:15.4695,x:936.85,y:452.2,scaleX:0.9975,scaleY:0.9975}},{t:this.ikNode_11_1,p:{regX:45.1,rotation:-68.757,x:936.3,y:476.3,scaleX:0.9973,scaleY:0.9973,regY:14.4}},{t:this.ikNode_13_1,p:{scaleX:0.9972,scaleY:0.9972,rotation:-80.7873,x:948.8,y:512.75,regY:6.3,regX:70}},{t:this.ikNode_15_1,p:{regY:0.6,scaleX:0.997,scaleY:0.997,rotation:-79.6411,x:968.15,y:559.65,regX:90.5}},{t:this.ikNode_21_1,p:{rotation:162.721,x:1096.7,y:523.3,regX:21.6,scaleX:0.9307,scaleY:0.9307,regY:10.2}},{t:this.ikNode_23_1,p:{regY:25.2,rotation:8.5931,x:981.05,y:558.55,scaleX:0.9309,scaleY:0.9309,regX:13.1}},{t:this.ikNode_25_1,p:{scaleX:0.9302,scaleY:0.9302,rotation:48.7025,x:1083.9,y:555.1,regX:-0.6}}]},1).to({state:[{t:this.ikNode_37_1,p:{regX:38.5,scaleX:1.6055,scaleY:1.6055,rotation:-85.6606,x:901.1,y:517.6}},{t:this.ikNode_35_1,p:{scaleX:1.6057,scaleY:1.6057,rotation:-71.6217,x:893.9,y:463.4,regX:31}},{t:this.ikNode_33_1,p:{scaleX:1.6056,scaleY:1.6056,rotation:-62.7395,x:880.55,y:422.8,regY:13.9}},{t:this.ikNode_31_1,p:{regY:5.4,scaleX:0.9964,scaleY:0.9964,rotation:42.6857,x:1053.4,y:562.5}},{t:this.ikNode_29_1,p:{regY:12.9,scaleX:0.9964,scaleY:0.9964,rotation:14.3233,x:970.3,y:534.5,regX:13.6}},{t:this.ikNode_27_1,p:{scaleX:0.997,scaleY:0.997,rotation:123.1859,x:1010.5,y:486.7,regX:45,regY:11.6}},{t:this.ikNode_19_1,p:{scaleX:0.9971,scaleY:0.9971,rotation:27.5031,x:1041,y:469.75,regY:18.4,regX:30.9}},{t:this.ikNode_17_1,p:{scaleX:0.9974,scaleY:0.9974,rotation:20.0534,x:995.85,y:449.4,regY:23.8}},{t:this.ikNode_2_1,p:{scaleX:0.9984,scaleY:0.9984,rotation:2.2896,x:946.75,y:441.45,regY:34.2}},{t:this.ikNode_3_1,p:{regX:63.6,rotation:15.4695,x:905.95,y:420.25,scaleX:0.9975,scaleY:0.9975}},{t:this.ikNode_11_1,p:{regX:45,rotation:-73.9136,x:905.9,y:448,scaleX:0.9973,scaleY:0.9973,regY:14.5}},{t:this.ikNode_13_1,p:{scaleX:0.9972,scaleY:0.9972,rotation:-85.3721,x:921.55,y:482.95,regY:6.3,regX:70.1}},{t:this.ikNode_15_1,p:{regY:0.6,scaleX:0.997,scaleY:0.997,rotation:-89.9562,x:944.55,y:528.2,regX:90.5}},{t:this.ikNode_21_1,p:{rotation:146.9644,x:1065.3,y:491.8,regX:21.6,scaleX:0.9307,scaleY:0.9307,regY:10.2}},{t:this.ikNode_23_1,p:{regY:25.2,rotation:5.4415,x:963.75,y:557.1,scaleX:0.9309,scaleY:0.9309,regX:13.2}},{t:this.ikNode_25_1,p:{scaleX:0.9302,scaleY:0.9302,rotation:42.3985,x:1065.95,y:547.85,regX:-0.6}}]},1).to({state:[{t:this.ikNode_37_1,p:{regX:38.5,scaleX:1.6054,scaleY:1.6054,rotation:-81.9363,x:867.65,y:484.1}},{t:this.ikNode_35_1,p:{scaleX:1.6057,scaleY:1.6057,rotation:-69.3292,x:862.6,y:429.7,regX:31}},{t:this.ikNode_33_1,p:{scaleX:1.6056,scaleY:1.6056,rotation:-61.3079,x:850.35,y:388.7,regY:13.9}},{t:this.ikNode_31_1,p:{regY:5.4,scaleX:0.9964,scaleY:0.9964,rotation:46.4104,x:1051.75,y:545.35}},{t:this.ikNode_29_1,p:{regY:12.9,scaleX:0.9964,scaleY:0.9964,rotation:12.6028,x:967.95,y:519.9,regX:13.6}},{t:this.ikNode_27_1,p:{scaleX:0.997,scaleY:0.997,rotation:96.8296,x:982.7,y:459.35,regX:45,regY:11.6}},{t:this.ikNode_19_1,p:{scaleX:0.9971,scaleY:0.9971,rotation:27.5031,x:1010.1,y:437.65,regY:18.4,regX:30.9}},{t:this.ikNode_17_1,p:{scaleX:0.9974,scaleY:0.9974,rotation:20.0534,x:964.95,y:417.45,regY:23.8}},{t:this.ikNode_2_1,p:{scaleX:0.9984,scaleY:0.9984,rotation:2.2896,x:915.85,y:409.4,regY:34.2}},{t:this.ikNode_3_1,p:{regX:63.6,rotation:15.4695,x:875,y:388.25,scaleX:0.9975,scaleY:0.9975}},{t:this.ikNode_11_1,p:{regX:45,rotation:-79.0707,x:875.6,y:419.4,scaleX:0.9972,scaleY:0.9972,regY:14.4}},{t:this.ikNode_13_1,p:{scaleX:0.9972,scaleY:0.9972,rotation:-89.9562,x:894.4,y:453.1,regY:6.3,regX:70}},{t:this.ikNode_15_1,p:{regY:0.6,scaleX:0.997,scaleY:0.997,rotation:-100.2653,x:921,y:496.25,regX:90.5}},{t:this.ikNode_21_1,p:{rotation:131.2076,x:1033.85,y:460.15,regX:21.6,scaleX:0.9306,scaleY:0.9306,regY:10.3}},{t:this.ikNode_23_1,p:{regY:25.2,rotation:2.2895,x:953.75,y:550.75,scaleX:0.9309,scaleY:0.9309,regX:13.1}},{t:this.ikNode_25_1,p:{scaleX:0.9301,scaleY:0.9301,rotation:36.0961,x:1055.5,y:536,regX:-0.5}}]},1).to({state:[{t:this.ikNode_37_1,p:{regX:38.5,scaleX:1.6055,scaleY:1.6055,rotation:-81.6502,x:847.4,y:449.65}},{t:this.ikNode_35_1,p:{scaleX:1.6057,scaleY:1.6057,rotation:-73.6268,x:838.25,y:395.75,regX:31}},{t:this.ikNode_33_1,p:{scaleX:1.6056,scaleY:1.6056,rotation:-67.6102,x:821.55,y:356.4,regY:13.9}},{t:this.ikNode_31_1,p:{regY:5.3,scaleX:0.9964,scaleY:0.9964,rotation:43.5455,x:1038.2,y:538.4}},{t:this.ikNode_29_1,p:{regY:12.9,scaleX:0.9963,scaleY:0.9963,rotation:24.3501,x:961.35,y:496.45,regX:13.6}},{t:this.ikNode_27_1,p:{scaleX:0.997,scaleY:0.997,rotation:78.4978,x:956.3,y:434.25,regX:45,regY:11.5}},{t:this.ikNode_19_1,p:{scaleX:0.9971,scaleY:0.9971,rotation:27.5031,x:980.1,y:408.65,regY:18.4,regX:30.9}},{t:this.ikNode_17_1,p:{scaleX:0.9974,scaleY:0.9974,rotation:20.0534,x:934.85,y:388.55,regY:23.8}},{t:this.ikNode_2_1,p:{scaleX:0.9984,scaleY:0.9984,rotation:2.2896,x:885.8,y:380.5,regY:34.2}},{t:this.ikNode_3_1,p:{regX:63.6,rotation:15.4695,x:844.9,y:359.4,scaleX:0.9975,scaleY:0.9975}},{t:this.ikNode_11_1,p:{regX:45,rotation:-91.958,x:848.6,y:398.75,scaleX:0.9973,scaleY:0.9973,regY:14.4}},{t:this.ikNode_13_1,p:{scaleX:0.9972,scaleY:0.9972,rotation:-99.1194,x:874.5,y:427.4,regY:6.3,regX:70}},{t:this.ikNode_15_1,p:{regY:0.6,scaleX:0.997,scaleY:0.997,rotation:-94.2489,x:907.5,y:465.85,regX:90.5}},{t:this.ikNode_21_1,p:{rotation:117.1684,x:1003.65,y:431.5,regX:21.7,scaleX:0.9307,scaleY:0.9307,regY:10.2}},{t:this.ikNode_23_1,p:{regY:25.2,rotation:5.1557,x:947.85,y:538.7,scaleX:0.9309,scaleY:0.9309,regX:13.1}},{t:this.ikNode_25_1,p:{scaleX:0.9302,scaleY:0.9302,rotation:39.5332,x:1050.05,y:528.95,regX:-0.6}}]},1).to({state:[{t:this.ikNode_37_1,p:{regX:38.5,scaleX:1.6055,scaleY:1.6055,rotation:-81.3628,x:826.95,y:414.5}},{t:this.ikNode_35_1,p:{scaleX:1.6057,scaleY:1.6057,rotation:-77.9248,x:813.8,y:361.45,regX:31}},{t:this.ikNode_33_1,p:{scaleX:1.6056,scaleY:1.6056,rotation:-73.9128,x:792.85,y:324.15,regY:13.9}},{t:this.ikNode_31_1,p:{regY:5.3,scaleX:0.9964,scaleY:0.9964,rotation:40.6801,x:1021.35,y:522.7}},{t:this.ikNode_29_1,p:{regY:12.9,scaleX:0.9963,scaleY:0.9963,rotation:36.097,x:954.85,y:466.1,regX:13.7}},{t:this.ikNode_27_1,p:{scaleX:0.997,scaleY:0.997,rotation:60.1629,x:930.4,y:408.55,regX:45,regY:11.5}},{t:this.ikNode_19_1,p:{scaleX:0.9971,scaleY:0.9971,rotation:27.5031,x:950.1,y:379.65,regY:18.4,regX:30.9}},{t:this.ikNode_17_1,p:{scaleX:0.9974,scaleY:0.9974,rotation:20.0534,x:904.8,y:359.7,regY:23.8}},{t:this.ikNode_2_1,p:{scaleX:0.9984,scaleY:0.9984,rotation:2.2896,x:855.7,y:351.65,regY:34.2}},{t:this.ikNode_3_1,p:{regX:63.6,rotation:15.4695,x:814.85,y:330.55,scaleX:0.9975,scaleY:0.9975}},{t:this.ikNode_11_1,p:{regX:45.1,rotation:-104.8496,x:823.45,y:377.25,scaleX:0.9972,scaleY:0.9972,regY:14.5}},{t:this.ikNode_13_1,p:{scaleX:0.9972,scaleY:0.9972,rotation:-108.2861,x:855,y:399.4,regY:6.3,regX:70}},{t:this.ikNode_15_1,p:{regY:0.6,scaleX:0.997,scaleY:0.997,rotation:-88.2372,x:893.6,y:432.2,regX:90.5}},{t:this.ikNode_21_1,p:{rotation:103.1301,x:973.4,y:402.7,regX:21.7,scaleX:0.9307,scaleY:0.9307,regY:10.2}},{t:this.ikNode_23_1,p:{regY:25.2,rotation:8.0208,x:945.25,y:520.3,scaleX:0.9308,scaleY:0.9308,regX:13.1}},{t:this.ikNode_25_1,p:{scaleX:0.9301,scaleY:0.9301,rotation:42.9718,x:1047.75,y:515.6,regX:-0.6}}]},1).to({state:[{t:this.ikNode_37_1,p:{regX:38.5,scaleX:1.6055,scaleY:1.6055,rotation:-81.3628,x:802.05,y:390.95}},{t:this.ikNode_35_1,p:{scaleX:1.6057,scaleY:1.6057,rotation:-77.9248,x:788.9,y:337.95,regX:31}},{t:this.ikNode_33_1,p:{scaleX:1.6056,scaleY:1.6056,rotation:-73.9128,x:768,y:300.7,regY:13.9}},{t:this.ikNode_31_1,p:{regY:5.3,scaleX:0.9964,scaleY:0.9964,rotation:37.8162,x:1004.95,y:506.8}},{t:this.ikNode_29_1,p:{regY:12.9,scaleX:0.9963,scaleY:0.9963,rotation:44.6904,x:947.65,y:440.9,regX:13.7}},{t:this.ikNode_27_1,p:{scaleX:0.997,scaleY:0.997,rotation:49.2738,x:912.8,y:388.95,regX:45,regY:11.5}},{t:this.ikNode_19_1,p:{scaleX:0.9971,scaleY:0.9971,rotation:27.5031,x:925.2,y:356.15,regY:18.4,regX:30.9}},{t:this.ikNode_17_1,p:{scaleX:0.9974,scaleY:0.9974,rotation:20.0534,x:879.85,y:336.35,regY:23.8}},{t:this.ikNode_2_1,p:{scaleX:0.9984,scaleY:0.9984,rotation:2.2896,x:830.75,y:328.3,regY:34.2}},{t:this.ikNode_3_1,p:{regX:63.6,rotation:15.4695,x:789.95,y:307.2,scaleX:0.9975,scaleY:0.9975}},{t:this.ikNode_11_1,p:{regX:45,rotation:-104.5629,x:791.95,y:342.25,scaleX:0.9972,scaleY:0.9972,regY:14.4}},{t:this.ikNode_13_1,p:{scaleX:0.9972,scaleY:0.9972,rotation:-104.2759,x:823.6,y:364.55,regY:6.4,regX:70}},{t:this.ikNode_15_1,p:{regY:0.6,scaleX:0.997,scaleY:0.997,rotation:-98.2599,x:859.65,y:399.9,regX:90.5}},{t:this.ikNode_21_1,p:{rotation:85.9468,x:948.1,y:379.5,regX:21.6,scaleX:0.9307,scaleY:0.9307,regY:10.2}},{t:this.ikNode_23_1,p:{regY:25.2,rotation:25.2095,x:956,y:500.25,scaleX:0.9308,scaleY:0.9308,regX:13.2}},{t:this.ikNode_25_1,p:{scaleX:0.9302,scaleY:0.9302,rotation:43.5444,x:1055.15,y:526,regX:-0.6}}]},1).to({state:[{t:this.ikNode_37_1,p:{regX:38.5,scaleX:1.6055,scaleY:1.6055,rotation:-81.3628,x:777.15,y:367.4}},{t:this.ikNode_35_1,p:{scaleX:1.6057,scaleY:1.6057,rotation:-77.9248,x:764.05,y:314.5,regX:31}},{t:this.ikNode_33_1,p:{scaleX:1.6056,scaleY:1.6056,rotation:-73.9128,x:743.1,y:277.3,regY:13.9}},{t:this.ikNode_31_1,p:{regY:5.4,scaleX:0.9964,scaleY:0.9964,rotation:34.95,x:986.6,y:485.65}},{t:this.ikNode_29_1,p:{regY:12.9,scaleX:0.9963,scaleY:0.9963,rotation:53.2849,x:939.85,y:411.75,regX:13.6}},{t:this.ikNode_27_1,p:{scaleX:0.997,scaleY:0.997,rotation:38.3884,x:896.05,y:367.45,regX:45,regY:11.5}},{t:this.ikNode_19_1,p:{scaleX:0.9971,scaleY:0.9971,rotation:27.5031,x:900.3,y:332.65,regY:18.4,regX:30.9}},{t:this.ikNode_17_1,p:{scaleX:0.9974,scaleY:0.9974,rotation:20.0534,x:854.9,y:313,regY:23.8}},{t:this.ikNode_2_1,p:{scaleX:0.9984,scaleY:0.9984,rotation:2.2896,x:805.85,y:304.95,regY:34.2}},{t:this.ikNode_3_1,p:{regX:63.6,rotation:15.4695,x:765.05,y:283.8,scaleX:0.9975,scaleY:0.9975}},{t:this.ikNode_11_1,p:{regX:45,rotation:-104.2767,x:764.65,y:305.7,scaleX:0.9973,scaleY:0.9973,regY:14.4}},{t:this.ikNode_13_1,p:{scaleX:0.9972,scaleY:0.9972,rotation:-100.2643,x:796,y:328.2,regY:6.3,regX:70}},{t:this.ikNode_15_1,p:{regY:0.5,scaleX:0.997,scaleY:0.997,rotation:-108.2871,x:829.5,y:366.1,regX:90.4}},{t:this.ikNode_21_1,p:{rotation:68.7566,x:922.85,y:356.35,regX:21.6,scaleX:0.9307,scaleY:0.9307,regY:10.2}},{t:this.ikNode_23_1,p:{regY:25.2,rotation:42.399,x:965.85,y:469.25,scaleX:0.9308,scaleY:0.9308,regX:13.1}},{t:this.ikNode_25_1,p:{scaleX:0.9301,scaleY:0.9301,rotation:44.1173,x:1052.95,y:523.25,regX:-0.6}}]},1).to({state:[{t:this.ikNode_37_1,p:{regX:38.5,scaleX:1.6055,scaleY:1.6055,rotation:-97.4043,x:714.05,y:297.85}},{t:this.ikNode_35_1,p:{scaleX:1.6057,scaleY:1.6057,rotation:-88.5243,x:691.5,y:248.35,regX:31}},{t:this.ikNode_33_1,p:{scaleX:1.6056,scaleY:1.6056,rotation:-89.3836,x:661.25,y:218.1,regY:13.9}},{t:this.ikNode_31_1,p:{regY:5.4,scaleX:0.9964,scaleY:0.9964,rotation:26.9284,x:928.85,y:415.55}},{t:this.ikNode_29_1,p:{regY:12.9,scaleX:0.9963,scaleY:0.9963,rotation:46.9816,x:874.45,y:347.1,regX:13.6}},{t:this.ikNode_27_1,p:{scaleX:0.997,scaleY:0.997,rotation:37.8151,x:830.05,y:303.3,regX:45,regY:11.6}},{t:this.ikNode_19_1,p:{scaleX:0.9971,scaleY:0.9971,rotation:27.5031,x:820.15,y:269.6,regY:18.4,regX:30.9}},{t:this.ikNode_17_1,p:{scaleX:0.9974,scaleY:0.9974,rotation:20.0534,x:774.7,y:250.05,regY:23.8}},{t:this.ikNode_2_1,p:{scaleX:0.9984,scaleY:0.9984,rotation:2.2896,x:725.65,y:242,regY:34.2}},{t:this.ikNode_3_1,p:{regX:63.6,rotation:-0.284,x:683.55,y:223.65,scaleX:0.9976,scaleY:0.9976}},{t:this.ikNode_11_1,p:{regX:45.1,rotation:-107.1415,x:684.5,y:244.45,scaleX:0.9972,scaleY:0.9972,regY:14.3}},{t:this.ikNode_13_1,p:{scaleX:0.9972,scaleY:0.9972,rotation:-102.8435,x:717.05,y:265.25,regY:6.3,regX:70}},{t:this.ikNode_15_1,p:{regY:0.6,scaleX:0.997,scaleY:0.997,rotation:-113.7302,x:752.15,y:301.5,regX:90.5}},{t:this.ikNode_21_1,p:{rotation:51.5667,x:844.35,y:291.7,regX:21.7,scaleX:0.9306,scaleY:0.9306,regY:10.2}},{t:this.ikNode_23_1,p:{regY:25.2,rotation:43.8324,x:918.8,y:386.8,scaleX:0.9308,scaleY:0.9308,regX:13.2}},{t:this.ikNode_25_1,p:{scaleX:0.9302,scaleY:0.9302,rotation:33.231,x:1004.35,y:442.95,regX:-0.6}}]},1).to({state:[{t:this.ikNode_37_1,p:{regX:38.5,scaleX:1.6055,scaleY:1.6055,rotation:-113.4468,x:648.25,y:224.45}},{t:this.ikNode_35_1,p:{scaleX:1.6057,scaleY:1.6057,rotation:-99.1219,x:616.95,y:180,regX:31}},{t:this.ikNode_33_1,p:{scaleX:1.6056,scaleY:1.6056,rotation:-104.8506,x:579.75,y:159.05,regY:13.9}},{t:this.ikNode_31_1,p:{regY:5.4,scaleX:0.9964,scaleY:0.9964,rotation:18.9064,x:869,y:339.05}},{t:this.ikNode_29_1,p:{regY:12.9,scaleX:0.9963,scaleY:0.9963,rotation:40.6793,x:807.3,y:276.95,regX:13.6}},{t:this.ikNode_27_1,p:{scaleX:0.997,scaleY:0.997,rotation:37.2422,x:762.55,y:233.5,regX:45,regY:11.5}},{t:this.ikNode_19_1,p:{scaleX:0.9971,scaleY:0.9971,rotation:27.5031,x:740,y:206.55,regY:18.4,regX:30.9}},{t:this.ikNode_17_1,p:{scaleX:0.9974,scaleY:0.9974,rotation:20.0534,x:694.5,y:187.15,regY:23.8}},{t:this.ikNode_2_1,p:{scaleX:0.9984,scaleY:0.9984,rotation:2.2896,x:645.5,y:179.1,regY:34.2}},{t:this.ikNode_3_1,p:{regX:63.6,rotation:-16.0411,x:602.2,y:163.65,scaleX:0.9976,scaleY:0.9976}},{t:this.ikNode_11_1,p:{regX:45,rotation:-110.0071,x:604.55,y:183.3,scaleX:0.9972,scaleY:0.9972,regY:14.4}},{t:this.ikNode_13_1,p:{scaleX:0.9972,scaleY:0.9972,rotation:-105.4224,x:637.85,y:202.3,regY:6.2,regX:70}},{t:this.ikNode_15_1,p:{regY:0.6,scaleX:0.997,scaleY:0.997,rotation:-119.1742,x:674.6,y:236.95,regX:90.5}},{t:this.ikNode_21_1,p:{rotation:34.3761,x:765.7,y:226.8,regX:21.6,scaleX:0.9307,scaleY:0.9307,regY:10.2}},{t:this.ikNode_23_1,p:{regY:25.2,rotation:45.2637,x:864.85,y:295.65,scaleX:0.9308,scaleY:0.9308,regX:13.1}},{t:this.ikNode_25_1,p:{scaleX:0.9302,scaleY:0.9302,rotation:22.344,x:949,y:353.95,regX:-0.6}}]},1).to({state:[{t:this.ikNode_37_1,p:{regX:38.5,scaleX:1.6055,scaleY:1.6055,rotation:-107.4297,x:639.05,y:234.65}},{t:this.ikNode_35_1,p:{scaleX:1.6057,scaleY:1.6057,rotation:-88.8113,x:616.15,y:185.4,regX:31}},{t:this.ikNode_33_1,p:{scaleX:1.6056,scaleY:1.6056,rotation:-107.7154,x:577.85,y:166.2,regY:13.9}},{t:this.ikNode_31_1,p:{regY:5.4,scaleX:0.9964,scaleY:0.9964,rotation:11.1704,x:887.3,y:314.35}},{t:this.ikNode_29_1,p:{regY:12.9,scaleX:0.9963,scaleY:0.9963,rotation:32.0848,x:817.1,y:262.2,regX:13.6}},{t:this.ikNode_27_1,p:{scaleX:0.997,scaleY:0.997,rotation:31.7983,x:768.4,y:223.15,regX:45,regY:11.5}},{t:this.ikNode_19_1,p:{scaleX:0.9971,scaleY:0.9971,rotation:16.0432,x:741.75,y:200.25,regY:18.4,regX:30.9}},{t:this.ikNode_17_1,p:{scaleX:0.9974,scaleY:0.9974,rotation:15.1824,x:694.8,y:184.8,regY:23.8}},{t:this.ikNode_2_1,p:{scaleX:0.9984,scaleY:0.9984,rotation:2.2896,x:645.5,y:179.05,regY:34.2}},{t:this.ikNode_3_1,p:{regX:63.6,rotation:-16.0411,x:602.15,y:163.6,scaleX:0.9976,scaleY:0.9976}},{t:this.ikNode_11_1,p:{regX:45,rotation:-99.6932,x:604.55,y:183.4,scaleX:0.9972,scaleY:0.9972,regY:14.4}},{t:this.ikNode_13_1,p:{scaleX:0.9972,scaleY:0.9972,rotation:-80.5019,x:634.05,y:208.1,regY:6.4,regX:70}},{t:this.ikNode_15_1,p:{regY:0.5,scaleX:0.997,scaleY:0.997,rotation:-66.1776,x:652.6,y:255,regX:90.5}},{t:this.ikNode_21_1,p:{rotation:24.6359,x:771.75,y:213.2,regX:21.6,scaleX:0.9306,scaleY:0.9306,regY:10.2}},{t:this.ikNode_23_1,p:{regY:25.2,rotation:35.2366,x:881.1,y:264.3,scaleX:0.9308,scaleY:0.9308,regX:13.1}},{t:this.ikNode_25_1,p:{scaleX:0.9302,scaleY:0.9302,rotation:12.6027,x:974.3,y:307.1,regX:-0.5}}]},1).to({state:[{t:this.ikNode_37_1,p:{regX:38.5,scaleX:1.6054,scaleY:1.6054,rotation:-101.4137,x:629.7,y:243.3}},{t:this.ikNode_35_1,p:{scaleX:1.6057,scaleY:1.6057,rotation:-78.4966,x:616.1,y:190.8,regX:31}},{t:this.ikNode_33_1,p:{scaleX:1.6056,scaleY:1.6056,rotation:-110.5799,x:576.9,y:173.6,regY:13.9}},{t:this.ikNode_31_1,p:{regY:5.3,scaleX:0.9964,scaleY:0.9964,rotation:3.4363,x:902.45,y:287.3}},{t:this.ikNode_29_1,p:{regY:12.9,scaleX:0.9963,scaleY:0.9963,rotation:23.4906,x:825.45,y:246.45,regX:13.7}},{t:this.ikNode_27_1,p:{scaleX:0.997,scaleY:0.997,rotation:26.356,x:773.1,y:212.05,regX:45,regY:11.5}},{t:this.ikNode_19_1,p:{scaleX:0.9971,scaleY:0.9971,rotation:4.582,x:743.1,y:193.75,regY:18.4,regX:30.9}},{t:this.ikNode_17_1,p:{scaleX:0.9974,scaleY:0.9974,rotation:10.3127,x:694.95,y:182.45,regY:23.8}},{t:this.ikNode_2_1,p:{scaleX:0.9984,scaleY:0.9984,rotation:2.2896,x:645.5,y:179.05,regY:34.2}},{t:this.ikNode_3_1,p:{regX:63.6,rotation:-16.0411,x:602.1,y:163.55,scaleX:0.9976,scaleY:0.9976}},{t:this.ikNode_11_1,p:{regX:45,rotation:-89.3846,x:604.65,y:183.5,scaleX:0.9973,scaleY:0.9973,regY:14.4}},{t:this.ikNode_13_1,p:{scaleX:0.9972,scaleY:0.9972,rotation:-55.5773,x:629.15,y:213.2,regY:6.4,regX:70}},{t:this.ikNode_15_1,p:{regY:0.6,scaleX:0.997,scaleY:0.997,rotation:-13.176,x:626.15,y:263.6,regX:90.4}},{t:this.ikNode_21_1,p:{rotation:14.8952,x:775.4,y:198.6,regX:21.6,scaleX:0.9306,scaleY:0.9306,regY:10.2}},{t:this.ikNode_23_1,p:{regY:25.2,rotation:25.2095,x:891.9,y:230.55,scaleX:0.9308,scaleY:0.9308,regX:13.2}},{t:this.ikNode_25_1,p:{scaleX:0.9302,scaleY:0.9302,rotation:2.8622,x:990.9,y:256.4,regX:-0.6}}]},1).to({state:[{t:this.ikNode_37_1,p:{regX:38.5,scaleX:1.6055,scaleY:1.6055,rotation:-32.0865,x:524.3,y:247.5}},{t:this.ikNode_35_1,p:{scaleX:1.6057,scaleY:1.6057,rotation:-17.1886,x:563.85,y:210.4,regX:31}},{t:this.ikNode_33_1,p:{scaleX:1.6056,scaleY:1.6056,rotation:-25.7819,x:577.35,y:169.7,regY:13.9}},{t:this.ikNode_31_1,p:{regY:5.4,scaleX:0.9964,scaleY:0.9964,rotation:-0.8581,x:912.75,y:266.85}},{t:this.ikNode_29_1,p:{regY:12.9,scaleX:0.9964,scaleY:0.9964,rotation:16.0418,x:830.95,y:236,regX:13.6}},{t:this.ikNode_27_1,p:{scaleX:0.997,scaleY:0.997,rotation:17.4746,x:774.05,y:210.2,regX:45,regY:11.5}},{t:this.ikNode_19_1,p:{scaleX:0.9971,scaleY:0.9971,rotation:4.582,x:743.1,y:193.7,regY:18.4,regX:30.9}},{t:this.ikNode_17_1,p:{scaleX:0.9974,scaleY:0.9974,rotation:10.3127,x:694.95,y:182.45,regY:23.8}},{t:this.ikNode_2_1,p:{scaleX:0.9984,scaleY:0.9984,rotation:2.2896,x:645.5,y:179.05,regY:34.2}},{t:this.ikNode_3_1,p:{regX:63.6,rotation:-10.8849,x:602.9,y:161.45,scaleX:0.9976,scaleY:0.9976}},{t:this.ikNode_11_1,p:{regX:45,rotation:-28.933,x:604.8,y:185.2,scaleX:0.9973,scaleY:0.9973,regY:14.4}},{t:this.ikNode_13_1,p:{scaleX:0.9972,scaleY:0.9972,rotation:-16.8996,x:591.25,y:221.05,regY:6.3,regX:70.1}},{t:this.ikNode_15_1,p:{regY:0.6,scaleX:0.997,scaleY:0.997,rotation:3.4359,x:557.25,y:258.55,regX:90.4}},{t:this.ikNode_21_1,p:{rotation:9.1653,x:775.4,y:198.25,regX:21.6,scaleX:0.9307,scaleY:0.9307,regY:10.2}},{t:this.ikNode_23_1,p:{regY:25.2,rotation:18.3331,x:894.55,y:218.35,scaleX:0.9308,scaleY:0.9308,regX:13.2}},{t:this.ikNode_25_1,p:{scaleX:0.9302,scaleY:0.9302,rotation:-4.2956,x:995.95,y:232.25,regX:-0.6}}]},1).to({state:[{t:this.ikNode_37_1,p:{regX:38.5,scaleX:1.6055,scaleY:1.6055,rotation:37.2397,x:484.5,y:139.35}},{t:this.ikNode_35_1,p:{scaleX:1.6057,scaleY:1.6057,rotation:44.1168,x:536.15,y:156.15,regX:31}},{t:this.ikNode_33_1,p:{scaleX:1.6056,scaleY:1.6056,rotation:59.0145,x:577.9,y:165.9,regY:13.9}},{t:this.ikNode_31_1,p:{regY:5.4,scaleX:0.9964,scaleY:0.9964,rotation:-5.1558,x:920.3,y:244.95}},{t:this.ikNode_29_1,p:{regY:12.8,scaleX:0.9964,scaleY:0.9964,rotation:8.5927,x:835.25,y:224.9,regX:13.6}},{t:this.ikNode_27_1,p:{scaleX:0.997,scaleY:0.997,rotation:8.593,x:774.95,y:208.35,regX:45,regY:11.5}},{t:this.ikNode_19_1,p:{scaleX:0.9971,scaleY:0.9971,rotation:4.582,x:743.1,y:193.65,regY:18.4,regX:30.9}},{t:this.ikNode_17_1,p:{scaleX:0.9974,scaleY:0.9974,rotation:10.3127,x:694.95,y:182.45,regY:23.8}},{t:this.ikNode_2_1,p:{scaleX:0.9984,scaleY:0.9984,rotation:2.2896,x:645.5,y:179.05,regY:34.2}},{t:this.ikNode_3_1,p:{regX:63.6,rotation:-5.7272,x:603.8,y:159.35,scaleX:0.9976,scaleY:0.9976}},{t:this.ikNode_11_1,p:{regX:45,rotation:31.5104,x:604.85,y:186.7,scaleX:0.9972,scaleY:0.9972,regY:14.4}},{t:this.ikNode_13_1,p:{scaleX:0.9972,scaleY:0.9972,rotation:21.7721,x:566.9,y:192.65,regY:6.3,regX:70}},{t:this.ikNode_15_1,p:{regY:0.5,scaleX:0.997,scaleY:0.997,rotation:20.0529,x:517.15,y:200.65,regX:90.4}},{t:this.ikNode_21_1,p:{rotation:3.4346,x:775.4,y:197.9,regX:21.6,scaleX:0.9307,scaleY:0.9307,regY:10.2}},{t:this.ikNode_23_1,p:{regY:25.2,rotation:11.4577,x:895.9,y:206,scaleX:0.9308,scaleY:0.9308,regX:13.1}},{t:this.ikNode_25_1,p:{scaleX:0.9302,scaleY:0.9302,rotation:-11.4574,x:998.3,y:207.6,regX:-0.6}}]},1).to({state:[{t:this.ikNode_37_1,p:{regX:38.5,scaleX:1.6055,scaleY:1.6055,rotation:37.2397,x:383.25,y:139.4}},{t:this.ikNode_35_1,p:{scaleX:1.6057,scaleY:1.6057,rotation:44.1168,x:434.85,y:156.2,regX:31}},{t:this.ikNode_33_1,p:{scaleX:1.6056,scaleY:1.6056,rotation:59.0145,x:476.65,y:165.8,regY:13.9}},{t:this.ikNode_31_1,p:{regY:5.4,scaleX:0.9964,scaleY:0.9964,rotation:-12.891,x:823.65,y:222.75}},{t:this.ikNode_29_1,p:{regY:12.9,scaleX:0.9964,scaleY:0.9964,rotation:1.4313,x:737.05,y:213.5,regX:13.7}},{t:this.ikNode_27_1,p:{scaleX:0.997,scaleY:0.997,rotation:0.5717,x:674.85,y:205.3,regX:45,regY:11.5}},{t:this.ikNode_19_1,p:{scaleX:0.9971,scaleY:0.9971,rotation:4.582,x:641.8,y:193.5,regY:18.4,regX:30.9}},{t:this.ikNode_17_1,p:{scaleX:0.9974,scaleY:0.9974,rotation:10.3127,x:593.65,y:182.4,regY:23.8}},{t:this.ikNode_2_1,p:{scaleX:0.9984,scaleY:0.9984,rotation:2.2896,x:544.25,y:179.05,regY:34.2}},{t:this.ikNode_3_1,p:{regX:63.6,rotation:-13.4627,x:501.2,y:162.45,scaleX:0.9976,scaleY:0.9976}},{t:this.ikNode_11_1,p:{regX:45,rotation:39.2473,x:503.05,y:182.7,scaleX:0.9972,scaleY:0.9972,regY:14.4}},{t:this.ikNode_13_1,p:{scaleX:0.9972,scaleY:0.9972,rotation:28.3611,x:464.65,y:183.55,regY:6.4,regX:70}},{t:this.ikNode_15_1,p:{regY:0.5,scaleX:0.997,scaleY:0.997,rotation:23.7773,x:414.4,y:185.85,regX:90.5}},{t:this.ikNode_21_1,p:{rotation:-4.5826,x:674.45,y:194.3,regX:21.6,scaleX:0.9307,scaleY:0.9307,regY:10.2}},{t:this.ikNode_23_1,p:{regY:25.2,rotation:5.1557,x:794.9,y:185.6,scaleX:0.9309,scaleY:0.9309,regX:13.1}},{t:this.ikNode_25_1,p:{scaleX:0.9302,scaleY:0.9302,rotation:-19.7666,x:896.85,y:175.85,regX:-0.6}}]},1).to({state:[{t:this.ikNode_37_1,p:{regX:38.5,scaleX:1.6055,scaleY:1.6055,rotation:37.2397,x:281.95,y:139.4}},{t:this.ikNode_35_1,p:{scaleX:1.6057,scaleY:1.6057,rotation:44.1168,x:333.55,y:156.2,regX:31}},{t:this.ikNode_33_1,p:{scaleX:1.6056,scaleY:1.6056,rotation:59.0145,x:375.45,y:165.7,regY:13.9}},{t:this.ikNode_31_1,p:{regY:5.4,scaleX:0.9964,scaleY:0.9964,rotation:-20.6242,x:724.3,y:200.15}},{t:this.ikNode_29_1,p:{regY:12.9,scaleX:0.9964,scaleY:0.9964,rotation:-5.728,x:637.25,y:201.8,regX:13.7}},{t:this.ikNode_27_1,p:{scaleX:0.997,scaleY:0.997,rotation:-7.4447,x:574.55,y:202.2,regX:45,regY:11.5}},{t:this.ikNode_19_1,p:{scaleX:0.9971,scaleY:0.9971,rotation:4.582,x:540.5,y:193.35,regY:18.4,regX:30.9}},{t:this.ikNode_17_1,p:{scaleX:0.9974,scaleY:0.9974,rotation:10.3127,x:492.35,y:182.35,regY:23.8}},{t:this.ikNode_2_1,p:{scaleX:0.9984,scaleY:0.9984,rotation:2.2896,x:443,y:179.1,regY:34.2}},{t:this.ikNode_3_1,p:{regX:63.5,rotation:-21.1981,x:398.8,y:165.7,scaleX:0.9975,scaleY:0.9975}},{t:this.ikNode_11_1,p:{regX:45,rotation:46.9816,x:401.6,y:178.65,scaleX:0.9972,scaleY:0.9972,regY:14.4}},{t:this.ikNode_13_1,p:{scaleX:0.9972,scaleY:0.9972,rotation:34.9495,x:363.6,y:174.35,regY:6.3,regX:70}},{t:this.ikNode_15_1,p:{regY:0.6,scaleX:0.997,scaleY:0.997,rotation:27.5016,x:313.25,y:170.9,regX:90.5}},{t:this.ikNode_21_1,p:{rotation:-12.603,x:573.05,y:190.65,regX:21.6,scaleX:0.9307,scaleY:0.9307,regY:10.2}},{t:this.ikNode_23_1,p:{regY:25.2,rotation:-1.1431,x:691.3,y:165.35,scaleX:0.9308,scaleY:0.9308,regX:13.1}},{t:this.ikNode_25_1,p:{scaleX:0.9302,scaleY:0.9302,rotation:-28.0746,x:791.45,y:144.5,regX:-0.6}}]},1).to({state:[{t:this.ikNode_37_1,p:{regX:38.5,scaleX:1.6055,scaleY:1.6055,rotation:17.1864,x:197.6,y:207.9}},{t:this.ikNode_35_1,p:{scaleX:1.6057,scaleY:1.6057,rotation:24.6362,x:251.7,y:206.55,regX:31}},{t:this.ikNode_33_1,p:{scaleX:1.6056,scaleY:1.6056,rotation:39.8194,x:294.55,y:201.7,regY:13.9}},{t:this.ikNode_31_1,p:{regY:5.4,scaleX:0.9964,scaleY:0.9964,rotation:-24.6352,x:644.95,y:220.55}},{t:this.ikNode_29_1,p:{regY:13,scaleX:0.9963,scaleY:0.9963,rotation:3.7223,x:558.45,y:207.9,regX:13.6}},{t:this.ikNode_27_1,p:{scaleX:0.997,scaleY:0.997,rotation:-3.7216,x:496.1,y:204.05,regX:45,regY:11.5}},{t:this.ikNode_19_1,p:{scaleX:0.9971,scaleY:0.9971,rotation:-2.8624,x:461.45,y:197.5,regY:18.3,regX:30.8}},{t:this.ikNode_17_1,p:{scaleX:0.9974,scaleY:0.9974,rotation:2.863,x:412.5,y:193.25,regY:23.8}},{t:this.ikNode_2_1,p:{scaleX:0.9984,scaleY:0.9984,rotation:-5.1542,x:363.05,y:196.45,regY:34.2}},{t:this.ikNode_3_1,p:{regX:63.6,rotation:-32.9438,x:317.35,y:191.6,scaleX:0.9976,scaleY:0.9976}},{t:this.ikNode_11_1,p:{regX:45,rotation:26.6411,x:323.5,y:208.15,scaleX:0.9972,scaleY:0.9972,regY:14.4}},{t:this.ikNode_13_1,p:{scaleX:0.9972,scaleY:0.9972,rotation:16.901,x:286.35,y:217.35,regY:6.3,regX:70}},{t:this.ikNode_15_1,p:{regY:0.6,scaleX:0.997,scaleY:0.997,rotation:8.593,x:237.25,y:229.45,regX:90.4}},{t:this.ikNode_21_1,p:{rotation:-7.159,x:494.05,y:193.85,regX:21.6,scaleX:0.9307,scaleY:0.9307,regY:10.2}},{t:this.ikNode_23_1,p:{regY:25.2,rotation:2.2895,x:614.1,y:180.05,scaleX:0.9309,scaleY:0.9309,regX:13.1}},{t:this.ikNode_25_1,p:{scaleX:0.9302,scaleY:0.9302,rotation:-37.8147,x:715.45,y:164.95,regX:-0.6}}]},1).to({state:[{t:this.ikNode_37_1,p:{regX:38.5,scaleX:1.6055,scaleY:1.6055,rotation:-2.866,x:129.25,y:275.35}},{t:this.ikNode_35_1,p:{scaleX:1.6057,scaleY:1.6057,rotation:5.1544,x:179.8,y:256.2,regX:31}},{t:this.ikNode_33_1,p:{scaleX:1.6056,scaleY:1.6056,rotation:20.6251,x:218.8,y:237.2,regY:13.9}},{t:this.ikNode_31_1,p:{regY:5.4,scaleX:0.9964,scaleY:0.9964,rotation:-28.6472,x:560.95,y:240.6}},{t:this.ikNode_29_1,p:{regY:12.9,scaleX:0.9963,scaleY:0.9963,rotation:13.176,x:477.7,y:213.75,regX:13.6}},{t:this.ikNode_27_1,p:{scaleX:0.997,scaleY:0.997,rotation:0,x:415.85,y:205.75,regX:45,regY:11.5}},{t:this.ikNode_19_1,p:{scaleX:0.9971,scaleY:0.9971,rotation:-10.3111,x:380.85,y:201.9,regY:18.4,regX:30.8}},{t:this.ikNode_17_1,p:{scaleX:0.9974,scaleY:0.9974,rotation:-4.5812,x:331.9,y:204.2,regY:23.8}},{t:this.ikNode_2_1,p:{scaleX:0.9984,scaleY:0.9984,rotation:-12.6034,x:283.1,y:213.75,regY:34.2}},{t:this.ikNode_3_1,p:{regX:63.6,rotation:-44.6908,x:237.4,y:217.8,scaleX:0.9975,scaleY:0.9975}},{t:this.ikNode_11_1,p:{regX:45,rotation:6.2993,x:248.85,y:236.35,scaleX:0.9972,scaleY:0.9972,regY:14.3}},{t:this.ikNode_13_1,p:{scaleX:0.9972,scaleY:0.9972,rotation:-1.1424,x:217.3,y:258.2,regY:6.3,regX:70.1}},{t:this.ikNode_15_1,p:{regY:0.6,scaleX:0.997,scaleY:0.997,rotation:-10.3107,x:174.4,y:284.85,regX:90.5}},{t:this.ikNode_21_1,p:{rotation:-1.7165,x:413.2,y:197.05,regX:21.6,scaleX:0.9307,scaleY:0.9307,regY:10.2}},{t:this.ikNode_23_1,p:{regY:25.2,rotation:5.7284,x:534.1,y:194.8,scaleX:0.9309,scaleY:0.9309,regX:13.1}},{t:this.ikNode_25_1,p:{scaleX:0.9302,scaleY:0.9302,rotation:-47.5569,x:636.25,y:185.75,regX:-0.6}}]},1).to({state:[{t:this.ikNode_37_1,p:{regX:38.5,scaleX:1.6055,scaleY:1.6055,rotation:-9.741,x:95.15,y:328.2}},{t:this.ikNode_35_1,p:{scaleX:1.6057,scaleY:1.6057,rotation:-1.7186,x:143.15,y:302.9,regX:31}},{t:this.ikNode_33_1,p:{scaleX:1.6056,scaleY:1.6056,rotation:13.7505,x:179.5,y:279.75,regY:14}},{t:this.ikNode_31_1,p:{regY:5.4,scaleX:0.9964,scaleY:0.9964,rotation:-46.6959,x:520.1,y:206.2}},{t:this.ikNode_29_1,p:{regY:12.9,scaleX:0.9963,scaleY:0.9963,rotation:-11.7446,x:433.25,y:216.85,regX:13.6}},{t:this.ikNode_27_1,p:{scaleX:0.997,scaleY:0.997,rotation:-13.4626,x:371.3,y:223.4,regX:45,regY:11.5}},{t:this.ikNode_19_1,p:{scaleX:0.997,scaleY:0.997,rotation:-17.1871,x:336.05,y:224.95,regY:18.4,regX:30.9}},{t:this.ikNode_17_1,p:{scaleX:0.9974,scaleY:0.9974,rotation:-11.4569,x:287.75,y:233.2,regY:23.8}},{t:this.ikNode_2_1,p:{scaleX:0.9984,scaleY:0.9984,rotation:-19.4795,x:240.45,y:248.45,regY:34.2}},{t:this.ikNode_3_1,p:{regX:63.6,rotation:-51.5673,x:195.5,y:257.95,scaleX:0.9975,scaleY:0.9975}},{t:this.ikNode_11_1,p:{regX:45,rotation:-0.5716,x:209.1,y:275.15,scaleX:0.9973,scaleY:0.9973,regY:14.4}},{t:this.ikNode_13_1,p:{scaleX:0.9972,scaleY:0.9972,rotation:-8.0193,x:180.25,y:300.35,regY:6.2,regX:70}},{t:this.ikNode_15_1,p:{regY:0.5,scaleX:0.997,scaleY:0.997,rotation:-17.1876,x:141.05,y:331.9,regX:90.5}},{t:this.ikNode_21_1,p:{rotation:-10.8855,x:368.5,y:220.7,regX:21.6,scaleX:0.9307,scaleY:0.9307,regY:10.2}},{t:this.ikNode_23_1,p:{regY:25.2,rotation:-0.2827,x:487.45,y:199.35,scaleX:0.9309,scaleY:0.9309,regX:13.1}},{t:this.ikNode_25_1,p:{scaleX:0.9302,scaleY:0.9302,rotation:-66.7512,x:588.1,y:179.65,regX:-0.6}}]},1).to({state:[{t:this.ikNode_37_1,p:{regX:38.5,scaleX:1.6055,scaleY:1.6055,rotation:-16.617,x:63.25,y:379.75}},{t:this.ikNode_35_1,p:{scaleX:1.6057,scaleY:1.6057,rotation:-8.5945,x:107.95,y:348.85,regX:31}},{t:this.ikNode_33_1,p:{scaleX:1.6056,scaleY:1.6056,rotation:6.874,x:141.15,y:321.45,regY:13.9}},{t:this.ikNode_31_1,p:{regY:5.3,scaleX:0.9964,scaleY:0.9964,rotation:-64.7453,x:457.5,y:174.45}},{t:this.ikNode_29_1,p:{regY:12.9,scaleX:0.9963,scaleY:0.9963,rotation:-36.6688,x:383.3,y:220.6,regX:13.6}},{t:this.ikNode_27_1,p:{scaleX:0.997,scaleY:0.997,rotation:-26.9282,x:324.5,y:241.3,regX:45,regY:11.5}},{t:this.ikNode_19_1,p:{scaleX:0.9971,scaleY:0.9971,rotation:-24.0632,x:289.85,y:248.25,regY:18.4,regX:30.9}},{t:this.ikNode_17_1,p:{scaleX:0.9974,scaleY:0.9974,rotation:-18.3335,x:242.9,y:262.45,regY:23.8}},{t:this.ikNode_2_1,p:{scaleX:0.9984,scaleY:0.9984,rotation:-26.3555,x:197.8,y:283.15,regY:34.2}},{t:this.ikNode_3_1,p:{regX:63.6,rotation:-58.4427,x:154.25,y:298,scaleX:0.9975,scaleY:0.9975}},{t:this.ikNode_11_1,p:{regX:45,rotation:-7.4472,x:169.8,y:313.55,scaleX:0.9973,scaleY:0.9973,regY:14.5}},{t:this.ikNode_13_1,p:{scaleX:0.9972,scaleY:0.9972,rotation:-14.8943,x:144.15,y:342.15,regY:6.3,regX:70}},{t:this.ikNode_15_1,p:{regY:0.6,scaleX:0.997,scaleY:0.997,rotation:-24.0627,x:109.2,y:377.95,regX:90.5}},{t:this.ikNode_21_1,p:{rotation:-20.0518,x:322.25,y:244.75,regX:21.6,scaleX:0.9307,scaleY:0.9307,regY:10.2}},{t:this.ikNode_23_1,p:{regY:25.1,rotation:-6.2988,x:436.4,y:204.65,scaleX:0.9309,scaleY:0.9309,regX:13.1}},{t:this.ikNode_25_1,p:{scaleX:0.9302,scaleY:0.9302,rotation:-85.9466,x:534.3,y:174.55,regX:-0.6}}]},1).to({state:[{t:this.ikNode_37_1,p:{regX:38.5,scaleX:1.6055,scaleY:1.6055,rotation:-22.6326,x:-17.25,y:462.65}},{t:this.ikNode_35_1,p:{scaleX:1.6057,scaleY:1.6057,rotation:-14.6108,x:23.85,y:427.2,regX:31}},{t:this.ikNode_33_1,p:{scaleX:1.6056,scaleY:1.6056,rotation:0.8576,x:53.95,y:396.45,regY:13.9}},{t:this.ikNode_31_1,p:{regY:5.4,scaleX:0.9964,scaleY:0.9964,rotation:-58.1551,x:365.8,y:240.45}},{t:this.ikNode_29_1,p:{regY:12.9,scaleX:0.9963,scaleY:0.9963,rotation:-30.0802,x:286.75,y:277.5,regX:13.7}},{t:this.ikNode_27_1,p:{scaleX:0.997,scaleY:0.997,rotation:-26.9282,x:227.95,y:298.35,regX:45,regY:11.5}},{t:this.ikNode_19_1,p:{scaleX:0.997,scaleY:0.997,rotation:-30.0801,x:193.9,y:308.1,regY:18.4,regX:30.8}},{t:this.ikNode_17_1,p:{scaleX:0.9974,scaleY:0.9974,rotation:-24.3485,x:148.95,y:327.4,regY:23.9}},{t:this.ikNode_2_1,p:{scaleX:0.9984,scaleY:0.9984,rotation:-32.3709,x:106.4,y:352.5,regY:34.2}},{t:this.ikNode_3_1,p:{regX:63.6,rotation:-64.4591,x:64.8,y:371.75,scaleX:0.9976,scaleY:0.9976}},{t:this.ikNode_11_1,p:{regX:45,rotation:-13.4624,x:81.75,y:385.45,scaleX:0.9973,scaleY:0.9973,regY:14.4}},{t:this.ikNode_13_1,p:{scaleX:0.9972,scaleY:0.9972,rotation:-20.911,x:59.25,y:416.75,regY:6.2,regX:70}},{t:this.ikNode_15_1,p:{regY:0.5,scaleX:0.997,scaleY:0.997,rotation:-30.0794,x:28.15,y:455.95,regX:90.5}},{t:this.ikNode_21_1,p:{rotation:-14.6088,x:226.25,y:303.5,regX:21.6,scaleX:0.9307,scaleY:0.9307,regY:10.3}},{t:this.ikNode_23_1,p:{regY:25.2,rotation:1.1441,x:343.75,y:274.35,scaleX:0.9308,scaleY:0.9308,regX:13.2}},{t:this.ikNode_25_1,p:{scaleX:0.9302,scaleY:0.9302,rotation:-69.9025,x:444.8,y:257.2,regX:-0.6}}]},1).to({state:[{t:this.ikNode_37_1,p:{regX:38.5,scaleX:1.6055,scaleY:1.6055,rotation:-28.6489,x:-96.55,y:544.4}},{t:this.ikNode_35_1,p:{scaleX:1.6057,scaleY:1.6057,rotation:-20.627,x:-59.35,y:504.65,regX:31}},{t:this.ikNode_33_1,p:{scaleX:1.6056,scaleY:1.6056,rotation:-5.1564,x:-32.55,y:471,regY:13.9}},{t:this.ikNode_31_1,p:{regY:5.4,scaleX:0.9964,scaleY:0.9964,rotation:-51.5663,x:271.7,y:307.5}},{t:this.ikNode_29_1,p:{regY:12.9,scaleX:0.9963,scaleY:0.9963,rotation:-23.4906,x:188.95,y:335.2,regX:13.6}},{t:this.ikNode_27_1,p:{scaleX:0.997,scaleY:0.997,rotation:-26.9282,x:130.2,y:356,regX:45,regY:11.5}},{t:this.ikNode_19_1,p:{scaleX:0.997,scaleY:0.997,rotation:-36.0958,x:97.25,y:368.45,regY:18.4,regX:30.9}},{t:this.ikNode_17_1,p:{scaleX:0.9974,scaleY:0.9974,rotation:-30.3651,x:54.45,y:392.5,regY:23.8}},{t:this.ikNode_2_1,p:{scaleX:0.9984,scaleY:0.9984,rotation:-38.3877,x:14.95,y:421.65,regY:34.1}},{t:this.ikNode_3_1,p:{regX:63.6,rotation:-70.4755,x:-24.4,y:445.3,scaleX:0.9976,scaleY:0.9976}},{t:this.ikNode_11_1,p:{regX:45,rotation:-19.4788,x:-5.9,y:457.2,scaleX:0.9973,scaleY:0.9973,regY:14.5}},{t:this.ikNode_13_1,p:{scaleX:0.9972,scaleY:0.9972,rotation:-26.9273,x:-25,y:490.75,regY:6.3,regX:70.1}},{t:this.ikNode_15_1,p:{regY:0.5,scaleX:0.997,scaleY:0.997,rotation:-36.0961,x:-52.1,y:532.7,regX:90.5}},{t:this.ikNode_21_1,p:{rotation:-9.1653,x:129.25,y:362.5,regX:21.6,scaleX:0.9307,scaleY:0.9307,regY:10.2}},{t:this.ikNode_23_1,p:{regY:25.2,rotation:8.5931,x:248.75,y:344.7,scaleX:0.9309,scaleY:0.9309,regX:13.1}},{t:this.ikNode_25_1,p:{scaleX:0.9302,scaleY:0.9302,rotation:-53.8593,x:351.5,y:340.8,regX:-0.5}}]},1).to({state:[{t:this.ikNode_37_1,p:{regX:38.5,scaleX:1.6055,scaleY:1.6055,rotation:-28.6489,x:-96.5,y:544.4}},{t:this.ikNode_35_1,p:{scaleX:1.6057,scaleY:1.6057,rotation:-20.627,x:-59.25,y:504.6,regX:31}},{t:this.ikNode_33_1,p:{scaleX:1.6056,scaleY:1.6056,rotation:-5.1564,x:-32.55,y:471,regY:13.9}},{t:this.ikNode_31_1,p:{regY:5.4,scaleX:0.9964,scaleY:0.9964,rotation:-45.2631,x:272.95,y:311}},{t:this.ikNode_29_1,p:{regY:12.9,scaleX:0.9963,scaleY:0.9963,rotation:-22.6303,x:189.75,y:337.5,regX:13.6}},{t:this.ikNode_27_1,p:{scaleX:0.997,scaleY:0.997,rotation:-25.2088,x:130.4,y:356.5,regX:45,regY:11.5}},{t:this.ikNode_19_1,p:{scaleX:0.997,scaleY:0.997,rotation:-36.0958,x:97.2,y:368.4,regY:18.4,regX:30.9}},{t:this.ikNode_17_1,p:{scaleX:0.9974,scaleY:0.9974,rotation:-30.3651,x:54.4,y:392.45,regY:23.8}},{t:this.ikNode_2_1,p:{scaleX:0.9984,scaleY:0.9984,rotation:-38.3877,x:14.95,y:421.65,regY:34.1}},{t:this.ikNode_3_1,p:{regX:63.6,rotation:-70.4755,x:-24.35,y:445.3,scaleX:0.9976,scaleY:0.9976}},{t:this.ikNode_11_1,p:{regX:45,rotation:-19.4788,x:-5.85,y:457.2,scaleX:0.9973,scaleY:0.9973,regY:14.5}},{t:this.ikNode_13_1,p:{scaleX:0.9972,scaleY:0.9972,rotation:-26.9273,x:-24.95,y:490.75,regY:6.3,regX:70.1}},{t:this.ikNode_15_1,p:{regY:0.5,scaleX:0.997,scaleY:0.997,rotation:-36.0961,x:-52.05,y:532.65,regX:90.5}},{t:this.ikNode_21_1,p:{rotation:-9.1653,x:129.2,y:362.45,regX:21.6,scaleX:0.9307,scaleY:0.9307,regY:10.2}},{t:this.ikNode_23_1,p:{regY:25.2,rotation:8.5931,x:248.7,y:344.7,scaleX:0.9309,scaleY:0.9309,regX:13.1}},{t:this.ikNode_25_1,p:{scaleX:0.9302,scaleY:0.9302,rotation:-53.8593,x:351.45,y:340.75,regX:-0.5}}]},1).to({state:[{t:this.ikNode_37_1,p:{regX:38.5,scaleX:1.6055,scaleY:1.6055,rotation:-28.6489,x:-96.45,y:544.4}},{t:this.ikNode_35_1,p:{scaleX:1.6057,scaleY:1.6057,rotation:-20.627,x:-59.2,y:504.6,regX:31}},{t:this.ikNode_33_1,p:{scaleX:1.6056,scaleY:1.6056,rotation:-5.1564,x:-32.5,y:471,regY:13.9}},{t:this.ikNode_31_1,p:{regY:5.4,scaleX:0.9964,scaleY:0.9964,rotation:-38.9606,x:274.1,y:314.55}},{t:this.ikNode_29_1,p:{regY:12.9,scaleX:0.9963,scaleY:0.9963,rotation:-21.7727,x:190.45,y:339.75,regX:13.6}},{t:this.ikNode_27_1,p:{scaleX:0.997,scaleY:0.997,rotation:-23.4906,x:130.5,y:357,regX:45,regY:11.5}},{t:this.ikNode_19_1,p:{scaleX:0.997,scaleY:0.997,rotation:-36.0958,x:97.15,y:368.35,regY:18.4,regX:30.9}},{t:this.ikNode_17_1,p:{scaleX:0.9974,scaleY:0.9974,rotation:-30.3651,x:54.35,y:392.4,regY:23.8}},{t:this.ikNode_2_1,p:{scaleX:0.9984,scaleY:0.9984,rotation:-38.3877,x:15,y:421.65,regY:34.1}},{t:this.ikNode_3_1,p:{regX:63.6,rotation:-70.4755,x:-24.3,y:445.25,scaleX:0.9976,scaleY:0.9976}},{t:this.ikNode_11_1,p:{regX:45,rotation:-19.4788,x:-5.8,y:457.15,scaleX:0.9973,scaleY:0.9973,regY:14.5}},{t:this.ikNode_13_1,p:{scaleX:0.9972,scaleY:0.9972,rotation:-26.9273,x:-24.9,y:490.8,regY:6.3,regX:70.1}},{t:this.ikNode_15_1,p:{regY:0.5,scaleX:0.997,scaleY:0.997,rotation:-36.0961,x:-52,y:532.6,regX:90.5}},{t:this.ikNode_21_1,p:{rotation:-9.1653,x:129.15,y:362.4,regX:21.6,scaleX:0.9307,scaleY:0.9307,regY:10.2}},{t:this.ikNode_23_1,p:{regY:25.2,rotation:8.5931,x:248.7,y:344.7,scaleX:0.9309,scaleY:0.9309,regX:13.1}},{t:this.ikNode_25_1,p:{scaleX:0.9302,scaleY:0.9302,rotation:-53.8593,x:351.4,y:340.7,regX:-0.5}}]},1).to({state:[{t:this.ikNode_37_1,p:{regX:38.5,scaleX:1.6055,scaleY:1.6055,rotation:-28.6489,x:-416.7,y:687.15}},{t:this.ikNode_35_1,p:{scaleX:1.6057,scaleY:1.6057,rotation:-20.627,x:-379.3,y:647.3,regX:31}},{t:this.ikNode_33_1,p:{scaleX:1.6056,scaleY:1.6056,rotation:-5.1564,x:-352.6,y:613.85,regY:13.9}},{t:this.ikNode_31_1,p:{regY:5.4,scaleX:0.9964,scaleY:0.9964,rotation:-29.7928,x:-45.2,y:460.6}},{t:this.ikNode_29_1,p:{regY:12.9,scaleX:0.9964,scaleY:0.9964,rotation:-20.0526,x:-129.3,y:483.15,regX:13.6}},{t:this.ikNode_27_1,p:{scaleX:0.997,scaleY:0.997,rotation:-22.9155,x:-189.7,y:499.75,regX:45,regY:11.5}},{t:this.ikNode_19_1,p:{scaleX:0.997,scaleY:0.997,rotation:-36.0958,x:-223.05,y:511,regY:18.4,regX:30.9}},{t:this.ikNode_17_1,p:{scaleX:0.9974,scaleY:0.9974,rotation:-30.3651,x:-265.75,y:535.3,regY:23.8}},{t:this.ikNode_2_1,p:{scaleX:0.9984,scaleY:0.9984,rotation:-38.3877,x:-305.1,y:564.6,regY:34.1}},{t:this.ikNode_3_1,p:{regX:63.6,rotation:-70.4755,x:-344.3,y:588.1,scaleX:0.9976,scaleY:0.9976}},{t:this.ikNode_11_1,p:{regX:45,rotation:-19.4788,x:-325.95,y:599.95,scaleX:0.9973,scaleY:0.9973,regY:14.5}},{t:this.ikNode_13_1,p:{scaleX:0.9972,scaleY:0.9972,rotation:-26.9273,x:-345.1,y:633.6,regY:6.3,regX:70.1}},{t:this.ikNode_15_1,p:{regY:0.5,scaleX:0.997,scaleY:0.997,rotation:-36.0961,x:-372.15,y:675.35,regX:90.5}},{t:this.ikNode_21_1,p:{rotation:-8.592,x:-190.85,y:505.35,regX:21.7,scaleX:0.9307,scaleY:0.9307,regY:10.3}},{t:this.ikNode_23_1,p:{regY:25.2,rotation:5.1557,x:-71.2,y:488.85,scaleX:0.9309,scaleY:0.9309,regX:13.1}},{t:this.ikNode_25_1,p:{scaleX:0.9302,scaleY:0.9302,rotation:-18.9072,x:30.45,y:478.7,regX:-0.6}}]},1).to({state:[{t:this.ikNode_37_1,p:{regX:38.5,scaleX:1.6055,scaleY:1.6055,rotation:-28.6489,x:-615.75,y:744.45}},{t:this.ikNode_35_1,p:{scaleX:1.6057,scaleY:1.6057,rotation:-20.627,x:-578.3,y:704.8,regX:31}},{t:this.ikNode_33_1,p:{scaleX:1.6056,scaleY:1.6056,rotation:-5.1564,x:-551.65,y:671.1,regY:13.9}},{t:this.ikNode_31_1,p:{regY:5.4,scaleX:0.9964,scaleY:0.9964,rotation:-29.7928,x:-244.4,y:518.05}},{t:this.ikNode_29_1,p:{regY:12.9,scaleX:0.9964,scaleY:0.9964,rotation:-20.0526,x:-328.45,y:540.4,regX:13.6}},{t:this.ikNode_27_1,p:{scaleX:0.997,scaleY:0.997,rotation:-22.9155,x:-388.95,y:557.15,regX:45,regY:11.5}},{t:this.ikNode_19_1,p:{scaleX:0.997,scaleY:0.997,rotation:-36.0958,x:-422.2,y:568.45,regY:18.4,regX:30.9}},{t:this.ikNode_17_1,p:{scaleX:0.9974,scaleY:0.9974,rotation:-30.3651,x:-464.85,y:592.9,regY:23.8}},{t:this.ikNode_2_1,p:{scaleX:0.9984,scaleY:0.9984,rotation:-38.3877,x:-504.3,y:622.2,regY:34.1}},{t:this.ikNode_3_1,p:{regX:63.6,rotation:-70.4755,x:-543.5,y:645.55,scaleX:0.9976,scaleY:0.9976}},{t:this.ikNode_11_1,p:{regX:45,rotation:-19.4788,x:-525.15,y:657.4,scaleX:0.9973,scaleY:0.9973,regY:14.5}},{t:this.ikNode_13_1,p:{scaleX:0.9972,scaleY:0.9972,rotation:-26.9273,x:-544.3,y:690.95,regY:6.3,regX:70.1}},{t:this.ikNode_15_1,p:{regY:0.5,scaleX:0.997,scaleY:0.997,rotation:-36.0961,x:-571.5,y:732.8,regX:90.5}},{t:this.ikNode_21_1,p:{rotation:-8.592,x:-390.15,y:562.7,regX:21.7,scaleX:0.9307,scaleY:0.9307,regY:10.3}},{t:this.ikNode_23_1,p:{regY:25.2,rotation:5.1557,x:-270.25,y:546.35,scaleX:0.9309,scaleY:0.9309,regX:13.1}},{t:this.ikNode_25_1,p:{scaleX:0.9302,scaleY:0.9302,rotation:-18.9072,x:-168.7,y:536.2,regX:-0.6}}]},1).to({state:[]},1).wait(58));

	// Слой_70
	this.instance_2 = new lib.трава();
	this.instance_2.setTransform(-168,411);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(144));

	// Слой_5
	this.instance_3 = new lib.ОбоиЛавандовые();
	this.instance_3.setTransform(1486.4,-44,1.2477,1.2477,90);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(144));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(-36.3,270.8,1728,1200.2);
// library properties:
lib.properties = {
	id: '9F36DB798F707D419959394D241274DC',
	width: 1280,
	height: 720,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/shestoe_atlas_1.png", id:"shestoe_atlas_1"},
		{src:"images/shestoe_atlas_2.png", id:"shestoe_atlas_2"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['9F36DB798F707D419959394D241274DC'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;