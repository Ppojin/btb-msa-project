import React from 'react';
import { Box } from '@material-ui/core';
import { Grid } from '@material-ui/core';

function UserExamResultDisc (){
    return(
        <Grid>
            <div>문제 설명</div>
            <Box>
                문제 설명 내용
            </Box>
            <div>제한 사항</div>
            <Box>
                제한 사항 내용
            </Box>
            <div>입출력 예시</div>
            <Box>
                입출력 예시 내용
            </Box>
            <div>입출력 예시 설명</div>
            <Box>
                입출력 에시 설명 내용
            </Box>
        </Grid>
    )
}

export default UserExamResultDisc;