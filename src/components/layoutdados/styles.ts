import styled from 'styled-components'

interface Props {
  isOpenSidebar: boolean
}

export const Container = styled.div<Props>`
  margin-left: ${props => (props.isOpenSidebar ? '71px;' : '0;')};

  .card {
    width: 100%;
    max-width: 850px;
    height: 362px;
    border-radius: 20px;
    box-shadow: 0px 8px 16px 4px #9e9e9e;
    margin-top: 15px;
    padding: 25px;

    label {
      margin-top: 0.5rem;
    }

    .profile-img {
      width: 180px;
      height: 180px;
      justify-content: left;
      border-radius: 90px;
      display: block;
      margin-left: auto;
      margin-right: auto;
    }

    .stars {
      color: rgb(167, 40, 69);
      font-weight: 700;
      margin-left: 2px;
    }

    .input {
      display: block;
      width: 100%;
      height: 2.5rem;
      padding: 0.375rem 0.75rem;
      font-size: 1rem;
      color: #495057;
      background-color: #fff;
      background-clip: padding-box;
      border: 1px solid #ced4da;
      border-radius: 0.25rem;
      transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
      outline: 0;
    }
  }

  .row {
    height: 100%;
    align-items: center;

    .titleSection {
      text-align: center;
    }
  }

  .input-upload {
    width: 100%;
  }

  .input-upload-label {
    width: 100%;
    height: 38px;
    color: #fff;
    text-align: center;
    border-radius: 5px;
    background-color: #317bff;
    cursor: pointer;
  }

  .btn-primary {
    width: 100%;
  }

  .alt {
    height: 280px;
  }

  @media (max-width: 768px) {
    .alt {
      height: 280px;
    }
  }
`
