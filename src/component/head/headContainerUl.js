import React from "react";
import { useSelector } from "react-redux";
import HeadContainerLi from "./headContainerLi";

function HeadContainerUl() {
  let {
    headComponentContentArr,
    headComponentIconArr,
    headComponentLinkArr,
  } = useSelector((state) => state);
  return (
    <ul className="navbar-nav mr-auto">
      {headComponentContentArr.map((it, index) => {
        return (
          <HeadContainerLi
            key={index}
            id={index}
            content={it}
            to={headComponentLinkArr[index]}
            className={headComponentIconArr[index]}
          />
        );
      })}
    </ul>
  );
}

export default HeadContainerUl;
