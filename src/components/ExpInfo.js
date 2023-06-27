import React from "react";

function ExpInfo({ expInfo, toggle, onDelete }) {
  return (
    <div id={expInfo.id}>
      <div>{expInfo.company}</div>
      <div>{expInfo.position}</div>
      <div>{expInfo.mainTask}</div>
      <div>{expInfo.dateFrom}</div>
      <div>{expInfo.dateTo}</div>
      <button type="button" onClick={toggle}>
        Edit
      </button>
      <button type="button" onClick={() => onDelete("expInfos", expInfo.id)}>
        Delete
      </button>
    </div>
  );
}

export default ExpInfo;
