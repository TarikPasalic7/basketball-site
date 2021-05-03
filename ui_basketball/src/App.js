import React,{Component} from 'react';
import {connect} from 'react-redux';
import TeamList from './TeamList';
import SearchBox from './SearchBox';
import Scroll from './Scroll';
import {setSearchField} from './Action';

const mapStateToProps= state => {
    return {
        searchfield: state.searchField 
    }
}

const mapDispatchToProps = (dispatch) => {
   return{
      onSearchChange:(event) => dispatch(setSearchField(event.target.value)) 
   } 
}

class App extends Component {
constructor(){
   super()
    this.state = {
      teams:[],
      
    }
}
  
/*onSearchChange = (event) =>{

    this.setState({searchfield: event.target.value})


}*/
async componentDidMount() {
    
    const url = "https://www.balldontlie.io/api/v1/teams";
    const response = await fetch(url);
    const data = await response.json();
    const d = data.data;
    this.setState({teams:d});
}
    render(){
        const {searchfield,onSearchChange} = this.props;
        const filteredTeams = this.state.teams.filter(teams=>{return teams.full_name.toLowerCase()
            .includes(searchfield.toLowerCase());
        });
        return(
            <div>
             <h1 className="cntr fantasy">NBA Teams</h1> 
             <SearchBox searchChange = {onSearchChange} />
             <Scroll> <TeamList teams = {filteredTeams} /></Scroll>
            
             
            
            </div>
           
           
           );
           
    }








}

export default connect(mapStateToProps,mapDispatchToProps)(App); //using connect to connect states