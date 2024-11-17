(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"tretie_atlas_1", frames: [[0,0,736,736],[0,738,736,736],[738,0,736,736],[738,738,736,736]]},
		{name:"tretie_atlas_2", frames: [[0,1476,626,417],[0,0,736,736],[0,738,736,736]]}
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



(lib.веревочки = function() {
	this.initialize(ss["tretie_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.крыло = function() {
	this.initialize(ss["tretie_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.лягушка = function() {
	this.initialize(ss["tretie_atlas_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.Aformadicuorefattadinuvolebiancogrigiesucieloblu_FotoPremium = function() {
	this.initialize(ss["tretie_atlas_2"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.сердечкор = function() {
	this.initialize(ss["tretie_atlas_1"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.сердечкотр = function() {
	this.initialize(ss["tretie_atlas_2"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.феюшка = function() {
	this.initialize(ss["tretie_atlas_2"]);
	this.gotoAndStop(2);
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
	this.instance = new lib.крыло();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Символ5, new cjs.Rectangle(0,0,736,736), null);


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
	this.instance = new lib.лягушка();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Символ3, new cjs.Rectangle(0,0,736,736), null);


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
	this.instance = new lib.сердечкотр();
	this.instance.setTransform(0,0,1.2395,1.2395);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Символ2, new cjs.Rectangle(0,0,912.3,912.3), null);


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
	this.instance = new lib.сердечкор();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Символ1, new cjs.Rectangle(0,0,736,736), null);


(lib.трсердечко = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Символ2();
	this.instance.setTransform(381.8,189.1,1.3388,1.3388,-25.9859,0,0,380.1,189.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:456.1,regY:456.1,scaleX:1.314,scaleY:1.314,rotation:-25.9865,x:625.05,y:460.1},0).wait(1).to({scaleX:1.2891,scaleY:1.2891,x:620.45,y:455},0).wait(1).to({scaleX:1.2643,scaleY:1.2643,x:615.85,y:449.85},0).wait(1).to({scaleX:1.2395,scaleY:1.2395,x:611.25,y:444.7},0).wait(1).to({scaleX:1.2146,scaleY:1.2146,x:606.7,y:439.6},0).wait(1).to({scaleX:1.1898,scaleY:1.1898,x:602.05,y:434.5},0).wait(1).to({scaleX:1.165,scaleY:1.165,x:597.45,y:429.35},0).wait(1).to({scaleX:1.1401,scaleY:1.1401,x:592.9,y:424.25},0).wait(1).to({scaleX:1.1153,scaleY:1.1153,x:588.3,y:419.1},0).wait(1).to({scaleX:1.0905,scaleY:1.0905,x:583.65,y:414},0).wait(1).to({scaleX:1.0656,scaleY:1.0656,x:579.1,y:408.9},0).wait(1).to({scaleX:1.0408,scaleY:1.0408,x:574.5,y:403.75},0).wait(1).to({scaleX:1.016,scaleY:1.016,x:569.95,y:398.65},0).wait(1).to({scaleX:0.9911,scaleY:0.9911,x:565.3,y:393.55},0).wait(1).to({scaleX:0.9663,scaleY:0.9663,x:560.7,y:388.4},0).wait(1).to({scaleX:0.9415,scaleY:0.9415,x:556.15,y:383.3},0).wait(1).to({scaleX:0.9635,scaleY:0.9635,x:560.2,y:387.85},0).wait(1).to({scaleX:0.9856,scaleY:0.9856,x:564.3,y:392.4},0).wait(1).to({scaleX:1.0077,scaleY:1.0077,x:568.35,y:396.95},0).wait(1).to({scaleX:1.0298,scaleY:1.0298,x:572.5,y:401.5},0).wait(1).to({scaleX:1.0518,scaleY:1.0518,x:576.55,y:406.05},0).wait(1).to({scaleX:1.0739,scaleY:1.0739,x:580.6,y:410.6},0).wait(1).to({scaleX:1.096,scaleY:1.096,x:584.7,y:415.2},0).wait(1).to({scaleX:1.1181,scaleY:1.1181,x:588.8,y:419.7},0).wait(1).to({scaleX:1.1401,scaleY:1.1401,x:592.9,y:424.25},0).wait(1).to({scaleX:1.1622,scaleY:1.1622,x:596.95,y:428.8},0).wait(1).to({scaleX:1.1843,scaleY:1.1843,x:601.05,y:433.4},0).wait(1).to({scaleX:1.2064,scaleY:1.2064,x:605.15,y:437.9},0).wait(1).to({scaleX:1.2284,scaleY:1.2284,x:609.25,y:442.45},0).wait(1).to({scaleX:1.2505,scaleY:1.2505,x:613.3,y:447.05},0).wait(1).to({scaleX:1.2726,scaleY:1.2726,x:617.4,y:451.6},0).wait(1).to({scaleX:1.2947,scaleY:1.2947,x:621.5,y:456.1},0).wait(1).to({scaleX:1.3167,scaleY:1.3167,x:625.6,y:460.65},0).wait(1).to({scaleX:1.3388,scaleY:1.3388,x:629.65,y:465.25},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-186.8,-351.2,1633.1,1633);


(lib.рсердечко = function(mode,startPosition,loop,reversed) {
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
	this.instance.setTransform(426.85,164.4,1,1,-20.9882,0,0,426.4,164.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:368,regY:368,scaleX:1.0214,scaleY:1.0214,rotation:-20.9886,x:445.7,y:379.9},0).wait(1).to({scaleX:1.0427,scaleY:1.0427,x:446.1,y:384.45},0).wait(1).to({scaleX:1.0641,scaleY:1.0641,x:446.5,y:389},0).wait(1).to({scaleX:1.0855,scaleY:1.0855,x:446.85,y:393.5},0).wait(1).to({scaleX:1.1068,scaleY:1.1068,x:447.3,y:398},0).wait(1).to({scaleX:1.1282,scaleY:1.1282,x:447.7,y:402.55},0).wait(1).to({scaleX:1.1496,scaleY:1.1496,x:448.05,y:407.05},0).wait(1).to({scaleX:1.1709,scaleY:1.1709,x:448.45,y:411.5},0).wait(1).to({scaleX:1.1923,scaleY:1.1923,x:448.85,y:416.05},0).wait(1).to({scaleX:1.2137,scaleY:1.2137,x:449.25,y:420.6},0).wait(1).to({scaleX:1.235,scaleY:1.235,x:449.7,y:425.05},0).wait(1).to({scaleX:1.2564,scaleY:1.2564,x:450,y:429.55},0).wait(1).to({scaleX:1.2778,scaleY:1.2778,x:450.4,y:434.1},0).wait(1).to({scaleX:1.2991,scaleY:1.2991,x:450.85,y:438.55},0).wait(1).to({scaleX:1.3205,scaleY:1.3205,x:451.25,y:443.1},0).wait(1).to({scaleX:1.3419,scaleY:1.3419,x:451.65,y:447.65},0).wait(1).to({scaleX:1.3632,scaleY:1.3632,x:452,y:452.1},0).wait(1).to({scaleX:1.3846,scaleY:1.3846,x:452.4,y:456.6},0).wait(1).to({scaleX:1.3605,scaleY:1.3605,x:452,y:451.55},0).wait(1).to({scaleX:1.3365,scaleY:1.3365,x:451.5,y:446.5},0).wait(1).to({scaleX:1.3125,scaleY:1.3125,x:451.1,y:441.4},0).wait(1).to({scaleX:1.2884,scaleY:1.2884,x:450.7,y:436.35},0).wait(1).to({scaleX:1.2644,scaleY:1.2644,x:450.15,y:431.25},0).wait(1).to({scaleX:1.2404,scaleY:1.2404,x:449.75,y:426.15},0).wait(1).to({scaleX:1.2163,scaleY:1.2163,x:449.3,y:421.15},0).wait(1).to({scaleX:1.1923,scaleY:1.1923,x:448.85,y:416.05},0).wait(1).to({scaleX:1.1683,scaleY:1.1683,x:448.45,y:410.95},0).wait(1).to({scaleX:1.1442,scaleY:1.1442,x:447.95,y:405.95},0).wait(1).to({scaleX:1.1202,scaleY:1.1202,x:447.5,y:400.8},0).wait(1).to({scaleX:1.0962,scaleY:1.0962,x:447.1,y:395.7},0).wait(1).to({scaleX:1.0721,scaleY:1.0721,x:446.6,y:390.7},0).wait(1).to({scaleX:1.0481,scaleY:1.0481,x:446.2,y:385.6},0).wait(1).to({scaleX:1.024,scaleY:1.024,x:445.8,y:380.5},0).wait(1).to({scaleX:1,scaleY:1,x:445.3,y:375.5},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-205.7,-201.6,1316.4,1316.3999999999999);


(lib.лягушечкапутешественница = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Символ3();
	this.instance.setTransform(367.9,367.95,1,1,14.9983,0,0,367.9,367.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:368,regY:368,rotation:13.7489,y:368.4},0).wait(1).to({rotation:12.4989},0).wait(1).to({rotation:11.2489},0).wait(1).to({rotation:9.9988},0).wait(1).to({rotation:8.7488,x:367.95},0).wait(1).to({rotation:7.4988,x:368},0).wait(1).to({rotation:6.2488,x:367.95},0).wait(1).to({rotation:4.9988,x:368},0).wait(1).to({rotation:3.7488},0).wait(1).to({rotation:2.4988,y:368.45},0).wait(1).to({rotation:1.2488,y:368.4},0).wait(1).to({rotation:-0.0012},0).wait(1).to({rotation:-1.2513,x:368.05,y:368.35},0).wait(1).to({rotation:-2.5013,y:368.4},0).wait(1).to({rotation:-3.7513},0).wait(1).to({rotation:-5.0013,x:368.1,y:368.35},0).wait(1).to({rotation:-6.2513,x:368.05},0).wait(1).to({rotation:-7.5013,x:368.1},0).wait(1).to({rotation:-8.7513},0).wait(1).to({rotation:-10.0013},0).wait(1).to({rotation:-11.2514},0).wait(1).to({rotation:-12.5014},0).wait(1).to({rotation:-13.7514},0).wait(1).to({rotation:-15.0014,x:368.15},0).wait(1).to({rotation:-13.5728,x:368.1},0).wait(1).to({rotation:-12.1442},0).wait(1).to({rotation:-10.7156,y:368.4},0).wait(1).to({rotation:-9.2871,y:368.3},0).wait(1).to({rotation:-7.8585,y:368.4},0).wait(1).to({rotation:-6.4299},0).wait(1).to({rotation:-5.0013,y:368.35},0).wait(1).to({rotation:-3.5727},0).wait(1).to({rotation:-2.1441,x:368.05,y:368.4},0).wait(1).to({rotation:-0.7155,y:368.35},0).wait(1).to({rotation:0.713,x:367.95,y:368.4},0).wait(1).to({rotation:2.1416,x:368,y:368.45},0).wait(1).to({rotation:3.5702,y:368.4},0).wait(1).to({rotation:4.9988},0).wait(1).to({rotation:6.4274,x:367.95,y:368.45},0).wait(1).to({rotation:7.856},0).wait(1).to({rotation:9.2846,x:368,y:368.4},0).wait(1).to({rotation:10.7131,x:367.95,y:368.45},0).wait(1).to({rotation:12.1417,x:367.9,y:368.4},0).wait(1).to({rotation:13.5703},0).wait(1).to({rotation:14.9989},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-82.8,-82.3,901.6999999999999,901.5);


(lib.крыло_п = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Символ5();
	this.instance.setTransform(514,324.1,1,1,0,0,0,514,324.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:368,regY:368,scaleX:0.924,x:379.05,y:368},0).wait(1).to({scaleX:0.848,x:390.15},0).wait(1).to({scaleX:0.772,x:401.3},0).wait(1).to({scaleX:0.6959,x:412.35},0).wait(1).to({scaleX:0.6199,x:423.5},0).wait(1).to({scaleX:0.5439,x:434.55},0).wait(1).to({scaleX:0.4679,x:445.65},0).wait(1).to({scaleX:0.3919,x:456.75},0).wait(1).to({scaleX:0.4901,x:442.4},0).wait(1).to({scaleX:0.5883,x:428.1},0).wait(1).to({scaleX:0.6865,x:413.7},0).wait(1).to({scaleX:0.7847,x:399.4},0).wait(1).to({scaleX:0.8829,x:385.05},0).wait(1).to({scaleX:0.8036,x:396.65},0).wait(1).to({scaleX:0.7243,x:408.25},0).wait(1).to({scaleX:0.645,x:419.8},0).wait(1).to({scaleX:0.5657,x:431.35},0).wait(1).to({scaleX:0.4864,x:443},0).wait(1).to({scaleX:0.5756,x:429.95},0).wait(1).to({scaleX:0.6648,x:416.9},0).wait(1).to({scaleX:0.754,x:403.85},0).wait(1).to({scaleX:0.8432,x:390.85},0).wait(1).to({scaleX:0.9324,x:377.85},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,736,736);


(lib.шарики = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.трсердечко();
	this.instance.setTransform(1361.35,1181.9,0.4164,0.4394,0,-34.0576,145.9419,629.7,465.3);

	this.instance_1 = new lib.рсердечко();
	this.instance_1.setTransform(1340.75,993.95,1.3333,1.2688,0,-15.9291,149.0025,433.4,178.3);

	this.instance_2 = new lib.трсердечко();
	this.instance_2.setTransform(1239.55,975,1,1,0,0,0,371.1,182.2);

	this.instance_3 = new lib.рсердечко();
	this.instance_3.setTransform(1452.45,1009.7,1,1,21.4582,0,0,441.9,168.7);

	this.instance_4 = new lib.трсердечко();
	this.instance_4.setTransform(1359.3,1351.8,1.2215,1.1953,0,-31.2879,148.7117,629.5,465.2);

	this.instance_5 = new lib.рсердечко();
	this.instance_5.setTransform(1328.15,1369.95,2.4786,2.2961,0,0,0,444.9,375.3);

	this.instance_6 = new lib.веревочки();
	this.instance_6.setTransform(1007.45,826.15);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.шарики, new cjs.Rectangle(150.8,278.8,2356.6,2183.1), null);


(lib.фея = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.феюшка();
	this.instance.setTransform(51.05,110.65);

	this.instance_1 = new lib.крыло_п();
	this.instance_1.setTransform(463.55,473.75,0.9497,1,0,-22.4731,157.5273,368.1,368.1);

	this.instance_2 = new lib.крыло_п();
	this.instance_2.setTransform(368,478.85,1,1,0,0,0,368,368);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.фея, new cjs.Rectangle(0,0,927.3,947.3), null);


(lib.полёт = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.шарики();
	this.instance.setTransform(889.6,884.95,0.6546,0.6546,0,0,0,1359.2,1352);

	this.instance_1 = new lib.лягушечкапутешественница();
	this.instance_1.setTransform(899.05,775.05,1,1,0,0,0,368,368);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.полёт, new cjs.Rectangle(98.6,182.5,1542.6000000000001,1429), null);


// stage content:
(lib.символьнаяанимация = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_2
	this.instance = new lib.фея();
	this.instance.setTransform(1809.4,744.7,1,1,0,0,0,463.6,473.7);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(169).to({_off:false},0).wait(1).to({regY:473.6,x:1775.75,y:747.65},0).wait(1).to({x:1742.1,y:750.35},0).wait(1).to({x:1708.5,y:752.7},0).wait(1).to({x:1674.95,y:754.7},0).wait(1).to({x:1641.5,y:756.35},0).wait(1).to({x:1608.05,y:757.65},0).wait(1).to({x:1574.75,y:758.55},0).wait(1).to({x:1541.5,y:759.05},0).wait(1).to({x:1508.4,y:759.15},0).wait(1).to({x:1475.4,y:758.9},0).wait(1).to({x:1442.55,y:758.2},0).wait(1).to({x:1409.85,y:757.15},0).wait(1).to({x:1377.3,y:755.65},0).wait(1).to({x:1344.9,y:753.7},0).wait(1).to({x:1312.75,y:751.35},0).wait(1).to({x:1280.75,y:748.5},0).wait(1).to({x:1249,y:745.25},0).wait(1).to({x:1217.5,y:741.55},0).wait(1).to({x:1186.2,y:737.4},0).wait(1).to({x:1155.15,y:732.75},0).wait(1).to({x:1124.4,y:727.65},0).wait(1).to({x:1093.9,y:722.05},0).wait(1).to({x:1063.7,y:715.95},0).wait(1).to({x:1033.85,y:709.4},0).wait(1).to({x:1004.25,y:702.3},0).wait(1).to({x:975.05,y:694.7},0).wait(1).to({x:946.15,y:686.6},0).wait(1).to({x:917.6,y:677.95},0).wait(1).to({x:889.45,y:668.75},0).wait(1).to({x:861.7,y:659.05},0).wait(1).to({x:834.3,y:648.8},0).wait(1).to({x:807.35,y:637.95},0).wait(1).to({x:780.8,y:626.6},0).wait(1).to({x:754.65,y:614.65},0).wait(1).to({x:729,y:602.15},0).wait(1).to({x:703.8,y:589.05},0).wait(1).to({x:679.1,y:575.35},0).wait(1).to({x:654.85,y:561.05},0).wait(1).to({x:631.1,y:546.15},0).wait(1).to({x:607.9,y:530.65},0).wait(1).to({x:585.2,y:514.55},0).wait(1).to({x:563.05,y:497.8},0).wait(1).to({x:541.45,y:480.4},0).wait(1).to({x:520.4,y:462.45},0).wait(1).to({x:499.95,y:443.8},0).wait(1).to({x:480.05,y:424.45},0).wait(1).to({x:460.85,y:404.45},0).wait(1).to({x:442.2,y:383.8},0).wait(1).to({x:424.2,y:362.5},0).wait(1).to({x:406.85,y:340.5},0).wait(1).to({x:390.1,y:317.8},0).wait(1).to({x:374.1,y:294.4},0).wait(1).to({x:358.7,y:270.25},0).wait(1).to({x:344.05,y:245.45},0).wait(1).to({x:330.1,y:219.9},0).wait(1).to({x:316.9,y:193.65},0).wait(1).to({x:304.4,y:166.75},0).wait(1).to({x:292.65,y:139.3},0).wait(1).to({x:281.55,y:111.35},0).wait(1).to({x:271.05,y:82.85},0).wait(1).to({x:261.1,y:53.8},0).wait(1).to({x:251.6,y:24.2},0).wait(1).to({x:242.5,y:-5.9},0).wait(1).to({x:233.75,y:-36.55},0).wait(1).to({x:225.25,y:-67.7},0).wait(1).to({x:217,y:-99.45},0).wait(1).to({x:208.85,y:-131.7},0).wait(1).to({x:200.8,y:-164.5},0).wait(1).to({x:192.75,y:-197.85},0).to({_off:true},1).wait(5));

	// шарики
	this.instance_1 = new lib.полёт();
	this.instance_1.setTransform(-145,1036.3,1,1,0,0,0,889.9,884.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({regX:881.5,regY:1004.1,scaleX:0.9876,scaleY:0.9876,rotation:2.7068,x:-153.7,y:1129.35},0).wait(1).to({scaleX:0.9753,scaleY:0.9753,rotation:5.2029,x:-152.1,y:1102},0).wait(1).to({scaleX:0.9629,scaleY:0.9629,rotation:7.4792,x:-148.55,y:1073.9},0).wait(1).to({scaleX:0.9505,scaleY:0.9505,rotation:9.5761,x:-143.25,y:1045.25},0).wait(1).to({scaleX:0.9381,scaleY:0.9381,rotation:11.5271,x:-136.25,y:1016.05},0).wait(1).to({scaleX:0.9257,scaleY:0.9257,rotation:13.3601,x:-127.75,y:986.35},0).wait(1).to({scaleX:0.9134,scaleY:0.9134,rotation:15.0987,x:-117.85,y:956.4},0).wait(1).to({scaleX:0.901,scaleY:0.901,rotation:16.763,x:-106.55,y:926.2},0).wait(1).to({scaleX:0.8886,scaleY:0.8886,rotation:18.3703,x:-94,y:895.9},0).wait(1).to({scaleX:0.8762,scaleY:0.8762,rotation:19.9359,x:-80.2,y:865.55},0).wait(1).to({scaleX:0.8638,scaleY:0.8638,rotation:21.4735,x:-65.3,y:835.25},0).wait(1).to({scaleX:0.8514,scaleY:0.8514,rotation:22.9957,x:-49.3,y:805.05},0).wait(1).to({scaleX:0.8391,scaleY:0.8391,rotation:24.5141,x:-32.4,y:775.1},0).wait(1).to({scaleX:0.8267,scaleY:0.8267,rotation:26.0399,x:-14.45,y:745.35},0).wait(1).to({scaleX:0.8143,scaleY:0.8143,rotation:27.5836,x:4.35,y:716},0).wait(1).to({scaleX:0.8019,scaleY:0.8019,rotation:29.1559,x:24,y:687.1},0).wait(1).to({scaleX:0.7895,scaleY:0.7895,rotation:30.7675,x:44.45,y:658.7},0).wait(1).to({scaleX:0.7772,scaleY:0.7772,rotation:32.4292,x:65.7,y:630.9},0).wait(1).to({scaleX:0.7648,scaleY:0.7648,rotation:34.1523,x:87.6,y:603.8},0).wait(1).to({scaleX:0.7524,scaleY:0.7524,rotation:35.9487,x:110.15,y:577.4},0).wait(1).to({scaleX:0.74,scaleY:0.74,rotation:37.8307,x:133.35,y:551.9},0).wait(1).to({scaleX:0.7276,scaleY:0.7276,rotation:39.8116,x:157.1,y:527.1},0).wait(1).to({scaleX:0.7153,scaleY:0.7153,rotation:41.9056,x:181.45,y:503.45},0).wait(1).to({scaleX:0.7029,scaleY:0.7029,rotation:44.1275,x:206.3,y:480.8},0).wait(1).to({scaleX:0.6905,scaleY:0.6905,rotation:46.4933,x:231.65,y:459.15},0).wait(1).to({scaleX:0.6781,scaleY:0.6781,rotation:49.0193,x:257.35,y:438.8},0).wait(1).to({scaleX:0.6657,scaleY:0.6657,rotation:51.7225,x:283.65,y:419.7},0).wait(1).to({scaleX:0.6534,scaleY:0.6534,rotation:54.6197,x:310.2,y:401.8},0).wait(1).to({scaleX:0.641,scaleY:0.641,rotation:57.7269,x:337.3,y:385.45},0).wait(1).to({scaleX:0.6286,scaleY:0.6286,rotation:61.0583,x:364.75,y:370.5},0).wait(1).to({scaleX:0.6162,scaleY:0.6162,rotation:64.6244,x:392.6,y:357.15},0).wait(1).to({scaleX:0.6038,scaleY:0.6038,rotation:68.4311,x:420.85,y:345.5},0).wait(1).to({scaleX:0.5915,scaleY:0.5915,rotation:72.477,x:449.6,y:335.65},0).wait(1).to({scaleX:0.5791,scaleY:0.5791,rotation:76.7513,x:478.8,y:327.75},0).wait(1).to({scaleX:0.5667,scaleY:0.5667,rotation:81.2326,x:508.45,y:321.95},0).wait(1).to({scaleX:0.5543,scaleY:0.5543,rotation:82.0928,x:540.4,y:322.55},0).wait(1).to({scaleX:0.542,scaleY:0.542,rotation:80.7512,x:572.05,y:324.95},0).wait(1).to({scaleX:0.5296,scaleY:0.5296,rotation:79.3747,x:603.15,y:326.6},0).wait(1).to({scaleX:0.5172,scaleY:0.5172,rotation:77.962,x:633.75,y:327.45},0).wait(1).to({scaleX:0.5048,scaleY:0.5048,rotation:76.5121,x:663.8,y:327.6},0).wait(1).to({scaleX:0.4924,scaleY:0.4924,rotation:75.024,x:693.3,y:327.05},0).wait(1).to({scaleX:0.48,scaleY:0.48,rotation:73.4965,x:722.3,y:325.75},0).wait(1).to({scaleX:0.4677,scaleY:0.4677,rotation:71.9288,x:750.75,y:323.7},0).wait(1).to({scaleX:0.4553,scaleY:0.4553,rotation:70.3198,x:778.55,y:321},0).wait(1).to({scaleX:0.4429,scaleY:0.4429,rotation:68.6686,x:805.85,y:317.5},0).wait(1).to({scaleX:0.4305,scaleY:0.4305,rotation:66.9745,x:832.55,y:313.35},0).wait(1).to({scaleX:0.4182,scaleY:0.4182,rotation:65.2366,x:858.7,y:308.55},0).wait(1).to({scaleX:0.4058,scaleY:0.4058,rotation:63.4545,x:884.25,y:303},0).wait(1).to({scaleX:0.3934,scaleY:0.3934,rotation:61.6275,x:909.15,y:296.8},0).wait(1).to({scaleX:0.381,scaleY:0.381,rotation:59.7555,x:933.4,y:289.95},0).wait(1).to({scaleX:0.3686,scaleY:0.3686,rotation:57.8383,x:957.1,y:282.35},0).wait(1).to({scaleX:0.3562,scaleY:0.3562,rotation:55.8761,x:980.2,y:274.1},0).wait(1).to({scaleX:0.3439,scaleY:0.3439,rotation:53.8692,x:1002.6,y:265.2},0).wait(1).to({scaleX:0.3315,scaleY:0.3315,rotation:51.8182,x:1024.4,y:255.7},0).wait(1).to({scaleX:0.3191,scaleY:0.3191,rotation:49.724,x:1045.5,y:245.5},0).wait(1).to({scaleX:0.3067,scaleY:0.3067,rotation:47.5879,x:1065.9,y:234.65},0).wait(1).to({scaleX:0.2943,scaleY:0.2943,rotation:45.4114,x:1085.7,y:223.2},0).wait(1).to({scaleX:0.282,scaleY:0.282,rotation:43.1964,x:1104.75,y:211.2},0).wait(1).to({scaleX:0.2696,scaleY:0.2696,rotation:40.9451,x:1123.1,y:198.55},0).wait(1).to({scaleX:0.2572,scaleY:0.2572,rotation:38.6603,x:1140.7,y:185.3},0).wait(1).to({scaleX:0.2448,scaleY:0.2448,rotation:36.3448,x:1157.55,y:171.45},0).wait(1).to({scaleX:0.2324,scaleY:0.2324,rotation:34.002,x:1173.75,y:157},0).wait(1).to({scaleX:0.2201,scaleY:0.2201,rotation:31.6354,x:1189.15,y:142.05},0).wait(1).to({scaleX:0.2077,scaleY:0.2077,rotation:29.2489,x:1203.8,y:126.5},0).wait(1).to({scaleX:0.1953,scaleY:0.1953,rotation:26.8467,x:1217.6,y:110.45},0).wait(1).to({scaleX:0.1829,scaleY:0.1829,rotation:24.4331,x:1230.65,y:93.85},0).wait(1).to({scaleX:0.1705,scaleY:0.1705,rotation:22.0125,x:1242.9,y:76.8},0).wait(1).to({scaleX:0.1582,scaleY:0.1582,rotation:19.5895,x:1254.3,y:59.2},0).wait(1).to({scaleX:0.1458,scaleY:0.1458,rotation:17.1687,x:1264.95,y:41.2},0).wait(1).to({scaleX:0.1334,scaleY:0.1334,rotation:14.7545,x:1274.65,y:22.7},0).wait(1).to({scaleX:0.121,scaleY:0.121,rotation:12.3514,x:1283.6,y:3.75},0).wait(1).to({scaleX:0.1086,scaleY:0.1086,rotation:9.9637,x:1291.7,y:-15.55},0).wait(1).to({scaleX:0.0963,scaleY:0.0963,rotation:7.5954,x:1298.9,y:-35.25},0).to({_off:true},1).wait(170));

	// р_сердечко
	this.instance_2 = new lib.полёт();
	this.instance_2.setTransform(202.25,1269.3,1,1,0,0,0,889.6,885);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(74).to({y:1160.55},0).wait(1).to({regX:881.5,regY:1004.1,rotation:-0.4659,x:195.15,y:1264.15},0).wait(1).to({rotation:-0.9318,x:196.2,y:1248.65},0).wait(1).to({rotation:-1.3977,x:197.25,y:1233.15},0).wait(1).to({rotation:-1.8636,x:198.3,y:1217.65},0).wait(1).to({rotation:-2.3295,x:199.25,y:1202.15},0).wait(1).to({rotation:-2.7954,x:200.3,y:1186.6},0).wait(1).to({rotation:-3.2613,x:201.3,y:1171.05},0).wait(1).to({rotation:-3.7272,x:202.35,y:1155.5},0).wait(1).to({rotation:-4.1931,x:203.4,y:1139.95},0).wait(1).to({rotation:-4.659,x:204.4,y:1124.45},0).wait(1).to({rotation:-5.1249,x:205.45,y:1108.85},0).wait(1).to({rotation:-5.5909,x:206.45,y:1093.3},0).wait(1).to({rotation:-6.0568,x:207.5,y:1077.75},0).wait(1).to({rotation:-6.5227,x:208.5,y:1062.1},0).wait(1).to({rotation:-6.9886,x:209.5,y:1046.55},0).wait(1).to({rotation:-7.4545,x:210.55,y:1030.95},0).wait(1).to({rotation:-6.5394,x:208.7,y:1015.45},0).wait(1).to({rotation:-5.6243,x:206.85,y:1000},0).wait(1).to({rotation:-4.7091,x:205,y:984.5},0).wait(1).to({rotation:-3.794,x:203.15,y:969},0).wait(1).to({rotation:-2.8789,x:201.3,y:953.5},0).wait(1).to({rotation:-1.9638,x:199.45,y:937.85},0).wait(1).to({rotation:-1.0487,x:197.55,y:922.25},0).wait(1).to({rotation:-0.1336,x:195.75,y:906.6},0).wait(1).to({rotation:0.7815,x:193.85,y:890.85},0).wait(1).to({rotation:1.6966,x:192.05,y:875.15},0).wait(1).to({rotation:2.6117,x:190.15,y:859.4},0).wait(1).to({rotation:3.5268,x:188.35,y:843.65},0).wait(1).to({rotation:4.4419,x:186.55,y:827.85},0).wait(1).to({rotation:5.3571,x:184.7,y:812},0).wait(1).to({rotation:6.2722,x:182.85,y:796.15},0).wait(1).to({rotation:4.9282,x:185.7,y:781.1},0).wait(1).to({rotation:3.5843,x:188.5,y:765.85},0).wait(1).to({rotation:2.2404,x:191.35,y:750.65},0).wait(1).to({rotation:0.8965,x:194.2,y:735.4},0).wait(1).to({rotation:-0.4474,x:197.05,y:720.1},0).wait(1).to({rotation:-1.7914,x:199.9,y:704.65},0).wait(1).to({rotation:-3.1353,x:202.7,y:689.2},0).wait(1).to({rotation:-4.4792,x:205.6,y:673.6},0).wait(1).to({rotation:-5.8231,x:208.45,y:658},0).wait(1).to({rotation:-7.167,x:211.25,y:642.4},0).wait(1).to({rotation:-8.511,x:214.15,y:626.65},0).wait(1).to({rotation:-9.8549,x:217,y:610.8},0).wait(1).to({rotation:-11.1988,x:219.8,y:594.95},0).wait(1).to({rotation:-10.2707,x:217.9,y:579.65},0).wait(1).to({rotation:-9.3425,x:216.1,y:564.25},0).wait(1).to({rotation:-8.4144,x:214.2,y:548.9},0).wait(1).to({rotation:-7.4862,x:212.35,y:533.5},0).wait(1).to({rotation:-6.5581,x:210.45,y:518.1},0).wait(1).to({rotation:-5.63,x:208.6,y:502.6},0).wait(1).to({rotation:-4.7018,x:206.7,y:487.05},0).wait(1).to({rotation:-3.7737,x:204.85,y:471.55},0).wait(1).to({rotation:-2.8455,x:202.95,y:456},0).wait(1).to({rotation:-1.9174,x:201.05,y:440.4},0).wait(1).to({rotation:-0.9893,x:199.2,y:424.75},0).wait(1).to({rotation:-0.0611,x:197.3,y:409.1},0).wait(1).to({rotation:0.867,x:195.45,y:393.45},0).wait(1).to({rotation:1.7952,x:193.55,y:377.65},0).wait(1).to({rotation:0.9223,x:195.45,y:362.3},0).wait(1).to({rotation:0.0494,x:197.3,y:346.9},0).wait(1).to({rotation:-0.8235,x:199.1,y:331.5},0).wait(1).to({rotation:-1.6964,x:201,y:316},0).wait(1).to({rotation:-2.5693,x:202.9,y:300.55},0).wait(1).to({rotation:-3.4422,x:204.75,y:285},0).wait(1).to({rotation:-4.3151,x:206.65,y:269.4},0).wait(1).to({rotation:-5.188,x:208.55,y:253.9},0).wait(1).to({rotation:-6.0609,x:210.35,y:238.3},0).wait(1).to({rotation:-6.9337,x:212.25,y:222.65},0).wait(1).to({rotation:-7.8066,x:214.1,y:207},0).wait(1).to({rotation:-8.6795,x:216,y:191.3},0).wait(1).to({rotation:-9.5524,x:217.8,y:175.55},0).wait(1).to({rotation:-10.4253,x:219.75,y:159.85},0).wait(1).to({rotation:-9.4481,x:217.75,y:144.5},0).wait(1).to({rotation:-8.4708,x:215.8,y:129.15},0).wait(1).to({rotation:-7.4936,x:213.8,y:113.75},0).wait(1).to({rotation:-6.5163,x:211.85,y:98.3},0).wait(1).to({rotation:-5.5391,x:209.8,y:82.8},0).wait(1).to({rotation:-4.5619,x:207.85,y:67.3},0).wait(1).to({rotation:-3.5846,x:205.85,y:51.75},0).wait(1).to({rotation:-2.6074,x:203.9,y:36.2},0).wait(1).to({rotation:-1.6301,x:201.9,y:20.65},0).wait(1).to({rotation:-0.6529,x:199.95,y:4.9},0).wait(1).to({rotation:0.3244,x:197.9,y:-10.75},0).wait(1).to({x:197.95,y:-26.3},0).wait(1).to({x:198,y:-41.85},0).wait(1).to({x:198.05,y:-57.4},0).wait(1).to({x:198.1,y:-72.9},0).wait(1).to({x:198.2,y:-88.45},0).wait(1).to({x:198.25,y:-104},0).wait(1).to({x:198.3,y:-119.55},0).wait(1).to({x:198.35,y:-135.1},0).wait(1).to({x:198.4,y:-150.65},0).wait(1).to({x:198.45,y:-166.2},0).wait(1).to({x:198.5,y:-181.75},0).to({_off:true},1).wait(75));

	// веревочки_png
	this.instance_3 = new lib.Aformadicuorefattadinuvolebiancogrigiesucieloblu_FotoPremium();
	this.instance_3.setTransform(-36,-93,2.1764,2.1764);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(244));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(-296.2,-641.3,2569.2999999999997,2637.1);
// library properties:
lib.properties = {
	id: 'F5A59BAF23D37E4CA4FCFB3D6ABA1DE9',
	width: 1280,
	height: 720,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/tretie_atlas_1.png", id:"tretie_atlas_1"},
		{src:"images/tretie_atlas_2.png", id:"tretie_atlas_2"}
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
an.compositions['F5A59BAF23D37E4CA4FCFB3D6ABA1DE9'] = {
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