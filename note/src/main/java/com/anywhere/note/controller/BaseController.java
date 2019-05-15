package com.anywhere.note.controller;

import com.baomidou.mybatisplus.mapper.EntityWrapper;
import com.baomidou.mybatisplus.mapper.Wrapper;
import com.baomidou.mybatisplus.service.IService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.List;

/**
 * @Classname BaseController
 * @Date 2019/3/26 16:42
 * @Author LIZONG.WEI
 * @Since 1.8
 */
public abstract class BaseController<T extends IService,K> {

    protected  T service;

    public BaseController(T t){
        this.service = t;
    }

    @GetMapping("/select/one")
    @ResponseBody
    public K selectOne(K k){
        return (K)service.selectOne(getSelectOneWrapper(k));
    }

    @GetMapping("/select/list")
    @ResponseBody
    public List<K> selectList(K k){
        return service.selectList(getSelectListWrapper(k));
    }

    protected Wrapper getSelectOneWrapper(K k){
        EntityWrapper<K> wrapper = new EntityWrapper<>();
        return wrapper;
    }

    protected Wrapper getSelectListWrapper(K k){
        EntityWrapper<K> wrapper = new EntityWrapper<>();
        return wrapper;
    }

    protected Wrapper getDeleteWrapper(K k){
        EntityWrapper<K> wrapper = new EntityWrapper<>();
        return wrapper;
    }

}
