package com.anywhere.note.entity;

import com.baomidou.mybatisplus.annotations.TableField;
import com.baomidou.mybatisplus.annotations.TableId;
import com.baomidou.mybatisplus.annotations.TableName;
import com.baomidou.mybatisplus.enums.IdType;
import lombok.Data;

import java.io.Serializable;
import java.util.List;

/**
 * note_book?�^?
 *
 * @author
 *
 */
@Data
@TableName("note_book")
public class NoteBook implements Serializable {

    /** ??��id */
    @TableId(type = IdType.AUTO)
    private Integer bookId;

    /** ??���W? */
    private String name;

    /** */
    private boolean isPublic;

    /** */
    private String privateCode;

    /** ?�u���� */
    private Integer dataVersion = 0;

    /** ��?��? */
    private String userId;

    @TableField(exist = false)
    private List<NoteNote> notes;
}


//~ Formatted by Jindent --- http://www.jindent.com
