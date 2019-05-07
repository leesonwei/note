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
            });
        }
    });
    function showById(id){
        $(id).show();
        $(id).siblings().hide();
    }
    $("#to-article-btn,#close-add-form").click(function() {
        showById("#article");
        if ($(this).attr("id") === "close-add-form") {
            $("#add-note").find("input").val("");
            testEditormd.editor.remove();
            testEditormd = undefined;
        }
    });
    $("#save-note").click(function(){
        alert(testEditormd.getHTML());
    });

});