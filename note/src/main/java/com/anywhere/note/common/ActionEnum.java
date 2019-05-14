/**
 * Copyright (C), 2015-2019, XXX有限公司
 * FileName: ActionEnum
 * Author:   anywhere
 * Date:     4/27 0027 16:33
 * Description:
 * History:
 * <author>          <time>          <version>          <desc>
 * 作者姓名           修改时间           版本号              描述
 */
package com.anywhere.note.common;

/**
 * 〈一句话功能简述〉<br> 
 * 〈〉
 *
 * @author anywhere
 * @create 4/27 0027
 * @since 1.0.0
 */
public enum ActionEnum{

    /**
     * 插入
     */
    INSERT(2, "INSERT"),
    /**
     * 更新
     */
    UPDATE(4, "UPDATE"),
    /**
     * 删除
     */
    DELETE(8, "DELETE"),
    /**
     * 查询
     */
    SELECT(16, "SELECT"),
    /**
     * 审核
     */
    CHECK(32, "CHECK"),
    /**
     * 反审核
     */
    UNCHECK(64, "UNCHECK"),
    /**
     * 导入
     */
    IMPORT(128, "IMPORT"),
    /**
     * 导出
     */
    EXPORT(256, "EXPORT");

    ActionEnum(Integer code, String value){
        this.code = code;
        this.value = value;
    }

    private Integer code;
    private String value;
    public Integer getCode() {
        return this.code;
    }

    public String getValue() {
        return this.value;
    }
}