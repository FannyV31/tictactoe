import React, {Component} from 'react'
import {Container, Name, GameListHeader, GameList, GameRecord, Column, ColumnLabels} from '../styled/Profile'

class Profile extends Component {
    static defaultProps= {
        user: {
            email: 'USER_EMAIL',
            games: [
                {
                    winner: true,
                    createdAt: '07/11/2018',
                    id: '0001'
                },
                {
                    winner: true,
                    createdAt: '07/12/2018',
                    id: '0002'
                },
                {
                    winner: true,
                    createdAt: '07/13/2018',
                    id: '0003'
                },
            ]

        }

    }

    render() {
        let {email} = this.props.user
        return (
            <Container>
                <Name>
                    {email}            
                </Name>
                <GameList>
                    <GameListHeader>
                        MyGames
                    </GameListHeader>
                </GameList>
                <ColumnLabels>
                    <Column>
                        Outcome
                    </Column>
                    <Column>
                        Guess
                    </Column>
                    <Column>
                        Guessed Correctly
                    </Column>
                    <Column>
                        Date
                    </Column>
                </ColumnLabels>
            </Container>
        )
    }
}

export default Profile