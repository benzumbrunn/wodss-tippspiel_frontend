import { configuration } from '../Configuration';

export function setRound(round) {
    return {
        type: "SETCURRENTROUND",
        round: round
    }
};

export function setScore(event, team, id) {
    return {
        type: "SETSCORE",
        team: team, // e.g. 'home' or 'guest'
        id: id,
        event: event
    }
};

export function save(event, id) {
    return {
        type: "SAVE",
        event: event,
        id: id
    }
};

export function switchGroup(newGroup) {
    return {
        type: "SWITCHGROUP",
        newGroup
    }
};

export function joinGroup(groupName) {
    return {
        type: "JOINGROUP",
        groupName: groupName
    }
};

export function leaveGroup(groupName) {
    return {
        type: "LEAVEGROUP",
        groupName: groupName
    }
};

export function createGroupOnServer(name, password) {
    return {
        type: "CREATEGROUPONSERVER",
        name: name,
        password: password
    }
};

export function changeMailOnServer(mail) {
    return {
        type: "CHANGEMAILONSERVER",
        mail: mail
    }
};

export function changePasswordOnServer(name) {
    return {
        type: "CHANGEPASSWORDONSERVER",
        name: name
    }
};

export function deleteProfileOnServer(name) {
    return {
        type: "DELETEPROFILEONSERVER",
        name: name
    }
};

export function onMailChange(event) {
    return {
        type: "ONMAILCHANGE",
        mail: event.target.value
    }
};

export function onPasswordChange(event) {
    return {
        type: "ONPASSWORDCHANGE",
        password: event.target.value
    }
};

export function requestLogin() {
    return {
        type: "REQUESTLOGIN"
    }
};

export function switchToRegister() {
    return {
        type: "SWITCHTOREGISTER"
    }
};

export function requestRegister(state) {
    return {
        type: "REQUESTREGISTER",
        mail: state.mail,
        username: state.username,
        password: state.password1
    }
};

export function fetchPlayerRankingFromServer() {
    const url = configuration.getValue('serverUrl') + '/users/ranking';
    return (dispatch) => {
        fetch(url).then(response => {
                return response.json()
            })
            .then((playerRanking) => {
                dispatch(playerRankingFetchSuccess(playerRanking));
            })
    }
}

export function playerRankingFetchSuccess(playerRanking) {
    return {
      type: "PLAYERRANKINGFETCHSUCCESS",
      playerRanking
    };
  }