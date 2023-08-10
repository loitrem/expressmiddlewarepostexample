import React from 'react'
function Show(props) {
  
    const fruit = props.fruit
        return (
        <div>
        <h1> Show Page </h1>
            The {fruit.name} is {fruit.color}
            {fruit.readyToEat? 'Its is ready to eat' : 'It is not ready to eat... Cant touch this' }
        </div>
        );
        
    }
    export default Show;