import React from 'react'

import {
    Button,
    Form,
    FormControl,
    Col,
    ControlLabel,
    FormGroup
} from 'react-bootstrap';

class ChangeMailForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = { mail: '' };
        this.translate = props.translate;
        this.changeMailOnServer = props.changeMailOnServer;
    }

    handleChange = (e) => {
        if (e.target.id === 'formMail') {
            this.setState({ mail: e.target.value });
        }
    }

    render() {
        return (
            <Form horizontal>
                <FormGroup controlId="formMail">
                    <Col componentClass={ControlLabel} md={2}>
                        {this.translate('mail')}
                    </Col>
                    <Col md={5}>
                        <FormControl type="text"
                            placeholder={this.translate('mail')}
                            autoFocus
                            value={this.state.mail}
                            onChange={(e) => this.handleChange(e)} />
                    </Col>
                </FormGroup>

                <FormGroup>
                    <Col md={7} className="text-right">
                        <Button
                            bsStyle="blue"
                            disabled={this.state.mail.length === 0}
                            onClick={() => this.changeMailOnServer(this.state.mail)}>
                            {this.translate("change")}
                        </Button>
                    </Col>
                </FormGroup>
            </Form>
        )
    }
};

export default ChangeMailForm;