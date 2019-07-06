import React, { Component } from 'react';
import { StyleSheet, TouchableOpacity, ScrollView, FlatList, Modal } from 'react-native';
import { View, Text, Container } from 'native-base';
import { fetch } from '../Publics/redux/actions/notes';
import { connect } from 'react-redux';
import Fabs from '../Components/Fabs';
import Search from '../Components/Search';
import Cards from '../Components/Cards';
import AppHeaders from '../Components/AppHeaders';
import moment from 'moment';

class Home extends Component {
    toEditNote = () => {
        const { navigation } = this.props;
        navigation.navigate('EditNote');
    }

    toAddNote = () => {
        const { navigation } = this.props;
        navigation.navigate('AddNote');
    }

    toggleDrawer = () => {
        const { navigation } = this.props;
        navigation.toggleDrawer();
    }

    setModal(visible) { 
        this.setState({ modalVisible: visible }); 
    }

    fetchData = (search, sort) => {
        this.props.dispatch(fetch(search, sort));
    }

    componentDidMount = () => {
        this.fetchData();
    }

    constructor(props){
        super(props);
        this.state = {
            modalVisible: false
        }
    }

    _keyExtractor = (item, index) => item.id.toString();

    render() {
        return (
            <Container>
                <AppHeaders
                    headerName= 'home'
                    leftPress={this.toggleDrawer}
                    title='NOTE APP'
                    rightPress={() => {this.setModal(true)}}
                />
                <Modal transparent 
                animationType="none" 
                visible={this.state.modalVisible} 
                onRequestClose={() => { }}>
                    <TouchableOpacity style={{height: '100%'}}
                    onPress={() => { this.setModal(!this.state.modalVisible); }} >    
                        <View style={{ paddingRight: 15, paddingLeft: 200, paddingTop: 50 }}>
                            <View style={styles.modal}>
                                <TouchableOpacity onPress={() => { 
                                    this.fetchData('','asc')
                                    }} >
                                    <Text style={{padding: 8}}>ASCENDING</Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => { 
                                    this.fetchData('','desc')
                                    }} >
                                    <Text style={{padding: 8}}>DESCENDING</Text>
                                </TouchableOpacity>
                            </View> 
                        </View>
                    </TouchableOpacity>
                </Modal>
                <Search />
                <ScrollView>
                    <View style={styles.content}>
                        <FlatList
                            numColumns={2}
                            data={this.props.notes.data}
                            keyExtractor={this._keyExtractor}
                            renderItem={
                                ({ item, index }) => (
                                    <Cards
                                        press={this.toEditNote}
                                        date={moment(item.time).format("D MMMM")}
                                        title={item.title}
                                        category={item.category}
                                        content={item.note}
                                    />
                                )
                            }
                            refreshing={this.props.notes.isLoading}
                            onRefresh={this.fetchData}
                        />
                    </View>
                </ScrollView>
                <Fabs press={this.toAddNote}/>

            </Container>
        );
    }
}

const styles = StyleSheet.create({
    modal: {
        elevation: 7,
        backgroundColor: '#fff',
        padding: 15,
        borderRadius: 10,
    },
        content: {
        marginLeft: 27,
        justifyContent: 'space-between',
        paddingTop: 120
    }
});

const mapStateToProps = (state) => {
    return {
        notes: state.notes
    }
}

export default connect(mapStateToProps)(Home)