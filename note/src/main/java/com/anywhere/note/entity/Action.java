package com.anywhere.note.entity;

import com.baomidou.mybatisplus.annotations.TableId;
import com.baomidou.mybatisplus.annotations.TableName;
import com.baomidou.mybatisplus.enums.IdType;
import lombok.Data;

import java.io.Serializable;

/**
 * com_action
 *
 * @author lizong.wei
 *
 */
@Data
@TableName("com_action")
public class Action implements Serializable {

    /**  */
    @TableId(type = IdType.AUTO)
    private Integer id;

    /**  */
    private String name;

    /**  */
    private Integer value;
}


//~ Formatted by Jindent --- http://www.jindent.com
