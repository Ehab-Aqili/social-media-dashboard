// import { useEffect, useState } from "react";
// import userData from "../../data/data";
// import { PathIcons } from "../../util/PathIcons";
// import { async } from "q";
// import axios from "axios";

// export const SearchBar = ({ setResults, value }) => {
//   const [input, setInput] = useState("");
//   console.log();

//   // const search = async (event) => {
//   //   let query = event.target.value;

//   //   // let updatedList = userData.filter((item) => {
//   //   //   return item.firstName.toLowerCase().includes(query.toLowerCase());
//   //   // });
//   //   // setResults(updatedList);
//   //   // query.trim() === "" ? setResults("") : setResults(updatedList);
//   //   // query.trim() === "" ? setInput("") : setInput(updatedList);

//   //   const response = await axios.get(
//   //     `http://localhost:8080/user/search/${query}`
//   //   );
//   //   console.log(response);
//   // };
//   console.log("input", input);

//   const handleInput = async (e) => {
//     setInput(e.target.value);
//     const response = await axios.get(
//       `http://localhost:8080/user/search/${input}`
//     );
//     console.log(response);
//   };
//   // useEffect(() => {}, [input]);
//   return (
//     <div className="input_wrapper">
//       {PathIcons.search}
//       <input
//         className="search_bar me-2"
//         type="search"
//         placeholder="Search"
//         onChange={handleInput}
//       ></input>
//     </div>
//   );
// };

// // const handelSearch = (e)=>{
// //   setInput(e.target.value)
// // }
// // // console.log(input)

// // useEffect(()=>{
// //   const fetchUserData = async () => {
// //     try {
// //       const response = await axios.get("http://localhost:8080/user/search", {searchUserName : input})
// //     console.log(response)
// //     } catch (error) {
// //       console.error('Error fetching user data:', error);
// //     }
// //   };
// //   fetchUserData();
// // })
