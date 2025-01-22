import React from "react";

function Task9() {

    const name= [
        {
            name:"students1",
          
        },
        {
            name:"students2",
           
        },


        {
            name:"students3",
          
        },




        {
            name:"students4",
           
        },

        

    ];

    return(
        <div>
            <h1> list name</h1>
            <ul>
                {name.map((name,index) => (
                    <li key= {index}> {name.name}</li>
                )
                )}
            </ul>
        </div>
    )
}
export default Task9;