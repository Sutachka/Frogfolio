(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"bts_atlas_1", frames: [[0,0,1215,108],[0,110,1215,108]]}
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



(lib.CachedBmp_2 = function() {
	this.initialize(ss["bts_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1 = function() {
	this.initialize(ss["bts_atlas_1"]);
	this.gotoAndStop(1);
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
	this.instance = new lib.CachedBmp_2();
	this.instance.setTransform(-0.4,0.25,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Символ4, new cjs.Rectangle(-0.4,0.3,607.5,54), null);


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
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#A252E4").s().p("AA4DTIh7gjQgHgCgFgGQgEgGAAgIIAAjzQAAgLAIgGIB3hjQAKgJANAGQANAGAAAOIAEF4QAAAMgJAGQgGAFgHAAIgGAAg");
	this.shape.setTransform(8.425,21.15,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Символ3, new cjs.Rectangle(0,0,16.9,42.3), null);


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
	this.shape.graphics.f("#A252E4").s().p("AA4DTIh7gjQgHgCgFgGQgEgGAAgIIAAjzQAAgLAIgGIB3hjQAKgJANAGQANAGAAAOIAEF4QAAAMgJAGQgGAFgHAAIgGAAg");
	this.shape.setTransform(8.425,21.15);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Символ1, new cjs.Rectangle(0,0,16.9,42.3), null);


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
	this.instance = new lib.Символ3();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Символ2, new cjs.Rectangle(0,0,16.9,42.3), null);


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
	this.instance = new lib.Символ2();
	this.instance.setTransform(35.05,81.25,2.11,2.11,0,0,0,16.6,38.5);

	this.instance_1 = new lib.Символ1();
	this.instance_1.setTransform(42.05,82.1,2.101,2.101,-0.2289,0,0,0,39);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Символ6, new cjs.Rectangle(0,0,77.5,89.3), null);


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
	this.instance = new lib.Символ6();
	this.instance.setTransform(38.7,44.6,1,1,0,0,0,38.7,44.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:0.9802,scaleY:0.9802,y:44.55},0).wait(1).to({scaleX:0.9604,scaleY:0.9604,x:38.65,y:44.6},0).wait(1).to({scaleX:0.9406,scaleY:0.9406},0).wait(1).to({scaleX:0.9208,scaleY:0.9208,x:38.7,y:44.55},0).wait(1).to({scaleX:0.9009,scaleY:0.9009,x:38.65,y:44.6},0).wait(1).to({scaleX:0.8811,scaleY:0.8811},0).wait(1).to({scaleX:0.8613,scaleY:0.8613,x:38.7,y:44.55},0).wait(1).to({scaleX:0.8415,scaleY:0.8415,x:38.65,y:44.6},0).wait(1).to({scaleX:0.8217,scaleY:0.8217},0).wait(1).to({scaleX:0.8019,scaleY:0.8019,x:38.7,y:44.55},0).wait(1).to({scaleX:0.7821,scaleY:0.7821,x:38.65,y:44.6},0).wait(1).to({scaleX:0.7623,scaleY:0.7623},0).wait(1).to({scaleX:0.7425,scaleY:0.7425,x:38.7,y:44.55},0).wait(1).to({scaleX:0.7227,scaleY:0.7227,x:38.65,y:44.6},0).wait(1).to({scaleX:0.7028,scaleY:0.7028},0).wait(1).to({scaleX:0.683,scaleY:0.683,x:38.7,y:44.55},0).wait(1).to({scaleX:0.6632,scaleY:0.6632,x:38.65,y:44.6},0).wait(1).to({scaleX:0.6843,scaleY:0.6843,x:38.7,y:44.55},0).wait(1).to({scaleX:0.7053,scaleY:0.7053},0).wait(1).to({scaleX:0.7264,scaleY:0.7264,x:38.65,y:44.6},0).wait(1).to({scaleX:0.7474,scaleY:0.7474},0).wait(1).to({scaleX:0.7685,scaleY:0.7685,x:38.7,y:44.55},0).wait(1).to({scaleX:0.7895,scaleY:0.7895,x:38.65},0).wait(1).to({scaleX:0.8106,scaleY:0.8106},0).wait(1).to({scaleX:0.8316,scaleY:0.8316,x:38.7,y:44.6},0).wait(1).to({scaleX:0.8527,scaleY:0.8527},0).wait(1).to({scaleX:0.8737,scaleY:0.8737,x:38.65,y:44.55},0).wait(1).to({scaleX:0.8948,scaleY:0.8948,x:38.7},0).wait(1).to({scaleX:0.9158,scaleY:0.9158,y:44.6},0).wait(1).to({scaleX:0.9369,scaleY:0.9369,x:38.65},0).wait(1).to({scaleX:0.9579,scaleY:0.9579,y:44.55},0).wait(1).to({scaleX:0.979,scaleY:0.979,x:38.7},0).wait(1).to({scaleX:1,scaleY:1,y:44.6},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,77.5,89.3);


