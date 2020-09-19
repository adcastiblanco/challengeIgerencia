import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const Form = styled.form`
    width: 60%;
    padding: 2%;
    background: #f8f8f8;
    box-shadow: 1px 0px 4px 1px lightgrey;
    border-radius: 10px;
`

export const ContainerFlex = styled.div`
    display: flex;
    justify-content: space-around;
`

export const RegisterField = styled.div`
    margin-bottom: 1em;
    #date {margin-left: 10px;}
    
    #date,
    #description {
        padding: 5px;
        border-radius: 7px;
        border: 1px solid darkgray;
        :focus {
            outline: none;
        }
    }
`

export const TypeContainer = styled.div`
    
`

export const QuestionLabel = styled.label`
    font-weight:bold;
`


export const InputDescription = styled.textarea`
    display:block;
    width:90%;
`

export const SubmitButton = styled.button`
    width: 30%;
    display: block;
    margin: 0 auto;
    background-color: #00adb5;
    color: white;
    border: 1px solid darkgray;
    padding: 5px 10px;
    font-weight:bold;
    font-size: 1em;
    border-radius: 10px;
    transition: 0.3s;
    :hover {
        cursor: pointer;
        background-color: #393e46;
    }
`