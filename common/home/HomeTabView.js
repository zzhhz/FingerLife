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
            totalPage: -1,
            currentPage:0,
        };
    },

    render: function () {
        return (
            <View style={styles.container}>
                <HomeSearchBar/>
                {
                    this.state.isRefresh ? Utils.loading :
                        <FlatList
                            ref={(flatList) => this._flatList = flatList}
                            refreshing ={this.state.isRefresh}
                            onRefresh ={()=>Utils.loading}
                            data={this.state.recommend}
                            renderItem={({item}) => <RecomedItem recommend={item.value}/>}
                            keyExtractor={this._keyExtractor}
                            initialNumToRender={5}
                            onEndReachedThreshold={0.1}
                            onEndReached={(info) => {
                                if (this.state.currentPage < this.state.totalPage){
                                    this.getRecommendList(this.state.currentPage+1)
                                } else {
                                    alert("没有更多的数据了");
                                }
                            }}
                            onScrollToEnd={(info) => {
                                alert("onScrollToEnd 滑动到底部了");
                            }}

                        />
                }
            </View>);
    },
    _keyExtractor: function (item, index) {
        return item.key + index;
    },
    getRecommendList: function (currentPage) {
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
                    recommend: that.state.recommend.concat(dataBlob),
                    isRefresh: false,
                    totalPage: json.totalPage,
                    currentPage: currentPage,
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
        this.getRecommendList(0);
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