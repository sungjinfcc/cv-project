import React from "react";

function GeneralInfo({ genInfo, toggle }) {
  return (
    <div>
      <div>{genInfo.name}</div>
      <div>{genInfo.email}</div>
      <div>{genInfo.phoneNumber}</div>
      <button type="button" onClick={toggle}>
        Edit
      </button>
    </div>
  );
}

export default GeneralInfo;
