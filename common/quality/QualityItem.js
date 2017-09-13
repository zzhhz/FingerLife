/**
 * Created by ZZH on 2017/9/13.
 * @Date: 2017/9/13
 * @Email: zzh_hz@126.com
 * @QQ: 1299234582
 * @Author: zzh
 * @Description:
 */
import React from 'react';
import {
    View,
    StyleSheet,
    Text,
    Image
} from 'react-native';

var Utils = require('../utils/Utils');
var QualityItem = React.createClass({
    render: function () {
        var item = this.props.initObj;
        var url = Utils.getUrl(item.appUrl);
        return (
            <View style={styles.container}>
                <Image style ={styles.image}
                       source={require('../../resources/img/ic_zhidong.png')}/>
                <Text style ={styles.text}>{item.categoryName}</Text>
            </View>
        );
    }
});

var styles = StyleSheet.create({
    container: {
        height: 80,
        backgroundColor: '#fff',
        justifyContent:'center',
        alignItems:'center',
    },
    image: {
        height: 65,
        width:65,
        resizeMode:'center'
    },
    text: {
        height: 15,
        color: '#f00'
    }
});

module.exports = QualityItem;