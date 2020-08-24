import React from 'react';
import { Card, Typography } from '@material-ui/core';

function ExamTemplate({ questions }) {

    return (
        <Card>
            <Typography variant="h2">
                {questions[0].text}
            </Typography>
        </Card>
    )
}

export default ExamTemplate;