// stage content:
(lib.плашечкавнизу = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [119];
	// timeline functions:
	this.frame_119 = function() {
		/* Нажмите для перехода к веб-странице
		При нажатии на указанный экземпляр символа производится загрузка веб-страницы в новом окне обозревателя.
		
		Инструкции:
		1. Замените http://www.adobe.com на адрес желаемой веб-страницы.
		   Не удаляйте кавычки ("").
		*/
		
		this.movieClip_1.addEventListener("click", fl_ClickToGoToWebPage);
		
		function fl_ClickToGoToWebPage() {
			window.open("https://ibighit.com/bts/eng/", "_blank");
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(119).call(this.frame_119).wait(75));

	// Слой_1
	this.instance = new lib.CachedBmp_1();
	this.instance.setTransform(-641.25,30.55,0.5,0.5);

	this.instance_1 = new lib.Символ4();
	this.instance_1.setTransform(-337.45,57.35,1,1,0,0,0,303.6,26.9);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},119).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(119).to({_off:false},0).wait(1).to({regX:303.4,regY:27.2,x:-310.95,y:57.65},0).wait(1).to({x:-284.3},0).wait(1).to({x:-257.65},0).wait(1).to({x:-230.95},0).wait(1).to({x:-204.3},0).wait(1).to({x:-177.65},0).wait(1).to({x:-150.95},0).wait(1).to({x:-124.3},0).wait(1).to({x:-97.65},0).wait(1).to({x:-71},0).wait(1).to({x:-44.3},0).wait(1).to({x:-17.65},0).wait(1).to({x:9},0).wait(1).to({x:35.7},0).wait(1).to({x:62.35},0).wait(1).to({x:89},0).wait(1).to({x:115.7},0).wait(1).to({x:142.35},0).wait(1).to({x:169},0).wait(1).to({x:195.65},0).wait(1).to({x:222.35},0).wait(1).to({x:249},0).wait(1).to({x:275.65},0).wait(1).to({x:302.35},0).wait(1).to({x:328.95},0).wait(1).to({x:355.6},0).wait(1).to({x:382.3},0).wait(1).to({x:408.95},0).wait(1).to({x:435.6},0).wait(1).to({x:462.25},0).wait(1).to({x:488.95},0).wait(1).to({x:515.6},0).wait(1).to({x:542.25},0).wait(1).to({x:568.95},0).wait(1).to({x:595.6},0).wait(1).to({x:622.25},0).wait(1).to({x:648.95},0).wait(1).to({x:675.6},0).wait(1).to({x:702.25},0).wait(1).to({x:728.9},0).wait(1).to({x:755.6},0).wait(1).to({x:782.25},0).wait(1).to({x:808.9},0).wait(1).to({x:835.6},0).wait(1).to({x:862.25},0).wait(1).to({x:888.9},0).wait(1).to({x:915.55},0).wait(1).to({x:942.25},0).wait(1).to({x:968.9},0).wait(1).to({x:995.55},0).wait(1).to({x:1022.25},0).wait(1).to({x:1048.9},0).wait(1).to({x:1075.55},0).wait(1).to({x:1102.25},0).wait(1).to({x:1128.9},0).wait(1).to({x:1155.55},0).wait(1).to({x:1182.2},0).wait(1).to({x:1208.9},0).wait(1).to({x:1235.55},0).wait(1).to({x:1262.2},0).wait(1).to({x:1288.9},0).wait(1).to({x:1315.55},0).wait(1).to({x:1342.2},0).wait(1).to({x:1368.9},0).wait(1).to({x:1395.55},0).wait(1).to({x:1422.2},0).wait(1).to({x:1448.85},0).wait(1).to({x:1475.55},0).wait(1).to({x:1502.2},0).wait(1).to({x:1528.85},0).wait(1).to({x:1555.55},0).wait(1).to({x:1582.2},0).wait(1).to({x:1608.85},0).wait(1).to({x:1635.55},0).wait(1));

	// Слой_8
	this.movieClip_1 = new lib.Символ5();
	this.movieClip_1.name = "movieClip_1";
	this.movieClip_1.setTransform(1210.55,57.8,1,1,0,0,0,38.7,44.6);
	this.movieClip_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.movieClip_1).wait(119).to({_off:false},0).wait(46).to({x:1237.3},0).wait(1).to({x:1264.05},0).wait(1).to({x:1290.85},0).wait(1).to({x:1317.6},0).wait(1).to({x:1344.4},0).wait(1).to({x:1371.15},0).wait(1).to({x:1397.95},0).wait(1).to({x:1424.7},0).wait(1).to({x:1451.5},0).wait(1).to({x:1478.25},0).wait(1).to({x:1505.05},0).wait(1).to({x:1531.8},0).wait(1).to({x:1558.6},0).wait(1).to({x:1585.35},0).wait(1).to({x:1612.15},0).wait(1).to({x:1638.9},0).wait(1).to({x:1665.7},0).wait(1).to({x:1692.45},0).wait(1).to({x:1719.25},0).wait(1).to({x:1746},0).wait(1).to({x:1772.8},0).wait(1).to({x:1799.55},0).wait(1).to({x:1826.35},0).wait(1).to({x:1853.1},0).wait(1).to({x:1879.9},0).wait(1).to({x:1906.65},0).wait(1).to({x:1933.45},0).wait(1).to({x:1960.2},0).wait(1).to({x:1987},0).wait(1));

	// Слой_5
	this.instance_2 = new lib.Символ2();
	this.instance_2.setTransform(1213.85,95.3,2.1101,2.1101,0,0,0,16.6,38.5);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(74).to({_off:false},0).wait(1).to({regX:8.4,regY:21.1,scaleX:2.1102,scaleY:2.1102,x:1196.5,y:58.5},0).wait(17).to({rotation:-22.5,x:1183.8,y:68},0).wait(1).to({scaleX:2.1101,scaleY:2.1101,rotation:-45,x:1175.65,y:81.6},0).wait(1).to({scaleX:2.1102,scaleY:2.1102,rotation:-67.5,x:1173.35,y:97.3},0).wait(1).to({rotation:-90,x:1177.15,y:112.65},0).wait(6).to({rotation:-72,x:1166.45,y:95.2},0).wait(1).to({rotation:-54,x:1159.6,y:79.7},0).wait(1).to({rotation:-36,x:1156.75,y:67.6},0).wait(1).to({rotation:-18,x:1157.35,y:59.85},0).wait(1).to({rotation:0,x:1160.7,y:57.6},0).wait(1).to({rotation:5.1077,x:1166.9,y:55.6},0).wait(1).to({rotation:10.2154,x:1173.15,y:53.8},0).wait(1).to({rotation:0.7442,x:1169.55,y:55.5},0).wait(1).to({rotation:-8.727,x:1166.45,y:58.2},0).wait(1).to({rotation:-1.2265,x:1173.7,y:55},0).wait(1).to({rotation:6.2739,x:1181.2,y:52.5},0).wait(1).to({rotation:-0.3489,x:1179.35,y:53.85},0).wait(1).to({rotation:-6.9717,x:1177.75,y:55.85},0).wait(1).to({rotation:-4.6478,x:1181.5,y:54.75},0).wait(1).to({rotation:-2.3239,x:1185.15,y:53.85},0).wait(1).to({rotation:0,x:1188.7,y:53.05},0).wait(1).to({x:1190.45,y:53.35},0).wait(1).to({x:1191.65,y:54.05},0).wait(1).to({x:1189.6,y:57.6},0).to({_off:true},1).wait(74));

	// Слой_2
	this.instance_3 = new lib.Символ2();
	this.instance_3.setTransform(-27.45,-126.65,1,1,0,0,0,8.4,21.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(57).to({regY:21.1,scaleX:1.0653,scaleY:1.0653,rotation:11.2499,x:44.55,y:-115.85},0).wait(1).to({scaleX:1.1306,scaleY:1.1306,rotation:22.4998,x:116.5,y:-104.95},0).wait(1).to({scaleX:1.1959,scaleY:1.1959,rotation:33.7497,x:188.55,y:-94.1},0).wait(1).to({scaleX:1.2612,scaleY:1.2612,rotation:44.9996,x:260.6,y:-83.25},0).wait(1).to({scaleX:1.3265,scaleY:1.3265,rotation:33.7497,x:332.55,y:-72.4},0).wait(1).to({scaleX:1.3918,scaleY:1.3918,rotation:22.4998,x:404.55,y:-61.55},0).wait(1).to({scaleX:1.4572,scaleY:1.4572,rotation:11.2499,x:476.55,y:-50.7},0).wait(1).to({scaleX:1.5224,scaleY:1.5224,rotation:0,x:548.55,y:-39.85},0).wait(1).to({scaleX:1.5878,scaleY:1.5878,rotation:-7.4998,x:620.45,y:-29},0).wait(1).to({scaleX:1.653,scaleY:1.653,rotation:-14.9996,x:692.5,y:-18.1},0).wait(1).to({scaleX:1.7184,scaleY:1.7184,rotation:-22.4994,x:764.5,y:-7.2},0).wait(1).to({scaleX:1.7836,scaleY:1.7836,rotation:-29.9992,x:836.5,y:3.6},0).wait(1).to({scaleX:1.8489,scaleY:1.8489,x:908.45,y:14.5},0).wait(1).to({scaleX:1.9142,scaleY:1.9142,x:980.5,y:25.35},0).wait(1).to({scaleX:1.9795,scaleY:1.9795,x:1052.5,y:36.15},0).wait(1).to({scaleX:2.0449,scaleY:2.0449,x:1124.5,y:47},0).wait(1).to({scaleX:2.1102,scaleY:2.1102,x:1196.45,y:57.9},0).to({_off:true},1).wait(120));

	// Слой_4
	this.instance_4 = new lib.Символ1();
	this.instance_4.setTransform(1213.9,95.2,2.1011,2.1011,0,0,0,0,39);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(56).to({_off:false},0).wait(1).to({regX:8.4,regY:21.1,x:1231.55,y:57.55},0).wait(17).to({rotation:7.9134,x:1236.55,y:60.35},0).wait(1).to({rotation:15.8267,x:1241.1,y:63.8},0).wait(1).to({rotation:23.7401,x:1245.15,y:67.85},0).wait(1).to({rotation:36.2332,x:1250.35,y:75.25},0).wait(1).to({rotation:48.7262,x:1253.8,y:83.6},0).wait(1).to({scaleX:2.101,scaleY:2.101,rotation:61.2193,x:1255.35,y:92.5},0).wait(10).to({scaleX:2.1011,scaleY:2.1011,rotation:40.6099,x:1251.75,y:78.1},0).wait(1).to({rotation:20.0005,x:1243.35,y:65.85},0).wait(1).to({rotation:-0.609,x:1231.1,y:57.4},0).wait(1).to({rotation:-21.2184,x:1216.7,y:53.75},0).wait(1).to({rotation:-15.9713,x:1220.5,y:54.15},0).wait(1).to({rotation:-10.7242,x:1224.25,y:54.9},0).wait(1).to({rotation:-5.4771,x:1227.85,y:56.05},0).wait(1).to({rotation:-0.2299,x:1231.4,y:57.55},0).wait(1).to({rotation:-0.2299},0).wait(22).to({_off:true},1).wait(74));

	// Слой_3
	this.instance_5 = new lib.Символ1();
	this.instance_5.setTransform(-53.85,95.35,1.0743,1.0743,0,0,0,-0.1,21.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1).to({regX:8.4,regY:21.1,scaleX:1.0753,scaleY:1.0753,x:-17.5,y:85.25},0).wait(1).to({scaleX:1.0762,scaleY:1.0762,x:9.45,y:74.65},0).wait(1).to({scaleX:1.0772,scaleY:1.0772,x:36.3,y:63.7},0).wait(1).to({scaleX:1.0781,scaleY:1.0781,x:62.9,y:52.1},0).wait(1).to({scaleX:1.0791,scaleY:1.0791,x:90.65,y:43.75},0).wait(1).to({scaleX:1.0801,scaleY:1.0801,x:119.2,y:38.9},0).wait(1).to({scaleX:1.081,scaleY:1.081,x:148.15,y:38.65},0).wait(1).to({scaleX:1.082,scaleY:1.082,x:176.15,y:46.25},0).wait(1).to({scaleX:1.0829,scaleY:1.0829,x:203.2,y:56.5},0).wait(1).to({scaleX:1.0839,scaleY:1.0839,x:229.9,y:67.8},0).wait(1).to({scaleX:1.0849,scaleY:1.0849,x:256.2,y:80.15},0).wait(1).to({scaleX:1.0858,scaleY:1.0858,x:281.05,y:60.85},0).wait(1).to({scaleX:1.0868,scaleY:1.0868,x:308.55,y:45.45},0).wait(1).to({scaleX:1.0877,scaleY:1.0877,x:338.55,y:36.15},0).wait(1).to({scaleX:1.0887,scaleY:1.0887,x:369.9,y:35.9},0).wait(1).to({scaleX:1.0897,scaleY:1.0897,x:399.7,y:45.8},0).wait(1).to({scaleX:1.0906,scaleY:1.0906,x:425.75,y:63.35},0).wait(1).to({scaleX:1.0916,scaleY:1.0916,x:447.95,y:85.75},0).wait(1).to({scaleX:1.0925,scaleY:1.0925,x:472.6,y:67.5},0).wait(1).to({scaleX:1.0935,scaleY:1.0935,x:499.65,y:53.15},0).wait(1).to({scaleX:1.0945,scaleY:1.0945,x:529,y:44.65},0).wait(1).to({scaleX:1.0954,scaleY:1.0954,x:559.5,y:43.95},0).wait(1).to({scaleX:1.0964,scaleY:1.0964,x:589.05,y:51.75},0).wait(1).to({scaleX:1.0973,scaleY:1.0973,x:615.9,y:66.4},0).wait(1).to({scaleX:1.0983,scaleY:1.0983,x:639.7,y:85.7},0).wait(1).to({scaleX:1.0993,scaleY:1.0993,x:664.1,y:65.6},0).wait(1).to({scaleX:1.1002,scaleY:1.1002,x:691.95,y:50.75},0).wait(1).to({scaleX:1.1012,scaleY:1.1012,x:722.95,y:44.95},0).wait(1).to({scaleX:1.1021,scaleY:1.1021,x:753.8,y:51.15},0).wait(1).to({scaleX:1.1031,scaleY:1.1031,x:781,y:67.25},0).wait(1).to({scaleX:1.1041,scaleY:1.1041,x:803.95,y:89.05},0).wait(1).to({scaleX:1.105,scaleY:1.105,x:828.85,y:67.65},0).wait(1).to({scaleX:1.106,scaleY:1.106,x:859.4,y:56.85},0).wait(1).to({scaleX:1.1069,scaleY:1.1069,x:890.3,y:66.2},0).wait(1).to({scaleX:1.1079,scaleY:1.1079,x:913.5,y:89.3},0).wait(1).to({scaleX:1.1089,scaleY:1.1089,x:931.45,y:71.7},0).wait(1).to({scaleX:1.1098,scaleY:1.1098,x:955.1,y:64.4},0).wait(1).to({scaleX:1.1108,scaleY:1.1108,x:978.1,y:74.1},0).wait(1).to({scaleX:1.1117,scaleY:1.1117,x:995.65,y:92.15},0).wait(1).to({scaleX:1.1127,scaleY:1.1127,x:1024.2,y:64.85},0).wait(1).to({scaleX:1.1137,scaleY:1.1137,x:1061.05,y:63.25},0).wait(1).to({scaleX:1.1146,scaleY:1.1146,x:1090.1,y:90.1},0).wait(1).to({scaleX:1.279,scaleY:1.279,x:1110.35,y:71},0).wait(1).to({scaleX:1.4435,scaleY:1.4435,x:1131.75,y:52.95},0).wait(1).to({scaleX:1.6079,scaleY:1.6079,x:1155.55,y:38.1},0).wait(1).to({scaleX:1.7723,scaleY:1.7723,x:1182.85,y:32},0).wait(1).to({scaleX:1.9367,scaleY:1.9367,x:1209.4,y:40.55},0).wait(1).to({scaleX:2.1011,scaleY:2.1011,x:1231.45,y:57.75},0).wait(7).to({_off:true},1).wait(138));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(8.5,-81.3,2017.3,211.7);
// library properties:
lib.properties = {
	id: 'E2B9D4BE5C104E41A968B1B91F7D555F',
	width: 1300,
	height: 133,
	fps: 24,
	color: "#D9FFCC",
	opacity: 1.00,
	manifest: [
		{src:"images/bts_atlas_1.png", id:"bts_atlas_1"}
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
an.compositions['E2B9D4BE5C104E41A968B1B91F7D555F'] = {
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