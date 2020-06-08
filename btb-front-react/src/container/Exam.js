import React, {Component} from 'react';
import { connect } from 'react-redux';

import {getExamList, getExam} from 'shared/reducers/entities/exam.reducer'
import {setAuth} from 'shared/reducers/entities/auth.reducer'

// import questionEntity, {getQuestionList, getQuestion, createQuestion} from 'shared/reducers/entities/question-entity.reducer';
// import category, {getCategoryList, createCategory} from 'shared/reducers/entities/category.reducer';
// import exam, {getExam, getExamList, createExam} from 'shared/reducers/entities/exam.reducer';
// import examResult, {getResult, getResultList, createResult} from 'shared/reducers/entities/exam-result.reducer';

class App extends Component{
  constructor(props) {
    super(props);
    this.state = {
      examList: [],
      examDetail: {}
    }
  }

  // componentDidUpdate(prevProps, prevState, snapshot) {
  //   if(prevState.exam !== this.state.exam){
  //     this.setState({
  //       examList: this.state.exam.entities,
  //       examDetail: this.state.exam.entity,
  //     })
  //   }
  // }

  getExamList = () => {
    const {token} = this.props.auth;
    this.props.getExamList(token);
  };

  getExamDetail = (examPK) => {
    // console.log(">>> "+ examPK);
    const {token} = this.props.auth;
    this.props.getExam(token, examPK);
  };

  examButtons = () => {
    const examListButtons = this.props.examList.map(examDetail =>
      <li key={examDetail.examPK}>
        <button onClick={() => this.getExamDetail(examDetail.examPK)}>
          {examDetail.title}
        </button>
      </li>
    );
    return (
      <ul>
        {examListButtons}
      </ul>
    )
  };

  render(){
    // let {examList, examDetail} = this.state;
    // let {exam, auth} = this.props;
    const ExamButtons = this.examButtons;
    return (
      <div className="Exam">
        <button onClick={this.getExamList}>시험리스트 불러오기</button>
        <div className="examList">
          <ExamButtons/>
        </div>
        <div className="examDetail">
          <div>
            {JSON.stringify(this.props.exam)||""}
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({exam, auth}) => ({
  exam: exam.entity,
  examList: exam.entities,
  auth: auth
});

const mapDispatchToProps = {
  getExamList,
  getExam,
  setAuth,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
