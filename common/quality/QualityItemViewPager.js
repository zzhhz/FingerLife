import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    FlatList,
} from 'react-native';

var QualityItemViewPager = React.createClass({
    render: function () {
        var data = this.props.initObj;
        return (
            <FlatList
                style={styles.itemContainer}
                data={data.ListBean}
                numColumns={4}
                keyExtractor={this._keyExtractor}
                initialNumToRender={5}
                renderItem={(item) => this._renderItem}
            />
        );
    },

    _renderItem: function (item) {
        var bean = item.value;
        return (
            <View style={styles.item2Block}>
                <View style={styles.itemBlock}>
                    <Image style={styles.itemImage} source={{uri: bean.appUrl}}/>
                    <Text>{bean.categoryName}</Text>
                </View>
            </View>
        );
    },
    _keyExtractor: function (item, index) {
        return item.key;
    },

});

var styles = StyleSheet.create({


    itemContainer: {
        flex: 1,
        backgroundColor: 'blue'
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
    }

});


module.exports = QualityItemViewPager;
