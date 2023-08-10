import React from 'react'

function Index(props) {
    const fruits = props.fruit;
    console.log(fruits);
    return (
    <div>
        
        <nav>
            <h1><a href="/fruits/new">Create a New Fruit</a></h1>
        </nav>

        <h1>Index Page</h1>
        <p><a href="/fruits">fruits</a></p>
        <p><a href="/fruits/0">Item 1</a></p>
        <p><a href="/fruits/1">Item 2</a></p>
        <p><a href="/fruits/2">Item 3</a></p>

        {fruits.map((fruit, i) => {
            return (
                <div>
                    <li>
                        The{' '}
                        <a href={`/fruits/${i}`}>
                            {fruit.name}
                        </a>{' '}
                        is {fruit.color} <br></br>
                        {fruit.readyToEat
                            ? `It is ready to eat`
                            : `It is not ready to eat`}
                        <br />
                    </li>
                </div>
            );
        })}

    </div>
  )
}

export default Index

