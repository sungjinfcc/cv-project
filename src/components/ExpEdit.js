import React from "react";

function ExpEdit({ expInfo, toggle, change }) {
  return (
    <div>
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
        <input
          id="mainTask"
          type="text"
          value={expInfo.mainTask}
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
        <button type="button" onClick={toggle}>
          Save
        </button>
      </form>
    </div>
  );
}

export default ExpEdit;
