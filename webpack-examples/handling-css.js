import styles from './css/styles.css';

console.log('Handling CSS');

const template = () => `
  <div class="${styles.myExample}">Lorem ipsum dolor</div>
`;

const renderSomething = (template, element) => {
  element.innerHTML = template;
};

renderSomething(template(), document.body);
