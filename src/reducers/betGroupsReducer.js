import _ from 'underscore';

const initialState = {
    groupNames: [
        "Team T",
        "Gruppe Kiosk",
        "TestGroupPeaseIgnore"
    ],
    currentGroup: {
        name: "Team T",
        userIsMember: true,
        members: [{
                number: 1,
                name: "hase",
                points: 888
            },
            {
                number: 2,
                name: "maulwurf",
                points: 555
            },
            {
                number: 3,
                name: "zebra",
                points: 222
            },
        ]
    },
};

const betGroupsReducer = (state = initialState, action) => {
    var newState = Object.assign({}, state);

    switch (action.type) {
        case "SWITCHGROUP":
            console.log(action.type);
            // TODO
            newState.currentGroup.name = action.newGroup
            return newState;
        case "JOINGROUP":
            console.log(action.type);
            // TODO
            return state;
        case "LEAVEGROUP":
            console.log(action.type);
            // TODO
            return state;
        case "CREATEGROUPONSERVER":
            console.log(action.type);
            // TODO
            return state;
        case "GETBETGROUPSSUCCESS":
            const betGroupsData = action.betGroupsData;
            newState.groupNames = _.pluck(betGroupsData, "name");
            return state;
        default: 
            return state;
    }
};

export default betGroupsReducer;