# LESSON 21
# Basics of Form Handling
We want React to control the `form` elements, such `form` elements whose value is ***controlled*** by React is called a **Controlled Component**.

We deal with values that change within a component with `state` and `setState`, so in a **controlled component** the value of an input field is set to the `state` property.

**See `Form.js`**

# LESSON 22
# Component Lifecycle Methods
When we create a React Component, the component goes through several stages in its lifecycle. React provides us with build in methods that we can overwrite at particual stages in the lifecycle.

**Lifecycle method available for a class component:**

You can clasify the methods into 4 phases.
1. Mounting
2. Updating
3. Unmounting
4. Error Handling

The **mounting** lifecycle methods are called when an instance of a component is being created and inserted into the DOM.

The **updating** lifecycle methods are called when a component is being re-rendered as a result of changes to either its props or state.

The **unmounting** lifecycle methods is called when a component is being removed from the DOM.

The **error handling** methods are called when there is an error during rendering, in a lifecycle method, or in the constructor of any child component.

During the **mounting** phase you have 4 methods, ***constructor***, ***static getDerivedStateFromProps***, ***render*** and ***componentDidMount***.

During the **updating** phase you have 5 methods, ***static getDerivedStateFromProps***, ***shouldComponentUpdate***, ***render***, ***getSnapshotBeforeUpdate*** and ***componentDidUpdate***.

During the **unmounting** phase you have 1 method, ***componentWillUnmount***.

For **error handling** phase you have 2 methods, ***static getDerivedStateFromError*** and ***componentDidCatch***.

Knowing **when** to use **each** lifecycle method is crucial to properly understanding how to work with React.

**Obs!** These methods do **not** exist on a **functional component**.

# LESSON 23
# Component Mounting Lifecycle Methods
Order of their invocation:
1. Constructor(props)

A special function that will get called whenever a new component is created. The constructor is used to initialize the `state` or binding the event handlers to the class instance. In a constructor do **not** cause side effects, for example http requests (ajax calls), **never** do that. In your constructor you have to keep 2 important points to keep in mind when it comes to defining your own constructor. 

The **1st** point is that you have to call a special function called `super(props)`, this will call the base class constructor. In the component you have access to `this.props` only after you have initially called `super(props)` and passing the `props` as an argument. The **2nd** point is that constructor is also the only place where you are expected to change or set the `state` by directly overwriting `this.state` fields, in all other scenarios you **have** to use `this.setState`.

2. static getDerivedStateFromProps(props, state)

Is in the React docs classified as a rarly used method, this method is basically used when the state of the component depends on changes in props over time. Let's say you have a component with the initial state of the component depend on the props being passed to the component, in such a scenario you can use this method to set the state.

Since this method is a `static` method it does not have access to the `this` keyword, so you can not call `this.setState` within this particular method. Instead you have to return an object that represents the new state of the component. Do not cause side effects, as stated above in the constructor part too.

3. render()

The `render()` method is the only required method in a class component, in the `render()` you simply read `this.props` and `this.state` and return the jsx which describes the UI. The `render()` is a pure function, for the given props and state, it should always render the same UI. What you should **not** do here is change the state or interact with DOM or make ajax calls.

Since it is the render method jsx, which also contains the other children components, right after the parent render method the children components lifecycle methods are also executed.

4. componentDidMount()

This method will be called **only** once in the whole lifecycle of a given component and it is invoked immediately after a component and all its children components have been rendered to the DOM.

This method is the **perfect** place to cause side effects, for example interacting with the DOM or perform any ajax calls to load data. So `componentDidMount()` is a good place to perform initialization that requires DOM nodes and also load data by making network requests.

**See `LifecycleA.js`** and **`LifecycleB.js`**.

# LESSON 24
# Component Updating Lifecycle Methods
Methods are called when a component is being re-rendered because of changes to props/state.

There are a total of 5 methods, and out of the 5, 3 fall into the category of ***rarely*** used methods.

Methods:
1. `static getDerivedStateFromProps(props, state)`

This method is called every time a component is re-rendered, and it is used to set the state. In this method you should not cause side effects, for example HTTP requests. This method is one of the rarely used methods in the updating phase.

2. `shouldComponentUpdate(nextProps, nextState)`

This method receives the updated props/state and the purpose of this method is clear from its name. It dictates if the component should re-render or not. By default all **class** components will re-render whenever the props they receive or their state changes. This method **can** prevent that default behaviour by returning `false`.

You can use this method to compare the existing props/state values with the ***next*** props/state values and return `true` or `false` to let React know whether teh component should update or not.

This method is basically for performance optimization. You should avoid causing side effects (http requests) or calling the `setState` method. This method is also classified as a rarely used lifecycle method in the official React documentation.

3. `render()`

Here you read `this.props` and `this.state` and return the jsx which describes the UI.

Avoid changing the state or interacting with the DOM in this method.

4. `getSnapshotBeforeUpdate(prevProps, prevState)`

This method accepts previous props/state as its parameters and is called right before the changes from the virtual DOM are to be reflected in the DOM. This method is also classified as a rarely used lifecycle method in the official React documentation.

