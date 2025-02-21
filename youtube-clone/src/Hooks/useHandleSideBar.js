import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleMenu } from '../Redux/store';
const useHandleSideBar = () => {
    const dispatch = useDispatch();
    const isHamburgerOpen = useSelector((state) => state.app.isMenuOpen);

    const handleToggleHamburger = () => {
        dispatch(toggleMenu(isHamburgerOpen));
    };

    return { handleToggleHamburger, isHamburgerOpen };
};

export default useHandleSideBar;