/**
 * @description js验证插件
 * @author LIZONG.WEI
 * @date 2019/5/2 8:42
 * @version V1.0
 */
;(function($, window, document,undefined) {
    "use strict";

    //定义validate的构造函数
    let Validate = function(element, options) {
        this.$element = element;
        this.defaults = {
            "reg":"格式不正确",
            "email":"请输入正确的email地址",
            "min":"最小长度不能小于",
            "max":"最大长度不能大于",
            "required":"不能为空",
            "url":"请输入正确的url格式",
            "minValueMsg":"最小值为",
            "maxValueMsg":"最大值为",
            "notpass":"表单验证不通过,无法获取数据",
            "showTips":function(msg){
                //自定义提示窗口
                //alert(msg);
            },
            "setErrorStyle":function(msg,el){
                //自定义错误样式(错误处理)
                //el.css("border-color","red");
            }
        };
        this.options = $.extend({}, this.defaults, options)
    };

    //定义使用的变量
    let elementValue,elementList = [],pass = true, errMsg = "";

    //获取数据相关方法
    let dataTools = {
        getJson:function(){
            let json = {};
            for (let obj in elementList) {
                json[elementList[obj].attr("name")] = dataTools.getValue(elementList[obj]);
            }
            return json;
        },
        getJsonString:function(){
            return JSON.stringify(dataTools.getJson());
        },
        getValue:function(el){
            let tag = el.tagName;
            if (tag === "INPUT") {
                let type = el.attr("type");
                if (type === undefined) {
                    type = "text";
                }
                switch (type) {
                    case "radio":
                        elementValue = $("input[name=" + el.attr("name") + "]:checked").val();
                        break;
                    default:
                        elementValue = el.val().trim();
                        break;
                }
            }
            if (tag === "TEXTAREA") {
                elementValue = el.val().trim();
            }
            if (tag === "SELECT") {
                elementValue = el.find("option:selected").val();
            }
            return elementValue;
        },
    };

    //验证相关方法
    let validateTools = {
        validateSingle:function(el,_this){
            //验证单个输入框
            if (el.attr("type") === "checkbox" || el.attr("type") === "radio") {
                return;
            }
            validateTools.isRequired(el,_this);
            validateTools.minLength(el,_this);
            validateTools.maxLength(el,_this);
            validateTools.isEmail(el,_this);
            validateTools.isUrl(el,_this);
            validateTools.isReg(el,_this);
        },
        validateAll:function(_this){
            //获取所有输入框并验证
            elementList.length = 0;
            let type = _this.$element[0].tagName;
            if (type === "INPUT" || type === "TEXTAREA" || type === "SELECT") {
                elementList.push(_this.$element);
            } else {
                elementList.push($(_this.$element[0]).find("input"));
                elementList.push($(_this.$element[0]).find("textarea"));
                elementList.push($(_this.$element[0]).find("select"));
            }
            for (var obj in elementList) {
                validateTools.validateSingle(elementList[obj],_this);
            }
            if (!pass) {
                _this.options.showTips(errMsg);
            }
        },
        isEmpty:function(el){
            //判断元素的值是否为空
            elementValue = dataTools.getValue(el);
            if (elementValue === null || elementValue === undefined || elementValue === "") {
                return true;
            } else {
                return false;
            }
        },
        isRequired:function(el,_this){
            //不可为空验证
            if (el.attr("required") && validateTools.isEmpty(el)) {
                pass = false;
                errMsg = el.attr("name") + _this.options.required;
                _this.options.setErrorStyle(errMsg,el);
            }
        },
        minLength:function(el,_this){
            //最小长度验证
            if (el.attr("minLength") !== undefined) {
                elementValue = dataTools.getValue(el);
                if (!validateTools.isEmpty(elementValue) && elementValue.length < el.attr("min")) {
                    pass = false;
                    errMsg = el.attr("name") + _this.options.min;
                    _this.options.setErrorStyle(errMsg,el);
                }
            }
        },
        maxLength:function(el,_this){
            //最大长度验证
            if (el.attr("maxLength") !== undefined) {
                elementValue = dataTools.getValue(el);
                if (elementValue.length < el.attr("max")) {
                    pass = false;
                    errMsg = el.attr("name") + _this.options.max;
                    _this.options.setErrorStyle(errMsg,el);
                }
            }
        },
        isEmail:function(el,_this){
            //邮箱验证
            if (el.attr("type") === "email" || el.data("type") === "email") {
                const emailReg = /^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$/;
                if (!emailReg.test(el.val())) {
                    pass = false;
                    errMsg = el.attr("name") + _this.options.email;
                    _this.options.setErrorStyle(errMsg,el);
                }
            }
        },
        isUrl:function(el,_this){
            //url验证
            if (el.attr("type") === "url" || el.data("type") === "url") {
                const urlReg = new RegExp(
                    '^(?!mailto:)(?:(?:http|https|ftp)://|//)(?:\\S+(?::\\S*)?@)?(?:(?:(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[0-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z\\u00a1-\\uffff0-9]+-?)*[a-z\\u00a1-\\uffff0-9]+)(?:\\.(?:[a-z\\u00a1-\\uffff0-9]+-?)*[a-z\\u00a1-\\uffff0-9]+)*(?:\\.(?:[a-z\\u00a1-\\uffff]{2,})))|localhost)(?::\\d{2,5})?(?:(/|\\?|#)[^\\s]*)?$');
                if (!urlReg.test(el.val())) {
                    pass = false;
                    errMsg = el.attr("name") + _this.options.url;
                    _this.options.setErrorStyle(errMsg,el);
                }
            }
        },
        isReg:function(el,_this){
            //正则表达式验证
            if (el.data("regExp") !== undefined) {
                const regExp = new RegExp(el.data("regExp"));
                if (!regExp.test(dataTools.getValue(el))) {
                    pass = false;
                    errMsg = el.attr("name") + _this.options.reg;
                    _this.options.setErrorStyle(_this.errMsg,el);
                }
            }
        }
    };


    //暴露给外部的方法
    Validate.prototype = {
        validate:function(){
            validateTools.validateAll(this);
            return pass;
        },
        getData: function(type){
            if (!pass) {
                console.log(this.options.notpass);
                return;
            }
            if ("string" === type) {
                return dataTools.getJsonString(this);
            } else {
                return dataTools.getJson(this);
            }
        }
    };

    //作为jQuery插件使用
    $.fn.validate = function(options) {
        //创建实体
        var validate = new Validate(this, options);
        return validate;
    };

})(jQuery, window, document);
