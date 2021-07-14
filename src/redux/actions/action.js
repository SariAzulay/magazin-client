

function convertActionName(actionName) {
  return actionName.replace(/([A-Z])/g, "_$1").toUpperCase();
}

const actions = new Proxy(
  {},
  {
    get: function (target, props) {
      if (target[props] == undefined)
        return function (args) {
          return { type: convertActionName(props), payload: args };
        };
      else return target[props];
    },
  }
);

export default actions;
