import React, { useState } from "react";
const RemoteButton = React.lazy(() => import("Components/Button"));
import { Suspense } from "react";
const App = ()=>{
    const [isLoadButton, setIsLoadButton] = useState(false);
    return (<div onClick={()=> setIsLoadButton(!isLoadButton)}>
     {isLoadButton ?<Suspense fallback={<h2>Loading...</h2>}> <RemoteButton/> </Suspense> : <a>Click here to ShowButton</a> }
    </div>)
}
export default App