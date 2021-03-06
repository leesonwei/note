package com.anywhere.note.controller;

import com.anywhere.note.common.ActionEnum;
import com.anywhere.note.common.ServerResponse;
import com.anywhere.note.entity.Action;
import com.anywhere.note.service.ActionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

/**
 * @author LIZONG.WEI
 * @version V1.0
 * @description
 * @date 2019/5/15 15:55
 */
@RestController
@RequestMapping("/action")
public class ActionController extends BaseController<ActionService,Action> {

    @Autowired
    public ActionController(ActionService actionService) {
        super(actionService);
    }

    @PostMapping ("/insert")
    public ServerResponse insert(){
        Action action;
        List<Action> actions = new ArrayList<>();
        for (ActionEnum actionEnum:ActionEnum.values()) {
            action = new Action();
            action.setName(actionEnum.getValue());
            action.setValue(actionEnum.getCode());
            actions.add(action);
        }
        if (!service.insertBatch(actions)) {
            return ServerResponse.createByError();
        }
        return ServerResponse.createBySuccess();
    }
}
