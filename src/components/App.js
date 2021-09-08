// create your App component here
import React, { useEffect, useState } from 'react';

function App(){
const [image, setImage] = useState([]);
const [status, setStatus] = useState("pending");

    useEffect(()=> {
        fetch('https://dog.ceo/api/breeds/image/random')
        .then(resp => resp.json())
        .then(data => {
            setImage(data.message)
            setStatus("success");
        })
    }, []);

    if (status === "pending"){
        return <h1>Loading...</h1>;
    }

    return (
        <div style={{ padding: "16px" }}>
        <h1>Dog Pics</h1>
        <DogPics image={image} />
        </div>
    );
}
    function DogPics({image}){
        return (
            <div style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                gap:"16px",
            }}>
                <img
                key={image}
                style={{ width: "100%"}}
                src={image}
                alt="A Random Dog"/>
            ))

            </div>
        );
    }



export default App;