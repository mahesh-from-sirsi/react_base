Difference between npm and npx:
npm is used to install and manage packages, while npx is used to execute packages. When running npx parcel index.html, npx locates or temporarily installs Parcel and runs it to bundle and serve the React application using index.html as the entry point.

npm (Node Package Manager):
----------------------------------
Used to install and manage packages. NPM Stores packages in node_modules and Updates package.json / package-lock.json

Example:
--------
npm install parcel
npm install react


Think of npm as “get and manage tools”.


npx (Node Package eXecute):
---------------------------------
Used to run a package. It can run packages without installing them globally

Uses:
-----
local node_modules/.bin  or downloads a temporary copy

Example:
--------------------
npx parcel index.html


Think of npx as “run the tool”.


What happens when you run npx parcel index.html?
================================================
Step by step:

- npx checks local node_modules/.bin
  If parcel exists → uses it
  If not found locally

- Downloads parcel temporarily

- Does NOT add it to package.json

- Runs Parcel

- parcel index.html


Parcel:
- Treats index.html as the entry point
- Builds dependency graph
- Starts a dev server
- Bundles JS, CSS, assets
- Serves app on a local URL (e.g. http://localhost:1234)
- Temporary package is cleaned up after execution
