import React, {Component} from 'react';
import {
    Dimensions,
    ActivityIndicator,
} from 'react-native';

var Utils = {
    /**
     * 屏幕尺寸
     * */
    WindowSize: {
        height: Dimensions.get("window").height,
        width: Dimensions.get("window").width
    },
    Loading: <ActivityIndicator style={{justifyContent: 'center', alignItems: 'center'}}/>,
    /**
     * 网络封装
     * @param url 连接的地址
     * @param successCallback 成功回调，传出去的值是一个json字符串
     * @param failedCallback 失败回调 传出去的值是错误信息
     */
    getRequest: function (url, successCallback, failedCallback) {
        fetch(url).then((response) => response.json()).then((json) => successCallback(json)).catch((error) =>
            failedCallback(error));
    },
    parseParams: function (formData, call) {
        /*var form = formData;
        var F = new FormData();
        for (var i = 0; i < form.length; i++) {
            let parts = F.getParts();
            parts.length;
            parts.
        }*/
        let parts = formData.getParts();
        //parts.entries();
        var str = "";
        for (var i = 0; i < parts.length; i++) {
            str = str + parts.pop().toString();
        }
        (str) => call(str);
    },
    postRequest: function (url, formData, successCallback, failedCallback) {
        fetch(url,{
            method:'POST',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body:formData
        }).then((response) => response.json()).then((json) => successCallback(json)).catch((error) =>
            failedCallback(error));
    },

};

module.exports = Utils;




