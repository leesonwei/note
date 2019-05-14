package com.anywhere.note;

import com.anywhere.note.common.GenerateGitkeep;
import org.mybatis.spring.annotation.MapperScan;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication()
@MapperScan(basePackages = {"com.anywhere.note.dao"})
public class NoteApplication {

    public static void main(String[] args) {
        SpringApplication.run(NoteApplication.class, args);
        GenerateGitkeep.generator();
    }

}
