import logo from './logo.svg';
import './App.css';
import styled from '@emotion/styled';

function App() {
  return (
    <MainContainer>
      {/* <img src={logo} alt="logo" className="App"></img> */}
      <SubContainer>
        <OurDiary>
          OUR DIARY
        </OurDiary>
        <ButtonContainer>
          <button>일기쓰기
          </button>
          <button>달력보기
          </button>
          <button>설정
          </button>
        </ButtonContainer>
      </SubContainer>
    </MainContainer>
  );
}

const OurDiary = styled.div`
  border: 2.5px solid black;
  width: min(100% - 2rem, 20rem);
  padding: 2rem 0;
  text-align: center;
  font-family: 'Roboto', sans-serif;
  font-size: 1.25rem;
`;

const MainContainer = styled.div`
  height: 100vh;
  padding: 3rem;
  
  // 엘리먼트 크기가 마음대로 안 될 때는 border-box 적용하기~
  box-sizing: border-box;

  display: flex;
  flex-direction: column;
`;

const SubContainer = styled.div`
  border: 3px solid black;
  border-top-right-radius: 1rem;
  border-bottom-right-radius: 1rem;
  padding: 7rem 0 0;
  flex: 1;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

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

const ButtonContainer = styled.div`
  display: flex;
  width: min(100%, 60rem);
  align-items: center;
  justify-content: space-evenly;
  padding: 2rem 1rem;
  row-gap: 0.5rem;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

export default App;


