import React, { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import jquery from "jquery";
import * as tocbot from "tocbot";
import { toCanvas } from "qrcode";
import "tocbot/dist/tocbot.css";

function BlogBodyContainerContentLink() {
  let topRef = useRef();
  let qrcRef = useRef();
  let menuRef = useRef();
  let btnsRef = useRef();
  let messageRef = useRef();
  let { blogContentState } = useSelector((state) => state);
  useEffect(() => {
    let toMessege = jquery(messageRef.current);
    let b_btns = jquery(btnsRef.current);
    let toTop = jquery(topRef.current);
    let jwindow = jquery(window);
    let btns = b_btns.children();
    // 导航到留言部分
    toMessege.on("click", function () {
      window.scrollTo({
        top: document.body.offsetHeight - 200,
        behavior: "smooth",
      });
    });
    // 导航到页眉
    toTop.on("click", function () {
      window.scrollTo({
        top: 10,
        behavior: "smooth",
      });
    });
    // 滚动后显示
    jwindow.on("scroll", set);
    function set() {
      if (document.documentElement.scrollTop > 300) {
        b_btns.show(100);
      } else {
        b_btns.hide(100);
      }
    }
    b_btns.removeClass("b-btns-hide");
    b_btns.hide();

    // 目录按钮点击
    let menu = jquery(menuRef.current).prop("status", false);
    let menu_content = menu.next(".menu-content");
    menu.on("click", () => {
      reset(btn);
      menu.prop("status", !menu.prop("status"));
      show();
    });

    menu_content.removeClass("b-menu-hide");
    menu_content.hide();

    // 初始化二维码
    let btn = jquery(qrcRef.current).prop("status", false);
    let btn_img = btn.find("canvas");
    let a = document.createElement("a");
    a.href = "#";
    toCanvas(btn_img[0], a.href);
    // 二维码按钮点击
    btn.on("click", () => {
      reset(menu);
      btn.prop("status", !btn.prop("status"));
      show();
    });

    btn_img.removeClass("b-read-hide");
    btn_img.hide();

    function reset(...arr) {
      btns.removeClass("active");
      for (let item of arr) {
        item.prop("status", false);
      }
    }

    function show() {
      if (menu.prop("status")) {
        menu.addClass("active");
        menu_content.show(100);
      } else {
        menu_content.hide(100);
      }
      if (btn.prop("status")) {
        btn.addClass("active");
        btn_img.show(100);
      } else {
        btn_img.hide(100);
      }
    }

    // 取消监听
    return () => {
      toMessege.off("click");
      toTop.off("click");
      jwindow.off("click", set);
      menu.off("click");
      btn.off("click");
    };
  }, []);

  useEffect(() => {
    let re;
    if (blogContentState) {
      // 初始化目录
      tocbot.init({
        // Where to render the table of contents.
        tocSelector: ".js-toc",
        // Where to grab the headings to build the table of contents.
        contentSelector: ".blog-content",
        // Which headings to grab inside of the contentSelector element.
        headingSelector: "h1, h2, h3",
        // For headings inside relative or absolute positioned containers within content.
        hasInnerContainers: true,
      });
      re = tocbot.destroy.bind(tocbot);
    }
    return () => re && re();
  }, [blogContentState]);
  return (
    <div
      className="btn-group-vertical position-fixed b-nav-btns mr-2 mb-2 text-monospace b-btns-hide"
      role="group"
      ref={btnsRef}
    >
      <button type="button" className="btn btn-info shadow-none" ref={menuRef}>
        目录
      </button>
      <div className="menu-content position-absolute mb-2 p-2 b-menu-hide b-blog-menu overflow-hidden border rounded">
        <ol className="js-toc toc"></ol>
      </div>
      <button className="btn btn-info shadow-none" ref={messageRef}>
        留言
      </button>
      <button
        className="btn btn-secondary position-relative shadow-none"
        ref={qrcRef}
      >
        <i className="fas fa-mobile"></i>
        <canvas className="position-absolute b-read-on-mobile rounded b-read-hide"></canvas>
      </button>
      <button className="btn btn-secondary shadow-none" ref={topRef}>
        <i className="fas fa-arrow-up"></i>
      </button>
    </div>
  );
}

export default BlogBodyContainerContentLink;
