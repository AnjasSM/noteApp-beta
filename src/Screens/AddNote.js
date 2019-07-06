import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Container, Content, View, Item, Picker, Form, Input, Textarea, Text } from 'native-base';
import { addNote } from '../Publics/redux/actions/notes';
import { getCategories } from '../Publics/redux/actions/categories';
import { connect } from 'react-redux';
import AppHeaders from '../Components/AppHeaders';

class AddNote extends Component {
    goBack = () => {
        const { navigation } = this.props;
        navigation.goBack();
    }

    constructor(props) {
        super(props);
        this.Categories = this.props.categories.data;
        this.state = {
            category_id: '',
            category: '',
            note: '',
            title: ''
        };
    }

    componentDidMount = () => {
        this.getData()
    }

    getData = () => {
        this.props.dispatch(getCategories())
    }

    updateCategory = (input) => {
        this.setState({ category: input })
        {
            this.Categories.map((category) => {
                if (category.name == input) this.setState({ category_id: category.id })
            })
        }
    }

    addNotes = () => {
        const { title, note, category_id } = this.state;
        if (title !== '' && category_id !== '') {
            this.props.dispatch(addNote({ title, note, category_id }));
            this.props.navigation.navigate('Home');
        }
    }

    render() {
        return (
            <Container>
                <AppHeaders 
                headerName = 'AddNote'
                title='ADD NOTE'
                leftPress={this.goBack}
                rightPress={this.addNotes}
                />
                <Content>
                    <Form>
                        <View style={styles.input}>
                            <Input
                                placeholder='ADD TITLE ...'
                                placeholderTextColor='#c4c4c4'
                                style={styles.inputTitle}
                                onChangeText={(text) => this.setState({title:text})} />
                            <Textarea 
                                rowSpan={9} 
                                placeholder='ADD DESCRIPTION ...' 
                                placeholderTextColor='#c4c4c4' 
                                style={styles.inputDescription}
                                onChangeText={(text) => this.setState({note:text})} />
                        </View>

                        <View style={styles.categoryBar}>
                            <Text style={styles.categoryText}>CATEGORY</Text>
                            <Item picker style={styles.picker}>
                                <Picker selectedValue={this.state.category} onValueChange={this.updateCategory}>
                                    <Item label='ADD CATEGORY'/>
                                    {this.Categories.map((category, key) =>
                                        <Item key={category.id} label={category.name} value={category.name} />)
                                    }
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
        width: 250,
    },
    categoryText: {
        fontWeight: '600',
        marginBottom: 10
    },
    picker: {
        backgroundColor: '#fff',
        paddingLeft: 19,
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