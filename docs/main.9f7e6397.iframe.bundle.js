(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{460:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__(14),__webpack_require__(9),__webpack_require__(0);var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(25),referralParams="utm_source=test-driven-carousel&utm_medium=referral",getUsernameUrl=function getUsernameUrl(username){return"https://unsplash.com/@".concat(username,"?").concat(referralParams)},getAttribution=function getAttribution(_ref){var name=_ref.name,username=_ref.username;return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment,{children:["Photo by ",Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("a",{href:getUsernameUrl(username),children:name})," on"," ",Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("a",{href:"https://unsplash.com/?".concat(referralParams),children:"Unsplash"})]})};__webpack_exports__.a=[{attribution:getAttribution({name:"Ganapathy Kumar",username:"gkumar2175"}),imgUrl:"https://images.unsplash.com/photo-1469321461812-afeb94496b27?w=1080&ixid=eyJhcHBfaWQiOjIzODE4fQ&s=568095e79ee2cb55a795ad454ac9cf5e"},{description:"Chicago",attribution:getAttribution({name:"Austin Neill",username:"arstyy"}),imgUrl:"https://images.unsplash.com/photo-1484249170766-998fa6efe3c0?w=1080&ixid=eyJhcHBfaWQiOjIzODE4fQ&s=f56c763ccf86e87644b049c9abbcf455"},{description:"Barcelona",attribution:getAttribution({name:"Enes",username:"royalfound"}),imgUrl:"https://images.unsplash.com/photo-1464790719320-516ecd75af6c?w=1080&ixid=eyJhcHBfaWQiOjIzODE4fQ&s=e836c604036680eeba5c77ebdb171c73"},{description:"New York",attribution:getAttribution({name:"Anthony DELANOIX",username:"anthonydelanoix"}),imgUrl:"https://images.unsplash.com/photo-1423655156442-ccc11daa4e99?w=1080&ixid=eyJhcHBfaWQiOjIzODE4fQ&s=54a272d03f5c06c416e8899f113dff06"},{description:"Rio de Janeiro",attribution:getAttribution({name:"Agustín Diaz",username:"agussdiaz28"}),imgUrl:"https://images.unsplash.com/photo-1483729558449-99ef09a8c325?w=1080&ixid=eyJhcHBfaWQiOjIzODE4fQ&s=966003791f746c210b73863cf6170e6c"}]},461:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__(14),__webpack_require__(8),__webpack_require__(286),__webpack_require__(54),__webpack_require__(287),__webpack_require__(288),__webpack_require__(194),__webpack_require__(15),__webpack_require__(20),__webpack_require__(29),__webpack_require__(33),__webpack_require__(17),__webpack_require__(93),__webpack_require__(41),__webpack_require__(40),__webpack_require__(44);var react=__webpack_require__(0),react_default=__webpack_require__.n(react),prop_types=__webpack_require__(1),prop_types_default=__webpack_require__.n(prop_types),jsx_runtime=__webpack_require__(25),CarouselButton_CarouselButton=function CarouselButton(props){return Object(jsx_runtime.jsx)("button",Object.assign({},props))};CarouselButton_CarouselButton.displayName="CarouselButton",CarouselButton_CarouselButton.propTypes={children:prop_types_default.a.node.isRequired},CarouselButton_CarouselButton.__docgenInfo={description:"",methods:[],displayName:"CarouselButton",props:{children:{type:{name:"node"},required:!0,description:""}}};var src_CarouselButton=CarouselButton_CarouselButton;function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/CarouselButton.js"]={name:"CarouselButton",docgenInfo:CarouselButton_CarouselButton.__docgenInfo,path:"src/CarouselButton.js"});var DefaultImg=__webpack_require__(458).a.img.withConfig({displayName:"CarouselSlide__DefaultImg",componentId:"ds4ujd-0"})(["object-fit:cover;width:100%;height:",";"],(function(props){return"number"==typeof props.imgHeight?"".concat(props.imgHeight,"px"):props.imgHeight})),CarouselSlide_CarouselSlide=function CarouselSlide(_ref){var Img=_ref.Img,imgUrl=_ref.imgUrl,imgHeight=_ref.imgHeight,description=_ref.description,attribution=_ref.attribution,rest=_objectWithoutProperties(_ref,["Img","imgUrl","imgHeight","description","attribution"]);return Object(jsx_runtime.jsxs)("figure",Object.assign({},rest,{children:[Object(jsx_runtime.jsx)(Img,{src:imgUrl,imgHeight:imgHeight}),Object(jsx_runtime.jsxs)("figcaption",{children:[Object(jsx_runtime.jsx)("strong",{children:description})," ",attribution]})]}))};CarouselSlide_CarouselSlide.displayName="CarouselSlide",CarouselSlide_CarouselSlide.propTypes={Img:prop_types_default.a.elementType,imgHeight:prop_types_default.a.oneOfType([prop_types_default.a.number,prop_types_default.a.string]),imgUrl:prop_types_default.a.string.isRequired,description:prop_types_default.a.node.isRequired,attribution:prop_types_default.a.node},CarouselSlide_CarouselSlide.defaultProps={Img:DefaultImg,imgHeight:500},CarouselSlide_CarouselSlide.__docgenInfo={description:"",methods:[],displayName:"CarouselSlide",props:{Img:{defaultValue:{value:"styled.img`\n  object-fit: cover;\n  width: 100%;\n  height: ${(props) =>\n    typeof props.imgHeight === 'number'\n      ? `${props.imgHeight}px`\n      : props.imgHeight};\n`",computed:!1},type:{name:"elementType"},required:!1,description:""},imgHeight:{defaultValue:{value:"500",computed:!1},type:{name:"union",value:[{name:"number"},{name:"string"}]},required:!1,description:""},imgUrl:{type:{name:"string"},required:!0,description:""},description:{type:{name:"node"},required:!0,description:""},attribution:{type:{name:"node"},required:!1,description:""}}};var src_CarouselSlide=CarouselSlide_CarouselSlide;"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/CarouselSlide.js"]={name:"CarouselSlide",docgenInfo:CarouselSlide_CarouselSlide.__docgenInfo,path:"src/CarouselSlide.js"});__webpack_require__(67),__webpack_require__(16),__webpack_require__(9),__webpack_require__(342),__webpack_require__(853),__webpack_require__(135);function _typeof(obj){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function _typeof(obj){return typeof obj}:function _typeof(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj})(obj)}function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function HasIndex_objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function HasIndex_objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!==_typeof(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==_typeof(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"===_typeof(key)?key:String(key)}function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}function _setPrototypeOf(o,p){return(_setPrototypeOf=Object.setPrototypeOf||function _setPrototypeOf(o,p){return o.__proto__=p,o})(o,p)}function _createSuper(Derived){var hasNativeReflectConstruct=function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function _createSuperInternal(){var result,Super=_getPrototypeOf(Derived);if(hasNativeReflectConstruct){var NewTarget=_getPrototypeOf(this).constructor;result=Reflect.construct(Super,arguments,NewTarget)}else result=Super.apply(this,arguments);return _possibleConstructorReturn(this,result)}}function _possibleConstructorReturn(self,call){return!call||"object"!==_typeof(call)&&"function"!=typeof call?function _assertThisInitialized(self){if(void 0===self)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return self}(self):call}function _getPrototypeOf(o){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function _getPrototypeOf(o){return o.__proto__||Object.getPrototypeOf(o)})(o)}__webpack_require__(855);function AutoAdvances_typeof(obj){return(AutoAdvances_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function _typeof(obj){return typeof obj}:function _typeof(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj})(obj)}function AutoAdvances_defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function AutoAdvances_objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function AutoAdvances_objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function AutoAdvances_classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}function AutoAdvances_defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}function AutoAdvances_setPrototypeOf(o,p){return(AutoAdvances_setPrototypeOf=Object.setPrototypeOf||function _setPrototypeOf(o,p){return o.__proto__=p,o})(o,p)}function AutoAdvances_createSuper(Derived){var hasNativeReflectConstruct=function AutoAdvances_isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function _createSuperInternal(){var result,Super=AutoAdvances_getPrototypeOf(Derived);if(hasNativeReflectConstruct){var NewTarget=AutoAdvances_getPrototypeOf(this).constructor;result=Reflect.construct(Super,arguments,NewTarget)}else result=Super.apply(this,arguments);return AutoAdvances_possibleConstructorReturn(this,result)}}function AutoAdvances_possibleConstructorReturn(self,call){return!call||"object"!==AutoAdvances_typeof(call)&&"function"!=typeof call?function AutoAdvances_assertThisInitialized(self){if(void 0===self)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return self}(self):call}function AutoAdvances_getPrototypeOf(o){return(AutoAdvances_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function _getPrototypeOf(o){return o.__proto__||Object.getPrototypeOf(o)})(o)}function Carousel_typeof(obj){return(Carousel_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function _typeof(obj){return typeof obj}:function _typeof(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj})(obj)}function Carousel_objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function Carousel_objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function Carousel_classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}function Carousel_defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}function Carousel_setPrototypeOf(o,p){return(Carousel_setPrototypeOf=Object.setPrototypeOf||function _setPrototypeOf(o,p){return o.__proto__=p,o})(o,p)}function Carousel_createSuper(Derived){var hasNativeReflectConstruct=function Carousel_isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function _createSuperInternal(){var result,Super=Carousel_getPrototypeOf(Derived);if(hasNativeReflectConstruct){var NewTarget=Carousel_getPrototypeOf(this).constructor;result=Reflect.construct(Super,arguments,NewTarget)}else result=Super.apply(this,arguments);return Carousel_possibleConstructorReturn(this,result)}}function Carousel_possibleConstructorReturn(self,call){return!call||"object"!==Carousel_typeof(call)&&"function"!=typeof call?function Carousel_assertThisInitialized(self){if(void 0===self)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return self}(self):call}function Carousel_getPrototypeOf(o){return(Carousel_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function _getPrototypeOf(o){return o.__proto__||Object.getPrototypeOf(o)})(o)}var Carousel_Carousel=function(_React$PureComponent){!function Carousel_inherits(subClass,superClass){if("function"!=typeof superClass&&null!==superClass)throw new TypeError("Super expression must either be null or a function");subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,writable:!0,configurable:!0}}),superClass&&Carousel_setPrototypeOf(subClass,superClass)}(Carousel,_React$PureComponent);var _super=Carousel_createSuper(Carousel);function Carousel(){var _this;Carousel_classCallCheck(this,Carousel);for(var _len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++)args[_key]=arguments[_key];return(_this=_super.call.apply(_super,[this].concat(args))).state={slideIndex:0},_this.handlePrevClick=function(){var _this$props=_this.props;(0,_this$props.slideIndexDecrement)(_this$props.slides.length)},_this.handleNextClick=function(){var _this$props2=_this.props;(0,_this$props2.slideIndexIncrement)(_this$props2.slides.length)},_this}return function Carousel_createClass(Constructor,protoProps,staticProps){return protoProps&&Carousel_defineProperties(Constructor.prototype,protoProps),staticProps&&Carousel_defineProperties(Constructor,staticProps),Constructor}(Carousel,[{key:"render",value:function render(){var _this$props3=this.props,defaultImg=_this$props3.defaultImg,defaultImgHeight=_this$props3.defaultImgHeight,slideIndex=_this$props3.slideIndex,slides=(_this$props3.slideIndexDecrement,_this$props3.slideIndexIncrement,_this$props3.slides),rest=Carousel_objectWithoutProperties(_this$props3,["defaultImg","defaultImgHeight","slideIndex","slideIndexDecrement","slideIndexIncrement","slides"]);return Object(jsx_runtime.jsxs)("div",Object.assign({},rest,{children:[Object(jsx_runtime.jsx)(src_CarouselSlide,Object.assign({Img:defaultImg,imgHeight:defaultImgHeight},slides[slideIndex])),Object(jsx_runtime.jsx)(src_CarouselButton,{"data-action":"prev",onClick:this.handlePrevClick,children:"Prev"}),Object(jsx_runtime.jsx)(src_CarouselButton,{"data-action":"next",onClick:this.handleNextClick,children:"Next"})]}))}}]),Carousel}(react_default.a.PureComponent);Carousel_Carousel.propTypes={defaultImg:src_CarouselSlide.propTypes.Img,defaultImgHeight:src_CarouselSlide.propTypes.imgHeight,slideIndex:prop_types_default.a.number.isRequired,slideIndexDecrement:prop_types_default.a.func.isRequired,slideIndexIncrement:prop_types_default.a.func.isRequired,slides:prop_types_default.a.arrayOf(prop_types_default.a.shape(src_CarouselSlide.propTypes)).isRequired},Carousel_Carousel.defaultProps={defaultImg:src_CarouselSlide.defaultProps.Img,defaultImgHeight:src_CarouselSlide.defaultProps.imgHeight},Carousel_Carousel.__docgenInfo={description:"",methods:[{name:"handlePrevClick",docblock:null,modifiers:[],params:[],returns:null},{name:"handleNextClick",docblock:null,modifiers:[],params:[],returns:null}],displayName:"Carousel",props:{defaultImg:{defaultValue:{value:"CarouselSlide.defaultProps.Img",computed:!0},type:{name:"custom",raw:"CarouselSlide.propTypes.Img"},required:!1,description:""},defaultImgHeight:{defaultValue:{value:"CarouselSlide.defaultProps.imgHeight",computed:!0},type:{name:"custom",raw:"CarouselSlide.propTypes.imgHeight"},required:!1,description:""},slideIndex:{type:{name:"number"},required:!0,description:""},slideIndexDecrement:{type:{name:"func"},required:!0,description:""},slideIndexIncrement:{type:{name:"func"},required:!0,description:""},slides:{type:{name:"arrayOf",value:{name:"shape",value:"CarouselSlide.propTypes",computed:!0}},required:!0,description:""}}};var Component,propName,upperBoundPropName,_class,_temp,_class$propTypes;__webpack_exports__.a=function(Component,indexPropName){var _class,_temp,_class$propTypes,defaultIndexPropName="default".concat(function capitalize(word){return"".concat(word[0].toUpperCase()).concat(word.slice(1))}(indexPropName));return _temp=_class=function(_React$PureComponent){!function _inherits(subClass,superClass){if("function"!=typeof superClass&&null!==superClass)throw new TypeError("Super expression must either be null or a function");subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,writable:!0,configurable:!0}}),superClass&&_setPrototypeOf(subClass,superClass)}(ComponentWithIndex,_React$PureComponent);var _super=_createSuper(ComponentWithIndex);function ComponentWithIndex(props){var _this;return function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}(this,ComponentWithIndex),(_this=_super.call(this,props)).handleDecrement=function(upperBound){var onIndexChange=_this.props.onIndexChange;_this.setState((function(_ref){var index=_ref.index,newIndex=upperBound?(index+upperBound-1)%upperBound:index-1;return onIndexChange&&onIndexChange({target:{value:newIndex}}),{index:newIndex}}))},_this.handleIncrement=function(upperBound){var onIndexChange=_this.props.onIndexChange;_this.setState((function(_ref2){var index=_ref2.index,newIndex=upperBound?(index+1)%upperBound:index+1;return onIndexChange&&onIndexChange({target:{value:newIndex}}),{index:newIndex}}))},_this.state={index:props[defaultIndexPropName]},_this}return function _createClass(Constructor,protoProps,staticProps){return protoProps&&_defineProperties(Constructor.prototype,protoProps),staticProps&&_defineProperties(Constructor,staticProps),Constructor}(ComponentWithIndex,[{key:"render",value:function render(){var _indexProps,_this$props=this.props,rest=(_this$props[defaultIndexPropName],HasIndex_objectWithoutProperties(_this$props,[defaultIndexPropName].map(_toPropertyKey))),indexProps=(_defineProperty(_indexProps={},indexPropName,this.state.index),_defineProperty(_indexProps,"".concat(indexPropName,"Decrement"),this.handleDecrement),_defineProperty(_indexProps,"".concat(indexPropName,"Increment"),this.handleIncrement),_indexProps);return Object(jsx_runtime.jsx)(Component,Object.assign({},rest,indexProps))}}],[{key:"getDerivedStateFromProps",value:function getDerivedStateFromProps(props,state){return null!=props[indexPropName]&&props[indexPropName]!==state.index?{index:props[indexPropName]}:null}}]),ComponentWithIndex}(react_default.a.PureComponent),_class.displayName="HasIndex(".concat(Component.displayName||Component.name,")"),_class.propTypes=(_defineProperty(_class$propTypes={},indexPropName,prop_types_default.a.number),_defineProperty(_class$propTypes,defaultIndexPropName,prop_types_default.a.number),_defineProperty(_class$propTypes,"onIndexChange",prop_types_default.a.func),_class$propTypes),_class.defaultProps=_defineProperty({},defaultIndexPropName,0),_temp}((Component=Carousel_Carousel,propName="slideIndex",upperBoundPropName="slides",_temp=_class=function(_React$PureComponent){!function AutoAdvances_inherits(subClass,superClass){if("function"!=typeof superClass&&null!==superClass)throw new TypeError("Super expression must either be null or a function");subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,writable:!0,configurable:!0}}),superClass&&AutoAdvances_setPrototypeOf(subClass,superClass)}(ComponentWithAutoAdvance,_React$PureComponent);var _super=AutoAdvances_createSuper(ComponentWithAutoAdvance);function ComponentWithAutoAdvance(){return AutoAdvances_classCallCheck(this,ComponentWithAutoAdvance),_super.apply(this,arguments)}return function AutoAdvances_createClass(Constructor,protoProps,staticProps){return protoProps&&AutoAdvances_defineProperties(Constructor.prototype,protoProps),staticProps&&AutoAdvances_defineProperties(Constructor,staticProps),Constructor}(ComponentWithAutoAdvance,[{key:"componentDidMount",value:function componentDidMount(){this.startTimer()}},{key:"componentDidUpdate",value:function componentDidUpdate(prevProps){prevProps[propName]===this.props[propName]&&prevProps[upperBoundPropName]===this.props[upperBoundPropName]||this.startTimer()}},{key:"componentWillUnmount",value:function componentWillUnmount(){clearTimeout(this._timer)}},{key:"startTimer",value:function startTimer(){var upperBound,_this=this;clearTimeout(this._timer),this.props.autoAdvanceDelay&&("number"==typeof this.props[upperBoundPropName]?upperBound=this.props[upperBoundPropName]:null!=this.props[upperBoundPropName]&&(upperBound=this.props[upperBoundPropName].length),this._timer=setTimeout((function(){_this.props["".concat(propName,"Increment")](upperBound)}),this.props.autoAdvanceDelay))}},{key:"render",value:function render(){var _this$props=this.props,rest=(_this$props.autoAdvanceDelay,AutoAdvances_objectWithoutProperties(_this$props,["autoAdvanceDelay"]));return Object(jsx_runtime.jsx)(Component,Object.assign({},rest))}}]),ComponentWithAutoAdvance}(react_default.a.PureComponent),_class.displayName="AutoAdvances(".concat(Component.displayName||Component.name,")"),_class.propTypes=(AutoAdvances_defineProperty(_class$propTypes={},propName,prop_types_default.a.number.isRequired),AutoAdvances_defineProperty(_class$propTypes,"".concat(propName,"Increment"),prop_types_default.a.func.isRequired),AutoAdvances_defineProperty(_class$propTypes,upperBoundPropName,prop_types_default.a.oneOfType([prop_types_default.a.number,prop_types_default.a.array]).isRequired),AutoAdvances_defineProperty(_class$propTypes,"autoAdvanceDelay",prop_types_default.a.number.isRequired),_class$propTypes),_class.defaultProps={autoAdvanceDelay:1e4},_temp),"slideIndex");"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/Carousel.js"]={name:"Carousel",docgenInfo:Carousel_Carousel.__docgenInfo,path:"src/Carousel.js"})},483:function(module,exports,__webpack_require__){__webpack_require__(484),__webpack_require__(637),__webpack_require__(638),__webpack_require__(856),__webpack_require__(857),__webpack_require__(860),__webpack_require__(861),__webpack_require__(859),__webpack_require__(858),__webpack_require__(862),__webpack_require__(863),module.exports=__webpack_require__(842)},551:function(module,exports){},638:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);__webpack_require__(195)},842:function(module,exports,__webpack_require__){"use strict";(function(module){(0,__webpack_require__(195).configure)([__webpack_require__(843),__webpack_require__(844)],module,!1)}).call(this,__webpack_require__(188)(module))},843:function(module,exports){function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=function(){return[]},webpackEmptyContext.resolve=webpackEmptyContext,module.exports=webpackEmptyContext,webpackEmptyContext.id=843},844:function(module,exports,__webpack_require__){var map={"./stories/index.stories.js":845};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=844},845:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){__webpack_require__(0);var _storybook_react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(195),_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(117),_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(293),_Carousel__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(461),_example_slides__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(460),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(25),stories=Object(_storybook_react__WEBPACK_IMPORTED_MODULE_1__.storiesOf)("Carousel",module).addParameters({storySource:{source:"import React from 'react';\n\nimport { storiesOf } from '@storybook/react';\nimport { action } from '@storybook/addon-actions';\nimport { withKnobs, number } from '@storybook/addon-knobs';\n// import { linkTo } from '@storybook/addon-links';\n\nimport Carousel from '../Carousel';\nimport slides from '../../example/slides';\n\nconst stories = storiesOf('Carousel', module);\n\nstories.addDecorator(withKnobs);\n\nstories.add('default', () => (\n  <Carousel\n    autoAdvanceDelay={number('autoAdvanceDelay', 10e3)}\n    slides={slides}\n    onIndexChange={action('onIndexChange')}\n  />\n));\n",locationsMap:{default:{startLoc:{col:12,line:15},endLoc:{col:1,line:21},startBody:{col:23,line:15},endBody:{col:1,line:21}}}}});stories.addDecorator(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.b),stories.add("default",(function(){return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_Carousel__WEBPACK_IMPORTED_MODULE_4__.a,{autoAdvanceDelay:Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.a)("autoAdvanceDelay",1e4),slides:_example_slides__WEBPACK_IMPORTED_MODULE_5__.a,onIndexChange:Object(_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_2__.action)("onIndexChange")})}))}.call(this,__webpack_require__(149)(module))},863:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var preview_namespaceObject={};__webpack_require__.r(preview_namespaceObject),__webpack_require__.d(preview_namespaceObject,"parameters",(function(){return parameters}));__webpack_require__(15),__webpack_require__(29),__webpack_require__(48),__webpack_require__(839),__webpack_require__(36),__webpack_require__(37),__webpack_require__(840),__webpack_require__(841),__webpack_require__(194);var client_api=__webpack_require__(868),esm=__webpack_require__(5),parameters={actions:{argTypesRegex:"^on[A-Z].*"},controls:{matchers:{color:/(background|color)$/i,date:/Date$/}}};function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}Object.keys(preview_namespaceObject).forEach((function(key){var value=preview_namespaceObject[key];switch(key){case"args":case"argTypes":return esm.a.warn("Invalid args/argTypes in config, ignoring.",JSON.stringify(value));case"decorators":return value.forEach((function(decorator){return Object(client_api.b)(decorator,!1)}));case"loaders":return value.forEach((function(loader){return Object(client_api.c)(loader,!1)}));case"parameters":return Object(client_api.d)(function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}({},value),!1);case"argTypesEnhancers":return value.forEach((function(enhancer){return Object(client_api.a)(enhancer)}));case"globals":case"globalTypes":var v={};return v[key]=value,Object(client_api.d)(v,!1);default:return console.log(key+" was not supported :( !")}}))}},[[483,2,3]]]);