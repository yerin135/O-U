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
  padding: 2rem 8rem;
  margin: 7rem 12rem 15rem;
  display: flex;
  font-family: 'Roboto', sans-serif;
`

const MainContainer = styled.div`
  
  width: 100%;
  height: 80%;
  text-align: center;
  flex-direction: row;
  padding: 3rem;
`

const SubContainer = styled.div`
  border: 3px solid black;
  border-top-right-radius: 1rem;
  border-bottom-right-radius: 1rem;
  width: 90%;
  height: 60%;
  display: flex;
  flex-direction: column;
  align-items: center;
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

`

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 100%;
  padding: 2rem 1rem;
`

export default App;


