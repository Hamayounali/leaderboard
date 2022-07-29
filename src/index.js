import './style.css';

function component() {
  const element = document.createElement('div');

  display();
  return element;
}

document.body.appendChild(component());