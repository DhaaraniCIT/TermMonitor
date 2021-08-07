import React from 'react';

class TopBar extends React.Component {
  render() {
    return (
        <div className="topbar">
            <div className="float-left">
              <h2 className="mb-0 text-uppercase font-weight-normal">Keywords</h2>
            </div>
            <div className="search float-left">
              <div className="input-group">
                <input type="text" className="form-control"/>
                <div className="input-group-append">
                  <button className="btn btn-light" type="submit">
                    <span className="mr-2 submit">SUBMIT</span> <span className="material-icons">east</span>
                  </button>
                </div>
              </div>
              <div className="ml-3 avather">
                <img src="https://ui-avatars.com/api/?name=A&rounded=true&background=ffffff&bold=true"
                className="rounded-circle avatar" height="37" weight="37" alt="hhh"/>
              </div>
            </div>
        </div>
    )
  }
}

export default TopBar;
