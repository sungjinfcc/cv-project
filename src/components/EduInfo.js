import React from "react";

function EduInfo({ eduInfo, toggle, onDelete }) {
  return (
    <div id={eduInfo.id}>
      <div>{eduInfo.school}</div>
      <div>{eduInfo.title}</div>
      <div>{eduInfo.dateFrom}</div>
      <div>{eduInfo.dateTo}</div>
      <button type="button" onClick={toggle}>
        Edit
      </button>
      <button type="button" onClick={() => onDelete("eduInfos", eduInfo.id)}>
        Delete
      </button>
    </div>
  );
}

export default EduInfo;
