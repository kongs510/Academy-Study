import styled from "styled-components"

export const Aritcle = styled.article`
    width: 400px;
    padding: 20px;
    border: 1px solid #000;
    position:relative;
    margin-bottom:2%;
    cursor:pointer;
    h3{
        font-size: 30px;
        color:tomato;
        margin-bottom:15px;
    }
    .icon{
        position:absolute;
        right: 20px;
        top: 50%;
        font-size: 30px;
        transform:translateY(-50%)
    }
    &.on{
        background:rgba(200,100,50,0.3);
        border-color:tomato;
    }
`

export const PlanForm =styled.form`
margin-bottom:10px;
div{

label{
    display:inline-block;
    width: 70px;
}
input[type=text]{
    width: 250px;
    height: 30px;
    border: 1px solid #000;
    padding: 0 15px;
}
}
button{width: 150px;height: 45px;color:#fff;margin-left:50px;}
`

