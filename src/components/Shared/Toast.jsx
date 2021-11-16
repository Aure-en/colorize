import React from 'react';
import styled from 'styled-components';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Toast() {
  return (
    <StyledToastContainer />
  );
}

export const toastify = (content) => toast(content, {
  position: 'bottom-center',
  autoClose: 3000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
});

export default Toast;

const StyledToastContainer = styled(ToastContainer).attrs({
  toastClassName: 'toast-wrapper',
  progressClassName: 'progress',
  bodyClassName: 'body',
})`
  .toast-wrapper {
    background: ${(props) => props.theme.background};
    box-shadow: 0 0 10px 0 ${(props) => props.theme.textPrimary}15;
  }

  .body {
    width: 100%;
  }

  .progress {
    background: ${(props) => `linear-gradient(
      to right,
      ${props.theme.primary},
      ${props.theme.secondary},
      ${props.theme.tertiary},
      ${props.theme.quaternary},
      ${props.theme.quinary}
    )`};
  }

  button[aria-label="close"] {
    color: ${(props) => props.theme.primaryText};
  }
`;
