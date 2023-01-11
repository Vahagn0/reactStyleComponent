import styled from "styled-components"
import { TextField } from "@mui/material";
import { color, styled as styledShit} from '@mui/system';

 export const Option = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 70px;
    width: 400px;
    margin-top: 10px;
    border-radius: 10px;
    background-color: ${(props) => props.type === "yellow" ? "#FFC90B" : "#F1F6FB"};
`