import styled from 'styled-components'

export const Aritcle = styled.article`
    width:400px; padding:20px;
    border:1px solid #dcdcdc; 
    position:relative; cursor: pointer;
    margin:15px;
    h3 {
        font-size:30px; color:tomato; 
        margin-bottom:15px;
    }
    p { font-size:18px }
    .icon {
        position:absolute; right:20px; top:50%; 
        font-size:30px;
        transform:translateY(-50%)
    }
    &.on{
        background:rgba(200,100,50,0.3);
        border-color:tomato;
    }
`

export const PlanForm = styled.form`
    margin:15px;
    border:1px solid #999;
    width:400px; padding:20px;
    div {
        margin-bottom:10px;
        label {
            display:inline-block; width:70px;
        }
        input[type=text] {
            width:200px; height:30px;
            border:1px solid #999; 
            padding:0 15px;
        }
    }
    button { width:150px;  height:45px; color:#fff; background:#333; border:none}
` 

