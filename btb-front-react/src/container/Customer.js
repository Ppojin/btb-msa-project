import React, {Component} from 'react';
import { connect } from 'react-redux';

import {signup, signin, getCustomer} from 'shared/reducers/entities/customer.reducer'

// import questionEntity, {getQuestionList, getQuestion, createQuestion} from 'shared/reducers/entities/question-entity.reducer';
// import category, {getCategoryList, createCategory} from 'shared/reducers/entities/category.reducer';
// import exam, {getExam, getExamList, createExam} from 'shared/reducers/entities/exam.reducer';
// import examResult, {getResult, getResultList, createResult} from 'shared/reducers/entities/exam-result.reducer';

class App extends Component{
  constructor(props) {
    super(props);
    this.state = {
      signupEntity: `{"email": "asdf@asdf.asdf", "name": "asdf", "password": "asdfasdf"}`,
      signinEntity: `{}`,
      token: "eyJhbGciOiJIUzUxMiIsImdyb3VwIjoiZGVmYXVsdCJ9.eyJzdWIiOiJhc2RmQGFzZGYuYXNkZiIsImV4cCI6MTU5MTE0NzExOH0.KYSuvHnLIybV_sNK-pE7XssEKkwSFhDLKhAw_olcSAW87ZKyXili-ajVysd5gya_AJCBmt4tHRO_a4YWwtP91w",
      customerPK: "ff80808172750ccf017275114b7f0000",
    }
  }

  handlerInputboxChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  getUserHandler = () => {
    if(this.props.headers !== null || this.props.headers !== undefined ){
      const {customerPK, token} = this.props.headers;
      this.props.getCustomer(customerPK, token);
    }
  }

  signupHandler = () => {
    const {signupEntity} = this.state;
    const signupJSON = JSON.parse(signupEntity);
    const nextsigninEntity = JSON.stringify({email: signupJSON.email, password: signupJSON.password});
    this.setState({
      signinEntity: nextsigninEntity
    })
    this.props.signup(signupJSON);
  }

  signinHandler = () => {
    const {signinEntity} = this.state;
    const signinJSON = JSON.parse(signinEntity);
    this.props.signin(signinJSON);
    console.log(this.props.headers);
  }

  render(){
    let {signupEntity, signinEntity} = this.state;
    let {headers} = this.props;
    return (
      <div className="App">
        <div className="signup">
          <div><textarea name="signupEntity" style={{width:500, height:200}} onChange={this.handlerInputboxChange} value={signupEntity}/></div>
          <div><button onClick={this.signupHandler}>회원가입</button></div>
          <div>{JSON.stringify(this.props.customer)}</div>
        </div>
        <div className="signin">
          <div><textarea name="signinEntity" style={{width:500, height:200}} onChange={this.handlerInputboxChange} value={signinEntity}/></div>
          <div><button onClick={this.signinHandler}>로그인</button></div>
        </div>
        <div className="getUser">
          {/* <div><input name="token" type="text" style={{width: 500}} onChange={this.handlerInputboxChange} value={this.state.token} /><label > :token </label></div>
          <div><input name="customerPK" type="text" style={{width: 500}} onChange={this.handlerInputboxChange} value={this.state.customerPK}/><label > :customerPK </label></div> */}
          <div><label>token:{headers == null || headers.token} </label></div>
          <div><label>customerPK:{headers == null || headers.customerPK} </label></div>
          <div><button onClick={this.getUserHandler}>유저정보 확인</button></div>
          <div>{JSON.stringify(this.props.customer)}</div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({customer}) => ({
  customer: customer.entity,
  headers: customer.headers
})

const mapDispatchToProps = {
  signup,
  signin,
  getCustomer, 
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
