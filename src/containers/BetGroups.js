import React from 'react';
import { connect } from 'react-redux';
import { getTranslate } from 'react-localize-redux';
import { createGroupOnServer, joinGroup, leaveGroup } from '../actions';

import {
    DropdownButton,
    MenuItem,
    Button,
    Table,
    Glyphicon,
} from 'react-bootstrap';

import CreateGroupDialog from './CreateGroupDialog';

let BetGroups = ({ betGroups, translate, createGroupOnServer, joinGroup, leaveGroup }) => (
    <div>
        <DropdownButton id={'groups'} title={translate('groups')}>
            {
                betGroups.groupNames.map((groupName) => {
                    // TODO eventkeys
                    return (
                        <MenuItem
                            key={groupName}
                            eventKey="1"
                            active={groupName === betGroups.currentGroup.name}>
                            {groupName}
                        </MenuItem>
                    )
                })
            }
        </DropdownButton>

        {
            // only display join button when user is not member
            (!betGroups.currentGroup.userIsMember) ? (
                <Button bsStyle="primary">
                    {translate('joingroup')}
                </Button>
            ) : null
        }

        <CreateGroupDialog translate={translate} createGroupOnServer={createGroupOnServer} />

        <br />

        <h3>{betGroups.currentGroup.name}</h3>

        <Table>
            <thead>
                <tr>
                    <th>#</th>
                    <th>{translate('player')}</th>
                    <th>{translate('points')}</th>
                    <th>{translate('showbets')}</th>
                </tr>
            </thead>
            <tbody>
                {
                    betGroups.currentGroup.members.map((group) => {
                        return (
                            <tr key={group.number}>
                                <td>{group.number}</td>
                                <td>{group.name}</td>
                                <td>{group.points}</td>
                                <td><Button><Glyphicon glyph="user" /></Button></td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </Table>

        {
            // only display leave button when user is member
            (betGroups.currentGroup.userIsMember) ? (
                <Button bsStyle="danger" onClick={leaveGroup}>
                    {translate('leavegroup')}
                </Button>
            ) : null
        }
    </div>
);

const mapStateToProps = state => ({
    translate: getTranslate(state.locale),
    betGroups: state.betGroups
});

const mapDispatchToProps = dispatch => {
    return {
        createGroupOnServer: (name) => dispatch(createGroupOnServer(name)),
        joinGroup: () => dispatch(joinGroup()),
        leaveGroup: () => dispatch(leaveGroup())
    }
}

BetGroups = connect(mapStateToProps, mapDispatchToProps)(BetGroups)

export default BetGroups;