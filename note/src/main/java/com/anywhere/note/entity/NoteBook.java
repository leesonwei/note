package com.anywhere.note.entity;

import java.io.Serializable;

import com.baomidou.mybatisplus.annotations.TableId;
import com.baomidou.mybatisplus.annotations.TableName;
import com.baomidou.mybatisplus.enums.IdType;

import lombok.Data;

/**
 * note_book?体?
 *
 * @author
 *
 */
@Data
@TableName("note_book")
public class NoteBook implements Serializable {

    /** ??本id */
    @TableId(type = IdType.AUTO)
    private Integer id;

    /** ??本名? */
    private String name;

    /** ?据版本 */
    private Integer dataVersion;

    /** 所?用? */
    private String userId;
}


//~ Formatted by Jindent --- http://www.jindent.com
