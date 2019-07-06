import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { View, Item, Picker, Form, Input, Textarea, Text } from 'native-base';

class FormNote extends Component {   
    constructor(props) {
        super(props);
        this.state = { Category : ''}
    }

    updateCategory = (Category) => {
        this.setState({ Category: Category })
    }

    render() {
        return (
            <Form>
                <View style={styles.input}>
                    <Input 
                    placeholder='ADD TITLE ...' 
                    placeholderTextColor='#c4c4c4' 
                    style={styles.inputTitle} />
                    <Textarea rowSpan={9} placeholder='ADD DESCRIPTION ...' placeholderTextColor='#c4c4c4' style={styles.inputDescription} />
                </View>

                <View style={styles.categoryBar}>
                    <Text style={styles.categoryText}>CATEGORY</Text>
                    <Item picker style={styles.picker}>
                        <Picker selectedValue={this.state.Cateory} onValueChange={this.updateCategory}>
                            {
                                this.Categories.map((category) => 
                                <Item key={category.key} label={category.name} value={category.key} />)
                            }
                        </Picker>
                    </Item>
                    
                </View>
            </Form>
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

export default FormNote;