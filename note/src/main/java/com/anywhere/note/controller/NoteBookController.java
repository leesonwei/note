package com.anywhere.note.controller;

import com.anywhere.note.common.ServerResponse;
import com.anywhere.note.entity.NoteBook;
import com.anywhere.note.service.NotebookService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * @author LIZONG.WEI
 * @version V1.0
 * @description
 * @date 2019/5/15 17:04
 */
@RestController
public class NoteBookController extends BaseController<NotebookService, NoteBook> {
    @Autowired
    public NoteBookController(NotebookService notebookService) {
        super(notebookService);
    }

    @PostMapping("/notebook/insert")
    public ServerResponse insert(NoteBook noteBook){
        return service.insertNoteBook(noteBook);
    }

}
