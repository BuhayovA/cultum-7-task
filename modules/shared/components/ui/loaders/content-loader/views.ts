import styled from 'styled-components';

interface Props {
  position: string | undefined;
}

export const Wrapper = styled.div<Props>`
  ${({ theme }) => theme.templates.absolute};
  ${({ theme }) => theme.templates.centerContent};
  position: ${({ position }) => position};
`;
