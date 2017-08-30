/**
 * Created by ZZH on 2017/8/13.
 * @Date: 2017/8/13
 * @Email: zzh_hz@126.com
 * @QQ: 1299234582
 * @Author: zzh
 * @Description: 品质 tab页面
 */
import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    ScrollView
} from 'react-native';
//导航栏
var QualityBar = require('./QualitySearchBar');


var QualityTabView = React.createClass({

    render: function () {
        return (
            <ScrollView style={styles.container}>
                <QualityBar initObj={{title: '济南'}}/>
                <View style={styles.altBlock}></View>
                <View style={styles.altBlock2}></View>


            </ScrollView>
        );
    }
});


var styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 20,
    },
    altBlock: {
        flex: 1,
        height: 200,
        backgroundColor: '#ffc655'
    },
    altBlock2: {
        flex: 1,
        height: 200,
        backgroundColor: '#8588ff'
    }

});

module.exports = QualityTabView;