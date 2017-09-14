/**
 * Created by ZZH on 2017/09/14.
 * @Date: 2017/09/14 下午4:07
 * @Email: zzh_hz@126.com
 * @QQ: 1299234582
 * @Author: zzh
 * @Description: 首页面-> 搜索栏
 */


import React from 'react';
import {
    View,
    StyleSheet,
    Text,
    Image
} from 'react-native';

var Utils = require('../utils/Utils');
var NearStoreItem = React.createClass({
    render: function () {
        var obj = this.props.initObj;
        return (<View style={styles.storeContainer}>
            <Image style={styles.image} source={{uri: Utils.getUrl(obj.shopLogo)}}/>
            <Text>NearStoreItem</Text>
        </View>);
    }
});

var styles = StyleSheet.create({
    storeContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    image: {
        height: 100,
        widget: 150
    }
});

module.exports = NearStoreItem;