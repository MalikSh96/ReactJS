# LESSON 11
# setState
With `state` **never** modify the `state` directly, instead make use of `setState`. Because when you modify the `state` directly React will **not** re-render the component, `setState` on the other hand will let React know that it **has** to re-render the component.

Calls to `setState` are asynchronous, so it can happen that a call will be made **before** the `state` has actually happened.
To handle such situations, you can pass in a callback function as the 2nd parameter to the `setState` method.

Whenever you **need** to execute some ***code*** **after** the `state` has been changed, do **not** place that ***code*** **right** after the `setState` method. Instead place the code **within** the callback function that is passed as the 2nd parameter to the `setState` method.

Whenever you have to update the `state` based on the previous `state` you need to pass a function as an argument to the `setState` method instead of passing in an object.
The function has access to the previous `state`, which can be used to calculate the ***new*** `state`.

**`Counter.js`**
```
increment(){
        //To change the state of the component, we need to use setState
        this.setState({
            count: this.state.count + 1
        }, () => {
            console.log('Callback value', this.state.count);
        });
        console.log(this.state.count);
}
```
**Changed** to
```
increment(){
        //To change the state of the component, we need to use setState
        //Here we are always using the previous state, and not the current state as in the code above^^^
        this.setState( (prevState) => ({
            count: prevState.count + 1
        }));
        console.log(this.state.count);
}
```

# LESSON 12
# Destructuring Props and State
Destructuring is an ES6 feature that makes it possible to unpack values from arrays or properties from objects into distinct variables.

In React destructuring props and state improves code readability, and you are also more likely find destructuring syntax' in most of the online material.

**Functional** component:
There are 2 ways to destructure props in a functional component.

1. Destructuring it in the function parameter itself.

```
const Greet = (props) => { 
  //some more code here

}
```
**Destructured** to using `{}` braces 
```
const Greet = ({name, heroName}) => {
  //some more code here

}
```
In above you are extracting `name` and `heroName` from the `props` object

2. Destructuring in the function body.

```
const Greet = (props) => {
    // console.log(props);
    const {name, heroName} = props; //we extract name and heroName property from the props object

    //some more code here

}
```

**Class** component:
In **class** components you generally tend to destructure props/state in the render method

```
class Welcome extends Component {
    render(){
new line--> const {name, heroName} = this.props; ////we extract name and heroName property from the props object
        /*^We are simply extracting the necessary props
        Our props object could contain some more props, but we can destructure only the ones we wish to use
        in our component
        */
        return <h1>Welcome {name} a.k.a {heroName}!</h1>
    }
}
```

For **`state`** properties you can destructure them in a similar way
```
const {state1, state2} = this.state;
```

# LESSON 13
# Event Handling
Any web application you create typically tends to have user interaction, when the user interacts with your application **events** are fired.

React **events** are named used camelCase rather than lowercase. And with **JSX** you pass a function as the ***event handler*** rather than a string: `<button onClick={clickHandler}>Click</button>`.

In JavaScript it is possible to define one function inside another function, nesting functions.

With ***event handling*** a common mistake can happen sometimes, it is when for example `onClick` you pass a function as the event handler. The function you pass has **no** `()` at the end of it `onClick={clickHandler}`, if you **do** add `()` it **becomes** a function **call**, and that is not what you want, you want the **handler** to be a function and **not** a function call.

**This**
```
onClick={clickHandler}
```
**Not this**
```
onClick={clickHandler()}
```

The event handler **has** to be a function and **not** a function call.

**Functional** component eventhandling:
```
import React from 'react'

function FunctionClick() {
    function clickHandler(){
        console.log('Button clicked');
    }
    return (
        <div>
            <button onClick={clickHandler}>Click</button>
        </div>
    )
}

export default FunctionClick;
```

**Class** component eventhandling:
```
import React, { Component } from 'react'

class ClassClick extends Component {
    clickHandler(){
        console.log('You clicked the button');
    }
    render() {
        return (
            <div>
                <button onClick={this.clickHandler}>Click me</button>
            </div>
        )
    }
}

export default ClassClick;
```

But all this is "simple" eventhandling for now, because you aren't doing much yet. But generally your eventhandlers tend to modify the `state` of the component using `this.setState` method, and when you try to do that it is **possible** that you can run into a whole world of confusion, all that confusion revolves around `this` keyword binding in JavaScript.

# LESSON 14
# Binding Event Handlers
The reason you bind **event handlers** in React is purely because of the way **`this`** keyword works in JavaScript. It is **not** because of how React works.

`this` keyword is ***`undefined`*** in an **event handler** and that is the reason **event binding** is necessary in React Class components.

There are a number of ways to bind **event handlers** in React.

1. Using the `bind` keyword and bind the handler in the `render()` method.
```
render() {
        return (
            <div>
                <div>{this.state.message}</div>
                <button onClick={this.clickHandler.bind(this)}>Click This</button>
            </div>
        )
}
```
Every ^ update to the `state` will cause the component to re-render, this in turn will generate a brand new **event handler** on every render. This impact ***could*** be troublesome in larger applications and components that contains nested children components.

