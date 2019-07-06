import React, { Component } from 'react';
import { StyleSheet, View, TextInput, Text } from 'react-native';
import { fetch } from '../Publics/redux/actions/notes';
import { connect } from 'react-redux';

class Search extends Component {
    constructor(props) {
    super(props);
        this.state = {text: ''};
    }

    getData = (search,sort) => {
        this.props.dispatch(fetch(search,sort))
    }

    render() {
        return(
            <View style={styles.searchBar}>
                <TextInput 
                    onChangeText={(text) => {
                            this.setState({text})
                            this.getData(text)
                        }
                    }
                    style={{ marginLeft: 10, marginRight: 25 }} 
                    placeholder="Search..."/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    searchBar: {
        zIndex: 1,
        backgroundColor: '#fff',
        paddingLeft: 15,
        borderBottomColor: 'transparent',
        elevation: 10,
        marginTop: 85,
        alignSelf: 'center',
        height: 45,
        width: 307,
        position: 'absolute',
        borderRadius: 20
    }
});

const mapStateToProps = (state) => {
    return {
        notes: state.notes
    }
}

export default connect(mapStateToProps)(Search)