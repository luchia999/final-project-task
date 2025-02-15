import { Component } from '../core/Component';

export class List extends Component {
  setup() {
      this.$rootElement = document.createElement('div');
      this.$rootElement.className = 'donates-container';

      const title = document.createElement('h2');
      title.className = 'donates-container__title';
      title.textContent = 'Список донатов';

      this.$listContainer = document.createElement('div');
      this.$rootElement.appendChild(title);
      this.$rootElement.appendChild(this.$listContainer);
  }

  // Метод для добавления элемента в список
  addItem(item) {
      this.$listContainer.appendChild(item.$rootElement); // Добавляем элемент в контейнер
  }
}