const jwt = require('jsonwebtoken');
// token에 넣을 데이터, 비밀 키, 옵션, 콜백함수 순
const token = jwt.sign(
    { foo: 'bar' },
    'secret-key',
    {exprireIn: '7d'},
    (err, token)=>{
        if(err){
            console.log(err);
            return;
        }
        console.log(token);
    }
)