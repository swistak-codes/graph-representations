import styled from 'styled-components';
import { DiagramContextProvider } from './components/diagram-context';
import { Diagram } from './components/diagram';
import { Actions } from './components/actions';
import { Representation } from './components/representation';

type Props = {
  className?: string;
};

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  gap: 10px;
`;

export const GraphRepresentations = ({ className = '' }: Props) => {
  return (
    <DiagramContextProvider>
      <StyledContainer className={className}>
        <Actions />
        <Diagram />
        <Representation />
      </StyledContainer>
    </DiagramContextProvider>
  );
};
