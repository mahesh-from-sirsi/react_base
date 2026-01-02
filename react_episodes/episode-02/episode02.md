## JSX (Javascript XML)
-----------------------

JSX (JavaScript XML) is a syntax extension to JavaScript used in React to describe what the UI should look like using a syntax that resembles HTML.

What JSX is (in one line):  
------------------------------------------------------------------------
JSX lets you write UI structure using HTML-like syntax directly inside JavaScript.

Why JSX exists (the problem it solves):   
------------------------------------------------------------------------
Without JSX, you must use React.createElement, which is verbose and hard to read. JSX provides a declarative and readable way to define UI components.


Simple JSX Example
------------------------------------------------------------------------
const element = <h1>Hello, World!</h1>;


This looks like HTML, but it is not HTML. It is JSX. Behind the scenes, this is converted by tools like Babel into:
==>> React.createElement("h1", null, "Hello, World!")


Using JavaScript inside JSX: JSX allows JavaScript expressions using {}.
------------------------------------------------------------------------
const name = "Mahesh";
const element = <h1>Hello, {name}</h1>;


Only expressions are allowed (not statements like if, for).

JSX inside a React Component:
------------------------------------------------------------------------

function Greeting() {
  return (
    <div>
      <h1>Good Morning</h1>
      <p>Welcome to React</p>
    </div>
  );
}


This function returns JSX, which React converts into DOM elements.

Core Uses of JSX
------------------------------------------------------------------------
JSX is used to define UI structure, dynamic content, and component composition.

1.) UI Declaration
    You describe what the UI should look like, not how to manipulate the DOM.

2.) Dynamic Rendering
    Embed variables, function calls, and expressions directly in the UI.

    <p>{user.isLoggedIn ? "Welcome" : "Please login"}</p>


3.) Component Composition
    Combine components like HTML tags.

    <Header />
    <Footer />


4. Safer Rendering
   JSX automatically escapes values, protecting against XSS by default.

JSX Rules You Must Know
------------------------------------------------------------------------
1. Must return a single parent element

2. Use className instead of class

3. Use camelCase for attributes (onClick, tabIndex)

4. JSX is compiled, browsers do not understand it directly


One-line Summary:
------------------------------------------------------------------------
JSX is a syntax extension that allows React developers to write declarative, HTML-like UI code inside JavaScript, which is compiled into React.createElement calls for efficient rendering.
