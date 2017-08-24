/**
 * Created by ZZH on 2017/8/23.
 * @Date: 2017/8/23
 * @Email: zzh_hz@126.com
 * @QQ: 1299234582
 * @Author: zzh
 * @Description:
 */
import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    ListView,
    Image,
    ScrollView,
    TouchableOpacity
} from 'react-native';


var SearchBar = require('../common/SearchBar');
var Util = require('../common/Utils');
var ServiceURL = require('../common/service');
var MovieItem = require('./movie_item');
var MovieWebView = require('../common/CustomWebView');


var MovieList = React.createClass({
    getInitialState: function () {
        var ds = new ListView.DataSource({
            rowHasChanged: (oldRow, newRow) => oldRow !== newRow
        });

        return {
            dataSource: ds,
            show: false,
            keywords: '暮光之城'
        };
    },
    _changeText: function (text) {
        this.setState({
            keywords: text
        });
    },
    _searchPress: function () {
        this.getData();
    },
    _showDetail: function (title, url) {
        var detailRoute = {
            component: MovieWebView,
            passProps: {
                backName: "电影",
                url: url,
                title: title,
                barTitle: title
            }
        };
        this.props.navigator.push(detailRoute);
    }
    ,

    render: function () {

        return (
            <ScrollView>
                <SearchBar
                    placeholder="请输入电影名称"
                    onPress={this._searchPress}
                    onChangeText={this._changeText}
                />
                {
                    this.state.show ?
                        <ListView
                            dataSource={this.state.dataSource}
                            initialListSize={10}
                            renderRow={this._renderRow}
                            renderSeparator={this._renderSeparator}
                        />
                        :
                        Util.loading
                }
            </ScrollView>
        );


    },
    _renderRow: function (movie) {
        return <MovieItem
            movie={movie}
            onPress={this._showDetail.bind(this, movie.title, movie.alt)}
        />;
    },
    _renderSeparator: function (sectionID: number, rowID: number) {

        var style = {
            height: 1,
            backgroundColor: '#CCCCCC'
        }
        return <View style={style} key={sectionID + rowID}/>;
    },
    componentDidMount: function () {
        this.getData();
    },
    getData: function () {
        this.setState({
            show: false
        });
        var that = this;

        Util.getRequest(ServiceURL.movie_search + "?count=20&q=" + this.state.keywords, function (data) {
            if (!data.subjects || data.subjects.length == 0) {
                return alert("未查询到相关数据");
            }
            var ds = new ListView.DataSource({
                rowHasChanged: (oldRow, newRow) => oldRow !== newRow
            });
            var movies = data.subjects;
            that.setState({
                show: true,
                dataSource: ds.cloneWithRows(movies)
            });

        }, function (error) {
            alert(error);
        })
    }
});
var styles = StyleSheet.create({});

module.exports = MovieList;









