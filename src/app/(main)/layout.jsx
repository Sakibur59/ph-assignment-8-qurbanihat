import Banner from '@/Components/Homepage/banner';
import FooterPage from '@/Components/Homepage/FooterPage';
import NavBar from '@/Components/shared/NavBar';
import AnimalCard from '@/Components/ui/AnimalCard';
import React from 'react';

const MainLayout = ({children}) => {
    return (
        <>
        <NavBar></NavBar>
        <Banner></Banner>
        <AnimalCard></AnimalCard>
        {children}
        <FooterPage></FooterPage>
        </>
    );
};

export default MainLayout;