2. Using arrow functions in the `render()` method. The arrow function approach is simply calling the **event handler** in the arrow function body.
```
render() {
        return (
            <div>
                <div>{this.state.message}</div>
                {/* <button onClick={this.clickHandler.bind(this)}>Click This</button> */}
                <button onClick={() => this.clickHandler()}>Click This</button>
            </div>
        )
}
```
We are calling the **event handler** and returning that value, that is why `()` is required in this approach. But similar to first approach this also has performace implications in some scenarios.

3. This approach deals by binding the **event handler** in the constructor. This approach is the most optimal one.
```
class EventBind extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             message: 'Hello!'
        }

        this.clickHandler = this.clickHandler.bind(this);
}
```
Because the binding happens once in the `constructor`, that is better compared binding in the `render` method.

4. Using an arrow function as a `class` property. Basically change the way you define your method in the class. This approach is also the most optimal one.
```
clickHandler = () => {
        this.setState({
            message: 'Goodbye my friend!'
        });
}
```

React documentations suggest either approach **3** or **4**.

# LESSON 15
# Methods as Props
If you want a child component to communicate with a parent component, you also use **props**. And this time you pass in a reference to a method as props to the child component.

We have created to new components `ParentComponent.js` and `ChildComponent.js`. What we want is when we click on the button in the child component (`ChildComponent.js`) we want to execute the method defined in the parent component (`ParentComponent.js`). Basically a child component calls a parent components method, which is achieved using props.

The only difference this time is that we pass the method itself as a prop to the child component.

**`ParentComponent.js`**
```
import React, { Component } from 'react'
import ChildComponent from './ChildComponent';

class ParentComponent extends Component {

    constructor(props) {
        super(props);
    
        this.state = {
             parentName: 'Parent'
        }

        //binding the method, since we are using the 'this' keyword in the (greetParent) method
        this.greetParent = this.greetParent.bind(this);
    }
    
    greetParent(){
        //`` <-- template literals. `` and ${} is a feature in ES6 and not a feature specific to React
        alert(`Hello ${this.state.parentName}`);
    }

    render() {
        return (
            <div>
                {/* 
                We are passing a reference to the greetParent method as a prop called greetHandler
                Therefore we omit () after greetParent
                */}
                <ChildComponent greetHandler={this.greetParent}/>
            </div>
        )
    }
}

export default ParentComponent
```

**`ChildComponent.js`**
```
import React from 'react'

function ChildComponent(props) {
    return (
        <div>
            {/* 
            We are grabbing reference of greetHandler from ParentComponent.js with 
            the onClick={props.greetHandler}
            */}
            <button onClick={props.greetHandler}>Greet Parent</button>
        </div>
    )
}

export default ChildComponent
```

**All in all** in the parent component (`ParentComponent.js`) define the method, on the child component **`tag`** pass the method as a prop, in the child component (`ChildComponent.js`) access the method using the props object, ***if*** at all you have to pass a parameter use the **arrow function** syntax. 

# LESSON 16
# Conditional Rendering
When you are building React applications you may often need to show or hide some html based on a certain condition. Conditional Rendering in React works the same way as conditions works in JavaScript.
There are 4 different approaches for conditional rendering.

1. if/else
2. Element variables
3. Ternary conditional operator 
4. Short circuit operator

**1. if/else**
`UserGreeting.js`
```
render() {
        if (this.state.isLoggedIn) {
            return (
                <div>Welcome Malik!</div> <--This is JSX, the return statement contains the JSX
            )
        }
        else {
            return (
                <div>
                    Welcome Guest! <-- -//-
                </div>
            )
        }
}
```
`if/else` statements **do not** work inside **JSX**, and that is because JSX is just syntactic sugar for function calls and object construction. Adding `if/else` statements within the JSX is not valid, and that is why the `if/else` statement(s) is outside the JSX.



A better approach is approach number **2** of using **element variables**, in this approach you use JavaScript variables to store elements. This will also help you conditionally render the entire component, or only a part of the component as well.

**2. Element variables**
```
render() {
        let message;
        if (this.state.isLoggedIn) {
            message = <div>Welcome Malik!!</div>
        }
        else {
            message = <div>Welcome Guest!!</div>
        }
        return <div>{message}</div>
}
```
So `message` is the variable which stores the element to be rendered.



Though approach **2** looks simple, approach **3** is even more simpler. The benefit of this approach is that it **can** be used inside the JSX. This is the approach you might want to follow most of the time as it keepts the code simple and readable.

**3. Ternary conditional operator**
```
render() {
        //3.
        return (
            /*
            How this works is that the first operator (this.state.isLoggedIn) is 
            evaluated to either true or false. If it is true the 2nd operator (Welcome Malik!!!)
            is returned.
            If the first operator turns out to be false, then the 3rd operator is returned 
            (Welcome Guest!!!)
            */
            this.state.isLoggedIn ?
                <div>Welcome Malik!!!</div> :
                <div>Welcome Guest!!!</div>
        )
}
```



