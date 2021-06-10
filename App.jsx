import React from "react";
import Sdata from "./Sdata.jsx";
import Card from "./Card.jsx";


const App = () => (
    <>
        <h1 className="net">List of Top 5 Netflix Series</h1>

        {Sdata.map((val) => {
            return (
                <Card
                    key={val.id}
                    imgsrc={val.imgsrc}
                    title={val.title}
                    sname={val.sname}
                    link={val.link}
                />

            );
        })}

    </>
)

export default App;