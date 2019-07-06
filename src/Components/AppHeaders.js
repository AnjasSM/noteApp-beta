import React, { Component } from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import { View, Header, Title, Thumbnail } from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';

class AppHeader extends Component {
    render() {
        const { title, leftPress, rightPress,headerName } = this.props
        return (
            <Header style={styles.header}>
                <View>
                    {
                        headerName === 'home' ? (
                            <TouchableOpacity onPress={ leftPress }>
                                <Thumbnail small source={{ uri: 'http://www.sclance.com/pngs/png-avatar/png_avatar_1049041.png' }} />
                            </TouchableOpacity>
                        ) : (
                            <TouchableOpacity onPress={ leftPress }>
                                <Icon name='chevron-left' size={23} />
                            </TouchableOpacity> )
                    }  
                </View>
                <View>
                    <Title style={{color: 'black'}}>{title}</Title>
                </View>
                <View>
                    {
                        headerName === 'home' ? (
                            <TouchableOpacity onPress={ rightPress }>
                                <Icon name='sort-amount-asc' size={22} />
                            </TouchableOpacity>
                        ) : (
                            <TouchableOpacity onPress={ rightPress }>
                                <Icon color='green' name='check-circle-o' size={30} />
                            </TouchableOpacity>
                        )
                    }
                </View>
            </Header>
        )
    }
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: '#fff',
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 5,
        },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,
        elevation: 10,
        justifyContent: 'space-between',
        alignItems: 'center'
    },
})

export default AppHeader;