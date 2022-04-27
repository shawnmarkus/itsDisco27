import React, { useState, useRef, useEffect, useContext } from "react";
import ReactPlayer from "react-player";
import style from "../css/test.module.css";
import { Modal, Button } from "antd";

const Test = ({ link, DataToRender, setDataToRender }) => {
  const [seekTime, setSeekTime] = useState({
    check: false,
    time: 0,
  });

  useEffect(() => {
    // this is the controller to video to specified time
    if (VideoRef.current !== undefined) {
      VideoRef.current.seekTo(seekTime.time, "seconds");
    }
  }, [seekTime.check]);

  const VideoRef = useRef();

  const [data, setData] = useState({
    Icon: null,
    label: null,
    url: null,
  });

  const [corEvent, setCorEvent] = useState({ x: 0, y: 0 });
  const [modalVisible, setModalVisible] = useState(false);

  const handlePause = (e) => {
    setSeekTime({ ...seekTime, time: e.target.currentTime });
  };

  //   upload image
  const uploadImage = (e) => {
    setData({ ...data, Icon: URL.createObjectURL(e.target.files[0]) });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const bucket = { ...data, ...corEvent, time: seekTime.time };
    // DataToRender.push(bucket);
    setDataToRender(DataToRender, bucket);
    console.log(DataToRender, bucket, "to check");

    // unset the value
    setData({ Icon: null, label: null, url: null });
    setCorEvent({ x: null, y: null });
    setModalVisible(!modalVisible);
  };

  return (
    <div className={style.masterContainer}>
      <div className={style.topContainer}>
        <div className={style.Container}>
          <ReactPlayer
            controls={true}
            muted={false}
            url={link}
            onPause={handlePause}
            onProgress={(e) => console.log("yeh hai value", e)}
            width="100%"
          />

          <Button
            type="primary"
            style={{
              marginTop: "10px",
              background: "#050A30",
              borderColor: "yellow",
              width: "fit-content",
            }}
            onClick={() => {
              setModalVisible(true);
              setSeekTime({ ...seekTime, check: true });
            }}
          >
            Add Details
          </Button>

          <Modal
            title="Details"
            centered
            visible={modalVisible}
            onOk={() => {
              setModalVisible(false);
              setSeekTime({ ...seekTime, check: false });
            }}
            onCancel={() => {
              setModalVisible(false);
              setSeekTime({ ...seekTime, check: false });
            }}
            width="fit-content"
            bodyStyle={{
              backgroundColor: "rgba(0,0,0,0.2)",
            }}
          >
            {/* video player in modal */}
            {seekTime.check ? (
              <div className={style.modalContainer}>
                <ReactPlayer
                  ref={VideoRef}
                  onClick={(e) => {
                    setCorEvent({
                      x: `${e.clientX - e.target.offsetLeft}`,
                      y: `${e.clientY - e.target.offsetTop}`,
                    });
                  }}
                  url={link}
                />

                <form>
                  <div className={style.sideContainer}>
                    <h4>dataLog</h4>
                    <section className={style.containerHolderModal}>
                      <div className={style.inputinfo}>
                        <div>x cordinate</div>
                        <div>{corEvent.x}</div>
                      </div>
                      {/* <br /> */}
                      <div className={style.inputinfo}>
                        <div>y cordinate</div>
                        <div>{corEvent.y}</div>
                      </div>

                      <div className={style.inputinfo}>
                        <div>Time</div>
                        <div>{seekTime.time}</div>
                      </div>

                      <div className={style.inputinfo}>
                        <div>Icon</div>
                        <div>
                          <label
                            className={style.labelInfo}
                            htmlFor="imageInfo"
                          >
                            Select
                          </label>
                          <input
                            className={style.hideMe}
                            type="file"
                            id="imageInfo"
                            // onChange={(e) =>
                            //   setData({ ...data, Icon: e.target.value })
                            // }
                            onChange={uploadImage}
                          />
                        </div>
                      </div>

                      <div className={style.inputinfo}>
                        <div>label</div>
                        <div className={style.shiftRight}>
                          <input
                            className={style.customiseInputBox}
                            type="text"
                            onChange={(e) =>
                              setData({ ...data, label: e.target.value })
                            }
                          />
                        </div>
                      </div>

                      <div className={style.inputinfo}>
                        <div>url</div>
                        <div className={style.shiftRight}>
                          <input
                            className={style.customiseInputBox}
                            type="url"
                            onChange={(e) =>
                              setData({ ...data, url: e.target.value })
                            }
                          />
                        </div>
                      </div>
                    </section>

                    <div style={{ marginTop: "10px" }}>
                      <label className={style.submitBtn} htmlFor="submitBtn">
                        Submit
                      </label>
                      <input
                        id="submitBtn"
                        className={style.hideMe}
                        type="submit"
                        onClick={handleSubmit}
                      />
                    </div>
                  </div>
                </form>
              </div>
            ) : (
              <p>Loading...</p>
            )}

            {/* {corEvent ? console.log(corEvent) : console.log("not yet set")} */}
          </Modal>
        </div>
      </div>
    </div>
  );
};

export default Test;
