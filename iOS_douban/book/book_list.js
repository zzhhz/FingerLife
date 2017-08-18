import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    ListView,
    ScrollView,
} from 'react-native';

var Utils = require('../common/Utils');
var SearchBar = require('../common/SearchBar');
var ServiceURL = require('../common/service');
var BookItem = require('./book_item');
var BookList = React.createClass({
    getInitialState: function () {
        var ds = new ListView.DataSource({
            rowHasChanged: (oldRow, newRow) => oldRow !== newRow
        });
        return {
            //dataSource
            dataSource: ds,
            show: false,
            keywords: 'React',
        };
    },
    render: function () {
        return (
            <ScrollView>
                <SearchBar/>
                {
                    //请求数据时，判断是显示数据，还是显示等待框
                    this.state.show ? <ListView
                        dataSource ={this.state.dataSource}
                        initialListSize ={10}
                        renderRow ={this._renderRow}
                        renderSeparator ={this._renderSeparator}

                    /> : Utils.loading
                }
            </ScrollView>
        );
    },
    componentDidMount: function () {
        //数据请求
        this.getData();
    },
    _renderRow: function (book) {
        return <BookItem book={book}/>
    },
    _renderSeparator: function (sectionID: number, rowID: number) {
        var style = {
            height: 1,
            backgroundColor: '#CCC'
        }

        return <View style={style} key={sectionID + rowID}/>;
    },
    getData: function () {
        //开启 等待框
        this.setState({
            show: false
        });

        //请求数据
        var that = this;
        var url = ServiceURL.book_search + "?start=0&count=20&q=" + this.state.keywords;
        Utils.getRequest(url, function (data) {
            //success
            if (!data.books || data.books.length == 0) {
                return alert("未查询到相关书籍");
            }
            //
            var ds = new ListView.DataSource({
                rowHasChanged: (oldRow, newRow) => oldRow !== newRow
            });
            that.setState({
                show: true,
                dataSource: ds.cloneWithRows(data.books)
            })


        }, function (error) {

            alert("请求失败: " + error+",,   "+url);
        })
    }
});


var styles = StyleSheet.create({});

module.exports = BookList;









