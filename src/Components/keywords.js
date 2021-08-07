import React from 'react';
import '../App.css';

class Keywords extends React.Component {
    state = {
        loading: true,
        terms: []
    };
    
    async componentDidMount() {
        const url = "https://raw.githubusercontent.com/akshita151199/Termmonitor-APIs/main/dashboard";
        const response = await fetch(url);
        const data = await response.json();
        this.setState({ terms: data.data, loading: false });
    }
    
    render() {
        if (this.state.loading) {
            return (
                <div className="text-center mt-5">
                    <div className="spinner-border"></div>
                    <h5><b>Loading Data</b></h5>
                </div>
            );
        }
        if(!this.state.terms.length){
            return (
                <div className="text-center mt-5">
                    <div className="spinner-border"></div>
                    <h5><b>Could't load data,Refresh the page</b></h5>
                </div>
            );
        }
        return (
            <div className="Apps">
            <div className="headsection">
                <div className="subsection">
                <div id="header"><b>Add Another keyword</b></div>
                <div className="box ml-4 mr-4">1/3</div>
                <div><b>upgrade</b></div>
                </div>
                <div className="subsection float-right mr-2">
                <div><b>Advance search</b></div>
                </div>
            </div>
            <div className="searchsection">
                <div className="section">
                <div className="input-group">
                    <div className="input-group-prepend">
                    <span className="input-group-text">
                        <span className="material-icons">search</span>
                    </span>
                    </div>
                    <input type="text" className="form-control" placeholder="Enter your filters here"/>
                </div>
                <div>
                    <button className="btn text-uppercase">save filter</button>
                </div>
                </div>
            </div>
            <div className="tablesection pt-5">
                <div className="headsection">
                <div className="subsection">
                    <div id="header"><b>The terms you are tracking</b></div>
                </div>
                <div className="subsection float-right mr-2">
                    <div><b>The data will refresh every 5 min</b></div>
                </div>
                </div>
                <div className="shadow-sm bg-white card">
                <table className="table text-center">
                    <thead>
                        <tr>
                            <th>Keywords</th>
                            <th></th>
                            <th>Goal</th>
                            <th>Matches</th>
                            <th>Search Status</th>
                            <th>Delete keyword</th>
                        </tr>
                    </thead>
                    <tbody>
                    {this.state.terms.map(term => (
                        <tr key={term.id}>
                        <td>{term.keyword}</td>
                        <td><span className="material-icons">search</span></td>
                        <td>{term.goal}</td>
                        <td>{term.matches}</td>
                        <td>{term.search_status}</td>
                        <td><span className="material-icons">delete</span></td>
                        </tr>
                    ))}
                    </tbody>
                </table>
                </div>
                <div className="text-center mt-5">
                <button className="btn text-uppercase">view results</button>
                </div>
            </div>
            </div>
        )
    }
}
  
export default Keywords;