package com.anywhere.auth.wss;

import javax.jws.WebMethod;
import javax.jws.WebService;

/**
 * @author LIZONG.WEI
 * @version V1.0
 * @description
 * @date 2019/4/30 16:26
 */
@WebService
public interface HelloWebService {

    @WebMethod( operationName = "保存")
    boolean save(String string);
}
