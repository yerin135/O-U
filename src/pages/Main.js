import { Link } from 'react-router-dom';
import styled from '@emotion/styled';
import logo from '../assets/logo.svg';
import { Button, ButtonContainer, OurDiary, MainContainer } from '../components/Component';
import SpringNote from '../components/SpringNote';

const Main = () => (
	<MainContainer>
    <SpringNote>
      <OurDiary>
        OUR DIARY
      </OurDiary>
      <ButtonContainer>
        <Link to="/diary">
          <Button>
            일기쓰기
          </Button>
        </Link>
        <Link to="/calender">
          <Button>
            달력보기
          </Button>
        </Link>
        <Link to="/settings">
          <Button>
            설정
          </Button>
        </Link>
      </ButtonContainer>
    </SpringNote>
	</MainContainer>
);

export default Main;
