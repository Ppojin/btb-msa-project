import React, {Component} from 'react';
import { connect } from 'react-redux';

import {signup, signin, getCustomer} from 'shared/reducers/entities/customer.reducer'
import {setAuth} from 'shared/reducers/entities/auth.reducer'

// import questionEntity, {getQuestionList, getQuestion, createQuestion} from 'shared/reducers/entities/question-entity.reducer';
// import category, {getCategoryList, createCategory} from 'shared/reducers/entities/category.reducer';
// import exam, {getExam, getExamList, createExam} from 'shared/reducers/entities/exam.reducer';
// import examResult, {getResult, getResultList, createResult} from 'shared/reducers/entities/exam-result.reducer';

class App extends Component{
  constructor(props) {
    super(props);
    this.state = {
      signupEntity: `{"email": "qwer@qwer.qwer", "name": "qwer", "password": "qwerqwer"}`,
      signinEntity: `{}`,
    }
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if(prevProps.headers !== this.props.headers){
      this.props.setAuth({
        token: this.props.headers.token,
        customerpk: this.props.headers.customerpk,
      })
    }
  }

  handlerInputboxChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  getUserHandler = () => {
    if(this.props.headers !== null || this.props.headers !== undefined ){
      const {customerpk, token} = this.props.headers;
      this.props.getCustomer(customerpk, token);
    }
  }

  signupHandler = () => {
    const {signupEntity} = this.state;
    const signupJSON = JSON.parse(signupEntity);
    const nextsigninEntity = JSON.stringify({email: signupJSON.email, password: signupJSON.password});
    this.setState({
      signinEntity: nextsigninEntity
    });
    this.props.signup(signupJSON);
  };

  signinHandler = () => {
    const {signinEntity} = this.state;
    const signinJSON = JSON.parse(signinEntity);
    this.props.signin(signinJSON);
    console.log(this.props.headers);
  };

  render(){
    let {signupEntity, signinEntity} = this.state;
    let {headers} = this.props;
    return (
      <div className="Customer">
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
          <div><input name="customerpk" type="text" style={{width: 500}} onChange={this.handlerInputboxChange} value={this.state.customerPK}/><label > :customerPK </label></div> */}
          <div><label>token:{headers == null || headers.token} </label></div>
          <div><label>customerpk:{headers == null || headers.customerpk} </label></div>
          <div><button onClick={this.getUserHandler}>유저정보 확인</button></div>
          <div>{JSON.stringify(this.props.customer)}</div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({customer, auth}) => ({
  customer: customer.entity,
  headers: customer.headers,
  auth: auth,
});

const mapDispatchToProps = {
  signup,
  signin,
  getCustomer,
  setAuth,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
