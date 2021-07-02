import styled from "@emotion/styled";
import logo from "../assets/logo.svg";
import springHoleSvg from "../assets/spring-hole.svg";

const NoteContainer = styled.div`
  border: 3px solid black;
  border-top-right-radius: 2.5rem;
  border-bottom-right-radius: 2.5rem;
  flex: 1;

  position: relative;
  ::before {
    content: "";
    width: 80px;
    height: 80px;
    color: blue;
    position: absolute;
    transform: translate(-50%, -50%);
    top: 0;
    left: 0;
    background: center / contain no-repeat url(${logo}), white;
  }
`;

const SpringHole = styled.div`
  height: 100%;
  position: absolute;
  left: -20px;

  background: url(${springHoleSvg}) space;
  margin-top: 2.5rem;
  height: calc(100% - 2.5rem);
  width: 60px;
`;

const SpringNoteContentWrapper = styled.div`
  height: 100%;
  padding: 7rem 0 1.5rem 0;
  box-sizing: border-box;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

const SpringNote = ({ children }) => (
  <NoteContainer>
    <SpringHole />
    <SpringNoteContentWrapper>{children}</SpringNoteContentWrapper>
  </NoteContainer>
);

export default SpringNote;
