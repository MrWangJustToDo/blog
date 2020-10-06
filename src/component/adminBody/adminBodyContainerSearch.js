import React from "react";

function AdminBodyContainerContent() {
  return (
    <div className="mt-5">
      <div className="container">
        <div className="mx-4">
          <div className="card mb-5">
            <form className="form-inline p-3" method="POST" action="#">
              <input
                type="text"
                className="form-control m-2"
                placeholder="标题"
                name="title"
              />
              <select className="form-control m-2 mr-md-5" name="type" id="">
                <optgroup label="请选择分类">
                  <option value="" selected disabled hidden>
                    类型
                  </option>
                  <option value="blog">blog</option>
                  <option value="lorem">lorem</option>
                  <option value="text">text</option>
                </optgroup>
              </select>
              <div className="form-check m-2">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="inlineFormCheck"
                />
                <label className="form-check-label" for="inlineFormCheck">
                  推荐
                </label>
              </div>
              <button type="submit" className="btn btn-primary m-2">
                搜索
              </button>
            </form>
          </div>
          <table className="table table-bordered">
            <thead>
              <tr>
                <th>标题</th>
                <th>类型</th>
                <th>更新时间</th>
                <th>操作</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>学习方法</td>
                <td>text</td>
                <td>2020-11-18 20:30:23</td>
                <td>
                  <a
                    href="#"
                    className="btn btn-sm btn-primary py-0 text-white"
                  >
                    <span className="small">修改</span>
                  </a>
                  <a href="#" className="btn btn-sm btn-danger py-0 text-white">
                    <span className="small">删除</span>
                  </a>
                </td>
              </tr>
              <tr>
                <td>学习方法</td>
                <td>text</td>
                <td>2020-11-18 20:30:23</td>
                <td>
                  <a
                    href="#"
                    className="btn btn-sm btn-primary py-0 text-white"
                  >
                    <span className="small">修改</span>
                  </a>
                  <a href="#" className="btn btn-sm btn-danger py-0 text-white">
                    <span className="small">删除</span>
                  </a>
                </td>
              </tr>
              <tr>
                <td>学习方法</td>
                <td>text</td>
                <td>2020-11-18 20:30:23</td>
                <td>
                  <a
                    href="#"
                    className="btn btn-sm btn-primary py-0 text-white"
                  >
                    <span className="small">修改</span>
                  </a>
                  <a href="#" className="btn btn-sm btn-danger py-0 text-white">
                    <span className="small">删除</span>
                  </a>
                </td>
              </tr>
              <tr>
                <td>学习方法</td>
                <td>text</td>
                <td>2020-11-18 20:30:23</td>
                <td>
                  <a
                    href="#"
                    className="btn btn-sm btn-primary py-0 text-white"
                  >
                    <span className="small">修改</span>
                  </a>
                  <a href="#" className="btn btn-sm btn-danger py-0 text-white">
                    <span className="small">删除</span>
                  </a>
                </td>
              </tr>
            </tbody>
            <tfoot>
              <tr>
                <td colspan="4" className="px-5">
                  <div className="d-flex justify-content-between px-4">
                    <a
                      href="#"
                      className="btn btn-outline-info shadow-none disabled btn-sm"
                    >
                      上一页
                    </a>
                    <a
                      href="#"
                      className="btn btn-outline-info shadow-none btn-sm"
                    >
                      下一页
                    </a>
                  </div>
                </td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    </div>
  );
}
export default AdminBodyContainerContent;
