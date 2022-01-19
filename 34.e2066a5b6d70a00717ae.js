(this["webpackChunkRuDEX3_light"] = this["webpackChunkRuDEX3_light"] || []).push([[34],{

/***/ 2862:
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_RESULT__;/*
 Highcharts JS v6.2.0 (2018-10-17)

 (c) 2009-2018 Torstein Honsi

 License: www.highcharts.com/license
*/
(function(k){ true&&module.exports?module.exports=k: true?!(__WEBPACK_AMD_DEFINE_RESULT__ = (function(){return k}).call(exports, __webpack_require__, exports, module),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)):0})(function(k){(function(b){var t=b.addEvent,h=b.Axis,k=b.Chart,m=b.color,q,g=b.each,r=b.extend,p=b.isNumber,e=b.Legend,c=b.LegendSymbolMixin,x=b.noop,w=b.merge,u=b.pick;b.ColorAxis||(q=b.ColorAxis=function(){this.init.apply(this,arguments)},r(q.prototype,h.prototype),r(q.prototype,{defaultColorAxisOptions:{lineWidth:0,minPadding:0,maxPadding:0,gridLineWidth:1,
tickPixelInterval:72,startOnTick:!0,endOnTick:!0,offset:0,marker:{animation:{duration:50},width:.01,color:"#999999"},labels:{overflow:"justify",rotation:0},minColor:"#e6ebf5",maxColor:"#003399",tickLength:5,showInLegend:!0},keepProps:["legendGroup","legendItemHeight","legendItemWidth","legendItem","legendSymbol"].concat(h.prototype.keepProps),init:function(a,d){var f="vertical"!==a.options.legend.layout,n;this.coll="colorAxis";n=w(this.defaultColorAxisOptions,{side:f?2:1,reversed:!f},d,{opposite:!f,
showEmpty:!1,title:null,visible:a.options.legend.enabled});h.prototype.init.call(this,a,n);d.dataClasses&&this.initDataClasses(d);this.initStops();this.horiz=f;this.zoomEnabled=!1;this.defaultLegendLength=200},initDataClasses:function(a){var d=this.chart,f,n=0,l=d.options.chart.colorCount,b=this.options,e=a.dataClasses.length;this.dataClasses=f=[];this.legendItems=[];g(a.dataClasses,function(a,c){a=w(a);f.push(a);a.color||("category"===b.dataClassColor?(c=d.options.colors,l=c.length,a.color=c[n],
a.colorIndex=n,n++,n===l&&(n=0)):a.color=m(b.minColor).tweenTo(m(b.maxColor),2>e?.5:c/(e-1)))})},setTickPositions:function(){if(!this.dataClasses)return h.prototype.setTickPositions.call(this)},initStops:function(){this.stops=this.options.stops||[[0,this.options.minColor],[1,this.options.maxColor]];g(this.stops,function(a){a.color=m(a[1])})},setOptions:function(a){h.prototype.setOptions.call(this,a);this.options.crosshair=this.options.marker},setAxisSize:function(){var a=this.legendSymbol,d=this.chart,
f=d.options.legend||{},n,l;a?(this.left=f=a.attr("x"),this.top=n=a.attr("y"),this.width=l=a.attr("width"),this.height=a=a.attr("height"),this.right=d.chartWidth-f-l,this.bottom=d.chartHeight-n-a,this.len=this.horiz?l:a,this.pos=this.horiz?f:n):this.len=(this.horiz?f.symbolWidth:f.symbolHeight)||this.defaultLegendLength},normalizedValue:function(a){this.isLog&&(a=this.val2lin(a));return 1-(this.max-a)/(this.max-this.min||1)},toColor:function(a,d){var f=this.stops,n,l,b=this.dataClasses,e,c;if(b)for(c=
b.length;c--;){if(e=b[c],n=e.from,f=e.to,(void 0===n||a>=n)&&(void 0===f||a<=f)){l=e.color;d&&(d.dataClass=c,d.colorIndex=e.colorIndex);break}}else{a=this.normalizedValue(a);for(c=f.length;c--&&!(a>f[c][0]););n=f[c]||f[c+1];f=f[c+1]||n;a=1-(f[0]-a)/(f[0]-n[0]||1);l=n.color.tweenTo(f.color,a)}return l},getOffset:function(){var a=this.legendGroup,d=this.chart.axisOffset[this.side];a&&(this.axisParent=a,h.prototype.getOffset.call(this),this.added||(this.added=!0,this.labelLeft=0,this.labelRight=this.width),
this.chart.axisOffset[this.side]=d)},setLegendColor:function(){var a,d=this.reversed;a=d?1:0;d=d?0:1;a=this.horiz?[a,0,d,0]:[0,d,0,a];this.legendColor={linearGradient:{x1:a[0],y1:a[1],x2:a[2],y2:a[3]},stops:this.stops}},drawLegendSymbol:function(a,d){var f=a.padding,b=a.options,l=this.horiz,c=u(b.symbolWidth,l?this.defaultLegendLength:12),e=u(b.symbolHeight,l?12:this.defaultLegendLength),g=u(b.labelPadding,l?16:30),b=u(b.itemDistance,10);this.setLegendColor();d.legendSymbol=this.chart.renderer.rect(0,
a.baseline-11,c,e).attr({zIndex:1}).add(d.legendGroup);this.legendItemWidth=c+f+(l?b:g);this.legendItemHeight=e+f+(l?g:0)},setState:function(a){g(this.series,function(d){d.setState(a)})},visible:!0,setVisible:x,getSeriesExtremes:function(){var a=this.series,d=a.length;this.dataMin=Infinity;for(this.dataMax=-Infinity;d--;)a[d].getExtremes(),void 0!==a[d].valueMin&&(this.dataMin=Math.min(this.dataMin,a[d].valueMin),this.dataMax=Math.max(this.dataMax,a[d].valueMax))},drawCrosshair:function(a,d){var f=
d&&d.plotX,b=d&&d.plotY,c,e=this.pos,g=this.len;d&&(c=this.toPixels(d[d.series.colorKey]),c<e?c=e-2:c>e+g&&(c=e+g+2),d.plotX=c,d.plotY=this.len-c,h.prototype.drawCrosshair.call(this,a,d),d.plotX=f,d.plotY=b,this.cross&&!this.cross.addedToColorAxis&&this.legendGroup&&(this.cross.addClass("highcharts-coloraxis-marker").add(this.legendGroup),this.cross.addedToColorAxis=!0,this.cross.attr({fill:this.crosshair.color})))},getPlotLinePath:function(a,d,f,b,c){return p(c)?this.horiz?["M",c-4,this.top-6,"L",
c+4,this.top-6,c,this.top,"Z"]:["M",this.left,c,"L",this.left-6,c+6,this.left-6,c-6,"Z"]:h.prototype.getPlotLinePath.call(this,a,d,f,b)},update:function(a,d){var c=this.chart,b=c.legend;g(this.series,function(a){a.isDirtyData=!0});a.dataClasses&&b.allItems&&(g(b.allItems,function(a){a.isDataClass&&a.legendGroup&&a.legendGroup.destroy()}),c.isDirtyLegend=!0);c.options[this.coll]=w(this.userOptions,a);h.prototype.update.call(this,a,d);this.legendItem&&(this.setLegendColor(),b.colorizeItem(this,!0))},
remove:function(){this.legendItem&&this.chart.legend.destroyItem(this);h.prototype.remove.call(this)},getDataClassLegendSymbols:function(){var a=this,d=this.chart,f=this.legendItems,e=d.options.legend,l=e.valueDecimals,q=e.valueSuffix||"",h;f.length||g(this.dataClasses,function(e,n){var m=!0,p=e.from,k=e.to;h="";void 0===p?h="\x3c ":void 0===k&&(h="\x3e ");void 0!==p&&(h+=b.numberFormat(p,l)+q);void 0!==p&&void 0!==k&&(h+=" - ");void 0!==k&&(h+=b.numberFormat(k,l)+q);f.push(r({chart:d,name:h,options:{},
drawLegendSymbol:c.drawRectangle,visible:!0,setState:x,isDataClass:!0,setVisible:function(){m=this.visible=!m;g(a.series,function(a){g(a.points,function(a){a.dataClass===n&&a.setVisible(m)})});d.legend.colorizeItem(this,m)}},e))});return f},name:""}),g(["fill","stroke"],function(a){b.Fx.prototype[a+"Setter"]=function(){this.elem.attr(a,m(this.start).tweenTo(m(this.end),this.pos),null,!0)}}),t(k,"afterGetAxes",function(){var a=this.options.colorAxis;this.colorAxis=[];a&&new q(this,a)}),t(e,"afterGetAllItems",
function(a){var d=[],c=this.chart.colorAxis[0];c&&c.options&&c.options.showInLegend&&(c.options.dataClasses?d=c.getDataClassLegendSymbols():d.push(c),g(c.series,function(c){b.erase(a.allItems,c)}));for(c=d.length;c--;)a.allItems.unshift(d[c])}),t(e,"afterColorizeItem",function(a){a.visible&&a.item.legendColor&&a.item.legendSymbol.attr({fill:a.item.legendColor})}),t(e,"afterUpdate",function(a,c,b){this.chart.colorAxis[0]&&this.chart.colorAxis[0].update({},b)}))})(k);(function(b){var k=b.defined,h=
b.each,v=b.noop,m=b.seriesTypes;b.colorPointMixin={isValid:function(){return null!==this.value&&Infinity!==this.value&&-Infinity!==this.value},setVisible:function(b){var g=this,q=b?"show":"hide";g.visible=!!b;h(["graphic","dataLabel"],function(b){if(g[b])g[b][q]()})},setState:function(h){b.Point.prototype.setState.call(this,h);this.graphic&&this.graphic.attr({zIndex:"hover"===h?1:0})}};b.colorSeriesMixin={pointArrayMap:["value"],axisTypes:["xAxis","yAxis","colorAxis"],optionalAxis:"colorAxis",trackerGroups:["group",
"markerGroup","dataLabelsGroup"],getSymbol:v,parallelArrays:["x","y","value"],colorKey:"value",pointAttribs:m.column.prototype.pointAttribs,translateColors:function(){var b=this,g=this.options.nullColor,k=this.colorAxis,m=this.colorKey;h(this.data,function(e){var c=e[m];if(c=e.options.color||(e.isNull?g:k&&void 0!==c?k.toColor(c,e):e.color||b.color))e.color=c})},colorAttribs:function(b){var g={};k(b.color)&&(g[this.colorProp||"fill"]=b.color);return g}}})(k);(function(b){var k=b.colorPointMixin,h=
b.each,v=b.merge,m=b.noop,q=b.pick,g=b.Series,r=b.seriesType,p=b.seriesTypes;r("heatmap","scatter",{animation:!1,borderWidth:0,nullColor:"#f7f7f7",dataLabels:{formatter:function(){return this.point.value},inside:!0,verticalAlign:"middle",crop:!1,overflow:!1,padding:0},marker:null,pointRange:null,tooltip:{pointFormat:"{point.x}, {point.y}: {point.value}\x3cbr/\x3e"},states:{hover:{halo:!1,brightness:.2}}},v(b.colorSeriesMixin,{pointArrayMap:["y","value"],hasPointSpecificOptions:!0,getExtremesFromAll:!0,
directTouch:!0,init:function(){var b;p.scatter.prototype.init.apply(this,arguments);b=this.options;b.pointRange=q(b.pointRange,b.colsize||1);this.yAxis.axisPointRange=b.rowsize||1},translate:function(){var b=this.options,c=this.xAxis,g=this.yAxis,k=b.pointPadding||0,m=function(a,b,c){return Math.min(Math.max(b,a),c)};this.generatePoints();h(this.points,function(a){var d=(b.colsize||1)/2,e=(b.rowsize||1)/2,h=m(Math.round(c.len-c.translate(a.x-d,0,1,0,1)),-c.len,2*c.len),d=m(Math.round(c.len-c.translate(a.x+
d,0,1,0,1)),-c.len,2*c.len),l=m(Math.round(g.translate(a.y-e,0,1,0,1)),-g.len,2*g.len),e=m(Math.round(g.translate(a.y+e,0,1,0,1)),-g.len,2*g.len),p=q(a.pointPadding,k);a.plotX=a.clientX=(h+d)/2;a.plotY=(l+e)/2;a.shapeType="rect";a.shapeArgs={x:Math.min(h,d)+p,y:Math.min(l,e)+p,width:Math.abs(d-h)-2*p,height:Math.abs(e-l)-2*p}});this.translateColors()},drawPoints:function(){p.column.prototype.drawPoints.call(this);h(this.points,function(b){b.graphic.attr(this.colorAttribs(b))},this)},animate:m,getBox:m,
drawLegendSymbol:b.LegendSymbolMixin.drawRectangle,alignDataLabel:p.column.prototype.alignDataLabel,getExtremes:function(){g.prototype.getExtremes.call(this,this.valueData);this.valueMin=this.dataMin;this.valueMax=this.dataMax;g.prototype.getExtremes.call(this)}}),b.extend({haloPath:function(b){if(!b)return[];var c=this.shapeArgs;return["M",c.x-b,c.y-b,"L",c.x-b,c.y+c.height+b,c.x+c.width+b,c.y+c.height+b,c.x+c.width+b,c.y-b,"Z"]}},k))})(k)});
//# sourceMappingURL=heatmap.js.map


/***/ }),

