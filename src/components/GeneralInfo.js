import React from "react";

function GeneralInfo({ genInfo, toggle }) {
  return (
    <div className="gen-info">
      <div className="txt size-1">{genInfo.name}</div>
      <div className="txt size-2">{genInfo.email}</div>
      <div className="txt size-3">{genInfo.phoneNumber}</div>
      <div className="txt size-4">{genInfo.detail}</div>
      <button className="edit" type="button" onClick={toggle}>
        Edit
      </button>
    </div>
  );
}

export default GeneralInfo;
