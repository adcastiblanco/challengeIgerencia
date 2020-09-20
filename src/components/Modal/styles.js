import styled from 'styled-components';

export const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
`;

export const ModalContain = styled.div`
  position: relative;
  background-color: #ffffff;
  padding: 1rem;
  min-width: 50%;
  border-radius: 10px;
`;

export const ModalHeadContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 10px;
  h2 {
    margin: 0 0 10px 0;
  }
  .close-modal {
    cursor: pointer;
    font-size: 1.4em;
  }
`;

export const Form = styled.form`
  padding: 2%;
`;

export const ContainerFlex = styled.div`
  display: flex;
  justify-content: space-around;
`;

export const RegisterField = styled.div`
  margin-bottom: 1em;
  #date {
    margin-left: 10px;
  }

  #date,
  #description {
    padding: 5px;
    border-radius: 7px;
    border: 1px solid darkgray;
    :focus {
      outline: none;
    }
  }
`;

export const TypeContainer = styled.div``;

export const QuestionLabel = styled.label`
  font-weight: bold;
  margin-right: 10px;
`;

export const InputDescription = styled.textarea`
  display: block;
  width: 90%;
`;

export const SubmitButton = styled.button`
  width: 30%;
  display: block;
  margin: 0 auto;
  background-color: #00adb5;
  color: white;
  border: 1px solid darkgray;
  padding: 5px 10px;
  font-weight: bold;
  font-size: 1em;
  border-radius: 10px;
  transition: 0.3s;
  :hover {
    cursor: pointer;
    background-color: #393e46;
  }
`;