/***/ 2861:
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_RESULT__;/*
 Highcharts JS v6.2.0 (2018-10-17)

 (c) 2014 Highsoft AS
 Authors: Jon Arild Nygard / Oystein Moseng

 License: www.highcharts.com/license
*/
(function(v){ true&&module.exports?module.exports=v: true?!(__WEBPACK_AMD_DEFINE_RESULT__ = (function(){return v}).call(exports, __webpack_require__, exports, module),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)):0})(function(v){var H=function(b){var v=b.each,B=b.extend,E=b.isArray,t=b.isObject,p=b.isNumber,G=b.merge,z=b.pick,l=b.reduce;return{getColor:function(n,m){var q=m.index,f=m.mapOptionsToLevel,l=m.parentColor,y=m.parentColorIndex,F=m.series,d=m.colors,A=m.siblings,r=F.points,x,t,p,C;if(n){r=r[n.i];n=f[n.level]||{};if(x=r&&n.colorByPoint)p=r.index%(d?
d.length:F.chart.options.chart.colorCount),t=d&&d[p];d=r&&r.options.color;x=n&&n.color;if(f=l)f=(f=n&&n.colorVariation)&&"brightness"===f.key?b.color(l).brighten(q/A*f.to).get():l;x=z(d,x,t,f,F.color);C=z(r&&r.options.colorIndex,n&&n.colorIndex,p,y,m.colorIndex)}return{color:x,colorIndex:C}},getLevelOptions:function(b){var m=null,q,f,n,y;if(t(b))for(m={},n=p(b.from)?b.from:1,y=b.levels,f={},q=t(b.defaults)?b.defaults:{},E(y)&&(f=l(y,function(b,d){var f,m;t(d)&&p(d.level)&&(m=G({},d),f="boolean"===
typeof m.levelIsConstant?m.levelIsConstant:q.levelIsConstant,delete m.levelIsConstant,delete m.level,d=d.level+(f?0:n-1),t(b[d])?B(b[d],m):b[d]=m);return b},{})),y=p(b.to)?b.to:1,b=0;b<=y;b++)m[b]=G({},q,t(f[b])?f[b]:{});return m},setTreeValues:function m(b,f){var l=f.before,q=f.idRoot,t=f.mapIdToNode[q],d=f.points[b.i],p=d&&d.options||{},r=0,x=[];B(b,{levelDynamic:b.level-(("boolean"===typeof f.levelIsConstant?f.levelIsConstant:1)?0:t.level),name:z(d&&d.name,""),visible:q===b.id||("boolean"===typeof f.visible?
f.visible:!1)});"function"===typeof l&&(b=l(b,f));v(b.children,function(d,l){var q=B({},f);B(q,{index:l,siblings:b.children.length,visible:b.visible});d=m(d,q);x.push(d);d.visible&&(r+=d.val)});b.visible=0<r||b.visible;l=z(p.value,r);B(b,{children:x,childrenTotal:r,isLeaf:b.visible&&!r,val:l});return b},updateRootId:function(b){var l;t(b)&&(l=t(b.options)?b.options:{},l=z(b.rootNode,l.rootId,""),t(b.userOptions)&&(b.userOptions.rootId=l),b.rootNode=l);return l}}}(v);(function(b,v){var B=b.seriesType,
E=b.seriesTypes,t=b.map,p=b.merge,G=b.extend,z=b.noop,l=b.each,n=v.getColor,m=v.getLevelOptions,q=b.grep,f=b.isArray,H=b.isNumber,y=b.isObject,F=b.isString,d=b.pick,A=b.Series,r=b.stableSort,x=b.Color,J=function(a,c,e){e=e||this;b.objectEach(a,function(b,g){c.call(e,b,g,a)})},I=b.reduce,C=function(a,c,e){e=e||this;a=c.call(e,a);!1!==a&&C(a,c,e)},K=v.updateRootId;B("treemap","scatter",{showInLegend:!1,marker:!1,colorByPoint:!1,dataLabels:{enabled:!0,defer:!1,verticalAlign:"middle",formatter:function(){return this.point.name||
this.point.id},inside:!0},tooltip:{headerFormat:"",pointFormat:"\x3cb\x3e{point.name}\x3c/b\x3e: {point.value}\x3cbr/\x3e"},ignoreHiddenPoint:!0,layoutAlgorithm:"sliceAndDice",layoutStartingDirection:"vertical",alternateStartingDirection:!1,levelIsConstant:!0,drillUpButton:{position:{align:"right",x:-10,y:10}},borderColor:"#e6e6e6",borderWidth:1,opacity:.15,states:{hover:{borderColor:"#999999",brightness:E.heatmap?0:.1,halo:!1,opacity:.75,shadow:!1}}},{pointArrayMap:["value"],directTouch:!0,optionalAxis:"colorAxis",
getSymbol:z,parallelArrays:["x","y","value","colorValue"],colorKey:"colorValue",trackerGroups:["group","dataLabelsGroup"],getListOfParents:function(a,c){a=f(a)?a:[];var e=f(c)?c:[];c=I(a,function(a,c,e){c=d(c.parent,"");void 0===a[c]&&(a[c]=[]);a[c].push(e);return a},{"":[]});J(c,function(a,c,h){""!==c&&-1===b.inArray(c,e)&&(l(a,function(a){h[""].push(a)}),delete h[c])});return c},getTree:function(){var a=t(this.data,function(a){return a.id}),a=this.getListOfParents(this.data,a);this.nodeMap=[];return this.buildNode("",
-1,0,a,null)},init:function(a,c){var e=b.colorSeriesMixin;b.colorSeriesMixin&&(this.translateColors=e.translateColors,this.colorAttribs=e.colorAttribs,this.axisTypes=e.axisTypes);A.prototype.init.call(this,a,c);this.options.allowDrillToNode&&b.addEvent(this,"click",this.onClickDrillToNode)},buildNode:function(a,c,e,b,g){var h=this,w=[],k=h.points[c],d=0,f;l(b[a]||[],function(c){f=h.buildNode(h.points[c].id,c,e+1,b,a);d=Math.max(f.height+1,d);w.push(f)});c={id:a,i:c,children:w,height:d,level:e,parent:g,
visible:!1};h.nodeMap[c.id]=c;k&&(k.node=c);return c},setTreeValues:function(a){var c=this,e=c.options,b=c.nodeMap[c.rootNode],e="boolean"===typeof e.levelIsConstant?e.levelIsConstant:!0,g=0,h=[],D,k=c.points[a.i];l(a.children,function(a){a=c.setTreeValues(a);h.push(a);a.ignore||(g+=a.val)});r(h,function(a,c){return a.sortIndex-c.sortIndex});D=d(k&&k.options.value,g);k&&(k.value=D);G(a,{children:h,childrenTotal:g,ignore:!(d(k&&k.visible,!0)&&0<D),isLeaf:a.visible&&!g,levelDynamic:a.level-(e?0:b.level),
name:d(k&&k.name,""),sortIndex:d(k&&k.sortIndex,-D),val:D});return a},calculateChildrenAreas:function(a,c){var e=this,b=e.options,g=e.mapOptionsToLevel[a.level+1],h=d(e[g&&g.layoutAlgorithm]&&g.layoutAlgorithm,b.layoutAlgorithm),D=b.alternateStartingDirection,k=[];a=q(a.children,function(a){return!a.ignore});g&&g.layoutStartingDirection&&(c.direction="vertical"===g.layoutStartingDirection?0:1);k=e[h](c,a);l(a,function(a,b){b=k[b];a.values=p(b,{val:a.childrenTotal,direction:D?1-c.direction:c.direction});
a.pointValues=p(b,{x:b.x/e.axisRatio,width:b.width/e.axisRatio});a.children.length&&e.calculateChildrenAreas(a,a.values)})},setPointValues:function(){var a=this,c=a.xAxis,e=a.yAxis;l(a.points,function(b){var g=b.node,h=g.pointValues,w,k,d;d=(a.pointAttribs(b)["stroke-width"]||0)%2/2;h&&g.visible?(g=Math.round(c.translate(h.x,0,0,0,1))-d,w=Math.round(c.translate(h.x+h.width,0,0,0,1))-d,k=Math.round(e.translate(h.y,0,0,0,1))-d,h=Math.round(e.translate(h.y+h.height,0,0,0,1))-d,b.shapeType="rect",b.shapeArgs=
{x:Math.min(g,w),y:Math.min(k,h),width:Math.abs(w-g),height:Math.abs(h-k)},b.plotX=b.shapeArgs.x+b.shapeArgs.width/2,b.plotY=b.shapeArgs.y+b.shapeArgs.height/2):(delete b.plotX,delete b.plotY)})},setColorRecursive:function(a,c,e,b,g){var h=this,d=h&&h.chart,d=d&&d.options&&d.options.colors,k;if(a){k=n(a,{colors:d,index:b,mapOptionsToLevel:h.mapOptionsToLevel,parentColor:c,parentColorIndex:e,series:h,siblings:g});if(c=h.points[a.i])c.color=k.color,c.colorIndex=k.colorIndex;l(a.children||[],function(c,
b){h.setColorRecursive(c,k.color,k.colorIndex,b,a.children.length)})}},algorithmGroup:function(a,c,b,d){this.height=a;this.width=c;this.plot=d;this.startDirection=this.direction=b;this.lH=this.nH=this.lW=this.nW=this.total=0;this.elArr=[];this.lP={total:0,lH:0,nH:0,lW:0,nW:0,nR:0,lR:0,aspectRatio:function(a,c){return Math.max(a/c,c/a)}};this.addElement=function(a){this.lP.total=this.elArr[this.elArr.length-1];this.total+=a;0===this.direction?(this.lW=this.nW,this.lP.lH=this.lP.total/this.lW,this.lP.lR=
this.lP.aspectRatio(this.lW,this.lP.lH),this.nW=this.total/this.height,this.lP.nH=this.lP.total/this.nW,this.lP.nR=this.lP.aspectRatio(this.nW,this.lP.nH)):(this.lH=this.nH,this.lP.lW=this.lP.total/this.lH,this.lP.lR=this.lP.aspectRatio(this.lP.lW,this.lH),this.nH=this.total/this.width,this.lP.nW=this.lP.total/this.nH,this.lP.nR=this.lP.aspectRatio(this.lP.nW,this.nH));this.elArr.push(a)};this.reset=function(){this.lW=this.nW=0;this.elArr=[];this.total=0}},algorithmCalcPoints:function(a,c,b,d){var e,
h,w,k,f=b.lW,m=b.lH,u=b.plot,n,r=0,t=b.elArr.length-1;c?(f=b.nW,m=b.nH):n=b.elArr[b.elArr.length-1];l(b.elArr,function(a){if(c||r<t)0===b.direction?(e=u.x,h=u.y,w=f,k=a/w):(e=u.x,h=u.y,k=m,w=a/k),d.push({x:e,y:h,width:w,height:k}),0===b.direction?u.y+=k:u.x+=w;r+=1});b.reset();0===b.direction?b.width-=f:b.height-=m;u.y=u.parent.y+(u.parent.height-b.height);u.x=u.parent.x+(u.parent.width-b.width);a&&(b.direction=1-b.direction);c||b.addElement(n)},algorithmLowAspectRatio:function(a,b,e){var c=[],d=
this,h,f={x:b.x,y:b.y,parent:b},k=0,m=e.length-1,n=new this.algorithmGroup(b.height,b.width,b.direction,f);l(e,function(e){h=e.val/b.val*b.height*b.width;n.addElement(h);n.lP.nR>n.lP.lR&&d.algorithmCalcPoints(a,!1,n,c,f);k===m&&d.algorithmCalcPoints(a,!0,n,c,f);k+=1});return c},algorithmFill:function(a,b,e){var c=[],d,h=b.direction,f=b.x,k=b.y,m=b.width,n=b.height,r,t,p,q;l(e,function(e){d=e.val/b.val*b.height*b.width;r=f;t=k;0===h?(q=n,p=d/q,m-=p,f+=p):(p=m,q=d/p,n-=q,k+=q);c.push({x:r,y:t,width:p,
height:q});a&&(h=1-h)});return c},strip:function(a,b){return this.algorithmLowAspectRatio(!1,a,b)},squarified:function(a,b){return this.algorithmLowAspectRatio(!0,a,b)},sliceAndDice:function(a,b){return this.algorithmFill(!0,a,b)},stripes:function(a,b){return this.algorithmFill(!1,a,b)},translate:function(){var a=this,b=a.options,e=K(a),d,g;A.prototype.translate.call(a);g=a.tree=a.getTree();d=a.nodeMap[e];a.mapOptionsToLevel=m({from:d.level+1,levels:b.levels,to:g.height,defaults:{levelIsConstant:a.options.levelIsConstant,
colorByPoint:b.colorByPoint}});""===e||d&&d.children.length||(a.drillToNode("",!1),e=a.rootNode,d=a.nodeMap[e]);C(a.nodeMap[a.rootNode],function(b){var c=!1,e=b.parent;b.visible=!0;if(e||""===e)c=a.nodeMap[e];return c});C(a.nodeMap[a.rootNode].children,function(a){var b=!1;l(a,function(a){a.visible=!0;a.children.length&&(b=(b||[]).concat(a.children))});return b});a.setTreeValues(g);a.axisRatio=a.xAxis.len/a.yAxis.len;a.nodeMap[""].pointValues=e={x:0,y:0,width:100,height:100};a.nodeMap[""].values=
e=p(e,{width:e.width*a.axisRatio,direction:"vertical"===b.layoutStartingDirection?0:1,val:g.val});a.calculateChildrenAreas(g,e);a.colorAxis?a.translateColors():b.colorByPoint||a.setColorRecursive(a.tree);b.allowDrillToNode&&(b=d.pointValues,a.xAxis.setExtremes(b.x,b.x+b.width,!1),a.yAxis.setExtremes(b.y,b.y+b.height,!1),a.xAxis.setScale(),a.yAxis.setScale());a.setPointValues()},drawDataLabels:function(){var a=this,b=a.mapOptionsToLevel,e=q(a.points,function(a){return a.node.visible}),d,g;l(e,function(c){g=
b[c.node.level];d={style:{}};c.node.isLeaf||(d.enabled=!1);g&&g.dataLabels&&(d=p(d,g.dataLabels),a._hasPointLabels=!0);c.shapeArgs&&(d.style.width=c.shapeArgs.width,c.dataLabel&&c.dataLabel.css({width:c.shapeArgs.width+"px"}));c.dlOptions=p(d,c.options.dataLabels)});A.prototype.drawDataLabels.call(this)},alignDataLabel:function(a){E.column.prototype.alignDataLabel.apply(this,arguments);a.dataLabel&&a.dataLabel.attr({zIndex:(a.node.zIndex||0)+1})},pointAttribs:function(a,b){var c=y(this.mapOptionsToLevel)?
this.mapOptionsToLevel:{},f=a&&c[a.node.level]||{},c=this.options,g=b&&c.states[b]||{},h=a&&a.getClassName()||"";a={stroke:a&&a.borderColor||f.borderColor||g.borderColor||c.borderColor,"stroke-width":d(a&&a.borderWidth,f.borderWidth,g.borderWidth,c.borderWidth),dashstyle:a&&a.borderDashStyle||f.borderDashStyle||g.borderDashStyle||c.borderDashStyle,fill:a&&a.color||this.color};-1!==h.indexOf("highcharts-above-level")?(a.fill="none",a["stroke-width"]=0):-1!==h.indexOf("highcharts-internal-node-interactive")?
(b=d(g.opacity,c.opacity),a.fill=x(a.fill).setOpacity(b).get(),a.cursor="pointer"):-1!==h.indexOf("highcharts-internal-node")?a.fill="none":b&&(a.fill=x(a.fill).brighten(g.brightness).get());return a},drawPoints:function(){var a=this,b=q(a.points,function(a){return a.node.visible});l(b,function(b){var c="level-group-"+b.node.levelDynamic;a[c]||(a[c]=a.chart.renderer.g(c).attr({zIndex:1E3-b.node.levelDynamic}).add(a.group));b.group=a[c]});E.column.prototype.drawPoints.call(this);a.options.allowDrillToNode&&
l(b,function(b){b.graphic&&(b.drillId=a.options.interactByLeaf?a.drillToByLeaf(b):a.drillToByGroup(b))})},onClickDrillToNode:function(a){var b=(a=a.point)&&a.drillId;F(b)&&(a.setState(""),this.drillToNode(b))},drillToByGroup:function(a){var b=!1;1!==a.node.level-this.nodeMap[this.rootNode].level||a.node.isLeaf||(b=a.id);return b},drillToByLeaf:function(a){var b=!1;if(a.node.parent!==this.rootNode&&a.node.isLeaf)for(a=a.node;!b;)a=this.nodeMap[a.parent],a.parent===this.rootNode&&(b=a.id);return b},
drillUp:function(){var a=this.nodeMap[this.rootNode];a&&F(a.parent)&&this.drillToNode(a.parent)},drillToNode:function(a,b){var c=this.nodeMap[a];this.idPreviousRoot=this.rootNode;this.rootNode=a;""===a?this.drillUpButton=this.drillUpButton.destroy():this.showDrillUpButton(c&&c.name||a);this.isDirty=!0;d(b,!0)&&this.chart.redraw()},showDrillUpButton:function(a){var b=this;a=a||"\x3c Back";var d=b.options.drillUpButton,f,g;d.text&&(a=d.text);this.drillUpButton?(this.drillUpButton.placed=!1,this.drillUpButton.attr({text:a}).align()):
(g=(f=d.theme)&&f.states,this.drillUpButton=this.chart.renderer.button(a,null,null,function(){b.drillUp()},f,g&&g.hover,g&&g.select).addClass("highcharts-drillup-button").attr({align:d.position.align,zIndex:7}).add().align(d.position,!1,d.relativeTo||"plotBox"))},buildKDTree:z,drawLegendSymbol:b.LegendSymbolMixin.drawRectangle,getExtremes:function(){A.prototype.getExtremes.call(this,this.colorValueData);this.valueMin=this.dataMin;this.valueMax=this.dataMax;A.prototype.getExtremes.call(this)},getExtremesFromAll:!0,
bindAxes:function(){var a={endOnTick:!1,gridLineWidth:0,lineWidth:0,min:0,dataMin:0,minPadding:0,max:100,dataMax:100,maxPadding:0,startOnTick:!1,title:null,tickPositions:[]};A.prototype.bindAxes.call(this);b.extend(this.yAxis.options,a);b.extend(this.xAxis.options,a)},utils:{recursive:C,reduce:I}},{getClassName:function(){var a=b.Point.prototype.getClassName.call(this),c=this.series,e=c.options;this.node.level<=c.nodeMap[c.rootNode].level?a+=" highcharts-above-level":this.node.isLeaf||d(e.interactByLeaf,
!e.allowDrillToNode)?this.node.isLeaf||(a+=" highcharts-internal-node"):a+=" highcharts-internal-node-interactive";return a},isValid:function(){return this.id||H(this.value)},setState:function(a){b.Point.prototype.setState.call(this,a);this.graphic&&this.graphic.attr({zIndex:"hover"===a?1:0})},setVisible:E.pie.prototype.pointClass.prototype.setVisible})})(v,H)});
//# sourceMappingURL=treemap.js.map


/***/ }),

/***/ 2837:
/***/ ((module) => {

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

/***/ 2857:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (arrayAggregator);


/***/ }),

/***/ 2858:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _baseEach_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1986);


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
  (0,_baseEach_js__WEBPACK_IMPORTED_MODULE_0__["default"])(collection, function(value, key, collection) {
    setter(accumulator, value, iteratee(value), collection);
  });
  return accumulator;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (baseAggregator);


/***/ }),

/***/ 2854:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _baseSum_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2852);


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
  return length ? ((0,_baseSum_js__WEBPACK_IMPORTED_MODULE_0__["default"])(array, iteratee) / length) : NAN;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (baseMean);


/***/ }),

/***/ 2852:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (baseSum);


/***/ }),

/***/ 2856:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _arrayAggregator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2857);
/* harmony import */ var _baseAggregator_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2858);
/* harmony import */ var _baseIteratee_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1992);
/* harmony import */ var _isArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1694);





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
    var func = (0,_isArray_js__WEBPACK_IMPORTED_MODULE_0__["default"])(collection) ? _arrayAggregator_js__WEBPACK_IMPORTED_MODULE_1__["default"] : _baseAggregator_js__WEBPACK_IMPORTED_MODULE_2__["default"],
        accumulator = initializer ? initializer() : {};

    return func(collection, setter, (0,_baseIteratee_js__WEBPACK_IMPORTED_MODULE_3__["default"])(iteratee, 2), accumulator);
  };
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createAggregator);


/***/ }),

/***/ 2855:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _baseAssignValue_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1726);
/* harmony import */ var _createAggregator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2856);



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
var groupBy = (0,_createAggregator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function(result, value, key) {
  if (hasOwnProperty.call(result, key)) {
    result[key].push(value);
  } else {
    (0,_baseAssignValue_js__WEBPACK_IMPORTED_MODULE_1__["default"])(result, key, [value]);
  }
});

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (groupBy);


