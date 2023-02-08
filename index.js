const createEl = () => {
  const root = document.createElement('div');
  const container = document.createElement('div');
  const text = document.createElement('div');
  const load = document.createElement('div');

  return { root, container, text, load }
}
const setAttr = ({ root, container, text, load }) => {
  root.setAttribute('class', 'root');
  container.setAttribute('class', 'container');
  text.setAttribute('class', 'text');
  load.setAttribute('class', 'load');
}
const counter = ({ width, text, load }) => {
  let count = 0;
  let intervalId;

  const func = () => {
    if (count > width) {
      clearInterval(intervalId);
      return
    }

    text.textContent = `Loading... ${count} %`;
    load.style.width = `${count}%`;
    count++;
  };
  intervalId = setInterval(func, 70)
}

const init = () => {
  const { root, container, text, load } = createEl();
  setAttr({ root, container, text, load });
  document.body.appendChild(root);
  root.appendChild(text);
  root.appendChild(container)
  container.appendChild(load);

  counter({ width: 100, text, load })
}

init();