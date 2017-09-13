import React, {Component} from 'react';
import {
    StyleSheet,
    View,
} from 'react-native';

const Utils = require('../utils/Utils');
var QualityItem = require('./QualityItem');
var QualityItemViewPager = React.createClass({
    render() {
        var ListBean = this.props.initObj;
        return (
            <View style={styles.itemContainer}>
                <View style={styles.hori}>
                    <View>
                        <QualityItem initObj={ListBean[0]}/>
                    </View>
                    <View>
                        <QualityItem initObj={ListBean[0]}/>
                    </View>
                    <View>
                        <QualityItem initObj={ListBean[0]}/>
                    </View>
                    <View>
                        <QualityItem initObj={ListBean[0]}/>
                    </View>
                </View>
                <View style={styles.hori}>
                    <View>
                        <QualityItem initObj={ListBean[0]}/>
                    </View>
                    <View>
                        <QualityItem initObj={ListBean[0]}/>
                    </View>
                    <View>
                        <QualityItem initObj={ListBean[0]}/>
                    </View>
                    <View>
                        <QualityItem initObj={ListBean[0]}/>
                    </View>
                </View>
            </View>
        );
    },
});

/*export class ScrollViewItem extends React.Component {
    render() {

        let set = this.props.initObj;

        return (
            <View style ={styles.itemContainer}>
                {
                    set.map((item, i) => this._renderItem(item, i))
                }
            </View>
        );
    }

    _renderItem(item, i){
        return (
            <View>

            </View>
        );
    }
}*/

var styles = StyleSheet.create({


    itemContainer: {
        flex: 1,
        height: 200,
    },
    itemBlock: {
        width: 60,
        height: 70,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: 'red',
        borderWidth: 2
    },
    item2Block: {
        width: 60,
        height: 200,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: 'red'
    },
    itemImage: {
        width: 50,
        height: 50,
    },
    hori: {
        justifyContent: 'space-around',
        height: 100,

    }

});


module.exports = QualityItemViewPager;
