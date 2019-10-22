import styled from 'styled-components'

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    max-width: 600px;

    p {
        margin: 0;
    }

    h3 {
        margin: 20px 0;
    }

    .text-field {
        margin-bottom: 30px;
    }

    .section-title {
        margin-bottom: 10px;
    }

    .section-theme--time-pickers {
        display: flex;
        margin-bottom: 30px;
    }

    .section-theme--time-picker {
        /* border: 1px solid #000; */
        margin-right: 50px;
        width: 100px;
    }

    .select {
        margin-bottom: 40px;
        width: 100%;
        /* border: 1px solid #000; */
    }

    /* .input-label {
        label {
            font-size: 30px;
            margin: 0 4px;
            padding: 0 8px;
            background: white;
            z-index: 100;
            border: 1px solid red;
        }
    } */

    .text-area {
        width: 100%;
        margin: 15px 0;
    }

    .submit-wrapper {
        margin-top: 20px;
        margin-bottom: 50px;
        text-align: left;
    }
    .upload-btn {
        background: green;
        color: white;
        margin-top: 20px;
        &:hover {
            color: black;
            background: gold;
        }

        @media (min-width: 768px) {
            margin: 0;
        }
    }
`
export const ModalSuccess = styled.div`
    .modal-wrapper {
        border: 1px solid pink;
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;

        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        z-index: 2;
        background: rgba(0, 0, 0, 0.8);
        opacity: 1;
        transition: 1s;
    }

    .modal {
        background: white;
        padding: 20px;
        z-index: 1;
    }

    .fade-out {
        opacity: 0;
    }
`
