import styled from "styled-components";

export const DivInputNameBarris = styled.div`
display: flex;
width: 100%;
font-size: 0.8rem;
flex-direction: column;
margin-top: 30px;
align-items: center;

@media(max-width: 768px) {
display: flex;
flex-direction: column; 
max-width: 90vw;
margin: 30px auto 5px auto;
  }
`;

export const InputDatos = styled.input`
font-size:1.2rem;
margin: 10px;
padding: 5px;
min-width: 400px; 
max-width: 500px;
background-color: rgba(255, 255, 255, 0.968);

&:focus {
  outline-width: 0;
  border: 2px solid #006edd;
  background-color: rgba(219, 255, 223, 0.3);
 }
 
@media(max-width: 425px) {
    width: 90%;
    min-width: 150px; 
  } 
`;

export const InputNumScores = styled(InputDatos)`
min-width: 50px; 
max-width: 100px;
`;

export const DivLeyenda = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
text-align: center;
max-width: 520px;

@media(max-width: 425px) {
    width: 90%;
    min-width: 150px; 
  } 
`;

export const DivBuscar = styled.div`
display: flex;
flex-wrap: wrap;
align-items: center;
justify-content: center;
`;