(this["webpackJsonp"] = this["webpackJsonp"] || []).push([[29],{

/***/ 2988:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _MemoryRouter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1879);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MemoryRouter", function() { return _MemoryRouter__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _Prompt__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1887);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Prompt", function() { return _Prompt__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _Redirect__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1889);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Redirect", function() { return _Redirect__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _Route__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1882);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Route", function() { return _Route__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _Router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1875);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Router", function() { return _Router__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony import */ var _StaticRouter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1892);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StaticRouter", function() { return _StaticRouter__WEBPACK_IMPORTED_MODULE_5__["default"]; });

/* harmony import */ var _Switch__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1894);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Switch", function() { return _Switch__WEBPACK_IMPORTED_MODULE_6__["default"]; });

/* harmony import */ var _generatePath__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1890);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "generatePath", function() { return _generatePath__WEBPACK_IMPORTED_MODULE_7__["default"]; });

/* harmony import */ var _matchPath__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1883);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "matchPath", function() { return _matchPath__WEBPACK_IMPORTED_MODULE_8__["default"]; });

/* harmony import */ var _withRouter__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(1898);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "withRouter", function() { return _withRouter__WEBPACK_IMPORTED_MODULE_9__["default"]; });






















/***/ }),

/***/ 2996:
/***/ (function(module, exports) {

module.exports = {
	compareTwoStrings,
	findBestMatch
};

function compareTwoStrings (str1, str2) {
	if (!str1.length && !str2.length) return 1;                    // if both are empty strings
	if (!str1.length || !str2.length) return 0;                    // if only one is empty string
	if (str1.toUpperCase() === str2.toUpperCase()) return 1;       // identical
	if (str1.length === 1 && str2.length === 1) return 0;          // both are 1-letter strings

	const pairs1 = wordLetterPairs(str1);
	const pairs2 = wordLetterPairs(str2);
	const union = pairs1.length + pairs2.length;
	let intersection = 0;
	pairs1.forEach(pair1 => {
		for (let i = 0, pair2; pair2 = pairs2[i]; i++) {
			if (pair1 !== pair2) continue;
			intersection++;
			pairs2.splice(i, 1);
			break;
		}
	});
	return intersection * 2 / union;
}

function findBestMatch (mainString, targetStrings) {
	if (!areArgsValid(mainString, targetStrings)) throw new Error('Bad arguments: First argument should be a string, second should be an array of strings');
	const ratings = targetStrings.map(target => ({ target, rating: compareTwoStrings(mainString, target) }));
	const bestMatch = Array.from(ratings).sort((a, b) => b.rating - a.rating)[0];
	return { ratings, bestMatch };
}

function flattenDeep (arr) {
	return Array.isArray(arr) ? arr.reduce((a, b) => a.concat(flattenDeep(b)) , []) : [arr];
}

function areArgsValid (mainString, targetStrings) {
	if (typeof mainString !== 'string') return false;
	if (!Array.isArray(targetStrings)) return false;
	if (!targetStrings.length) return false;
	if (targetStrings.find(s => typeof s !== 'string')) return false;
	return true;
}

function letterPairs (str) {
	const pairs = [];
	for (let i = 0, max = str.length - 1; i < max; i++) pairs[i] = str.substring(i, i + 2);
	return pairs;
}

function wordLetterPairs (str) {
	const pairs = str.toUpperCase().split(' ').map(letterPairs);
	return flattenDeep(pairs);
}


/***/ }),

/***/ 3007:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _baseIteratee_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2069);
/* harmony import */ var _baseMean_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3008);



/**
 * This method is like `_.mean` except that it accepts `iteratee` which is
 * invoked for each element in `array` to generate the value to be averaged.
 * The iteratee is invoked with one argument: (value).
 *
 * @static
 * @memberOf _
 * @since 4.7.0
 * @category Math
 * @param {Array} array The array to iterate over.
 * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
 * @returns {number} Returns the mean.
 * @example
 *
 * var objects = [{ 'n': 4 }, { 'n': 2 }, { 'n': 8 }, { 'n': 6 }];
 *
 * _.meanBy(objects, function(o) { return o.n; });
 * // => 5
 *
 * // The `_.property` iteratee shorthand.
 * _.meanBy(objects, 'n');
 * // => 5
 */
function meanBy(array, iteratee) {
  return Object(_baseMean_js__WEBPACK_IMPORTED_MODULE_1__["default"])(array, Object(_baseIteratee_js__WEBPACK_IMPORTED_MODULE_0__["default"])(iteratee, 2));
}

/* harmony default export */ __webpack_exports__["default"] = (meanBy);


/***/ }),

/***/ 3008:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _baseSum_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3009);


/** Used as references for various `Number` constants. */
var NAN = 0 / 0;

/**
 * The base implementation of `_.mean` and `_.meanBy` without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} array The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {number} Returns the mean.
 */
function baseMean(array, iteratee) {
  var length = array == null ? 0 : array.length;
  return length ? (Object(_baseSum_js__WEBPACK_IMPORTED_MODULE_0__["default"])(array, iteratee) / length) : NAN;
}

/* harmony default export */ __webpack_exports__["default"] = (baseMean);


/***/ }),

/***/ 3009:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * The base implementation of `_.sum` and `_.sumBy` without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} array The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {number} Returns the sum.
 */
function baseSum(array, iteratee) {
  var result,
      index = -1,
      length = array.length;

  while (++index < length) {
    var current = iteratee(array[index]);
    if (current !== undefined) {
      result = result === undefined ? current : (result + current);
    }
  }
  return result;
}

/* harmony default export */ __webpack_exports__["default"] = (baseSum);


/***/ }),

/***/ 3010:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _baseIteratee_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2069);
/* harmony import */ var _baseSum_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3009);



/**
 * This method is like `_.sum` except that it accepts `iteratee` which is
 * invoked for each element in `array` to generate the value to be summed.
 * The iteratee is invoked with one argument: (value).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Math
 * @param {Array} array The array to iterate over.
 * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
 * @returns {number} Returns the sum.
 * @example
 *
 * var objects = [{ 'n': 4 }, { 'n': 2 }, { 'n': 8 }, { 'n': 6 }];
 *
 * _.sumBy(objects, function(o) { return o.n; });
 * // => 20
 *
 * // The `_.property` iteratee shorthand.
 * _.sumBy(objects, 'n');
 * // => 20
 */
function sumBy(array, iteratee) {
  return (array && array.length)
    ? Object(_baseSum_js__WEBPACK_IMPORTED_MODULE_1__["default"])(array, Object(_baseIteratee_js__WEBPACK_IMPORTED_MODULE_0__["default"])(iteratee, 2))
    : 0;
}

/* harmony default export */ __webpack_exports__["default"] = (sumBy);


/***/ }),

/***/ 3011:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _baseAssignValue_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(668);
/* harmony import */ var _createAggregator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3012);



/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Creates an object composed of keys generated from the results of running
 * each element of `collection` thru `iteratee`. The order of grouped values
 * is determined by the order they occur in `collection`. The corresponding
 * value of each key is an array of elements responsible for generating the
 * key. The iteratee is invoked with one argument: (value).
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Collection
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} [iteratee=_.identity] The iteratee to transform keys.
 * @returns {Object} Returns the composed aggregate object.
 * @example
 *
 * _.groupBy([6.1, 4.2, 6.3], Math.floor);
 * // => { '4': [4.2], '6': [6.1, 6.3] }
 *
 * // The `_.property` iteratee shorthand.
 * _.groupBy(['one', 'two', 'three'], 'length');
 * // => { '3': ['one', 'two'], '5': ['three'] }
 */
var groupBy = Object(_createAggregator_js__WEBPACK_IMPORTED_MODULE_1__["default"])(function(result, value, key) {
  if (hasOwnProperty.call(result, key)) {
    result[key].push(value);
  } else {
    Object(_baseAssignValue_js__WEBPACK_IMPORTED_MODULE_0__["default"])(result, key, [value]);
  }
});

/* harmony default export */ __webpack_exports__["default"] = (groupBy);


/***/ }),

/***/ 3012:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _arrayAggregator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3013);
/* harmony import */ var _baseAggregator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3014);
/* harmony import */ var _baseIteratee_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2069);
/* harmony import */ var _isArray_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(678);





/**
 * Creates a function like `_.groupBy`.
 *
 * @private
 * @param {Function} setter The function to set accumulator values.
 * @param {Function} [initializer] The accumulator object initializer.
 * @returns {Function} Returns the new aggregator function.
 */
function createAggregator(setter, initializer) {
  return function(collection, iteratee) {
    var func = Object(_isArray_js__WEBPACK_IMPORTED_MODULE_3__["default"])(collection) ? _arrayAggregator_js__WEBPACK_IMPORTED_MODULE_0__["default"] : _baseAggregator_js__WEBPACK_IMPORTED_MODULE_1__["default"],
        accumulator = initializer ? initializer() : {};

    return func(collection, setter, Object(_baseIteratee_js__WEBPACK_IMPORTED_MODULE_2__["default"])(iteratee, 2), accumulator);
  };
}

/* harmony default export */ __webpack_exports__["default"] = (createAggregator);


/***/ }),

/***/ 3013:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * A specialized version of `baseAggregator` for arrays.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} setter The function to set `accumulator` values.
 * @param {Function} iteratee The iteratee to transform keys.
 * @param {Object} accumulator The initial aggregated object.
 * @returns {Function} Returns `accumulator`.
 */
function arrayAggregator(array, setter, iteratee, accumulator) {
  var index = -1,
      length = array == null ? 0 : array.length;

  while (++index < length) {
    var value = array[index];
    setter(accumulator, value, iteratee(value), array);
  }
  return accumulator;
}

/* harmony default export */ __webpack_exports__["default"] = (arrayAggregator);


/***/ }),

/***/ 3014:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _baseEach_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2064);


/**
 * Aggregates elements of `collection` on `accumulator` with keys transformed
 * by `iteratee` and values set by `setter`.
 *
 * @private
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} setter The function to set `accumulator` values.
 * @param {Function} iteratee The iteratee to transform keys.
 * @param {Object} accumulator The initial aggregated object.
 * @returns {Function} Returns `accumulator`.
 */
function baseAggregator(collection, setter, iteratee, accumulator) {
  Object(_baseEach_js__WEBPACK_IMPORTED_MODULE_0__["default"])(collection, function(value, key, collection) {
    setter(accumulator, value, iteratee(value), collection);
  });
  return accumulator;
}

/* harmony default export */ __webpack_exports__["default"] = (baseAggregator);


/***/ }),

