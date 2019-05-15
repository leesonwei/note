package com.anywhere.note.service.impl;

import com.anywhere.note.common.ResponseCode;
import com.anywhere.note.common.ServerResponse;
import com.anywhere.note.dao.NoteBookLogMapper;
import com.anywhere.note.dao.NoteBookMapper;
import com.anywhere.note.entity.NoteBook;
import com.anywhere.note.entity.NoteBookLog;
import com.anywhere.note.service.NotebookService;
import com.baomidou.mybatisplus.service.impl.ServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

/**
 * @author LIZONG.WEI
 * @version V1.0
 * @description
 * @date 2019/5/15 16:14
 */
@Service
public class NoteBookServiceImpl extends ServiceImpl<NoteBookMapper, NoteBook> implements NotebookService {
    @Autowired
    private NoteBookLogMapper noteBookLogMapper;

    @Transactional(rollbackFor = Exception.class)
    @Override
    public ServerResponse insertNoteBook(NoteBook noteBook){
        boolean insert = this.insert(noteBook);
        if(insert){
            NoteBookLog log = new NoteBookLog();
            noteBookLogMapper.insert(log);
        } else {
            return ServerResponse.createByErrorCodeMessage(ResponseCode.ERROR.getCode(),ResponseCode.ERROR.getDesc());
        }
        return ServerResponse.createBySuccess();
    }
}
