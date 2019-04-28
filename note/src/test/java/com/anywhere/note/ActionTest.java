/**
 * Copyright (C), 2015-2019, XXX有限公司
 * FileName: ActionTest
 * Author:   anywhere
 * Date:     4/27 0027 16:29
 * Description:
 * History:
 * <author>          <time>          <version>          <desc>
 * 作者姓名           修改时间           版本号              描述
 */
package com.anywhere.note;

import com.anywhere.note.common.ActionEnum;
import com.anywhere.note.entity.Action;
import com.anywhere.note.service.ActionService;
import org.hamcrest.core.IsEqual;
import org.junit.Assert;
import org.junit.Test;
import org.springframework.beans.factory.annotation.Autowired;

/**
 * 〈一句话功能简述〉<br> 
 * 〈〉
 *
 * @author anywhere
 * @create 4/27 0027
 * @since 1.0.0
 */
public class ActionTest extends NoteApplicationTests {
    @Autowired
    private ActionService actionService;

    @Test
    public void insert(){
        Action action = new Action();
        action.setName(ActionEnum.INSERT.getValue());
        action.setValue(ActionEnum.INSERT.getCode());
        Assert.assertThat(actionService.insert(action) , IsEqual.equalTo(true));
    }

}