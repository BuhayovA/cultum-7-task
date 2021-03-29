import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.gray500};
  padding: 10px 10px;
  font-size: 14px;
  font-weight: 300;
`;

export const Title = styled.div`
  text-align: center;
  display: ${({ children }) => (children ? 'block' : 'none')};
  padding: 10px;
  margin: 0 0 10px;
  border-bottom: 1px solid beige;
  color: #fafafa;
  font-size: 16px;
  font-weight: 500;
`;

export const Error = styled.div`
  color: red;
  font-weight: 400;
`;
