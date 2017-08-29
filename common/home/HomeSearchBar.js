/**
 * Created by ZZH on 2017/8/29.
 * @Date: 2017/8/29
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

var Color = require('../utils/Colors');

var HomeSearchBar = React.createClass({
    render: function () {
        return (
            <View style={styles.searchContainer}>
                <View style={styles.searchView}>
                    <View style={styles.searchText}>
                        <Image style={styles.searchImage}
                               source={require('../../resources/img/main/home/ic_search.png')}/>
                        <Text>今天想吃什么</Text>
                    </View>
                </View>
            </View>)
    }
});

var styles = StyleSheet.create({
    searchContainer: {
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        backgroundColor:Color.Background
    },
    searchView: {
        marginTop: 3,
        marginRight: 15,
        marginLeft: 15,
        marginBottom: 3,
        borderRadius: 5,
        borderColor: Color.RecommendSearchBarBackground,
        backgroundColor:Color.RecommendSearchBarBackground,
        flex:1
    },
    searchText: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        flexDirection: 'row'
    },
    searchImage: {
        width: 20,
        height: 20,
    }


});


module.exports = HomeSearchBar;