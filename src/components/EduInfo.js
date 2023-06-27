import React from "react";

function EduInfo({ eduInfo, toggle, onDelete }) {
  return (
    <div id={eduInfo.id} className="edu-info">
      <div className="txt size-1">{eduInfo.school}</div>
      <div className="txt size-2">{eduInfo.title}</div>
      <div className="txt size-3">{eduInfo.dateFrom}</div>
      <div className="txt size-3">{eduInfo.dateTo}</div>
      <div className="buttons">
        <button type="button" onClick={toggle} className="edit">
          Edit
        </button>
        <button
          type="button"
          onClick={() => onDelete("eduInfos", eduInfo.id)}
          className="delete"
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default EduInfo;
