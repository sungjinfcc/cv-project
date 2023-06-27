import React from "react";

function ExpInfo({ expInfo, toggle, onDelete }) {
  return (
    <div id={expInfo.id} className="exp-info">
      <div className="txt size-1">{expInfo.company}</div>
      <div className="txt size-2">{expInfo.position}</div>
      <div className="txt size-4">{expInfo.mainTask}</div>
      <div className="txt size-3">{expInfo.dateFrom}</div>
      <div className="txt size-3">{expInfo.dateTo}</div>
      <div className="buttons">
        <button type="button" onClick={toggle} className="edit">
          Edit
        </button>
        <button
          type="button"
          onClick={() => onDelete("expInfos", expInfo.id)}
          className="delete"
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default ExpInfo;
