package com.anywhere.note.controller;

import com.anywhere.note.common.ServerResponse;
import com.anywhere.note.entity.NoteNote;
import com.anywhere.note.service.NoteNoteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * @author LIZONG.WEI
 * @version V1.0
 * @description
 * @date 2019/5/16 9:31
 */
@RestController
@RequestMapping("/notenote")
public class NoteNoteController extends BaseController<NoteNoteService, NoteNote> {
    @Autowired
    public NoteNoteController(NoteNoteService noteNoteService) {
        super(noteNoteService);
    }

    @PostMapping("/insert")
    public ServerResponse insert(@RequestBody NoteNote noteNote){
        return service.insertNoteNote(noteNote);
    }

    @PostMapping("/update")
    public ServerResponse update(@RequestBody NoteNote noteNote){
        return service.updateNoteNote(noteNote);
    }

    @PostMapping("/delete")
    public ServerResponse delete(@RequestBody NoteNote noteNote){
        return service.deleteNoteNote(noteNote);
    }
}
