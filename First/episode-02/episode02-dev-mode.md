```npm install -D parcel``` , in this command what is -D used for?
------------------------------------------------------------------

In the command: the -D flag means install as a development dependency. -D is a short form of: --save-dev
So the command is equivalent to: ```npm install --save-dev parcel```

What a development dependency is:
---------------------------------

A dev dependency is a package that is needed only during development, not when your app is running in production.
For React projects, tools like Parcel are used to:

- bundle code

- run a dev server

- optimize builds

They are not shipped to the browser.



Where does it get saved?
-------------------------
parcel is added under devDependencies in package.json:

{
  "devDependencies": {
    "parcel": "^2.12.0"
  }
}

Difference: dependencies vs devDependencies:
--------------------------------------------
Type	          Used when	        Example
dependencies	  Runtime (production)	react, react-dom
devDependencies	  Build / development	parcel, webpack, eslint


When NOT to use -D?
-------------------
Do not use -D for libraries that run in the browser:

npm install react react-dom   # no -D


These are required at runtime.

-D installs a package as a development dependency, meaning it’s required only during development and build time, not in the production runtime.
