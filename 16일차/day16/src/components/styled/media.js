import styled  from "styled-components";
import { device } from "./device";

export const HeaderContainer =styled.header`
    width: 100%;background: beige;
    .inner{
        width: 1400px;margin: auto; height: 10rem;
        background:skyblue;
    }
    @media ${device.desktop}{
        .inner{
            width:95%;
            background:tomato;
        }
    }
`
export const ContentContainer =styled.section`
width: 100%;display: flex;justify-content:space-between;
margin: 30px auto;
article{
    height: 250px;width: 23%;background:tomato;
}
    @media ${device.desktop}{
        width: 95%;
        article{
            width:95%;
            background:tomato;
        }
    }
    @media ${device.tablet}{
       flex-wrap:wrap;
        article{
            width:45%;
            background:pink;
        }
    }


`