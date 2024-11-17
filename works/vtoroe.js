(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"vtoroe_atlas_1", frames: [[0,0,1562,1562]]},
		{name:"vtoroe_atlas_2", frames: [[0,0,1508,1508]]},
		{name:"vtoroe_atlas_3", frames: [[0,756,736,736],[738,0,736,736],[738,738,736,736],[0,0,736,754]]},
		{name:"vtoroe_atlas_4", frames: [[1204,0,580,800],[1204,802,540,604],[0,0,600,841],[602,0,600,841],[0,1259,500,523],[0,843,736,414],[502,1259,649,380],[1153,1408,640,376]]}
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



(lib.Луис = function() {
	this.initialize(ss["vtoroe_atlas_4"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Навинфлиртун = function() {
	this.initialize(ss["vtoroe_atlas_4"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.Навин = function() {
	this.initialize(ss["vtoroe_atlas_4"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.Рей = function() {
	this.initialize(ss["vtoroe_atlas_3"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Рейpngкопия = function() {
	this.initialize(ss["vtoroe_atlas_3"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.Рейpngкопия2 = function() {
	this.initialize(ss["vtoroe_atlas_3"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.ТианаиРей = function() {
	this.initialize(ss["vtoroe_atlas_3"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.Тиана = function() {
	this.initialize(ss["vtoroe_atlas_4"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.загруженное10 = function() {
	this.initialize(ss["vtoroe_atlas_4"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.звездаpngкопия = function() {
	this.initialize(ss["vtoroe_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.светpngкопия = function() {
	this.initialize(ss["vtoroe_atlas_2"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Magicplace = function() {
	this.initialize(ss["vtoroe_atlas_4"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.ThePrincessAndTheFrog = function() {
	this.initialize(ss["vtoroe_atlas_4"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.Thesecondstartotheright = function() {
	this.initialize(ss["vtoroe_atlas_4"]);
	this.gotoAndStop(7);
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


(lib.Символ14 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.светpngкопия();
	this.instance.setTransform(0,0,0.1047,0.1047);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Символ14, new cjs.Rectangle(0,0,157.9,157.9), null);


(lib.Символ9 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.звездаpngкопия();
	this.instance.setTransform(0,0,0.0526,0.0526);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Символ9, new cjs.Rectangle(0,0,82.1,82.1), null);


(lib.Символ6 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Thesecondstartotheright();
	this.instance.setTransform(0,0,3.6486,3.6486);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Символ6, new cjs.Rectangle(0,0,2335.1,1371.9), null);


(lib.Символ5 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Рейpngкопия2();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Символ5, new cjs.Rectangle(0,0,736,736), null);


(lib.Символ4 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Рейpngкопия();
	this.instance.setTransform(0,0,0.0088,0.0088);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Символ4, new cjs.Rectangle(0,0,6.5,6.5), null);


(lib.Символ3 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Луис();
	this.instance.setTransform(282.95,0,1,1,20.7128);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Символ3, new cjs.Rectangle(0,0,825.5,953.5), null);


(lib.Символ2 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Навинфлиртун();
	this.instance.setTransform(0,0,0.9996,0.9996);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Символ2, new cjs.Rectangle(0,0,539.8,603.8), null);


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
	this.instance = new lib.ТианаиРей();
	this.instance.setTransform(0,0,0.654,0.7559);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Символ1, new cjs.Rectangle(0,0,481.4,570), null);


(lib.Анимация14 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Рей();
	this.instance.setTransform(-59.2,-59.2,0.1608,0.1608);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-59.2,-59.2,118.4,118.4);


(lib.Анимация13 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Рей();
	this.instance.setTransform(-59.2,-59.2,0.1608,0.1608);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-59.2,-59.2,118.4,118.4);


(lib.Анимация8 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Тиана();
	this.instance.setTransform(175.85,-240.85,0.5861,0.5728,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-175.8,-240.8,351.70000000000005,481.70000000000005);


(lib.Анимация7 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Тиана();
	this.instance.setTransform(175.85,-240.85,0.5861,0.5728,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-175.8,-240.8,351.70000000000005,481.70000000000005);


(lib.Анимация2 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Навин();
	this.instance.setTransform(-179.65,-251.8,0.5988,0.5988);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-179.6,-251.8,359.29999999999995,503.6);


(lib.Анимация1 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Навин();
	this.instance.setTransform(-179.65,-251.8,0.5988,0.5988);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-179.6,-251.8,359.29999999999995,503.6);


// stage content:
(lib.Принцессаилягушка = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_20
	this.instance = new lib.Символ9();
	this.instance.setTransform(530.1,344.1,1,1,0,0,0,41.1,41.1);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(321).to({_off:false},0).wait(1).to({scaleX:0.9674,scaleY:0.9674,x:533.45,y:343.05},0).wait(1).to({scaleX:0.9349,scaleY:0.9349,x:536.85,y:342},0).wait(1).to({scaleX:0.9023,scaleY:0.9023,x:540.3,y:341},0).wait(1).to({scaleX:0.8698,scaleY:0.8698,x:543.7,y:339.95},0).wait(1).to({scaleX:0.8372,scaleY:0.8372,x:547.1,y:338.9},0).wait(1).to({scaleX:0.8047,scaleY:0.8047,x:550.45,y:337.85},0).wait(1).to({scaleX:0.7721,scaleY:0.7721,x:553.9,y:336.85},0).wait(1).to({scaleX:0.8545,scaleY:0.8545,x:557.3,y:335.8},0).wait(1).to({scaleX:0.9369,scaleY:0.9369,x:560.7,y:334.75},0).wait(1).to({scaleX:1.0193,scaleY:1.0193,x:564.15,y:333.75},0).wait(1).to({scaleX:1.1017,scaleY:1.1017,x:567.55,y:332.75},0).wait(1).to({scaleX:1.1842,scaleY:1.1842,x:570.9,y:331.65},0).wait(1).to({scaleX:1.2666,scaleY:1.2666,x:574.35,y:330.65},0).wait(1).to({scaleX:1.349,scaleY:1.349,x:577.75,y:329.65},0).wait(1).to({scaleX:1.4314,scaleY:1.4314,x:581.2,y:328.6},0).wait(1).to({scaleX:1.3957,scaleY:1.3957,x:584.55,y:327.55},0).wait(1).to({scaleX:1.3599,scaleY:1.3599,x:588,y:326.55},0).wait(1).to({scaleX:1.3242,scaleY:1.3242,x:591.35,y:325.45},0).wait(1).to({scaleX:1.2885,scaleY:1.2885,x:594.8,y:324.45},0).wait(1).to({scaleX:1.2527,scaleY:1.2527,x:598.2,y:323.45},0).wait(1).to({scaleX:1.217,scaleY:1.217,x:601.55,y:322.35},0).wait(1).to({scaleX:1.1813,scaleY:1.1813,x:605,y:321.35},0).wait(1).to({scaleX:1.2564,scaleY:1.2564,x:608.4,y:320.35},0).wait(1).to({scaleX:1.3316,scaleY:1.3316,x:611.85,y:319.3},0).wait(1).to({scaleX:1.4067,scaleY:1.4067,x:615.2,y:318.25},0).wait(1).to({scaleX:1.4819,scaleY:1.4819,x:618.6,y:317.2},0).wait(1).to({scaleX:1.5571,scaleY:1.5571,x:622.05,y:316.2},0).wait(1).to({scaleX:1.6322,scaleY:1.6322,x:625.45,y:315.2},0).wait(1).to({scaleX:1.7074,scaleY:1.7074,x:628.85,y:314.1},0).wait(1).to({scaleX:1.7826,scaleY:1.7826,x:632.25,y:313.1},0).wait(1).to({scaleX:1.8577,scaleY:1.8577,x:635.65,y:312.05},0).wait(1).to({scaleX:1.9329,scaleY:1.9329,x:639.1,y:311.05},0).wait(1).to({scaleX:1.8509,scaleY:1.8509,x:642.45,y:310},0).wait(1).to({scaleX:1.7688,scaleY:1.7688,x:645.9,y:308.95},0).wait(1).to({scaleX:1.6868,scaleY:1.6868,x:649.3,y:307.95},0).wait(1).to({scaleX:1.6048,scaleY:1.6048,x:652.7,y:306.9},0).wait(1).to({scaleX:1.5227,scaleY:1.5227,x:656.1,y:305.85},0).wait(1).to({scaleX:1.4407,scaleY:1.4407,x:659.45,y:304.8},0).wait(1).to({scaleX:1.3587,scaleY:1.3587,x:662.9,y:303.8},0).wait(1).to({scaleX:1.2766,scaleY:1.2766,x:666.25,y:302.7},0).wait(1).to({scaleX:1.1946,scaleY:1.1946,x:669.7,y:301.7},0).wait(1).to({scaleX:1.1126,scaleY:1.1126,x:673.1,y:300.7},0).wait(1).to({scaleX:1.0306,scaleY:1.0306,x:676.5,y:299.65},0).wait(1).to({scaleX:1.0186,scaleY:1.0186,x:679.9,y:298.6},0).wait(1).to({scaleX:1.0067,scaleY:1.0067,x:683.3,y:297.6},0).wait(1).to({scaleX:0.9948,scaleY:0.9948,x:686.7,y:296.55},0).wait(1).to({scaleX:0.9829,scaleY:0.9829,x:690.1,y:295.5},0).wait(1).to({scaleX:0.9709,scaleY:0.9709,x:693.5,y:294.45},0).wait(1).to({scaleX:0.959,scaleY:0.959,x:696.9,y:293.4},0).wait(1).to({scaleX:0.9471,scaleY:0.9471,x:700.35,y:292.4},0).wait(1).to({scaleX:0.9352,scaleY:0.9352,x:703.75,y:291.35},0).wait(1).to({scaleX:0.9232,scaleY:0.9232,x:707.15,y:290.35},0).wait(1).to({scaleX:0.9113,scaleY:0.9113,x:710.55,y:289.3},0).wait(1).to({scaleX:0.8994,scaleY:0.8994,x:713.9,y:288.25},0).wait(1).to({scaleX:0.8875,scaleY:0.8875,x:717.3,y:287.2},0).wait(1).to({scaleX:0.8859,scaleY:0.8859,x:720.75,y:286.2},0).wait(1).to({scaleX:0.8844,scaleY:0.8844,x:724.15,y:285.15},0).wait(1).to({scaleX:0.8829,scaleY:0.8829,x:727.55,y:284.15},0).wait(1).to({scaleX:0.8814,scaleY:0.8814,x:730.95,y:283.05},0).wait(1).to({scaleX:0.8798,scaleY:0.8798,x:734.35,y:282.05},0).wait(1).to({scaleX:0.8783,scaleY:0.8783,x:737.75,y:281},0).wait(1));

	// Слой_15
	this.instance_1 = new lib.Символ6();
	this.instance_1.setTransform(359.5,485.9,1,1,0,0,0,1167.5,685.9);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(321).to({_off:false},0).wait(1).to({scaleX:0.9928,scaleY:0.9928,x:364.2,y:483.95},0).wait(1).to({scaleX:0.9855,scaleY:0.9855,x:368.85,y:481.9},0).wait(1).to({scaleX:0.9783,scaleY:0.9783,x:373.5,y:479.9},0).wait(1).to({scaleX:0.9711,scaleY:0.9711,x:378.15,y:477.9},0).wait(1).to({scaleX:0.9638,scaleY:0.9638,x:382.8,y:475.9},0).wait(1).to({scaleX:0.9566,scaleY:0.9566,x:387.45,y:473.85},0).wait(1).to({scaleX:0.9494,scaleY:0.9494,x:392.1,y:471.9},0).wait(1).to({scaleX:0.9421,scaleY:0.9421,x:396.8,y:469.9},0).wait(1).to({scaleX:0.9349,scaleY:0.9349,x:401.45,y:467.9},0).wait(1).to({scaleX:0.9277,scaleY:0.9277,x:406.1,y:465.9},0).wait(1).to({scaleX:0.9204,scaleY:0.9204,x:410.75,y:463.85},0).wait(1).to({scaleX:0.9132,scaleY:0.9132,x:415.4,y:461.85},0).wait(1).to({scaleX:0.906,scaleY:0.906,x:420.05,y:459.9},0).wait(1).to({scaleX:0.8987,scaleY:0.8987,x:424.7,y:457.9},0).wait(1).to({scaleX:0.8915,scaleY:0.8915,x:429.35,y:455.9},0).wait(1).to({scaleX:0.8843,scaleY:0.8843,x:434.05,y:453.85},0).wait(1).to({scaleX:0.877,scaleY:0.877,x:438.7,y:451.85},0).wait(1).to({scaleX:0.8698,scaleY:0.8698,x:443.35,y:449.85},0).wait(1).to({scaleX:0.8626,scaleY:0.8626,x:448.05,y:447.9},0).wait(1).to({scaleX:0.8553,scaleY:0.8553,x:452.7,y:445.85},0).wait(1).to({scaleX:0.8481,scaleY:0.8481,x:457.35,y:443.85},0).wait(1).to({scaleX:0.8409,scaleY:0.8409,x:462,y:441.85},0).wait(1).to({scaleX:0.8336,scaleY:0.8336,x:466.65,y:439.85},0).wait(1).to({scaleX:0.8264,scaleY:0.8264,x:471.3,y:437.8},0).wait(1).to({scaleX:0.8192,scaleY:0.8192,x:475.95,y:435.85},0).wait(1).to({scaleX:0.8119,scaleY:0.8119,x:480.6,y:433.85},0).wait(1).to({scaleX:0.8047,scaleY:0.8047,x:485.25,y:431.85},0).wait(1).to({scaleX:0.7975,scaleY:0.7975,x:489.95,y:429.8},0).wait(1).to({scaleX:0.7902,scaleY:0.7902,x:494.6,y:427.8},0).wait(1).to({scaleX:0.783,scaleY:0.783,x:499.25,y:425.8},0).wait(1).to({scaleX:0.7758,scaleY:0.7758,x:503.9,y:423.85},0).wait(1).to({scaleX:0.7685,scaleY:0.7685,x:508.55,y:421.85},0).wait(1).to({scaleX:0.7613,scaleY:0.7613,x:513.2,y:419.8},0).wait(1).to({scaleX:0.7541,scaleY:0.7541,x:517.85,y:417.8},0).wait(1).to({scaleX:0.7468,scaleY:0.7468,x:522.5,y:415.8},0).wait(1).to({scaleX:0.7396,scaleY:0.7396,x:527.2,y:413.8},0).wait(1).to({scaleX:0.7324,scaleY:0.7324,x:531.9,y:411.85},0).wait(1).to({scaleX:0.7251,scaleY:0.7251,x:536.55,y:409.8},0).wait(1).to({scaleX:0.7179,scaleY:0.7179,x:541.2,y:407.8},0).wait(1).to({scaleX:0.7107,scaleY:0.7107,x:545.85,y:405.8},0).wait(1).to({scaleX:0.7034,scaleY:0.7034,x:550.5,y:403.8},0).wait(1).to({scaleX:0.6962,scaleY:0.6962,x:555.15,y:401.75},0).wait(1).to({scaleX:0.689,scaleY:0.689,x:559.8,y:399.75},0).wait(1).to({scaleX:0.6817,scaleY:0.6817,x:564.45,y:397.8},0).wait(1).to({scaleX:0.6745,scaleY:0.6745,x:569.1,y:395.8},0).wait(1).to({scaleX:0.6673,scaleY:0.6673,x:573.75,y:393.75},0).wait(1).to({scaleX:0.66,scaleY:0.66,x:578.4,y:391.75},0).wait(1).to({scaleX:0.6528,scaleY:0.6528,x:583.1,y:389.75},0).wait(1).to({scaleX:0.6456,scaleY:0.6456,x:587.75,y:387.75},0).wait(1).to({scaleX:0.6383,scaleY:0.6383,x:592.4,y:385.75},0).wait(1).to({scaleX:0.6311,scaleY:0.6311,x:597.05,y:383.75},0).wait(1).to({scaleX:0.6239,scaleY:0.6239,x:601.7,y:381.75},0).wait(1).to({scaleX:0.6166,scaleY:0.6166,x:606.35,y:379.75},0).wait(1).to({scaleX:0.6094,scaleY:0.6094,x:611,y:377.75},0).wait(1).to({scaleX:0.6022,scaleY:0.6022,x:615.7,y:375.7},0).wait(1).to({scaleX:0.5949,scaleY:0.5949,x:620.35,y:373.75},0).wait(1).to({scaleX:0.5877,scaleY:0.5877,x:625.05,y:371.75},0).wait(1).to({scaleX:0.5805,scaleY:0.5805,x:629.7,y:369.75},0).wait(1).to({scaleX:0.5732,scaleY:0.5732,x:634.35,y:367.75},0).wait(1).to({scaleX:0.566,scaleY:0.566,x:639,y:365.7},0).wait(1).to({scaleX:0.5588,scaleY:0.5588,x:643.65,y:363.7},0).wait(1));

	// Слой_14
	this.instance_2 = new lib.Символ5();
	this.instance_2.setTransform(302,1634,1,1,0,0,0,368,368);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(261).to({_off:false},0).wait(1).to({scaleX:0.9832,scaleY:0.9832,x:308,y:1601.15},0).wait(1).to({scaleX:0.9663,scaleY:0.9663,x:313.95,y:1568.35},0).wait(1).to({scaleX:0.9495,scaleY:0.9495,x:319.9,y:1535.5},0).wait(1).to({scaleX:0.9326,scaleY:0.9326,x:325.85,y:1502.7},0).wait(1).to({scaleX:0.9158,scaleY:0.9158,x:331.8,y:1469.85},0).wait(1).to({scaleX:0.899,scaleY:0.899,x:337.7,y:1437.05},0).wait(1).to({scaleX:0.8821,scaleY:0.8821,x:343.65,y:1404.2},0).wait(1).to({scaleX:0.8653,scaleY:0.8653,x:349.65,y:1371.4},0).wait(1).to({scaleX:0.8484,scaleY:0.8484,x:355.6,y:1338.55},0).wait(1).to({scaleX:0.8316,scaleY:0.8316,x:361.55,y:1305.75},0).wait(1).to({scaleX:0.8147,scaleY:0.8147,x:367.55,y:1273},0).wait(1).to({scaleX:0.7979,scaleY:0.7979,x:373.5,y:1240.15},0).wait(1).to({scaleX:0.7811,scaleY:0.7811,x:379.45,y:1207.35},0).wait(1).to({scaleX:0.7642,scaleY:0.7642,x:385.4,y:1174.5},0).wait(1).to({scaleX:0.7474,scaleY:0.7474,x:391.4,y:1141.7},0).wait(1).to({scaleX:0.7305,scaleY:0.7305,x:397.35,y:1108.85},0).wait(1).to({scaleX:0.7137,scaleY:0.7137,x:403.3,y:1076.05},0).wait(1).to({scaleX:0.6969,scaleY:0.6969,x:409.25,y:1043.2},0).wait(1).to({scaleX:0.68,scaleY:0.68,x:415.2,y:1010.4},0).wait(1).to({scaleX:0.6632,scaleY:0.6632,x:421.15,y:977.6},0).wait(1).to({scaleX:0.6463,scaleY:0.6463,x:427.1,y:944.75},0).wait(1).to({scaleX:0.6295,scaleY:0.6295,x:433.05,y:911.95},0).wait(1).to({scaleX:0.6127,scaleY:0.6127,x:439.05,y:879.1},0).wait(1).to({scaleX:0.5958,scaleY:0.5958,x:445,y:846.3},0).wait(1).to({scaleX:0.579,scaleY:0.579,x:450.95,y:813.45},0).wait(1).to({scaleX:0.5621,scaleY:0.5621,x:456.9,y:780.65},0).wait(1).to({scaleX:0.5453,scaleY:0.5453,x:462.85,y:747.8},0).wait(1).to({scaleX:0.5285,scaleY:0.5285,x:468.8,y:715},0).wait(1).to({scaleX:0.5116,scaleY:0.5116,x:474.75,y:682.15},0).wait(1).to({scaleX:0.4948,scaleY:0.4948,x:480.75,y:649.35},0).wait(1).to({scaleX:0.4779,scaleY:0.4779,x:486.7,y:616.55},0).wait(1).to({scaleX:0.4611,scaleY:0.4611,x:492.7,y:583.75},0).wait(1).to({scaleX:0.4442,scaleY:0.4442,x:512.75,y:567.05},0).wait(1).to({scaleX:0.4274,scaleY:0.4274,x:532.8,y:550.35},0).wait(1).to({scaleX:0.4106,scaleY:0.4106,x:552.85,y:533.65},0).wait(1).to({scaleX:0.3937,scaleY:0.3937,x:572.9,y:516.95},0).wait(1).to({scaleX:0.3769,scaleY:0.3769,x:592.9,y:500.25},0).wait(1).to({scaleX:0.36,scaleY:0.36,x:612.95,y:483.55},0).wait(1).to({scaleX:0.3432,scaleY:0.3432,x:610.9,y:465.2},0).wait(1).to({scaleX:0.3264,scaleY:0.3264,x:608.85,y:446.85},0).wait(1).to({scaleX:0.3095,scaleY:0.3095,x:606.8,y:428.5},0).wait(1).to({scaleX:0.2927,scaleY:0.2927,x:604.75,y:410.15},0).wait(1).to({scaleX:0.2758,scaleY:0.2758,x:602.7,y:391.8},0).wait(1).to({scaleX:0.259,scaleY:0.259,x:600.65,y:373.45},0).wait(1).to({scaleX:0.2422,scaleY:0.2422,x:598.6,y:355.1},0).wait(1).to({scaleX:0.2253,scaleY:0.2253,x:607.55,y:348.65},0).wait(1).to({scaleX:0.2085,scaleY:0.2085,x:616.45,y:342.25},0).wait(1).to({scaleX:0.1916,scaleY:0.1916,x:625.4,y:335.85},0).wait(1).to({scaleX:0.1748,scaleY:0.1748,x:634.35,y:329.4},0).wait(1).to({scaleX:0.1579,scaleY:0.1579,x:643.3,y:323},0).wait(1).to({scaleX:0.1411,scaleY:0.1411,x:652.2,y:316.6},0).wait(1).to({scaleX:0.1243,scaleY:0.1243,x:661.15,y:310.15},0).wait(1).to({scaleX:0.1074,scaleY:0.1074,x:670.15,y:303.8},0).wait(1).to({scaleX:0.0906,scaleY:0.0906,x:666.5,y:298.65},0).wait(1).to({scaleX:0.0737,scaleY:0.0737,x:662.9,y:293.5},0).wait(1).to({scaleX:0.0569,scaleY:0.0569,x:659.25,y:288.4},0).wait(1).to({scaleX:0.0401,scaleY:0.0401,x:655.65,y:283.25},0).wait(1).to({scaleX:0.0232,scaleY:0.0232,x:652,y:278.1},0).wait(1).to({scaleX:0.0064,scaleY:0.0064,x:648.4,y:273},0).to({_off:true},1).wait(62));

	// Слой_25
	this.instance_3 = new lib.Символ14();
	this.instance_3.setTransform(661.9,256.9,1,1,0,0,0,78.9,78.9);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(176).to({_off:false},0).wait(1).to({scaleX:1.0168,scaleY:1.0168},0).wait(1).to({scaleX:1.0337,scaleY:1.0337,x:661.85,y:256.85},0).wait(1).to({scaleX:1.0505,scaleY:1.0505,x:661.9,y:256.9},0).wait(1).to({scaleX:1.0674,scaleY:1.0674,x:661.85,y:256.85},0).wait(1).to({scaleX:1.0842,scaleY:1.0842,x:661.9,y:256.9},0).wait(1).to({scaleX:1.101,scaleY:1.101,x:661.85,y:256.85},0).wait(1).to({scaleX:1.1179,scaleY:1.1179},0).wait(1).to({scaleX:1.1347,scaleY:1.1347,x:661.9,y:256.9},0).wait(1).to({scaleX:1.1516,scaleY:1.1516,x:661.85,y:256.85},0).wait(1).to({scaleX:1.1684,scaleY:1.1684,x:661.9,y:256.9},0).wait(1).to({scaleX:1.1853,scaleY:1.1853,x:661.85,y:256.85},0).wait(1).to({scaleX:1.2021,scaleY:1.2021,x:661.9,y:256.9},0).wait(1).to({scaleX:1.2189,scaleY:1.2189,x:661.85,y:256.85},0).wait(1).to({scaleX:1.2358,scaleY:1.2358},0).wait(1).to({scaleX:1.2526,scaleY:1.2526,x:661.9,y:256.9},0).wait(1).to({scaleX:1.2695,scaleY:1.2695,x:661.85,y:256.85},0).wait(1).to({scaleX:1.2863,scaleY:1.2863,x:661.9,y:256.9},0).wait(1).to({scaleX:1.3031,scaleY:1.3031,x:661.85,y:256.85},0).wait(1).to({scaleX:1.32,scaleY:1.32,x:661.9,y:256.9},0).wait(1).to({scaleX:1.3048,scaleY:1.3048},0).wait(1).to({scaleX:1.2895,scaleY:1.2895},0).wait(1).to({scaleX:1.2743,scaleY:1.2743},0).wait(1).to({scaleX:1.259,scaleY:1.259},0).wait(1).to({scaleX:1.2438,scaleY:1.2438},0).wait(1).to({scaleX:1.2286,scaleY:1.2286},0).wait(1).to({scaleX:1.2133,scaleY:1.2133},0).wait(1).to({scaleX:1.1981,scaleY:1.1981},0).wait(1).to({scaleX:1.1829,scaleY:1.1829},0).wait(1).to({scaleX:1.1676,scaleY:1.1676,x:661.85,y:256.85},0).wait(1).to({scaleX:1.1524,scaleY:1.1524},0).wait(1).to({scaleX:1.1371,scaleY:1.1371},0).wait(1).to({scaleX:1.1219,scaleY:1.1219},0).wait(1).to({scaleX:1.1067,scaleY:1.1067},0).wait(1).to({scaleX:1.0914,scaleY:1.0914},0).wait(1).to({scaleX:1.0762,scaleY:1.0762},0).wait(1).to({scaleX:1.061,scaleY:1.061},0).wait(1).to({scaleX:1.0457,scaleY:1.0457},0).wait(1).to({scaleX:1.0305,scaleY:1.0305},0).wait(1).to({scaleX:1.0152,scaleY:1.0152},0).wait(1).to({scaleX:1,scaleY:1,x:661.9,y:256.9},0).wait(1).to({scaleX:1.04,scaleY:1.04,x:661.85,y:256.85},0).wait(1).to({scaleX:1.08,scaleY:1.08},0).wait(1).to({scaleX:1.12,scaleY:1.12},0).wait(1).to({scaleX:1.16,scaleY:1.16},0).wait(1).to({scaleX:1.2,scaleY:1.2,x:661.9,y:256.9},0).wait(1).to({scaleX:1.24,scaleY:1.24},0).wait(1).to({scaleX:1.28,scaleY:1.28},0).wait(1).to({scaleX:1.32,scaleY:1.32},0).wait(1).to({scaleX:1.36,scaleY:1.36,x:661.85,y:256.85},0).wait(1).to({scaleX:1.4,scaleY:1.4},0).wait(1).to({scaleX:1.44,scaleY:1.44},0).wait(1).to({scaleX:1.48,scaleY:1.48},0).wait(1).to({scaleX:1.52,scaleY:1.52,x:661.9,y:256.9},0).wait(1).to({scaleX:1.56,scaleY:1.56},0).wait(1).to({scaleX:1.6,scaleY:1.6},0).wait(1).to({scaleX:1.64,scaleY:1.64},0).wait(1).to({scaleX:1.68,scaleY:1.68,x:661.85,y:256.85},0).wait(1).to({scaleX:1.72,scaleY:1.72},0).wait(1).to({scaleX:1.76,scaleY:1.76},0).wait(1).to({scaleX:1.8,scaleY:1.8},0).wait(1).to({scaleX:1.76,scaleY:1.76},0).wait(1).to({scaleX:1.72,scaleY:1.72},0).wait(1).to({scaleX:1.68,scaleY:1.68},0).wait(1).to({scaleX:1.64,scaleY:1.64,x:661.9,y:256.9},0).wait(1).to({scaleX:1.6,scaleY:1.6},0).wait(1).to({scaleX:1.56,scaleY:1.56},0).wait(1).to({scaleX:1.52,scaleY:1.52},0).wait(1).to({scaleX:1.48,scaleY:1.48,x:661.85,y:256.85},0).wait(1).to({scaleX:1.44,scaleY:1.44},0).wait(1).to({scaleX:1.4,scaleY:1.4},0).wait(1).to({scaleX:1.36,scaleY:1.36},0).wait(1).to({scaleX:1.32,scaleY:1.32,x:661.9,y:256.9},0).wait(1).to({scaleX:1.28,scaleY:1.28},0).wait(1).to({scaleX:1.24,scaleY:1.24},0).wait(1).to({scaleX:1.2,scaleY:1.2},0).wait(1).to({scaleX:1.16,scaleY:1.16,x:661.85,y:256.85},0).wait(1).to({scaleX:1.12,scaleY:1.12},0).wait(1).to({scaleX:1.08,scaleY:1.08},0).wait(1).to({scaleX:1.04,scaleY:1.04},0).wait(1).to({scaleX:1,scaleY:1,x:661.9,y:256.9},0).wait(4).to({_off:true},1).wait(122));

	// Слой_13
	this.instance_4 = new lib.загруженное10();
	this.instance_4.setTransform(-15,-156,2.6611,2.6611);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(261).to({_off:false},0).to({_off:true},60).wait(62));

	// Слой_11
	this.instance_5 = new lib.Символ4();
	this.instance_5.setTransform(680.55,257.3,1,1,0,0,0,3.2,3.3);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(176).to({_off:false},0).wait(1).to({regY:3.2,scaleX:1.8453,scaleY:1.8453,rotation:-2.3076,x:673.45,y:259.65},0).wait(1).to({scaleX:2.6905,scaleY:2.6905,rotation:-4.6153,x:666.4,y:262.15},0).wait(1).to({scaleX:3.5358,scaleY:3.5358,rotation:-6.9229,x:659.25,y:264.65},0).wait(1).to({scaleX:4.381,scaleY:4.381,rotation:-9.2305,x:652.2,y:267.1},0).wait(1).to({scaleX:5.2261,scaleY:5.2261,rotation:-11.5382,x:645.1,y:269.6},0).wait(1).to({scaleX:6.0715,scaleY:6.0715,rotation:-13.8458,x:637.95,y:272.05},0).wait(1).to({scaleX:6.9168,scaleY:6.9168,rotation:-16.1534,x:630.8,y:274.6},0).wait(1).to({scaleX:7.762,scaleY:7.762,rotation:-18.461,x:623.7,y:277.1},0).wait(1).to({scaleX:8.6072,scaleY:8.6072,rotation:-20.7687,x:616.55,y:279.65},0).wait(1).to({scaleX:9.4525,scaleY:9.4525,rotation:-23.0763,x:609.45,y:282.15},0).wait(1).to({scaleX:10.2977,scaleY:10.2977,rotation:-25.3839,x:602.3,y:284.65},0).wait(1).to({scaleX:11.143,scaleY:11.143,rotation:-27.6916,x:595.15,y:287.2},0).wait(1).to({scaleX:11.9881,scaleY:11.9881,rotation:-29.9992,x:588.05,y:289.7},0).wait(1).to({scaleX:12.8333,scaleY:12.8333,rotation:-27.1421,x:602.55,y:299.35},0).wait(1).to({scaleX:13.6785,scaleY:13.6785,rotation:-24.2849,x:617.05,y:308.9},0).wait(1).to({scaleX:14.5237,scaleY:14.5237,rotation:-21.4278,x:631.55,y:318.45},0).wait(1).to({scaleX:15.3693,scaleY:15.3693,rotation:-18.5707,x:646.05,y:328.05},0).wait(1).to({scaleX:16.2142,scaleY:16.2142,rotation:-15.7136,x:660.6,y:337.65},0).wait(1).to({scaleX:17.0597,scaleY:17.0597,rotation:-12.8564,x:675.1,y:347.15},0).wait(1).to({scaleX:17.9051,scaleY:17.9051,rotation:-9.9993,x:689.65,y:356.75},0).wait(1).to({scaleX:18.7499,scaleY:18.7499,rotation:-7.1422,x:704.25,y:366.35},0).wait(1).to({scaleX:19.5953,scaleY:19.5953,rotation:-4.285,x:718.85,y:364.85},0).wait(1).to({scaleX:20.441,scaleY:20.441,rotation:-1.4279,x:733.45,y:363.35},0).wait(1).to({scaleX:21.2862,scaleY:21.2862,rotation:1.4292,x:748,y:361.85},0).wait(1).to({scaleX:22.1313,scaleY:22.1313,rotation:4.2863,x:762.55,y:360.35},0).wait(1).to({scaleX:22.976,scaleY:22.976,rotation:7.1435,x:777.2,y:358.9},0).wait(1).to({scaleX:23.8217,scaleY:23.8217,rotation:10.0006,x:791.8,y:357.4},0).wait(1).to({scaleX:24.6672,scaleY:24.6672,rotation:12.8577,x:806.5,y:355.95},0).wait(1).to({scaleX:25.5116,scaleY:25.5116,rotation:15.7149,x:821.15,y:354.5},0).wait(1).to({scaleX:26.3574,scaleY:26.3574,rotation:18.572,x:835.8,y:353},0).wait(1).to({scaleX:27.2024,scaleY:27.2024,rotation:21.4291,x:850.45,y:351.55},0).wait(1).to({scaleX:28.0477,scaleY:28.0477,rotation:24.2862,x:865.1,y:350.05},0).wait(1).to({scaleX:28.8929,scaleY:28.8929,rotation:27.1434,x:879.75,y:348.65},0).wait(1).to({scaleX:29.7378,scaleY:29.7378,rotation:30.0005,x:894.45,y:347.2},0).wait(1).to({scaleX:30.5833,scaleY:30.5833,rotation:27.3535,x:880.1,y:331.9},0).wait(1).to({scaleX:31.4288,scaleY:31.4288,rotation:24.7065,x:865.65,y:316.7},0).wait(1).to({scaleX:32.2736,scaleY:32.2736,rotation:22.0594,x:851.25,y:301.45},0).wait(1).to({scaleX:33.1194,scaleY:33.1194,rotation:19.4124,x:836.85,y:286.2},0).wait(1).to({scaleX:33.9646,scaleY:33.9646,rotation:16.7654,x:822.4,y:271},0).wait(1).to({scaleX:34.8094,scaleY:34.8094,rotation:14.1184,x:808,y:255.8},0).wait(1).to({scaleX:35.6543,scaleY:35.6543,rotation:11.4713,x:793.5,y:240.6},0).wait(1).to({scaleX:36.5,scaleY:36.5,rotation:8.8243,x:779.05,y:225.35},0).wait(1).to({scaleX:37.3454,scaleY:37.3454,rotation:6.1773,x:764.6,y:210.2},0).wait(1).to({scaleX:38.1901,scaleY:38.1901,rotation:3.5303,x:750.1,y:195.1},0).wait(1).to({scaleX:39.0352,scaleY:39.0352,rotation:0.8832,x:735.6,y:179.9},0).wait(1).to({scaleX:39.8809,scaleY:39.8809,rotation:-1.7638,x:721.2,y:164.7},0).wait(1).to({scaleX:40.7264,scaleY:40.7264,rotation:-4.4108,x:706.65,y:149.65},0).wait(1).to({scaleX:41.5712,scaleY:41.5712,rotation:-7.0578,x:692.2,y:134.45},0).wait(1).to({scaleX:42.4164,scaleY:42.4164,rotation:-9.7049,x:677.75,y:119.4},0).wait(1).to({scaleX:43.2619,scaleY:43.2619,rotation:-12.3519,x:663.25,y:104.4},0).wait(1).to({scaleX:44.1075,scaleY:44.1075,rotation:-14.9989,x:648.8,y:89.25},0).wait(1).to({scaleX:44.9528,scaleY:44.9528,rotation:-12.9502,x:667.6,y:78.5},0).wait(1).to({scaleX:45.798,scaleY:45.798,rotation:-10.9014,x:686.45,y:67.8},0).wait(1).to({scaleX:46.6428,scaleY:46.6428,rotation:-8.8527,x:705.3,y:57.05},0).wait(1).to({scaleX:47.4889,scaleY:47.4889,rotation:-6.8039,x:724.2,y:46.3},0).wait(1).to({scaleX:48.3345,scaleY:48.3345,rotation:-4.7552,x:743.05,y:35.6},0).wait(1).to({scaleX:49.1784,scaleY:49.1784,rotation:-2.7064,x:762,y:24.8},0).wait(1).to({scaleX:50.0243,scaleY:50.0243,rotation:-0.6577,x:780.85,y:14.05},0).wait(1).to({scaleX:50.8704,scaleY:50.8704,rotation:1.3911,x:799.8,y:3.35},0).wait(1).to({scaleX:51.7148,scaleY:51.7148,rotation:3.4398,x:818.7,y:-7.35},0).wait(1).to({scaleX:52.5596,scaleY:52.5596,rotation:5.4886,x:837.6,y:-18.15},0).wait(1).to({scaleX:53.4062,scaleY:53.4062,rotation:7.5373,x:856.6,y:-28.9},0).wait(1).to({scaleX:54.2508,scaleY:54.2508,rotation:9.586,x:875.55,y:-39.55},0).wait(1).to({scaleX:55.0954,scaleY:55.0954,rotation:11.6348,x:894.5,y:-50.25},0).wait(1).to({scaleX:55.9409,scaleY:55.9409,rotation:13.6835,x:913.5,y:-60.95},0).wait(1).to({scaleX:56.7852,scaleY:56.7852,rotation:15.7323,x:932.45,y:-71.7},0).wait(1).to({scaleX:57.6321,scaleY:57.6321,rotation:17.781,x:951.45,y:-82.4},0).wait(1).to({scaleX:58.4763,scaleY:58.4763,rotation:19.8298,x:970.4,y:-93},0).wait(1).to({scaleX:59.3218,scaleY:59.3218,rotation:21.8785,x:989.4,y:-103.75},0).wait(1).to({scaleX:60.167,scaleY:60.167,rotation:23.9273,x:1008.4,y:-114.4},0).wait(1).to({scaleX:61.0122,scaleY:61.0122,rotation:25.976,x:1027.45,y:-125.1},0).wait(1).to({scaleX:61.8576,scaleY:61.8576,rotation:24.3032,x:1024.2,y:-136.7},0).wait(1).to({scaleX:62.7026,scaleY:62.7026,rotation:22.6304,x:1021,y:-148.3},0).wait(1).to({scaleX:63.5488,scaleY:63.5488,rotation:20.9577,x:1017.75,y:-159.9},0).wait(1).to({scaleX:64.3938,scaleY:64.3938,rotation:19.2849,x:1014.55,y:-171.5},0).wait(1).to({scaleX:65.2391,scaleY:65.2391,rotation:17.6121,x:1011.3,y:-183.1},0).wait(1).to({scaleX:66.0839,scaleY:66.0839,rotation:15.9393,x:1008.05,y:-194.7},0).wait(1).to({scaleX:66.9291,scaleY:66.9291,rotation:14.2665,x:1004.75,y:-206.25},0).wait(1).to({scaleX:67.7752,scaleY:67.7752,rotation:12.5938,x:1001.5,y:-217.85},0).wait(1).to({scaleX:68.6203,scaleY:68.6203,rotation:10.921,x:998.25,y:-229.4},0).wait(1).to({scaleX:69.4652,scaleY:69.4652,rotation:9.2482,x:995.05,y:-240.95},0).wait(1).to({scaleX:70.3106,scaleY:70.3106,rotation:7.5754,x:991.8,y:-252.5},0).wait(1).to({scaleX:71.1566,scaleY:71.1566,rotation:5.9026,x:988.5,y:-264.05},0).wait(1).to({scaleX:72.0011,scaleY:72.0011,rotation:4.2299,x:985.2,y:-275.6},0).to({_off:true},1).wait(122));

	// Слой_10
	this.instance_6 = new lib.Magicplace();
	this.instance_6.setTransform(-44,-21,1.8242,1.8242);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(176).to({_off:false},0).to({_off:true},85).wait(122));

	// Слой_6
	this.instance_7 = new lib.Анимация13("synched",0);
	this.instance_7.setTransform(-17.9,80.8);

	this.instance_8 = new lib.Анимация14("synched",0);
	this.instance_8.setTransform(1353.2,59.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_7}]}).to({state:[{t:this.instance_8}]},175).to({state:[]},1).wait(207));
	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({_off:true,guide:{path:[-17.8,80.9,-15.6,86.2,-12.6,91.4,-6.4,102.3,2.4,111,9,117.7,16,120.7,24.4,124.3,31.6,121.7,34.9,120.5,38.4,117.5,39.6,116.6,44.4,112,53.1,103.8,65.3,95.5,73.5,89.9,88,81.3,97.9,75.5,103.6,72.8,112.5,68.5,120.3,66.9,129.4,65,138,66.6,147.3,68.3,153.7,73.9,157.3,77.1,160.7,82.4,162,84.3,166.3,92,171.4,101.2,176.1,107.7,181.9,115.7,188.2,121.4,195.3,128,203.4,131.8,212.2,136,221.1,136.5,235.3,137.3,252.3,128.3,262.2,123,281,110.3,286.6,106.9,290.6,105.2,296,102.9,300.9,102.8,314.6,102.3,328.6,117.5,335.4,125,342.6,136.1,345.3,140.3,354.7,156.1,370.1,181.8,382.7,192.9,389.1,198.6,395.6,201.3,403.3,204.5,410.2,203,415,201.9,419.7,198.4,423.4,195.7,427.6,191,445.6,171.3,454.3,146.8,456.5,140.3,459.2,129.9,463,114.8,463.6,112.8,469.3,92.8,477.8,81.6,486.1,70.8,496.6,67.4,502.5,65.5,508.5,66.4,514.8,67.3,519.2,71.1,523.3,74.5,526.2,80.8,527.5,83.6,530.5,92.3,536.8,110.6,546.8,126.9,549.8,131.8,552.3,134.7,555.7,138.7,559.5,140.9,565.5,144.3,573.8,144.1,580.3,143.9,588.9,141.4,612.5,134.6,623,121.4,626.4,117,630.4,109.1,635.5,98.9,637.1,96.3,641.3,89.4,646.8,85.4,653.2,80.6,659.9,80.8,665.7,80.9,670.8,84.7,675.7,88.2,678.7,93.7,681.3,98.4,682.8,104.9,683.8,109.5,684.5,116.7,685.2,124.1,686,138.9,687,152.1,688.7,160.9,693.7,186.6,708.9,199.5,711,201.3,712.7,201.3,715,201.2,717.2,197.6,722.3,188.8,726.3,176.7,728.9,169.2,732.5,154.7,738.6,131.1,744.7,107.4,747.7,95.5,751,89.1,755.9,79.5,763.6,75.9,769.6,83.5,772.7,95.2,774.8,102.7,776.6,116.7,780.3,145.6,784.1,174.5,785.7,187.1,787.3,193.6,789.8,204,794.5,211.2,798.1,216.9,802.5,218.6,807.4,220.5,814.8,217.8,829.7,212.6,841,197.6,850.3,185.2,856.7,166.9,863.4,145.1,866.9,134.3,873.1,115.1,880.6,103.4,887.8,92.2,896.4,87.7,901.9,84.9,909.5,84,914.3,83.4,923.4,83.5,927.9,83.5,930.4,83.8,934.2,84.3,937,85.7,942.1,88.3,945.5,95.1,946.9,97.8,950.3,107.8,955.1,121.8,963.9,134.3,972.4,146.3,981.5,150.3,986.2,152.3,992.4,152.9,996.9,153.4,1003.7,153.1,1025.5,152.4,1046.1,148.4,1056.8,146.4,1064.5,143.8,1074.3,140.7,1081.7,136.1,1091,130.3,1100.5,119.8,1104.8,115,1116.3,100.3,1121.9,93.1,1125.7,88.9,1131.3,82.9,1136.8,79.2,1148.1,71.6,1162.1,71.4,1176.5,71.2,1187.3,78.8,1196,85,1206,100.9,1217.3,118.7,1223.4,124.5,1235.8,136.4,1254.7,138.9,1272.6,141.3,1289.6,134.6,1305.2,128.5,1319,115.6,1331.1,104.2,1341.3,88.1,1347.6,77.9,1351,69.1,1352.8,64.2,1353.9,59.4]}},175).wait(208));

	// Слой_5
	this.instance_9 = new lib.Символ3();
	this.instance_9.setTransform(-168.6,1061.2,1,1,0,0,0,412.7,476.7);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(47).to({_off:false},0).wait(1).to({rotation:-1.6666,x:-149.45,y:1033.6},0).wait(1).to({rotation:-3.3332,x:-130.3,y:1006},0).wait(1).to({rotation:-4.9999,x:-111.1,y:978.45},0).wait(1).to({rotation:-6.6665,x:-91.95,y:950.85},0).wait(1).to({rotation:-8.3331,x:-72.8,y:923.25},0).wait(1).to({rotation:-9.9997,x:-53.65,y:895.7},0).wait(1).to({rotation:-11.6664,x:-34.5,y:868.1},0).wait(1).to({rotation:-13.333,x:-15.35,y:840.55},0).wait(1).to({rotation:-14.9996,x:3.8,y:812.95},0).wait(1).to({rotation:-16.6662,x:22.9,y:785.35},0).wait(1).to({rotation:-18.3328,x:42.1,y:757.75},0).wait(1).to({rotation:-19.9995,x:61.25,y:730.15},0).wait(1).to({rotation:-21.6661,x:80.4,y:702.6},0).wait(1).to({rotation:-23.3327,x:99.55,y:675},0).wait(1).to({rotation:-24.9993,x:118.7,y:647.45},0).wait(1).to({rotation:-26.666,x:137.9,y:619.85},0).wait(1).to({rotation:-28.3326,x:157,y:592.3},0).wait(1).to({rotation:-29.9992,x:176.15,y:564.7},0).wait(1).to({rotation:-27.6916,x:176.2,y:564.65},0).wait(1).to({rotation:-25.3839,x:176.15},0).wait(1).to({rotation:-23.0763,x:176.2,y:564.7},0).wait(1).to({rotation:-20.7687,y:564.65},0).wait(1).to({rotation:-18.461,x:176.15},0).wait(1).to({rotation:-16.1534,y:564.7},0).wait(1).to({rotation:-13.8458,x:176.2},0).wait(1).to({rotation:-11.5382,x:176.15,y:564.65},0).wait(1).to({rotation:-9.2305},0).wait(1).to({rotation:-6.9229,x:176.2},0).wait(1).to({rotation:-4.6153,x:176.15,y:564.7},0).wait(1).to({rotation:-2.3076},0).wait(1).to({rotation:0},0).wait(1).to({rotation:-3.3332},0).wait(1).to({rotation:-6.6665,x:176.2,y:564.65},0).wait(1).to({rotation:-9.9997,x:176.15,y:564.7},0).wait(1).to({rotation:-13.333},0).wait(1).to({rotation:-16.6662,y:564.65},0).wait(1).to({rotation:-19.9995,x:176.2},0).wait(1).to({rotation:-23.3327,x:176.15},0).wait(1).to({rotation:-26.666,x:176.2,y:564.7},0).wait(1).to({rotation:-29.9992,x:176.15},0).wait(1).to({rotation:-27.1069},0).wait(1).to({rotation:-24.2146},0).wait(1).to({rotation:-21.3223,x:176.2,y:564.65},0).wait(1).to({rotation:-18.43,y:564.7},0).wait(1).to({rotation:-15.5377,x:176.15,y:564.65},0).wait(1).to({rotation:-12.6454,x:176.2,y:564.7},0).wait(1).to({rotation:-9.7531},0).wait(1).to({rotation:-6.8609},0).wait(1).to({rotation:-3.9686,x:176.15},0).wait(1).to({rotation:-1.0763,y:564.65},0).wait(1).to({rotation:1.816,x:176.2},0).wait(1).to({rotation:4.7083,x:176.15},0).wait(1).to({rotation:7.6006,y:564.7},0).wait(1).to({rotation:10.4929,x:176.2},0).wait(1).to({rotation:5.7192,y:564.6},0).wait(1).to({rotation:0.9456,y:564.7},0).wait(1).to({rotation:-3.8281,x:176.1},0).wait(1).to({rotation:-8.6018,x:176.15},0).wait(1).to({rotation:-13.3755},0).wait(1).to({rotation:-18.1491},0).wait(1).to({rotation:-22.9228,y:564.65},0).wait(1).to({rotation:-27.6965,y:564.7},0).wait(2).to({x:54.55,y:765.7},0).wait(1).to({x:-67,y:966.7},0).wait(1).to({x:-188.6,y:1167.7},0).wait(3).to({scaleX:0.9655,rotation:0,skewY:180,x:1357.1,y:1062},0).wait(1).to({skewX:1.8922,skewY:181.8922,x:1331.7,y:982.15},0).wait(1).to({skewX:3.7844,skewY:183.7844,x:1306.3,y:902.3},0).wait(1).to({skewX:5.6766,skewY:185.6766,x:1280.85,y:822.45},0).wait(1).to({skewX:7.5688,skewY:187.5688,x:1255.45,y:742.6},0).wait(1).to({skewX:9.461,skewY:189.461,x:1230,y:662.75},0).wait(1).to({skewX:11.3532,skewY:191.3533,x:1204.6,y:582.9},0).wait(1).to({skewX:13.2455,skewY:193.2455,x:1179.2,y:503.05},0).wait(1).to({skewX:15.1377,skewY:195.1377},0).wait(1).to({skewX:17.0299,skewY:197.0299},0).wait(1).to({skewX:18.9221,skewY:198.9221,y:503.1},0).wait(1).to({skewX:20.8143,skewY:200.8143,x:1179.15,y:503.05},0).wait(1).to({skewX:22.7065,skewY:202.7065,x:1179.2,y:503.1},0).wait(1).to({skewX:18.9329,skewY:198.9329,y:503.05},0).wait(1).to({skewX:15.1593,skewY:195.1593,x:1179.15},0).wait(1).to({skewX:11.3857,skewY:191.3857,x:1179.2},0).wait(1).to({skewX:7.6121,skewY:187.6121,x:1179.15},0).wait(1).to({skewX:3.8384,skewY:183.8384,x:1179.2},0).wait(1).to({skewX:0.0648,skewY:180.0648,x:1179.15,y:503.1},0).wait(1).to({skewX:-3.7088,skewY:176.2912,x:1179.2,y:503.05},0).wait(1).to({skewX:-7.4824,skewY:172.5176,y:503.15},0).wait(1).to({skewX:-11.256,skewY:168.744,x:1179.15,y:503.1},0).wait(1).to({skewX:-7.6759,skewY:172.3241},0).wait(1).to({skewX:-4.0958,skewY:175.9042,y:503.15},0).wait(1).to({skewX:-0.5157,skewY:179.4843,y:503.1},0).wait(1).to({skewX:3.0644,skewY:183.0644,y:503.05},0).wait(1).to({skewX:6.6446,skewY:186.6446,x:1179.2,y:503.1},0).wait(1).to({skewX:10.2247,skewY:190.2247,y:503.05},0).wait(1).to({skewX:13.8048,skewY:193.8048,x:1179.15},0).wait(1).to({skewX:17.3849,skewY:197.3849},0).wait(1).to({skewX:20.965,skewY:200.965,x:1179.2,y:503.1},0).wait(1).to({skewX:16.7939,skewY:196.7939,x:1179.15},0).wait(1).to({skewX:12.6228,skewY:192.6228,x:1179.2,y:503.05},0).wait(1).to({skewX:8.4517,skewY:188.4517},0).wait(1).to({skewX:4.2806,skewY:184.2806,x:1179.15},0).wait(1).to({skewX:0.1096,skewY:180.1096,x:1179.2,y:503.1},0).wait(1).to({skewX:-4.0615,skewY:175.9385,x:1179.15},0).wait(1).to({skewX:-8.2326,skewY:171.7674,y:503.15},0).wait(1).to({skewX:-12.4037,skewY:167.5963,x:1179.2,y:503.1},0).wait(1).to({skewX:-16.5748,skewY:163.4252},0).wait(1).to({skewX:-20.7459,skewY:159.2541,y:503.15},0).wait(1).to({skewX:-16.6503,skewY:163.3497,y:503.1},0).wait(1).to({skewX:-12.5548,skewY:167.4452,x:1179.15},0).wait(1).to({skewX:-8.4593,skewY:171.5408},0).wait(1).to({skewX:-4.3637,skewY:175.6363},0).wait(1).to({skewX:-0.2681,skewY:179.7319,x:1179.2,y:503.05},0).wait(1).to({skewX:3.8274,skewY:183.8274,y:503.1},0).wait(1).to({skewX:7.923,skewY:187.9229},0).wait(1).to({skewX:12.0185,skewY:192.0185},0).wait(1).to({skewX:16.1141,skewY:196.1141,y:503.05},0).wait(1).to({skewX:20.2096,skewY:200.2096},0).wait(1).to({skewX:16.3243,skewY:196.3243,x:1179.15,y:503.1},0).wait(1).to({skewX:12.439,skewY:192.439,y:503.05},0).wait(1).to({skewX:8.5537,skewY:188.5537,x:1179.2,y:503.1},0).wait(1).to({skewX:4.6684,skewY:184.6684,x:1179.15},0).wait(1).to({skewX:0.7832,skewY:180.7832,x:1179.2,y:503.05},0).wait(1).to({skewX:-3.1021,skewY:176.8979},0).wait(1).to({skewX:-6.9874,skewY:173.0126,x:1179.15,y:503.1},0).wait(1).to({skewX:-10.8727,skewY:169.1273},0).wait(1).to({skewX:-14.758,skewY:165.242,x:1179.2},0).to({_off:true},1).wait(207));

	// Слой_7
	this.instance_10 = new lib.Символ1();
	this.instance_10.setTransform(783.65,434.95,1,1,0,0,0,240.7,284.9);
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(47).to({_off:false},0).wait(1).to({regY:285,scaleX:0.9984,rotation:0.1013,x:794.2,y:441.8},0).wait(1).to({scaleX:0.9969,rotation:0.2026,x:804.85,y:448.6},0).wait(1).to({scaleX:0.9953,rotation:0.3039,x:815.45,y:455.35},0).wait(1).to({scaleX:0.9937,rotation:0.4052,x:826.1,y:462.2},0).wait(1).to({scaleX:0.9922,rotation:0.5064,x:836.7,y:468.95},0).wait(1).to({scaleX:0.9906,rotation:0.6077,x:847.25,y:475.8},0).wait(1).to({scaleX:0.989,rotation:0.709,x:857.9,y:482.5},0).wait(1).to({scaleX:0.9875,rotation:0.8103,x:868.45,y:489.3},0).wait(1).to({scaleX:0.9859,rotation:0.9116,x:879.05,y:496.05},0).wait(1).to({scaleX:0.9843,rotation:1.0129,x:889.7,y:502.9},0).wait(1).to({scaleX:0.9827,rotation:1.1142,x:900.3,y:495.6},0).wait(1).to({scaleX:0.9812,rotation:1.2155,x:910.9,y:488.3},0).wait(1).to({scaleX:0.9796,rotation:1.3168,x:921.55,y:481},0).wait(1).to({scaleX:0.9781,rotation:1.4181,x:932.15,y:473.75},0).wait(1).to({scaleX:0.9765,rotation:1.5193,x:942.75,y:466.5},0).wait(1).to({scaleX:0.9749,rotation:1.6206,x:953.35,y:459.2},0).wait(1).to({scaleX:0.9733,rotation:1.7219,x:963.95,y:451.9},0).wait(1).to({scaleX:0.9717,rotation:1.8232,x:974.6,y:444.6},0).wait(1).to({scaleX:0.9702,rotation:1.9245,x:985.2,y:437.35},0).wait(1).to({scaleX:0.9686,rotation:2.0258,x:987.8,y:446.45},0).wait(1).to({scaleX:0.9671,rotation:2.1271,x:990.35,y:455.55},0).wait(1).to({scaleX:0.9655,rotation:2.2284,x:993,y:464.7},0).wait(1).to({scaleX:0.9639,rotation:2.3297,x:995.6,y:473.8},0).wait(1).to({scaleX:0.9624,rotation:2.4309,x:998.2,y:482.9},0).wait(1).to({scaleX:0.9608,rotation:2.5322,x:1000.9,y:492},0).wait(1).to({scaleX:0.9592,rotation:2.6335,x:1003.5,y:501.15},0).wait(1).to({scaleX:0.9576,rotation:2.7348,x:1006.1,y:510.25},0).wait(1).to({scaleX:0.9561,rotation:2.8361,x:1008.7,y:519.4},0).wait(1).to({scaleX:0.9545,rotation:2.9374,x:1011.35,y:528.45},0).wait(1).to({scaleX:0.9529,rotation:3.0387,x:1013.95,y:537.6},0).wait(1).to({scaleX:0.9514,rotation:3.14,x:1016.55,y:546.7},0).wait(1).to({scaleX:0.9498,rotation:3.2413,x:1019.2,y:555.85},0).wait(1).to({scaleX:0.9482,rotation:3.3426,x:1021.8,y:564.95},0).wait(1).to({scaleX:0.9467,rotation:3.4438,x:1029.95,y:562.45},0).wait(1).to({scaleX:0.9451,rotation:3.5451,x:1038.1,y:559.9},0).wait(1).to({scaleX:0.9435,rotation:3.6464,x:1046.2,y:557.35},0).wait(1).to({scaleX:0.9419,rotation:3.7477,x:1054.35,y:554.85},0).wait(1).to({scaleX:0.9404,rotation:3.849,x:1062.55,y:552.35},0).wait(1).to({scaleX:0.9388,rotation:3.9503,x:1070.7,y:549.75},0).wait(1).to({scaleX:0.9373,rotation:4.0516,x:1078.8,y:547.3},0).wait(1).to({scaleX:0.9357,rotation:4.1529,x:1086.95,y:544.75},0).wait(1).to({scaleX:0.9341,rotation:4.2542,x:1095.1,y:542.2},0).wait(1).to({scaleX:0.9325,rotation:4.3554,x:1103.25,y:539.65},0).wait(1).to({scaleX:0.9309,rotation:4.4567,x:1111.4,y:537.15},0).wait(1).to({scaleX:0.9294,rotation:4.558,x:1119.55,y:534.65},0).wait(1).to({scaleX:0.7089,rotation:4.6593,x:1092.65,y:532.75},0).wait(1).to({scaleX:0.4883,rotation:4.7606,x:1065.7,y:530.85},0).wait(1).to({scaleX:0.2678,rotation:4.8619,x:1038.75,y:529},0).wait(1).to({scaleX:0.0472,rotation:4.9632,x:1011.8,y:527.2},0).wait(1).to({scaleX:0.1733,rotation:0,skewX:5.0645,skewY:-174.9355,x:984.9,y:525.3},0).wait(1).to({scaleX:0.3939,skewX:5.1658,skewY:-174.8342,x:958,y:523.4},0).wait(1).to({scaleX:0.6144,skewX:5.267,skewY:-174.733,x:931.05,y:521.6},0).wait(1).to({scaleX:0.8349,skewX:5.3683,skewY:-174.6317,x:904.1,y:519.7},0).wait(1).to({scaleX:1.0555,skewX:5.4696,skewY:-174.5304,x:877.15,y:517.8},0).wait(1).to({skewX:5.5709,skewY:-174.4291,x:850.25,y:515.95},0).wait(1).to({skewX:5.6722,skewY:-174.3278,x:823.35,y:514.1},0).wait(1).to({skewX:5.7735,skewY:-174.2265,x:796.4,y:512.2},0).wait(1).to({skewX:5.8748,skewY:-174.1252,x:769.5,y:510.35},0).wait(1).to({skewX:5.9761,skewY:-174.0239,x:742.6,y:508.45},0).wait(1).to({skewX:6.0774,skewY:-173.9226,x:715.65,y:506.6},0).wait(1).to({skewX:6.1787,skewY:-173.8213,x:688.75,y:504.75},0).wait(1).to({skewX:6.2799,skewY:-173.7201,x:661.75,y:502.85},0).wait(1).to({skewX:6.3812,skewY:-173.6188,x:632.8,y:513.6},0).wait(1).to({skewX:6.4825,skewY:-173.5175,x:603.7,y:524.25},0).wait(1).to({skewX:6.5838,skewY:-173.4162,x:574.7,y:534.95},0).wait(1).to({skewX:6.6851,skewY:-173.3149,x:545.75,y:545.75},0).wait(1).to({skewX:6.7864,skewY:-173.2136,x:516.75,y:556.45},0).wait(1).to({skewX:6.8877,skewY:-173.1123,x:487.75,y:567.2},0).wait(1).to({skewX:6.989,skewY:-173.011,x:458.75,y:577.9},0).wait(1).to({skewX:8.6554,skewY:-171.3446,x:437.2,y:546.8},0).wait(1).to({skewX:10.3219,skewY:-169.6781,x:415.65,y:515.8},0).wait(1).to({skewX:11.9883,skewY:-168.0117,x:394.05,y:484.75},0).wait(1).to({skewX:13.6548,skewY:-166.3452,x:372.45,y:453.7},0).wait(1).to({skewX:15.3212,skewY:-164.6788,x:350.95,y:422.55},0).wait(1).to({skewX:16.9877,skewY:-163.0123,x:329.35,y:391.55},0).wait(1).to({skewX:18.6541,skewY:-161.3459,x:307.75,y:360.55},0).wait(1).to({skewX:20.3206,skewY:-159.6794,x:286.2,y:329.45},0).wait(1).to({skewX:21.987,skewY:-158.013,x:264.65,y:298.4},0).wait(1).to({skewX:18.2386,skewY:-161.7614,x:251.15,y:327.4},0).wait(1).to({skewX:14.4903,skewY:-165.5097,x:237.75,y:356.4},0).wait(1).to({skewX:10.7419,skewY:-169.2581,x:224.3,y:385.35},0).wait(1).to({skewX:6.9935,skewY:-173.0065,x:210.85,y:414.35},0).wait(1).to({skewX:3.2452,skewY:-176.7548,x:197.35,y:443.35},0).wait(1).to({skewX:-0.5032,skewY:-180.5032,x:183.9,y:472.35},0).wait(1).to({skewX:-4.2516,skewY:-184.2516,x:170.5,y:501.35},0).wait(1).to({skewX:-6.4221,skewY:-186.4221,x:150.65,y:489.55},0).wait(1).to({skewX:-8.5925,skewY:-188.5925,x:130.8,y:477.8},0).wait(1).to({skewX:-10.763,skewY:-190.763,x:110.9,y:466.05},0).wait(1).to({skewX:-12.9334,skewY:-192.9334,x:91.1,y:454.25},0).wait(1).to({skewX:-15.1039,skewY:-195.1039,x:71.2,y:442.5},0).wait(1).to({skewX:-17.2744,skewY:-197.2744,x:51.35,y:430.75},0).wait(1).to({skewX:-19.4448,skewY:-199.4448,x:31.5,y:418.95},0).wait(1).to({skewX:-21.6153,skewY:-201.6153,x:11.65,y:407.25},0).wait(1).to({skewX:-23.7857,skewY:-203.7857,x:-8.15,y:395.45},0).wait(1).to({skewX:-25.9562,skewY:-205.9562,x:-28,y:383.7},0).wait(1).to({x:-60.95,y:393.8},0).wait(1).to({x:-93.85,y:403.9},0).wait(1).to({x:-126.7,y:414.05},0).wait(1).to({x:-159.6,y:424.15},0).wait(1).to({x:-192.55,y:434.25},0).wait(1).to({x:-225.45,y:444.35},0).wait(1).to({x:-258.35,y:454.5},0).wait(1).to({x:-291.25,y:464.6},0).wait(25).to({_off:true},1).wait(207));

	// Слой_4
	this.instance_11 = new lib.Тиана();
	this.instance_11.setTransform(936,233,0.5728,0.5728);

	this.instance_12 = new lib.Анимация7("synched",0);
	this.instance_12.setTransform(1271.8,473.85);
	this.instance_12._off = true;

	this.instance_13 = new lib.Анимация8("synched",0);
	this.instance_13.setTransform(860.8,473.85);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_11}]}).to({state:[{t:this.instance_12}]},32).to({state:[{t:this.instance_13}]},14).to({state:[]},1).wait(336));
	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(32).to({_off:false},0).to({_off:true,x:860.8},14).wait(337));

	// Слой_3
	this.instance_14 = new lib.Навинфлиртун();
	this.instance_14.setTransform(263,208,0.9996,0.9996);

	this.instance_15 = new lib.Символ2();
	this.instance_15.setTransform(532.9,509.9,1,1,0,0,0,269.9,301.9);
	this.instance_15._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_14}]},24).to({state:[{t:this.instance_15}]},23).to({state:[{t:this.instance_15}]},1).to({state:[{t:this.instance_15}]},1).to({state:[{t:this.instance_15}]},1).to({state:[{t:this.instance_15}]},1).to({state:[{t:this.instance_15}]},1).to({state:[{t:this.instance_15}]},1).to({state:[{t:this.instance_15}]},1).to({state:[{t:this.instance_15}]},1).to({state:[{t:this.instance_15}]},1).to({state:[{t:this.instance_15}]},1).to({state:[{t:this.instance_15}]},1).to({state:[{t:this.instance_15}]},1).to({state:[{t:this.instance_15}]},1).to({state:[{t:this.instance_15}]},1).to({state:[{t:this.instance_15}]},1).to({state:[{t:this.instance_15}]},1).to({state:[{t:this.instance_15}]},1).to({state:[{t:this.instance_15}]},1).to({state:[{t:this.instance_15}]},1).to({state:[{t:this.instance_15}]},1).to({state:[{t:this.instance_15}]},1).to({state:[{t:this.instance_15}]},1).to({state:[{t:this.instance_15}]},1).to({state:[{t:this.instance_15}]},1).to({state:[{t:this.instance_15}]},1).to({state:[{t:this.instance_15}]},1).to({state:[{t:this.instance_15}]},1).to({state:[{t:this.instance_15}]},1).to({state:[{t:this.instance_15}]},1).to({state:[{t:this.instance_15}]},1).to({state:[{t:this.instance_15}]},1).to({state:[{t:this.instance_15}]},1).to({state:[{t:this.instance_15}]},1).to({state:[{t:this.instance_15}]},1).to({state:[{t:this.instance_15}]},1).to({state:[{t:this.instance_15}]},1).to({state:[{t:this.instance_15}]},1).to({state:[{t:this.instance_15}]},1).to({state:[{t:this.instance_15}]},1).to({state:[{t:this.instance_15}]},1).to({state:[{t:this.instance_15}]},1).to({state:[{t:this.instance_15}]},1).to({state:[{t:this.instance_15}]},1).to({state:[{t:this.instance_15}]},1).to({state:[{t:this.instance_15}]},1).to({state:[{t:this.instance_15}]},1).to({state:[{t:this.instance_15}]},1).to({state:[{t:this.instance_15}]},1).to({state:[{t:this.instance_15}]},1).to({state:[{t:this.instance_15}]},1).to({state:[{t:this.instance_15}]},1).to({state:[{t:this.instance_15}]},1).to({state:[{t:this.instance_15}]},1).to({state:[{t:this.instance_15}]},1).to({state:[{t:this.instance_15}]},1).to({state:[{t:this.instance_15}]},1).to({state:[{t:this.instance_15}]},1).to({state:[{t:this.instance_15}]},1).to({state:[{t:this.instance_15}]},1).to({state:[{t:this.instance_15}]},1).to({state:[{t:this.instance_15}]},1).to({state:[{t:this.instance_15}]},1).to({state:[{t:this.instance_15}]},1).to({state:[{t:this.instance_15}]},1).to({state:[{t:this.instance_15}]},1).to({state:[{t:this.instance_15}]},1).to({state:[{t:this.instance_15}]},1).to({state:[{t:this.instance_15}]},1).to({state:[{t:this.instance_15}]},1).to({state:[{t:this.instance_15}]},1).to({state:[{t:this.instance_15}]},1).to({state:[{t:this.instance_15}]},1).to({state:[{t:this.instance_15}]},1).to({state:[{t:this.instance_15}]},1).to({state:[{t:this.instance_15}]},1).to({state:[{t:this.instance_15}]},1).to({state:[{t:this.instance_15}]},1).to({state:[{t:this.instance_15}]},1).to({state:[{t:this.instance_15}]},1).to({state:[{t:this.instance_15}]},1).to({state:[{t:this.instance_15}]},1).to({state:[{t:this.instance_15}]},1).to({state:[{t:this.instance_15}]},1).to({state:[{t:this.instance_15}]},1).to({state:[{t:this.instance_15}]},1).to({state:[{t:this.instance_15}]},1).to({state:[{t:this.instance_15}]},1).to({state:[{t:this.instance_15}]},1).to({state:[{t:this.instance_15}]},1).to({state:[{t:this.instance_15}]},1).to({state:[{t:this.instance_15}]},1).to({state:[{t:this.instance_15}]},1).to({state:[{t:this.instance_15}]},1).to({state:[{t:this.instance_15}]},1).to({state:[{t:this.instance_15}]},1).to({state:[{t:this.instance_15}]},1).to({state:[{t:this.instance_15}]},1).to({state:[{t:this.instance_15}]},1).to({state:[{t:this.instance_15}]},1).to({state:[{t:this.instance_15}]},1).to({state:[{t:this.instance_15}]},1).to({state:[{t:this.instance_15}]},1).to({state:[{t:this.instance_15}]},1).to({state:[{t:this.instance_15}]},1).to({state:[{t:this.instance_15}]},1).to({state:[{t:this.instance_15}]},1).to({state:[{t:this.instance_15}]},1).to({state:[{t:this.instance_15}]},1).to({state:[{t:this.instance_15}]},1).to({state:[{t:this.instance_15}]},1).to({state:[{t:this.instance_15}]},1).to({state:[{t:this.instance_15}]},1).to({state:[{t:this.instance_15}]},1).to({state:[{t:this.instance_15}]},1).to({state:[{t:this.instance_15}]},1).to({state:[{t:this.instance_15}]},1).to({state:[{t:this.instance_15}]},1).to({state:[{t:this.instance_15}]},1).to({state:[{t:this.instance_15}]},1).to({state:[{t:this.instance_15}]},1).to({state:[{t:this.instance_15}]},1).to({state:[{t:this.instance_15}]},1).to({state:[{t:this.instance_15}]},1).to({state:[{t:this.instance_15}]},1).to({state:[{t:this.instance_15}]},1).to({state:[{t:this.instance_15}]},1).to({state:[{t:this.instance_15}]},1).to({state:[{t:this.instance_15}]},1).to({state:[]},1).wait(207));
	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(47).to({_off:false},0).wait(1).to({x:544.15,y:519.7},0).wait(1).to({x:555.4,y:529.55},0).wait(1).to({x:566.7,y:539.35},0).wait(1).to({x:577.95,y:549.2},0).wait(1).to({x:589.25,y:559.05},0).wait(1).to({x:600.5,y:568.85},0).wait(1).to({x:611.75,y:578.7},0).wait(1).to({x:623.05,y:588.5},0).wait(1).to({x:634.3,y:598.35},0).wait(1).to({x:645.6,y:608.2},0).wait(1).to({x:655.7,y:598.95},0).wait(1).to({x:665.85,y:589.75},0).wait(1).to({x:675.95,y:580.55},0).wait(1).to({x:686.1,y:571.35},0).wait(1).to({x:696.2,y:562.15},0).wait(1).to({x:706.35,y:552.95},0).wait(1).to({x:716.45,y:543.75},0).wait(1).to({x:726.6,y:534.55},0).wait(1).to({x:736.75,y:525.35},0).wait(1).to({x:739.8,y:533.95},0).wait(1).to({x:742.9,y:542.6},0).wait(1).to({x:746,y:551.25},0).wait(1).to({x:749.1,y:559.9},0).wait(1).to({x:752.2,y:568.55},0).wait(1).to({x:755.3,y:577.2},0).wait(1).to({x:758.4,y:585.85},0).wait(1).to({x:761.45,y:594.5},0).wait(1).to({x:764.55,y:603.15},0).wait(1).to({x:767.65,y:611.8},0).wait(1).to({x:770.75,y:620.45},0).wait(1).to({x:773.85,y:629.1},0).wait(1).to({x:776.95,y:637.75},0).wait(1).to({x:780.05,y:646.4},0).wait(1).to({x:788.6,y:643.7},0).wait(1).to({x:797.1,y:641},0).wait(1).to({x:805.65,y:638.3},0).wait(1).to({x:814.2,y:635.6},0).wait(1).to({x:822.75,y:632.85},0).wait(1).to({x:831.3,y:630.15},0).wait(1).to({x:839.8,y:627.45},0).wait(1).to({x:848.35,y:624.75},0).wait(1).to({x:856.9,y:622.05},0).wait(1).to({x:865.45,y:619.35},0).wait(1).to({x:874,y:616.6},0).wait(1).to({x:882.5,y:613.9},0).wait(1).to({x:884.65,y:610.75},0).wait(1).to({x:886.8,y:607.6},0).wait(1).to({x:888.95,y:604.5},0).wait(1).to({x:891.1,y:601.35},0).wait(1).to({x:893.2,y:598.2},0).wait(1).to({x:895.35,y:595.05},0).wait(1).to({x:897.5,y:591.9},0).wait(1).to({x:895.2,y:587.85},0).wait(1).to({x:892.85,y:583.8},0).wait(1).to({x:890.55,y:579.8},0).wait(1).to({x:888.25,y:575.75},0).wait(1).to({x:885.9,y:571.7},0).wait(1).to({scaleX:0.9661,skewX:1.2443,skewY:-178.7557,x:778.75,y:567.7},0).wait(1).to({skewX:2.4886,skewY:-177.5114,x:802.65,y:563.65},0).wait(1).to({skewX:3.7329,skewY:-176.2671,x:826.5,y:559.55},0).wait(1).to({skewX:4.9772,skewY:-175.0228,x:850.35,y:555.55},0).wait(1).to({skewX:6.2216,skewY:-173.7784,x:874.25,y:551.5},0).wait(1).to({skewX:7.4659,skewY:-172.5341,x:866.6,y:552.05},0).wait(1).to({skewX:8.7102,skewY:-171.2898,x:859.1,y:552.6},0).wait(1).to({skewX:9.9545,skewY:-170.0455,x:851.5,y:553.2},0).wait(1).to({skewX:11.1988,skewY:-168.8012,x:843.9,y:553.75},0).wait(1).to({skewX:8.0619,skewY:-171.9381,x:836.35,y:554.3},0).wait(1).to({skewX:4.9249,skewY:-175.0751,x:828.75,y:554.85},0).wait(1).to({skewX:1.788,skewY:-178.212,x:821.25,y:555.4},0).wait(1).to({skewX:-1.349,skewY:-181.349,x:813.65,y:555.95},0).wait(1).to({skewX:-4.4859,skewY:-184.4859,x:806.05,y:556.5},0).wait(1).to({skewX:-7.6229,skewY:-187.6229,x:798.5,y:557.1},0).wait(1).to({skewX:-10.7598,skewY:-190.7598,x:790.9,y:557.65},0).wait(1).to({skewX:-9.1366,skewY:-189.1366,x:783.35,y:558.2},0).wait(1).to({skewX:-7.5133,skewY:-187.5133,x:775.75,y:558.75},0).wait(1).to({skewX:-5.8901,skewY:-185.8901,x:768.2,y:559.3},0).wait(1).to({skewX:-4.2668,skewY:-184.2668,x:760.6,y:559.85},0).wait(1).to({skewX:-2.6436,skewY:-182.6436,x:753,y:560.45},0).wait(1).to({skewX:-1.0203,skewY:-181.0203,x:745.5,y:561},0).wait(1).to({skewX:0.6029,skewY:-179.3971,x:737.9,y:561.55},0).wait(1).to({skewX:2.2261,skewY:-177.7739,x:730.3,y:562.05},0).wait(1).to({skewX:3.8494,skewY:-176.1506,x:722.75,y:562.6},0).wait(1).to({skewX:5.4726,skewY:-174.5274,x:715.15,y:563.2},0).wait(1).to({skewX:7.0959,skewY:-172.9041,x:707.55,y:563.75},0).wait(1).to({skewX:8.7191,skewY:-171.2809,x:700,y:564.3},0).wait(1).to({skewX:10.3424,skewY:-169.6576,x:692.4,y:564.85},0).wait(1).to({skewX:11.9656,skewY:-168.0344,x:684.8,y:565.4},0).wait(1).to({skewX:8.0425,skewY:-171.9575,x:677.25,y:565.95},0).wait(1).to({skewX:4.1194,skewY:-175.8806,x:669.7,y:566.5},0).wait(1).to({skewX:0.1963,skewY:-179.8037,x:662.1,y:567.1},0).wait(1).to({skewX:-3.7269,skewY:-183.7269,x:654.5,y:567.65},0).wait(1).to({skewX:-7.65,skewY:-187.65,x:646.95,y:568.2},0).wait(1).to({skewX:-11.5731,skewY:-191.5731,x:639.4,y:568.75},0).wait(1).to({skewX:-15.4962,skewY:-195.4962,x:631.85,y:569.3},0).wait(1).to({skewX:-13.324,skewY:-193.324,x:624.2,y:569.85},0).wait(1).to({skewX:-11.1519,skewY:-191.1519,x:616.7,y:570.45},0).wait(1).to({skewX:-8.9797,skewY:-188.9797,x:609.05,y:571},0).wait(1).to({skewX:-6.8075,skewY:-186.8075,x:601.55,y:571.5},0).wait(1).to({skewX:-4.6354,skewY:-184.6354,x:593.95,y:572.05},0).wait(1).to({skewX:-2.4632,skewY:-182.4632,x:586.35,y:572.6},0).wait(1).to({skewX:-0.291,skewY:-180.291,x:578.8,y:573.2},0).wait(1).to({skewX:1.8812,skewY:-178.1188,x:571.25,y:573.75},0).wait(1).to({skewX:4.0533,skewY:-175.9467,x:563.6,y:574.3},0).wait(1).to({skewX:6.2255,skewY:-173.7745,x:556.05,y:574.85},0).wait(1).to({skewX:4.8619,skewY:-175.1381,x:548.5,y:575.4},0).wait(1).to({skewX:3.4983,skewY:-176.5017,x:540.95,y:576},0).wait(1).to({skewX:2.1347,skewY:-177.8653,x:533.35,y:576.55},0).wait(1).to({skewX:0.7711,skewY:-179.2289,x:525.8,y:577.05},0).wait(1).to({skewX:-0.5924,skewY:-180.5924,x:518.15,y:577.65},0).wait(1).to({skewX:-1.956,skewY:-181.956,x:510.6,y:578.15},0).wait(1).to({skewX:-3.3196,skewY:-183.3196,x:503.05,y:578.75},0).wait(1).to({skewX:-4.6832,skewY:-184.6832,x:495.45,y:579.35},0).wait(1).to({skewX:-6.0468,skewY:-186.0468,x:487.9,y:579.85},0).wait(1).to({skewX:-7.4104,skewY:-187.4104,x:480.35,y:580.45},0).wait(1).to({skewX:-8.774,skewY:-188.774,x:472.75,y:580.95},0).wait(1).to({skewX:-7.274,skewY:-187.274,x:404.3,y:575.8},0).wait(1).to({skewX:-5.7741,skewY:-185.7741,x:335.95,y:570.7},0).wait(1).to({skewX:-4.2741,skewY:-184.2741,x:267.6,y:565.55},0).wait(1).to({skewX:-2.7742,skewY:-182.7742,x:199.15,y:560.4},0).wait(1).to({skewX:-1.2742,skewY:-181.2742,x:130.75,y:555.25},0).wait(1).to({skewX:0.2257,skewY:-179.7743,x:62.35,y:550.1},0).wait(1).to({skewX:1.7257,skewY:-178.2743,x:-6.05,y:544.95},0).wait(1).to({skewX:3.2256,skewY:-176.7744,x:-74.4,y:539.8},0).wait(1).to({skewX:4.7255,skewY:-175.2745,x:-142.75,y:534.6},0).wait(1).to({skewX:6.2255,skewY:-173.7745,x:-211.2,y:529.55},0).wait(3).to({_off:true},1).wait(207));

	// Слой_1
	this.instance_16 = new lib.Анимация1("synched",0);
	this.instance_16.setTransform(193.65,484.8);

	this.instance_17 = new lib.Анимация2("synched",0);
	this.instance_17.setTransform(576.4,484.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_16}]}).to({state:[{t:this.instance_17}]},23).to({state:[]},1).wait(359));
	this.timeline.addTween(cjs.Tween.get(this.instance_16).to({_off:true,x:576.4},23).wait(360));

	// Слой_2
	this.instance_18 = new lib.ThePrincessAndTheFrog();
	this.instance_18.setTransform(-5,-22,1.9854,1.9854);

	this.timeline.addTween(cjs.Tween.get(this.instance_18).to({_off:true},176).wait(207));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(-168,-162.3,1923.6,2164.3);
// library properties:
lib.properties = {
	id: '278A4D5666D1984A8745C3B2517BC049',
	width: 1280,
	height: 720,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/vtoroe_atlas_1.png", id:"vtoroe_atlas_1"},
		{src:"images/vtoroe_atlas_2.png", id:"vtoroe_atlas_2"},
		{src:"images/vtoroe_atlas_3.png", id:"vtoroe_atlas_3"},
		{src:"images/vtoroe_atlas_4.png", id:"vtoroe_atlas_4"}
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
an.compositions['278A4D5666D1984A8745C3B2517BC049'] = {
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