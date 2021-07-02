import { Link } from 'react-router-dom';
import styled from '@emotion/styled';
import { Button, MainContainer } from '../components/Component';
import SpringNote from '../components/SpringNote';

const Diary = () => (
    <MainContainer>
        <Writing>
            
        </Writing>
    </MainContainer>
);

const Writing = styled.div`
    border: 3px solid black;
    border-radius: 2.5rem;
    padding: 7rem 0 1.5rem 0;
    flex: 1;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
`

export default Diary;