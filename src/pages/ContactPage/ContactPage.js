import React, { Component } from 'react';
import { Grid, Form, Button, Input, TextArea } from 'semantic-ui-react';

class ContactPage extends Component {
    render() {
        return (
            <Grid container centered stackable>
                <Grid.Row>
                    <Grid.Column>
                        <Form>
                            <Form.Field control={Input} label='Tiêu đề' placeholder='Tiêu đề' />
                            <Form.Field id='form-textarea-control-opinion' control={TextArea} label='Nội dung' placeholder='Nội dung' />
                            <Button type='submit'>Gửi</Button>
                        </Form>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        );
    }
}

export default ContactPage;