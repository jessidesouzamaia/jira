import styled from "styled-components"

export const NavTop = styled.header`
display:flex;
position:absolute;
top:0;
left:0;
right:0;
width:100%;
background:#000;
height:10vh;
border-bottom:2px solid #FF8000;;
`
export const ContainerImage = styled.div`
margin:0 2vw;
`
export const ContainerItens = styled.div`
display:flex;
flex-direction:row;
margin:0;
padding:0;
align-items:center;
margin:auto 0;
`
export const Item = styled.div`
margin:10px;
cursor:pointer;
display:flex;
flex-direction: row;

&.active{
    border-bottom: 2px solid blue;
}
`
export const ItemText = styled.div`
font-size:14px;
color:white;
`
export const ContainerIcon = styled.div`
position:absolute;
right:2.5vw;
cursor: pointer;
`