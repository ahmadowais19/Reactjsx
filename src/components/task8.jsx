
// import React from "react";

// class Task8 extends React.Component {
//   render() {
//     const { isSuccess} = Task8.props;
//     return (
//       <div>
//         {isSuccess?
//        ( <h2>true</h2>):
//         (<h2>false</h2>)
//     }
//       </div>
//     );
//   }
// }

// export default Task8;


import React from "react";
class Task8 extends React.Component{
    render(){
        const{isSuccess}=this.props;
        return(
            <div>
                {isSuccess ?(
                   <b> <h1>Success!</h1></b>

                ):(
                    <h1>Error</h1>
                ) }
            </div>
        );
    }
}
export default function App(){
    const isSuccess=true;
    return <Task8 isSuccess={isSuccess}/>
}