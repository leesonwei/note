package com.anywhere.note.service.impl;

import com.anywhere.note.common.ActionEnum;
import com.anywhere.note.common.ResponseCode;
import com.anywhere.note.common.ServerResponse;
import com.anywhere.note.dao.NoteNoteLogMapper;
import com.anywhere.note.dao.NoteNoteMapper;
import com.anywhere.note.entity.NoteNote;
import com.anywhere.note.entity.NoteNoteLog;
import com.anywhere.note.service.NoteNoteService;
import com.baomidou.mybatisplus.mapper.EntityWrapper;
import com.baomidou.mybatisplus.service.impl.ServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Calendar;

/**
 * @author LIZONG.WEI
 * @version V1.0
 * @description
 * @date 2019/5/15 16:17
 */
@Service
public class NoteNoteServiceImpl extends ServiceImpl<NoteNoteMapper, NoteNote> implements NoteNoteService {

    @Autowired
    private NoteNoteLogMapper noteNoteLogMapper;

    @Transactional(rollbackFor = Exception.class)
    @Override
    public ServerResponse insertNoteNote(NoteNote noteNote) {
        boolean insert = this.insert(noteNote);
        if(insert){
            NoteNoteLog log = getLog(noteNote, ActionEnum.INSERT);
            noteNoteLogMapper.insert(log);
        } else {
            return ServerResponse.createByErrorCodeMessage(ResponseCode.ERROR.getCode(),ResponseCode.ERROR.getDesc());
        }
        return ServerResponse.createBySuccess();
    }

    @Transactional(rollbackFor = Exception.class)
    @Override
    public ServerResponse updateNoteNote(NoteNote noteNote) {
        boolean insert = this.update(noteNote,getUpdateDeleteWrapper(noteNote));
        if(insert){
            NoteNoteLog log = getLog(noteNote, ActionEnum.UPDATE);
            noteNoteLogMapper.insert(log);
        } else {
            return ServerResponse.createByErrorCodeMessage(ResponseCode.ERROR.getCode(),ResponseCode.ERROR.getDesc());
        }
        return ServerResponse.createBySuccess();
    }

    @Transactional(rollbackFor = Exception.class)
    @Override
    public ServerResponse deleteNoteNote(NoteNote noteNote) {
        boolean insert = this.delete(getUpdateDeleteWrapper(noteNote));
        if(insert){
            NoteNoteLog log = getLog(noteNote, ActionEnum.DELETE);
            noteNoteLogMapper.insert(log);
        } else {
            return ServerResponse.createByErrorCodeMessage(ResponseCode.ERROR.getCode(),ResponseCode.ERROR.getDesc());
        }
        return ServerResponse.createBySuccess();
    }

    private EntityWrapper<NoteNote> getUpdateDeleteWrapper(NoteNote noteNote){
        EntityWrapper<NoteNote> wrapper = new EntityWrapper<>();
        wrapper.eq("id",noteNote.getId());
        wrapper.eq("user_id",noteNote.getUserId());
        wrapper.eq("data_version",noteNote.getDataVersion());
        return wrapper;
    }

    private NoteNoteLog getLog(NoteNote noteNote, ActionEnum actionEnum){
        NoteNoteLog log = new NoteNoteLog();
        log.setUserId(noteNote.getUserId());
        log.setActionId(actionEnum.getCode());
        log.setContent(noteNote.toString());
        log.setResult("true");
        log.setCreateTime(Calendar.getInstance().getTime().toInstant());
        return log;
    }
}
