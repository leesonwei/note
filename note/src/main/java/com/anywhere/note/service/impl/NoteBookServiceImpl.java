package com.anywhere.note.service.impl;

import com.anywhere.note.common.ActionEnum;
import com.anywhere.note.common.ResponseCode;
import com.anywhere.note.common.ServerResponse;
import com.anywhere.note.dao.NoteBookLogMapper;
import com.anywhere.note.dao.NoteBookMapper;
import com.anywhere.note.entity.NoteBook;
import com.anywhere.note.entity.NoteBookLog;
import com.anywhere.note.service.NotebookService;
import com.baomidou.mybatisplus.mapper.EntityWrapper;
import com.baomidou.mybatisplus.service.impl.ServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Calendar;

/**
 * @author LIZONG.WEI
 * @version V1.0
 * @description 笔记本实体类
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
            NoteBookLog log = getLog(noteBook,ActionEnum.INSERT);
            noteBookLogMapper.insert(log);
        } else {
            return ServerResponse.createByErrorCodeMessage(ResponseCode.ERROR.getCode(),ResponseCode.ERROR.getDesc());
        }
        return ServerResponse.createBySuccess();
    }

    @Transactional(rollbackFor = Exception.class)
    @Override
    public ServerResponse updateNoteBook(NoteBook noteBook) {
        boolean insert = this.update(noteBook,getUpdateDeleteWrapper(noteBook));
        if(insert){
            NoteBookLog log = getLog(noteBook,ActionEnum.UPDATE);
            noteBookLogMapper.insert(log);
        } else {
            return ServerResponse.createByErrorCodeMessage(ResponseCode.ERROR.getCode(),ResponseCode.ERROR.getDesc());
        }
        return ServerResponse.createBySuccess();
    }

    @Transactional(rollbackFor = Exception.class)
    @Override
    public ServerResponse deleteNoteBook(NoteBook noteBook) {
        boolean insert = this.delete(getUpdateDeleteWrapper(noteBook));
        if(insert){
            NoteBookLog log = getLog(noteBook,ActionEnum.DELETE);
            noteBookLogMapper.insert(log);
        } else {
            return ServerResponse.createByErrorCodeMessage(ResponseCode.ERROR.getCode(),ResponseCode.ERROR.getDesc());
        }
        return ServerResponse.createBySuccess();
    }

    private EntityWrapper<NoteBook> getUpdateDeleteWrapper(NoteBook noteBook){
        EntityWrapper<NoteBook> wrapper = new EntityWrapper<>();
        wrapper.eq("id",noteBook.getId());
        wrapper.eq("user_id",noteBook.getUserId());
        wrapper.eq("data_version",noteBook.getDataVersion());
        return wrapper;
    }

    private NoteBookLog getLog(NoteBook noteBook,ActionEnum actionEnum){
        NoteBookLog log = new NoteBookLog();
        log.setUserId(noteBook.getUserId());
        log.setActionId(actionEnum.getCode());
        log.setContent(noteBook.toString());
        log.setResult("true");
        log.setCreateTime(Calendar.getInstance().getTime().toInstant());
        return log;
    }
}
