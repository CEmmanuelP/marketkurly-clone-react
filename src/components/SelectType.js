import { NavLink } from "react-router-dom";
import styled from "styled-components";

const SelectType = ({ type }) => {
    return (
        <>
            <ListItem>
                <NavLink to="#">{type}</NavLink>
            </ListItem>
        </>
    );
};

const ListItem = styled.div`
    position: relative;
    padding: 0 10px 0 8px;

    &::after {
        content: "";
        position: absolute;
        right: 0;
        top: 1px;
        width: 1px;
        height: 10px;
        background-color: #e5e5e5;
    }
`;

export default SelectType;
