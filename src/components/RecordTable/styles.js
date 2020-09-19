import styled from 'styled-components'

export const Table = styled.table`
    border-collapse: collapse;
    width: 90%;
    margin: 0 auto;
`

export const RowTable = styled.tr`
    &:nth-child(even) {
        background-color: #dddddd;
    }
`

export const HeadData = styled.th`
    padding: 2% 2%;
    box-sizing:border-box;
`

export const BodyData = styled.td`
    padding: 2% 2%;
    box-sizing:border-box;
    &.trash {
        cursor: pointer;
        text-align:center;
        color: #222831;
    }
`

