import React from 'react'
import { connect } from 'react-redux';
import { getTranslate, getActiveLanguage } from 'react-localize-redux';

import Game from './Game';
import { getGames, getUserbets } from '../../actions/BetActions';

import {
    Button,
    Glyphicon
} from 'react-bootstrap';

let Bets = ({ user, currentRound, bets, getGames }) => (
    <div>
        <Button className="refresh-button" onClick={() => { (user.loggedIn) ? getUserbets() : getGames() }}>
            <Glyphicon glyph="refresh" />
        </Button>
        {
            Object.values(bets[currentRound]).map(game => {
                return <Game round={currentRound} game={game} key={game.game_id} />
            })
        }
    </div>
);

const mapStateToProps = state => ({
    user: state.user,
    currentRound: state.round.currentRound,
    bets: state.bets,
    translate: getTranslate(state.locale),
    currentLanguage: getActiveLanguage(state.locale).code
});

const mapDispatchToProps = dispatch => {
    return {
        getGames: () => dispatch(getGames())
    }
}

Bets = connect(mapStateToProps, mapDispatchToProps)(Bets)

export default Bets;