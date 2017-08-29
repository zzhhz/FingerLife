/**
 * Created by ZZH on 2017/8/13.
 * @Date: 2017/8/13
 * @Email: zzh_hz@126.com
 * @QQ: 1299234582
 * @Author: zzh
 * @Description: 首页面
 */
import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    FlatList,
} from 'react-native';

var HomeSearchBar = require('./HomeSearchBar');
var Colors = require('../utils/Colors');
var Utils = require('../utils/Utils');
var RecomedItem = require('./RecommendItem');
var Constants = require('../utils/Constants');

var HomeTabView = React.createClass({

    getInitialState: function () {
        return {
            isRefresh: true,
            recommend: [],
            totalPage:-1
        };
    },

    render: function () {
        return (
            <View style={styles.container}>
                <HomeSearchBar/>
                {
                    this.state.isRefresh ? Utils.loading :
                        <FlatList
                            data={this.state.recommend}
                            renderItem={({item}) => <RecomedItem recommend ={item.value}/>}
                            keyExtractor={this._keyExtractor}
                            initialNumToRender ={5}
                            onEndReached={(info) => {
                                alert("滑动到底部了");
                            } }
                        />
                }
            </View>);
    },
    _keyExtractor: function (item, index) {
        return item.key + index;
    },
    getRecommendList: function () {
        var formData = new FormData();
        var params = "{\"pageNum\":\"10\",\"userId\":\"76c626cee9e34097aa8b01abdd0b8ef1\",\"cityId\":\"370100\",\"currentPage\":\"0\"}";
        formData.append("data", params);
        var that = this;
        Utils.postRequest(Constants.RECOMMEND, formData, function (json) {
            if ('7001' == json.result) {
                let dataBlob = [];
                let i = 0;
                json.list.map(function (item) {
                    dataBlob.push({
                        key: i,
                        value: item,
                    })
                    i++;
                });

                that.setState({
                    recommend: dataBlob,
                    isRefresh: false,
                    totalPage:json.totalPage
                });
                dataBlob = null;
            } else {
                alert(json.error);
            }
        }, function (error) {
            alert(error);
        });
    },
    componentDidMount: function () {
        this.getRecommendList();
    }

});

var styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 20,
        backgroundColor: Colors.Background
    }
});

module.exports = HomeTabView;