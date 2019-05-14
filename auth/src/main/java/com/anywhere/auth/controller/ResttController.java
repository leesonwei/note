package com.anywhere.auth.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.Map;

/**
 * @author LIZONG.WEI
 * @version V1.0
 * @description
 * @date 2019/4/30 14:34
 */
@RestController
public class ResttController {

    @RequestMapping("/rest")
    @ResponseBody
    public Map<String, Object> rest(String name){
        Map<String, Object> map = new HashMap<>(5);
        map.put("rest", "rest");
        map.put("name",name);
        return map;
    }

    @RequestMapping("/authorication/login")
    @ResponseBody
    public String login(@RequestParam("userName") String userName, @RequestParam("password") String password){
        System.out.println(userName);
        if (userName != null && userName.equals(password)) {
            return "login success";
        }
        return "login fail";
    }
}
