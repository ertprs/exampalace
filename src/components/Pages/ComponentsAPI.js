import React from 'react';
import EPButton from 'src/components/Atoms/Buttons/EPButton';
import ButtonRail from 'src/components/Molecules/ButtonRail/ButtonRail';
const ComponentsAPI = () => {
  return <ButtonRail children={[<EPButton />]} />;
};

export default ComponentsAPI;
