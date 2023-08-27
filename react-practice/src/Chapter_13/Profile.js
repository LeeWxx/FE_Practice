import React from 'react';
import { useParams } from 'react-router-dom';
import WithRouterSample from './WithRouterSample';

const data = {
    LeeWxx: {
        name: 'LeeWxx',
        description: '리액트 실습 중'
    },
    Crayon: {
        name: '짱구',
        description: '짱구는 못말려의 주인공'
    }
};

const Profile = () => {
    const { username } = useParams();
    const profile = data[username];
    if (!profile) { 
        return <div>존재하지 않는 사용자입니다.</div>;
    }
    return (
        <div>
            <h3>
                {username}({profile.name})
            </h3>
            <p>{profile.description}</p>
			 <WithRouterSample/>
        </div>
    );
};

export default Profile;