import React from 'react'
import CreateKey from './CreateKey'
import CreateTarget from './CreateTarget'
import SearchUserKey from './SearchUserKey'
import { Card,CardContent } from '@material-ui/core';
import { ActionTheme } from './ActionTheme'
interface Props { }

const Index: React.FC<Props> = ({ }) => {

    const classes = ActionTheme();

    return (
        <>
            <h1>Tools</h1>
            
            <Card className={classes.root}>
                <CardContent>
                    <CreateKey />
                    <CreateTarget />
                    <SearchUserKey/>
                </CardContent>
            </Card>
        </>
    )
}

export default Index;
