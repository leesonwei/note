package com.anywhere.note.dao;

import com.anywhere.note.entity.NoteBook;
import com.baomidou.mybatisplus.mapper.BaseMapper;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Map;

/**
 * NoteBook的Dao接口
 * 
 * @author 
 *
 */
@Repository
public interface NoteBookMapper extends BaseMapper<NoteBook> {

    /**
     *
     * @param selectListWrapper
     * @return
     */
    List<NoteBook> selectListWithNote(Map<String,String> selectListWrapper);
}