/**
 * @description
 * @author LIZONG.WEI
 * @date 2019/5/7 16:32
 * @version V1.0
 */
let current_note;

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

$(function() {
    var testEditormd,update = false;

    $("#add-note-btn,#update-note-btn").click(function(){
        showById("#add-note");
        if (testEditormd === undefined) {
            testEditormd = buildMarkdown();
        }
        if ($(this).attr("id") === 'update-note-btn') {
            update = true;
        } else {
            update = false;
        }
        showById("#article");
        showById("#add-note");
        setUpdate();
    });
    function setUpdate(){
        setTimeout(function(){
            if (update === true) {
                testEditormd.setValue($('#markdownContent').val());
                $('#note-title').val($('#article span[name="title"]').text());
            }
        },600)
    }
    function buildMarkdown(){
        $("#markdowm").append("<div id=\"note-content\" style=\"margin-left: 15px; margin-right: 15px;\"></div>");
        let testEditormdEntity = editormd("note-content", {
            width: "100%",
            height: 640,
            path : '/static/editor.md-master/lib/',
            saveHTMLToTextarea: true,
            toolbarIcons : function() {
                return ["undo", "redo", "|", "bold", "hr", "list-ul", "h4", "|", "link", "image", "code",  "datetime", "||", "watch", "fullscreen","refresh","|","save", "cancel"]
            },
            toolbarIconTexts : {
                save : "保存",
                cancel : "取消",
                refresh : "刷新"
            },

            // 自定义工具栏按钮的事件处理
            toolbarHandlers : {
                save : function(cm, icon, cursor, selection) {
                    let content = testEditormd.getHTML();
                    let opt = {
                        "title":'保存笔记',
                        "content":'您确定保存该笔记吗?',
                        "method":"post",
                    };
                    save(opt,{
                        title: $('#note-title').val(),
                        content: content,
                        tags:$('#tag').val(),
                        userId:"weilizong",
                        bookId:"1"
                    },'/notenote/insert',showById("#article"));
                },
                refresh:function(){
                    $("#markdowm").find('#note-content').remove();
                    testEditormd = null;
                    testEditormd = buildMarkdown();
                    setUpdate();
                },
                cancel : function(cm, icon, cursor, selection) {
                    showById("#article");
                }
            }
        });
        return testEditormdEntity;
    }


    function getBookList(){
        axios.get('/notebook/select/list',{
            params:{
                userId:'demoData2'
            },
        }).then(function (response) {
            fillBook(response.data,'nav[name="sideBarMenu"]');
        }).catch(function (error) {
            $.alert("获取笔记本列表失败");
        });
    }
    getBookList();
    function fillBook(json,tar){
        let bookItem = '<div class="bd-toc-item"><a class="bd-toc-link" href="#{0}" data-toggle="collapse" aria-expanded="false" aria-controls="layout">{1}' +
            '<span data-close="#{2}" style="margin-left: 15px;cursor: pointer;font-size: 20px;font-weight: bold;display: none" class="text-info" aria-hidden="true">&times;</span></a>{3}</div>';
        for(let o in json){
            let notelist = fillNoteList(json[o].notes,json[o].bookId);
            bookItem = bookItem.format(json[o].bookId,json[o].name,json[o].bookId, notelist);
            $(tar).append(bookItem);
        }
        $(".bd-toc-link").hover(function(){
            let id = $(this).attr("href");
            $('span[data-close=' + id+ ']').css("display","inline-block");
            $('span[data-close=' + id+ ']').click(function(e){
                e.stopPropagation();
                e.preventDefault();
                console.log("close " + id);
            });
        },function(){
            let id = $(this).attr("href");
            $('span[data-close=' + id+ ']').css("display","none");
        });
    }
    function fillNoteList(notes,id) {
        let noteParent = '<div class="collapse" id="{0}" style="padding-left: 15px;">' +
            '<ul class="nav bd-sidebar" style="display: block;">{1}' +
            '</ul>' +
            '</div>';
        let noteItem = "<li><a href='{0}'>{1}</a></li>";
        let noteItems = '';
        for(let j in notes){
            noteItems += noteItem.format(notes[j].noteId,notes[j].title);
        }

        return noteParent.format(id,noteItems);
    }
});

function showById(id){
    $(id).show();
    $(id).siblings().hide();
}

function showCode(){
    let radio = $("input[name='inlineRadioOptions']:checked").val();
    if (radio === "private") {
        $("#code").show();
    } else {
        $("#code").hide();
    }
};

$("#delete-note-btn").click(function(){
    let opt = {
        "title":'确定删除该笔记?',
        "content":'删除后无法复原.如果不操作将在8秒后取消',
        "method":"post",
    };
    save(opt,{'id':1,'userId':"weilizong",'dataVersion':0},'/notenote/delete',undefined);
});

