package com.anywhere.note.entity;

import com.baomidou.mybatisplus.annotations.TableId;
import com.baomidou.mybatisplus.annotations.TableName;
import com.baomidou.mybatisplus.enums.IdType;
import lombok.Data;

import java.io.Serializable;

/**
 * note_note实体类
 * 
 * @author 
 *
 */
@Data
@TableName("note_note")
public class NoteNote implements Serializable {
	/***/
	@TableId(type = IdType.AUTO)
	private Integer id; 
	/***/
	private String title; 
	/***/
	private String userId; 
	/***/
	private String content; 
	/***/
	private Integer dataVersion; 
	/***/
	private Integer bookId; 

}
