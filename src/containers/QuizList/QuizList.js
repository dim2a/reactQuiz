import React, { PureComponent } from 'react'
import classes from './QuizList.css'
import {NavLink} from 'react-router-dom'

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
