import React, { Component } from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { getCategories } from '../Publics/redux/actions/categories';
import { connect } from 'react-redux';

class Cards extends Component {
    componentDidMount = () => {
        this.getData()
    }

    getData = () => {
        this.props.dispatch(getCategories())
    }

    constructor(props) {
        super(props);
        this.Categories = this.props.categories.data;
    }

    render() {
        return(
            <View style={{ marginRight: 30 }}>
                <TouchableOpacity style={[styles.card, { backgroundColor: this.props.color}]} onPress={this.props.press} onLongPress={this.props.longPress}>
                    <Text style={styles.cardDate}>{this.props.date}</Text>
                    <Text numberOfLines={1} style={styles.cardTitle}>{this.props.title}</Text>
                    <Text numberOfLines={1} style={styles.cardCategory}>{this.props.category}</Text>
                    <Text numberOfLines={4} style={styles.cardContent}>{this.props.content}</Text>
                </TouchableOpacity>
            </View>
        );
    };
}

const styles = StyleSheet.create({
    card: {
        width: 138,
        height: 138,
        borderRadius: 7,
        elevation: 5,
        padding: 12,
        marginBottom: 27
    },
    cardDate: {
        color: '#fff',
        textAlign: 'right',
        fontSize: 12,
        fontWeight: '800',
        marginBottom: 5
    },
    cardCategory: {
        color: '#fff',
        fontSize: 13
    },
    cardTitle: {
        color: '#fff',
        fontWeight: '900',
        fontSize: 18
    },
    cardContent: {
        color: '#fff',
        fontSize: 13,
        fontWeight: '500'
    }
});

const mapStateToProps = (state) => {
    return {
        categories: state.categories
    }
}

export default connect(mapStateToProps)(Cards)