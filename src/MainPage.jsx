import React from 'react';

const MainPage = ({ ...isLogin }) => <h1> You are: {isLogin ? 'Logged in' : 'Not logged in'}</h1>;

export default MainPage;
