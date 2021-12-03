import logo from "../img/logo.svg";
// Styling, Animation
import styled from "styled-components";
import { motion } from "framer-motion";

const Nav = () => {
  return (
    <StyledNav>
      <Logo>
        <img src={logo} alt="logo" />
        <h1>Ignite</h1>
      </Logo>
      <div className="search">
        <input type="text" />
        <button>Search</button>
      </div>
    </StyledNav>
  );
};

const StyledNav = styled(motion.div)`
  padding: 3rem 5rem;
  text-align: center;
  input {
    width: 30%;
    font-size: 1.5rem;
    padding: 0.5rem;
    border: none;
    margin-top: 5rem;
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.2);
    outline-color: rgba(0, 0, 0, 0.2);
  }
  button {
    font-size: 1.5rem;
    border: none;
    padding: 0.55rem 2rem;
    cursor: pointer;
    background-color: rgba(0, 0, 0, 0.2);
    transition: background-color 0.3s ease;
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.2);
    color: #fff;
    &:hover {
      background-color: rgba(0, 0, 0, 0.3)
    }
    &:active {
      background-color: rgba(0, 0, 0, 0.4)
    }
  }
`;
const Logo = styled(motion.div)`
  display: flex;
  justify-content: center;
  padding: 1rem;
  cursor: pointer;
`;

export default Nav;