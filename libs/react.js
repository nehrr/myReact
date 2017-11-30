(() => {
  //Private Functions

  //   function div(props, children) {
  //   const eDiv = document.createElement('div');
  //   eDiv.innerHTML = children.join(' ');
  //   for (let item in props) {
  //     let value = props[item];
  //     item = (item == 'className') ? 'class': item;
  //     eDiv.setAttribute(item, value);
  //   }
  //   return eDiv;
  // }

  function isFunction(func) {
    return typeof(func) === 'function';
  };

  function isClass(func) {
    return isFunction(func) && /^class\s/.test(Function.prototype.toString.call(func));
    //Regex to check if result starts with word 'class'
  };

  function anElement(element, props, children) {

    if (isClass(element)) {

      const myElem = new element(props);
      return myElem.render();

    } else if (isFunction(element)) {

      return element();

    } else {

      let myElement = document.createElement(element);

      for (let key in props) {
        const value = props[key];

        // onClick -> ()
        if (/^on.*$/.test(key)) {

          //Substr to remove the 'on', toLowerCase because Click wouldn't work
          myElement.addEventListener(key.substr(2).toLowerCase(), value);

        } else {

          key = (key == 'className' ? 'class' : key);
          myElement.setAttribute(key, value);

        }
      }

      children.forEach(child => {

        if (typeof(child) === 'object') {

          //Child is an element object similar to myElement w/ same methods
          //myElement.innerHTML += child.outerHTML;
          myElement.appendChild(child);

        } else {

          myElement.innerHTML += child;

        }
      })

      return myElement;

    }
  };

  class MyReact {

    // static createElement(type, props, ...children) {
    //   if (type == 'div') {
    //     return div(props, children);
    //   }
    // }

    static createElement(element, props, ...children) {
      return anElement(element, props, children);
    }
  };

  class Component {

    constructor(aProp) {
      this.props = aProp;
    }

    setState(object) {
      //Gets object key and applies value
      let value = Object.values(object);
      let key = Object.keys(object);
      this.state.key = value();
      console.log(value);
    }
  };

  window.MyReact = {
    createElement: MyReact.createElement,
    Component
  };
})();
