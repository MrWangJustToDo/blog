import React, { Suspense, lazy } from "react";

// 动态按序加载组件
export const AsyncComponent = (importFunc) => {
  const Component = lazy(importFunc);

  return (props) => (
    <Suspense
      fallback={
        <div className="card bg-transparent border-0">
          <div className="my-lg-4 text-center">
            <div className="spinner-border text-info" role="status">
              <span className="sr-only">Loading...</span>
            </div>
          </div>
        </div>
      }
    >
      <Component {...props} />
    </Suspense>
  );
};
