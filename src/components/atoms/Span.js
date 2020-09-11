import styled from "styled-components";

export const Span = styled.span`
  color: ${({ theme }) => theme.secondaryDark};
  font-weight: ${({ theme: { fontWeights } }) => fontWeights.bold};
`;
