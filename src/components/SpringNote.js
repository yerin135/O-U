import styled from '@emotion/styled';
import { SubContainer } from './Component';

const SpringContainer = styled.div``;

const Springs = () => (
  <SpringContainer>
  </SpringContainer>
);

const SpringNoteContentWrapper = styled.div``;

const SpringNote = ({ children }) => (
  <SubContainer>
    <Springs />
    {/* <SpringNoteContentWrapper>  */}
      {children}
    {/* </SpringNoteContentWrapper> */}
  </SubContainer>
); 

export default SpringNote;
