package com.anywhere.note.entity;

import java.io.Serializable;

import com.baomidou.mybatisplus.annotations.TableId;
import com.baomidou.mybatisplus.annotations.TableName;
import com.baomidou.mybatisplus.enums.IdType;

import lombok.Data;

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
    private Integer id;

    /** ??���W? */
    private String name;

    /** ?�u���� */
    private Integer dataVersion;

    /** ��?��? */
    private String userId;
}


//~ Formatted by Jindent --- http://www.jindent.com
