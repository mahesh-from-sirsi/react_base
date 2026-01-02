import React from "react";
import {createRoot} from "react-dom/client";

// const jsxhandle = (<h1 className="myClass" tabIndex="5">Namaste React Using JSX+PARCEL+BABEL</h1>);
// const jsxhandle_multiline = (<h1 className="myClass2" tabIndex="5">
//     Namaste React Using JSX Multiline
// </h1>)

const root = createRoot(document.getElementById("root"));
//root.render(jsxhandle_multiline);

const reactElement0 = <p>This is react element for paragraph, I am embedding this in another reactElement</p>

const reactElement = (
    <h2>{reactElement0} = This is a react Element and this is getting embedded in the React Functional Component</h2>
    
);

// Functional Components
const Title = () => (
    <h1 className="Welcome" tabIndex="5">
        Welcome message from the Title component
    </h1>
);

const PageMessage = () => (
    <div id="container">
        <Title />
        {reactElement}
        {console.log("===============")}
    
        <h1 className="wishes" tabIndex="5">This is the PageMessage Component and embeds message from the Title Component</h1>
    </div>
);

root.render(<PageMessage/>)