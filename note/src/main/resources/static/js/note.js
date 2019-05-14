/**
 * @description
 * @author LIZONG.WEI
 * @date 2019/5/7 16:32
 * @version V1.0
 */
$(function() {
    var testEditormd;

    $("#add-note-btn").click(function(){
        showById("#add-note");
        if (testEditormd === undefined) {
            $("#markdowm").append("<div id=\"note-content\" style=\"margin-left: 15px; margin-right: 15px;\"></div>");
            testEditormd = editormd("note-content", {
                width: "100%",
                height: 640,
                markdown : "",
                path : '/static/editor.md-master/lib/',
                saveHTMLToTextarea: true,
                toolbarIcons : function() {
                    return ["undo", "redo", "|", "bold", "hr", "list-ul", "h4", "|", "link", "image", "code",  "datetime", "||", "watch", "fullscreen","","|","save", "cancel"]
                },
                toolbarIconTexts : {
                    save : "保存",
                    cancel : "取消"
                },

                // 自定义工具栏按钮的事件处理
                toolbarHandlers : {
                    save : function(cm, icon, cursor, selection) {
                        alert(testEditormd.getHTML());
                    },

                    cancel : function(cm, icon, cursor, selection) {
                        showById("#article");
                    }
                }
            });
        }
    });
    function showById(id){
        $(id).show();
        $(id).siblings().hide();
    }

});

function showCode(){
    let radio = $("input[name='inlineRadioOptions']:checked").val();
    if (radio === "private") {
        $("#code").show();
    } else {
        $("#code").hide();
    }
}