import styled from "styled-components"

const FormAppS = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 6px;
    margin-top: 34px;
    margin-bottom: 34px;
    input {
        border: 1px solid #D4D4D4;
        width: 303px;
        height: 45px;
        &::placeholder {
            color: #DBDBDB;
            font-size: 21px;
            font-family: Lexend Deca;
            padding-left: 11px;
        }
    }
`

export default FormAppS