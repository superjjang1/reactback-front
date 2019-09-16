import React, {Component} from 'react';
import axios from 'axios';

class Home extends Component {
    //normally uses constructor, but in react 16 if you're just going to define state, you don't need to define 
    // anything in the constructor.
    state = {
        submitName: false
    }
    async componentDidMount(){
        
        
    }
    getDude = async () =>{
        const getDudesUrl =`${window.apiUrl}/get-dudes`
        const dudeInfo = await axios.post(getDudesUrl,
            {name:this.props.name});
        console.log(dudeInfo)
        this.props.setDudeInfo(dudeInfo.data)
    }
    submitNameHandler=(e)=>{
        e.preventDefault(); //prevents it from going forward
        this.setState({
            submitName: true
        },this.getDude)
    }
    render(){
        
        //if we don't know who the user is, we ask them.
        if(!this.state.submitName){
            const form = 
            <form onSubmit={this.submitNameHandler}>
                    {/* bootstrap box */}
                    <div className="form-group">
                        <label htmlFor="name">What is your name?</label>
                        <input type="text" value={this.props.name} onChange={this.props.changeName} className="form-control" id="name"/>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                    
                </form>
            return (
                form
            )
        }
        return (
            <div className="col col-sm-12">
                
                <div className="total-budget">
                    Total Budget: $ hello from the otherside.
                </div>
                <div className="total-spent">
                    Total Spent: $550
                </div>
            </div>
        )
    }
}

export default Home;