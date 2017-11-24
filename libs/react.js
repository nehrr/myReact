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

  function anElement(element, props, children) {
    if (typeof(element) === 'function') {

      return element();

    } else {

      let myElement = document.createElement(element);

      for (let key in props) {
        const value = props[key];
        key = (key == 'className' ? 'class' : key);

        myElement.setAttribute(key, value);
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
  }

  window.MyReact = MyReact;
})

();
