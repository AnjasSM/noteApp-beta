import React, { Component } from 'react';
import { Container, Content } from 'native-base';
import AppHeaders from '../Components/AppHeaders';
import FormNote from '../Components/FormNote';

class EditNote extends Component{
    goBack = () => {
        const { navigation } = this.props;
        navigation.goBack();
    }

    render() {
        return (
            <Container>
                <AppHeaders
                    headerName='EditNote'
                    title='EDIT NOTE'
                    leftPress={this.goBack}
                    rightPress={this.goBack}
                />
                <Content>
                    <FormNote />
                </Content>
            </Container>
        );
    }
}

export default EditNote;