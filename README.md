Intro
==========

This project is let u quick start to learn basic, useful concept of `Angular 2 Beta`. The concept of the code i gave cover the chapter **5 MIN QUICKSTART** & **TUTORIAL** ( 1.The Hero Editor, 2.Master/Detail, 3.Multiple Component, 4.Services ) + **DEVELOPER GUIDE** ( only 5. Forms ) of https://angular.io/

Want to learn `Angular 2 Beta` faster ? Then u need to see the following section **Good To Know**.

If u want to know some Glossary & Best Practice of `Angular 2 Beta`, please visit [this site ](https://litiang.gitbooks.io/angular-2-0/content/), and just read the sections *Glossary* & *Best Practice*

Usage
===========
Please open terminal bass on your prefer folder, the typing command below respectively.
`git clone https://github.com/LiTiang/Angular2Beta---OrderApp.git`
`npm install`
`npm run app`

Good To Know
============
This section list some syntaxs which are useful when develop app by `Angular 2 Beta`.try u best to remember what that section says !!!

### HTML
The following list some html elements with their attribute(s).

`<div hidden>`,`<input required>`, `<button disable>` 

& below are events ...

`blur`, `click`, `keyup`

### Angular 
Following are Angular's event
#####Keyboard event
* `keyup.enter` : fire this event when user press enter 
* inputElem.className : show html input element's className.
```html
E.G.
    <input #inputElem>show input elem class name : {{inputElem.className}}
```

### Strategy 
* If u want to hidden or show something on UI, try to use `<div hidden>` or `*ngIf` or data-binding skills
