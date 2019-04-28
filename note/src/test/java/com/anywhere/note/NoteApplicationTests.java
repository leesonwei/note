package com.anywhere.note;

import com.anywhere.note.entity.Action;
import com.anywhere.note.service.ActionService;
import org.hamcrest.core.IsEqual;
import org.junit.Assert;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.internal.matchers.Equals;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

@RunWith(SpringRunner.class)
@SpringBootTest(classes = NoteApplication.class)
public class NoteApplicationTests {


    @Test
    public void contextLoads() {

    }

}
