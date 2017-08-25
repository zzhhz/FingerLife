import React from 'react';
import {
    View,
} from 'react-native';
import {Navigator} from 'react-native-deprecated-custom-components';


var Navigation = React.createClass({
    render: function () {
        var rootRoute = {
            component: this.props.component,
            passProps: {}
        };
        return (
            <Navigator
                initialRoute={rootRoute}
                renderScene={
                    (route, navigator) => {
                        var Component = route.component;
                        return (<View style={{flex: 1}}>
                            <Component
                                navigator={navigator}
                                /**
                                configureScene={() => {
                    Navigator.SceneConfigs.PushFromRight
                }}
                                * */
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