function save(opt,data,url,call_func){
    let jquery_comfirm_options = {
        "title":"确定要完成此操作吗?",
        "content":"",
        "method":"post"
    };
    let options = Object.assign({},jquery_comfirm_options,opt);
    $.confirm({
        title: options.title,
        content: options.content,
        autoClose: 'cancelAction|8000',
        useBootstrap:true,
        buttons: {
            deleteUser: {
                text: '确定',
                btnClass: 'btn-primary btn-open',
                action: function () {
                    let self = this;
                    self.showLoading();
                    axios({
                        method: options.method,
                        url: url,
                        data: data
                    }).then(function (response) {
                        show_tips(self,'success',response,call_func);
                    }).catch(function (error) {
                        show_tips(self,'error',error,call_func);
                    });
                    return false;
                }
            },
            cancelAction: {
                text: '取消',
                btnClass: 'btn-default btn-open',
                action: function () {

                }
            },
            closeAction: {
                text: '关闭',
                isHidden: true,
                btnClass: 'btn-default btn-close',
                action: function () {
                    return true;
                }
            }
        }
    });
}
function show_tips(self,type,return_data,call_func){
    console.log(return_data);
    let imgs = {
        'success': '<svg xmlns="http://www.w3.org/2000/svg" class="icon" viewBox="0 0 1024 1024" width="22" height="22" p-id="1993" version="1.1" t="1559014267847"><defs><style type="text/css" /></defs><path fill="#1afa29" d="M 510.7 73.2 c -243 0 -440 197 -440 440 s 197 440 440 440 s 440 -197 440 -440 s -197 -440 -440 -440 Z m 246.9 302 c -48.5 48.6 -81.2 76.9 -172.3 186.8 c -52.6 63.4 -102.3 131.5 -102.7 132 l -21.8 27.2 c -4.6 6.1 -13.5 6.8 -19.1 1.6 L 266.6 560.1 c -17.8 -16.5 -18.8 -44.4 -2.3 -62.2 c 16.5 -17.8 44.4 -18.8 62.2 -2.3 l 104.9 97.5 c 5.5 5.1 14.1 4.5 18.9 -1.3 c 16.2 -20.1 38.4 -44.5 62.4 -68.6 c 90.2 -90.9 145.6 -139.7 175.2 -161.3 c 36 -26.2 77.3 -48.6 87.3 -36.2 c 15.5 19.4 6 25.8 -17.6 49.5 Z" p-id="1994" /></svg>',
        'error': '<svg xmlns="http://www.w3.org/2000/svg" class="icon" viewBox="0 0 1024 1024" width="22" height="22" p-id="3686" version="1.1" t="1559015526590"><defs><style type="text/css" /></defs><path fill="#d81e06" d="M 515.413 6.59911 c -276.48 0 -500.622 224.142 -500.622 500.622 s 224.142 500.622 500.622 500.622 s 500.622 -224.142 500.622 -500.622 s -224.142 -500.622 -500.622 -500.622 Z m 225.28 660.821 c 19.5698 19.5698 19.5698 51.2 0 70.7698 c -19.5698 19.5698 -51.2 19.5698 -70.7698 0 L 515.413 583.68 L 361.017 738.19 c -19.5698 19.5698 -51.2 19.5698 -70.7698 0 c -19.5698 -19.5698 -19.5698 -51.2 0 -70.7698 l 154.51 -154.51 L 290.133 358.4 c -19.5698 -19.5698 -19.5698 -51.2 0 -70.7698 c 19.5698 -19.5698 51.2 -19.5698 70.7698 0 L 515.413 442.14 l 154.51 -154.51 c 19.5698 -19.5698 51.2 -19.5698 70.7698 0 c 19.5698 19.5698 19.5698 51.2 0 70.7698 L 586.297 512.91 L 740.693 667.42 Z" p-id="3687" /></svg>'
    };
    let msg = "操作失败",title;
    title = type === 'error' ? "错误信息":"提示信息";
    if (return_data.status === 200 && return_data.data.status === 0){
        msg = "操作成功";
    } else {
        if (return_data.data.msg !== 'SUCCESS') {
            msg += ':' + return_data.data.msg;
        } else if (return_data.statusText !== undefined && return_data.statusText !== '') {
            msg += ':' + return_data.statusText;
        }
    }
    self.hideLoading();
    self.setTitle(title);
    self.setContent('<div style="text-align: center;">' + imgs[type] + '<span style="line-height: 22px;vertical-align: top;padding-left:3px;">' + msg + '</span></div>');
    self.$btnc.find('button.btn-open').remove();
    self.$btnc.find('button.btn-close').show();
    setTimeout(function(){
        self.close();
    },3000);
    call_func = call_func || function(){};
    call_func();
}