package com.anywhere.note.service;

import com.anywhere.note.common.ServerResponse;
import com.anywhere.note.entity.NoteBook;
import com.baomidou.mybatisplus.service.IService;

/**
 * @author LIZONG.WEI
 * @version V1.0
 * @description
 * @date 2019/5/15 16:11
 */
public interface NotebookService extends IService<NoteBook> {

    ServerResponse insertNoteBook(NoteBook noteBook);
}
