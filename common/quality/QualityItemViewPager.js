import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    ScrollView,
    Image,
    FlatList,
} from 'react-native';
import ViewPager from 'react-native-viewpager';
const Utils = require('../utils/Utils');
export default class QualityItemViewPager extends React.Component {
    constructor(){
        super();
        this.state ={

        };
    }

    render() {
        let homeCategoryList = this.props.initObj.ListBean;

        return (
            <View
                style={styles.itemContainer}>
                <ViewPager
                    dataSource ={homeCategoryList}
                    renderPage = {this._renderPage}
                    isLoop={true}
                    autoPlay={false}
                />
            </View>
        );
    }
    _renderPage(data, pageId){
        return (
            <FlatList
                data ={data.value}
                numColumns ={4}
                renderItem ={(item)=>this._renderItem}
            />
        );
    }

    _renderItem(item, i){
        return (
            <View style ={styles.item2Block} >
                <View style ={styles.itemBlock}>
                    <Image style ={styles.itemImage} source ={{uri: Utils.getUrl(item.value.appUrl)}}/>
                    <Text>{item.value.categoryName}</Text>
                </View>
            </View>
        );
    }




}

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
    itemBlock:{
        width:60,
        height:70,
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        borderColor:'red',
        borderWidth:2
    },
    item2Block:{
        width:60,
        height:200,
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        borderColor:'red'
    },
    itemImage:{
        width:50,
        height:50,
    }

});


module.exports = QualityItemViewPager;
