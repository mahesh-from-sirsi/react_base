const heading = React.createElement("h1", {
    id: "heading",
    category: "education",
    className: "mercury"
}, "Hello From React!!");
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
// suppose if we have to render something like below, how do we do using react:
// <div id="parent">
//        <div id="child">
//                <h1>I am h1 tag</h1>
//        </div>
// </div>
const divs = React.createElement("div", {
    id: "parent"
}, React.createElement("div", {
    id: "child"
}, React.createElement("h1", {}, "I am h1 tag")));
root.render(divs);

//# sourceMappingURL=episode-03.7c0ccee6.js.map
