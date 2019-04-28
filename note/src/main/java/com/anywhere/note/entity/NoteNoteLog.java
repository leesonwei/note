package com.anywhere.note.entity;

import com.baomidou.mybatisplus.annotations.TableId;
import com.baomidou.mybatisplus.annotations.TableName;
import com.baomidou.mybatisplus.enums.IdType;
import lombok.Data;

import java.io.Serializable;

/**
 * note_note_log实体类
 * 
 * @author 
 *
 */
@Data
@TableName("note_note_log")
public class NoteNoteLog implements Serializable {
	/***/
	@TableId(type = IdType.AUTO)
	private Integer id; 
	/***/
	private Integer actionId; 
	/***/
	private String userId; 
	/***/
	private String content; 
	/***/
	private String result; 
	/***/
	private java.time.Instant createTime; 

}
