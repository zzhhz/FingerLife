/**
 * 工具类
 */

import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    Dimensions,
    ActivityIndicator,
    AppRegistry
} from 'react-native';

var Utils = {
    windowSize: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height
    },

    //get
    /**
     *
     * @param url 访问的url
     * @param successCallback 成功回调方法
     * @param failCall 失败回调方法
     */
    getRequest: function (url, successCallback, failCall) {
        fetch(url).then((response) => response.json())
            .then((responseData) => successCallback(responseData))
            .catch((error) => failCall(error));

    },
    loading: <ActivityIndicator style={{marginTop: 200}}/>,
    parseParams: function (formData) {
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
        alert(str);
    }

};

module.exports = Utils;













