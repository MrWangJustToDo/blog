import React from "react";
import github from "../../image/github.ico";
import leetcode from "../../image/leetcode.ico";

function AboutBodyContainerLink() {
  return (
    <li className="list-group-item">
      <a
        className="text-secondary mx-2"
        href="https://github.com/MrWangJustToDo/"
      >
        <img
          className="border rounded-circle"
          src={github}
          height="28"
          alt="图标"
        />
      </a>
      <a
        className="text-secondary mx-2"
        href="https://leetcode.com/mrwang-justtodo/"
      >
        <img
          className="border rounded-circle"
          src={leetcode}
          height="28"
          alt="图标"
        />
      </a>
    </li>
  );
}

export default AboutBodyContainerLink;
