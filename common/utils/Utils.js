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
    getRequest:function (url, successCallback, failedCallback) {
        fetch(url).then((response)=> response.json()).then((json)=> successCallback(json)).catch((error) =>
        failedCallback(error));
    }

};





