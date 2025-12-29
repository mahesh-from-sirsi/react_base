import React from "react";
import { createRoot } from "react-dom/client";

const heading = React.createElement(
        "h1", 
        {id: "heading", category:"education", className: "mercury"}, 
        "Hello From React - Using the packages!!");

const root = createRoot(document.getElementById("root"));
root.render(heading);