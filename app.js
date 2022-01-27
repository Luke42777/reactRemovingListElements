const Person = (props) => {
    return(
        <li>
        <span>{props.name}</span>
        <button onClick={() => props.delete(props.id)}>Delete</button>
        </li>
    )
}

class List extends React.Component{
    state = {
        climbers : [
            {
                id: 1,
                name: "Alex Honnold"
            },
            {
                id: 2,
                name: "Jerzy Kukuczka"
            },
            {
                id: 3,
                name: "Wojtek Kurtyka"
            },
            {
                id: 4,
                name: "Ueli Steck"
            },
    
        ]
    }
    
    handleDelete = id => {
        let climbers = [...this.state.climbers];
        climbers = climbers.filter(climber => climber.id !== id);
        this.setState({
            climbers,
        })
    }

    render(){
        const climbers =   this.state.climbers.map( climber =>  <Person key={climber.id} id={climber.id} name={climber.name} delete={this.handleDelete} />);
        return(
            <>
           {climbers}
            </>
        )
    }
    
    }
    
    ReactDOM.render(<React.StrictMode><List /></React.StrictMode>, document.getElementById("root"));