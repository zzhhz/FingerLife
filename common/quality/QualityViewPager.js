/**
 * Created by ZZH on 2017/8/30.
 * @Date: 2017/8/30
 * @Email: zzh_hz@126.com
 * @QQ: 1299234582
 * @Author: zzh
 * @Description:  品质商城，广告轮播图
 */
import React from 'react';
import {
    View,
    StyleSheet,
    Text,
    Image,
} from 'react-native';

var ViewPager = require('react-native-viewpager');
const Utils = require('../utils/Utils');
var QualityViewPager = React.createClass({
    render: function () {
        var obj = this.props.initObj.obj;
        return (
            <View style={styles.container}>
                <ViewPager
                    dataSource={obj}
                    renderPage={this._renderPage}
                    isLoop={true}
                    autoPlay={true}
                />
            </View>
        );
    },
    _renderPage: function (data, pageID) {
        return (
            <Image
                source={{uri: Utils.getUrl(data.appImgpath)}}
                style={[styles.container,{backgroundColor:'red'}]}/>
        );
    },

});

var styles = StyleSheet.create({
    container: {
        flex: 1,
        height: 150,
    }
});

module.exports = QualityViewPager;