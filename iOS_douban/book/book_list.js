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

var Utils = require('../common/Utils');
var SearchBar = require('../common/SearchBar');
var ServiceURL = require('../common/service');
var BookItem = require('./book_item');
var BookList = React.createClass({
    getInitialState:function () {
        var ds = new ListView.DataSource({
            rowHasChanged:(oldRow, newRow)=>oldRow!==newRow
        });
        return {
            //dataSource
            dataSource:ds,
            show:false,
            keywords:'React',
            

        };
    }
});


var styles = StyleSheet.create({

});

module.exports = BookList;









