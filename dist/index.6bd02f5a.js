/*
<div id="parent">
<div if="child">
<h1>i am an h1 tag</h1>
</div>
</div>

*/ // React.createElement(object)=>HTML(Browser understanding)
const parent = React.createElement("div", {
    id: "parent"
}, React.createElement("div", {
    id: "child"
}, [
    React.createElement("h1", {}, "i am an h1 tag"),
    React.createElement("h2", {}, "i am an h2 tag")
]));
const heading = React.createElement("h1", {
    "id": "heading"
}, "Hello World from React!");
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);

//# sourceMappingURL=index.6bd02f5a.js.map
