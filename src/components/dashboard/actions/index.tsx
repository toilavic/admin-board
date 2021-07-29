import React from 'react'
import CreateKey from './CreateKey'
import CreateTarget from './CreateTarget'
import { Card,CardContent } from '@material-ui/core';
import { ActionTheme } from './ActionTheme'
interface Props { }

const Index: React.FC<Props> = ({ }) => {

    const classes = ActionTheme();

    return (
        <>
            <h1>Action</h1>
            
            <Card className={classes.root}>
                <CardContent>
                    <CreateKey />
                    <CreateTarget />
                </CardContent>
            </Card>
        </>
    )
}

export default Index;
