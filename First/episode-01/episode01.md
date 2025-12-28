# Learnings from Episode 01

1. In VCode use Emmet, i.e type `html:5` to generate the skeleton html code.

2. The base code to print/render some thing on screen using the Pain HTML look like below:

`
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Shraddha</title>
</head>
<body>
    <div id="root">
        <h1>Good Morning!!</h1>
    </div>
</body>
</html>
`

3. Following is the code same as above, but the screen rendering of the text is handled using JavaScript instead of the HTML:

`
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Shraddha</title>
</head>
<body>
    <div id="root"></div>
    <script>
        const heading = document.createElement("h1");
        //heading.innerHTML = "Good Morning From JavaScript";
        heading.textContent = "Good Morning From JavaScript using textContent"
        const rootdiv = document.getElementById("root");
        rootdiv.appendChild(heading)
    </script>
</body>
</html>
`

4. The following is to achieve the same using the React alone (Using CDN links)

`
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Shraddha</title>
</head>
<body>
    <div id="root"></div>
    <!-- React core -->
<script crossorigin src="https://unpkg.com/react@18/umd/react.development.js"></script>

<!-- React DOM -->
<script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
    <script>
        const heading = React.createElement("h1", {}, "Hello From React!!");
        const root = ReactDOM.createRoot(document.getElementById("root"));
        root.render(heading);
    </script>
    
</body>
</html>
`

5. The Following is same as the above, but now we will move the react code to the app.js file and then import/pull the React code into the index.html file using the script tag:

index.html
============
`
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Shraddha</title>
    <link rel="stylesheet" href="index.css">
</head>
<body>
    <div id="root"></div>
    <!-- React core -->
<script crossorigin src="https://unpkg.com/react@18/umd/react.development.js"></script>

<!-- React DOM -->
<script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
    <script src="app.js"></script>
    
    
</body>
</html>
`

`
app.js
=======
const heading = React.createElement(
        "h1", 
        {id: "heading", category:"education", className: "mercury"}, 
        "Hello From React!!");

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);


// suppose if we have to render something like below, how do we do using react:
// <div id="parent">
//        <div id="child">
//                <h1>I am h1 tag</h1>
//        </div>
// </div>

const divs = React.createElement("div", { id: "parent"}, 
             React.createElement("div", { id: "child"}, 
             React.createElement("h1", {}, "I am h1 tag")
        )
);

root.render(divs);
`



This also uses the index.css to add the colors and is linked as a stylesheet in the HTML file as: <link rel="stylesheet" href="index.css">

index.css
=========
`
#heading {
    color: red;
}
`


## Learnings
1. When creating the tags in HTML using the Javascript we use the following steps:
    a. create a tag of given type and set its textContent. We can use innerHTML as well, but textContent is safer choice:

    example:
    `const heading = document.createElement("h1");`
    `heading.textContent = "Good Morning From JavaScript using textContent"`

    b. Get the Element where we want to render the heading   
    `const rootdiv = document.getElementById("root");`
    `rootdiv.appendChild(heading)`

2. The only change when achieving the same using React is as follows:
    a. add the script tags to import/add react to the page (Use the React CDN links)
    b. use a script tag to create the React Element and React DOM to render that tag.

       Example:
       `const heading = React.createElement("h1", {}, "Hello From React!!");`

       The arguments to the createElement are:
        i). The Tag Type - h1 in this case for heading1
       
       ii). The 2nd argument is for properties or attributes for the tag. For example the 2nd argument can be: '''{ id: "child"}'''
       
       iii). The 3rd argument is what should be content of the tag. This can be a text in case of a heading tags, or another createReactElement if the tag has nested arrangement ====>> THIS IS IMPORTANT
       
       iv). The next step is to create the Root element to render the created element
        
            Example:
            `const root = ReactDOM.createRoot(document.getElementById("root"));`

        v). The last step is to render is the created element into the root element:

            Example:
            root.render(heading);
