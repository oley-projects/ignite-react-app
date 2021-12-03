import { useState } from "react";
import logo from "../img/logo.svg";
// Styling, Animation
import styled from "styled-components";
import { motion } from "framer-motion";
import { fadeInAnim } from "../animations";
// Redux, Routing
import { fetchSearch } from "../actions/gamesAction";
import { useDispatch } from "react-redux";

const Nav = () => {
  const dispatch = useDispatch();
  const [inputText, setInputText] = useState("");
  const textInputHandler = (e) => {
    setInputText(e.target.value);
  }
  const submitSearch = (e) => {
    e.preventDefault();
    if (inputText) {
      dispatch(fetchSearch(inputText));
    }
    setInputText("");
  }
  const clearSearched = () => {
    dispatch({type: "CLEAR_SEARCH"})
  }

  return (
    <StyledNav variants={fadeInAnim} initial="hidden" animate="show">
      <Logo onClick={clearSearched}>
        <img src={logo} alt="logo" />
        <h1>Ignite</h1>
      </Logo>
      <form className="search">
        <input value={inputText} onChange={textInputHandler} type="text" />
        <button type="submit" onClick={submitSearch}>Search</button>
      </form>
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