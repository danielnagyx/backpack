import React from "react";
export default class SVG extends React.Component {
  render() {
    return <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" {...this.props}><path d="M8 1.1C6.6 1.4 5.5 2.6 5.1 4c-.4 1.9.4 3.6 1.9 4.4V10c0 .5.5 1 1 1 .3 0 .5.2.5.5s-.2.5-.5.5h-.5c-.3 0-.5.2-.5.5s.2.5.5.5H8c.3 0 .5.2.5.5s-.2.5-.5.5h-.5c-.3 0-.5.2-.5.5s.2.5.5.5H8c.3 0 .5.2.5.5s-.2.5-.5.5h-.5c-.3 0-.5.2-.5.5s.2.5.5.5h1.1c.3-.1.6-.2.8-.4l.7-.7c.5-.5.8-1.3.8-2V8.4c1.2-.7 2-2 2-3.4C13 2.5 10.7.5 8 1.1zM9 5c-.6 0-1-.4-1-1s.4-1 1-1 1 .4 1 1-.4 1-1 1z" /></svg>;
  }

}