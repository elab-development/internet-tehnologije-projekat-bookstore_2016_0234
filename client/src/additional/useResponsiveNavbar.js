import { useState, useEffect } from 'react';

function useResponsiveNavbar(defaultVisible = false, breakpoint = 768) {
    const [isNavbarVisible, setIsNavbarVisible] = useState(defaultVisible);

    useEffect(() => {
        const handleResize = () => {
            setIsNavbarVisible(window.innerWidth >= breakpoint);
        };

        window.addEventListener('resize', handleResize);

        handleResize();


        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [breakpoint]);

    const toggleNavbar = () => {
        setIsNavbarVisible(!isNavbarVisible);
      };

      return { isNavbarVisible, toggleNavbar };
}

export default useResponsiveNavbar;