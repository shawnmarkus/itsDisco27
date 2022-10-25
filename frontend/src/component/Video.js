import React, { useState, useEffect, useRef } from "react";
// import { Modal, Button } from "antd";
// import ReactPlayer from "react-player";
import Test from "./test";

const Video = ({ li, DataToRender, setDataToRender }) => {
  const [videoUri, setVideoUri] = useState("");
  const [modalVisible, setModalVisible] = useState(false);

  // const videoPlayerRef = useRef(); //older

  // newly added
  // const VideoRef = useRef();
  // const [seekTime, setSeekTime] = useState({
  //   check: false,
  //   time: 0,
  // });

  useEffect(() => {
    if (li) {
      setVideoUri(URL.createObjectURL(li));
      // console.log(li);
    }
    return URL.revokeObjectURL(videoUri);
  }, [li]);

  return (
    <div>
      {videoUri ? (
        // <video
        //   width="100%"
        //   height="90%"
        //   style={{ marginTop: "20%" }}
        //   ref={videoPlayerRef}
        //   // onLoad={() => {}}
        //   onClick={(e) => {
        //     setCorEvent(
        //       `${e.clientX - e.target.offsetLeft}x${
        //         e.clientY - e.target.offsetTop
        //       }`
        //     );
        //   }}
        //   // must add the onpause event and onresume event
        //   onKeyPress={(e) => {
        //     if (e.code === "Space") {
        //       console.log(e.code);
        //     }
        //   }}
        //   onTimeUpdate={(e) => setTimeEvent(e.target.currentTime)}
        //   muted={true}
        //   controls
        // >
        //   <source src={videoUri} type="video/mp4" />
        //   Your browser does not support the video tag.
        // </video>
        // <ReactPlayer
        //   // ref={VideoRef}
        //   width="100%"
        //   onClick={(e) => {
        //     setCorEvent({
        //       x: `${e.clientX - e.target.offsetLeft}`,
        //       y: `${e.clientY - e.target.offsetTop}`,
        //     });
        //   }}
        //   controls
        //   url={videoUri}
        //   // url={VideoUri}
        // />

        videoUri ? (
          <Test
            link={videoUri}
            DataToRender={DataToRender}
            setDataToRender={setDataToRender}
          />
        ) : null
      ) : (
        <div>Loading...</div>
      )}

      {/* <Button
        type="primary"
        style={{ background: "red", borderColor: "yellow" }}
        onClick={() => setModalVisible(true)}
      >
        Vertically centered modal dialog
      </Button>

      <Modal
        title="Vertically centered modal dialog"
        centered
        visible={modalVisible}
        onOk={() => setModalVisible(false)}
        onCancel={() => setModalVisible(false)}
      ></Modal> */}
    </div>
  );
};

export default Video;
