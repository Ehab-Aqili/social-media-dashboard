import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "../../css/index.css";
// import "bootstrap/dist/js/bootstrap.js";
import { SearchBar } from "./SearchBar";
import { SearchResultList } from "./SearchResultList";
import ImageUser from "../cache_image/ImageUser";
import userData from "../../data/data";
import { Link, NavLink } from "react-router-dom";
import DropdownMenu from "./DropdownMenu";
import { PathIcons } from "../../util/PathIcons";
import EditProfileNew from "../edit_profile/EditProfileNew";
import PopupEditProfile from "../popup/PopupEditProfile";
import CustomLanguage from "../language/CustomLanguage";
import Popup from "../popup/Popup";
import { useTranslation } from "react-i18next";
import { KeyLang } from "../../util/KeyLang";
import DarkMode from "../DarkMode/DarkMode";
import logo from "../../assets/icons/logo_text.svg";
import axios from "axios";

const NavBar = () => {
  const [results, setResults] = useState([]);
  // const [value, setValue] = useState("");
  const [settingPopup, setSettingPopup] = useState(false);
  const [langPopup, setLangPopup] = useState(false);
  const [themePopup, setThemePopup] = useState(false);
  const { t } = useTranslation();

  const [input, setInput] = useState("");

  // const handleInput = async (e) => {
  //   setInput(e.target.value);
  //   const response = await axios.get(`http://localhost:8080/user/search/${input}`).catch(
  //     (error) => {
  //       console.log(error)
  //     }
  //   )
   
  //   // console.log(response);
  
  //   setResults(response.data);
  //   // console.log(results[0].username)
  // };
  const handleInput = async (e) => {
    setInput(e.target.value);
    try {
      const response = await axios.get(`http://localhost:8080/user/search/${e.target.value}`);
      setResults(response.data);
      console.log(results)
    } catch (error) {
      console.log("Error fetching data:", error);
      setResults([]); 
    }
  };



  const user = JSON.parse(sessionStorage.getItem('user'))

  return (
    <>
      <nav className="navbar navbar-expand-sm custom_nav">
        <div className="container-fluid">
          <NavLink className="navbar-brand" to="/">
            <img src={logo} alt="logo" style={{ width: "120px" }} />
          </NavLink>
          <ul className="navbar-nav custom-items">
            <li className="nav-item custom_item_nav d-flex justify-content-center">
              <NavLink className="nav-link" to="/home">
                <i className="fa-solid fa-house"></i>
              </NavLink>
            </li>
            <li className="nav-item custom_item_nav d-flex justify-content-center">
              <NavLink className="nav-link" to="/profile">
                <i className="fa-solid fa-user"></i>
              </NavLink>
            </li>
            <li className="nav-item custom_item_nav d-flex justify-content-center">
              <Link
                className="nav-link"
                to="/setting"
                onClick={() => setSettingPopup(true)}
              >
                <i className="fa-sharp fa-solid fa-gear"></i>
              </Link>
              <PopupEditProfile
                trigger={settingPopup}
                setTrigger={setSettingPopup}
              >
                <EditProfileNew />
              </PopupEditProfile>
            </li>
          </ul>
          {/* <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarScroll"
          aria-controls="navbarScroll"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button> */}
          <div
            className="d-flex justify-content-end align-items-center container_right_nav"
            id=""
          >
            <form className="search_bar_nav" role="search">
              <div className="">
                {/* <SearchBar setResults={setResults} value={value} /> */}
                <div className="input_wrapper">
                  {PathIcons.search}
                  <input
                    className="search_bar me-2"
                    type="search"
                    placeholder="Search"
                    onChange={handleInput}
                    value={input}
                  ></input>
                </div>
                {results.map((search, index) => {
                  return (
                    <div className="results-list p-2">
                    <Link
                      className="m-2 text-decoration-none"
                      // to={`/profile?id=${encodeURIComponent(result.id)}`}
                      key={index}
                      // onClick={() => setSearch(id)}
                    >
                      <div className="d-flex align-items-center gap-2">
                        <ImageUser image={search.image} width={35} />
                        <span className="result_search_name">{`${search.username}`}</span>
                      </div>
                    </Link>
                </div>
                  );
                })}
                {/* {results && results.length > 0 && (
                  <SearchResultList
                    results={results}
                    setResult={setResults}
                    // setValue={setValue}
                  /> 
                )} */}
                {}
              </div>
            </form>
            <span className="mx-3">{userData[0].name}</span>

            <div className="dropdown">
              <button
                className="btn_dropdown"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <ImageUser
                  image={user.image}
                  name={userData[0].name}
                  width={40}
                />
              </button>
              <ul className="dropdown-menu dropdown-menu-end custom-dropdown-menu pt-3">
                {/* ***----------------- DropdownMenu profile -----------------*** */}
                <DropdownMenu
                  text={user.username}
                  to={"/profile"}
                  links={true}
                  image={userData[0].image}
                />
                {/* ***----------------- DropdownMenu Setting -----------------*** */}
                <DropdownMenu
                  text={t(KeyLang.setting)}
                  links={false}
                  icon={PathIcons.settings}
                  onPress={() => setSettingPopup(true)}
                />
                <PopupEditProfile
                  trigger={settingPopup}
                  setTrigger={setSettingPopup}
                  title={t(KeyLang.setting)}
                >
                  <EditProfileNew />
                </PopupEditProfile>

                {/* ***----------------- DropdownMenu Language -----------------*** */}

                <DropdownMenu
                  text={t(KeyLang.language)}
                  links={false}
                  icon={PathIcons.language}
                  onPress={() => setLangPopup(true)}
                />

                {/* ***----------------- DropdownMenu Display -----------------*** */}
                <DropdownMenu
                  text={t(KeyLang.display)}
                  links={false}
                  icon={PathIcons.darkMode}
                  onPress={() => setThemePopup(true)}
                />
                {/* ***----------------- DropdownMenu Sign Out -----------------*** */}
                {/* <DropdownMenu
                  text={t(KeyLang.SignOut)}
                  to={"/"}
                  icon=
                />
         */}
                <li className="mb-2"><Link to="/login" onClick={()=> sessionStorage.clear()}  className="dropdown-item custom_item_dropDown"> <span className="d-flex align-items-center gap-2" >{PathIcons.signOut} <span>Sign Out</span> </span>  </Link> </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
      <Popup
        trigger={langPopup}
        setTrigger={setLangPopup}
        title={t(KeyLang.language)}
      >
        <CustomLanguage setTrigger={setLangPopup} />
      </Popup>{" "}
      <Popup
        trigger={themePopup}
        setTrigger={setThemePopup}
        title={t(KeyLang.display)}
      >
        <DarkMode />
      </Popup>
    </>
  );
};

export default NavBar;
