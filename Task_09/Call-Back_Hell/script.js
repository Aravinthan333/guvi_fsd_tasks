const display = document.querySelector(".display");
display.innerText = "Call-Back Hell";
display.setAttribute(
  "style",
  "display:flex;text-align: center; justify-content: center; align-items: center;font-size: 45px; margin: 20%"
);

let counter = 11;

setTimeout(() => {
  display.innerText = `Call-Back Hell\n${--counter}`;
  setTimeout(() => {
    display.innerText = `Call-Back Hell\n${--counter}`;
    setTimeout(() => {
      display.innerText = `Call-Back Hell\n${--counter}`;
      setTimeout(() => {
        display.innerText = `Call-Back Hell\n${--counter}`;
        setTimeout(() => {
          display.innerText = `Call-Back Hell\n${--counter}`;
          setTimeout(() => {
            display.innerText = `Call-Back Hell\n${--counter}`;
            setTimeout(() => {
              display.innerText = `Call-Back Hell\n${--counter}`;
              setTimeout(() => {
                display.innerText = `Call-Back Hell\n${--counter}`;
                setTimeout(() => {
                  display.innerText = `Call-Back Hell\n${--counter}`;
                  setTimeout(() => {
                    display.innerText = `Call-Back Hell\n${--counter}`;
                    setTimeout(() => {
                      display.innerText = `Call-Back Hell\n${--counter}`;
                      setTimeout(() => {
                        display.innerText = `Happy Independence Day`;
                      }, 1500);
                    }, 1500);
                  }, 1500);
                }, 1500);
              }, 1500);
            }, 1500);
          }, 1500);
        }, 1500);
      }, 1500);
    }, 1500);
  }, 1500);
}, 1500);
