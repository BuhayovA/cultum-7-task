import styled from 'styled-components';

export const Wrapper = styled.div`
  display: grid;
  grid-gap: 30px;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
`;

export const ContentWrapper = styled.div`
  padding: 30px 0;
  margin: 0 auto;
  max-width: ${({ theme }) => theme.dimensions.pageMaxWidth}px;
`;
