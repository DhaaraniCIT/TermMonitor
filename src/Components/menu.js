import React from 'react';
import logo from '../metaLogo.png'
import '../App.css';

class Menu extends React.Component {
  render() {
    return (
        <div className="p-0">
            <div className="menuhead">
                <div className="logo">
                    <img src={logo} alt='TeamMonitor' width="50" height="50"/><span>Term<b>Monitor</b></span>
                </div>
                <div className="d-sm-block d-lg-none">
                    <div data-toggle="collapse" data-target="#nav">
                        <span className="material-icons">
                            menu
                        </span>
                    </div>
                </div>
            </div>
            <div className="navigation collapse" id="nav">
                <div className="rows">
                    <span className="material-icons">
                        home
                    </span>
                    <span>Add Keywords</span>
                 </div>
                <div className="rows">
                    <span className="material-icons">
                        group
                    </span>
                    <span>Matches</span> 
                </div>
                <div className="rows">
                    <span className="material-icons">
                        credit_card
                    </span>
                    <span>Manage Source</span>
                </div>
                <div className="rows">
                    <span className="material-icons">
                        credit_card
                    </span>
                    <span>Integration</span>
                </div>
                <div className="rows">
                    <span className="material-icons">
                        credit_card
                    </span>
                    <span>Alerts</span>
                </div>
                <div className="rows" id="drop" data-toggle="collapse" data-target="#demo">
                    <div id="row">
                        <span className="material-icons">star</span>
                        <span>Setting</span>
                    </div>
                    <span className="material-icons ">arrow_drop_down</span>
                </div>
                <div id="demo" className="collapse p-4 font-dark" >
                    Billing
                </div>
            </div>
            <div className="navigation d-lg-block d-none">
                <div className="rows">
                    <span className="material-icons">
                        home
                    </span>
                    <span>Add Keywords</span>
                </div>
                <div className="rows">
                    <span className="material-icons">
                        group
                    </span>
                    <span>Matches</span> 
                </div>
                <div className="rows">
                    <span className="material-icons">
                        credit_card
                    </span>
                    <span>Manage Source</span>
                </div>
                <div className="rows">
                    <span className="material-icons">
                        credit_card
                    </span>
                    <span>Integration</span>
                </div>
                <div className="rows">
                    <span className="material-icons">
                        credit_card
                    </span>
                    <span>Alerts</span>
                </div>
                <div className="rows" id="drop" data-toggle="collapse" data-target="#demo">
                    <div id="row">
                        <span className="material-icons">star</span>
                        <span>Setting</span>
                    </div>
                    <span className="material-icons ">arrow_drop_down</span>
                </div>
                <div id="demo" className="collapse p-4 font-dark" >
                    Billing
                </div>
            </div>
        </div>
    )
  }
}

export default Menu;