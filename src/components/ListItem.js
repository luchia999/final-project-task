import { Component } from '../core/Component';

export class ListItem extends Component {
  setup(props) {
      // Сохраняем props
      this.props = props;

      // Создаем корневой элемент для списка
      this.$rootElement = document.createElement('div');
      this.$rootElement.className = 'list-item';

      // Создаем элемент для отображения суммы
      const amount = document.createElement('span');
      amount.textContent = `$${this.props.amount}`;

      // Создаем кнопку "Удалить"
      const deleteButton = document.createElement('button');
      deleteButton.textContent = 'Удалить';
      deleteButton.addEventListener('click', this.handleDelete.bind(this));

      // Добавляем элементы в корневой элемент
      this.$rootElement.appendChild(amount);
      this.$rootElement.appendChild(deleteButton);
  }

  // Метод для обработки нажатия кнопки "Удалить"
  handleDelete() {
      // Вызываем метод onDelete, передавая сумму
      if (this.props.onDelete) {
          this.props.onDelete(this.props.amount);
      }
  }
}

