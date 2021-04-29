import React from 'react';
import TeamCard from './TeamCard';


const TeamList = ({teams}) =>{

return(
<div>
{
 teams.map((team,i)=>{

return(
 <TeamCard 
 
 key = {i}
 id = {teams[i].id}
 full_name = {teams[i].full_name}
 conference= {teams[i].conference}
 
 
 
 
 
 
 />



);




 })




}



</div>



);




}
export default TeamList;

/* export default class TeamList extends React.Component{
  
  const teamComponent = teams.then(t => t.map((tm,i)=>{
    return (
        <TeamCard
        key = {i}
        id = {teams[i].id}
        full_name = {teams[i].full_name}
        conference= {teams[i].conference} />
        );

 }));


state = {
    loading: true,
    team:null
  };
async componentDidMount() {
   // const res = await axios('https://www.balldontlie.io/api/v1/teams'); geting api using axios
    const url = "https://www.balldontlie.io/api/v1/teams";
    const response = await fetch(url);
    const data = await response.json();
    const d = data.data;
    
  
   const teamComponent = d.map((tm,i) =>{


        return (
        <TeamCard
        key = {i}
        id = {d[i].id}
        full_name = {d[i].full_name}
        conference= {d[i].conference} />
    
    );
   

})

this.setState({team:teamComponent,loading:false});
    }
   
render (){

    return (<div>
      
    <div className="bg">{this.state.team }</div> 
    
      </div>
   
    );
   }

}
*/






