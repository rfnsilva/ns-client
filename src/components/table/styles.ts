import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #9bcfd4;

  /* height: 121%; */

  .container {
    max-width: 1000px;
    margin-left: auto;
    margin-right: auto;
    padding-left: 10px;
    padding-right: 10px;
    color: #000;
  }

  .responsive-table {
    li {
      border-radius: 3px;
      padding: 5px 30px;
      display: flex;
      justify-content: space-between;
      margin-bottom: 8px;
    }

    .table-header {
      background-color: #95a5a6;
      font-size: 14px;
      text-transform: uppercase;
      letter-spacing: 0.03em;
      height: 50px;
      align-items: center;
    }

    .table-row {
      background-color: #ffffff;
      box-shadow: 0px 0px 9px 0px rgba(0, 0, 0, 0.1);
      align-items: center;
    }

    .col-1 {
      flex-basis: 90%;
      max-width: 100%;

      input {
        width: 100%;
        height: 50px;
      }

      input:focus {
        outline: none;
        border: none;
      }
    }

    .col-2 {
      flex-basis: 10%;
      display: flex;
      align-items: center;
      svg {
        margin: 0 5px;
        cursor: pointer;
        width: 20px;
      }
    }

    @media all and (max-width: 767px) {
      .table-header {
        display: none;
      }

      .table-row {
      }

      li {
        display: block;
      }

      .col {
        flex-basis: 100%;
        align-items: center;
      }

      .col {
        display: flex;
        padding: 10px 0;
        &:before {
          height: 19px;
          color: #6c7a89;
          background-color: #99999938;
          padding-right: 10px;
          content: attr(data-label);
        }
      }
    }
  }

  .button-edit {
    background: none;
    padding: 0;
    border: none;
    outline: none;
    color: #000;
  }

  .button-add {
    background-color: #ef8354;
    border: none;
    outline: none;
  }

  .containerButton {
    margin: 9px 0 9px 0;
    margin-left: auto;
    margin-right: auto;
    padding-left: 10px;
    padding-right: 10px;
  }
`
export const ContainerModal = styled.div`
  .modal-footer {
    .btn-primary {
      background: blue !important;
    }
  }
`
