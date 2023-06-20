import styled from "styled-components";

export const DivResults = styled.div`
width: 90%;
margin: 30px auto;
display: flex;

`;

export const DivResultScore = styled.div`
width: 40%;
display: flex;
flex-direction: column;
align-items: center;
color: blue;
font-size: 0.79rem;
`;

export const Result = styled.div`
color: white;
font-size: 1.3rem;
height: 90px;
width: 90px;
display: flex;
justify-content: center;
align-items: center;
padding: 3px 7px;
margin: 14px;
border-radius: 100%;
border: 6px dotted #8800ff2a;
background-color:#005792;
background-image: radial-gradient(${props => props.color}, #8800ff25);
`;

export const DivInfo = styled.div`
width: 60%;
margin: 10px auto;
`;