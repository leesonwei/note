package com.anywhere.auth.wss;

import org.springframework.stereotype.Component;

import javax.jws.WebService;

/**
 * @author LIZONG.WEI
 * @version V1.0
 * @description
 * @date 2019/4/30 14:46
 */
@WebService(name = "hello", targetNamespace = "http://wss.auth.anywhere.com/",endpointInterface = "com.anywhere.auth.wss.WssService")
@Component
public class BaseWssServiceImpl implements WssService {
    @Override
    public String sayHello(String name) {
        return "hello " + name;
    }
}
