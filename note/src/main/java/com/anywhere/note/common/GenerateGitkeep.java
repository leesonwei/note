package com.anywhere.note.common;

import lombok.extern.slf4j.Slf4j;

import java.io.File;
import java.io.IOException;

/**
 * @author LIZONG.WEI
 * @version V1.0
 * @description 空文件夹生成gitkeep文件
 * @date 2019/5/9 15:48
 */
@Slf4j
public class GenerateGitkeep {


    private GenerateGitkeep() {
    }

    /**
     * @author lizong.wei
     * @DESCRIPTION: 生成文件
     * @params: root
     * @return: void
     * @Date: 2019/5/9 16:16
     * @Modified By:
     */
    public static void generatorFile(String root) throws IOException {
        File[]  files = new File(root).listFiles();
        File[] subFiles;
        File keepFile;
        for (File file:files){
            if (file.isDirectory() && (!file.isHidden())) {
                subFiles = file.listFiles();
                if (subFiles.length == 0) {
                    keepFile = new File(file.getPath()+"\\.gitkeep");
                    if (keepFile.createNewFile()){
                        log.info("---------------->生成gitkeep文件完成");
                    }
                }
                generatorFile(file.getPath());
            }
        }
    }

    public static void generator() {
        try {
            generatorFile(System.getProperty("user.dir"));
        } catch (IOException e) {
            log.error("---------------->生成gitkeep文件失败",e);
        }
    }
}
