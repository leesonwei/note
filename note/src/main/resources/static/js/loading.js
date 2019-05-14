/**
 * @description
 * @author LIZONG.WEI
 * @date 2019/5/8 17:01
 * @version V1.0
 */
;(function($,window,document,undefined){
    "use strick";
    let loading = function(el,ops){
        //在给定的元素下显示loading
        this.$el = el;
        this.svgs = {
            "default":"<svg version=\"1.1\" id=\"L9\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\n width=\"24px\" height=\"24px\"" +
                "  viewBox=\"0 0 100 100\" enable-background=\"new 0 0 0 0\" xml:space=\"preserve\">\n" +
                "    <rect x=\"20\" y=\"50\" width=\"4\" height=\"10\" fill=\"#fff\">\n" +
                "      <animateTransform attributeType=\"xml\"\n" +
                "        attributeName=\"transform\" type=\"translate\"\n" +
                "        values=\"0 0; 0 20; 0 0\"\n" +
                "        begin=\"0\" dur=\"0.6s\" repeatCount=\"indefinite\" />\n" +
                "    </rect>\n" +
                "    <rect x=\"30\" y=\"50\" width=\"4\" height=\"10\" fill=\"#fff\">\n" +
                "      <animateTransform attributeType=\"xml\"\n" +
                "        attributeName=\"transform\" type=\"translate\"\n" +
                "        values=\"0 0; 0 20; 0 0\"\n" +
                "        begin=\"0.2s\" dur=\"0.6s\" repeatCount=\"indefinite\" />\n" +
                "    </rect>\n" +
                "    <rect x=\"40\" y=\"50\" width=\"4\" height=\"10\" fill=\"#fff\">\n" +
                "      <animateTransform attributeType=\"xml\"\n" +
                "        attributeName=\"transform\" type=\"translate\"\n" +
                "        values=\"0 0; 0 20; 0 0\"\n" +
                "        begin=\"0.4s\" dur=\"0.6s\" repeatCount=\"indefinite\" />\n" +
                "    </rect>\n" +
                "</svg>",
            "cycle":"<svg version=\"1.1\" id=\"L7\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\n width=\"24px\" height=\"24px\"" +
                "  viewBox=\"0 0 100 100\" enable-background=\"new 0 0 100 100\" xml:space=\"preserve\">\n" +
                " <path fill=\"#fff\" d=\"M31.6,3.5C5.9,13.6-6.6,42.7,3.5,68.4c10.1,25.7,39.2,38.3,64.9,28.1l-3.1-7.9c-21.3,8.4-45.4-2-53.8-23.3\n" +
                "  c-8.4-21.3,2-45.4,23.3-53.8L31.6,3.5z\">\n" +
                "      <animateTransform \n" +
                "         attributeName=\"transform\" \n" +
                "         attributeType=\"XML\" \n" +
                "         type=\"rotate\"\n" +
                "         dur=\"2s\" \n" +
                "         from=\"0 50 50\"\n" +
                "         to=\"360 50 50\" \n" +
                "         repeatCount=\"indefinite\" />\n" +
                "  </path>\n" +
                " <path fill=\"#fff\" d=\"M42.3,39.6c5.7-4.3,13.9-3.1,18.1,2.7c4.3,5.7,3.1,13.9-2.7,18.1l4.1,5.5c8.8-6.5,10.6-19,4.1-27.7\n" +
                "  c-6.5-8.8-19-10.6-27.7-4.1L42.3,39.6z\">\n" +
                "      <animateTransform \n" +
                "         attributeName=\"transform\" \n" +
                "         attributeType=\"XML\" \n" +
                "         type=\"rotate\"\n" +
                "         dur=\"1s\" \n" +
                "         from=\"0 50 50\"\n" +
                "         to=\"-360 50 50\" \n" +
                "         repeatCount=\"indefinite\" />\n" +
                "  </path>\n" +
                " <path fill=\"#fff\" d=\"M82,35.7C74.1,18,53.4,10.1,35.7,18S10.1,46.6,18,64.3l7.6-3.4c-6-13.5,0-29.3,13.5-35.3s29.3,0,35.3,13.5\n" +
                "  L82,35.7z\">\n" +
                "      <animateTransform \n" +
                "         attributeName=\"transform\" \n" +
                "         attributeType=\"XML\" \n" +
                "         type=\"rotate\"\n" +
                "         dur=\"2s\" \n" +
                "         from=\"0 50 50\"\n" +
                "         to=\"360 50 50\" \n" +
                "         repeatCount=\"indefinite\" />\n" +
                "  </path>\n" +
                "</svg>",
            "five":"<svg version=\"1.1\" id=\"L9\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\" width=\"80px\" height=\"40px\"\n" +
                "                         viewBox=\"0 0 100 100\" enable-background=\"new 0 0 0 0\" xml:space=\"preserve\">\n" +
                "    <rect x=\"20\" y=\"50\" width=\"4\" height=\"10\" fill=\"#999\">\n" +
                "      <animateTransform attributeType=\"xml\"\n" +
                "                        attributeName=\"transform\" type=\"translate\"\n" +
                "                        values=\"0 0; 0 20; 0 0\"\n" +
                "                        begin=\"0\" dur=\"1s\" repeatCount=\"indefinite\" />\n" +
                "    </rect>\n" +
                "                        <rect x=\"30\" y=\"50\" width=\"4\" height=\"10\" fill=\"#999\">\n" +
                "      <animateTransform attributeType=\"xml\"\n" +
                "                        attributeName=\"transform\" type=\"translate\"\n" +
                "                        values=\"0 0; 0 20; 0 0\"\n" +
                "                        begin=\"0.2s\" dur=\"1s\" repeatCount=\"indefinite\" />\n" +
                "    </rect>\n" +
                "                        <rect x=\"40\" y=\"50\" width=\"4\" height=\"10\" fill=\"#999\">\n" +
                "      <animateTransform attributeType=\"xml\"\n" +
                "                        attributeName=\"transform\" type=\"translate\"\n" +
                "                        values=\"0 0; 0 20; 0 0\"\n" +
                "                        begin=\"0.4s\" dur=\"1s\" repeatCount=\"indefinite\" />\n" +
                "    </rect>\n" +
                "                        <rect x=\"50\" y=\"50\" width=\"4\" height=\"10\" fill=\"#999\">\n" +
                "      <animateTransform attributeType=\"xml\"\n" +
                "                        attributeName=\"transform\" type=\"translate\"\n" +
                "                        values=\"0 0; 0 20; 0 0\"\n" +
                "                        begin=\"0.6s\" dur=\"1s\" repeatCount=\"indefinite\" />\n" +
                "    </rect>\n" +
                "                        <rect x=\"60\" y=\"50\" width=\"4\" height=\"10\" fill=\"#999\">\n" +
                "      <animateTransform attributeType=\"xml\"\n" +
                "                        attributeName=\"transform\" type=\"translate\"\n" +
                "                        values=\"0 0; 0 20; 0 0\"\n" +
                "                        begin=\"0.8s\" dur=\"1s\" repeatCount=\"indefinite\" />\n" +
                "    </rect>\n" +
                "</svg>"
        };
        this.defaults = {
            svg:"default",
            width: 0,
            height: 0,
            customSvg:""
        };
        this.isParentAbsoluted = false;
        this.options = $.fn.extend({},this.defaults,ops);
    }
    //格式化函数
    String.prototype.format = function(args) {
        var result = this;
        if (arguments.length > 0) {
            if (arguments.length == 1 && typeof (args) == "object") {
                for (var key in args) {
                    if(args[key]!=undefined){
                        var reg = new RegExp("({" + key + "})", "g");
                        result = result.replace(reg, args[key]);
                    }
                }
            }
            else {
                for (var i = 0; i < arguments.length; i++) {
                    if (arguments[i] != undefined) {
                        //var reg = new RegExp("({[" + i + "]})", "g");//这个在索引大于9时会有问题，谢谢何以笙箫的指出
                        var reg= new RegExp("({)" + i + "(})", "g");
                        result = result.replace(reg, arguments[i]);
                    }
                }
            }
        }
        return result;
    }

    let loadHandler = {
        isParentAbsoluted:function(el,_this){
            if (el.css("position") !== undefined) {
                this.isParentAbsoluted = true;
            }
        },
        setParentAbsolute:function(el,flag,_this){
            if (flag) {
                el.css("position","relative");
            } else {
                el.css("position","none");
            }
        }
    }
    loading.prototype = {
        //显示loading
        show:function(){
            let $el = this.$el;
            loadHandler.isParentAbsoluted($el,this);
            if (!this.isParentAbsoluted) {
                loadHandler.setParentAbsolute($el,true,this);
            }
            let svg;
            if (this.options.customSvg === undefined || this.options.customSvg === "") {
                svg = this.svgs[this.options.svg];
            } else {
                svg = this.options.customSvg;
            }
            let reg;
            if (this.options.width !== 0) {
                reg = new RegExp("width=(\"|')([0-9a-zA-Z]*)(\"|')");
                svg = svg.replace(reg,'width="' + this.options.width + 'px"');
            }
            if (this.options.height !== 0) {
                reg = new RegExp('height=("|\')([0-9a-zA-Z]*)("|\')');
                svg = svg.replace(reg,'height="' + this.options.height + 'px"');
            }
            let load = "<div id='loading' style='width: 100%;height: 100%;background-color: rgba(15,15,15,0.5);position:absolute;top:0px;'>{0}</div>";
            load = load.format(load,svg);
            $el.append(load);
        },
        //关闭loading
        hide:function(){
            let $el = this.$el;
            if (!$el.find("#loading")) {
                return;
            }
            if (this.isParentAbsoluted) {
                loadHandler.setParentAbsolute($el,false,this);
            }
            $el.find("#loading").remove();
        }
    }
    $.fn.loading = function(ops){
        let loading = new loading(this,ops).show();
        return loading;
    }
})(jQuery,window,document)