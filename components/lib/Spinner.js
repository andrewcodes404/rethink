import React from 'react'
import styled from 'styled-components'

const Spinner = styled.div`
    @keyframes spin {
        10%,
        90% {
            transform: rotate(25deg);
        }

        20%,
        80% {
            transform: rotate(-25deg);
        }

        30%,
        50%,
        70% {
            transform: rotate(70deg);
        }

        40%,
        60% {
            transform: rotate(-70deg);
        }
    }

    width: 100px;
    height: 100px;
    padding: 10px;
    background: green;
    animation: spin 5s cubic-bezier(0.36, 0.07, 0.19, 0.97) infinite both;
    transform-origin: center;
`

const Modal = styled.div`
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: green;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    z-index: 2;
    .modal-card {
        background: white;
        padding: 40px;
        text-align: center;
        p {
            margin-bottom: 50px;
        }
    }
    .modal-btn {
        background: green;
        padding: 10px;
        margin: 10px;
        cursor: pointer;

        &:hover {
            color: white;
        }
    }
`

const fn_name = () => (
    <Modal>
        <Spinner>
            <img src="./static/icons/topics-white.svg" alt=""></img>
        </Spinner>
    </Modal>
)

export default fn_name
