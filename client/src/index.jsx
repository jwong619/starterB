import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {

  render() {
    return (
      <div>
        <h1> App </h1>
          <div className="container">
          </div>
      </div>

      );
  }
}


ReactDOM.render(<App />,
  document.getElementById("app"));