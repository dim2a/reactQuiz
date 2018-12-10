import React, { PureComponent } from 'react'
import classes from './QuizList.css'
import {NavLink} from 'react-router-dom'
import axios from 'axios'

export default class QuizList extends PureComponent {
  
    renderQuizes() {
        return[1,2,3].map((quiz, index) => {
            return (
                <li
                    key={index}
                >
                  <NavLink to={'/quiz/'+ quiz}>
                      Тест {quiz}
                  </NavLink>
                </li>
            )
        })
    }

    componentDidMount() {
        axios.get('https://react-quiz-b4314.firebaseio.com/quiz.json').then(response => {
          console.log(response)
        })
    }
  
    render() {
    return (
      <div className={classes.QuizList}>
        <div>
            <h1>Список Тестов</h1>

            <ul>
                {this.renderQuizes()}
            </ul>
        </div>
        
      </div>
    )
  }
}
