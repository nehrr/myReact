(() => {
  class MyReactDOM {
    static render(element, domEl) {
      domEl.appendChild(element);
    }
  };

  window.MyReactDOM = MyReactDOM;
})

();
