import { useLocation } from "react-router-dom";
import NavBar from "../components/navbar/NavBar";
import AddPost from "../components/posts/AddPost";
import CardPost from "../components/posts/CardPost";
import ImageUser from "../components/cache_image/ImageUser";
import InputField from "../components/inputs/InputField";
import { PathIcons } from "../util/PathIcons";

const Home = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const id = searchParams.get("id");
  let index = id == null ? "0" : id;
  return (
    <div className="bodyAllPages">
      <div className="px-lg-4 mx-lg-3">
        {/* <NavBar /> */}

        {/* <LoadingPage loading={loading}/> */}
        <div className="row d-flex justify-content-center">
          <div className="col-xl-6 col-lg-7 col-md-8 ">
            <div className="d-flex flex-column gap-3">
              <AddPost id={index} />
              <CardPost id={index} />




              {/* post one */}
              <div className="row container_post">
                <div className="col-12 p-4">

                  <div key={index}>
                    <div className="header_post d-flex align-items-center mt-5 gap-3">
                      <ImageUser image={"https://media.istockphoto.com/id/1407759041/photo/confident-happy-beautiful-hispanic-student-girl-indoor-head-shot-portrait.jpg?s=2048x2048&w=is&k=20&c=eskue6p9gwUVS2t0Kpuw6rd7Sgu5nKgxsMD6Aqaba8I="} width={60} />
                      <div>
                        <span className="user_name_post d-block">{"Farah Awwad"}</span>
                        <span className="time_post d-block">{`${15} mins ago`}</span>
                      </div>
                      <span className="menu_dots_post">{PathIcons.menuDots}</span>
                    </div>
                    <div className="body_post py-4">
                      {/* {data.img !== "" ? (
                  <img src={data.status.img} alt="image_post" />
                ) : null} */}
                      <p className="pt-3 mb-2">{'Hello friends !!!'}</p>
                    </div>
                    <div className="footer_post">
                      <div className="d-flex gap-4">
                        <div className="like-post d-flex align-items-center gap-2">
                          {PathIcons.like}
                          {` ${"5"}K`}
                        </div>
                        <div className="comment-post d-flex align-items-center gap-2">
                          {PathIcons.comment}
                          {` ${"10"}`}
                        </div>
                      </div>
                      <InputField />
                    </div>
                  </div>
                </div>
              </div>

              {/* post two */}
              <div className="row container_post">
                <div className="col-12 p-4">

                  <div key={index}>
                    <div className="header_post d-flex align-items-center mt-5 gap-3">
                      <ImageUser image={"https://www.allkindsoftherapy.com/wp-content/uploads/formidable/22/o_1ejko4nrg12b2d4k17hm1hi1ipg7-1.jpg"} width={60} />
                      <div>
                        <span className="user_name_post d-block">{"Tasneem Shehadeh"}</span>
                        <span className="time_post d-block">{`${15} mins ago`}</span>
                      </div>
                      <span className="menu_dots_post">{PathIcons.menuDots}</span>
                    </div>
                    <div className="body_post py-4">
                      {/* {data.img !== "" ? (
                  <img src={data.status.img} alt="image_post" />
                ) : null} */}
                      <p className="pt-3 mb-2">{'Hello people !!!'}</p>
                    </div>
                    <div className="footer_post">
                      <div className="d-flex gap-4">
                        <div className="like-post d-flex align-items-center gap-2">
                          {PathIcons.like}
                          {` ${"7"}K`}
                        </div>
                        <div className="comment-post d-flex align-items-center gap-2">
                          {PathIcons.comment}
                          {` ${"3"}`}
                        </div>
                      </div>
                      <InputField />
                    </div>
                  </div>
                </div>
              </div>

              {/* <EditProfile userData={userData} index={0} /> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