You will use this method to capture some information from the DOM, for example you can read the users scrolled position and after the update maintain that scrolled position by performing some calculations.

This method will either return `null` or a value. The returned value will be passe as the 3rd parameter to the next method.

5. `componentDidUpdate(prevProps, prevState, snapshot)`

This method will be called after the render is finished in the re-render cycles. This means that you can be sure the component and all its sub-components have properly rendered itself after the update. This method accepts 3 paramters, `prevProps`, `prevState` and the `snapshot` value returned from `getSnapshotBeforeUpdate(prevProps, prevState)` method.

This method is guaranteed to be called only **once** in each re-render cycle, so what you **can** do with this is causing side effects (ajax calls). But before making `ajax` calls you need to compare the previous props with the new props and then decide whether to make the `ajax` calls or not. If you are **not** comparing you are making unwanted requests which is not really a good idea.

**All in all** the `render()` and `componentDidUpdate()` are the more commonly used methods during the update lifecycle. The remaining 3 methods exist for special cases and should be used sparringly (with care). If you do decide to use the remaining 3, make sure you know what you are doing.

**See `LifecycleA.js`** and **`LifecycleB.js`**.

# Unmounting Phase Method
The unmounting phase has just one method:

- `componentWillUnmount()`

This method is invoked immediately before a component is unmounted and destroyed. In this method you can perform some clean up tasks like cancelling any network requests, removing event handlers, cancelling any subscriptions and also invalidating timers from `setTimeout` or `setinterval`. Do **not** call the `setState` method in this method, and that is simply because the component is never re-rendered after it has been unmounted.

# Error Handling Phase Methods
This phase has 2 methods: 

1. `static getDerivedStateFromError(error)`
2. `componentDidCatch(error, info)`

These 2 methods are called when there is an error either during rendering, in a lifecycle method, or in the constructor of any child component.

# LESSON 25
# Fragments
Fragments basically lets you group a list of children elements without adding extra nodes to the DOM.

You can replace the `<div>` tags with `<React.Fragment>`.

Fragments can accept the `key` attribute when rendering lists of items.

**See `Table.js` and `Columns.js`.**

Read more [here](https://reactjs.org/docs/fragments.html) about Fragments.

# LESSON 26
# Pure Components
There is a 2nd way to create a **class** component, and that is by ***extending*** the **`PureComponent`** class from React.

The difference between a **regular component** and a **pure component**:

**Regular Component**:
- A regular component does not implement the `shouldComponentUpdate` method. It always returns `true` by default.

**Pure Component**:
- A pure component on the other hand implements `shouldComponentUpdate` with a shallow props and state comparison.

- It does a **shallow comparison (sc)** of `prevState` with `currentState` and a **sc** of `prevProps` with `currentProps`. And **only** when the **sc** indicates a difference the component will re-render.

# Shallow Props and State Comparison
We can study shallow comparison (**sc**) with respect to **primitive types** and **complex types**.

For 2 **primitive types** like ***A*** and ***B***, like numbers, strings and boolean, **A** (**sc**) **B** returns true if **A** and **B** have the same value and are of the same type. 

**Ex**:

If both **A** and **B** are string `Malik` (sc) string `Malik`, the shallow comparison returns true.

For **complex types** **A** (**sc**) **B** returns true if **A** and **B** reference the exact same object.

**Ex**:
```
let a = [1, 2, 3];
let b = [1, 2, 3];
let c = a;

let ab_equal = (a === b); //false
let ac_equal = (a === c); //true
```
Even though the items in both array a and b are the same, those 2 arrays do **not** reference the same object. **a** (**sc**) **c** returns true though because they point to the same object. And it is the case with objects as well.

# Why to use PureComponents
Prevents unnecessary re-renders can give you a performance boost in certain scenarios. For example let's say you are rendering a list of 50 items, by not re-rendering them while it is **not** required you are going to have a good performance boost.

A key point to keep in mind is that you should not mutate objects or arrays in props or state. For example if you need to add a new item to the list don't mutate it by pushing the item into the list, the reference to the array never changes and because pure components only check for that, the component will **not** re-render even though there is a difference. **Always** return a new object/array when dealing with pure components.

**All in all** you can create a component by extending the PureComponent class. A PureComponent implements the `shouldComponentUpdate` lifecycle method by performing a shallow comparison on the props and state of the component. If there is no difference, the component is not re-rendered - thereby providing a performance boost. When you create a PureComponent it is a good idea to ensure that all the children components are also ***pure*** to avoid unexpected behaviour. Finally when you are using pure components **never** mutate the state, **always** return a new object that reflects the new state.

Having all that discussed, it is probably more **safe** to use regular components most of the time unless of course you are seeing a performance ***hint*** in some components.

***See `RegComp.js`, `PureComp.js` and `ParentComp.js`***.

# LESSON 27
# Memo
**PureComponents** only work with **class** based components.

It would be nice to be able to achieve the same with **functional** components. This is where **`React.memo`** comes into the picture.

What **PureComponents** is to class based components, **Memo** is to functional components.

***See `MemoComp.js` and `ParentComp.js`***.