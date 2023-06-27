import React from "react";

function GenInfoEdit({ genInfo, toggle, change }) {
  return (
    <div className="gen-info">
      <form>
        <input
          id="name"
          type="text"
          value={genInfo.name}
          placeholder="Name"
          onChange={(e) => change(e, "genInfo")}
        />
        <input
          id="email"
          type="email"
          value={genInfo.email}
          placeholder="Email"
          onChange={(e) => change(e, "genInfo")}
        />
        <input
          id="phoneNumber"
          type="text"
          value={genInfo.phoneNumber}
          placeholder="Phone Number"
          onChange={(e) => change(e, "genInfo")}
        />
        <textarea
          id="detail"
          type="text"
          value={genInfo.detail}
          rows={5}
          placeholder="Detail"
          onChange={(e) => change(e, "genInfo")}
        />
        <button type="button" onClick={toggle} className="save">
          Save
        </button>
      </form>
    </div>
  );
}

export default GenInfoEdit;
