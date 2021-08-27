import { Card, CardContent } from '@material-ui/core'
import React from 'react'
import QuestionCard from '../QuestionCard/QuestionCard'

function Body(props) {
    const questions=props.form.questions
    document.body.style.backgroundColor=props.form.theme
    console.log(props)
    return (
        <div>
            <Card>
                <CardContent>
                    {props.form.title}
                </CardContent>
            </Card>
            {questions.map((question,id)=>{
                return(<QuestionCard questionType={question.questionType} options={question.options} question={question.question} updateResponse={props.updateResponse} id={id}/>)
            })}
        </div>
    )
}

export default Body
