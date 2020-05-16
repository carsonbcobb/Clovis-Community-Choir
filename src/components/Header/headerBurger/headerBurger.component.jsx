import React, { useState } from "react";

import BurgerContainer from "./headerBurger.styles";
import HeaderRight from "../headerRight/headerRight.component";

const HeaderBurger = () => {
  const [open, setOpen] = useState(false);

  function handleClick(open) {
    setOpen(!open);
  }

  return (
    <>
      <BurgerContainer open={open} onClick={() => setOpen(!open)}>
        <div />
        <div />
        <div />
      </BurgerContainer>
      <HeaderRight open={open} handleClick={handleClick} />
    </>
  );
};
export default HeaderBurger;