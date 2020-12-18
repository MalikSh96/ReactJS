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