The 4th approach is just a specific case of the **ternary conditional operator** approach. When you want to render either something or nothing, you make use of the **short circuit operator**.

**4. Short circuit operator**
```
render() {
        //4. 
        return(
            /*
            The expression first evaluates the left hand side of the operator (this.state.isLoggedIn)
            and if it is true it ALSO evaluates the right hand side (Welome Malik!!!!)
            However if it evaluates to false, then the right hand side will never be evaluated as
            it doesn't affect the final value of the whole expression
            */
            this.state.isLoggedIn && <div>Welome Malik!!!!</div>
        )
}
```

**All in all** for most cases stick to either approach **3** or approach **4**, as they tend to be much more clean and readable.

# LESSON 17
# List Rendering
When you build applications a common scenario is to display a list of items, for example a list of names/products/courses etc.

So what we want is to repeat html for ***each*** item in the list.

`map()` method will be used to quickly iterate over each element in an array and return a **new** array with the desired changes applied.

**`NameList.js`**
```
import React from 'react'

function NameList() {
    const names = ['Malik', 'Souheib', 'Mack'];
    //we use the array.map syntax
    const nameList = names.map(name => <h3>{name}</h3>) //once we start writing html we need to use {} to evaluate the javascript expression
    return (
        <div>
            {nameList}
        </div>
    )
}

export default NameList;
```
^ is pretty simple

Typically you are going to have a list of objects with a few properties that have to be rendered. In such cases it is **always** a good idea to refactor the jsx into a separate component and then use the component in the `map()` method jsx.

**`NameList.js`**
```
const persons = [
        {
            id: 1,
            name: 'Malik',
            age: 24,
            skill: 'Goalkeeping'
        },
        {
            id: 2,
            name: 'Souheib',
            age: 24,
            skill: 'Footballing'
        },
        {
            id: 3,
            name: 'Mack',
            age: 24,
            skill: 'Fighting in MMA'
        }
    ]

    const personList = persons.map(person => <Person person={person} />);

    return (
        <div>
            {personList}
        </div>
    )
```

**`Person.js`**
```
import React from 'react'

//Destructuring the props right in the parameter
function Person({person}) {
    return (
        <div>
            <h3>I am {person.name}.
                I am {person.age} years old.
                I know {person.skill}.
            </h3>
        </div>
    )
}

export default Person
```

This time we wrote better code. `NameList.js` component is only responsible for rendering the list and the `Person.js` component is only responsible for rendering the person html. This is also the pattern you commonly see when building web applications that render lists of data.

# LESSON 18
# Lists and Keys
**Warning** in window console
```
index.js:1 Warning: Each child in a list should have a unique "key" prop.
```

To handle the warning we will add a **`key`** prop and to the prop we need to assign a value that will be unique qithin the list.

**`NameList.js`**
`persons.map(person => <Person key={person.id} person={person} />);`

So the **`key`** prop is a special that you need to include when creating lists of elements.

An important note about `key` props is that they are not accessible in the child components, as trying to access a `key` prop will end up returning `undefined`. The `key` prop keyword is reserved and if you want to pass it down as a value to be used in the child component you should pass it down as a different prop.

**Keys** help React identify which items in the list have updated/added/removed and plays a crucial role in handling UI updates efficiently.

**All in all** a `key` is a special string attribute you need to include when creating lists of elements. `Keys` gives the elements a stable identity.

# LESSON 19
# Index as Key Anti-pattern
If we do not have an `id` that uniquely identifies each item in a list we can use the **index** value as a `key` when rendering the list. Because in that way every item in the list receives a unique value.

**`NameList.js`**
`const nameList = names.map((name, index) => <h3 key={index}>{index} {name}</h3>)`

But using the **index** value as the `key` will cause some serious UI issues in certain scenarious. This could for example mess up what **`key(s)`** your item **value(s)** where assigned to at the beginning, and therefore messing the order of your list.

You **can** use the `index` as a `key` provided your list satisfies certain conditions:
1. The items in your list do **not** have an unique id.
2. The list is a static list and will **not** change. (ex. never adding/removing items from the list)
3. The list will **never** be reordered/filtered. (ex. sorting based on column value or filter based on user input)

If your list satisfies **all** 3 of the conditions then you can use `index` as a `key`. If not you can try one of the **npm** packages that generates a unique id for a list or try hashing out a unique value from one of the existing properties.

**All in all** do try and avoid using `index` as a `key` though.

# LESSON 20
# Styling and CSS Basics
There are a couple of options to style a React component.

1. CSS Stylesheets
2. Inline styling
3. CSS Modules
4. CSS in JS Libraries which works really well with React (Styled Components recommended)

**OBS** for option **3** there is a filenaming convention to be used for css modules with `create-react-app`, the `filename` must be suffixed with `.module.css`.
***Ex***:
```
src\appStyles.css

src\components\appStyles.module.css
```

An advantage of using option **3** is that the classes are locally scoped by default.