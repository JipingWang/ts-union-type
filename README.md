TypeScript Union Type
=====

    Usage: npm start, or Live Server extension to open src/index.html 

### Issue

```JavaScript
const style1 = { display: 'flex', flexDirection: 'row' }

export const MyElement = () => (<div style={style1}>styled MyElement</div>)
```
> Type '{ display: string; **flexDirection**: string; }' is not assignable to type 'CSSProperties'.
>> Types of property 'flexDirection' are incompatible.
>>> Type '**string**' is not assignable to type '"column" | "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "column-reverse" | "row" | "row-reverse" | undefined'.

MUI team explains that this is [TypeScript's type widening](https://material-ui.com/#using-createstyles-to-defeat-type-widening) problem. I think it's nessasary to be so, let me explain.

### Reason

TypeScript actually narrows down the value range from an arbitrary string type to a union type, which is defined as **CSSProperties** in file 'node_modules\csstype\index.d.ts', and many packages (@types/React, ...) import and re-export it.

But in JavaScript projects, both the designer and browser will not report error of wrong value for [flexDirection], it is a minor issue in this case, but what if it is mission-critical bussiness logic issue?

When you define a JSON object, the type or business model is in your head, but the computer does not know it. When you use this style variable lately, you have potential exception. So, that's exactly what TypeScript does, type-checking, you can find problems at design time; you can avoid delivering an error-prone JavaScript application.

### Solution

Simple, just define the type of the JSON variable. Like,

```JavaScript
import React, { CSSProperties } from 'react'

const style1: CSSProperties = { display: 'flex', flexDirection: 'column' }

export const MyElement = () => (<div style={style1}>styled MyElement</div>)
```

### Solution for MUI React TypeScript

```JavaScript
// MUI buildStyles is an Arrow-function, define the return type
// import ...
interface Props extends WithStyles, RouteComponentProps{

}

const buildStyles = (theme: Theme):Record<string, CSSProperties> =>  ({
    main: {
        width: 'auto',
        // ...
    },
    // ...
})

function Dashboard(props: Props) {
    const { classes } = props
    return (
        <main className={classes.main}>...</main>
    )
}

export default withRouter(withStyles(buildStyles)(Dashboard))

```
