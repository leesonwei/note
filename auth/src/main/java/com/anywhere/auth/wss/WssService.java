package com.anywhere.auth.wss;

import javax.jws.WebMethod;
import javax.jws.WebService;

/**
 * @author LIZONG.WEI
 * @version V1.0
 * @description
 * @date 2019/4/30 14:44
 */
@WebService
public interface WssService {
    @WebMethod
    public String sayHello(String name);
}
