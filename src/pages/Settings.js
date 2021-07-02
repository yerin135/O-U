import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import Modal from 'react-modal';
import { Button, ButtonContainer, OurDiary, MainContainer } from '../components/Component';
import SpringNote from '../components/SpringNote';

const Settings = () => (
    <MainContainer>
        <SpringNote>
            <OurDiary>
                Settings
            </OurDiary>
            <ButtonContainer>
            <Link to="/diary">
            <Button>
                O-U 메이트 찾기
            </Button>
            </Link>
            <Link to="/settings">
            <Button>
                리마인더 설정
            </Button>
            </Link>
        </ButtonContainer>
        </SpringNote>
    </MainContainer>
);

const SettingModal = {
    content : {
        
    }
};

export default Settings;