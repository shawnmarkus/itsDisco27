import React, { useEffect, useState } from "react";
import "antd/dist/antd.min.css";
import "antd/dist/antd.css";
import "./index.css";
import { Row, Col } from "antd";
import Style from "./css/App.module.css";
import IMG from "./img/pngkey.com-dancing-png-830689.png";
import Video from "./component/Video";
import Progress from "./component/Progress";
import UploadPage from "./component/UploadPage";

const style = {
  boxShadow: "0 0 100px 10px rgba(1, 31, 85,0.25) ",
  padding: "10px",
  height: "100%",
  overflow: "hidden",
  borderRadius: "10px",
  margin: "5px",
};

const center = {
  position: "absolute",
  top: "50%",
  transform: "translate(0,-50%)",
  width: "100%",
};

function App() {
  const [list, setList] = useState(null);

  // using state lifting for data
  const [DataToRender, setDataToRender] = useState([]);

  return (
    <div className={Style.container}>
      <section className={Style.homeTop1}>
        <div className={Style.svgContainer}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 320">
            <path
              fill="#0099ff"
              fill-opacity="1"
              d="M0,192L40,186.7C80,181,160,171,240,138.7C320,107,400,53,480,80C560,107,640,213,720,245.3C800,277,880,235,960,192C1040,149,1120,107,1200,122.7C1280,139,1360,213,1400,250.7L1440,288L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"
            ></path>
          </svg>
        </div>
        <div className={Style.svgContainer}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path
              fill="#0009ff"
              fill-opacity="0.6"
              d="M0,256L48,256C96,256,192,256,288,245.3C384,235,480,213,576,176C672,139,768,85,864,74.7C960,64,1056,96,1152,144C1248,192,1344,256,1392,288L1440,320L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
            ></path>
          </svg>
        </div>

        <div className={Style.title}>
          <div style={{ height: "fit-content", position: "relative" }}>
            <p>Its-Disco-admin</p>
          </div>
          <img src={IMG} style={{ height: "500px" }} alt="disco_app" />
        </div>
      </section>

      <section className={Style.homeTop2}>
        <h1 style={{ padding: "20px", color: "white" }}>
          ItsDisco-Admin Panel
        </h1>
        <div style={center}>
          <Row
            style={{ padding: "20px" }}
            gutter={[10, { xs: 8, sm: 16, md: 24, lg: 32 }]}
          >
            <Col className="gutter-row " span={7}>
              <div style={style}>
                <div className={Style.boxName}> Upload</div>{" "}
                <hr className={Style.horizontaLine} />
                <UploadPage
                  funcToSetList={(val) => {
                    setList(val);
                  }}
                />
              </div>
            </Col>
            <Col className="gutter-row" span={10}>
              <div style={style}>
                <div className={Style.boxName}> video</div>{" "}
                <hr className={Style.horizontaLine} />
                {list ? (
                  // <Data>
                  <Video
                    li={list[0]}
                    DataToRender={DataToRender}
                    setDataToRender={(prevValue, value) => {
                      if (value !== undefined) {
                        setDataToRender([...prevValue, value]);
                      }
                    }}
                  />
                ) : (
                  // </Data>
                  <div>noting stays </div>
                )}
              </div>
            </Col>
            <Col className="gutter-row" span={7}>
              <div style={style}>
                <div className={Style.boxName}> progress</div>
                <hr className={Style.horizontaLine} />
                {/* <Data> */}
                <Progress DataToRender={DataToRender} />
                {/* </Data> */}
              </div>
            </Col>
          </Row>
        </div>
      </section>
    </div>
  );
}

export default App;
