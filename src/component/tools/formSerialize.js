export default (form) => {
  let inputs = Array.from(form.elements);
  let re = {};
  let arr = ["button", "file", "reset", "submit"];
  inputs.forEach((it) => {
    if (it.name && it.type) {
      if (!arr.includes(it.type)) {
        if (it.type === "radio") {
          if (it.checked) {
            re[it.name] = it.value;
          }
        } else if (it.type === "checkbox") {
          if (it.checked) {
            if (it.name in re) {
              re[it.name].push(it.value);
            } else {
              re[it.name] = [it.value];
            }
          }
        } else if (it.tagName === "SELECT") {
          let [item] = it.selectedOptions;
          if (!item.disabled) {
            re[it.name] = item.value;
          }
        } else if (it.multiple) {
          Array.from(it.selectedOptions).forEach((item) => {
            if (!item.disabled) {
              if (it.name in re) {
                re[it.name].push(item.value);
              } else {
                re[it.name] = [item.value];
              }
            }
          });
        } else {
          if (!it.disabled) {
            re[it.name] = it.value;
          }
        }
      }
    }
  });
  return re;
};
