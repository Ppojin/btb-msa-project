
// upmostly를 참고한 validation check

export function loginValidation(values) {
    let loginValErrors={};
    // const [values, setValues] = useState('{}');
    // console.log("validationcheck entity : ",{entity})
    // console.log("validationcheck headers : ",{headers})
    // id(email) val check
    var emailreg = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
    if(!values.email){
        loginValErrors.email = "Email 주소를 입력해주세요";
    } else if(!emailreg.test(values.email)){
        loginValErrors.email= "유효한 Email 주소가 아닙니다";
    }
    // password val check
    if(!values.password){
        loginValErrors.password = '비밀번호를 입력해주세요'
    } else if(values.password.length < 8 || values.password.length > 16){
        loginValErrors.password = '비밀번호의 길이는 8-16글자입니다.'
    } 
    // else {
    //     // 입력한 password 값과 DB의 password 정보의 일치 여부 결과에 따른 메시지 입력
    // }
    return loginValErrors
};

export function signupValidation(values){
    
    let signupValErrors ={};
    
    var namereg = /^[가-힣a-zA-Z]{2,12}$/;
    var emailreg = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
    var phonereg = /^01([0|1|6|7|8|9]?)-?([0-9]{3,4})-?([0-9]{4})$/;
    // name val check
    if(!values.name){
        // 이름을 입력 여부
        signupValErrors.name="이름을 입력해주세요"}
    else if(!namereg.test(values.name)){
        // 이름 형식 여부
        signupValErrors.name="올바르지 않은 이름 형식입니다. 2글자 이상 12글자 이하의 이름을 입력해주세요."
    }

    // email val check
    if(!values.email){
        // Email 입력 여부
        signupValErrors.email = "Email 주소를 입력해주세요";
    } else if(!emailreg.test(values.email)){
        // Email 형식 여부
        signupValErrors.email= "유효한 Email 주소가 아닙니다";
    }   // 입력한 email 정보와 가입한 email 일치 여부
    
    // gender val check
    // if (!values.gender){
    //     //gender 입력 여부 
    //     signupValErrors.gender="성별을 선택해 주세요"
    // }
    
    // phone val check
    if(!values.phone){
        // phone 입력 여부
        signupValErrors.phone="핸드폰 번호를 입력해주세요"
    } else if(!phonereg.test(values.phone)){
        // phone 형식 여부
        signupValErrors.phone="올바른 핸드폰 번호를 입력해주세요 : 01x-xxxx-xxxx"
    } // 입력한 phone 정보와 가입한 phone 정보 일치 여부 
    
    // password val check
    if(!values.password){
        signupValErrors.password="비밀번호를 입력해주세요"
    } else if(values.password.length < 8 || values.password.length > 16){
        signupValErrors.password="비밀번호의 길이는 8-16 글자입니다"
    }

    // 정보제공 동의 여부
    if(!values.check){
        signupValErrors.check="정보제공 약관에 동의해 주세요"
    }

    return signupValErrors
}