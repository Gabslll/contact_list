import styled, { css } from "styled-components"

// Form Styles
export const Form = styled.form`
    margin-bottom: 2rem;
    padding: 1.5rem;
    background-color: #f9f9f9;
    border: 1px solid #eaeaea;
`

export const FormGroup = styled.div`
    margin-bottom: 1rem;
`

export const Label = styled.label`
    display: block;
    margin-bottom: 0.5rem;
    font-weight: 500;
    color: #333;
`

export const Input = styled.input`
    width: 100%;
    padding: 0.75rem;
    border: 1px solid #ddd;
    border-radius: 4px;
    font-size: 1rem;
    transition: border-color 0.3s;

    &:focus {
        outline: none;
        border-color: #4a90e2;
        box-shadow: 0 0 0 2px rgba(74, 144, 226, 0.2);
    }
`

export const ButtonGroup = styled.div`
    display: flex;
    gap: 1rem;
    margin-top: 1rem;
`

interface ButtonProps {
    primary?: boolean
    edit?: boolean
    delete?: boolean
}

export const Button = styled.button<ButtonProps>`
    padding: 0.75rem 1.5rem;
    border: none;
    border-radius: 4px;
    font-size:1rem;
    font-weight: 500;
    cursor: pointer;
    transition: background-color 0.3s, transform 0.1s;

    ${(props) =>
        props.primary &&
        css`
            background-color: #4a90e2;
            color: white;

            $:hover {
                background-color: #3a7bc8;
            }
        `}

    ${(props) => 
        !props.primary &&
        !props.edit &&
        !props.delete &&
        css`
        background-color: #e0e0e0;
        color: #333;

        &:hover {
            background-color: #d0d0d0;
        }
        `
    }

    &:active {
        transform: translateY(1px);
    }
`

export const ErrorMessage = styled.p`
    color: #53935;
    font-size: 0.875rem;
    margin-top: 0.25rem;
`