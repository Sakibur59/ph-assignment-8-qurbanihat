import Banner from '@/Components/Homepage/banner';
import FooterPage from '@/Components/Homepage/FooterPage';
import NavBar from '@/Components/shared/NavBar';
import AnimalCard from '@/Components/ui/AnimalCard';
import React from 'react';
<<<<<<< HEAD
import { ToastContainer } from 'react-toastify';
=======
>>>>>>> f020e672f800807dbd666dd195d2216ab1a026bf

const MainLayout = ({children}) => {
    return (
        <>
        <NavBar></NavBar>
        <Banner></Banner>
        <AnimalCard></AnimalCard>
<<<<<<< HEAD
        <ToastContainer />
=======
>>>>>>> f020e672f800807dbd666dd195d2216ab1a026bf
        {children}
        <FooterPage></FooterPage>
        </>
    );
};

export default MainLayout;