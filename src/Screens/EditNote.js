import React, { Component } from 'react';
import { StyleSheet, Alert } from 'react-native';
import { Container, Content, View, Item, Picker, Form, Input, Textarea, Text } from 'native-base';
import { addNote } from '../Publics/redux/actions/notes';
import { getCategories } from '../Publics/redux/actions/categories';
import { connect } from 'react-redux';
import AppHeaders from '../Components/AppHeaders';

class AddNote extends Component {

    constructor(props) {
        super(props);
        this.state = {
            id_category: '',
            category: '',
            note: '',
            title: ''
        };
    }
    
    goBack = () => {
        const { navigation } = this.props;
        navigation.goBack();
    }

    componentDidMount = () => {
        this.getData()
    }

    getData = () => {
        this.props.dispatch(getCategories())
    }

    _editNote = () => {
        const { title, note, id_category } = this.state;
        if (title !== '' && note !== '') {
            let data = {
                'title': title,
                'note':note,
                'id_category':id_category
            }
            this.props.dispatch(addNote(data, id_category));
            this.props.navigation.navigate('HomeNote');
        } else {
            Alert.alert("Field Description or title cannot empty")
        }
    }

    render() {
        return (
            <Container>
                <AppHeaders 
                headerName = 'AddNote'
                title='EDIT NOTE'
                leftPress={this.goBack}
                rightPress={this._editNote}
                />
                <Content>
                    <Form>
                        <View style={styles.input}>
                            <Input
                                placeholder='EDIT TITLE ...'
                                placeholderTextColor='#c4c4c4'
                                style={styles.inputTitle}
                                onChangeText={(text) => this.setState({title:text})} >{}</Input>
                            <Textarea 
                                rowSpan={9} 
                                placeholder='ADD DESCRIPTION ...' 
                                placeholderTextColor='#c4c4c4' 
                                style={styles.inputDescription}
                                onChangeText={(text) => this.setState({note:text})} >{}</Textarea>
                        </View>

                        <View style={styles.categoryBar}>
                            <Text style={styles.categoryText}>CATEGORY</Text>
                            <Item picker style={styles.picker}>
                                <Picker selectedValue={this.state.id_category}
                                    onValueChange={(itemValue, itemIndex) =>
                                    this.setState({id_category: itemValue })}>
                                    {this.props.categories.data.map((item, index) => {
                                        return (
                                            <Picker.Item label={item.category} value={item.id}/>
                                        )
                                    })}
                                </Picker>
                            </Item>
                        </View>
                    </Form>
                </Content>
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    input: {
        padding: 20, marginTop: 40
    },
    inputTitle: {
        fontSize: 24,
        fontWeight: '400',
        marginLeft: 5
    },
    inputDescription: {
        fontSize: 24,
        fontWeight: '400'
    },
    categoryBar: {
        padding: 30,
        width: 250
    },
    categoryText: {
        fontWeight: '600',
        marginBottom: 10
    },
    picker: {
        backgroundColor: '#fff',
        paddingLeft: 15,
        borderBottomColor: 'transparent',
        elevation: 5,
    },
});

const mapStateToProps = (state) => {
    return {
        notes: state.notes,
        categories: state.categories
    }
}

export default connect(mapStateToProps)(AddNote)
               