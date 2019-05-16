package com.anywhere.note.service;

import com.anywhere.note.common.ServerResponse;
import com.anywhere.note.entity.NoteNote;
import com.baomidou.mybatisplus.service.IService;

/**
 * @author LIZONG.WEI
 * @version V1.0
 * @description
 * @date 2019/5/15 16:12
 */
public interface NoteNoteService extends IService<NoteNote> {
    ServerResponse insertNoteNote(NoteNote noteNote);

    ServerResponse updateNoteNote(NoteNote noteNote);

    ServerResponse deleteNoteNote(NoteNote noteNote);
}
