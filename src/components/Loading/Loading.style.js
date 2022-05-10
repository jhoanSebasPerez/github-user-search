import styled, { keyframes, css } from "styled-components";

const stylesByType = {
  circular: css`
    width: 100%;
    height: 100%;
    border-radius: 50%;
  `,
  small: css`
    width: 60px;
    margin: 0 auto;
    height: 12px;
    margin-top: 12px;
  `,
  medium: css`
    width: 80px;
    height: 18px;
    margin-top: 12px;
  `,
  big: css`
    width: 150px;
    height: 18px;
  `,
  xbig: css`
    width: 100%;
    height: 18px;
  `,
};

const LoadingAnimation = keyframes`
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`;

export const ContentLoading = styled.div`
  animation: ${LoadingAnimation} 3s ease-in-out infinite;
  background: linear-gradient(
    90deg,
    rgba(250, 250, 250, 1),
    rgb(200, 199, 199)
  );
  background-size: 200% 200%;
  ${({ type }) => stylesByType[type]}

  @media (min-width: 768px) {
    margin-left: 0;
  }

  @media (min-width: 1024px) {
    ${({ type }) =>
      type === "xbig" &&
      css`
        margin-top: 32px;
      `}
  }
`;