/***/ 3020:
/***/ (function(module, exports) {

/*
 Highcharts JS v6.1.1 (2018-06-27)

 (c) 2014 Highsoft AS
 Authors: Jon Arild Nygard / Oystein Moseng

 License: www.highcharts.com/license
*/
(function(x){"object"===typeof module&&module.exports?module.exports=x:x(Highcharts)})(function(x){var F=function(b){var x=b.each,C=b.extend,q=b.isArray,k=b.isObject,r=b.isNumber,E=b.merge,A=b.pick,n=b.reduce;return{getColor:function(t,u){var y=u.index,g=u.mapOptionsToLevel,n=u.parentColor,z=u.parentColorIndex,v=u.series,e=u.colors,q=u.siblings,l=v.points,k,D,B,r;if(t){l=l[t.i];t=g[t.level]||{};if(k=l&&t.colorByPoint)B=l.index%(e?e.length:v.chart.options.chart.colorCount),D=e&&e[B];e=l&&l.options.color;
k=t&&t.color;if(g=n)g=(g=t&&t.colorVariation)&&"brightness"===g.key?b.color(n).brighten(y/q*g.to).get():n;k=A(e,k,D,g,v.color);r=A(l&&l.options.colorIndex,t&&t.colorIndex,B,z,u.colorIndex)}return{color:k,colorIndex:r}},getLevelOptions:function(b){var u=null,y,g,t,z;if(k(b))for(u={},t=r(b.from)?b.from:1,z=b.levels,g={},y=k(b.defaults)?b.defaults:{},q(z)&&(g=n(z,function(b,e){var g,l;k(e)&&r(e.level)&&(l=E({},e),g="boolean"===typeof l.levelIsConstant?l.levelIsConstant:y.levelIsConstant,delete l.levelIsConstant,
delete l.level,e=e.level+(g?0:t-1),k(b[e])?C(b[e],l):b[e]=l);return b},{})),z=r(b.to)?b.to:1,b=0;b<=z;b++)u[b]=E({},y,k(g[b])?g[b]:{});return u},setTreeValues:function u(b,g){var n=g.before,k=g.idRoot,y=g.mapIdToNode[k],e=g.points[b.i],q=e&&e.options||{},l=0,r=[];C(b,{levelDynamic:b.level-(("boolean"===typeof g.levelIsConstant?g.levelIsConstant:1)?0:y.level),name:A(e&&e.name,""),visible:k===b.id||("boolean"===typeof g.visible?g.visible:!1)});"function"===typeof n&&(b=n(b,g));x(b.children,function(e,
n){var k=C({},g);C(k,{index:n,siblings:b.children.length,visible:b.visible});e=u(e,k);r.push(e);e.visible&&(l+=e.val)});b.visible=0<l||b.visible;n=A(q.value,l);C(b,{children:r,childrenTotal:l,isLeaf:b.visible&&!l,val:n});return b},updateRootId:function(b){var n;k(b)&&(n=k(b.options)?b.options:{},n=A(b.rootNode,n.rootId,""),k(b.userOptions)&&(b.userOptions.rootId=n),b.rootNode=n);return n}}}(x);(function(b,x){var C=b.seriesType,q=b.seriesTypes,k=b.map,r=b.merge,E=b.extend,A=b.noop,n=b.each,t=x.getColor,
u=x.getLevelOptions,y=b.grep,g=b.isNumber,F=b.isObject,z=b.isString,v=b.pick,e=b.Series,H=b.stableSort,l=b.Color,I=function(a,c,d){d=d||this;b.objectEach(a,function(b,f){c.call(d,b,f,a)})},D=b.reduce,B=function(a,c,d){d=d||this;a=c.call(d,a);!1!==a&&B(a,c,d)},J=x.updateRootId;C("treemap","scatter",{showInLegend:!1,marker:!1,colorByPoint:!1,dataLabels:{enabled:!0,defer:!1,verticalAlign:"middle",formatter:function(){return this.point.name||this.point.id},inside:!0},tooltip:{headerFormat:"",pointFormat:"\x3cb\x3e{point.name}\x3c/b\x3e: {point.value}\x3cbr/\x3e"},
ignoreHiddenPoint:!0,layoutAlgorithm:"sliceAndDice",layoutStartingDirection:"vertical",alternateStartingDirection:!1,levelIsConstant:!0,drillUpButton:{position:{align:"right",x:-10,y:10}},borderColor:"#e6e6e6",borderWidth:1,opacity:.15,states:{hover:{borderColor:"#999999",brightness:q.heatmap?0:.1,halo:!1,opacity:.75,shadow:!1}}},{pointArrayMap:["value"],axisTypes:q.heatmap?["xAxis","yAxis","colorAxis"]:["xAxis","yAxis"],directTouch:!0,optionalAxis:"colorAxis",getSymbol:A,parallelArrays:["x","y",
"value","colorValue"],colorKey:"colorValue",translateColors:q.heatmap&&q.heatmap.prototype.translateColors,colorAttribs:q.heatmap&&q.heatmap.prototype.colorAttribs,trackerGroups:["group","dataLabelsGroup"],getListOfParents:function(a,c){a=D(a||[],function(a,c,b){c=v(c.parent,"");void 0===a[c]&&(a[c]=[]);a[c].push(b);return a},{});I(a,function(a,m,f){""!==m&&-1===b.inArray(m,c)&&(n(a,function(a){f[""].push(a)}),delete f[m])});return a},getTree:function(){var a=k(this.data,function(a){return a.id}),
a=this.getListOfParents(this.data,a);this.nodeMap=[];return this.buildNode("",-1,0,a,null)},init:function(a,c){e.prototype.init.call(this,a,c);this.options.allowDrillToNode&&b.addEvent(this,"click",this.onClickDrillToNode)},buildNode:function(a,c,d,b,f){var p=this,m=[],h=p.points[c],G=0,e;n(b[a]||[],function(c){e=p.buildNode(p.points[c].id,c,d+1,b,a);G=Math.max(e.height+1,G);m.push(e)});c={id:a,i:c,children:m,height:G,level:d,parent:f,visible:!1};p.nodeMap[c.id]=c;h&&(h.node=c);return c},setTreeValues:function(a){var c=
this,d=c.options,b=c.nodeMap[c.rootNode],d="boolean"===typeof d.levelIsConstant?d.levelIsConstant:!0,f=0,p=[],e,h=c.points[a.i];n(a.children,function(a){a=c.setTreeValues(a);p.push(a);a.ignore||(f+=a.val)});H(p,function(a,c){return a.sortIndex-c.sortIndex});e=v(h&&h.options.value,f);h&&(h.value=e);E(a,{children:p,childrenTotal:f,ignore:!(v(h&&h.visible,!0)&&0<e),isLeaf:a.visible&&!f,levelDynamic:a.level-(d?0:b.level),name:v(h&&h.name,""),sortIndex:v(h&&h.sortIndex,-e),val:e});return a},calculateChildrenAreas:function(a,
c){var d=this,b=d.options,f=d.mapOptionsToLevel[a.level+1],p=v(d[f&&f.layoutAlgorithm]&&f.layoutAlgorithm,b.layoutAlgorithm),e=b.alternateStartingDirection,h=[];a=y(a.children,function(a){return!a.ignore});f&&f.layoutStartingDirection&&(c.direction="vertical"===f.layoutStartingDirection?0:1);h=d[p](c,a);n(a,function(a,b){b=h[b];a.values=r(b,{val:a.childrenTotal,direction:e?1-c.direction:c.direction});a.pointValues=r(b,{x:b.x/d.axisRatio,width:b.width/d.axisRatio});a.children.length&&d.calculateChildrenAreas(a,
a.values)})},setPointValues:function(){var a=this,c=a.xAxis,d=a.yAxis;n(a.points,function(b){var f=b.node,p=f.pointValues,m,h,e;e=(a.pointAttribs(b)["stroke-width"]||0)%2/2;p&&f.visible?(f=Math.round(c.translate(p.x,0,0,0,1))-e,m=Math.round(c.translate(p.x+p.width,0,0,0,1))-e,h=Math.round(d.translate(p.y,0,0,0,1))-e,p=Math.round(d.translate(p.y+p.height,0,0,0,1))-e,b.shapeType="rect",b.shapeArgs={x:Math.min(f,m),y:Math.min(h,p),width:Math.abs(m-f),height:Math.abs(p-h)},b.plotX=b.shapeArgs.x+b.shapeArgs.width/
2,b.plotY=b.shapeArgs.y+b.shapeArgs.height/2):(delete b.plotX,delete b.plotY)})},setColorRecursive:function(a,c,b,e,f){var d=this,m=d&&d.chart,m=m&&m.options&&m.options.colors,h;if(a){h=t(a,{colors:m,index:e,mapOptionsToLevel:d.mapOptionsToLevel,parentColor:c,parentColorIndex:b,series:d,siblings:f});if(c=d.points[a.i])c.color=h.color,c.colorIndex=h.colorIndex;n(a.children||[],function(c,b){d.setColorRecursive(c,h.color,h.colorIndex,b,a.children.length)})}},algorithmGroup:function(a,c,b,m){this.height=
a;this.width=c;this.plot=m;this.startDirection=this.direction=b;this.lH=this.nH=this.lW=this.nW=this.total=0;this.elArr=[];this.lP={total:0,lH:0,nH:0,lW:0,nW:0,nR:0,lR:0,aspectRatio:function(a,c){return Math.max(a/c,c/a)}};this.addElement=function(a){this.lP.total=this.elArr[this.elArr.length-1];this.total+=a;0===this.direction?(this.lW=this.nW,this.lP.lH=this.lP.total/this.lW,this.lP.lR=this.lP.aspectRatio(this.lW,this.lP.lH),this.nW=this.total/this.height,this.lP.nH=this.lP.total/this.nW,this.lP.nR=
this.lP.aspectRatio(this.nW,this.lP.nH)):(this.lH=this.nH,this.lP.lW=this.lP.total/this.lH,this.lP.lR=this.lP.aspectRatio(this.lP.lW,this.lH),this.nH=this.total/this.width,this.lP.nW=this.lP.total/this.nH,this.lP.nR=this.lP.aspectRatio(this.lP.nW,this.nH));this.elArr.push(a)};this.reset=function(){this.lW=this.nW=0;this.elArr=[];this.total=0}},algorithmCalcPoints:function(a,c,b,m){var d,e,g,h,l=b.lW,k=b.lH,w=b.plot,t,u=0,q=b.elArr.length-1;c?(l=b.nW,k=b.nH):t=b.elArr[b.elArr.length-1];n(b.elArr,function(a){if(c||
u<q)0===b.direction?(d=w.x,e=w.y,g=l,h=a/g):(d=w.x,e=w.y,h=k,g=a/h),m.push({x:d,y:e,width:g,height:h}),0===b.direction?w.y+=h:w.x+=g;u+=1});b.reset();0===b.direction?b.width-=l:b.height-=k;w.y=w.parent.y+(w.parent.height-b.height);w.x=w.parent.x+(w.parent.width-b.width);a&&(b.direction=1-b.direction);c||b.addElement(t)},algorithmLowAspectRatio:function(a,b,d){var c=[],e=this,p,g={x:b.x,y:b.y,parent:b},h=0,l=d.length-1,k=new this.algorithmGroup(b.height,b.width,b.direction,g);n(d,function(d){p=d.val/
b.val*b.height*b.width;k.addElement(p);k.lP.nR>k.lP.lR&&e.algorithmCalcPoints(a,!1,k,c,g);h===l&&e.algorithmCalcPoints(a,!0,k,c,g);h+=1});return c},algorithmFill:function(a,b,d){var c=[],e,p=b.direction,g=b.x,h=b.y,k=b.width,l=b.height,t,u,q,r;n(d,function(d){e=d.val/b.val*b.height*b.width;t=g;u=h;0===p?(r=l,q=e/r,k-=q,g+=q):(q=k,r=e/q,l-=r,h+=r);c.push({x:t,y:u,width:q,height:r});a&&(p=1-p)});return c},strip:function(a,b){return this.algorithmLowAspectRatio(!1,a,b)},squarified:function(a,b){return this.algorithmLowAspectRatio(!0,
a,b)},sliceAndDice:function(a,b){return this.algorithmFill(!0,a,b)},stripes:function(a,b){return this.algorithmFill(!1,a,b)},translate:function(){var a=this,b=a.options,d=J(a),m,f;e.prototype.translate.call(a);f=a.tree=a.getTree();m=a.nodeMap[d];a.mapOptionsToLevel=u({from:m.level+1,levels:b.levels,to:f.height,defaults:{levelIsConstant:a.options.levelIsConstant,colorByPoint:b.colorByPoint}});""===d||m&&m.children.length||(a.drillToNode("",!1),d=a.rootNode,m=a.nodeMap[d]);B(a.nodeMap[a.rootNode],function(b){var c=
!1,d=b.parent;b.visible=!0;if(d||""===d)c=a.nodeMap[d];return c});B(a.nodeMap[a.rootNode].children,function(a){var b=!1;n(a,function(a){a.visible=!0;a.children.length&&(b=(b||[]).concat(a.children))});return b});a.setTreeValues(f);a.axisRatio=a.xAxis.len/a.yAxis.len;a.nodeMap[""].pointValues=d={x:0,y:0,width:100,height:100};a.nodeMap[""].values=d=r(d,{width:d.width*a.axisRatio,direction:"vertical"===b.layoutStartingDirection?0:1,val:f.val});a.calculateChildrenAreas(f,d);a.colorAxis?a.translateColors():
b.colorByPoint||a.setColorRecursive(a.tree);b.allowDrillToNode&&(b=m.pointValues,a.xAxis.setExtremes(b.x,b.x+b.width,!1),a.yAxis.setExtremes(b.y,b.y+b.height,!1),a.xAxis.setScale(),a.yAxis.setScale());a.setPointValues()},drawDataLabels:function(){var a=this,b=a.mapOptionsToLevel,d=y(a.points,function(a){return a.node.visible}),m,f;n(d,function(c){f=b[c.node.level];m={style:{}};c.node.isLeaf||(m.enabled=!1);f&&f.dataLabels&&(m=r(m,f.dataLabels),a._hasPointLabels=!0);c.shapeArgs&&(m.style.width=c.shapeArgs.width,
c.dataLabel&&c.dataLabel.css({width:c.shapeArgs.width+"px"}));c.dlOptions=r(m,c.options.dataLabels)});e.prototype.drawDataLabels.call(this)},alignDataLabel:function(a){q.column.prototype.alignDataLabel.apply(this,arguments);a.dataLabel&&a.dataLabel.attr({zIndex:(a.node.zIndex||0)+1})},pointAttribs:function(a,b){var c=F(this.mapOptionsToLevel)?this.mapOptionsToLevel:{},e=a&&c[a.node.level]||{},c=this.options,f=b&&c.states[b]||{},g=a&&a.getClassName()||"";a={stroke:a&&a.borderColor||e.borderColor||
f.borderColor||c.borderColor,"stroke-width":v(a&&a.borderWidth,e.borderWidth,f.borderWidth,c.borderWidth),dashstyle:a&&a.borderDashStyle||e.borderDashStyle||f.borderDashStyle||c.borderDashStyle,fill:a&&a.color||this.color};-1!==g.indexOf("highcharts-above-level")?(a.fill="none",a["stroke-width"]=0):-1!==g.indexOf("highcharts-internal-node-interactive")?(b=v(f.opacity,c.opacity),a.fill=l(a.fill).setOpacity(b).get(),a.cursor="pointer"):-1!==g.indexOf("highcharts-internal-node")?a.fill="none":b&&(a.fill=
l(a.fill).brighten(f.brightness).get());return a},drawPoints:function(){var a=this,b=y(a.points,function(a){return a.node.visible});n(b,function(b){var c="level-group-"+b.node.levelDynamic;a[c]||(a[c]=a.chart.renderer.g(c).attr({zIndex:1E3-b.node.levelDynamic}).add(a.group));b.group=a[c]});q.column.prototype.drawPoints.call(this);a.options.allowDrillToNode&&n(b,function(b){b.graphic&&(b.drillId=a.options.interactByLeaf?a.drillToByLeaf(b):a.drillToByGroup(b))})},onClickDrillToNode:function(a){var b=
(a=a.point)&&a.drillId;z(b)&&(a.setState(""),this.drillToNode(b))},drillToByGroup:function(a){var b=!1;1!==a.node.level-this.nodeMap[this.rootNode].level||a.node.isLeaf||(b=a.id);return b},drillToByLeaf:function(a){var b=!1;if(a.node.parent!==this.rootNode&&a.node.isLeaf)for(a=a.node;!b;)a=this.nodeMap[a.parent],a.parent===this.rootNode&&(b=a.id);return b},drillUp:function(){var a=this.nodeMap[this.rootNode];a&&z(a.parent)&&this.drillToNode(a.parent)},drillToNode:function(a,b){var c=this.nodeMap[a];
this.idPreviousRoot=this.rootNode;this.rootNode=a;""===a?this.drillUpButton=this.drillUpButton.destroy():this.showDrillUpButton(c&&c.name||a);this.isDirty=!0;v(b,!0)&&this.chart.redraw()},showDrillUpButton:function(a){var b=this;a=a||"\x3c Back";var d=b.options.drillUpButton,e,f;d.text&&(a=d.text);this.drillUpButton?(this.drillUpButton.placed=!1,this.drillUpButton.attr({text:a}).align()):(f=(e=d.theme)&&e.states,this.drillUpButton=this.chart.renderer.button(a,null,null,function(){b.drillUp()},e,f&&
f.hover,f&&f.select).addClass("highcharts-drillup-button").attr({align:d.position.align,zIndex:7}).add().align(d.position,!1,d.relativeTo||"plotBox"))},buildKDTree:A,drawLegendSymbol:b.LegendSymbolMixin.drawRectangle,getExtremes:function(){e.prototype.getExtremes.call(this,this.colorValueData);this.valueMin=this.dataMin;this.valueMax=this.dataMax;e.prototype.getExtremes.call(this)},getExtremesFromAll:!0,bindAxes:function(){var a={endOnTick:!1,gridLineWidth:0,lineWidth:0,min:0,dataMin:0,minPadding:0,
max:100,dataMax:100,maxPadding:0,startOnTick:!1,title:null,tickPositions:[]};e.prototype.bindAxes.call(this);b.extend(this.yAxis.options,a);b.extend(this.xAxis.options,a)},utils:{recursive:B,reduce:D}},{getClassName:function(){var a=b.Point.prototype.getClassName.call(this),c=this.series,d=c.options;this.node.level<=c.nodeMap[c.rootNode].level?a+=" highcharts-above-level":this.node.isLeaf||v(d.interactByLeaf,!d.allowDrillToNode)?this.node.isLeaf||(a+=" highcharts-internal-node"):a+=" highcharts-internal-node-interactive";
return a},isValid:function(){return this.id||g(this.value)},setState:function(a){b.Point.prototype.setState.call(this,a);this.graphic&&this.graphic.attr({zIndex:"hover"===a?1:0})},setVisible:q.pie.prototype.pointClass.prototype.setVisible})})(x,F)});


/***/ }),

