import React,{Component} from 'react';
import TeamList from './TeamList';
import SearchBox from './SearchBox';
import Scroll from './Scroll';



class App extends Component {
constructor(){
   super()
    this.state = {
      teams:[],
      searchfield:''
    }
}
  
onSearchChange = (event) =>{
    this.setState({searchfield: event.target.value})


}
async componentDidMount() {
    const url = "https://www.balldontlie.io/api/v1/teams";
    const response = await fetch(url);
    const data = await response.json();
    const d = data.data;
    this.setState({teams:d});
}
    render(){
        const filteredTeams = this.state.teams.filter(teams=>{return teams.full_name.toLowerCase()
            .includes(this.state.searchfield.toLowerCase());
        });
        return(
            <div>
             <h1 className="cntr fantasy">NBA Teams</h1> 
             <SearchBox searchChange = {this.onSearchChange} />
             <Scroll> <TeamList teams = {filteredTeams} /></Scroll>
            
             
            
            </div>
           
           
           );
           
    }








}

export default App;