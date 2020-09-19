import styled from 'styled-components'

import {Link} from 'react-router-dom'

export const AddButton = styled(Link)`
    text-decoration:none;
    padding:10px;
    display: block;
    width: 30%;
    margin: 0 auto;
    text-align: center;
    background-color: #00adb5;
    color: white;
    border: 1px solid darkgray;
    padding: 5px 10px;
    font-weight: bold;
    border-radius: 10px;
    transition: 0.3s;
    :hover {
        cursor: pointer;
        background-color: #393e46;
    }
`

export const NoRegistersTitle = styled.h2`
    text-align:center;
`

export const Table = styled.table`
    border-collapse: collapse;
    width: 100%;
    margin: 0 auto;
`

export const RowTable = styled.tr`
    &:nth-child(even) {
        background-color: #dddddd;
    }
`

export const HeadData = styled.th`
    padding: 2% 3%;
    text-align: left;
    box-sizing:border-box;
`

export const BodyData = styled.td`
    padding:2% 3%;
    text-align: left;
    box-sizing:border-box;
    &.trash, &.edit {
        cursor: pointer;
        text-align:center;
        color: #222831;
        font-size: 1.2em;
    }
`