/***/ 3021:
/***/ (function(module, exports) {

/*
 Highcharts JS v6.1.1 (2018-06-27)

 (c) 2009-2017 Torstein Honsi

 License: www.highcharts.com/license
*/
(function(n){"object"===typeof module&&module.exports?module.exports=n:n(Highcharts)})(function(n){(function(b){var u=b.addEvent,g=b.Axis,n=b.Chart,m=b.color,q,h=b.each,t=b.extend,r=b.isNumber,e=b.Legend,c=b.LegendSymbolMixin,x=b.noop,w=b.merge,p=b.pick;b.ColorAxis||(q=b.ColorAxis=function(){this.init.apply(this,arguments)},t(q.prototype,g.prototype),t(q.prototype,{defaultColorAxisOptions:{lineWidth:0,minPadding:0,maxPadding:0,gridLineWidth:1,tickPixelInterval:72,startOnTick:!0,endOnTick:!0,offset:0,
marker:{animation:{duration:50},width:.01,color:"#999999"},labels:{overflow:"justify",rotation:0},minColor:"#e6ebf5",maxColor:"#003399",tickLength:5,showInLegend:!0},keepProps:["legendGroup","legendItemHeight","legendItemWidth","legendItem","legendSymbol"].concat(g.prototype.keepProps),init:function(a,d){var f="vertical"!==a.options.legend.layout,l;this.coll="colorAxis";l=w(this.defaultColorAxisOptions,{side:f?2:1,reversed:!f},d,{opposite:!f,showEmpty:!1,title:null,visible:a.options.legend.enabled});
g.prototype.init.call(this,a,l);d.dataClasses&&this.initDataClasses(d);this.initStops();this.horiz=f;this.zoomEnabled=!1;this.defaultLegendLength=200},initDataClasses:function(a){var d=this.chart,f,l=0,k=d.options.chart.colorCount,b=this.options,e=a.dataClasses.length;this.dataClasses=f=[];this.legendItems=[];h(a.dataClasses,function(a,c){a=w(a);f.push(a);a.color||("category"===b.dataClassColor?(c=d.options.colors,k=c.length,a.color=c[l],a.colorIndex=l,l++,l===k&&(l=0)):a.color=m(b.minColor).tweenTo(m(b.maxColor),
2>e?.5:c/(e-1)))})},setTickPositions:function(){if(!this.dataClasses)return g.prototype.setTickPositions.call(this)},initStops:function(){this.stops=this.options.stops||[[0,this.options.minColor],[1,this.options.maxColor]];h(this.stops,function(a){a.color=m(a[1])})},setOptions:function(a){g.prototype.setOptions.call(this,a);this.options.crosshair=this.options.marker},setAxisSize:function(){var a=this.legendSymbol,d=this.chart,f=d.options.legend||{},l,k;a?(this.left=f=a.attr("x"),this.top=l=a.attr("y"),
this.width=k=a.attr("width"),this.height=a=a.attr("height"),this.right=d.chartWidth-f-k,this.bottom=d.chartHeight-l-a,this.len=this.horiz?k:a,this.pos=this.horiz?f:l):this.len=(this.horiz?f.symbolWidth:f.symbolHeight)||this.defaultLegendLength},normalizedValue:function(a){this.isLog&&(a=this.val2lin(a));return 1-(this.max-a)/(this.max-this.min||1)},toColor:function(a,d){var f=this.stops,l,k,b=this.dataClasses,e,c;if(b)for(c=b.length;c--;){if(e=b[c],l=e.from,f=e.to,(void 0===l||a>=l)&&(void 0===f||
a<=f)){k=e.color;d&&(d.dataClass=c,d.colorIndex=e.colorIndex);break}}else{a=this.normalizedValue(a);for(c=f.length;c--&&!(a>f[c][0]););l=f[c]||f[c+1];f=f[c+1]||l;a=1-(f[0]-a)/(f[0]-l[0]||1);k=l.color.tweenTo(f.color,a)}return k},getOffset:function(){var a=this.legendGroup,d=this.chart.axisOffset[this.side];a&&(this.axisParent=a,g.prototype.getOffset.call(this),this.added||(this.added=!0,this.labelLeft=0,this.labelRight=this.width),this.chart.axisOffset[this.side]=d)},setLegendColor:function(){var a,
d=this.reversed;a=d?1:0;d=d?0:1;a=this.horiz?[a,0,d,0]:[0,d,0,a];this.legendColor={linearGradient:{x1:a[0],y1:a[1],x2:a[2],y2:a[3]},stops:this.stops}},drawLegendSymbol:function(a,d){var f=a.padding,b=a.options,k=this.horiz,c=p(b.symbolWidth,k?this.defaultLegendLength:12),e=p(b.symbolHeight,k?12:this.defaultLegendLength),h=p(b.labelPadding,k?16:30),b=p(b.itemDistance,10);this.setLegendColor();d.legendSymbol=this.chart.renderer.rect(0,a.baseline-11,c,e).attr({zIndex:1}).add(d.legendGroup);this.legendItemWidth=
c+f+(k?b:h);this.legendItemHeight=e+f+(k?h:0)},setState:function(a){h(this.series,function(d){d.setState(a)})},visible:!0,setVisible:x,getSeriesExtremes:function(){var a=this.series,d=a.length;this.dataMin=Infinity;for(this.dataMax=-Infinity;d--;)a[d].getExtremes(),void 0!==a[d].valueMin&&(this.dataMin=Math.min(this.dataMin,a[d].valueMin),this.dataMax=Math.max(this.dataMax,a[d].valueMax))},drawCrosshair:function(a,d){var f=d&&d.plotX,b=d&&d.plotY,c,e=this.pos,h=this.len;d&&(c=this.toPixels(d[d.series.colorKey]),
c<e?c=e-2:c>e+h&&(c=e+h+2),d.plotX=c,d.plotY=this.len-c,g.prototype.drawCrosshair.call(this,a,d),d.plotX=f,d.plotY=b,this.cross&&!this.cross.addedToColorAxis&&this.legendGroup&&(this.cross.addClass("highcharts-coloraxis-marker").add(this.legendGroup),this.cross.addedToColorAxis=!0,this.cross.attr({fill:this.crosshair.color})))},getPlotLinePath:function(a,d,f,b,c){return r(c)?this.horiz?["M",c-4,this.top-6,"L",c+4,this.top-6,c,this.top,"Z"]:["M",this.left,c,"L",this.left-6,c+6,this.left-6,c-6,"Z"]:
g.prototype.getPlotLinePath.call(this,a,d,f,b)},update:function(a,d){var c=this.chart,b=c.legend;h(this.series,function(a){a.isDirtyData=!0});a.dataClasses&&b.allItems&&(h(b.allItems,function(a){a.isDataClass&&a.legendGroup&&a.legendGroup.destroy()}),c.isDirtyLegend=!0);c.options[this.coll]=w(this.userOptions,a);g.prototype.update.call(this,a,d);this.legendItem&&(this.setLegendColor(),b.colorizeItem(this,!0))},remove:function(){this.legendItem&&this.chart.legend.destroyItem(this);g.prototype.remove.call(this)},
getDataClassLegendSymbols:function(){var a=this,d=this.chart,f=this.legendItems,e=d.options.legend,k=e.valueDecimals,q=e.valueSuffix||"",g;f.length||h(this.dataClasses,function(e,l){var m=!0,r=e.from,p=e.to;g="";void 0===r?g="\x3c ":void 0===p&&(g="\x3e ");void 0!==r&&(g+=b.numberFormat(r,k)+q);void 0!==r&&void 0!==p&&(g+=" - ");void 0!==p&&(g+=b.numberFormat(p,k)+q);f.push(t({chart:d,name:g,options:{},drawLegendSymbol:c.drawRectangle,visible:!0,setState:x,isDataClass:!0,setVisible:function(){m=this.visible=
!m;h(a.series,function(a){h(a.points,function(a){a.dataClass===l&&a.setVisible(m)})});d.legend.colorizeItem(this,m)}},e))});return f},name:""}),h(["fill","stroke"],function(a){b.Fx.prototype[a+"Setter"]=function(){this.elem.attr(a,m(this.start).tweenTo(m(this.end),this.pos),null,!0)}}),u(n,"afterGetAxes",function(){var a=this.options.colorAxis;this.colorAxis=[];a&&new q(this,a)}),u(e,"afterGetAllItems",function(a){var d=[],c=this.chart.colorAxis[0];c&&c.options&&c.options.showInLegend&&(c.options.dataClasses?
d=c.getDataClassLegendSymbols():d.push(c),h(c.series,function(c){b.erase(a.allItems,c)}));for(c=d.length;c--;)a.allItems.unshift(d[c])}),u(e,"afterColorizeItem",function(a){a.visible&&a.item.legendColor&&a.item.legendSymbol.attr({fill:a.item.legendColor})}),u(e,"afterUpdate",function(a,c,b){this.chart.colorAxis[0]&&this.chart.colorAxis[0].update({},b)}))})(n);(function(b){var n=b.defined,g=b.each,v=b.noop,m=b.seriesTypes;b.colorPointMixin={isValid:function(){return null!==this.value&&Infinity!==this.value&&
-Infinity!==this.value},setVisible:function(b){var h=this,q=b?"show":"hide";g(["graphic","dataLabel"],function(b){if(h[b])h[b][q]()})},setState:function(g){b.Point.prototype.setState.call(this,g);this.graphic&&this.graphic.attr({zIndex:"hover"===g?1:0})}};b.colorSeriesMixin={pointArrayMap:["value"],axisTypes:["xAxis","yAxis","colorAxis"],optionalAxis:"colorAxis",trackerGroups:["group","markerGroup","dataLabelsGroup"],getSymbol:v,parallelArrays:["x","y","value"],colorKey:"value",pointAttribs:m.column.prototype.pointAttribs,
translateColors:function(){var b=this,h=this.options.nullColor,m=this.colorAxis,r=this.colorKey;g(this.data,function(e){var c=e[r];if(c=e.options.color||(e.isNull?h:m&&void 0!==c?m.toColor(c,e):e.color||b.color))e.color=c})},colorAttribs:function(b){var g={};n(b.color)&&(g[this.colorProp||"fill"]=b.color);return g}}})(n);(function(b){var n=b.colorPointMixin,g=b.each,v=b.merge,m=b.noop,q=b.pick,h=b.Series,t=b.seriesType,r=b.seriesTypes;t("heatmap","scatter",{animation:!1,borderWidth:0,nullColor:"#f7f7f7",
dataLabels:{formatter:function(){return this.point.value},inside:!0,verticalAlign:"middle",crop:!1,overflow:!1,padding:0},marker:null,pointRange:null,tooltip:{pointFormat:"{point.x}, {point.y}: {point.value}\x3cbr/\x3e"},states:{hover:{halo:!1,brightness:.2}}},v(b.colorSeriesMixin,{pointArrayMap:["y","value"],hasPointSpecificOptions:!0,getExtremesFromAll:!0,directTouch:!0,init:function(){var b;r.scatter.prototype.init.apply(this,arguments);b=this.options;b.pointRange=q(b.pointRange,b.colsize||1);
this.yAxis.axisPointRange=b.rowsize||1},translate:function(){var b=this.options,c=this.xAxis,h=this.yAxis,m=b.pointPadding||0,p=function(a,b,c){return Math.min(Math.max(b,a),c)};this.generatePoints();g(this.points,function(a){var d=(b.colsize||1)/2,e=(b.rowsize||1)/2,g=p(Math.round(c.len-c.translate(a.x-d,0,1,0,1)),-c.len,2*c.len),d=p(Math.round(c.len-c.translate(a.x+d,0,1,0,1)),-c.len,2*c.len),k=p(Math.round(h.translate(a.y-e,0,1,0,1)),-h.len,2*h.len),e=p(Math.round(h.translate(a.y+e,0,1,0,1)),-h.len,
2*h.len),n=q(a.pointPadding,m);a.plotX=a.clientX=(g+d)/2;a.plotY=(k+e)/2;a.shapeType="rect";a.shapeArgs={x:Math.min(g,d)+n,y:Math.min(k,e)+n,width:Math.abs(d-g)-2*n,height:Math.abs(e-k)-2*n}});this.translateColors()},drawPoints:function(){r.column.prototype.drawPoints.call(this);g(this.points,function(b){b.graphic.attr(this.colorAttribs(b))},this)},animate:m,getBox:m,drawLegendSymbol:b.LegendSymbolMixin.drawRectangle,alignDataLabel:r.column.prototype.alignDataLabel,getExtremes:function(){h.prototype.getExtremes.call(this,
this.valueData);this.valueMin=this.dataMin;this.valueMax=this.dataMax;h.prototype.getExtremes.call(this)}}),b.extend({haloPath:function(b){if(!b)return[];var c=this.shapeArgs;return["M",c.x-b,c.y-b,"L",c.x-b,c.y+c.height+b,c.x+c.width+b,c.y+c.height+b,c.x+c.width+b,c.y-b,"Z"]}},n))})(n)});


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmVuZG9yc35hY2NvdW50LjUyODg4ZDI2Njk0MjE0ZGYxNGNlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlYWN0LXJvdXRlci9lcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3RyaW5nLXNpbWlsYXJpdHkvY29tcGFyZS1zdHJpbmdzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gtZXMvbWVhbkJ5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gtZXMvX2Jhc2VNZWFuLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gtZXMvX2Jhc2VTdW0uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC1lcy9zdW1CeS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoLWVzL2dyb3VwQnkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC1lcy9fY3JlYXRlQWdncmVnYXRvci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoLWVzL19hcnJheUFnZ3JlZ2F0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC1lcy9fYmFzZUFnZ3JlZ2F0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2hpZ2hjaGFydHMvbW9kdWxlcy90cmVlbWFwLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9oaWdoY2hhcnRzL21vZHVsZXMvaGVhdG1hcC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgX01lbW9yeVJvdXRlciBmcm9tIFwiLi9NZW1vcnlSb3V0ZXJcIjtcbmV4cG9ydCB7IF9NZW1vcnlSb3V0ZXIgYXMgTWVtb3J5Um91dGVyIH07XG5pbXBvcnQgX1Byb21wdCBmcm9tIFwiLi9Qcm9tcHRcIjtcbmV4cG9ydCB7IF9Qcm9tcHQgYXMgUHJvbXB0IH07XG5pbXBvcnQgX1JlZGlyZWN0IGZyb20gXCIuL1JlZGlyZWN0XCI7XG5leHBvcnQgeyBfUmVkaXJlY3QgYXMgUmVkaXJlY3QgfTtcbmltcG9ydCBfUm91dGUgZnJvbSBcIi4vUm91dGVcIjtcbmV4cG9ydCB7IF9Sb3V0ZSBhcyBSb3V0ZSB9O1xuaW1wb3J0IF9Sb3V0ZXIgZnJvbSBcIi4vUm91dGVyXCI7XG5leHBvcnQgeyBfUm91dGVyIGFzIFJvdXRlciB9O1xuaW1wb3J0IF9TdGF0aWNSb3V0ZXIgZnJvbSBcIi4vU3RhdGljUm91dGVyXCI7XG5leHBvcnQgeyBfU3RhdGljUm91dGVyIGFzIFN0YXRpY1JvdXRlciB9O1xuaW1wb3J0IF9Td2l0Y2ggZnJvbSBcIi4vU3dpdGNoXCI7XG5leHBvcnQgeyBfU3dpdGNoIGFzIFN3aXRjaCB9O1xuaW1wb3J0IF9nZW5lcmF0ZVBhdGggZnJvbSBcIi4vZ2VuZXJhdGVQYXRoXCI7XG5leHBvcnQgeyBfZ2VuZXJhdGVQYXRoIGFzIGdlbmVyYXRlUGF0aCB9O1xuaW1wb3J0IF9tYXRjaFBhdGggZnJvbSBcIi4vbWF0Y2hQYXRoXCI7XG5leHBvcnQgeyBfbWF0Y2hQYXRoIGFzIG1hdGNoUGF0aCB9O1xuaW1wb3J0IF93aXRoUm91dGVyIGZyb20gXCIuL3dpdGhSb3V0ZXJcIjtcbmV4cG9ydCB7IF93aXRoUm91dGVyIGFzIHdpdGhSb3V0ZXIgfTsiLCJtb2R1bGUuZXhwb3J0cyA9IHtcblx0Y29tcGFyZVR3b1N0cmluZ3MsXG5cdGZpbmRCZXN0TWF0Y2hcbn07XG5cbmZ1bmN0aW9uIGNvbXBhcmVUd29TdHJpbmdzIChzdHIxLCBzdHIyKSB7XG5cdGlmICghc3RyMS5sZW5ndGggJiYgIXN0cjIubGVuZ3RoKSByZXR1cm4gMTsgICAgICAgICAgICAgICAgICAgIC8vIGlmIGJvdGggYXJlIGVtcHR5IHN0cmluZ3Ncblx0aWYgKCFzdHIxLmxlbmd0aCB8fCAhc3RyMi5sZW5ndGgpIHJldHVybiAwOyAgICAgICAgICAgICAgICAgICAgLy8gaWYgb25seSBvbmUgaXMgZW1wdHkgc3RyaW5nXG5cdGlmIChzdHIxLnRvVXBwZXJDYXNlKCkgPT09IHN0cjIudG9VcHBlckNhc2UoKSkgcmV0dXJuIDE7ICAgICAgIC8vIGlkZW50aWNhbFxuXHRpZiAoc3RyMS5sZW5ndGggPT09IDEgJiYgc3RyMi5sZW5ndGggPT09IDEpIHJldHVybiAwOyAgICAgICAgICAvLyBib3RoIGFyZSAxLWxldHRlciBzdHJpbmdzXG5cblx0Y29uc3QgcGFpcnMxID0gd29yZExldHRlclBhaXJzKHN0cjEpO1xuXHRjb25zdCBwYWlyczIgPSB3b3JkTGV0dGVyUGFpcnMoc3RyMik7XG5cdGNvbnN0IHVuaW9uID0gcGFpcnMxLmxlbmd0aCArIHBhaXJzMi5sZW5ndGg7XG5cdGxldCBpbnRlcnNlY3Rpb24gPSAwO1xuXHRwYWlyczEuZm9yRWFjaChwYWlyMSA9PiB7XG5cdFx0Zm9yIChsZXQgaSA9IDAsIHBhaXIyOyBwYWlyMiA9IHBhaXJzMltpXTsgaSsrKSB7XG5cdFx0XHRpZiAocGFpcjEgIT09IHBhaXIyKSBjb250aW51ZTtcblx0XHRcdGludGVyc2VjdGlvbisrO1xuXHRcdFx0cGFpcnMyLnNwbGljZShpLCAxKTtcblx0XHRcdGJyZWFrO1xuXHRcdH1cblx0fSk7XG5cdHJldHVybiBpbnRlcnNlY3Rpb24gKiAyIC8gdW5pb247XG59XG5cbmZ1bmN0aW9uIGZpbmRCZXN0TWF0Y2ggKG1haW5TdHJpbmcsIHRhcmdldFN0cmluZ3MpIHtcblx0aWYgKCFhcmVBcmdzVmFsaWQobWFpblN0cmluZywgdGFyZ2V0U3RyaW5ncykpIHRocm93IG5ldyBFcnJvcignQmFkIGFyZ3VtZW50czogRmlyc3QgYXJndW1lbnQgc2hvdWxkIGJlIGEgc3RyaW5nLCBzZWNvbmQgc2hvdWxkIGJlIGFuIGFycmF5IG9mIHN0cmluZ3MnKTtcblx0Y29uc3QgcmF0aW5ncyA9IHRhcmdldFN0cmluZ3MubWFwKHRhcmdldCA9PiAoeyB0YXJnZXQsIHJhdGluZzogY29tcGFyZVR3b1N0cmluZ3MobWFpblN0cmluZywgdGFyZ2V0KSB9KSk7XG5cdGNvbnN0IGJlc3RNYXRjaCA9IEFycmF5LmZyb20ocmF0aW5ncykuc29ydCgoYSwgYikgPT4gYi5yYXRpbmcgLSBhLnJhdGluZylbMF07XG5cdHJldHVybiB7IHJhdGluZ3MsIGJlc3RNYXRjaCB9O1xufVxuXG5mdW5jdGlvbiBmbGF0dGVuRGVlcCAoYXJyKSB7XG5cdHJldHVybiBBcnJheS5pc0FycmF5KGFycikgPyBhcnIucmVkdWNlKChhLCBiKSA9PiBhLmNvbmNhdChmbGF0dGVuRGVlcChiKSkgLCBbXSkgOiBbYXJyXTtcbn1cblxuZnVuY3Rpb24gYXJlQXJnc1ZhbGlkIChtYWluU3RyaW5nLCB0YXJnZXRTdHJpbmdzKSB7XG5cdGlmICh0eXBlb2YgbWFpblN0cmluZyAhPT0gJ3N0cmluZycpIHJldHVybiBmYWxzZTtcblx0aWYgKCFBcnJheS5pc0FycmF5KHRhcmdldFN0cmluZ3MpKSByZXR1cm4gZmFsc2U7XG5cdGlmICghdGFyZ2V0U3RyaW5ncy5sZW5ndGgpIHJldHVybiBmYWxzZTtcblx0aWYgKHRhcmdldFN0cmluZ3MuZmluZChzID0+IHR5cGVvZiBzICE9PSAnc3RyaW5nJykpIHJldHVybiBmYWxzZTtcblx0cmV0dXJuIHRydWU7XG59XG5cbmZ1bmN0aW9uIGxldHRlclBhaXJzIChzdHIpIHtcblx0Y29uc3QgcGFpcnMgPSBbXTtcblx0Zm9yIChsZXQgaSA9IDAsIG1heCA9IHN0ci5sZW5ndGggLSAxOyBpIDwgbWF4OyBpKyspIHBhaXJzW2ldID0gc3RyLnN1YnN0cmluZyhpLCBpICsgMik7XG5cdHJldHVybiBwYWlycztcbn1cblxuZnVuY3Rpb24gd29yZExldHRlclBhaXJzIChzdHIpIHtcblx0Y29uc3QgcGFpcnMgPSBzdHIudG9VcHBlckNhc2UoKS5zcGxpdCgnICcpLm1hcChsZXR0ZXJQYWlycyk7XG5cdHJldHVybiBmbGF0dGVuRGVlcChwYWlycyk7XG59XG4iLCJpbXBvcnQgYmFzZUl0ZXJhdGVlIGZyb20gJy4vX2Jhc2VJdGVyYXRlZS5qcyc7XG5pbXBvcnQgYmFzZU1lYW4gZnJvbSAnLi9fYmFzZU1lYW4uanMnO1xuXG4vKipcbiAqIFRoaXMgbWV0aG9kIGlzIGxpa2UgYF8ubWVhbmAgZXhjZXB0IHRoYXQgaXQgYWNjZXB0cyBgaXRlcmF0ZWVgIHdoaWNoIGlzXG4gKiBpbnZva2VkIGZvciBlYWNoIGVsZW1lbnQgaW4gYGFycmF5YCB0byBnZW5lcmF0ZSB0aGUgdmFsdWUgdG8gYmUgYXZlcmFnZWQuXG4gKiBUaGUgaXRlcmF0ZWUgaXMgaW52b2tlZCB3aXRoIG9uZSBhcmd1bWVudDogKHZhbHVlKS5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuNy4wXG4gKiBAY2F0ZWdvcnkgTWF0aFxuICogQHBhcmFtIHtBcnJheX0gYXJyYXkgVGhlIGFycmF5IHRvIGl0ZXJhdGUgb3Zlci5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IFtpdGVyYXRlZT1fLmlkZW50aXR5XSBUaGUgaXRlcmF0ZWUgaW52b2tlZCBwZXIgZWxlbWVudC5cbiAqIEByZXR1cm5zIHtudW1iZXJ9IFJldHVybnMgdGhlIG1lYW4uXG4gKiBAZXhhbXBsZVxuICpcbiAqIHZhciBvYmplY3RzID0gW3sgJ24nOiA0IH0sIHsgJ24nOiAyIH0sIHsgJ24nOiA4IH0sIHsgJ24nOiA2IH1dO1xuICpcbiAqIF8ubWVhbkJ5KG9iamVjdHMsIGZ1bmN0aW9uKG8pIHsgcmV0dXJuIG8ubjsgfSk7XG4gKiAvLyA9PiA1XG4gKlxuICogLy8gVGhlIGBfLnByb3BlcnR5YCBpdGVyYXRlZSBzaG9ydGhhbmQuXG4gKiBfLm1lYW5CeShvYmplY3RzLCAnbicpO1xuICogLy8gPT4gNVxuICovXG5mdW5jdGlvbiBtZWFuQnkoYXJyYXksIGl0ZXJhdGVlKSB7XG4gIHJldHVybiBiYXNlTWVhbihhcnJheSwgYmFzZUl0ZXJhdGVlKGl0ZXJhdGVlLCAyKSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IG1lYW5CeTtcbiIsImltcG9ydCBiYXNlU3VtIGZyb20gJy4vX2Jhc2VTdW0uanMnO1xuXG4vKiogVXNlZCBhcyByZWZlcmVuY2VzIGZvciB2YXJpb3VzIGBOdW1iZXJgIGNvbnN0YW50cy4gKi9cbnZhciBOQU4gPSAwIC8gMDtcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5tZWFuYCBhbmQgYF8ubWVhbkJ5YCB3aXRob3V0IHN1cHBvcnQgZm9yXG4gKiBpdGVyYXRlZSBzaG9ydGhhbmRzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0FycmF5fSBhcnJheSBUaGUgYXJyYXkgdG8gaXRlcmF0ZSBvdmVyLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gaXRlcmF0ZWUgVGhlIGZ1bmN0aW9uIGludm9rZWQgcGVyIGl0ZXJhdGlvbi5cbiAqIEByZXR1cm5zIHtudW1iZXJ9IFJldHVybnMgdGhlIG1lYW4uXG4gKi9cbmZ1bmN0aW9uIGJhc2VNZWFuKGFycmF5LCBpdGVyYXRlZSkge1xuICB2YXIgbGVuZ3RoID0gYXJyYXkgPT0gbnVsbCA/IDAgOiBhcnJheS5sZW5ndGg7XG4gIHJldHVybiBsZW5ndGggPyAoYmFzZVN1bShhcnJheSwgaXRlcmF0ZWUpIC8gbGVuZ3RoKSA6IE5BTjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgYmFzZU1lYW47XG4iLCIvKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLnN1bWAgYW5kIGBfLnN1bUJ5YCB3aXRob3V0IHN1cHBvcnQgZm9yXG4gKiBpdGVyYXRlZSBzaG9ydGhhbmRzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0FycmF5fSBhcnJheSBUaGUgYXJyYXkgdG8gaXRlcmF0ZSBvdmVyLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gaXRlcmF0ZWUgVGhlIGZ1bmN0aW9uIGludm9rZWQgcGVyIGl0ZXJhdGlvbi5cbiAqIEByZXR1cm5zIHtudW1iZXJ9IFJldHVybnMgdGhlIHN1bS5cbiAqL1xuZnVuY3Rpb24gYmFzZVN1bShhcnJheSwgaXRlcmF0ZWUpIHtcbiAgdmFyIHJlc3VsdCxcbiAgICAgIGluZGV4ID0gLTEsXG4gICAgICBsZW5ndGggPSBhcnJheS5sZW5ndGg7XG5cbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICB2YXIgY3VycmVudCA9IGl0ZXJhdGVlKGFycmF5W2luZGV4XSk7XG4gICAgaWYgKGN1cnJlbnQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgcmVzdWx0ID0gcmVzdWx0ID09PSB1bmRlZmluZWQgPyBjdXJyZW50IDogKHJlc3VsdCArIGN1cnJlbnQpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5leHBvcnQgZGVmYXVsdCBiYXNlU3VtO1xuIiwiaW1wb3J0IGJhc2VJdGVyYXRlZSBmcm9tICcuL19iYXNlSXRlcmF0ZWUuanMnO1xuaW1wb3J0IGJhc2VTdW0gZnJvbSAnLi9fYmFzZVN1bS5qcyc7XG5cbi8qKlxuICogVGhpcyBtZXRob2QgaXMgbGlrZSBgXy5zdW1gIGV4Y2VwdCB0aGF0IGl0IGFjY2VwdHMgYGl0ZXJhdGVlYCB3aGljaCBpc1xuICogaW52b2tlZCBmb3IgZWFjaCBlbGVtZW50IGluIGBhcnJheWAgdG8gZ2VuZXJhdGUgdGhlIHZhbHVlIHRvIGJlIHN1bW1lZC5cbiAqIFRoZSBpdGVyYXRlZSBpcyBpbnZva2VkIHdpdGggb25lIGFyZ3VtZW50OiAodmFsdWUpLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4wLjBcbiAqIEBjYXRlZ29yeSBNYXRoXG4gKiBAcGFyYW0ge0FycmF5fSBhcnJheSBUaGUgYXJyYXkgdG8gaXRlcmF0ZSBvdmVyLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gW2l0ZXJhdGVlPV8uaWRlbnRpdHldIFRoZSBpdGVyYXRlZSBpbnZva2VkIHBlciBlbGVtZW50LlxuICogQHJldHVybnMge251bWJlcn0gUmV0dXJucyB0aGUgc3VtLlxuICogQGV4YW1wbGVcbiAqXG4gKiB2YXIgb2JqZWN0cyA9IFt7ICduJzogNCB9LCB7ICduJzogMiB9LCB7ICduJzogOCB9LCB7ICduJzogNiB9XTtcbiAqXG4gKiBfLnN1bUJ5KG9iamVjdHMsIGZ1bmN0aW9uKG8pIHsgcmV0dXJuIG8ubjsgfSk7XG4gKiAvLyA9PiAyMFxuICpcbiAqIC8vIFRoZSBgXy5wcm9wZXJ0eWAgaXRlcmF0ZWUgc2hvcnRoYW5kLlxuICogXy5zdW1CeShvYmplY3RzLCAnbicpO1xuICogLy8gPT4gMjBcbiAqL1xuZnVuY3Rpb24gc3VtQnkoYXJyYXksIGl0ZXJhdGVlKSB7XG4gIHJldHVybiAoYXJyYXkgJiYgYXJyYXkubGVuZ3RoKVxuICAgID8gYmFzZVN1bShhcnJheSwgYmFzZUl0ZXJhdGVlKGl0ZXJhdGVlLCAyKSlcbiAgICA6IDA7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHN1bUJ5O1xuIiwiaW1wb3J0IGJhc2VBc3NpZ25WYWx1ZSBmcm9tICcuL19iYXNlQXNzaWduVmFsdWUuanMnO1xuaW1wb3J0IGNyZWF0ZUFnZ3JlZ2F0b3IgZnJvbSAnLi9fY3JlYXRlQWdncmVnYXRvci5qcyc7XG5cbi8qKiBVc2VkIGZvciBidWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbi8qKiBVc2VkIHRvIGNoZWNrIG9iamVjdHMgZm9yIG93biBwcm9wZXJ0aWVzLiAqL1xudmFyIGhhc093blByb3BlcnR5ID0gb2JqZWN0UHJvdG8uaGFzT3duUHJvcGVydHk7XG5cbi8qKlxuICogQ3JlYXRlcyBhbiBvYmplY3QgY29tcG9zZWQgb2Yga2V5cyBnZW5lcmF0ZWQgZnJvbSB0aGUgcmVzdWx0cyBvZiBydW5uaW5nXG4gKiBlYWNoIGVsZW1lbnQgb2YgYGNvbGxlY3Rpb25gIHRocnUgYGl0ZXJhdGVlYC4gVGhlIG9yZGVyIG9mIGdyb3VwZWQgdmFsdWVzXG4gKiBpcyBkZXRlcm1pbmVkIGJ5IHRoZSBvcmRlciB0aGV5IG9jY3VyIGluIGBjb2xsZWN0aW9uYC4gVGhlIGNvcnJlc3BvbmRpbmdcbiAqIHZhbHVlIG9mIGVhY2gga2V5IGlzIGFuIGFycmF5IG9mIGVsZW1lbnRzIHJlc3BvbnNpYmxlIGZvciBnZW5lcmF0aW5nIHRoZVxuICoga2V5LiBUaGUgaXRlcmF0ZWUgaXMgaW52b2tlZCB3aXRoIG9uZSBhcmd1bWVudDogKHZhbHVlKS5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDAuMS4wXG4gKiBAY2F0ZWdvcnkgQ29sbGVjdGlvblxuICogQHBhcmFtIHtBcnJheXxPYmplY3R9IGNvbGxlY3Rpb24gVGhlIGNvbGxlY3Rpb24gdG8gaXRlcmF0ZSBvdmVyLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gW2l0ZXJhdGVlPV8uaWRlbnRpdHldIFRoZSBpdGVyYXRlZSB0byB0cmFuc2Zvcm0ga2V5cy5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgdGhlIGNvbXBvc2VkIGFnZ3JlZ2F0ZSBvYmplY3QuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uZ3JvdXBCeShbNi4xLCA0LjIsIDYuM10sIE1hdGguZmxvb3IpO1xuICogLy8gPT4geyAnNCc6IFs0LjJdLCAnNic6IFs2LjEsIDYuM10gfVxuICpcbiAqIC8vIFRoZSBgXy5wcm9wZXJ0eWAgaXRlcmF0ZWUgc2hvcnRoYW5kLlxuICogXy5ncm91cEJ5KFsnb25lJywgJ3R3bycsICd0aHJlZSddLCAnbGVuZ3RoJyk7XG4gKiAvLyA9PiB7ICczJzogWydvbmUnLCAndHdvJ10sICc1JzogWyd0aHJlZSddIH1cbiAqL1xudmFyIGdyb3VwQnkgPSBjcmVhdGVBZ2dyZWdhdG9yKGZ1bmN0aW9uKHJlc3VsdCwgdmFsdWUsIGtleSkge1xuICBpZiAoaGFzT3duUHJvcGVydHkuY2FsbChyZXN1bHQsIGtleSkpIHtcbiAgICByZXN1bHRba2V5XS5wdXNoKHZhbHVlKTtcbiAgfSBlbHNlIHtcbiAgICBiYXNlQXNzaWduVmFsdWUocmVzdWx0LCBrZXksIFt2YWx1ZV0pO1xuICB9XG59KTtcblxuZXhwb3J0IGRlZmF1bHQgZ3JvdXBCeTtcbiIsImltcG9ydCBhcnJheUFnZ3JlZ2F0b3IgZnJvbSAnLi9fYXJyYXlBZ2dyZWdhdG9yLmpzJztcbmltcG9ydCBiYXNlQWdncmVnYXRvciBmcm9tICcuL19iYXNlQWdncmVnYXRvci5qcyc7XG5pbXBvcnQgYmFzZUl0ZXJhdGVlIGZyb20gJy4vX2Jhc2VJdGVyYXRlZS5qcyc7XG5pbXBvcnQgaXNBcnJheSBmcm9tICcuL2lzQXJyYXkuanMnO1xuXG4vKipcbiAqIENyZWF0ZXMgYSBmdW5jdGlvbiBsaWtlIGBfLmdyb3VwQnlgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBzZXR0ZXIgVGhlIGZ1bmN0aW9uIHRvIHNldCBhY2N1bXVsYXRvciB2YWx1ZXMuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBbaW5pdGlhbGl6ZXJdIFRoZSBhY2N1bXVsYXRvciBvYmplY3QgaW5pdGlhbGl6ZXIuXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IFJldHVybnMgdGhlIG5ldyBhZ2dyZWdhdG9yIGZ1bmN0aW9uLlxuICovXG5mdW5jdGlvbiBjcmVhdGVBZ2dyZWdhdG9yKHNldHRlciwgaW5pdGlhbGl6ZXIpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKGNvbGxlY3Rpb24sIGl0ZXJhdGVlKSB7XG4gICAgdmFyIGZ1bmMgPSBpc0FycmF5KGNvbGxlY3Rpb24pID8gYXJyYXlBZ2dyZWdhdG9yIDogYmFzZUFnZ3JlZ2F0b3IsXG4gICAgICAgIGFjY3VtdWxhdG9yID0gaW5pdGlhbGl6ZXIgPyBpbml0aWFsaXplcigpIDoge307XG5cbiAgICByZXR1cm4gZnVuYyhjb2xsZWN0aW9uLCBzZXR0ZXIsIGJhc2VJdGVyYXRlZShpdGVyYXRlZSwgMiksIGFjY3VtdWxhdG9yKTtcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlQWdncmVnYXRvcjtcbiIsIi8qKlxuICogQSBzcGVjaWFsaXplZCB2ZXJzaW9uIG9mIGBiYXNlQWdncmVnYXRvcmAgZm9yIGFycmF5cy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtBcnJheX0gW2FycmF5XSBUaGUgYXJyYXkgdG8gaXRlcmF0ZSBvdmVyLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gc2V0dGVyIFRoZSBmdW5jdGlvbiB0byBzZXQgYGFjY3VtdWxhdG9yYCB2YWx1ZXMuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBpdGVyYXRlZSBUaGUgaXRlcmF0ZWUgdG8gdHJhbnNmb3JtIGtleXMuXG4gKiBAcGFyYW0ge09iamVjdH0gYWNjdW11bGF0b3IgVGhlIGluaXRpYWwgYWdncmVnYXRlZCBvYmplY3QuXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IFJldHVybnMgYGFjY3VtdWxhdG9yYC5cbiAqL1xuZnVuY3Rpb24gYXJyYXlBZ2dyZWdhdG9yKGFycmF5LCBzZXR0ZXIsIGl0ZXJhdGVlLCBhY2N1bXVsYXRvcikge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIGxlbmd0aCA9IGFycmF5ID09IG51bGwgPyAwIDogYXJyYXkubGVuZ3RoO1xuXG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgdmFyIHZhbHVlID0gYXJyYXlbaW5kZXhdO1xuICAgIHNldHRlcihhY2N1bXVsYXRvciwgdmFsdWUsIGl0ZXJhdGVlKHZhbHVlKSwgYXJyYXkpO1xuICB9XG4gIHJldHVybiBhY2N1bXVsYXRvcjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgYXJyYXlBZ2dyZWdhdG9yO1xuIiwiaW1wb3J0IGJhc2VFYWNoIGZyb20gJy4vX2Jhc2VFYWNoLmpzJztcblxuLyoqXG4gKiBBZ2dyZWdhdGVzIGVsZW1lbnRzIG9mIGBjb2xsZWN0aW9uYCBvbiBgYWNjdW11bGF0b3JgIHdpdGgga2V5cyB0cmFuc2Zvcm1lZFxuICogYnkgYGl0ZXJhdGVlYCBhbmQgdmFsdWVzIHNldCBieSBgc2V0dGVyYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtBcnJheXxPYmplY3R9IGNvbGxlY3Rpb24gVGhlIGNvbGxlY3Rpb24gdG8gaXRlcmF0ZSBvdmVyLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gc2V0dGVyIFRoZSBmdW5jdGlvbiB0byBzZXQgYGFjY3VtdWxhdG9yYCB2YWx1ZXMuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBpdGVyYXRlZSBUaGUgaXRlcmF0ZWUgdG8gdHJhbnNmb3JtIGtleXMuXG4gKiBAcGFyYW0ge09iamVjdH0gYWNjdW11bGF0b3IgVGhlIGluaXRpYWwgYWdncmVnYXRlZCBvYmplY3QuXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IFJldHVybnMgYGFjY3VtdWxhdG9yYC5cbiAqL1xuZnVuY3Rpb24gYmFzZUFnZ3JlZ2F0b3IoY29sbGVjdGlvbiwgc2V0dGVyLCBpdGVyYXRlZSwgYWNjdW11bGF0b3IpIHtcbiAgYmFzZUVhY2goY29sbGVjdGlvbiwgZnVuY3Rpb24odmFsdWUsIGtleSwgY29sbGVjdGlvbikge1xuICAgIHNldHRlcihhY2N1bXVsYXRvciwgdmFsdWUsIGl0ZXJhdGVlKHZhbHVlKSwgY29sbGVjdGlvbik7XG4gIH0pO1xuICByZXR1cm4gYWNjdW11bGF0b3I7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGJhc2VBZ2dyZWdhdG9yO1xuIiwiLypcbiBIaWdoY2hhcnRzIEpTIHY2LjEuMSAoMjAxOC0wNi0yNylcblxuIChjKSAyMDE0IEhpZ2hzb2Z0IEFTXG4gQXV0aG9yczogSm9uIEFyaWxkIE55Z2FyZCAvIE95c3RlaW4gTW9zZW5nXG5cbiBMaWNlbnNlOiB3d3cuaGlnaGNoYXJ0cy5jb20vbGljZW5zZVxuKi9cbihmdW5jdGlvbih4KXtcIm9iamVjdFwiPT09dHlwZW9mIG1vZHVsZSYmbW9kdWxlLmV4cG9ydHM/bW9kdWxlLmV4cG9ydHM9eDp4KEhpZ2hjaGFydHMpfSkoZnVuY3Rpb24oeCl7dmFyIEY9ZnVuY3Rpb24oYil7dmFyIHg9Yi5lYWNoLEM9Yi5leHRlbmQscT1iLmlzQXJyYXksaz1iLmlzT2JqZWN0LHI9Yi5pc051bWJlcixFPWIubWVyZ2UsQT1iLnBpY2ssbj1iLnJlZHVjZTtyZXR1cm57Z2V0Q29sb3I6ZnVuY3Rpb24odCx1KXt2YXIgeT11LmluZGV4LGc9dS5tYXBPcHRpb25zVG9MZXZlbCxuPXUucGFyZW50Q29sb3Isej11LnBhcmVudENvbG9ySW5kZXgsdj11LnNlcmllcyxlPXUuY29sb3JzLHE9dS5zaWJsaW5ncyxsPXYucG9pbnRzLGssRCxCLHI7aWYodCl7bD1sW3QuaV07dD1nW3QubGV2ZWxdfHx7fTtpZihrPWwmJnQuY29sb3JCeVBvaW50KUI9bC5pbmRleCUoZT9lLmxlbmd0aDp2LmNoYXJ0Lm9wdGlvbnMuY2hhcnQuY29sb3JDb3VudCksRD1lJiZlW0JdO2U9bCYmbC5vcHRpb25zLmNvbG9yO1xuaz10JiZ0LmNvbG9yO2lmKGc9bilnPShnPXQmJnQuY29sb3JWYXJpYXRpb24pJiZcImJyaWdodG5lc3NcIj09PWcua2V5P2IuY29sb3IobikuYnJpZ2h0ZW4oeS9xKmcudG8pLmdldCgpOm47az1BKGUsayxELGcsdi5jb2xvcik7cj1BKGwmJmwub3B0aW9ucy5jb2xvckluZGV4LHQmJnQuY29sb3JJbmRleCxCLHosdS5jb2xvckluZGV4KX1yZXR1cm57Y29sb3I6ayxjb2xvckluZGV4OnJ9fSxnZXRMZXZlbE9wdGlvbnM6ZnVuY3Rpb24oYil7dmFyIHU9bnVsbCx5LGcsdCx6O2lmKGsoYikpZm9yKHU9e30sdD1yKGIuZnJvbSk/Yi5mcm9tOjEsej1iLmxldmVscyxnPXt9LHk9ayhiLmRlZmF1bHRzKT9iLmRlZmF1bHRzOnt9LHEoeikmJihnPW4oeixmdW5jdGlvbihiLGUpe3ZhciBnLGw7ayhlKSYmcihlLmxldmVsKSYmKGw9RSh7fSxlKSxnPVwiYm9vbGVhblwiPT09dHlwZW9mIGwubGV2ZWxJc0NvbnN0YW50P2wubGV2ZWxJc0NvbnN0YW50OnkubGV2ZWxJc0NvbnN0YW50LGRlbGV0ZSBsLmxldmVsSXNDb25zdGFudCxcbmRlbGV0ZSBsLmxldmVsLGU9ZS5sZXZlbCsoZz8wOnQtMSksayhiW2VdKT9DKGJbZV0sbCk6YltlXT1sKTtyZXR1cm4gYn0se30pKSx6PXIoYi50byk/Yi50bzoxLGI9MDtiPD16O2IrKyl1W2JdPUUoe30seSxrKGdbYl0pP2dbYl06e30pO3JldHVybiB1fSxzZXRUcmVlVmFsdWVzOmZ1bmN0aW9uIHUoYixnKXt2YXIgbj1nLmJlZm9yZSxrPWcuaWRSb290LHk9Zy5tYXBJZFRvTm9kZVtrXSxlPWcucG9pbnRzW2IuaV0scT1lJiZlLm9wdGlvbnN8fHt9LGw9MCxyPVtdO0MoYix7bGV2ZWxEeW5hbWljOmIubGV2ZWwtKChcImJvb2xlYW5cIj09PXR5cGVvZiBnLmxldmVsSXNDb25zdGFudD9nLmxldmVsSXNDb25zdGFudDoxKT8wOnkubGV2ZWwpLG5hbWU6QShlJiZlLm5hbWUsXCJcIiksdmlzaWJsZTprPT09Yi5pZHx8KFwiYm9vbGVhblwiPT09dHlwZW9mIGcudmlzaWJsZT9nLnZpc2libGU6ITEpfSk7XCJmdW5jdGlvblwiPT09dHlwZW9mIG4mJihiPW4oYixnKSk7eChiLmNoaWxkcmVuLGZ1bmN0aW9uKGUsXG5uKXt2YXIgaz1DKHt9LGcpO0Moayx7aW5kZXg6bixzaWJsaW5nczpiLmNoaWxkcmVuLmxlbmd0aCx2aXNpYmxlOmIudmlzaWJsZX0pO2U9dShlLGspO3IucHVzaChlKTtlLnZpc2libGUmJihsKz1lLnZhbCl9KTtiLnZpc2libGU9MDxsfHxiLnZpc2libGU7bj1BKHEudmFsdWUsbCk7QyhiLHtjaGlsZHJlbjpyLGNoaWxkcmVuVG90YWw6bCxpc0xlYWY6Yi52aXNpYmxlJiYhbCx2YWw6bn0pO3JldHVybiBifSx1cGRhdGVSb290SWQ6ZnVuY3Rpb24oYil7dmFyIG47ayhiKSYmKG49ayhiLm9wdGlvbnMpP2Iub3B0aW9uczp7fSxuPUEoYi5yb290Tm9kZSxuLnJvb3RJZCxcIlwiKSxrKGIudXNlck9wdGlvbnMpJiYoYi51c2VyT3B0aW9ucy5yb290SWQ9biksYi5yb290Tm9kZT1uKTtyZXR1cm4gbn19fSh4KTsoZnVuY3Rpb24oYix4KXt2YXIgQz1iLnNlcmllc1R5cGUscT1iLnNlcmllc1R5cGVzLGs9Yi5tYXAscj1iLm1lcmdlLEU9Yi5leHRlbmQsQT1iLm5vb3Asbj1iLmVhY2gsdD14LmdldENvbG9yLFxudT14LmdldExldmVsT3B0aW9ucyx5PWIuZ3JlcCxnPWIuaXNOdW1iZXIsRj1iLmlzT2JqZWN0LHo9Yi5pc1N0cmluZyx2PWIucGljayxlPWIuU2VyaWVzLEg9Yi5zdGFibGVTb3J0LGw9Yi5Db2xvcixJPWZ1bmN0aW9uKGEsYyxkKXtkPWR8fHRoaXM7Yi5vYmplY3RFYWNoKGEsZnVuY3Rpb24oYixmKXtjLmNhbGwoZCxiLGYsYSl9KX0sRD1iLnJlZHVjZSxCPWZ1bmN0aW9uKGEsYyxkKXtkPWR8fHRoaXM7YT1jLmNhbGwoZCxhKTshMSE9PWEmJkIoYSxjLGQpfSxKPXgudXBkYXRlUm9vdElkO0MoXCJ0cmVlbWFwXCIsXCJzY2F0dGVyXCIse3Nob3dJbkxlZ2VuZDohMSxtYXJrZXI6ITEsY29sb3JCeVBvaW50OiExLGRhdGFMYWJlbHM6e2VuYWJsZWQ6ITAsZGVmZXI6ITEsdmVydGljYWxBbGlnbjpcIm1pZGRsZVwiLGZvcm1hdHRlcjpmdW5jdGlvbigpe3JldHVybiB0aGlzLnBvaW50Lm5hbWV8fHRoaXMucG9pbnQuaWR9LGluc2lkZTohMH0sdG9vbHRpcDp7aGVhZGVyRm9ybWF0OlwiXCIscG9pbnRGb3JtYXQ6XCJcXHgzY2JcXHgzZXtwb2ludC5uYW1lfVxceDNjL2JcXHgzZToge3BvaW50LnZhbHVlfVxceDNjYnIvXFx4M2VcIn0sXG5pZ25vcmVIaWRkZW5Qb2ludDohMCxsYXlvdXRBbGdvcml0aG06XCJzbGljZUFuZERpY2VcIixsYXlvdXRTdGFydGluZ0RpcmVjdGlvbjpcInZlcnRpY2FsXCIsYWx0ZXJuYXRlU3RhcnRpbmdEaXJlY3Rpb246ITEsbGV2ZWxJc0NvbnN0YW50OiEwLGRyaWxsVXBCdXR0b246e3Bvc2l0aW9uOnthbGlnbjpcInJpZ2h0XCIseDotMTAseToxMH19LGJvcmRlckNvbG9yOlwiI2U2ZTZlNlwiLGJvcmRlcldpZHRoOjEsb3BhY2l0eTouMTUsc3RhdGVzOntob3Zlcjp7Ym9yZGVyQ29sb3I6XCIjOTk5OTk5XCIsYnJpZ2h0bmVzczpxLmhlYXRtYXA/MDouMSxoYWxvOiExLG9wYWNpdHk6Ljc1LHNoYWRvdzohMX19fSx7cG9pbnRBcnJheU1hcDpbXCJ2YWx1ZVwiXSxheGlzVHlwZXM6cS5oZWF0bWFwP1tcInhBeGlzXCIsXCJ5QXhpc1wiLFwiY29sb3JBeGlzXCJdOltcInhBeGlzXCIsXCJ5QXhpc1wiXSxkaXJlY3RUb3VjaDohMCxvcHRpb25hbEF4aXM6XCJjb2xvckF4aXNcIixnZXRTeW1ib2w6QSxwYXJhbGxlbEFycmF5czpbXCJ4XCIsXCJ5XCIsXG5cInZhbHVlXCIsXCJjb2xvclZhbHVlXCJdLGNvbG9yS2V5OlwiY29sb3JWYWx1ZVwiLHRyYW5zbGF0ZUNvbG9yczpxLmhlYXRtYXAmJnEuaGVhdG1hcC5wcm90b3R5cGUudHJhbnNsYXRlQ29sb3JzLGNvbG9yQXR0cmliczpxLmhlYXRtYXAmJnEuaGVhdG1hcC5wcm90b3R5cGUuY29sb3JBdHRyaWJzLHRyYWNrZXJHcm91cHM6W1wiZ3JvdXBcIixcImRhdGFMYWJlbHNHcm91cFwiXSxnZXRMaXN0T2ZQYXJlbnRzOmZ1bmN0aW9uKGEsYyl7YT1EKGF8fFtdLGZ1bmN0aW9uKGEsYyxiKXtjPXYoYy5wYXJlbnQsXCJcIik7dm9pZCAwPT09YVtjXSYmKGFbY109W10pO2FbY10ucHVzaChiKTtyZXR1cm4gYX0se30pO0koYSxmdW5jdGlvbihhLG0sZil7XCJcIiE9PW0mJi0xPT09Yi5pbkFycmF5KG0sYykmJihuKGEsZnVuY3Rpb24oYSl7ZltcIlwiXS5wdXNoKGEpfSksZGVsZXRlIGZbbV0pfSk7cmV0dXJuIGF9LGdldFRyZWU6ZnVuY3Rpb24oKXt2YXIgYT1rKHRoaXMuZGF0YSxmdW5jdGlvbihhKXtyZXR1cm4gYS5pZH0pLFxuYT10aGlzLmdldExpc3RPZlBhcmVudHModGhpcy5kYXRhLGEpO3RoaXMubm9kZU1hcD1bXTtyZXR1cm4gdGhpcy5idWlsZE5vZGUoXCJcIiwtMSwwLGEsbnVsbCl9LGluaXQ6ZnVuY3Rpb24oYSxjKXtlLnByb3RvdHlwZS5pbml0LmNhbGwodGhpcyxhLGMpO3RoaXMub3B0aW9ucy5hbGxvd0RyaWxsVG9Ob2RlJiZiLmFkZEV2ZW50KHRoaXMsXCJjbGlja1wiLHRoaXMub25DbGlja0RyaWxsVG9Ob2RlKX0sYnVpbGROb2RlOmZ1bmN0aW9uKGEsYyxkLGIsZil7dmFyIHA9dGhpcyxtPVtdLGg9cC5wb2ludHNbY10sRz0wLGU7bihiW2FdfHxbXSxmdW5jdGlvbihjKXtlPXAuYnVpbGROb2RlKHAucG9pbnRzW2NdLmlkLGMsZCsxLGIsYSk7Rz1NYXRoLm1heChlLmhlaWdodCsxLEcpO20ucHVzaChlKX0pO2M9e2lkOmEsaTpjLGNoaWxkcmVuOm0saGVpZ2h0OkcsbGV2ZWw6ZCxwYXJlbnQ6Zix2aXNpYmxlOiExfTtwLm5vZGVNYXBbYy5pZF09YztoJiYoaC5ub2RlPWMpO3JldHVybiBjfSxzZXRUcmVlVmFsdWVzOmZ1bmN0aW9uKGEpe3ZhciBjPVxudGhpcyxkPWMub3B0aW9ucyxiPWMubm9kZU1hcFtjLnJvb3ROb2RlXSxkPVwiYm9vbGVhblwiPT09dHlwZW9mIGQubGV2ZWxJc0NvbnN0YW50P2QubGV2ZWxJc0NvbnN0YW50OiEwLGY9MCxwPVtdLGUsaD1jLnBvaW50c1thLmldO24oYS5jaGlsZHJlbixmdW5jdGlvbihhKXthPWMuc2V0VHJlZVZhbHVlcyhhKTtwLnB1c2goYSk7YS5pZ25vcmV8fChmKz1hLnZhbCl9KTtIKHAsZnVuY3Rpb24oYSxjKXtyZXR1cm4gYS5zb3J0SW5kZXgtYy5zb3J0SW5kZXh9KTtlPXYoaCYmaC5vcHRpb25zLnZhbHVlLGYpO2gmJihoLnZhbHVlPWUpO0UoYSx7Y2hpbGRyZW46cCxjaGlsZHJlblRvdGFsOmYsaWdub3JlOiEodihoJiZoLnZpc2libGUsITApJiYwPGUpLGlzTGVhZjphLnZpc2libGUmJiFmLGxldmVsRHluYW1pYzphLmxldmVsLShkPzA6Yi5sZXZlbCksbmFtZTp2KGgmJmgubmFtZSxcIlwiKSxzb3J0SW5kZXg6dihoJiZoLnNvcnRJbmRleCwtZSksdmFsOmV9KTtyZXR1cm4gYX0sY2FsY3VsYXRlQ2hpbGRyZW5BcmVhczpmdW5jdGlvbihhLFxuYyl7dmFyIGQ9dGhpcyxiPWQub3B0aW9ucyxmPWQubWFwT3B0aW9uc1RvTGV2ZWxbYS5sZXZlbCsxXSxwPXYoZFtmJiZmLmxheW91dEFsZ29yaXRobV0mJmYubGF5b3V0QWxnb3JpdGhtLGIubGF5b3V0QWxnb3JpdGhtKSxlPWIuYWx0ZXJuYXRlU3RhcnRpbmdEaXJlY3Rpb24saD1bXTthPXkoYS5jaGlsZHJlbixmdW5jdGlvbihhKXtyZXR1cm4hYS5pZ25vcmV9KTtmJiZmLmxheW91dFN0YXJ0aW5nRGlyZWN0aW9uJiYoYy5kaXJlY3Rpb249XCJ2ZXJ0aWNhbFwiPT09Zi5sYXlvdXRTdGFydGluZ0RpcmVjdGlvbj8wOjEpO2g9ZFtwXShjLGEpO24oYSxmdW5jdGlvbihhLGIpe2I9aFtiXTthLnZhbHVlcz1yKGIse3ZhbDphLmNoaWxkcmVuVG90YWwsZGlyZWN0aW9uOmU/MS1jLmRpcmVjdGlvbjpjLmRpcmVjdGlvbn0pO2EucG9pbnRWYWx1ZXM9cihiLHt4OmIueC9kLmF4aXNSYXRpbyx3aWR0aDpiLndpZHRoL2QuYXhpc1JhdGlvfSk7YS5jaGlsZHJlbi5sZW5ndGgmJmQuY2FsY3VsYXRlQ2hpbGRyZW5BcmVhcyhhLFxuYS52YWx1ZXMpfSl9LHNldFBvaW50VmFsdWVzOmZ1bmN0aW9uKCl7dmFyIGE9dGhpcyxjPWEueEF4aXMsZD1hLnlBeGlzO24oYS5wb2ludHMsZnVuY3Rpb24oYil7dmFyIGY9Yi5ub2RlLHA9Zi5wb2ludFZhbHVlcyxtLGgsZTtlPShhLnBvaW50QXR0cmlicyhiKVtcInN0cm9rZS13aWR0aFwiXXx8MCklMi8yO3AmJmYudmlzaWJsZT8oZj1NYXRoLnJvdW5kKGMudHJhbnNsYXRlKHAueCwwLDAsMCwxKSktZSxtPU1hdGgucm91bmQoYy50cmFuc2xhdGUocC54K3Aud2lkdGgsMCwwLDAsMSkpLWUsaD1NYXRoLnJvdW5kKGQudHJhbnNsYXRlKHAueSwwLDAsMCwxKSktZSxwPU1hdGgucm91bmQoZC50cmFuc2xhdGUocC55K3AuaGVpZ2h0LDAsMCwwLDEpKS1lLGIuc2hhcGVUeXBlPVwicmVjdFwiLGIuc2hhcGVBcmdzPXt4Ok1hdGgubWluKGYsbSkseTpNYXRoLm1pbihoLHApLHdpZHRoOk1hdGguYWJzKG0tZiksaGVpZ2h0Ok1hdGguYWJzKHAtaCl9LGIucGxvdFg9Yi5zaGFwZUFyZ3MueCtiLnNoYXBlQXJncy53aWR0aC9cbjIsYi5wbG90WT1iLnNoYXBlQXJncy55K2Iuc2hhcGVBcmdzLmhlaWdodC8yKTooZGVsZXRlIGIucGxvdFgsZGVsZXRlIGIucGxvdFkpfSl9LHNldENvbG9yUmVjdXJzaXZlOmZ1bmN0aW9uKGEsYyxiLGUsZil7dmFyIGQ9dGhpcyxtPWQmJmQuY2hhcnQsbT1tJiZtLm9wdGlvbnMmJm0ub3B0aW9ucy5jb2xvcnMsaDtpZihhKXtoPXQoYSx7Y29sb3JzOm0saW5kZXg6ZSxtYXBPcHRpb25zVG9MZXZlbDpkLm1hcE9wdGlvbnNUb0xldmVsLHBhcmVudENvbG9yOmMscGFyZW50Q29sb3JJbmRleDpiLHNlcmllczpkLHNpYmxpbmdzOmZ9KTtpZihjPWQucG9pbnRzW2EuaV0pYy5jb2xvcj1oLmNvbG9yLGMuY29sb3JJbmRleD1oLmNvbG9ySW5kZXg7bihhLmNoaWxkcmVufHxbXSxmdW5jdGlvbihjLGIpe2Quc2V0Q29sb3JSZWN1cnNpdmUoYyxoLmNvbG9yLGguY29sb3JJbmRleCxiLGEuY2hpbGRyZW4ubGVuZ3RoKX0pfX0sYWxnb3JpdGhtR3JvdXA6ZnVuY3Rpb24oYSxjLGIsbSl7dGhpcy5oZWlnaHQ9XG5hO3RoaXMud2lkdGg9Yzt0aGlzLnBsb3Q9bTt0aGlzLnN0YXJ0RGlyZWN0aW9uPXRoaXMuZGlyZWN0aW9uPWI7dGhpcy5sSD10aGlzLm5IPXRoaXMubFc9dGhpcy5uVz10aGlzLnRvdGFsPTA7dGhpcy5lbEFycj1bXTt0aGlzLmxQPXt0b3RhbDowLGxIOjAsbkg6MCxsVzowLG5XOjAsblI6MCxsUjowLGFzcGVjdFJhdGlvOmZ1bmN0aW9uKGEsYyl7cmV0dXJuIE1hdGgubWF4KGEvYyxjL2EpfX07dGhpcy5hZGRFbGVtZW50PWZ1bmN0aW9uKGEpe3RoaXMubFAudG90YWw9dGhpcy5lbEFyclt0aGlzLmVsQXJyLmxlbmd0aC0xXTt0aGlzLnRvdGFsKz1hOzA9PT10aGlzLmRpcmVjdGlvbj8odGhpcy5sVz10aGlzLm5XLHRoaXMubFAubEg9dGhpcy5sUC50b3RhbC90aGlzLmxXLHRoaXMubFAubFI9dGhpcy5sUC5hc3BlY3RSYXRpbyh0aGlzLmxXLHRoaXMubFAubEgpLHRoaXMublc9dGhpcy50b3RhbC90aGlzLmhlaWdodCx0aGlzLmxQLm5IPXRoaXMubFAudG90YWwvdGhpcy5uVyx0aGlzLmxQLm5SPVxudGhpcy5sUC5hc3BlY3RSYXRpbyh0aGlzLm5XLHRoaXMubFAubkgpKToodGhpcy5sSD10aGlzLm5ILHRoaXMubFAubFc9dGhpcy5sUC50b3RhbC90aGlzLmxILHRoaXMubFAubFI9dGhpcy5sUC5hc3BlY3RSYXRpbyh0aGlzLmxQLmxXLHRoaXMubEgpLHRoaXMubkg9dGhpcy50b3RhbC90aGlzLndpZHRoLHRoaXMubFAublc9dGhpcy5sUC50b3RhbC90aGlzLm5ILHRoaXMubFAublI9dGhpcy5sUC5hc3BlY3RSYXRpbyh0aGlzLmxQLm5XLHRoaXMubkgpKTt0aGlzLmVsQXJyLnB1c2goYSl9O3RoaXMucmVzZXQ9ZnVuY3Rpb24oKXt0aGlzLmxXPXRoaXMublc9MDt0aGlzLmVsQXJyPVtdO3RoaXMudG90YWw9MH19LGFsZ29yaXRobUNhbGNQb2ludHM6ZnVuY3Rpb24oYSxjLGIsbSl7dmFyIGQsZSxnLGgsbD1iLmxXLGs9Yi5sSCx3PWIucGxvdCx0LHU9MCxxPWIuZWxBcnIubGVuZ3RoLTE7Yz8obD1iLm5XLGs9Yi5uSCk6dD1iLmVsQXJyW2IuZWxBcnIubGVuZ3RoLTFdO24oYi5lbEFycixmdW5jdGlvbihhKXtpZihjfHxcbnU8cSkwPT09Yi5kaXJlY3Rpb24/KGQ9dy54LGU9dy55LGc9bCxoPWEvZyk6KGQ9dy54LGU9dy55LGg9ayxnPWEvaCksbS5wdXNoKHt4OmQseTplLHdpZHRoOmcsaGVpZ2h0Omh9KSwwPT09Yi5kaXJlY3Rpb24/dy55Kz1oOncueCs9Zzt1Kz0xfSk7Yi5yZXNldCgpOzA9PT1iLmRpcmVjdGlvbj9iLndpZHRoLT1sOmIuaGVpZ2h0LT1rO3cueT13LnBhcmVudC55Kyh3LnBhcmVudC5oZWlnaHQtYi5oZWlnaHQpO3cueD13LnBhcmVudC54Kyh3LnBhcmVudC53aWR0aC1iLndpZHRoKTthJiYoYi5kaXJlY3Rpb249MS1iLmRpcmVjdGlvbik7Y3x8Yi5hZGRFbGVtZW50KHQpfSxhbGdvcml0aG1Mb3dBc3BlY3RSYXRpbzpmdW5jdGlvbihhLGIsZCl7dmFyIGM9W10sZT10aGlzLHAsZz17eDpiLngseTpiLnkscGFyZW50OmJ9LGg9MCxsPWQubGVuZ3RoLTEsaz1uZXcgdGhpcy5hbGdvcml0aG1Hcm91cChiLmhlaWdodCxiLndpZHRoLGIuZGlyZWN0aW9uLGcpO24oZCxmdW5jdGlvbihkKXtwPWQudmFsL1xuYi52YWwqYi5oZWlnaHQqYi53aWR0aDtrLmFkZEVsZW1lbnQocCk7ay5sUC5uUj5rLmxQLmxSJiZlLmFsZ29yaXRobUNhbGNQb2ludHMoYSwhMSxrLGMsZyk7aD09PWwmJmUuYWxnb3JpdGhtQ2FsY1BvaW50cyhhLCEwLGssYyxnKTtoKz0xfSk7cmV0dXJuIGN9LGFsZ29yaXRobUZpbGw6ZnVuY3Rpb24oYSxiLGQpe3ZhciBjPVtdLGUscD1iLmRpcmVjdGlvbixnPWIueCxoPWIueSxrPWIud2lkdGgsbD1iLmhlaWdodCx0LHUscSxyO24oZCxmdW5jdGlvbihkKXtlPWQudmFsL2IudmFsKmIuaGVpZ2h0KmIud2lkdGg7dD1nO3U9aDswPT09cD8ocj1sLHE9ZS9yLGstPXEsZys9cSk6KHE9ayxyPWUvcSxsLT1yLGgrPXIpO2MucHVzaCh7eDp0LHk6dSx3aWR0aDpxLGhlaWdodDpyfSk7YSYmKHA9MS1wKX0pO3JldHVybiBjfSxzdHJpcDpmdW5jdGlvbihhLGIpe3JldHVybiB0aGlzLmFsZ29yaXRobUxvd0FzcGVjdFJhdGlvKCExLGEsYil9LHNxdWFyaWZpZWQ6ZnVuY3Rpb24oYSxiKXtyZXR1cm4gdGhpcy5hbGdvcml0aG1Mb3dBc3BlY3RSYXRpbyghMCxcbmEsYil9LHNsaWNlQW5kRGljZTpmdW5jdGlvbihhLGIpe3JldHVybiB0aGlzLmFsZ29yaXRobUZpbGwoITAsYSxiKX0sc3RyaXBlczpmdW5jdGlvbihhLGIpe3JldHVybiB0aGlzLmFsZ29yaXRobUZpbGwoITEsYSxiKX0sdHJhbnNsYXRlOmZ1bmN0aW9uKCl7dmFyIGE9dGhpcyxiPWEub3B0aW9ucyxkPUooYSksbSxmO2UucHJvdG90eXBlLnRyYW5zbGF0ZS5jYWxsKGEpO2Y9YS50cmVlPWEuZ2V0VHJlZSgpO209YS5ub2RlTWFwW2RdO2EubWFwT3B0aW9uc1RvTGV2ZWw9dSh7ZnJvbTptLmxldmVsKzEsbGV2ZWxzOmIubGV2ZWxzLHRvOmYuaGVpZ2h0LGRlZmF1bHRzOntsZXZlbElzQ29uc3RhbnQ6YS5vcHRpb25zLmxldmVsSXNDb25zdGFudCxjb2xvckJ5UG9pbnQ6Yi5jb2xvckJ5UG9pbnR9fSk7XCJcIj09PWR8fG0mJm0uY2hpbGRyZW4ubGVuZ3RofHwoYS5kcmlsbFRvTm9kZShcIlwiLCExKSxkPWEucm9vdE5vZGUsbT1hLm5vZGVNYXBbZF0pO0IoYS5ub2RlTWFwW2Eucm9vdE5vZGVdLGZ1bmN0aW9uKGIpe3ZhciBjPVxuITEsZD1iLnBhcmVudDtiLnZpc2libGU9ITA7aWYoZHx8XCJcIj09PWQpYz1hLm5vZGVNYXBbZF07cmV0dXJuIGN9KTtCKGEubm9kZU1hcFthLnJvb3ROb2RlXS5jaGlsZHJlbixmdW5jdGlvbihhKXt2YXIgYj0hMTtuKGEsZnVuY3Rpb24oYSl7YS52aXNpYmxlPSEwO2EuY2hpbGRyZW4ubGVuZ3RoJiYoYj0oYnx8W10pLmNvbmNhdChhLmNoaWxkcmVuKSl9KTtyZXR1cm4gYn0pO2Euc2V0VHJlZVZhbHVlcyhmKTthLmF4aXNSYXRpbz1hLnhBeGlzLmxlbi9hLnlBeGlzLmxlbjthLm5vZGVNYXBbXCJcIl0ucG9pbnRWYWx1ZXM9ZD17eDowLHk6MCx3aWR0aDoxMDAsaGVpZ2h0OjEwMH07YS5ub2RlTWFwW1wiXCJdLnZhbHVlcz1kPXIoZCx7d2lkdGg6ZC53aWR0aCphLmF4aXNSYXRpbyxkaXJlY3Rpb246XCJ2ZXJ0aWNhbFwiPT09Yi5sYXlvdXRTdGFydGluZ0RpcmVjdGlvbj8wOjEsdmFsOmYudmFsfSk7YS5jYWxjdWxhdGVDaGlsZHJlbkFyZWFzKGYsZCk7YS5jb2xvckF4aXM/YS50cmFuc2xhdGVDb2xvcnMoKTpcbmIuY29sb3JCeVBvaW50fHxhLnNldENvbG9yUmVjdXJzaXZlKGEudHJlZSk7Yi5hbGxvd0RyaWxsVG9Ob2RlJiYoYj1tLnBvaW50VmFsdWVzLGEueEF4aXMuc2V0RXh0cmVtZXMoYi54LGIueCtiLndpZHRoLCExKSxhLnlBeGlzLnNldEV4dHJlbWVzKGIueSxiLnkrYi5oZWlnaHQsITEpLGEueEF4aXMuc2V0U2NhbGUoKSxhLnlBeGlzLnNldFNjYWxlKCkpO2Euc2V0UG9pbnRWYWx1ZXMoKX0sZHJhd0RhdGFMYWJlbHM6ZnVuY3Rpb24oKXt2YXIgYT10aGlzLGI9YS5tYXBPcHRpb25zVG9MZXZlbCxkPXkoYS5wb2ludHMsZnVuY3Rpb24oYSl7cmV0dXJuIGEubm9kZS52aXNpYmxlfSksbSxmO24oZCxmdW5jdGlvbihjKXtmPWJbYy5ub2RlLmxldmVsXTttPXtzdHlsZTp7fX07Yy5ub2RlLmlzTGVhZnx8KG0uZW5hYmxlZD0hMSk7ZiYmZi5kYXRhTGFiZWxzJiYobT1yKG0sZi5kYXRhTGFiZWxzKSxhLl9oYXNQb2ludExhYmVscz0hMCk7Yy5zaGFwZUFyZ3MmJihtLnN0eWxlLndpZHRoPWMuc2hhcGVBcmdzLndpZHRoLFxuYy5kYXRhTGFiZWwmJmMuZGF0YUxhYmVsLmNzcyh7d2lkdGg6Yy5zaGFwZUFyZ3Mud2lkdGgrXCJweFwifSkpO2MuZGxPcHRpb25zPXIobSxjLm9wdGlvbnMuZGF0YUxhYmVscyl9KTtlLnByb3RvdHlwZS5kcmF3RGF0YUxhYmVscy5jYWxsKHRoaXMpfSxhbGlnbkRhdGFMYWJlbDpmdW5jdGlvbihhKXtxLmNvbHVtbi5wcm90b3R5cGUuYWxpZ25EYXRhTGFiZWwuYXBwbHkodGhpcyxhcmd1bWVudHMpO2EuZGF0YUxhYmVsJiZhLmRhdGFMYWJlbC5hdHRyKHt6SW5kZXg6KGEubm9kZS56SW5kZXh8fDApKzF9KX0scG9pbnRBdHRyaWJzOmZ1bmN0aW9uKGEsYil7dmFyIGM9Rih0aGlzLm1hcE9wdGlvbnNUb0xldmVsKT90aGlzLm1hcE9wdGlvbnNUb0xldmVsOnt9LGU9YSYmY1thLm5vZGUubGV2ZWxdfHx7fSxjPXRoaXMub3B0aW9ucyxmPWImJmMuc3RhdGVzW2JdfHx7fSxnPWEmJmEuZ2V0Q2xhc3NOYW1lKCl8fFwiXCI7YT17c3Ryb2tlOmEmJmEuYm9yZGVyQ29sb3J8fGUuYm9yZGVyQ29sb3J8fFxuZi5ib3JkZXJDb2xvcnx8Yy5ib3JkZXJDb2xvcixcInN0cm9rZS13aWR0aFwiOnYoYSYmYS5ib3JkZXJXaWR0aCxlLmJvcmRlcldpZHRoLGYuYm9yZGVyV2lkdGgsYy5ib3JkZXJXaWR0aCksZGFzaHN0eWxlOmEmJmEuYm9yZGVyRGFzaFN0eWxlfHxlLmJvcmRlckRhc2hTdHlsZXx8Zi5ib3JkZXJEYXNoU3R5bGV8fGMuYm9yZGVyRGFzaFN0eWxlLGZpbGw6YSYmYS5jb2xvcnx8dGhpcy5jb2xvcn07LTEhPT1nLmluZGV4T2YoXCJoaWdoY2hhcnRzLWFib3ZlLWxldmVsXCIpPyhhLmZpbGw9XCJub25lXCIsYVtcInN0cm9rZS13aWR0aFwiXT0wKTotMSE9PWcuaW5kZXhPZihcImhpZ2hjaGFydHMtaW50ZXJuYWwtbm9kZS1pbnRlcmFjdGl2ZVwiKT8oYj12KGYub3BhY2l0eSxjLm9wYWNpdHkpLGEuZmlsbD1sKGEuZmlsbCkuc2V0T3BhY2l0eShiKS5nZXQoKSxhLmN1cnNvcj1cInBvaW50ZXJcIik6LTEhPT1nLmluZGV4T2YoXCJoaWdoY2hhcnRzLWludGVybmFsLW5vZGVcIik/YS5maWxsPVwibm9uZVwiOmImJihhLmZpbGw9XG5sKGEuZmlsbCkuYnJpZ2h0ZW4oZi5icmlnaHRuZXNzKS5nZXQoKSk7cmV0dXJuIGF9LGRyYXdQb2ludHM6ZnVuY3Rpb24oKXt2YXIgYT10aGlzLGI9eShhLnBvaW50cyxmdW5jdGlvbihhKXtyZXR1cm4gYS5ub2RlLnZpc2libGV9KTtuKGIsZnVuY3Rpb24oYil7dmFyIGM9XCJsZXZlbC1ncm91cC1cIitiLm5vZGUubGV2ZWxEeW5hbWljO2FbY118fChhW2NdPWEuY2hhcnQucmVuZGVyZXIuZyhjKS5hdHRyKHt6SW5kZXg6MUUzLWIubm9kZS5sZXZlbER5bmFtaWN9KS5hZGQoYS5ncm91cCkpO2IuZ3JvdXA9YVtjXX0pO3EuY29sdW1uLnByb3RvdHlwZS5kcmF3UG9pbnRzLmNhbGwodGhpcyk7YS5vcHRpb25zLmFsbG93RHJpbGxUb05vZGUmJm4oYixmdW5jdGlvbihiKXtiLmdyYXBoaWMmJihiLmRyaWxsSWQ9YS5vcHRpb25zLmludGVyYWN0QnlMZWFmP2EuZHJpbGxUb0J5TGVhZihiKTphLmRyaWxsVG9CeUdyb3VwKGIpKX0pfSxvbkNsaWNrRHJpbGxUb05vZGU6ZnVuY3Rpb24oYSl7dmFyIGI9XG4oYT1hLnBvaW50KSYmYS5kcmlsbElkO3ooYikmJihhLnNldFN0YXRlKFwiXCIpLHRoaXMuZHJpbGxUb05vZGUoYikpfSxkcmlsbFRvQnlHcm91cDpmdW5jdGlvbihhKXt2YXIgYj0hMTsxIT09YS5ub2RlLmxldmVsLXRoaXMubm9kZU1hcFt0aGlzLnJvb3ROb2RlXS5sZXZlbHx8YS5ub2RlLmlzTGVhZnx8KGI9YS5pZCk7cmV0dXJuIGJ9LGRyaWxsVG9CeUxlYWY6ZnVuY3Rpb24oYSl7dmFyIGI9ITE7aWYoYS5ub2RlLnBhcmVudCE9PXRoaXMucm9vdE5vZGUmJmEubm9kZS5pc0xlYWYpZm9yKGE9YS5ub2RlOyFiOylhPXRoaXMubm9kZU1hcFthLnBhcmVudF0sYS5wYXJlbnQ9PT10aGlzLnJvb3ROb2RlJiYoYj1hLmlkKTtyZXR1cm4gYn0sZHJpbGxVcDpmdW5jdGlvbigpe3ZhciBhPXRoaXMubm9kZU1hcFt0aGlzLnJvb3ROb2RlXTthJiZ6KGEucGFyZW50KSYmdGhpcy5kcmlsbFRvTm9kZShhLnBhcmVudCl9LGRyaWxsVG9Ob2RlOmZ1bmN0aW9uKGEsYil7dmFyIGM9dGhpcy5ub2RlTWFwW2FdO1xudGhpcy5pZFByZXZpb3VzUm9vdD10aGlzLnJvb3ROb2RlO3RoaXMucm9vdE5vZGU9YTtcIlwiPT09YT90aGlzLmRyaWxsVXBCdXR0b249dGhpcy5kcmlsbFVwQnV0dG9uLmRlc3Ryb3koKTp0aGlzLnNob3dEcmlsbFVwQnV0dG9uKGMmJmMubmFtZXx8YSk7dGhpcy5pc0RpcnR5PSEwO3YoYiwhMCkmJnRoaXMuY2hhcnQucmVkcmF3KCl9LHNob3dEcmlsbFVwQnV0dG9uOmZ1bmN0aW9uKGEpe3ZhciBiPXRoaXM7YT1hfHxcIlxceDNjIEJhY2tcIjt2YXIgZD1iLm9wdGlvbnMuZHJpbGxVcEJ1dHRvbixlLGY7ZC50ZXh0JiYoYT1kLnRleHQpO3RoaXMuZHJpbGxVcEJ1dHRvbj8odGhpcy5kcmlsbFVwQnV0dG9uLnBsYWNlZD0hMSx0aGlzLmRyaWxsVXBCdXR0b24uYXR0cih7dGV4dDphfSkuYWxpZ24oKSk6KGY9KGU9ZC50aGVtZSkmJmUuc3RhdGVzLHRoaXMuZHJpbGxVcEJ1dHRvbj10aGlzLmNoYXJ0LnJlbmRlcmVyLmJ1dHRvbihhLG51bGwsbnVsbCxmdW5jdGlvbigpe2IuZHJpbGxVcCgpfSxlLGYmJlxuZi5ob3ZlcixmJiZmLnNlbGVjdCkuYWRkQ2xhc3MoXCJoaWdoY2hhcnRzLWRyaWxsdXAtYnV0dG9uXCIpLmF0dHIoe2FsaWduOmQucG9zaXRpb24uYWxpZ24sekluZGV4Ojd9KS5hZGQoKS5hbGlnbihkLnBvc2l0aW9uLCExLGQucmVsYXRpdmVUb3x8XCJwbG90Qm94XCIpKX0sYnVpbGRLRFRyZWU6QSxkcmF3TGVnZW5kU3ltYm9sOmIuTGVnZW5kU3ltYm9sTWl4aW4uZHJhd1JlY3RhbmdsZSxnZXRFeHRyZW1lczpmdW5jdGlvbigpe2UucHJvdG90eXBlLmdldEV4dHJlbWVzLmNhbGwodGhpcyx0aGlzLmNvbG9yVmFsdWVEYXRhKTt0aGlzLnZhbHVlTWluPXRoaXMuZGF0YU1pbjt0aGlzLnZhbHVlTWF4PXRoaXMuZGF0YU1heDtlLnByb3RvdHlwZS5nZXRFeHRyZW1lcy5jYWxsKHRoaXMpfSxnZXRFeHRyZW1lc0Zyb21BbGw6ITAsYmluZEF4ZXM6ZnVuY3Rpb24oKXt2YXIgYT17ZW5kT25UaWNrOiExLGdyaWRMaW5lV2lkdGg6MCxsaW5lV2lkdGg6MCxtaW46MCxkYXRhTWluOjAsbWluUGFkZGluZzowLFxubWF4OjEwMCxkYXRhTWF4OjEwMCxtYXhQYWRkaW5nOjAsc3RhcnRPblRpY2s6ITEsdGl0bGU6bnVsbCx0aWNrUG9zaXRpb25zOltdfTtlLnByb3RvdHlwZS5iaW5kQXhlcy5jYWxsKHRoaXMpO2IuZXh0ZW5kKHRoaXMueUF4aXMub3B0aW9ucyxhKTtiLmV4dGVuZCh0aGlzLnhBeGlzLm9wdGlvbnMsYSl9LHV0aWxzOntyZWN1cnNpdmU6QixyZWR1Y2U6RH19LHtnZXRDbGFzc05hbWU6ZnVuY3Rpb24oKXt2YXIgYT1iLlBvaW50LnByb3RvdHlwZS5nZXRDbGFzc05hbWUuY2FsbCh0aGlzKSxjPXRoaXMuc2VyaWVzLGQ9Yy5vcHRpb25zO3RoaXMubm9kZS5sZXZlbDw9Yy5ub2RlTWFwW2Mucm9vdE5vZGVdLmxldmVsP2ErPVwiIGhpZ2hjaGFydHMtYWJvdmUtbGV2ZWxcIjp0aGlzLm5vZGUuaXNMZWFmfHx2KGQuaW50ZXJhY3RCeUxlYWYsIWQuYWxsb3dEcmlsbFRvTm9kZSk/dGhpcy5ub2RlLmlzTGVhZnx8KGErPVwiIGhpZ2hjaGFydHMtaW50ZXJuYWwtbm9kZVwiKTphKz1cIiBoaWdoY2hhcnRzLWludGVybmFsLW5vZGUtaW50ZXJhY3RpdmVcIjtcbnJldHVybiBhfSxpc1ZhbGlkOmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuaWR8fGcodGhpcy52YWx1ZSl9LHNldFN0YXRlOmZ1bmN0aW9uKGEpe2IuUG9pbnQucHJvdG90eXBlLnNldFN0YXRlLmNhbGwodGhpcyxhKTt0aGlzLmdyYXBoaWMmJnRoaXMuZ3JhcGhpYy5hdHRyKHt6SW5kZXg6XCJob3ZlclwiPT09YT8xOjB9KX0sc2V0VmlzaWJsZTpxLnBpZS5wcm90b3R5cGUucG9pbnRDbGFzcy5wcm90b3R5cGUuc2V0VmlzaWJsZX0pfSkoeCxGKX0pO1xuIiwiLypcbiBIaWdoY2hhcnRzIEpTIHY2LjEuMSAoMjAxOC0wNi0yNylcblxuIChjKSAyMDA5LTIwMTcgVG9yc3RlaW4gSG9uc2lcblxuIExpY2Vuc2U6IHd3dy5oaWdoY2hhcnRzLmNvbS9saWNlbnNlXG4qL1xuKGZ1bmN0aW9uKG4pe1wib2JqZWN0XCI9PT10eXBlb2YgbW9kdWxlJiZtb2R1bGUuZXhwb3J0cz9tb2R1bGUuZXhwb3J0cz1uOm4oSGlnaGNoYXJ0cyl9KShmdW5jdGlvbihuKXsoZnVuY3Rpb24oYil7dmFyIHU9Yi5hZGRFdmVudCxnPWIuQXhpcyxuPWIuQ2hhcnQsbT1iLmNvbG9yLHEsaD1iLmVhY2gsdD1iLmV4dGVuZCxyPWIuaXNOdW1iZXIsZT1iLkxlZ2VuZCxjPWIuTGVnZW5kU3ltYm9sTWl4aW4seD1iLm5vb3Asdz1iLm1lcmdlLHA9Yi5waWNrO2IuQ29sb3JBeGlzfHwocT1iLkNvbG9yQXhpcz1mdW5jdGlvbigpe3RoaXMuaW5pdC5hcHBseSh0aGlzLGFyZ3VtZW50cyl9LHQocS5wcm90b3R5cGUsZy5wcm90b3R5cGUpLHQocS5wcm90b3R5cGUse2RlZmF1bHRDb2xvckF4aXNPcHRpb25zOntsaW5lV2lkdGg6MCxtaW5QYWRkaW5nOjAsbWF4UGFkZGluZzowLGdyaWRMaW5lV2lkdGg6MSx0aWNrUGl4ZWxJbnRlcnZhbDo3MixzdGFydE9uVGljazohMCxlbmRPblRpY2s6ITAsb2Zmc2V0OjAsXG5tYXJrZXI6e2FuaW1hdGlvbjp7ZHVyYXRpb246NTB9LHdpZHRoOi4wMSxjb2xvcjpcIiM5OTk5OTlcIn0sbGFiZWxzOntvdmVyZmxvdzpcImp1c3RpZnlcIixyb3RhdGlvbjowfSxtaW5Db2xvcjpcIiNlNmViZjVcIixtYXhDb2xvcjpcIiMwMDMzOTlcIix0aWNrTGVuZ3RoOjUsc2hvd0luTGVnZW5kOiEwfSxrZWVwUHJvcHM6W1wibGVnZW5kR3JvdXBcIixcImxlZ2VuZEl0ZW1IZWlnaHRcIixcImxlZ2VuZEl0ZW1XaWR0aFwiLFwibGVnZW5kSXRlbVwiLFwibGVnZW5kU3ltYm9sXCJdLmNvbmNhdChnLnByb3RvdHlwZS5rZWVwUHJvcHMpLGluaXQ6ZnVuY3Rpb24oYSxkKXt2YXIgZj1cInZlcnRpY2FsXCIhPT1hLm9wdGlvbnMubGVnZW5kLmxheW91dCxsO3RoaXMuY29sbD1cImNvbG9yQXhpc1wiO2w9dyh0aGlzLmRlZmF1bHRDb2xvckF4aXNPcHRpb25zLHtzaWRlOmY/MjoxLHJldmVyc2VkOiFmfSxkLHtvcHBvc2l0ZTohZixzaG93RW1wdHk6ITEsdGl0bGU6bnVsbCx2aXNpYmxlOmEub3B0aW9ucy5sZWdlbmQuZW5hYmxlZH0pO1xuZy5wcm90b3R5cGUuaW5pdC5jYWxsKHRoaXMsYSxsKTtkLmRhdGFDbGFzc2VzJiZ0aGlzLmluaXREYXRhQ2xhc3NlcyhkKTt0aGlzLmluaXRTdG9wcygpO3RoaXMuaG9yaXo9Zjt0aGlzLnpvb21FbmFibGVkPSExO3RoaXMuZGVmYXVsdExlZ2VuZExlbmd0aD0yMDB9LGluaXREYXRhQ2xhc3NlczpmdW5jdGlvbihhKXt2YXIgZD10aGlzLmNoYXJ0LGYsbD0wLGs9ZC5vcHRpb25zLmNoYXJ0LmNvbG9yQ291bnQsYj10aGlzLm9wdGlvbnMsZT1hLmRhdGFDbGFzc2VzLmxlbmd0aDt0aGlzLmRhdGFDbGFzc2VzPWY9W107dGhpcy5sZWdlbmRJdGVtcz1bXTtoKGEuZGF0YUNsYXNzZXMsZnVuY3Rpb24oYSxjKXthPXcoYSk7Zi5wdXNoKGEpO2EuY29sb3J8fChcImNhdGVnb3J5XCI9PT1iLmRhdGFDbGFzc0NvbG9yPyhjPWQub3B0aW9ucy5jb2xvcnMsaz1jLmxlbmd0aCxhLmNvbG9yPWNbbF0sYS5jb2xvckluZGV4PWwsbCsrLGw9PT1rJiYobD0wKSk6YS5jb2xvcj1tKGIubWluQ29sb3IpLnR3ZWVuVG8obShiLm1heENvbG9yKSxcbjI+ZT8uNTpjLyhlLTEpKSl9KX0sc2V0VGlja1Bvc2l0aW9uczpmdW5jdGlvbigpe2lmKCF0aGlzLmRhdGFDbGFzc2VzKXJldHVybiBnLnByb3RvdHlwZS5zZXRUaWNrUG9zaXRpb25zLmNhbGwodGhpcyl9LGluaXRTdG9wczpmdW5jdGlvbigpe3RoaXMuc3RvcHM9dGhpcy5vcHRpb25zLnN0b3BzfHxbWzAsdGhpcy5vcHRpb25zLm1pbkNvbG9yXSxbMSx0aGlzLm9wdGlvbnMubWF4Q29sb3JdXTtoKHRoaXMuc3RvcHMsZnVuY3Rpb24oYSl7YS5jb2xvcj1tKGFbMV0pfSl9LHNldE9wdGlvbnM6ZnVuY3Rpb24oYSl7Zy5wcm90b3R5cGUuc2V0T3B0aW9ucy5jYWxsKHRoaXMsYSk7dGhpcy5vcHRpb25zLmNyb3NzaGFpcj10aGlzLm9wdGlvbnMubWFya2VyfSxzZXRBeGlzU2l6ZTpmdW5jdGlvbigpe3ZhciBhPXRoaXMubGVnZW5kU3ltYm9sLGQ9dGhpcy5jaGFydCxmPWQub3B0aW9ucy5sZWdlbmR8fHt9LGwsazthPyh0aGlzLmxlZnQ9Zj1hLmF0dHIoXCJ4XCIpLHRoaXMudG9wPWw9YS5hdHRyKFwieVwiKSxcbnRoaXMud2lkdGg9az1hLmF0dHIoXCJ3aWR0aFwiKSx0aGlzLmhlaWdodD1hPWEuYXR0cihcImhlaWdodFwiKSx0aGlzLnJpZ2h0PWQuY2hhcnRXaWR0aC1mLWssdGhpcy5ib3R0b209ZC5jaGFydEhlaWdodC1sLWEsdGhpcy5sZW49dGhpcy5ob3Jpej9rOmEsdGhpcy5wb3M9dGhpcy5ob3Jpej9mOmwpOnRoaXMubGVuPSh0aGlzLmhvcml6P2Yuc3ltYm9sV2lkdGg6Zi5zeW1ib2xIZWlnaHQpfHx0aGlzLmRlZmF1bHRMZWdlbmRMZW5ndGh9LG5vcm1hbGl6ZWRWYWx1ZTpmdW5jdGlvbihhKXt0aGlzLmlzTG9nJiYoYT10aGlzLnZhbDJsaW4oYSkpO3JldHVybiAxLSh0aGlzLm1heC1hKS8odGhpcy5tYXgtdGhpcy5taW58fDEpfSx0b0NvbG9yOmZ1bmN0aW9uKGEsZCl7dmFyIGY9dGhpcy5zdG9wcyxsLGssYj10aGlzLmRhdGFDbGFzc2VzLGUsYztpZihiKWZvcihjPWIubGVuZ3RoO2MtLTspe2lmKGU9YltjXSxsPWUuZnJvbSxmPWUudG8sKHZvaWQgMD09PWx8fGE+PWwpJiYodm9pZCAwPT09Znx8XG5hPD1mKSl7az1lLmNvbG9yO2QmJihkLmRhdGFDbGFzcz1jLGQuY29sb3JJbmRleD1lLmNvbG9ySW5kZXgpO2JyZWFrfX1lbHNle2E9dGhpcy5ub3JtYWxpemVkVmFsdWUoYSk7Zm9yKGM9Zi5sZW5ndGg7Yy0tJiYhKGE+ZltjXVswXSk7KTtsPWZbY118fGZbYysxXTtmPWZbYysxXXx8bDthPTEtKGZbMF0tYSkvKGZbMF0tbFswXXx8MSk7az1sLmNvbG9yLnR3ZWVuVG8oZi5jb2xvcixhKX1yZXR1cm4ga30sZ2V0T2Zmc2V0OmZ1bmN0aW9uKCl7dmFyIGE9dGhpcy5sZWdlbmRHcm91cCxkPXRoaXMuY2hhcnQuYXhpc09mZnNldFt0aGlzLnNpZGVdO2EmJih0aGlzLmF4aXNQYXJlbnQ9YSxnLnByb3RvdHlwZS5nZXRPZmZzZXQuY2FsbCh0aGlzKSx0aGlzLmFkZGVkfHwodGhpcy5hZGRlZD0hMCx0aGlzLmxhYmVsTGVmdD0wLHRoaXMubGFiZWxSaWdodD10aGlzLndpZHRoKSx0aGlzLmNoYXJ0LmF4aXNPZmZzZXRbdGhpcy5zaWRlXT1kKX0sc2V0TGVnZW5kQ29sb3I6ZnVuY3Rpb24oKXt2YXIgYSxcbmQ9dGhpcy5yZXZlcnNlZDthPWQ/MTowO2Q9ZD8wOjE7YT10aGlzLmhvcml6P1thLDAsZCwwXTpbMCxkLDAsYV07dGhpcy5sZWdlbmRDb2xvcj17bGluZWFyR3JhZGllbnQ6e3gxOmFbMF0seTE6YVsxXSx4MjphWzJdLHkyOmFbM119LHN0b3BzOnRoaXMuc3RvcHN9fSxkcmF3TGVnZW5kU3ltYm9sOmZ1bmN0aW9uKGEsZCl7dmFyIGY9YS5wYWRkaW5nLGI9YS5vcHRpb25zLGs9dGhpcy5ob3JpeixjPXAoYi5zeW1ib2xXaWR0aCxrP3RoaXMuZGVmYXVsdExlZ2VuZExlbmd0aDoxMiksZT1wKGIuc3ltYm9sSGVpZ2h0LGs/MTI6dGhpcy5kZWZhdWx0TGVnZW5kTGVuZ3RoKSxoPXAoYi5sYWJlbFBhZGRpbmcsaz8xNjozMCksYj1wKGIuaXRlbURpc3RhbmNlLDEwKTt0aGlzLnNldExlZ2VuZENvbG9yKCk7ZC5sZWdlbmRTeW1ib2w9dGhpcy5jaGFydC5yZW5kZXJlci5yZWN0KDAsYS5iYXNlbGluZS0xMSxjLGUpLmF0dHIoe3pJbmRleDoxfSkuYWRkKGQubGVnZW5kR3JvdXApO3RoaXMubGVnZW5kSXRlbVdpZHRoPVxuYytmKyhrP2I6aCk7dGhpcy5sZWdlbmRJdGVtSGVpZ2h0PWUrZisoaz9oOjApfSxzZXRTdGF0ZTpmdW5jdGlvbihhKXtoKHRoaXMuc2VyaWVzLGZ1bmN0aW9uKGQpe2Quc2V0U3RhdGUoYSl9KX0sdmlzaWJsZTohMCxzZXRWaXNpYmxlOngsZ2V0U2VyaWVzRXh0cmVtZXM6ZnVuY3Rpb24oKXt2YXIgYT10aGlzLnNlcmllcyxkPWEubGVuZ3RoO3RoaXMuZGF0YU1pbj1JbmZpbml0eTtmb3IodGhpcy5kYXRhTWF4PS1JbmZpbml0eTtkLS07KWFbZF0uZ2V0RXh0cmVtZXMoKSx2b2lkIDAhPT1hW2RdLnZhbHVlTWluJiYodGhpcy5kYXRhTWluPU1hdGgubWluKHRoaXMuZGF0YU1pbixhW2RdLnZhbHVlTWluKSx0aGlzLmRhdGFNYXg9TWF0aC5tYXgodGhpcy5kYXRhTWF4LGFbZF0udmFsdWVNYXgpKX0sZHJhd0Nyb3NzaGFpcjpmdW5jdGlvbihhLGQpe3ZhciBmPWQmJmQucGxvdFgsYj1kJiZkLnBsb3RZLGMsZT10aGlzLnBvcyxoPXRoaXMubGVuO2QmJihjPXRoaXMudG9QaXhlbHMoZFtkLnNlcmllcy5jb2xvcktleV0pLFxuYzxlP2M9ZS0yOmM+ZStoJiYoYz1lK2grMiksZC5wbG90WD1jLGQucGxvdFk9dGhpcy5sZW4tYyxnLnByb3RvdHlwZS5kcmF3Q3Jvc3NoYWlyLmNhbGwodGhpcyxhLGQpLGQucGxvdFg9ZixkLnBsb3RZPWIsdGhpcy5jcm9zcyYmIXRoaXMuY3Jvc3MuYWRkZWRUb0NvbG9yQXhpcyYmdGhpcy5sZWdlbmRHcm91cCYmKHRoaXMuY3Jvc3MuYWRkQ2xhc3MoXCJoaWdoY2hhcnRzLWNvbG9yYXhpcy1tYXJrZXJcIikuYWRkKHRoaXMubGVnZW5kR3JvdXApLHRoaXMuY3Jvc3MuYWRkZWRUb0NvbG9yQXhpcz0hMCx0aGlzLmNyb3NzLmF0dHIoe2ZpbGw6dGhpcy5jcm9zc2hhaXIuY29sb3J9KSkpfSxnZXRQbG90TGluZVBhdGg6ZnVuY3Rpb24oYSxkLGYsYixjKXtyZXR1cm4gcihjKT90aGlzLmhvcml6P1tcIk1cIixjLTQsdGhpcy50b3AtNixcIkxcIixjKzQsdGhpcy50b3AtNixjLHRoaXMudG9wLFwiWlwiXTpbXCJNXCIsdGhpcy5sZWZ0LGMsXCJMXCIsdGhpcy5sZWZ0LTYsYys2LHRoaXMubGVmdC02LGMtNixcIlpcIl06XG5nLnByb3RvdHlwZS5nZXRQbG90TGluZVBhdGguY2FsbCh0aGlzLGEsZCxmLGIpfSx1cGRhdGU6ZnVuY3Rpb24oYSxkKXt2YXIgYz10aGlzLmNoYXJ0LGI9Yy5sZWdlbmQ7aCh0aGlzLnNlcmllcyxmdW5jdGlvbihhKXthLmlzRGlydHlEYXRhPSEwfSk7YS5kYXRhQ2xhc3NlcyYmYi5hbGxJdGVtcyYmKGgoYi5hbGxJdGVtcyxmdW5jdGlvbihhKXthLmlzRGF0YUNsYXNzJiZhLmxlZ2VuZEdyb3VwJiZhLmxlZ2VuZEdyb3VwLmRlc3Ryb3koKX0pLGMuaXNEaXJ0eUxlZ2VuZD0hMCk7Yy5vcHRpb25zW3RoaXMuY29sbF09dyh0aGlzLnVzZXJPcHRpb25zLGEpO2cucHJvdG90eXBlLnVwZGF0ZS5jYWxsKHRoaXMsYSxkKTt0aGlzLmxlZ2VuZEl0ZW0mJih0aGlzLnNldExlZ2VuZENvbG9yKCksYi5jb2xvcml6ZUl0ZW0odGhpcywhMCkpfSxyZW1vdmU6ZnVuY3Rpb24oKXt0aGlzLmxlZ2VuZEl0ZW0mJnRoaXMuY2hhcnQubGVnZW5kLmRlc3Ryb3lJdGVtKHRoaXMpO2cucHJvdG90eXBlLnJlbW92ZS5jYWxsKHRoaXMpfSxcbmdldERhdGFDbGFzc0xlZ2VuZFN5bWJvbHM6ZnVuY3Rpb24oKXt2YXIgYT10aGlzLGQ9dGhpcy5jaGFydCxmPXRoaXMubGVnZW5kSXRlbXMsZT1kLm9wdGlvbnMubGVnZW5kLGs9ZS52YWx1ZURlY2ltYWxzLHE9ZS52YWx1ZVN1ZmZpeHx8XCJcIixnO2YubGVuZ3RofHxoKHRoaXMuZGF0YUNsYXNzZXMsZnVuY3Rpb24oZSxsKXt2YXIgbT0hMCxyPWUuZnJvbSxwPWUudG87Zz1cIlwiO3ZvaWQgMD09PXI/Zz1cIlxceDNjIFwiOnZvaWQgMD09PXAmJihnPVwiXFx4M2UgXCIpO3ZvaWQgMCE9PXImJihnKz1iLm51bWJlckZvcm1hdChyLGspK3EpO3ZvaWQgMCE9PXImJnZvaWQgMCE9PXAmJihnKz1cIiAtIFwiKTt2b2lkIDAhPT1wJiYoZys9Yi5udW1iZXJGb3JtYXQocCxrKStxKTtmLnB1c2godCh7Y2hhcnQ6ZCxuYW1lOmcsb3B0aW9uczp7fSxkcmF3TGVnZW5kU3ltYm9sOmMuZHJhd1JlY3RhbmdsZSx2aXNpYmxlOiEwLHNldFN0YXRlOngsaXNEYXRhQ2xhc3M6ITAsc2V0VmlzaWJsZTpmdW5jdGlvbigpe209dGhpcy52aXNpYmxlPVxuIW07aChhLnNlcmllcyxmdW5jdGlvbihhKXtoKGEucG9pbnRzLGZ1bmN0aW9uKGEpe2EuZGF0YUNsYXNzPT09bCYmYS5zZXRWaXNpYmxlKG0pfSl9KTtkLmxlZ2VuZC5jb2xvcml6ZUl0ZW0odGhpcyxtKX19LGUpKX0pO3JldHVybiBmfSxuYW1lOlwiXCJ9KSxoKFtcImZpbGxcIixcInN0cm9rZVwiXSxmdW5jdGlvbihhKXtiLkZ4LnByb3RvdHlwZVthK1wiU2V0dGVyXCJdPWZ1bmN0aW9uKCl7dGhpcy5lbGVtLmF0dHIoYSxtKHRoaXMuc3RhcnQpLnR3ZWVuVG8obSh0aGlzLmVuZCksdGhpcy5wb3MpLG51bGwsITApfX0pLHUobixcImFmdGVyR2V0QXhlc1wiLGZ1bmN0aW9uKCl7dmFyIGE9dGhpcy5vcHRpb25zLmNvbG9yQXhpczt0aGlzLmNvbG9yQXhpcz1bXTthJiZuZXcgcSh0aGlzLGEpfSksdShlLFwiYWZ0ZXJHZXRBbGxJdGVtc1wiLGZ1bmN0aW9uKGEpe3ZhciBkPVtdLGM9dGhpcy5jaGFydC5jb2xvckF4aXNbMF07YyYmYy5vcHRpb25zJiZjLm9wdGlvbnMuc2hvd0luTGVnZW5kJiYoYy5vcHRpb25zLmRhdGFDbGFzc2VzP1xuZD1jLmdldERhdGFDbGFzc0xlZ2VuZFN5bWJvbHMoKTpkLnB1c2goYyksaChjLnNlcmllcyxmdW5jdGlvbihjKXtiLmVyYXNlKGEuYWxsSXRlbXMsYyl9KSk7Zm9yKGM9ZC5sZW5ndGg7Yy0tOylhLmFsbEl0ZW1zLnVuc2hpZnQoZFtjXSl9KSx1KGUsXCJhZnRlckNvbG9yaXplSXRlbVwiLGZ1bmN0aW9uKGEpe2EudmlzaWJsZSYmYS5pdGVtLmxlZ2VuZENvbG9yJiZhLml0ZW0ubGVnZW5kU3ltYm9sLmF0dHIoe2ZpbGw6YS5pdGVtLmxlZ2VuZENvbG9yfSl9KSx1KGUsXCJhZnRlclVwZGF0ZVwiLGZ1bmN0aW9uKGEsYyxiKXt0aGlzLmNoYXJ0LmNvbG9yQXhpc1swXSYmdGhpcy5jaGFydC5jb2xvckF4aXNbMF0udXBkYXRlKHt9LGIpfSkpfSkobik7KGZ1bmN0aW9uKGIpe3ZhciBuPWIuZGVmaW5lZCxnPWIuZWFjaCx2PWIubm9vcCxtPWIuc2VyaWVzVHlwZXM7Yi5jb2xvclBvaW50TWl4aW49e2lzVmFsaWQ6ZnVuY3Rpb24oKXtyZXR1cm4gbnVsbCE9PXRoaXMudmFsdWUmJkluZmluaXR5IT09dGhpcy52YWx1ZSYmXG4tSW5maW5pdHkhPT10aGlzLnZhbHVlfSxzZXRWaXNpYmxlOmZ1bmN0aW9uKGIpe3ZhciBoPXRoaXMscT1iP1wic2hvd1wiOlwiaGlkZVwiO2coW1wiZ3JhcGhpY1wiLFwiZGF0YUxhYmVsXCJdLGZ1bmN0aW9uKGIpe2lmKGhbYl0paFtiXVtxXSgpfSl9LHNldFN0YXRlOmZ1bmN0aW9uKGcpe2IuUG9pbnQucHJvdG90eXBlLnNldFN0YXRlLmNhbGwodGhpcyxnKTt0aGlzLmdyYXBoaWMmJnRoaXMuZ3JhcGhpYy5hdHRyKHt6SW5kZXg6XCJob3ZlclwiPT09Zz8xOjB9KX19O2IuY29sb3JTZXJpZXNNaXhpbj17cG9pbnRBcnJheU1hcDpbXCJ2YWx1ZVwiXSxheGlzVHlwZXM6W1wieEF4aXNcIixcInlBeGlzXCIsXCJjb2xvckF4aXNcIl0sb3B0aW9uYWxBeGlzOlwiY29sb3JBeGlzXCIsdHJhY2tlckdyb3VwczpbXCJncm91cFwiLFwibWFya2VyR3JvdXBcIixcImRhdGFMYWJlbHNHcm91cFwiXSxnZXRTeW1ib2w6dixwYXJhbGxlbEFycmF5czpbXCJ4XCIsXCJ5XCIsXCJ2YWx1ZVwiXSxjb2xvcktleTpcInZhbHVlXCIscG9pbnRBdHRyaWJzOm0uY29sdW1uLnByb3RvdHlwZS5wb2ludEF0dHJpYnMsXG50cmFuc2xhdGVDb2xvcnM6ZnVuY3Rpb24oKXt2YXIgYj10aGlzLGg9dGhpcy5vcHRpb25zLm51bGxDb2xvcixtPXRoaXMuY29sb3JBeGlzLHI9dGhpcy5jb2xvcktleTtnKHRoaXMuZGF0YSxmdW5jdGlvbihlKXt2YXIgYz1lW3JdO2lmKGM9ZS5vcHRpb25zLmNvbG9yfHwoZS5pc051bGw/aDptJiZ2b2lkIDAhPT1jP20udG9Db2xvcihjLGUpOmUuY29sb3J8fGIuY29sb3IpKWUuY29sb3I9Y30pfSxjb2xvckF0dHJpYnM6ZnVuY3Rpb24oYil7dmFyIGc9e307bihiLmNvbG9yKSYmKGdbdGhpcy5jb2xvclByb3B8fFwiZmlsbFwiXT1iLmNvbG9yKTtyZXR1cm4gZ319fSkobik7KGZ1bmN0aW9uKGIpe3ZhciBuPWIuY29sb3JQb2ludE1peGluLGc9Yi5lYWNoLHY9Yi5tZXJnZSxtPWIubm9vcCxxPWIucGljayxoPWIuU2VyaWVzLHQ9Yi5zZXJpZXNUeXBlLHI9Yi5zZXJpZXNUeXBlczt0KFwiaGVhdG1hcFwiLFwic2NhdHRlclwiLHthbmltYXRpb246ITEsYm9yZGVyV2lkdGg6MCxudWxsQ29sb3I6XCIjZjdmN2Y3XCIsXG5kYXRhTGFiZWxzOntmb3JtYXR0ZXI6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5wb2ludC52YWx1ZX0saW5zaWRlOiEwLHZlcnRpY2FsQWxpZ246XCJtaWRkbGVcIixjcm9wOiExLG92ZXJmbG93OiExLHBhZGRpbmc6MH0sbWFya2VyOm51bGwscG9pbnRSYW5nZTpudWxsLHRvb2x0aXA6e3BvaW50Rm9ybWF0Olwie3BvaW50Lnh9LCB7cG9pbnQueX06IHtwb2ludC52YWx1ZX1cXHgzY2JyL1xceDNlXCJ9LHN0YXRlczp7aG92ZXI6e2hhbG86ITEsYnJpZ2h0bmVzczouMn19fSx2KGIuY29sb3JTZXJpZXNNaXhpbix7cG9pbnRBcnJheU1hcDpbXCJ5XCIsXCJ2YWx1ZVwiXSxoYXNQb2ludFNwZWNpZmljT3B0aW9uczohMCxnZXRFeHRyZW1lc0Zyb21BbGw6ITAsZGlyZWN0VG91Y2g6ITAsaW5pdDpmdW5jdGlvbigpe3ZhciBiO3Iuc2NhdHRlci5wcm90b3R5cGUuaW5pdC5hcHBseSh0aGlzLGFyZ3VtZW50cyk7Yj10aGlzLm9wdGlvbnM7Yi5wb2ludFJhbmdlPXEoYi5wb2ludFJhbmdlLGIuY29sc2l6ZXx8MSk7XG50aGlzLnlBeGlzLmF4aXNQb2ludFJhbmdlPWIucm93c2l6ZXx8MX0sdHJhbnNsYXRlOmZ1bmN0aW9uKCl7dmFyIGI9dGhpcy5vcHRpb25zLGM9dGhpcy54QXhpcyxoPXRoaXMueUF4aXMsbT1iLnBvaW50UGFkZGluZ3x8MCxwPWZ1bmN0aW9uKGEsYixjKXtyZXR1cm4gTWF0aC5taW4oTWF0aC5tYXgoYixhKSxjKX07dGhpcy5nZW5lcmF0ZVBvaW50cygpO2codGhpcy5wb2ludHMsZnVuY3Rpb24oYSl7dmFyIGQ9KGIuY29sc2l6ZXx8MSkvMixlPShiLnJvd3NpemV8fDEpLzIsZz1wKE1hdGgucm91bmQoYy5sZW4tYy50cmFuc2xhdGUoYS54LWQsMCwxLDAsMSkpLC1jLmxlbiwyKmMubGVuKSxkPXAoTWF0aC5yb3VuZChjLmxlbi1jLnRyYW5zbGF0ZShhLngrZCwwLDEsMCwxKSksLWMubGVuLDIqYy5sZW4pLGs9cChNYXRoLnJvdW5kKGgudHJhbnNsYXRlKGEueS1lLDAsMSwwLDEpKSwtaC5sZW4sMipoLmxlbiksZT1wKE1hdGgucm91bmQoaC50cmFuc2xhdGUoYS55K2UsMCwxLDAsMSkpLC1oLmxlbixcbjIqaC5sZW4pLG49cShhLnBvaW50UGFkZGluZyxtKTthLnBsb3RYPWEuY2xpZW50WD0oZytkKS8yO2EucGxvdFk9KGsrZSkvMjthLnNoYXBlVHlwZT1cInJlY3RcIjthLnNoYXBlQXJncz17eDpNYXRoLm1pbihnLGQpK24seTpNYXRoLm1pbihrLGUpK24sd2lkdGg6TWF0aC5hYnMoZC1nKS0yKm4saGVpZ2h0Ok1hdGguYWJzKGUtayktMipufX0pO3RoaXMudHJhbnNsYXRlQ29sb3JzKCl9LGRyYXdQb2ludHM6ZnVuY3Rpb24oKXtyLmNvbHVtbi5wcm90b3R5cGUuZHJhd1BvaW50cy5jYWxsKHRoaXMpO2codGhpcy5wb2ludHMsZnVuY3Rpb24oYil7Yi5ncmFwaGljLmF0dHIodGhpcy5jb2xvckF0dHJpYnMoYikpfSx0aGlzKX0sYW5pbWF0ZTptLGdldEJveDptLGRyYXdMZWdlbmRTeW1ib2w6Yi5MZWdlbmRTeW1ib2xNaXhpbi5kcmF3UmVjdGFuZ2xlLGFsaWduRGF0YUxhYmVsOnIuY29sdW1uLnByb3RvdHlwZS5hbGlnbkRhdGFMYWJlbCxnZXRFeHRyZW1lczpmdW5jdGlvbigpe2gucHJvdG90eXBlLmdldEV4dHJlbWVzLmNhbGwodGhpcyxcbnRoaXMudmFsdWVEYXRhKTt0aGlzLnZhbHVlTWluPXRoaXMuZGF0YU1pbjt0aGlzLnZhbHVlTWF4PXRoaXMuZGF0YU1heDtoLnByb3RvdHlwZS5nZXRFeHRyZW1lcy5jYWxsKHRoaXMpfX0pLGIuZXh0ZW5kKHtoYWxvUGF0aDpmdW5jdGlvbihiKXtpZighYilyZXR1cm5bXTt2YXIgYz10aGlzLnNoYXBlQXJncztyZXR1cm5bXCJNXCIsYy54LWIsYy55LWIsXCJMXCIsYy54LWIsYy55K2MuaGVpZ2h0K2IsYy54K2Mud2lkdGgrYixjLnkrYy5oZWlnaHQrYixjLngrYy53aWR0aCtiLGMueS1iLFwiWlwiXX19LG4pKX0pKG4pfSk7XG4iXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDbEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7QUN0REE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7OztBQzlCQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7O0FDbkJBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7QUN2QkE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7QUNoQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7O0FDeENBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7QUN0QkE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7O0FDckJBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDcEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDbENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0EiLCJzb3VyY2VSb290IjoiIn0=