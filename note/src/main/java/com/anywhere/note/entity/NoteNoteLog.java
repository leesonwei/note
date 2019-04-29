package com.anywhere.note.entity;

import java.io.Serializable;

import com.baomidou.mybatisplus.annotations.TableId;
import com.baomidou.mybatisplus.annotations.TableName;
import com.baomidou.mybatisplus.enums.IdType;

import lombok.Data;

/**
 * note_note_log?Ê^?
 *
 * @author
 *
 */
@Data
@TableName("note_note_log")
public class NoteNoteLog implements Serializable {

    /**  */
    @TableId(type = IdType.AUTO)
    private Integer id;

    /**  */
    private Integer actionId;

    /**  */
    private String userId;

    /**  */
    private String content;

    /**  */
    private String result;

    /**  */
    private java.time.Instant createTime;
}


//~ Formatted by Jindent --- http://www.jindent.com
