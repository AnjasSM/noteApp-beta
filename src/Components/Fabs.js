import React, { Component } from 'react';
import { Icon } from 'native-base';
import { StyleSheet, TouchableOpacity } from 'react-native';

class Fabs extends Component {
    render() {
        return (
            <TouchableOpacity style={styles.fab} onPress={this.props.press}>
                <Icon style={styles.fabIcon} name='add' />
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    fab: { 
        backgroundColor: '#fff',
        width: 55, 
        height: 55, 
        position: 'absolute',
        bottom: 50,
        right: 20,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
        elevation: 8
    },
    fabIcon: { color: '#000' }
});

export default Fabs;
