import React, {Component} from 'react';
import { connect } from 'react-redux';

import {getQuestionList, getQuestion} from 'shared/reducers/entities/question.reducer'
import {setAuth} from 'shared/reducers/entities/auth.reducer'

// import questionEntity, {getQuestionList, getQuestion, createQuestion} from 'shared/reducers/entities/question-entity.reducer';
// import category, {getCategoryList, createCategory} from 'shared/reducers/entities/category.reducer';
// import question, {getQuestion, getQuestionList, createQuestion} from 'shared/reducers/entities/question.reducer';
// import questionResult, {getResult, getResultList, createResult} from 'shared/reducers/entities/question-result.reducer';

class App extends Component{
  constructor(props) {
    super(props);
    this.state = {
      questionList: [],
      questionDetail: {}
    }
  }

  // componentDidUpdate(prevProps, prevState, snapshot) {
  //   if(prevState.question !== this.state.question){
  //     this.setState({
  //       questionList: this.state.question.entities,
  //       questionDetail: this.state.question.entity,
  //     })
  //   }
  // }

  getQuestionList = () => {
    const {token} = this.props.auth;
    this.props.getQuestionList(token);
  };

  getQuestionDetail = (questionPK) => {
    // console.log(">>> "+ questionPK);
    const {token} = this.props.auth;
    this.props.getQuestion(token, questionPK);
  };

  questionButtons = () => {
    const questionListButtons = this.props.questionList.map(questionDetail =>
      <li key={questionDetail.questionPK}>
        <button onClick={() => this.getQuestionDetail(questionDetail.questionPK)}>
          {questionDetail.title}
        </button>
      </li>
    );
    return (
      <ul>
        {questionListButtons}
      </ul>
    )
  };

  render(){
    // let {questionList, questionDetail} = this.state;
    // let {question, auth} = this.props;
    const QuestionButtons = this.questionButtons;
    return (
      <div className="Question">
        <button onClick={this.getQuestionList}>시험리스트 불러오기</button>
        <div className="questionList">
          <QuestionButtons/>
        </div>
        <div className="questionDetail">
          <div>
            {JSON.stringify(this.props.question)||""}
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({question, auth}) => ({
  question: question.entity,
  questionList: question.entities,
  auth: auth
});

const mapDispatchToProps = {
  getQuestionList,
  getQuestion,
  setAuth,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
