package com.anywhere.note.entity;

import com.baomidou.mybatisplus.annotations.TableId;
import com.baomidou.mybatisplus.annotations.TableName;
import com.baomidou.mybatisplus.enums.IdType;
import lombok.Data;

import java.io.Serializable;

/**
 * note_note?�^?
 *
 * @author
 *
 */
@Data
@TableName("note_note")
public class NoteNote implements Serializable {

    /**  */
    @TableId(type = IdType.AUTO)
    private Integer noteId;

    /**  */
    private String title;

    private String tags;

    /**  */
    private String userId;

    /**  */
    private String markdownContent;

    /**  */
    private String htmlContent;

    /**  */
    private Integer dataVersion = 0;

    /**  */
    private Integer bookId;
}


//~ Formatted by Jindent --- http://www.jindent.com
