import React from 'react';
import useDeviceDetect from './useDeviceDetect';

const MyRespComp = ({MobileComponent, DesktopComponent}) => {
  const { isMobile } = useDeviceDetect();

  return (
    <div>
      {
        isMobile ? <MobileComponent /> : <DesktopComponent />
      }
    </div>
  );
};

export default MyRespComp;