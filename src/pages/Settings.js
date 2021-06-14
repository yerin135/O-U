import styled from '@emotion/styled';
import { Button, ButtonContainer, OurDiary, MainContainer, SubContainer, } from '../pages/Component';
import { Link } from 'react-router-dom';
import Modal from 'react-modal';

const Settings = () => (
    <MainContainer>
        <SubContainer>
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
        </SubContainer>
    </MainContainer>
);

const SettingModal = {
    content : {
        
    }
};

export default Settings;