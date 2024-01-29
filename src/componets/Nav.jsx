// import React from "react";
import styled from "styled-components";
import { useEffect, useState } from "react";
const Nav = () => {
  const [show, setshow] = useState(false);

  const listener = () => {
    if (window.scrollY > 50) {
      setshow(true);
    } else {
      setshow(false);
    }
  };
  //   // addeventlisnter은 컴포넌트 마운트됐을 때 딱 한 번.
  useEffect(() => {
    window.addEventListener("scroll", listener);
    return () => {
      window.removeEventListener("scroll", listener);
    };
  }, []);

  return (
    <NavWrapper $show={show}>
      <Logo>
        <img
          alt="logo"
          src="/images/apple-logo.png"
          onClick={() => (window.location.href = "/")}
        />
      </Logo>
    </NavWrapper>
  );
};
const NavWrapper = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 70px;
  background-color: ${(props) => (props.$show ? "#000000" : "#000000")};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 36px;
  letter-spacing: 16px;
  z-index: 3;
`;

const Logo = styled.a`
  padding: 0;
  width: 70px;
  font-size: 0;
  display: inline-block;
  margin-bottom: 10px;
  img {
    display: block;
    width: 100%;
  }
`;
export default Nav;
