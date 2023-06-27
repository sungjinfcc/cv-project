import React from "react";

function EduEdit({ eduInfo, toggle, change }) {
  return (
    <div>
      <form>
        <input
          id="school"
          type="text"
          value={eduInfo.school}
          placeholder="School"
          onChange={(e) => change(e, "eduInfos", eduInfo.id)}
        />
        <input
          id="title"
          type="text"
          value={eduInfo.title}
          placeholder="Title"
          onChange={(e) => change(e, "eduInfos", eduInfo.id)}
        />
        <input
          id="dateFrom"
          type="date"
          value={eduInfo.dateFrom}
          onChange={(e) => change(e, "eduInfos", eduInfo.id)}
        />
        <input
          id="dateTo"
          type="date"
          value={eduInfo.dateTo}
          onChange={(e) => change(e, "eduInfos", eduInfo.id)}
        />
        <button type="button" onClick={toggle}>
          Save
        </button>
      </form>
    </div>
  );
}

export default EduEdit;
