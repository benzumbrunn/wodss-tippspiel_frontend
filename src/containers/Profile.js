import React from 'react';
import { connect } from 'react-redux';
import { getTranslate } from 'react-localize-redux';
import { updateProfileOnServer, deleteProfileOnServer, resetPasswordOnServer } from '../actions/ProfileActions';
import _ from 'underscore';

import {
    Button,
    Panel,
    PanelGroup,
    ListGroup,
    ListGroupItem
} from 'react-bootstrap';

import ChangeProfileForm from './ChangeProfileForm';

let Profile = ({ user, translate, resetPasswordOnServer }) => (
    <div className="container-small">

        {/* TODO show when user is not logged in, don't show data */}

        <ListGroup>
            <ListGroupItem>{translate("username")}: {user.name}</ListGroupItem>

            <ListGroupItem>{translate("mail")}: {user.email}</ListGroupItem>

            <ListGroupItem>
                    {translate("reminders")}: {(user.reminders) ? (translate("on")) : (translate("off"))}
            </ListGroupItem>

            <ListGroupItem>
            {translate("dailyresults")}: {(user.dailyResults) ? (translate("on")) : (translate("off"))}
            </ListGroupItem>

        </ListGroup>
        
        <PanelGroup accordion id="profilePanel">

            {/* Update profile */}
            <Panel eventKey="1" bsStyle="custom">
                <Panel.Heading>
                    <Panel.Title toggle>
                        {translate("updateprofile")}
                    </Panel.Title>
                </Panel.Heading>
                <Panel.Body collapsible>
                    <ChangeProfileForm translate={translate} user={user} updateProfileOnServer={updateProfileOnServer} />
                </Panel.Body>
            </Panel>

            {/* Reset Password */}
            <Panel eventKey="2" bsStyle="custom">
                <Panel.Heading>
                    <Panel.Title toggle>
                        {translate("resetpassword")}
                    </Panel.Title>
                </Panel.Heading>
                <Panel.Body collapsible>
                    <Button
                        onClick={() => resetPasswordOnServer()}
                        bsStyle="blue">
                        {translate("resetpassword")}
                    </Button>
                </Panel.Body>
            </Panel>

            {/* Delete profile */}
            <Panel eventKey="3" bsStyle="custom">
                <Panel.Heading>
                    <Panel.Title toggle>
                        {translate("deleteprofile")}
                    </Panel.Title>
                </Panel.Heading>
                <Panel.Body collapsible>
                    <Button
                        onClick={() => deleteProfileOnServer()}
                        bsStyle="red">
                        {translate("deleteprofile")}
                    </Button>
                </Panel.Body>
            </Panel>

        </PanelGroup>

    </div>
);

const mapStateToProps = state => ({
    translate: getTranslate(state.locale),
    user: state.user,
});

const mapDispatchToProps = dispatch => {
    return {
        updateProfileOnServer: (newProfile) => dispatch(updateProfileOnServer(newProfile)),
        resetPasswordOnServer: () => dispatch(resetPasswordOnServer())
    }
}

Profile = connect(mapStateToProps, mapDispatchToProps)(Profile)

export default Profile;