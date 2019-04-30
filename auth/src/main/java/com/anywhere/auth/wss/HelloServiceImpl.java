package com.anywhere.auth.wss;

import org.springframework.stereotype.Component;

import javax.jws.WebService;

/**
 * @author LIZONG.WEI
 * @version V1.0
 * @description
 * @date 2019/4/30 16:27
 */
@WebService(name="保存", serviceName = "保存传进来的信息")
@Component
public class HelloServiceImpl implements HelloWebService {
    @Override
    public boolean save(String string) {
        System.out.println("recieve + " + string);
        return false;
    }
}
