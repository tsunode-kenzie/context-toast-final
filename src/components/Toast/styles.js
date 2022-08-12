import styled, { css, keyframes } from 'styled-components';

const translateXAnimationFrom = keyframes`
  0% {
    background: transparent;
    transform: translateX(120%);
  }
  95% {
    transform: translateX(-20px);
  }
  100% {
    transform: translateX(0);
  }
`;

const translateXAnimationLeave = keyframes`
  from {
    transform: translateX(0) ;
  }
  to {
    background: transparent;
    transform: translateX(120%);
  }
`;

const translateYAnimationMobileFrom = keyframes`
  from {
    background: transparent;
    transform: translateY(-120%);
  }
  to {
    transform: translateY(0);
  }
`;

const translateYAnimationMobileLeave = keyframes`
  from {
    transform: translateY(0) ;
  }
  to {
    background: transparent;
    transform: translateY(-120%);
  }
`;

const ToastTypeVariations = {
  success: css`
    background: var(--color-success);
  `,
  error: css`
    background: var(--color-error);
  `,
  warning: css`
    background: var(--color-warning);
    color: #000;
  `,
};

export const Container = styled.div`
  width: 360px;
  display: flex;
  position: relative;
  background: #f10;

  padding: 16px 30px 16px 16px;
  margin: 20px 22px 0;
  border-radius: 10px;

  ${({ type }) => ToastTypeVariations[type]}

  ${({ isLeave }) =>
    css`
      animation: ${isLeave ? translateXAnimationLeave : translateXAnimationFrom}
        0.8s;
    `}
  animation-fill-mode: forwards;

  > svg {
    margin: 4px 12px 0 0;
  }

  ${({ hasDescription }) =>
    !hasDescription &&
    css`
      align-items: center;

      svg {
        margin-top: 0;
      }
    `}

  div {
    strong {
      font-weight: bold;
    }

    p {
      margin-top: 4px;
      font-size: 14px;
    }
  }

  button {
    position: absolute;
    right: 16px;
    top: 19px;
    border: 0;
    background: transparent;
    color: inherit;
  }

  @media (max-width: 420px) {
    width: 90%;
    margin: 10px auto;

    ${({ isLeave }) =>
      css`
        animation: ${isLeave
            ? translateYAnimationMobileLeave
            : translateYAnimationMobileFrom}
          0.8s;
      `}
  }
`;
