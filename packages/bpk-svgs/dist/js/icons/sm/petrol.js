function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

import React from "react";
export default ((_ref) => {
  let {
    styles = {}
  } = _ref,
      props = _objectWithoutProperties(_ref, ["styles"]);

  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" style={{
    width: "1.125rem",
    height: "1.125rem"
  }} {...props}><path d="M16.2 3.3c-.4-.4-1-.4-1.4-.1-.2.2-.3.5-.3.8 0 .2 0 .3.1.5v.1L16.5 8h1.6l.4.4V14c0 .6-.4 1-1 1s-1-.4-1-1v-3c0-1.7-1.3-3-3-3V5c0-1.1-.9-2-2-2h-6c-1.1 0-2 .9-2 2v16h10V10c.6 0 1 .4 1 1v3c0 1.7 1.3 3 3 3s3-1.3 3-3V7.6l-4.3-4.3zM11.5 11h-6V5h6v6z" /></svg>;
});