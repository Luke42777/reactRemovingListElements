const Person = (props) => {

return(
    <li>
        <span>{props.name}</span>
        <button onClick={props.delete}>Delete</button>
    </li>
)


}

class List extends React.Component{
    state = {
        climbers : [

            {
            id:1,
            name:"Kurtyka, Wojciech(Voytek)"
            },
            {
            id:2, 
            name:"Kukuczka, Jerzy(Jurek)"
            },
        ]
    }

handleDelete = (id) => {
    
    let climbers = [...this.state.climbers];
    climbers = climbers.filter(climber => climber.id !== id);
    this.setState({
        climbers,
    })

}

    render(){
        const climbers = this.state.climbers.map(climber => <Person id={climber.id} key={climber.id}  name={climber.name} delete={this.handleDelete.bind(this,climber.id)}/>)
        return(
            <>
            {climbers}
            </>
        )
    }
}


ReactDOM.render(<List />,document.getElementById("root"))