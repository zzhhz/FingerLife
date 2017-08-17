import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    ActivityIndicator,
    AppRegistry,
    TouchableOpacity,
    TextInput,
    Navigator
} from 'react-native';


var Navigation = React.createClass({
    render: function () {
        var rootRoute = {
            component: this.props.component,
            passProps: {}
        };
        return (
            <Navigator
                initialRoute={rootRoute}
                configureScene={() => {
                    Navigator.SceneConfigs.FloatFromRight
                }}
                renderScene={


                    (route, navigator) => {
                        var Component = route.component;
                        return (<View style={{flex: 1}}>
                            <Component
                                navigator={navigator}
                                route={route}
                                {...route.passProps}
                            />
                        </View>);
                    }
                }
            />
        );
    }
});


module.exports = Navigation;
