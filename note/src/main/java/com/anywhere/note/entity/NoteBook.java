package com.anywhere.note.entity;

import com.baomidou.mybatisplus.annotations.TableId;
import com.baomidou.mybatisplus.annotations.TableName;
import com.baomidou.mybatisplus.enums.IdType;
import lombok.Data;

import java.io.Serializable;

/**
 * note_book实体类
 * 
 * @author 
 *
 */
@Data
@TableName("note_book")
public class NoteBook implements Serializable {
	/**笔记本id*/
	@TableId(type = IdType.AUTO)
	private Integer id; 
	/**笔记本名称*/
	private String name; 
	/**数据版本*/
	private Integer dataVersion; 
	/**所属用户*/
	private String userId; 

}
