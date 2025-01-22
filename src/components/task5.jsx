// import React from "react";

// function Names() {

//     const name= [
//         {
//             name:"mohmad",
//             age:23,
//         },
//         {
//             name:"ahmad",
//             age:28,
//         },


//         {
//             name:"yaqoot",
//             age:26,
//         },




//         {
//             name:"saba",
//             age:25,
//         },

//         {
//             name:"enas",
//             age:28,
//         },


//     ];

//     return(
//         <div>
//             <h1> list name</h1>
//             <ul>
//                 {name.map((name,index) => (
//                     <li key= {index}> {name.name}- {name.age}year old</li>
//                 )
//                 )}
//             </ul>
//         </div>
//     )
// }
// export default Names;
import React from "react";

function Task4() {
   const orange = { color: "green",fontweight:"normal" };
   const coding = { color: "orange" };
   const Academy = { color: "red",fontweight:"lighter",fontStyle:"italic" };
    return( 
      <div>
 
       <span style={orange} > Orange</span>

       <span style={coding} ><b>Coding</b> </span>

       <span style={Academy} > Academy</span>

       </div>
    );
    }

  export default Task4;