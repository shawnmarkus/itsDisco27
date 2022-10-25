import React from "react";
import "antd/dist/antd.css";
import Style from "../css/UploadPage.module.css";

const UploadPage = ({ funcToSetList }) => {
  // to set the list of selected item
  const handleChange = (e) => {
    const obj = Array.from(e.target.files);
    funcToSetList(obj);
  };

  return (
    <div className={Style.masterClass}>
      <label className={Style.labelEle} htmlFor="inputEle">
        Upload
      </label>
      <input
        className={Style.inp}
        type="file"
        multiple
        id="inputEle"
        name="fileSelector"
        onChange={handleChange}
      />
    </div>
  );
};

export default UploadPage;
