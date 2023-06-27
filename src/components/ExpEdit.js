import React from "react";

function ExpEdit({ expInfo, toggle, change }) {
  return (
    <div className="exp-info">
      <form>
        <input
          id="company"
          type="text"
          value={expInfo.company}
          placeholder="Company"
          onChange={(e) => change(e, "expInfos", expInfo.id)}
        />
        <input
          id="position"
          type="text"
          value={expInfo.position}
          placeholder="Position"
          onChange={(e) => change(e, "expInfos", expInfo.id)}
        />
        <textarea
          id="mainTask"
          type="text"
          value={expInfo.mainTask}
          rows={5}
          placeholder="Main Task"
          onChange={(e) => change(e, "expInfos", expInfo.id)}
        />
        <input
          id="dateFrom"
          type="date"
          value={expInfo.dateFrom}
          onChange={(e) => change(e, "expInfos", expInfo.id)}
        />
        <input
          id="dateTo"
          type="date"
          value={expInfo.dateTo}
          onChange={(e) => change(e, "expInfos", expInfo.id)}
        />
        <button type="button" onClick={toggle} className="save">
          Save
        </button>
      </form>
    </div>
  );
}

export default ExpEdit;
