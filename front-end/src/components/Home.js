import React, {Component} from 'react';
import axios from 'axios';

class Home extends Component {

    async componentDidMount(){
        //if we don't know who the user is, ASK THEM!
        if(!this.props.name){
            const form = 
            <form onSubmit={this.submitSetup}>
                    {/* bootstrap box */}
                    <div className="form-group">
                        <label htmlFor="name">What is your name?</label>
                        <input type="text" value={this.state.name} onChange={this.changeName} className="form-control" id="name"/>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                    
                </form>
        }
        const getDudesUrl =`${window.apiUrl}/get-dudes`
        const dudeInfo = await axios.get(getDudesUrl);
        console.log(dudeInfo)
    }
    render(){
        return (
            <div className="col col-sm-12">
                <div className="total-budget">
                    Total Budget: $11,000
                </div>
                <div className="total-spent">
                    Total Spent: $550
                </div>
            </div>
        )
    }
}

export default Home;