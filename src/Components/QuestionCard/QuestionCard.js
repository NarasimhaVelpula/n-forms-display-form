import React from 'react'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import TextField from '@material-ui/core/TextField';
import MultipleChoice from './MultipleChoice';
import CheckBox from './CheckBox'
import Answer from './Answer';
import FileUpload from './FileUpload';

function QuestionCard(props) {
    const {questionType}=props
    const {options}=props
    const {question}=props
    const {id}=props
    let Component
    switch(questionType){
        case 'MultipleChoice':
            Component=<MultipleChoice options={options} updateResponse={props.updateResponse} id={id} />
            break;
        case 'CheckBox':
            Component=<CheckBox options={options} updateResponse={props.updateResponse} id={id}/>
            break;
        case 'Answer':
            Component=<Answer updateResponse={props.updateResponse} id={id}/>
            break;
        case 'FileUpload':
            Component=<FileUpload />
            break;
    }
    return (
        <Card>
            <CardContent>
                <label>{question}</label>
            </CardContent>
            <CardContent >
                {Component}
            </CardContent>
        </Card>
    )
}

export default QuestionCard