/***/ }),

/***/ 2853:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _baseIteratee_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1992);
/* harmony import */ var _baseMean_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2854);



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
  return (0,_baseMean_js__WEBPACK_IMPORTED_MODULE_0__["default"])(array, (0,_baseIteratee_js__WEBPACK_IMPORTED_MODULE_1__["default"])(iteratee, 2));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (meanBy);


/***/ }),

/***/ 2851:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _baseIteratee_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1992);
/* harmony import */ var _baseSum_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2852);



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
    ? (0,_baseSum_js__WEBPACK_IMPORTED_MODULE_0__["default"])(array, (0,_baseIteratee_js__WEBPACK_IMPORTED_MODULE_1__["default"])(iteratee, 2))
    : 0;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (sumBy);


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMzQuZTIwNjZhNWI2ZDcwYTAwNzE3YWUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUMxQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDbkNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDdERBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ3JCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDcEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNuQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUN0QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDeENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUM5QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vUnVERVgzLWxpZ2h0Ly4vbm9kZV9tb2R1bGVzL2hpZ2hjaGFydHMvbW9kdWxlcy9oZWF0bWFwLmpzIiwid2VicGFjazovL1J1REVYMy1saWdodC8uL25vZGVfbW9kdWxlcy9oaWdoY2hhcnRzL21vZHVsZXMvdHJlZW1hcC5qcyIsIndlYnBhY2s6Ly9SdURFWDMtbGlnaHQvLi9ub2RlX21vZHVsZXMvc3RyaW5nLXNpbWlsYXJpdHkvY29tcGFyZS1zdHJpbmdzLmpzIiwid2VicGFjazovL1J1REVYMy1saWdodC8uL25vZGVfbW9kdWxlcy9sb2Rhc2gtZXMvX2FycmF5QWdncmVnYXRvci5qcyIsIndlYnBhY2s6Ly9SdURFWDMtbGlnaHQvLi9ub2RlX21vZHVsZXMvbG9kYXNoLWVzL19iYXNlQWdncmVnYXRvci5qcyIsIndlYnBhY2s6Ly9SdURFWDMtbGlnaHQvLi9ub2RlX21vZHVsZXMvbG9kYXNoLWVzL19iYXNlTWVhbi5qcyIsIndlYnBhY2s6Ly9SdURFWDMtbGlnaHQvLi9ub2RlX21vZHVsZXMvbG9kYXNoLWVzL19iYXNlU3VtLmpzIiwid2VicGFjazovL1J1REVYMy1saWdodC8uL25vZGVfbW9kdWxlcy9sb2Rhc2gtZXMvX2NyZWF0ZUFnZ3JlZ2F0b3IuanMiLCJ3ZWJwYWNrOi8vUnVERVgzLWxpZ2h0Ly4vbm9kZV9tb2R1bGVzL2xvZGFzaC1lcy9ncm91cEJ5LmpzIiwid2VicGFjazovL1J1REVYMy1saWdodC8uL25vZGVfbW9kdWxlcy9sb2Rhc2gtZXMvbWVhbkJ5LmpzIiwid2VicGFjazovL1J1REVYMy1saWdodC8uL25vZGVfbW9kdWxlcy9sb2Rhc2gtZXMvc3VtQnkuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLypcbiBIaWdoY2hhcnRzIEpTIHY2LjIuMCAoMjAxOC0xMC0xNylcblxuIChjKSAyMDA5LTIwMTggVG9yc3RlaW4gSG9uc2lcblxuIExpY2Vuc2U6IHd3dy5oaWdoY2hhcnRzLmNvbS9saWNlbnNlXG4qL1xuKGZ1bmN0aW9uKGspe1wib2JqZWN0XCI9PT10eXBlb2YgbW9kdWxlJiZtb2R1bGUuZXhwb3J0cz9tb2R1bGUuZXhwb3J0cz1rOlwiZnVuY3Rpb25cIj09PXR5cGVvZiBkZWZpbmUmJmRlZmluZS5hbWQ/ZGVmaW5lKGZ1bmN0aW9uKCl7cmV0dXJuIGt9KTprKEhpZ2hjaGFydHMpfSkoZnVuY3Rpb24oayl7KGZ1bmN0aW9uKGIpe3ZhciB0PWIuYWRkRXZlbnQsaD1iLkF4aXMsaz1iLkNoYXJ0LG09Yi5jb2xvcixxLGc9Yi5lYWNoLHI9Yi5leHRlbmQscD1iLmlzTnVtYmVyLGU9Yi5MZWdlbmQsYz1iLkxlZ2VuZFN5bWJvbE1peGluLHg9Yi5ub29wLHc9Yi5tZXJnZSx1PWIucGljaztiLkNvbG9yQXhpc3x8KHE9Yi5Db2xvckF4aXM9ZnVuY3Rpb24oKXt0aGlzLmluaXQuYXBwbHkodGhpcyxhcmd1bWVudHMpfSxyKHEucHJvdG90eXBlLGgucHJvdG90eXBlKSxyKHEucHJvdG90eXBlLHtkZWZhdWx0Q29sb3JBeGlzT3B0aW9uczp7bGluZVdpZHRoOjAsbWluUGFkZGluZzowLG1heFBhZGRpbmc6MCxncmlkTGluZVdpZHRoOjEsXG50aWNrUGl4ZWxJbnRlcnZhbDo3MixzdGFydE9uVGljazohMCxlbmRPblRpY2s6ITAsb2Zmc2V0OjAsbWFya2VyOnthbmltYXRpb246e2R1cmF0aW9uOjUwfSx3aWR0aDouMDEsY29sb3I6XCIjOTk5OTk5XCJ9LGxhYmVsczp7b3ZlcmZsb3c6XCJqdXN0aWZ5XCIscm90YXRpb246MH0sbWluQ29sb3I6XCIjZTZlYmY1XCIsbWF4Q29sb3I6XCIjMDAzMzk5XCIsdGlja0xlbmd0aDo1LHNob3dJbkxlZ2VuZDohMH0sa2VlcFByb3BzOltcImxlZ2VuZEdyb3VwXCIsXCJsZWdlbmRJdGVtSGVpZ2h0XCIsXCJsZWdlbmRJdGVtV2lkdGhcIixcImxlZ2VuZEl0ZW1cIixcImxlZ2VuZFN5bWJvbFwiXS5jb25jYXQoaC5wcm90b3R5cGUua2VlcFByb3BzKSxpbml0OmZ1bmN0aW9uKGEsZCl7dmFyIGY9XCJ2ZXJ0aWNhbFwiIT09YS5vcHRpb25zLmxlZ2VuZC5sYXlvdXQsbjt0aGlzLmNvbGw9XCJjb2xvckF4aXNcIjtuPXcodGhpcy5kZWZhdWx0Q29sb3JBeGlzT3B0aW9ucyx7c2lkZTpmPzI6MSxyZXZlcnNlZDohZn0sZCx7b3Bwb3NpdGU6IWYsXG5zaG93RW1wdHk6ITEsdGl0bGU6bnVsbCx2aXNpYmxlOmEub3B0aW9ucy5sZWdlbmQuZW5hYmxlZH0pO2gucHJvdG90eXBlLmluaXQuY2FsbCh0aGlzLGEsbik7ZC5kYXRhQ2xhc3NlcyYmdGhpcy5pbml0RGF0YUNsYXNzZXMoZCk7dGhpcy5pbml0U3RvcHMoKTt0aGlzLmhvcml6PWY7dGhpcy56b29tRW5hYmxlZD0hMTt0aGlzLmRlZmF1bHRMZWdlbmRMZW5ndGg9MjAwfSxpbml0RGF0YUNsYXNzZXM6ZnVuY3Rpb24oYSl7dmFyIGQ9dGhpcy5jaGFydCxmLG49MCxsPWQub3B0aW9ucy5jaGFydC5jb2xvckNvdW50LGI9dGhpcy5vcHRpb25zLGU9YS5kYXRhQ2xhc3Nlcy5sZW5ndGg7dGhpcy5kYXRhQ2xhc3Nlcz1mPVtdO3RoaXMubGVnZW5kSXRlbXM9W107ZyhhLmRhdGFDbGFzc2VzLGZ1bmN0aW9uKGEsYyl7YT13KGEpO2YucHVzaChhKTthLmNvbG9yfHwoXCJjYXRlZ29yeVwiPT09Yi5kYXRhQ2xhc3NDb2xvcj8oYz1kLm9wdGlvbnMuY29sb3JzLGw9Yy5sZW5ndGgsYS5jb2xvcj1jW25dLFxuYS5jb2xvckluZGV4PW4sbisrLG49PT1sJiYobj0wKSk6YS5jb2xvcj1tKGIubWluQ29sb3IpLnR3ZWVuVG8obShiLm1heENvbG9yKSwyPmU/LjU6Yy8oZS0xKSkpfSl9LHNldFRpY2tQb3NpdGlvbnM6ZnVuY3Rpb24oKXtpZighdGhpcy5kYXRhQ2xhc3NlcylyZXR1cm4gaC5wcm90b3R5cGUuc2V0VGlja1Bvc2l0aW9ucy5jYWxsKHRoaXMpfSxpbml0U3RvcHM6ZnVuY3Rpb24oKXt0aGlzLnN0b3BzPXRoaXMub3B0aW9ucy5zdG9wc3x8W1swLHRoaXMub3B0aW9ucy5taW5Db2xvcl0sWzEsdGhpcy5vcHRpb25zLm1heENvbG9yXV07Zyh0aGlzLnN0b3BzLGZ1bmN0aW9uKGEpe2EuY29sb3I9bShhWzFdKX0pfSxzZXRPcHRpb25zOmZ1bmN0aW9uKGEpe2gucHJvdG90eXBlLnNldE9wdGlvbnMuY2FsbCh0aGlzLGEpO3RoaXMub3B0aW9ucy5jcm9zc2hhaXI9dGhpcy5vcHRpb25zLm1hcmtlcn0sc2V0QXhpc1NpemU6ZnVuY3Rpb24oKXt2YXIgYT10aGlzLmxlZ2VuZFN5bWJvbCxkPXRoaXMuY2hhcnQsXG5mPWQub3B0aW9ucy5sZWdlbmR8fHt9LG4sbDthPyh0aGlzLmxlZnQ9Zj1hLmF0dHIoXCJ4XCIpLHRoaXMudG9wPW49YS5hdHRyKFwieVwiKSx0aGlzLndpZHRoPWw9YS5hdHRyKFwid2lkdGhcIiksdGhpcy5oZWlnaHQ9YT1hLmF0dHIoXCJoZWlnaHRcIiksdGhpcy5yaWdodD1kLmNoYXJ0V2lkdGgtZi1sLHRoaXMuYm90dG9tPWQuY2hhcnRIZWlnaHQtbi1hLHRoaXMubGVuPXRoaXMuaG9yaXo/bDphLHRoaXMucG9zPXRoaXMuaG9yaXo/ZjpuKTp0aGlzLmxlbj0odGhpcy5ob3Jpej9mLnN5bWJvbFdpZHRoOmYuc3ltYm9sSGVpZ2h0KXx8dGhpcy5kZWZhdWx0TGVnZW5kTGVuZ3RofSxub3JtYWxpemVkVmFsdWU6ZnVuY3Rpb24oYSl7dGhpcy5pc0xvZyYmKGE9dGhpcy52YWwybGluKGEpKTtyZXR1cm4gMS0odGhpcy5tYXgtYSkvKHRoaXMubWF4LXRoaXMubWlufHwxKX0sdG9Db2xvcjpmdW5jdGlvbihhLGQpe3ZhciBmPXRoaXMuc3RvcHMsbixsLGI9dGhpcy5kYXRhQ2xhc3NlcyxlLGM7aWYoYilmb3IoYz1cbmIubGVuZ3RoO2MtLTspe2lmKGU9YltjXSxuPWUuZnJvbSxmPWUudG8sKHZvaWQgMD09PW58fGE+PW4pJiYodm9pZCAwPT09Znx8YTw9Zikpe2w9ZS5jb2xvcjtkJiYoZC5kYXRhQ2xhc3M9YyxkLmNvbG9ySW5kZXg9ZS5jb2xvckluZGV4KTticmVha319ZWxzZXthPXRoaXMubm9ybWFsaXplZFZhbHVlKGEpO2ZvcihjPWYubGVuZ3RoO2MtLSYmIShhPmZbY11bMF0pOyk7bj1mW2NdfHxmW2MrMV07Zj1mW2MrMV18fG47YT0xLShmWzBdLWEpLyhmWzBdLW5bMF18fDEpO2w9bi5jb2xvci50d2VlblRvKGYuY29sb3IsYSl9cmV0dXJuIGx9LGdldE9mZnNldDpmdW5jdGlvbigpe3ZhciBhPXRoaXMubGVnZW5kR3JvdXAsZD10aGlzLmNoYXJ0LmF4aXNPZmZzZXRbdGhpcy5zaWRlXTthJiYodGhpcy5heGlzUGFyZW50PWEsaC5wcm90b3R5cGUuZ2V0T2Zmc2V0LmNhbGwodGhpcyksdGhpcy5hZGRlZHx8KHRoaXMuYWRkZWQ9ITAsdGhpcy5sYWJlbExlZnQ9MCx0aGlzLmxhYmVsUmlnaHQ9dGhpcy53aWR0aCksXG50aGlzLmNoYXJ0LmF4aXNPZmZzZXRbdGhpcy5zaWRlXT1kKX0sc2V0TGVnZW5kQ29sb3I6ZnVuY3Rpb24oKXt2YXIgYSxkPXRoaXMucmV2ZXJzZWQ7YT1kPzE6MDtkPWQ/MDoxO2E9dGhpcy5ob3Jpej9bYSwwLGQsMF06WzAsZCwwLGFdO3RoaXMubGVnZW5kQ29sb3I9e2xpbmVhckdyYWRpZW50Ont4MTphWzBdLHkxOmFbMV0seDI6YVsyXSx5MjphWzNdfSxzdG9wczp0aGlzLnN0b3BzfX0sZHJhd0xlZ2VuZFN5bWJvbDpmdW5jdGlvbihhLGQpe3ZhciBmPWEucGFkZGluZyxiPWEub3B0aW9ucyxsPXRoaXMuaG9yaXosYz11KGIuc3ltYm9sV2lkdGgsbD90aGlzLmRlZmF1bHRMZWdlbmRMZW5ndGg6MTIpLGU9dShiLnN5bWJvbEhlaWdodCxsPzEyOnRoaXMuZGVmYXVsdExlZ2VuZExlbmd0aCksZz11KGIubGFiZWxQYWRkaW5nLGw/MTY6MzApLGI9dShiLml0ZW1EaXN0YW5jZSwxMCk7dGhpcy5zZXRMZWdlbmRDb2xvcigpO2QubGVnZW5kU3ltYm9sPXRoaXMuY2hhcnQucmVuZGVyZXIucmVjdCgwLFxuYS5iYXNlbGluZS0xMSxjLGUpLmF0dHIoe3pJbmRleDoxfSkuYWRkKGQubGVnZW5kR3JvdXApO3RoaXMubGVnZW5kSXRlbVdpZHRoPWMrZisobD9iOmcpO3RoaXMubGVnZW5kSXRlbUhlaWdodD1lK2YrKGw/ZzowKX0sc2V0U3RhdGU6ZnVuY3Rpb24oYSl7Zyh0aGlzLnNlcmllcyxmdW5jdGlvbihkKXtkLnNldFN0YXRlKGEpfSl9LHZpc2libGU6ITAsc2V0VmlzaWJsZTp4LGdldFNlcmllc0V4dHJlbWVzOmZ1bmN0aW9uKCl7dmFyIGE9dGhpcy5zZXJpZXMsZD1hLmxlbmd0aDt0aGlzLmRhdGFNaW49SW5maW5pdHk7Zm9yKHRoaXMuZGF0YU1heD0tSW5maW5pdHk7ZC0tOylhW2RdLmdldEV4dHJlbWVzKCksdm9pZCAwIT09YVtkXS52YWx1ZU1pbiYmKHRoaXMuZGF0YU1pbj1NYXRoLm1pbih0aGlzLmRhdGFNaW4sYVtkXS52YWx1ZU1pbiksdGhpcy5kYXRhTWF4PU1hdGgubWF4KHRoaXMuZGF0YU1heCxhW2RdLnZhbHVlTWF4KSl9LGRyYXdDcm9zc2hhaXI6ZnVuY3Rpb24oYSxkKXt2YXIgZj1cbmQmJmQucGxvdFgsYj1kJiZkLnBsb3RZLGMsZT10aGlzLnBvcyxnPXRoaXMubGVuO2QmJihjPXRoaXMudG9QaXhlbHMoZFtkLnNlcmllcy5jb2xvcktleV0pLGM8ZT9jPWUtMjpjPmUrZyYmKGM9ZStnKzIpLGQucGxvdFg9YyxkLnBsb3RZPXRoaXMubGVuLWMsaC5wcm90b3R5cGUuZHJhd0Nyb3NzaGFpci5jYWxsKHRoaXMsYSxkKSxkLnBsb3RYPWYsZC5wbG90WT1iLHRoaXMuY3Jvc3MmJiF0aGlzLmNyb3NzLmFkZGVkVG9Db2xvckF4aXMmJnRoaXMubGVnZW5kR3JvdXAmJih0aGlzLmNyb3NzLmFkZENsYXNzKFwiaGlnaGNoYXJ0cy1jb2xvcmF4aXMtbWFya2VyXCIpLmFkZCh0aGlzLmxlZ2VuZEdyb3VwKSx0aGlzLmNyb3NzLmFkZGVkVG9Db2xvckF4aXM9ITAsdGhpcy5jcm9zcy5hdHRyKHtmaWxsOnRoaXMuY3Jvc3NoYWlyLmNvbG9yfSkpKX0sZ2V0UGxvdExpbmVQYXRoOmZ1bmN0aW9uKGEsZCxmLGIsYyl7cmV0dXJuIHAoYyk/dGhpcy5ob3Jpej9bXCJNXCIsYy00LHRoaXMudG9wLTYsXCJMXCIsXG5jKzQsdGhpcy50b3AtNixjLHRoaXMudG9wLFwiWlwiXTpbXCJNXCIsdGhpcy5sZWZ0LGMsXCJMXCIsdGhpcy5sZWZ0LTYsYys2LHRoaXMubGVmdC02LGMtNixcIlpcIl06aC5wcm90b3R5cGUuZ2V0UGxvdExpbmVQYXRoLmNhbGwodGhpcyxhLGQsZixiKX0sdXBkYXRlOmZ1bmN0aW9uKGEsZCl7dmFyIGM9dGhpcy5jaGFydCxiPWMubGVnZW5kO2codGhpcy5zZXJpZXMsZnVuY3Rpb24oYSl7YS5pc0RpcnR5RGF0YT0hMH0pO2EuZGF0YUNsYXNzZXMmJmIuYWxsSXRlbXMmJihnKGIuYWxsSXRlbXMsZnVuY3Rpb24oYSl7YS5pc0RhdGFDbGFzcyYmYS5sZWdlbmRHcm91cCYmYS5sZWdlbmRHcm91cC5kZXN0cm95KCl9KSxjLmlzRGlydHlMZWdlbmQ9ITApO2Mub3B0aW9uc1t0aGlzLmNvbGxdPXcodGhpcy51c2VyT3B0aW9ucyxhKTtoLnByb3RvdHlwZS51cGRhdGUuY2FsbCh0aGlzLGEsZCk7dGhpcy5sZWdlbmRJdGVtJiYodGhpcy5zZXRMZWdlbmRDb2xvcigpLGIuY29sb3JpemVJdGVtKHRoaXMsITApKX0sXG5yZW1vdmU6ZnVuY3Rpb24oKXt0aGlzLmxlZ2VuZEl0ZW0mJnRoaXMuY2hhcnQubGVnZW5kLmRlc3Ryb3lJdGVtKHRoaXMpO2gucHJvdG90eXBlLnJlbW92ZS5jYWxsKHRoaXMpfSxnZXREYXRhQ2xhc3NMZWdlbmRTeW1ib2xzOmZ1bmN0aW9uKCl7dmFyIGE9dGhpcyxkPXRoaXMuY2hhcnQsZj10aGlzLmxlZ2VuZEl0ZW1zLGU9ZC5vcHRpb25zLmxlZ2VuZCxsPWUudmFsdWVEZWNpbWFscyxxPWUudmFsdWVTdWZmaXh8fFwiXCIsaDtmLmxlbmd0aHx8Zyh0aGlzLmRhdGFDbGFzc2VzLGZ1bmN0aW9uKGUsbil7dmFyIG09ITAscD1lLmZyb20saz1lLnRvO2g9XCJcIjt2b2lkIDA9PT1wP2g9XCJcXHgzYyBcIjp2b2lkIDA9PT1rJiYoaD1cIlxceDNlIFwiKTt2b2lkIDAhPT1wJiYoaCs9Yi5udW1iZXJGb3JtYXQocCxsKStxKTt2b2lkIDAhPT1wJiZ2b2lkIDAhPT1rJiYoaCs9XCIgLSBcIik7dm9pZCAwIT09ayYmKGgrPWIubnVtYmVyRm9ybWF0KGssbCkrcSk7Zi5wdXNoKHIoe2NoYXJ0OmQsbmFtZTpoLG9wdGlvbnM6e30sXG5kcmF3TGVnZW5kU3ltYm9sOmMuZHJhd1JlY3RhbmdsZSx2aXNpYmxlOiEwLHNldFN0YXRlOngsaXNEYXRhQ2xhc3M6ITAsc2V0VmlzaWJsZTpmdW5jdGlvbigpe209dGhpcy52aXNpYmxlPSFtO2coYS5zZXJpZXMsZnVuY3Rpb24oYSl7ZyhhLnBvaW50cyxmdW5jdGlvbihhKXthLmRhdGFDbGFzcz09PW4mJmEuc2V0VmlzaWJsZShtKX0pfSk7ZC5sZWdlbmQuY29sb3JpemVJdGVtKHRoaXMsbSl9fSxlKSl9KTtyZXR1cm4gZn0sbmFtZTpcIlwifSksZyhbXCJmaWxsXCIsXCJzdHJva2VcIl0sZnVuY3Rpb24oYSl7Yi5GeC5wcm90b3R5cGVbYStcIlNldHRlclwiXT1mdW5jdGlvbigpe3RoaXMuZWxlbS5hdHRyKGEsbSh0aGlzLnN0YXJ0KS50d2VlblRvKG0odGhpcy5lbmQpLHRoaXMucG9zKSxudWxsLCEwKX19KSx0KGssXCJhZnRlckdldEF4ZXNcIixmdW5jdGlvbigpe3ZhciBhPXRoaXMub3B0aW9ucy5jb2xvckF4aXM7dGhpcy5jb2xvckF4aXM9W107YSYmbmV3IHEodGhpcyxhKX0pLHQoZSxcImFmdGVyR2V0QWxsSXRlbXNcIixcbmZ1bmN0aW9uKGEpe3ZhciBkPVtdLGM9dGhpcy5jaGFydC5jb2xvckF4aXNbMF07YyYmYy5vcHRpb25zJiZjLm9wdGlvbnMuc2hvd0luTGVnZW5kJiYoYy5vcHRpb25zLmRhdGFDbGFzc2VzP2Q9Yy5nZXREYXRhQ2xhc3NMZWdlbmRTeW1ib2xzKCk6ZC5wdXNoKGMpLGcoYy5zZXJpZXMsZnVuY3Rpb24oYyl7Yi5lcmFzZShhLmFsbEl0ZW1zLGMpfSkpO2ZvcihjPWQubGVuZ3RoO2MtLTspYS5hbGxJdGVtcy51bnNoaWZ0KGRbY10pfSksdChlLFwiYWZ0ZXJDb2xvcml6ZUl0ZW1cIixmdW5jdGlvbihhKXthLnZpc2libGUmJmEuaXRlbS5sZWdlbmRDb2xvciYmYS5pdGVtLmxlZ2VuZFN5bWJvbC5hdHRyKHtmaWxsOmEuaXRlbS5sZWdlbmRDb2xvcn0pfSksdChlLFwiYWZ0ZXJVcGRhdGVcIixmdW5jdGlvbihhLGMsYil7dGhpcy5jaGFydC5jb2xvckF4aXNbMF0mJnRoaXMuY2hhcnQuY29sb3JBeGlzWzBdLnVwZGF0ZSh7fSxiKX0pKX0pKGspOyhmdW5jdGlvbihiKXt2YXIgaz1iLmRlZmluZWQsaD1cbmIuZWFjaCx2PWIubm9vcCxtPWIuc2VyaWVzVHlwZXM7Yi5jb2xvclBvaW50TWl4aW49e2lzVmFsaWQ6ZnVuY3Rpb24oKXtyZXR1cm4gbnVsbCE9PXRoaXMudmFsdWUmJkluZmluaXR5IT09dGhpcy52YWx1ZSYmLUluZmluaXR5IT09dGhpcy52YWx1ZX0sc2V0VmlzaWJsZTpmdW5jdGlvbihiKXt2YXIgZz10aGlzLHE9Yj9cInNob3dcIjpcImhpZGVcIjtnLnZpc2libGU9ISFiO2goW1wiZ3JhcGhpY1wiLFwiZGF0YUxhYmVsXCJdLGZ1bmN0aW9uKGIpe2lmKGdbYl0pZ1tiXVtxXSgpfSl9LHNldFN0YXRlOmZ1bmN0aW9uKGgpe2IuUG9pbnQucHJvdG90eXBlLnNldFN0YXRlLmNhbGwodGhpcyxoKTt0aGlzLmdyYXBoaWMmJnRoaXMuZ3JhcGhpYy5hdHRyKHt6SW5kZXg6XCJob3ZlclwiPT09aD8xOjB9KX19O2IuY29sb3JTZXJpZXNNaXhpbj17cG9pbnRBcnJheU1hcDpbXCJ2YWx1ZVwiXSxheGlzVHlwZXM6W1wieEF4aXNcIixcInlBeGlzXCIsXCJjb2xvckF4aXNcIl0sb3B0aW9uYWxBeGlzOlwiY29sb3JBeGlzXCIsdHJhY2tlckdyb3VwczpbXCJncm91cFwiLFxuXCJtYXJrZXJHcm91cFwiLFwiZGF0YUxhYmVsc0dyb3VwXCJdLGdldFN5bWJvbDp2LHBhcmFsbGVsQXJyYXlzOltcInhcIixcInlcIixcInZhbHVlXCJdLGNvbG9yS2V5OlwidmFsdWVcIixwb2ludEF0dHJpYnM6bS5jb2x1bW4ucHJvdG90eXBlLnBvaW50QXR0cmlicyx0cmFuc2xhdGVDb2xvcnM6ZnVuY3Rpb24oKXt2YXIgYj10aGlzLGc9dGhpcy5vcHRpb25zLm51bGxDb2xvcixrPXRoaXMuY29sb3JBeGlzLG09dGhpcy5jb2xvcktleTtoKHRoaXMuZGF0YSxmdW5jdGlvbihlKXt2YXIgYz1lW21dO2lmKGM9ZS5vcHRpb25zLmNvbG9yfHwoZS5pc051bGw/ZzprJiZ2b2lkIDAhPT1jP2sudG9Db2xvcihjLGUpOmUuY29sb3J8fGIuY29sb3IpKWUuY29sb3I9Y30pfSxjb2xvckF0dHJpYnM6ZnVuY3Rpb24oYil7dmFyIGc9e307ayhiLmNvbG9yKSYmKGdbdGhpcy5jb2xvclByb3B8fFwiZmlsbFwiXT1iLmNvbG9yKTtyZXR1cm4gZ319fSkoayk7KGZ1bmN0aW9uKGIpe3ZhciBrPWIuY29sb3JQb2ludE1peGluLGg9XG5iLmVhY2gsdj1iLm1lcmdlLG09Yi5ub29wLHE9Yi5waWNrLGc9Yi5TZXJpZXMscj1iLnNlcmllc1R5cGUscD1iLnNlcmllc1R5cGVzO3IoXCJoZWF0bWFwXCIsXCJzY2F0dGVyXCIse2FuaW1hdGlvbjohMSxib3JkZXJXaWR0aDowLG51bGxDb2xvcjpcIiNmN2Y3ZjdcIixkYXRhTGFiZWxzOntmb3JtYXR0ZXI6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5wb2ludC52YWx1ZX0saW5zaWRlOiEwLHZlcnRpY2FsQWxpZ246XCJtaWRkbGVcIixjcm9wOiExLG92ZXJmbG93OiExLHBhZGRpbmc6MH0sbWFya2VyOm51bGwscG9pbnRSYW5nZTpudWxsLHRvb2x0aXA6e3BvaW50Rm9ybWF0Olwie3BvaW50Lnh9LCB7cG9pbnQueX06IHtwb2ludC52YWx1ZX1cXHgzY2JyL1xceDNlXCJ9LHN0YXRlczp7aG92ZXI6e2hhbG86ITEsYnJpZ2h0bmVzczouMn19fSx2KGIuY29sb3JTZXJpZXNNaXhpbix7cG9pbnRBcnJheU1hcDpbXCJ5XCIsXCJ2YWx1ZVwiXSxoYXNQb2ludFNwZWNpZmljT3B0aW9uczohMCxnZXRFeHRyZW1lc0Zyb21BbGw6ITAsXG5kaXJlY3RUb3VjaDohMCxpbml0OmZ1bmN0aW9uKCl7dmFyIGI7cC5zY2F0dGVyLnByb3RvdHlwZS5pbml0LmFwcGx5KHRoaXMsYXJndW1lbnRzKTtiPXRoaXMub3B0aW9ucztiLnBvaW50UmFuZ2U9cShiLnBvaW50UmFuZ2UsYi5jb2xzaXplfHwxKTt0aGlzLnlBeGlzLmF4aXNQb2ludFJhbmdlPWIucm93c2l6ZXx8MX0sdHJhbnNsYXRlOmZ1bmN0aW9uKCl7dmFyIGI9dGhpcy5vcHRpb25zLGM9dGhpcy54QXhpcyxnPXRoaXMueUF4aXMsaz1iLnBvaW50UGFkZGluZ3x8MCxtPWZ1bmN0aW9uKGEsYixjKXtyZXR1cm4gTWF0aC5taW4oTWF0aC5tYXgoYixhKSxjKX07dGhpcy5nZW5lcmF0ZVBvaW50cygpO2godGhpcy5wb2ludHMsZnVuY3Rpb24oYSl7dmFyIGQ9KGIuY29sc2l6ZXx8MSkvMixlPShiLnJvd3NpemV8fDEpLzIsaD1tKE1hdGgucm91bmQoYy5sZW4tYy50cmFuc2xhdGUoYS54LWQsMCwxLDAsMSkpLC1jLmxlbiwyKmMubGVuKSxkPW0oTWF0aC5yb3VuZChjLmxlbi1jLnRyYW5zbGF0ZShhLngrXG5kLDAsMSwwLDEpKSwtYy5sZW4sMipjLmxlbiksbD1tKE1hdGgucm91bmQoZy50cmFuc2xhdGUoYS55LWUsMCwxLDAsMSkpLC1nLmxlbiwyKmcubGVuKSxlPW0oTWF0aC5yb3VuZChnLnRyYW5zbGF0ZShhLnkrZSwwLDEsMCwxKSksLWcubGVuLDIqZy5sZW4pLHA9cShhLnBvaW50UGFkZGluZyxrKTthLnBsb3RYPWEuY2xpZW50WD0oaCtkKS8yO2EucGxvdFk9KGwrZSkvMjthLnNoYXBlVHlwZT1cInJlY3RcIjthLnNoYXBlQXJncz17eDpNYXRoLm1pbihoLGQpK3AseTpNYXRoLm1pbihsLGUpK3Asd2lkdGg6TWF0aC5hYnMoZC1oKS0yKnAsaGVpZ2h0Ok1hdGguYWJzKGUtbCktMipwfX0pO3RoaXMudHJhbnNsYXRlQ29sb3JzKCl9LGRyYXdQb2ludHM6ZnVuY3Rpb24oKXtwLmNvbHVtbi5wcm90b3R5cGUuZHJhd1BvaW50cy5jYWxsKHRoaXMpO2godGhpcy5wb2ludHMsZnVuY3Rpb24oYil7Yi5ncmFwaGljLmF0dHIodGhpcy5jb2xvckF0dHJpYnMoYikpfSx0aGlzKX0sYW5pbWF0ZTptLGdldEJveDptLFxuZHJhd0xlZ2VuZFN5bWJvbDpiLkxlZ2VuZFN5bWJvbE1peGluLmRyYXdSZWN0YW5nbGUsYWxpZ25EYXRhTGFiZWw6cC5jb2x1bW4ucHJvdG90eXBlLmFsaWduRGF0YUxhYmVsLGdldEV4dHJlbWVzOmZ1bmN0aW9uKCl7Zy5wcm90b3R5cGUuZ2V0RXh0cmVtZXMuY2FsbCh0aGlzLHRoaXMudmFsdWVEYXRhKTt0aGlzLnZhbHVlTWluPXRoaXMuZGF0YU1pbjt0aGlzLnZhbHVlTWF4PXRoaXMuZGF0YU1heDtnLnByb3RvdHlwZS5nZXRFeHRyZW1lcy5jYWxsKHRoaXMpfX0pLGIuZXh0ZW5kKHtoYWxvUGF0aDpmdW5jdGlvbihiKXtpZighYilyZXR1cm5bXTt2YXIgYz10aGlzLnNoYXBlQXJncztyZXR1cm5bXCJNXCIsYy54LWIsYy55LWIsXCJMXCIsYy54LWIsYy55K2MuaGVpZ2h0K2IsYy54K2Mud2lkdGgrYixjLnkrYy5oZWlnaHQrYixjLngrYy53aWR0aCtiLGMueS1iLFwiWlwiXX19LGspKX0pKGspfSk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1oZWF0bWFwLmpzLm1hcFxuIiwiLypcbiBIaWdoY2hhcnRzIEpTIHY2LjIuMCAoMjAxOC0xMC0xNylcblxuIChjKSAyMDE0IEhpZ2hzb2Z0IEFTXG4gQXV0aG9yczogSm9uIEFyaWxkIE55Z2FyZCAvIE95c3RlaW4gTW9zZW5nXG5cbiBMaWNlbnNlOiB3d3cuaGlnaGNoYXJ0cy5jb20vbGljZW5zZVxuKi9cbihmdW5jdGlvbih2KXtcIm9iamVjdFwiPT09dHlwZW9mIG1vZHVsZSYmbW9kdWxlLmV4cG9ydHM/bW9kdWxlLmV4cG9ydHM9djpcImZ1bmN0aW9uXCI9PT10eXBlb2YgZGVmaW5lJiZkZWZpbmUuYW1kP2RlZmluZShmdW5jdGlvbigpe3JldHVybiB2fSk6dihIaWdoY2hhcnRzKX0pKGZ1bmN0aW9uKHYpe3ZhciBIPWZ1bmN0aW9uKGIpe3ZhciB2PWIuZWFjaCxCPWIuZXh0ZW5kLEU9Yi5pc0FycmF5LHQ9Yi5pc09iamVjdCxwPWIuaXNOdW1iZXIsRz1iLm1lcmdlLHo9Yi5waWNrLGw9Yi5yZWR1Y2U7cmV0dXJue2dldENvbG9yOmZ1bmN0aW9uKG4sbSl7dmFyIHE9bS5pbmRleCxmPW0ubWFwT3B0aW9uc1RvTGV2ZWwsbD1tLnBhcmVudENvbG9yLHk9bS5wYXJlbnRDb2xvckluZGV4LEY9bS5zZXJpZXMsZD1tLmNvbG9ycyxBPW0uc2libGluZ3Mscj1GLnBvaW50cyx4LHQscCxDO2lmKG4pe3I9cltuLmldO249ZltuLmxldmVsXXx8e307aWYoeD1yJiZuLmNvbG9yQnlQb2ludClwPXIuaW5kZXglKGQ/XG5kLmxlbmd0aDpGLmNoYXJ0Lm9wdGlvbnMuY2hhcnQuY29sb3JDb3VudCksdD1kJiZkW3BdO2Q9ciYmci5vcHRpb25zLmNvbG9yO3g9biYmbi5jb2xvcjtpZihmPWwpZj0oZj1uJiZuLmNvbG9yVmFyaWF0aW9uKSYmXCJicmlnaHRuZXNzXCI9PT1mLmtleT9iLmNvbG9yKGwpLmJyaWdodGVuKHEvQSpmLnRvKS5nZXQoKTpsO3g9eihkLHgsdCxmLEYuY29sb3IpO0M9eihyJiZyLm9wdGlvbnMuY29sb3JJbmRleCxuJiZuLmNvbG9ySW5kZXgscCx5LG0uY29sb3JJbmRleCl9cmV0dXJue2NvbG9yOngsY29sb3JJbmRleDpDfX0sZ2V0TGV2ZWxPcHRpb25zOmZ1bmN0aW9uKGIpe3ZhciBtPW51bGwscSxmLG4seTtpZih0KGIpKWZvcihtPXt9LG49cChiLmZyb20pP2IuZnJvbToxLHk9Yi5sZXZlbHMsZj17fSxxPXQoYi5kZWZhdWx0cyk/Yi5kZWZhdWx0czp7fSxFKHkpJiYoZj1sKHksZnVuY3Rpb24oYixkKXt2YXIgZixtO3QoZCkmJnAoZC5sZXZlbCkmJihtPUcoe30sZCksZj1cImJvb2xlYW5cIj09PVxudHlwZW9mIG0ubGV2ZWxJc0NvbnN0YW50P20ubGV2ZWxJc0NvbnN0YW50OnEubGV2ZWxJc0NvbnN0YW50LGRlbGV0ZSBtLmxldmVsSXNDb25zdGFudCxkZWxldGUgbS5sZXZlbCxkPWQubGV2ZWwrKGY/MDpuLTEpLHQoYltkXSk/QihiW2RdLG0pOmJbZF09bSk7cmV0dXJuIGJ9LHt9KSkseT1wKGIudG8pP2IudG86MSxiPTA7Yjw9eTtiKyspbVtiXT1HKHt9LHEsdChmW2JdKT9mW2JdOnt9KTtyZXR1cm4gbX0sc2V0VHJlZVZhbHVlczpmdW5jdGlvbiBtKGIsZil7dmFyIGw9Zi5iZWZvcmUscT1mLmlkUm9vdCx0PWYubWFwSWRUb05vZGVbcV0sZD1mLnBvaW50c1tiLmldLHA9ZCYmZC5vcHRpb25zfHx7fSxyPTAseD1bXTtCKGIse2xldmVsRHluYW1pYzpiLmxldmVsLSgoXCJib29sZWFuXCI9PT10eXBlb2YgZi5sZXZlbElzQ29uc3RhbnQ/Zi5sZXZlbElzQ29uc3RhbnQ6MSk/MDp0LmxldmVsKSxuYW1lOnooZCYmZC5uYW1lLFwiXCIpLHZpc2libGU6cT09PWIuaWR8fChcImJvb2xlYW5cIj09PXR5cGVvZiBmLnZpc2libGU/XG5mLnZpc2libGU6ITEpfSk7XCJmdW5jdGlvblwiPT09dHlwZW9mIGwmJihiPWwoYixmKSk7dihiLmNoaWxkcmVuLGZ1bmN0aW9uKGQsbCl7dmFyIHE9Qih7fSxmKTtCKHEse2luZGV4Omwsc2libGluZ3M6Yi5jaGlsZHJlbi5sZW5ndGgsdmlzaWJsZTpiLnZpc2libGV9KTtkPW0oZCxxKTt4LnB1c2goZCk7ZC52aXNpYmxlJiYocis9ZC52YWwpfSk7Yi52aXNpYmxlPTA8cnx8Yi52aXNpYmxlO2w9eihwLnZhbHVlLHIpO0IoYix7Y2hpbGRyZW46eCxjaGlsZHJlblRvdGFsOnIsaXNMZWFmOmIudmlzaWJsZSYmIXIsdmFsOmx9KTtyZXR1cm4gYn0sdXBkYXRlUm9vdElkOmZ1bmN0aW9uKGIpe3ZhciBsO3QoYikmJihsPXQoYi5vcHRpb25zKT9iLm9wdGlvbnM6e30sbD16KGIucm9vdE5vZGUsbC5yb290SWQsXCJcIiksdChiLnVzZXJPcHRpb25zKSYmKGIudXNlck9wdGlvbnMucm9vdElkPWwpLGIucm9vdE5vZGU9bCk7cmV0dXJuIGx9fX0odik7KGZ1bmN0aW9uKGIsdil7dmFyIEI9Yi5zZXJpZXNUeXBlLFxuRT1iLnNlcmllc1R5cGVzLHQ9Yi5tYXAscD1iLm1lcmdlLEc9Yi5leHRlbmQsej1iLm5vb3AsbD1iLmVhY2gsbj12LmdldENvbG9yLG09di5nZXRMZXZlbE9wdGlvbnMscT1iLmdyZXAsZj1iLmlzQXJyYXksSD1iLmlzTnVtYmVyLHk9Yi5pc09iamVjdCxGPWIuaXNTdHJpbmcsZD1iLnBpY2ssQT1iLlNlcmllcyxyPWIuc3RhYmxlU29ydCx4PWIuQ29sb3IsSj1mdW5jdGlvbihhLGMsZSl7ZT1lfHx0aGlzO2Iub2JqZWN0RWFjaChhLGZ1bmN0aW9uKGIsZyl7Yy5jYWxsKGUsYixnLGEpfSl9LEk9Yi5yZWR1Y2UsQz1mdW5jdGlvbihhLGMsZSl7ZT1lfHx0aGlzO2E9Yy5jYWxsKGUsYSk7ITEhPT1hJiZDKGEsYyxlKX0sSz12LnVwZGF0ZVJvb3RJZDtCKFwidHJlZW1hcFwiLFwic2NhdHRlclwiLHtzaG93SW5MZWdlbmQ6ITEsbWFya2VyOiExLGNvbG9yQnlQb2ludDohMSxkYXRhTGFiZWxzOntlbmFibGVkOiEwLGRlZmVyOiExLHZlcnRpY2FsQWxpZ246XCJtaWRkbGVcIixmb3JtYXR0ZXI6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5wb2ludC5uYW1lfHxcbnRoaXMucG9pbnQuaWR9LGluc2lkZTohMH0sdG9vbHRpcDp7aGVhZGVyRm9ybWF0OlwiXCIscG9pbnRGb3JtYXQ6XCJcXHgzY2JcXHgzZXtwb2ludC5uYW1lfVxceDNjL2JcXHgzZToge3BvaW50LnZhbHVlfVxceDNjYnIvXFx4M2VcIn0saWdub3JlSGlkZGVuUG9pbnQ6ITAsbGF5b3V0QWxnb3JpdGhtOlwic2xpY2VBbmREaWNlXCIsbGF5b3V0U3RhcnRpbmdEaXJlY3Rpb246XCJ2ZXJ0aWNhbFwiLGFsdGVybmF0ZVN0YXJ0aW5nRGlyZWN0aW9uOiExLGxldmVsSXNDb25zdGFudDohMCxkcmlsbFVwQnV0dG9uOntwb3NpdGlvbjp7YWxpZ246XCJyaWdodFwiLHg6LTEwLHk6MTB9fSxib3JkZXJDb2xvcjpcIiNlNmU2ZTZcIixib3JkZXJXaWR0aDoxLG9wYWNpdHk6LjE1LHN0YXRlczp7aG92ZXI6e2JvcmRlckNvbG9yOlwiIzk5OTk5OVwiLGJyaWdodG5lc3M6RS5oZWF0bWFwPzA6LjEsaGFsbzohMSxvcGFjaXR5Oi43NSxzaGFkb3c6ITF9fX0se3BvaW50QXJyYXlNYXA6W1widmFsdWVcIl0sZGlyZWN0VG91Y2g6ITAsb3B0aW9uYWxBeGlzOlwiY29sb3JBeGlzXCIsXG5nZXRTeW1ib2w6eixwYXJhbGxlbEFycmF5czpbXCJ4XCIsXCJ5XCIsXCJ2YWx1ZVwiLFwiY29sb3JWYWx1ZVwiXSxjb2xvcktleTpcImNvbG9yVmFsdWVcIix0cmFja2VyR3JvdXBzOltcImdyb3VwXCIsXCJkYXRhTGFiZWxzR3JvdXBcIl0sZ2V0TGlzdE9mUGFyZW50czpmdW5jdGlvbihhLGMpe2E9ZihhKT9hOltdO3ZhciBlPWYoYyk/YzpbXTtjPUkoYSxmdW5jdGlvbihhLGMsZSl7Yz1kKGMucGFyZW50LFwiXCIpO3ZvaWQgMD09PWFbY10mJihhW2NdPVtdKTthW2NdLnB1c2goZSk7cmV0dXJuIGF9LHtcIlwiOltdfSk7SihjLGZ1bmN0aW9uKGEsYyxoKXtcIlwiIT09YyYmLTE9PT1iLmluQXJyYXkoYyxlKSYmKGwoYSxmdW5jdGlvbihhKXtoW1wiXCJdLnB1c2goYSl9KSxkZWxldGUgaFtjXSl9KTtyZXR1cm4gY30sZ2V0VHJlZTpmdW5jdGlvbigpe3ZhciBhPXQodGhpcy5kYXRhLGZ1bmN0aW9uKGEpe3JldHVybiBhLmlkfSksYT10aGlzLmdldExpc3RPZlBhcmVudHModGhpcy5kYXRhLGEpO3RoaXMubm9kZU1hcD1bXTtyZXR1cm4gdGhpcy5idWlsZE5vZGUoXCJcIixcbi0xLDAsYSxudWxsKX0saW5pdDpmdW5jdGlvbihhLGMpe3ZhciBlPWIuY29sb3JTZXJpZXNNaXhpbjtiLmNvbG9yU2VyaWVzTWl4aW4mJih0aGlzLnRyYW5zbGF0ZUNvbG9ycz1lLnRyYW5zbGF0ZUNvbG9ycyx0aGlzLmNvbG9yQXR0cmlicz1lLmNvbG9yQXR0cmlicyx0aGlzLmF4aXNUeXBlcz1lLmF4aXNUeXBlcyk7QS5wcm90b3R5cGUuaW5pdC5jYWxsKHRoaXMsYSxjKTt0aGlzLm9wdGlvbnMuYWxsb3dEcmlsbFRvTm9kZSYmYi5hZGRFdmVudCh0aGlzLFwiY2xpY2tcIix0aGlzLm9uQ2xpY2tEcmlsbFRvTm9kZSl9LGJ1aWxkTm9kZTpmdW5jdGlvbihhLGMsZSxiLGcpe3ZhciBoPXRoaXMsdz1bXSxrPWgucG9pbnRzW2NdLGQ9MCxmO2woYlthXXx8W10sZnVuY3Rpb24oYyl7Zj1oLmJ1aWxkTm9kZShoLnBvaW50c1tjXS5pZCxjLGUrMSxiLGEpO2Q9TWF0aC5tYXgoZi5oZWlnaHQrMSxkKTt3LnB1c2goZil9KTtjPXtpZDphLGk6YyxjaGlsZHJlbjp3LGhlaWdodDpkLGxldmVsOmUscGFyZW50OmcsXG52aXNpYmxlOiExfTtoLm5vZGVNYXBbYy5pZF09YztrJiYoay5ub2RlPWMpO3JldHVybiBjfSxzZXRUcmVlVmFsdWVzOmZ1bmN0aW9uKGEpe3ZhciBjPXRoaXMsZT1jLm9wdGlvbnMsYj1jLm5vZGVNYXBbYy5yb290Tm9kZV0sZT1cImJvb2xlYW5cIj09PXR5cGVvZiBlLmxldmVsSXNDb25zdGFudD9lLmxldmVsSXNDb25zdGFudDohMCxnPTAsaD1bXSxELGs9Yy5wb2ludHNbYS5pXTtsKGEuY2hpbGRyZW4sZnVuY3Rpb24oYSl7YT1jLnNldFRyZWVWYWx1ZXMoYSk7aC5wdXNoKGEpO2EuaWdub3JlfHwoZys9YS52YWwpfSk7cihoLGZ1bmN0aW9uKGEsYyl7cmV0dXJuIGEuc29ydEluZGV4LWMuc29ydEluZGV4fSk7RD1kKGsmJmsub3B0aW9ucy52YWx1ZSxnKTtrJiYoay52YWx1ZT1EKTtHKGEse2NoaWxkcmVuOmgsY2hpbGRyZW5Ub3RhbDpnLGlnbm9yZTohKGQoayYmay52aXNpYmxlLCEwKSYmMDxEKSxpc0xlYWY6YS52aXNpYmxlJiYhZyxsZXZlbER5bmFtaWM6YS5sZXZlbC0oZT8wOmIubGV2ZWwpLFxubmFtZTpkKGsmJmsubmFtZSxcIlwiKSxzb3J0SW5kZXg6ZChrJiZrLnNvcnRJbmRleCwtRCksdmFsOkR9KTtyZXR1cm4gYX0sY2FsY3VsYXRlQ2hpbGRyZW5BcmVhczpmdW5jdGlvbihhLGMpe3ZhciBlPXRoaXMsYj1lLm9wdGlvbnMsZz1lLm1hcE9wdGlvbnNUb0xldmVsW2EubGV2ZWwrMV0saD1kKGVbZyYmZy5sYXlvdXRBbGdvcml0aG1dJiZnLmxheW91dEFsZ29yaXRobSxiLmxheW91dEFsZ29yaXRobSksRD1iLmFsdGVybmF0ZVN0YXJ0aW5nRGlyZWN0aW9uLGs9W107YT1xKGEuY2hpbGRyZW4sZnVuY3Rpb24oYSl7cmV0dXJuIWEuaWdub3JlfSk7ZyYmZy5sYXlvdXRTdGFydGluZ0RpcmVjdGlvbiYmKGMuZGlyZWN0aW9uPVwidmVydGljYWxcIj09PWcubGF5b3V0U3RhcnRpbmdEaXJlY3Rpb24/MDoxKTtrPWVbaF0oYyxhKTtsKGEsZnVuY3Rpb24oYSxiKXtiPWtbYl07YS52YWx1ZXM9cChiLHt2YWw6YS5jaGlsZHJlblRvdGFsLGRpcmVjdGlvbjpEPzEtYy5kaXJlY3Rpb246Yy5kaXJlY3Rpb259KTtcbmEucG9pbnRWYWx1ZXM9cChiLHt4OmIueC9lLmF4aXNSYXRpbyx3aWR0aDpiLndpZHRoL2UuYXhpc1JhdGlvfSk7YS5jaGlsZHJlbi5sZW5ndGgmJmUuY2FsY3VsYXRlQ2hpbGRyZW5BcmVhcyhhLGEudmFsdWVzKX0pfSxzZXRQb2ludFZhbHVlczpmdW5jdGlvbigpe3ZhciBhPXRoaXMsYz1hLnhBeGlzLGU9YS55QXhpcztsKGEucG9pbnRzLGZ1bmN0aW9uKGIpe3ZhciBnPWIubm9kZSxoPWcucG9pbnRWYWx1ZXMsdyxrLGQ7ZD0oYS5wb2ludEF0dHJpYnMoYilbXCJzdHJva2Utd2lkdGhcIl18fDApJTIvMjtoJiZnLnZpc2libGU/KGc9TWF0aC5yb3VuZChjLnRyYW5zbGF0ZShoLngsMCwwLDAsMSkpLWQsdz1NYXRoLnJvdW5kKGMudHJhbnNsYXRlKGgueCtoLndpZHRoLDAsMCwwLDEpKS1kLGs9TWF0aC5yb3VuZChlLnRyYW5zbGF0ZShoLnksMCwwLDAsMSkpLWQsaD1NYXRoLnJvdW5kKGUudHJhbnNsYXRlKGgueStoLmhlaWdodCwwLDAsMCwxKSktZCxiLnNoYXBlVHlwZT1cInJlY3RcIixiLnNoYXBlQXJncz1cbnt4Ok1hdGgubWluKGcsdykseTpNYXRoLm1pbihrLGgpLHdpZHRoOk1hdGguYWJzKHctZyksaGVpZ2h0Ok1hdGguYWJzKGgtayl9LGIucGxvdFg9Yi5zaGFwZUFyZ3MueCtiLnNoYXBlQXJncy53aWR0aC8yLGIucGxvdFk9Yi5zaGFwZUFyZ3MueStiLnNoYXBlQXJncy5oZWlnaHQvMik6KGRlbGV0ZSBiLnBsb3RYLGRlbGV0ZSBiLnBsb3RZKX0pfSxzZXRDb2xvclJlY3Vyc2l2ZTpmdW5jdGlvbihhLGMsZSxiLGcpe3ZhciBoPXRoaXMsZD1oJiZoLmNoYXJ0LGQ9ZCYmZC5vcHRpb25zJiZkLm9wdGlvbnMuY29sb3JzLGs7aWYoYSl7az1uKGEse2NvbG9yczpkLGluZGV4OmIsbWFwT3B0aW9uc1RvTGV2ZWw6aC5tYXBPcHRpb25zVG9MZXZlbCxwYXJlbnRDb2xvcjpjLHBhcmVudENvbG9ySW5kZXg6ZSxzZXJpZXM6aCxzaWJsaW5nczpnfSk7aWYoYz1oLnBvaW50c1thLmldKWMuY29sb3I9ay5jb2xvcixjLmNvbG9ySW5kZXg9ay5jb2xvckluZGV4O2woYS5jaGlsZHJlbnx8W10sZnVuY3Rpb24oYyxcbmIpe2guc2V0Q29sb3JSZWN1cnNpdmUoYyxrLmNvbG9yLGsuY29sb3JJbmRleCxiLGEuY2hpbGRyZW4ubGVuZ3RoKX0pfX0sYWxnb3JpdGhtR3JvdXA6ZnVuY3Rpb24oYSxjLGIsZCl7dGhpcy5oZWlnaHQ9YTt0aGlzLndpZHRoPWM7dGhpcy5wbG90PWQ7dGhpcy5zdGFydERpcmVjdGlvbj10aGlzLmRpcmVjdGlvbj1iO3RoaXMubEg9dGhpcy5uSD10aGlzLmxXPXRoaXMublc9dGhpcy50b3RhbD0wO3RoaXMuZWxBcnI9W107dGhpcy5sUD17dG90YWw6MCxsSDowLG5IOjAsbFc6MCxuVzowLG5SOjAsbFI6MCxhc3BlY3RSYXRpbzpmdW5jdGlvbihhLGMpe3JldHVybiBNYXRoLm1heChhL2MsYy9hKX19O3RoaXMuYWRkRWxlbWVudD1mdW5jdGlvbihhKXt0aGlzLmxQLnRvdGFsPXRoaXMuZWxBcnJbdGhpcy5lbEFyci5sZW5ndGgtMV07dGhpcy50b3RhbCs9YTswPT09dGhpcy5kaXJlY3Rpb24/KHRoaXMubFc9dGhpcy5uVyx0aGlzLmxQLmxIPXRoaXMubFAudG90YWwvdGhpcy5sVyx0aGlzLmxQLmxSPVxudGhpcy5sUC5hc3BlY3RSYXRpbyh0aGlzLmxXLHRoaXMubFAubEgpLHRoaXMublc9dGhpcy50b3RhbC90aGlzLmhlaWdodCx0aGlzLmxQLm5IPXRoaXMubFAudG90YWwvdGhpcy5uVyx0aGlzLmxQLm5SPXRoaXMubFAuYXNwZWN0UmF0aW8odGhpcy5uVyx0aGlzLmxQLm5IKSk6KHRoaXMubEg9dGhpcy5uSCx0aGlzLmxQLmxXPXRoaXMubFAudG90YWwvdGhpcy5sSCx0aGlzLmxQLmxSPXRoaXMubFAuYXNwZWN0UmF0aW8odGhpcy5sUC5sVyx0aGlzLmxIKSx0aGlzLm5IPXRoaXMudG90YWwvdGhpcy53aWR0aCx0aGlzLmxQLm5XPXRoaXMubFAudG90YWwvdGhpcy5uSCx0aGlzLmxQLm5SPXRoaXMubFAuYXNwZWN0UmF0aW8odGhpcy5sUC5uVyx0aGlzLm5IKSk7dGhpcy5lbEFyci5wdXNoKGEpfTt0aGlzLnJlc2V0PWZ1bmN0aW9uKCl7dGhpcy5sVz10aGlzLm5XPTA7dGhpcy5lbEFycj1bXTt0aGlzLnRvdGFsPTB9fSxhbGdvcml0aG1DYWxjUG9pbnRzOmZ1bmN0aW9uKGEsYyxiLGQpe3ZhciBlLFxuaCx3LGssZj1iLmxXLG09Yi5sSCx1PWIucGxvdCxuLHI9MCx0PWIuZWxBcnIubGVuZ3RoLTE7Yz8oZj1iLm5XLG09Yi5uSCk6bj1iLmVsQXJyW2IuZWxBcnIubGVuZ3RoLTFdO2woYi5lbEFycixmdW5jdGlvbihhKXtpZihjfHxyPHQpMD09PWIuZGlyZWN0aW9uPyhlPXUueCxoPXUueSx3PWYsaz1hL3cpOihlPXUueCxoPXUueSxrPW0sdz1hL2spLGQucHVzaCh7eDplLHk6aCx3aWR0aDp3LGhlaWdodDprfSksMD09PWIuZGlyZWN0aW9uP3UueSs9azp1LngrPXc7cis9MX0pO2IucmVzZXQoKTswPT09Yi5kaXJlY3Rpb24/Yi53aWR0aC09ZjpiLmhlaWdodC09bTt1Lnk9dS5wYXJlbnQueSsodS5wYXJlbnQuaGVpZ2h0LWIuaGVpZ2h0KTt1Lng9dS5wYXJlbnQueCsodS5wYXJlbnQud2lkdGgtYi53aWR0aCk7YSYmKGIuZGlyZWN0aW9uPTEtYi5kaXJlY3Rpb24pO2N8fGIuYWRkRWxlbWVudChuKX0sYWxnb3JpdGhtTG93QXNwZWN0UmF0aW86ZnVuY3Rpb24oYSxiLGUpe3ZhciBjPVtdLGQ9XG50aGlzLGgsZj17eDpiLngseTpiLnkscGFyZW50OmJ9LGs9MCxtPWUubGVuZ3RoLTEsbj1uZXcgdGhpcy5hbGdvcml0aG1Hcm91cChiLmhlaWdodCxiLndpZHRoLGIuZGlyZWN0aW9uLGYpO2woZSxmdW5jdGlvbihlKXtoPWUudmFsL2IudmFsKmIuaGVpZ2h0KmIud2lkdGg7bi5hZGRFbGVtZW50KGgpO24ubFAublI+bi5sUC5sUiYmZC5hbGdvcml0aG1DYWxjUG9pbnRzKGEsITEsbixjLGYpO2s9PT1tJiZkLmFsZ29yaXRobUNhbGNQb2ludHMoYSwhMCxuLGMsZik7ays9MX0pO3JldHVybiBjfSxhbGdvcml0aG1GaWxsOmZ1bmN0aW9uKGEsYixlKXt2YXIgYz1bXSxkLGg9Yi5kaXJlY3Rpb24sZj1iLngsaz1iLnksbT1iLndpZHRoLG49Yi5oZWlnaHQscix0LHAscTtsKGUsZnVuY3Rpb24oZSl7ZD1lLnZhbC9iLnZhbCpiLmhlaWdodCpiLndpZHRoO3I9Zjt0PWs7MD09PWg/KHE9bixwPWQvcSxtLT1wLGYrPXApOihwPW0scT1kL3Asbi09cSxrKz1xKTtjLnB1c2goe3g6cix5OnQsd2lkdGg6cCxcbmhlaWdodDpxfSk7YSYmKGg9MS1oKX0pO3JldHVybiBjfSxzdHJpcDpmdW5jdGlvbihhLGIpe3JldHVybiB0aGlzLmFsZ29yaXRobUxvd0FzcGVjdFJhdGlvKCExLGEsYil9LHNxdWFyaWZpZWQ6ZnVuY3Rpb24oYSxiKXtyZXR1cm4gdGhpcy5hbGdvcml0aG1Mb3dBc3BlY3RSYXRpbyghMCxhLGIpfSxzbGljZUFuZERpY2U6ZnVuY3Rpb24oYSxiKXtyZXR1cm4gdGhpcy5hbGdvcml0aG1GaWxsKCEwLGEsYil9LHN0cmlwZXM6ZnVuY3Rpb24oYSxiKXtyZXR1cm4gdGhpcy5hbGdvcml0aG1GaWxsKCExLGEsYil9LHRyYW5zbGF0ZTpmdW5jdGlvbigpe3ZhciBhPXRoaXMsYj1hLm9wdGlvbnMsZT1LKGEpLGQsZztBLnByb3RvdHlwZS50cmFuc2xhdGUuY2FsbChhKTtnPWEudHJlZT1hLmdldFRyZWUoKTtkPWEubm9kZU1hcFtlXTthLm1hcE9wdGlvbnNUb0xldmVsPW0oe2Zyb206ZC5sZXZlbCsxLGxldmVsczpiLmxldmVscyx0bzpnLmhlaWdodCxkZWZhdWx0czp7bGV2ZWxJc0NvbnN0YW50OmEub3B0aW9ucy5sZXZlbElzQ29uc3RhbnQsXG5jb2xvckJ5UG9pbnQ6Yi5jb2xvckJ5UG9pbnR9fSk7XCJcIj09PWV8fGQmJmQuY2hpbGRyZW4ubGVuZ3RofHwoYS5kcmlsbFRvTm9kZShcIlwiLCExKSxlPWEucm9vdE5vZGUsZD1hLm5vZGVNYXBbZV0pO0MoYS5ub2RlTWFwW2Eucm9vdE5vZGVdLGZ1bmN0aW9uKGIpe3ZhciBjPSExLGU9Yi5wYXJlbnQ7Yi52aXNpYmxlPSEwO2lmKGV8fFwiXCI9PT1lKWM9YS5ub2RlTWFwW2VdO3JldHVybiBjfSk7QyhhLm5vZGVNYXBbYS5yb290Tm9kZV0uY2hpbGRyZW4sZnVuY3Rpb24oYSl7dmFyIGI9ITE7bChhLGZ1bmN0aW9uKGEpe2EudmlzaWJsZT0hMDthLmNoaWxkcmVuLmxlbmd0aCYmKGI9KGJ8fFtdKS5jb25jYXQoYS5jaGlsZHJlbikpfSk7cmV0dXJuIGJ9KTthLnNldFRyZWVWYWx1ZXMoZyk7YS5heGlzUmF0aW89YS54QXhpcy5sZW4vYS55QXhpcy5sZW47YS5ub2RlTWFwW1wiXCJdLnBvaW50VmFsdWVzPWU9e3g6MCx5OjAsd2lkdGg6MTAwLGhlaWdodDoxMDB9O2Eubm9kZU1hcFtcIlwiXS52YWx1ZXM9XG5lPXAoZSx7d2lkdGg6ZS53aWR0aCphLmF4aXNSYXRpbyxkaXJlY3Rpb246XCJ2ZXJ0aWNhbFwiPT09Yi5sYXlvdXRTdGFydGluZ0RpcmVjdGlvbj8wOjEsdmFsOmcudmFsfSk7YS5jYWxjdWxhdGVDaGlsZHJlbkFyZWFzKGcsZSk7YS5jb2xvckF4aXM/YS50cmFuc2xhdGVDb2xvcnMoKTpiLmNvbG9yQnlQb2ludHx8YS5zZXRDb2xvclJlY3Vyc2l2ZShhLnRyZWUpO2IuYWxsb3dEcmlsbFRvTm9kZSYmKGI9ZC5wb2ludFZhbHVlcyxhLnhBeGlzLnNldEV4dHJlbWVzKGIueCxiLngrYi53aWR0aCwhMSksYS55QXhpcy5zZXRFeHRyZW1lcyhiLnksYi55K2IuaGVpZ2h0LCExKSxhLnhBeGlzLnNldFNjYWxlKCksYS55QXhpcy5zZXRTY2FsZSgpKTthLnNldFBvaW50VmFsdWVzKCl9LGRyYXdEYXRhTGFiZWxzOmZ1bmN0aW9uKCl7dmFyIGE9dGhpcyxiPWEubWFwT3B0aW9uc1RvTGV2ZWwsZT1xKGEucG9pbnRzLGZ1bmN0aW9uKGEpe3JldHVybiBhLm5vZGUudmlzaWJsZX0pLGQsZztsKGUsZnVuY3Rpb24oYyl7Zz1cbmJbYy5ub2RlLmxldmVsXTtkPXtzdHlsZTp7fX07Yy5ub2RlLmlzTGVhZnx8KGQuZW5hYmxlZD0hMSk7ZyYmZy5kYXRhTGFiZWxzJiYoZD1wKGQsZy5kYXRhTGFiZWxzKSxhLl9oYXNQb2ludExhYmVscz0hMCk7Yy5zaGFwZUFyZ3MmJihkLnN0eWxlLndpZHRoPWMuc2hhcGVBcmdzLndpZHRoLGMuZGF0YUxhYmVsJiZjLmRhdGFMYWJlbC5jc3Moe3dpZHRoOmMuc2hhcGVBcmdzLndpZHRoK1wicHhcIn0pKTtjLmRsT3B0aW9ucz1wKGQsYy5vcHRpb25zLmRhdGFMYWJlbHMpfSk7QS5wcm90b3R5cGUuZHJhd0RhdGFMYWJlbHMuY2FsbCh0aGlzKX0sYWxpZ25EYXRhTGFiZWw6ZnVuY3Rpb24oYSl7RS5jb2x1bW4ucHJvdG90eXBlLmFsaWduRGF0YUxhYmVsLmFwcGx5KHRoaXMsYXJndW1lbnRzKTthLmRhdGFMYWJlbCYmYS5kYXRhTGFiZWwuYXR0cih7ekluZGV4OihhLm5vZGUuekluZGV4fHwwKSsxfSl9LHBvaW50QXR0cmliczpmdW5jdGlvbihhLGIpe3ZhciBjPXkodGhpcy5tYXBPcHRpb25zVG9MZXZlbCk/XG50aGlzLm1hcE9wdGlvbnNUb0xldmVsOnt9LGY9YSYmY1thLm5vZGUubGV2ZWxdfHx7fSxjPXRoaXMub3B0aW9ucyxnPWImJmMuc3RhdGVzW2JdfHx7fSxoPWEmJmEuZ2V0Q2xhc3NOYW1lKCl8fFwiXCI7YT17c3Ryb2tlOmEmJmEuYm9yZGVyQ29sb3J8fGYuYm9yZGVyQ29sb3J8fGcuYm9yZGVyQ29sb3J8fGMuYm9yZGVyQ29sb3IsXCJzdHJva2Utd2lkdGhcIjpkKGEmJmEuYm9yZGVyV2lkdGgsZi5ib3JkZXJXaWR0aCxnLmJvcmRlcldpZHRoLGMuYm9yZGVyV2lkdGgpLGRhc2hzdHlsZTphJiZhLmJvcmRlckRhc2hTdHlsZXx8Zi5ib3JkZXJEYXNoU3R5bGV8fGcuYm9yZGVyRGFzaFN0eWxlfHxjLmJvcmRlckRhc2hTdHlsZSxmaWxsOmEmJmEuY29sb3J8fHRoaXMuY29sb3J9Oy0xIT09aC5pbmRleE9mKFwiaGlnaGNoYXJ0cy1hYm92ZS1sZXZlbFwiKT8oYS5maWxsPVwibm9uZVwiLGFbXCJzdHJva2Utd2lkdGhcIl09MCk6LTEhPT1oLmluZGV4T2YoXCJoaWdoY2hhcnRzLWludGVybmFsLW5vZGUtaW50ZXJhY3RpdmVcIik/XG4oYj1kKGcub3BhY2l0eSxjLm9wYWNpdHkpLGEuZmlsbD14KGEuZmlsbCkuc2V0T3BhY2l0eShiKS5nZXQoKSxhLmN1cnNvcj1cInBvaW50ZXJcIik6LTEhPT1oLmluZGV4T2YoXCJoaWdoY2hhcnRzLWludGVybmFsLW5vZGVcIik/YS5maWxsPVwibm9uZVwiOmImJihhLmZpbGw9eChhLmZpbGwpLmJyaWdodGVuKGcuYnJpZ2h0bmVzcykuZ2V0KCkpO3JldHVybiBhfSxkcmF3UG9pbnRzOmZ1bmN0aW9uKCl7dmFyIGE9dGhpcyxiPXEoYS5wb2ludHMsZnVuY3Rpb24oYSl7cmV0dXJuIGEubm9kZS52aXNpYmxlfSk7bChiLGZ1bmN0aW9uKGIpe3ZhciBjPVwibGV2ZWwtZ3JvdXAtXCIrYi5ub2RlLmxldmVsRHluYW1pYzthW2NdfHwoYVtjXT1hLmNoYXJ0LnJlbmRlcmVyLmcoYykuYXR0cih7ekluZGV4OjFFMy1iLm5vZGUubGV2ZWxEeW5hbWljfSkuYWRkKGEuZ3JvdXApKTtiLmdyb3VwPWFbY119KTtFLmNvbHVtbi5wcm90b3R5cGUuZHJhd1BvaW50cy5jYWxsKHRoaXMpO2Eub3B0aW9ucy5hbGxvd0RyaWxsVG9Ob2RlJiZcbmwoYixmdW5jdGlvbihiKXtiLmdyYXBoaWMmJihiLmRyaWxsSWQ9YS5vcHRpb25zLmludGVyYWN0QnlMZWFmP2EuZHJpbGxUb0J5TGVhZihiKTphLmRyaWxsVG9CeUdyb3VwKGIpKX0pfSxvbkNsaWNrRHJpbGxUb05vZGU6ZnVuY3Rpb24oYSl7dmFyIGI9KGE9YS5wb2ludCkmJmEuZHJpbGxJZDtGKGIpJiYoYS5zZXRTdGF0ZShcIlwiKSx0aGlzLmRyaWxsVG9Ob2RlKGIpKX0sZHJpbGxUb0J5R3JvdXA6ZnVuY3Rpb24oYSl7dmFyIGI9ITE7MSE9PWEubm9kZS5sZXZlbC10aGlzLm5vZGVNYXBbdGhpcy5yb290Tm9kZV0ubGV2ZWx8fGEubm9kZS5pc0xlYWZ8fChiPWEuaWQpO3JldHVybiBifSxkcmlsbFRvQnlMZWFmOmZ1bmN0aW9uKGEpe3ZhciBiPSExO2lmKGEubm9kZS5wYXJlbnQhPT10aGlzLnJvb3ROb2RlJiZhLm5vZGUuaXNMZWFmKWZvcihhPWEubm9kZTshYjspYT10aGlzLm5vZGVNYXBbYS5wYXJlbnRdLGEucGFyZW50PT09dGhpcy5yb290Tm9kZSYmKGI9YS5pZCk7cmV0dXJuIGJ9LFxuZHJpbGxVcDpmdW5jdGlvbigpe3ZhciBhPXRoaXMubm9kZU1hcFt0aGlzLnJvb3ROb2RlXTthJiZGKGEucGFyZW50KSYmdGhpcy5kcmlsbFRvTm9kZShhLnBhcmVudCl9LGRyaWxsVG9Ob2RlOmZ1bmN0aW9uKGEsYil7dmFyIGM9dGhpcy5ub2RlTWFwW2FdO3RoaXMuaWRQcmV2aW91c1Jvb3Q9dGhpcy5yb290Tm9kZTt0aGlzLnJvb3ROb2RlPWE7XCJcIj09PWE/dGhpcy5kcmlsbFVwQnV0dG9uPXRoaXMuZHJpbGxVcEJ1dHRvbi5kZXN0cm95KCk6dGhpcy5zaG93RHJpbGxVcEJ1dHRvbihjJiZjLm5hbWV8fGEpO3RoaXMuaXNEaXJ0eT0hMDtkKGIsITApJiZ0aGlzLmNoYXJ0LnJlZHJhdygpfSxzaG93RHJpbGxVcEJ1dHRvbjpmdW5jdGlvbihhKXt2YXIgYj10aGlzO2E9YXx8XCJcXHgzYyBCYWNrXCI7dmFyIGQ9Yi5vcHRpb25zLmRyaWxsVXBCdXR0b24sZixnO2QudGV4dCYmKGE9ZC50ZXh0KTt0aGlzLmRyaWxsVXBCdXR0b24/KHRoaXMuZHJpbGxVcEJ1dHRvbi5wbGFjZWQ9ITEsdGhpcy5kcmlsbFVwQnV0dG9uLmF0dHIoe3RleHQ6YX0pLmFsaWduKCkpOlxuKGc9KGY9ZC50aGVtZSkmJmYuc3RhdGVzLHRoaXMuZHJpbGxVcEJ1dHRvbj10aGlzLmNoYXJ0LnJlbmRlcmVyLmJ1dHRvbihhLG51bGwsbnVsbCxmdW5jdGlvbigpe2IuZHJpbGxVcCgpfSxmLGcmJmcuaG92ZXIsZyYmZy5zZWxlY3QpLmFkZENsYXNzKFwiaGlnaGNoYXJ0cy1kcmlsbHVwLWJ1dHRvblwiKS5hdHRyKHthbGlnbjpkLnBvc2l0aW9uLmFsaWduLHpJbmRleDo3fSkuYWRkKCkuYWxpZ24oZC5wb3NpdGlvbiwhMSxkLnJlbGF0aXZlVG98fFwicGxvdEJveFwiKSl9LGJ1aWxkS0RUcmVlOnosZHJhd0xlZ2VuZFN5bWJvbDpiLkxlZ2VuZFN5bWJvbE1peGluLmRyYXdSZWN0YW5nbGUsZ2V0RXh0cmVtZXM6ZnVuY3Rpb24oKXtBLnByb3RvdHlwZS5nZXRFeHRyZW1lcy5jYWxsKHRoaXMsdGhpcy5jb2xvclZhbHVlRGF0YSk7dGhpcy52YWx1ZU1pbj10aGlzLmRhdGFNaW47dGhpcy52YWx1ZU1heD10aGlzLmRhdGFNYXg7QS5wcm90b3R5cGUuZ2V0RXh0cmVtZXMuY2FsbCh0aGlzKX0sZ2V0RXh0cmVtZXNGcm9tQWxsOiEwLFxuYmluZEF4ZXM6ZnVuY3Rpb24oKXt2YXIgYT17ZW5kT25UaWNrOiExLGdyaWRMaW5lV2lkdGg6MCxsaW5lV2lkdGg6MCxtaW46MCxkYXRhTWluOjAsbWluUGFkZGluZzowLG1heDoxMDAsZGF0YU1heDoxMDAsbWF4UGFkZGluZzowLHN0YXJ0T25UaWNrOiExLHRpdGxlOm51bGwsdGlja1Bvc2l0aW9uczpbXX07QS5wcm90b3R5cGUuYmluZEF4ZXMuY2FsbCh0aGlzKTtiLmV4dGVuZCh0aGlzLnlBeGlzLm9wdGlvbnMsYSk7Yi5leHRlbmQodGhpcy54QXhpcy5vcHRpb25zLGEpfSx1dGlsczp7cmVjdXJzaXZlOkMscmVkdWNlOkl9fSx7Z2V0Q2xhc3NOYW1lOmZ1bmN0aW9uKCl7dmFyIGE9Yi5Qb2ludC5wcm90b3R5cGUuZ2V0Q2xhc3NOYW1lLmNhbGwodGhpcyksYz10aGlzLnNlcmllcyxlPWMub3B0aW9uczt0aGlzLm5vZGUubGV2ZWw8PWMubm9kZU1hcFtjLnJvb3ROb2RlXS5sZXZlbD9hKz1cIiBoaWdoY2hhcnRzLWFib3ZlLWxldmVsXCI6dGhpcy5ub2RlLmlzTGVhZnx8ZChlLmludGVyYWN0QnlMZWFmLFxuIWUuYWxsb3dEcmlsbFRvTm9kZSk/dGhpcy5ub2RlLmlzTGVhZnx8KGErPVwiIGhpZ2hjaGFydHMtaW50ZXJuYWwtbm9kZVwiKTphKz1cIiBoaWdoY2hhcnRzLWludGVybmFsLW5vZGUtaW50ZXJhY3RpdmVcIjtyZXR1cm4gYX0saXNWYWxpZDpmdW5jdGlvbigpe3JldHVybiB0aGlzLmlkfHxIKHRoaXMudmFsdWUpfSxzZXRTdGF0ZTpmdW5jdGlvbihhKXtiLlBvaW50LnByb3RvdHlwZS5zZXRTdGF0ZS5jYWxsKHRoaXMsYSk7dGhpcy5ncmFwaGljJiZ0aGlzLmdyYXBoaWMuYXR0cih7ekluZGV4OlwiaG92ZXJcIj09PWE/MTowfSl9LHNldFZpc2libGU6RS5waWUucHJvdG90eXBlLnBvaW50Q2xhc3MucHJvdG90eXBlLnNldFZpc2libGV9KX0pKHYsSCl9KTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXRyZWVtYXAuanMubWFwXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHtcblx0Y29tcGFyZVR3b1N0cmluZ3MsXG5cdGZpbmRCZXN0TWF0Y2hcbn07XG5cbmZ1bmN0aW9uIGNvbXBhcmVUd29TdHJpbmdzIChzdHIxLCBzdHIyKSB7XG5cdGlmICghc3RyMS5sZW5ndGggJiYgIXN0cjIubGVuZ3RoKSByZXR1cm4gMTsgICAgICAgICAgICAgICAgICAgIC8vIGlmIGJvdGggYXJlIGVtcHR5IHN0cmluZ3Ncblx0aWYgKCFzdHIxLmxlbmd0aCB8fCAhc3RyMi5sZW5ndGgpIHJldHVybiAwOyAgICAgICAgICAgICAgICAgICAgLy8gaWYgb25seSBvbmUgaXMgZW1wdHkgc3RyaW5nXG5cdGlmIChzdHIxLnRvVXBwZXJDYXNlKCkgPT09IHN0cjIudG9VcHBlckNhc2UoKSkgcmV0dXJuIDE7ICAgICAgIC8vIGlkZW50aWNhbFxuXHRpZiAoc3RyMS5sZW5ndGggPT09IDEgJiYgc3RyMi5sZW5ndGggPT09IDEpIHJldHVybiAwOyAgICAgICAgICAvLyBib3RoIGFyZSAxLWxldHRlciBzdHJpbmdzXG5cblx0Y29uc3QgcGFpcnMxID0gd29yZExldHRlclBhaXJzKHN0cjEpO1xuXHRjb25zdCBwYWlyczIgPSB3b3JkTGV0dGVyUGFpcnMoc3RyMik7XG5cdGNvbnN0IHVuaW9uID0gcGFpcnMxLmxlbmd0aCArIHBhaXJzMi5sZW5ndGg7XG5cdGxldCBpbnRlcnNlY3Rpb24gPSAwO1xuXHRwYWlyczEuZm9yRWFjaChwYWlyMSA9PiB7XG5cdFx0Zm9yIChsZXQgaSA9IDAsIHBhaXIyOyBwYWlyMiA9IHBhaXJzMltpXTsgaSsrKSB7XG5cdFx0XHRpZiAocGFpcjEgIT09IHBhaXIyKSBjb250aW51ZTtcblx0XHRcdGludGVyc2VjdGlvbisrO1xuXHRcdFx0cGFpcnMyLnNwbGljZShpLCAxKTtcblx0XHRcdGJyZWFrO1xuXHRcdH1cblx0fSk7XG5cdHJldHVybiBpbnRlcnNlY3Rpb24gKiAyIC8gdW5pb247XG59XG5cbmZ1bmN0aW9uIGZpbmRCZXN0TWF0Y2ggKG1haW5TdHJpbmcsIHRhcmdldFN0cmluZ3MpIHtcblx0aWYgKCFhcmVBcmdzVmFsaWQobWFpblN0cmluZywgdGFyZ2V0U3RyaW5ncykpIHRocm93IG5ldyBFcnJvcignQmFkIGFyZ3VtZW50czogRmlyc3QgYXJndW1lbnQgc2hvdWxkIGJlIGEgc3RyaW5nLCBzZWNvbmQgc2hvdWxkIGJlIGFuIGFycmF5IG9mIHN0cmluZ3MnKTtcblx0Y29uc3QgcmF0aW5ncyA9IHRhcmdldFN0cmluZ3MubWFwKHRhcmdldCA9PiAoeyB0YXJnZXQsIHJhdGluZzogY29tcGFyZVR3b1N0cmluZ3MobWFpblN0cmluZywgdGFyZ2V0KSB9KSk7XG5cdGNvbnN0IGJlc3RNYXRjaCA9IEFycmF5LmZyb20ocmF0aW5ncykuc29ydCgoYSwgYikgPT4gYi5yYXRpbmcgLSBhLnJhdGluZylbMF07XG5cdHJldHVybiB7IHJhdGluZ3MsIGJlc3RNYXRjaCB9O1xufVxuXG5mdW5jdGlvbiBmbGF0dGVuRGVlcCAoYXJyKSB7XG5cdHJldHVybiBBcnJheS5pc0FycmF5KGFycikgPyBhcnIucmVkdWNlKChhLCBiKSA9PiBhLmNvbmNhdChmbGF0dGVuRGVlcChiKSkgLCBbXSkgOiBbYXJyXTtcbn1cblxuZnVuY3Rpb24gYXJlQXJnc1ZhbGlkIChtYWluU3RyaW5nLCB0YXJnZXRTdHJpbmdzKSB7XG5cdGlmICh0eXBlb2YgbWFpblN0cmluZyAhPT0gJ3N0cmluZycpIHJldHVybiBmYWxzZTtcblx0aWYgKCFBcnJheS5pc0FycmF5KHRhcmdldFN0cmluZ3MpKSByZXR1cm4gZmFsc2U7XG5cdGlmICghdGFyZ2V0U3RyaW5ncy5sZW5ndGgpIHJldHVybiBmYWxzZTtcblx0aWYgKHRhcmdldFN0cmluZ3MuZmluZChzID0+IHR5cGVvZiBzICE9PSAnc3RyaW5nJykpIHJldHVybiBmYWxzZTtcblx0cmV0dXJuIHRydWU7XG59XG5cbmZ1bmN0aW9uIGxldHRlclBhaXJzIChzdHIpIHtcblx0Y29uc3QgcGFpcnMgPSBbXTtcblx0Zm9yIChsZXQgaSA9IDAsIG1heCA9IHN0ci5sZW5ndGggLSAxOyBpIDwgbWF4OyBpKyspIHBhaXJzW2ldID0gc3RyLnN1YnN0cmluZyhpLCBpICsgMik7XG5cdHJldHVybiBwYWlycztcbn1cblxuZnVuY3Rpb24gd29yZExldHRlclBhaXJzIChzdHIpIHtcblx0Y29uc3QgcGFpcnMgPSBzdHIudG9VcHBlckNhc2UoKS5zcGxpdCgnICcpLm1hcChsZXR0ZXJQYWlycyk7XG5cdHJldHVybiBmbGF0dGVuRGVlcChwYWlycyk7XG59XG4iLCIvKipcbiAqIEEgc3BlY2lhbGl6ZWQgdmVyc2lvbiBvZiBgYmFzZUFnZ3JlZ2F0b3JgIGZvciBhcnJheXMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7QXJyYXl9IFthcnJheV0gVGhlIGFycmF5IHRvIGl0ZXJhdGUgb3Zlci5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IHNldHRlciBUaGUgZnVuY3Rpb24gdG8gc2V0IGBhY2N1bXVsYXRvcmAgdmFsdWVzLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gaXRlcmF0ZWUgVGhlIGl0ZXJhdGVlIHRvIHRyYW5zZm9ybSBrZXlzLlxuICogQHBhcmFtIHtPYmplY3R9IGFjY3VtdWxhdG9yIFRoZSBpbml0aWFsIGFnZ3JlZ2F0ZWQgb2JqZWN0LlxuICogQHJldHVybnMge0Z1bmN0aW9ufSBSZXR1cm5zIGBhY2N1bXVsYXRvcmAuXG4gKi9cbmZ1bmN0aW9uIGFycmF5QWdncmVnYXRvcihhcnJheSwgc2V0dGVyLCBpdGVyYXRlZSwgYWNjdW11bGF0b3IpIHtcbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICBsZW5ndGggPSBhcnJheSA9PSBudWxsID8gMCA6IGFycmF5Lmxlbmd0aDtcblxuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIHZhciB2YWx1ZSA9IGFycmF5W2luZGV4XTtcbiAgICBzZXR0ZXIoYWNjdW11bGF0b3IsIHZhbHVlLCBpdGVyYXRlZSh2YWx1ZSksIGFycmF5KTtcbiAgfVxuICByZXR1cm4gYWNjdW11bGF0b3I7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGFycmF5QWdncmVnYXRvcjtcbiIsImltcG9ydCBiYXNlRWFjaCBmcm9tICcuL19iYXNlRWFjaC5qcyc7XG5cbi8qKlxuICogQWdncmVnYXRlcyBlbGVtZW50cyBvZiBgY29sbGVjdGlvbmAgb24gYGFjY3VtdWxhdG9yYCB3aXRoIGtleXMgdHJhbnNmb3JtZWRcbiAqIGJ5IGBpdGVyYXRlZWAgYW5kIHZhbHVlcyBzZXQgYnkgYHNldHRlcmAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7QXJyYXl8T2JqZWN0fSBjb2xsZWN0aW9uIFRoZSBjb2xsZWN0aW9uIHRvIGl0ZXJhdGUgb3Zlci5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IHNldHRlciBUaGUgZnVuY3Rpb24gdG8gc2V0IGBhY2N1bXVsYXRvcmAgdmFsdWVzLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gaXRlcmF0ZWUgVGhlIGl0ZXJhdGVlIHRvIHRyYW5zZm9ybSBrZXlzLlxuICogQHBhcmFtIHtPYmplY3R9IGFjY3VtdWxhdG9yIFRoZSBpbml0aWFsIGFnZ3JlZ2F0ZWQgb2JqZWN0LlxuICogQHJldHVybnMge0Z1bmN0aW9ufSBSZXR1cm5zIGBhY2N1bXVsYXRvcmAuXG4gKi9cbmZ1bmN0aW9uIGJhc2VBZ2dyZWdhdG9yKGNvbGxlY3Rpb24sIHNldHRlciwgaXRlcmF0ZWUsIGFjY3VtdWxhdG9yKSB7XG4gIGJhc2VFYWNoKGNvbGxlY3Rpb24sIGZ1bmN0aW9uKHZhbHVlLCBrZXksIGNvbGxlY3Rpb24pIHtcbiAgICBzZXR0ZXIoYWNjdW11bGF0b3IsIHZhbHVlLCBpdGVyYXRlZSh2YWx1ZSksIGNvbGxlY3Rpb24pO1xuICB9KTtcbiAgcmV0dXJuIGFjY3VtdWxhdG9yO1xufVxuXG5leHBvcnQgZGVmYXVsdCBiYXNlQWdncmVnYXRvcjtcbiIsImltcG9ydCBiYXNlU3VtIGZyb20gJy4vX2Jhc2VTdW0uanMnO1xuXG4vKiogVXNlZCBhcyByZWZlcmVuY2VzIGZvciB2YXJpb3VzIGBOdW1iZXJgIGNvbnN0YW50cy4gKi9cbnZhciBOQU4gPSAwIC8gMDtcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5tZWFuYCBhbmQgYF8ubWVhbkJ5YCB3aXRob3V0IHN1cHBvcnQgZm9yXG4gKiBpdGVyYXRlZSBzaG9ydGhhbmRzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0FycmF5fSBhcnJheSBUaGUgYXJyYXkgdG8gaXRlcmF0ZSBvdmVyLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gaXRlcmF0ZWUgVGhlIGZ1bmN0aW9uIGludm9rZWQgcGVyIGl0ZXJhdGlvbi5cbiAqIEByZXR1cm5zIHtudW1iZXJ9IFJldHVybnMgdGhlIG1lYW4uXG4gKi9cbmZ1bmN0aW9uIGJhc2VNZWFuKGFycmF5LCBpdGVyYXRlZSkge1xuICB2YXIgbGVuZ3RoID0gYXJyYXkgPT0gbnVsbCA/IDAgOiBhcnJheS5sZW5ndGg7XG4gIHJldHVybiBsZW5ndGggPyAoYmFzZVN1bShhcnJheSwgaXRlcmF0ZWUpIC8gbGVuZ3RoKSA6IE5BTjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgYmFzZU1lYW47XG4iLCIvKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLnN1bWAgYW5kIGBfLnN1bUJ5YCB3aXRob3V0IHN1cHBvcnQgZm9yXG4gKiBpdGVyYXRlZSBzaG9ydGhhbmRzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0FycmF5fSBhcnJheSBUaGUgYXJyYXkgdG8gaXRlcmF0ZSBvdmVyLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gaXRlcmF0ZWUgVGhlIGZ1bmN0aW9uIGludm9rZWQgcGVyIGl0ZXJhdGlvbi5cbiAqIEByZXR1cm5zIHtudW1iZXJ9IFJldHVybnMgdGhlIHN1bS5cbiAqL1xuZnVuY3Rpb24gYmFzZVN1bShhcnJheSwgaXRlcmF0ZWUpIHtcbiAgdmFyIHJlc3VsdCxcbiAgICAgIGluZGV4ID0gLTEsXG4gICAgICBsZW5ndGggPSBhcnJheS5sZW5ndGg7XG5cbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICB2YXIgY3VycmVudCA9IGl0ZXJhdGVlKGFycmF5W2luZGV4XSk7XG4gICAgaWYgKGN1cnJlbnQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgcmVzdWx0ID0gcmVzdWx0ID09PSB1bmRlZmluZWQgPyBjdXJyZW50IDogKHJlc3VsdCArIGN1cnJlbnQpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5leHBvcnQgZGVmYXVsdCBiYXNlU3VtO1xuIiwiaW1wb3J0IGFycmF5QWdncmVnYXRvciBmcm9tICcuL19hcnJheUFnZ3JlZ2F0b3IuanMnO1xuaW1wb3J0IGJhc2VBZ2dyZWdhdG9yIGZyb20gJy4vX2Jhc2VBZ2dyZWdhdG9yLmpzJztcbmltcG9ydCBiYXNlSXRlcmF0ZWUgZnJvbSAnLi9fYmFzZUl0ZXJhdGVlLmpzJztcbmltcG9ydCBpc0FycmF5IGZyb20gJy4vaXNBcnJheS5qcyc7XG5cbi8qKlxuICogQ3JlYXRlcyBhIGZ1bmN0aW9uIGxpa2UgYF8uZ3JvdXBCeWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7RnVuY3Rpb259IHNldHRlciBUaGUgZnVuY3Rpb24gdG8gc2V0IGFjY3VtdWxhdG9yIHZhbHVlcy5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IFtpbml0aWFsaXplcl0gVGhlIGFjY3VtdWxhdG9yIG9iamVjdCBpbml0aWFsaXplci5cbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gUmV0dXJucyB0aGUgbmV3IGFnZ3JlZ2F0b3IgZnVuY3Rpb24uXG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZUFnZ3JlZ2F0b3Ioc2V0dGVyLCBpbml0aWFsaXplcikge1xuICByZXR1cm4gZnVuY3Rpb24oY29sbGVjdGlvbiwgaXRlcmF0ZWUpIHtcbiAgICB2YXIgZnVuYyA9IGlzQXJyYXkoY29sbGVjdGlvbikgPyBhcnJheUFnZ3JlZ2F0b3IgOiBiYXNlQWdncmVnYXRvcixcbiAgICAgICAgYWNjdW11bGF0b3IgPSBpbml0aWFsaXplciA/IGluaXRpYWxpemVyKCkgOiB7fTtcblxuICAgIHJldHVybiBmdW5jKGNvbGxlY3Rpb24sIHNldHRlciwgYmFzZUl0ZXJhdGVlKGl0ZXJhdGVlLCAyKSwgYWNjdW11bGF0b3IpO1xuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVBZ2dyZWdhdG9yO1xuIiwiaW1wb3J0IGJhc2VBc3NpZ25WYWx1ZSBmcm9tICcuL19iYXNlQXNzaWduVmFsdWUuanMnO1xuaW1wb3J0IGNyZWF0ZUFnZ3JlZ2F0b3IgZnJvbSAnLi9fY3JlYXRlQWdncmVnYXRvci5qcyc7XG5cbi8qKiBVc2VkIGZvciBidWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbi8qKiBVc2VkIHRvIGNoZWNrIG9iamVjdHMgZm9yIG93biBwcm9wZXJ0aWVzLiAqL1xudmFyIGhhc093blByb3BlcnR5ID0gb2JqZWN0UHJvdG8uaGFzT3duUHJvcGVydHk7XG5cbi8qKlxuICogQ3JlYXRlcyBhbiBvYmplY3QgY29tcG9zZWQgb2Yga2V5cyBnZW5lcmF0ZWQgZnJvbSB0aGUgcmVzdWx0cyBvZiBydW5uaW5nXG4gKiBlYWNoIGVsZW1lbnQgb2YgYGNvbGxlY3Rpb25gIHRocnUgYGl0ZXJhdGVlYC4gVGhlIG9yZGVyIG9mIGdyb3VwZWQgdmFsdWVzXG4gKiBpcyBkZXRlcm1pbmVkIGJ5IHRoZSBvcmRlciB0aGV5IG9jY3VyIGluIGBjb2xsZWN0aW9uYC4gVGhlIGNvcnJlc3BvbmRpbmdcbiAqIHZhbHVlIG9mIGVhY2gga2V5IGlzIGFuIGFycmF5IG9mIGVsZW1lbnRzIHJlc3BvbnNpYmxlIGZvciBnZW5lcmF0aW5nIHRoZVxuICoga2V5LiBUaGUgaXRlcmF0ZWUgaXMgaW52b2tlZCB3aXRoIG9uZSBhcmd1bWVudDogKHZhbHVlKS5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDAuMS4wXG4gKiBAY2F0ZWdvcnkgQ29sbGVjdGlvblxuICogQHBhcmFtIHtBcnJheXxPYmplY3R9IGNvbGxlY3Rpb24gVGhlIGNvbGxlY3Rpb24gdG8gaXRlcmF0ZSBvdmVyLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gW2l0ZXJhdGVlPV8uaWRlbnRpdHldIFRoZSBpdGVyYXRlZSB0byB0cmFuc2Zvcm0ga2V5cy5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgdGhlIGNvbXBvc2VkIGFnZ3JlZ2F0ZSBvYmplY3QuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uZ3JvdXBCeShbNi4xLCA0LjIsIDYuM10sIE1hdGguZmxvb3IpO1xuICogLy8gPT4geyAnNCc6IFs0LjJdLCAnNic6IFs2LjEsIDYuM10gfVxuICpcbiAqIC8vIFRoZSBgXy5wcm9wZXJ0eWAgaXRlcmF0ZWUgc2hvcnRoYW5kLlxuICogXy5ncm91cEJ5KFsnb25lJywgJ3R3bycsICd0aHJlZSddLCAnbGVuZ3RoJyk7XG4gKiAvLyA9PiB7ICczJzogWydvbmUnLCAndHdvJ10sICc1JzogWyd0aHJlZSddIH1cbiAqL1xudmFyIGdyb3VwQnkgPSBjcmVhdGVBZ2dyZWdhdG9yKGZ1bmN0aW9uKHJlc3VsdCwgdmFsdWUsIGtleSkge1xuICBpZiAoaGFzT3duUHJvcGVydHkuY2FsbChyZXN1bHQsIGtleSkpIHtcbiAgICByZXN1bHRba2V5XS5wdXNoKHZhbHVlKTtcbiAgfSBlbHNlIHtcbiAgICBiYXNlQXNzaWduVmFsdWUocmVzdWx0LCBrZXksIFt2YWx1ZV0pO1xuICB9XG59KTtcblxuZXhwb3J0IGRlZmF1bHQgZ3JvdXBCeTtcbiIsImltcG9ydCBiYXNlSXRlcmF0ZWUgZnJvbSAnLi9fYmFzZUl0ZXJhdGVlLmpzJztcbmltcG9ydCBiYXNlTWVhbiBmcm9tICcuL19iYXNlTWVhbi5qcyc7XG5cbi8qKlxuICogVGhpcyBtZXRob2QgaXMgbGlrZSBgXy5tZWFuYCBleGNlcHQgdGhhdCBpdCBhY2NlcHRzIGBpdGVyYXRlZWAgd2hpY2ggaXNcbiAqIGludm9rZWQgZm9yIGVhY2ggZWxlbWVudCBpbiBgYXJyYXlgIHRvIGdlbmVyYXRlIHRoZSB2YWx1ZSB0byBiZSBhdmVyYWdlZC5cbiAqIFRoZSBpdGVyYXRlZSBpcyBpbnZva2VkIHdpdGggb25lIGFyZ3VtZW50OiAodmFsdWUpLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC43LjBcbiAqIEBjYXRlZ29yeSBNYXRoXG4gKiBAcGFyYW0ge0FycmF5fSBhcnJheSBUaGUgYXJyYXkgdG8gaXRlcmF0ZSBvdmVyLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gW2l0ZXJhdGVlPV8uaWRlbnRpdHldIFRoZSBpdGVyYXRlZSBpbnZva2VkIHBlciBlbGVtZW50LlxuICogQHJldHVybnMge251bWJlcn0gUmV0dXJucyB0aGUgbWVhbi5cbiAqIEBleGFtcGxlXG4gKlxuICogdmFyIG9iamVjdHMgPSBbeyAnbic6IDQgfSwgeyAnbic6IDIgfSwgeyAnbic6IDggfSwgeyAnbic6IDYgfV07XG4gKlxuICogXy5tZWFuQnkob2JqZWN0cywgZnVuY3Rpb24obykgeyByZXR1cm4gby5uOyB9KTtcbiAqIC8vID0+IDVcbiAqXG4gKiAvLyBUaGUgYF8ucHJvcGVydHlgIGl0ZXJhdGVlIHNob3J0aGFuZC5cbiAqIF8ubWVhbkJ5KG9iamVjdHMsICduJyk7XG4gKiAvLyA9PiA1XG4gKi9cbmZ1bmN0aW9uIG1lYW5CeShhcnJheSwgaXRlcmF0ZWUpIHtcbiAgcmV0dXJuIGJhc2VNZWFuKGFycmF5LCBiYXNlSXRlcmF0ZWUoaXRlcmF0ZWUsIDIpKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgbWVhbkJ5O1xuIiwiaW1wb3J0IGJhc2VJdGVyYXRlZSBmcm9tICcuL19iYXNlSXRlcmF0ZWUuanMnO1xuaW1wb3J0IGJhc2VTdW0gZnJvbSAnLi9fYmFzZVN1bS5qcyc7XG5cbi8qKlxuICogVGhpcyBtZXRob2QgaXMgbGlrZSBgXy5zdW1gIGV4Y2VwdCB0aGF0IGl0IGFjY2VwdHMgYGl0ZXJhdGVlYCB3aGljaCBpc1xuICogaW52b2tlZCBmb3IgZWFjaCBlbGVtZW50IGluIGBhcnJheWAgdG8gZ2VuZXJhdGUgdGhlIHZhbHVlIHRvIGJlIHN1bW1lZC5cbiAqIFRoZSBpdGVyYXRlZSBpcyBpbnZva2VkIHdpdGggb25lIGFyZ3VtZW50OiAodmFsdWUpLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4wLjBcbiAqIEBjYXRlZ29yeSBNYXRoXG4gKiBAcGFyYW0ge0FycmF5fSBhcnJheSBUaGUgYXJyYXkgdG8gaXRlcmF0ZSBvdmVyLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gW2l0ZXJhdGVlPV8uaWRlbnRpdHldIFRoZSBpdGVyYXRlZSBpbnZva2VkIHBlciBlbGVtZW50LlxuICogQHJldHVybnMge251bWJlcn0gUmV0dXJucyB0aGUgc3VtLlxuICogQGV4YW1wbGVcbiAqXG4gKiB2YXIgb2JqZWN0cyA9IFt7ICduJzogNCB9LCB7ICduJzogMiB9LCB7ICduJzogOCB9LCB7ICduJzogNiB9XTtcbiAqXG4gKiBfLnN1bUJ5KG9iamVjdHMsIGZ1bmN0aW9uKG8pIHsgcmV0dXJuIG8ubjsgfSk7XG4gKiAvLyA9PiAyMFxuICpcbiAqIC8vIFRoZSBgXy5wcm9wZXJ0eWAgaXRlcmF0ZWUgc2hvcnRoYW5kLlxuICogXy5zdW1CeShvYmplY3RzLCAnbicpO1xuICogLy8gPT4gMjBcbiAqL1xuZnVuY3Rpb24gc3VtQnkoYXJyYXksIGl0ZXJhdGVlKSB7XG4gIHJldHVybiAoYXJyYXkgJiYgYXJyYXkubGVuZ3RoKVxuICAgID8gYmFzZVN1bShhcnJheSwgYmFzZUl0ZXJhdGVlKGl0ZXJhdGVlLCAyKSlcbiAgICA6IDA7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHN1bUJ5O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9