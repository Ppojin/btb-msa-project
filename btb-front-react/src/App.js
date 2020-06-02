import React, {Component} from 'react';
import { connect } from 'react-redux';

import customer, {signup, signin, getUser} from 'shared/reducers/entities/customer.reducer'
import questionEntity, {getQuestionList, getQuestion, createQuestion} from 'shared/reducers/entities/question-entity.reducer';
import category, {getCategoryList, createCategory} from 'shared/reducers/entities/category.reducer';
import exam, {getExam, getExamList, createExam} from 'shared/reducers/entities/exam.reducer';
import examResult, {getResult, getResultList, createResult} from 'shared/reducers/entities/exam-result.reducer';


class App extends Component{
  state = {
  }

  getUserHandler = () => {
    console.log(this.props)
    const token = "eyJhbGciOiJIUzUxMiIsImdyb3VwIjoiZGVmYXVsdCJ9.eyJzdWIiOiJhc2RmQGFzZGYuYXNkZiIsImV4cCI6MTU5MTA5MTYwOH0.VL13WMPOOhClQzTkrfDuuJlNmgmNnGwzzINiLqE8nhqhFvEvNs3DeZGpvCCQBMRfJCfN9Oo7t6a4y34vAtOyIQ";
    const customerPK = "ff8080817273de5a017273df283c0000";
    this.props.getUser(customerPK, token);
  }

  render(){
      return (
        <div className="App">
          <div>{console.log(this.props)}</div>
          <button onClick={this.getUserHandler}>안녕</button>
        </div>
      )
  }
}

const mapStateToProps = ({customer, questionEntity, category, exam, examResult}) => ({
  customer, questionEntity, category, exam, examResult
  // customer: customer.entities,
  // questionEntity: questionEntity.entities,
  // category: category.entities,
  // exam: exam.entities,
  // examResult: examResult.entities,
})

const mapDispatchToProps = (dispatch) => {
  return {
    signup,
    signin,
    getUser, 

    getQuestionList, 
    getQuestion, 
    createQuestion, 

    getCategoryList, 
    createCategory, 
    
    getExam, 
    getExamList, 
    createExam,
    
    getResult, 
    getResultList, 
    createResult,
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
