import { Component } from '../core/Component';

export class Form extends Component {
	setup(props) {
		this.state = {
			amount: 'event.target.value'
		}

	  // Создаем корневой элемент
		this.$rootElement = document.createElement('form');
		this.$rootElement.className = 'donate-form';

		// Создаем и добавляем элемент <label>
		const label = document.createElement('label');
		label.textContent = 'Введите сумму в $';
		this.$rootElement.appendChild(label);

		// Создаем и добавляем элемент <input>
		this.$input = document.createElement('input');
		this.$input.type = 'text';
		this.$input.placeholder = 'Сумма';
		this.$rootElement.appendChild(this.$input);

		// Создаем и добавляем элемент <button>
		this.$button = document.createElement('button');
		this.$button.textContent = 'Задонатить';
		this.$rootElement.appendChild(this.$button);

		// Добавляем слушатели событий
		this.$input.addEventListener('input', this.handleInput.bind(this));
		this.$rootElement.addEventListener('submit', this.handleSubmit.bind(this));
}

handleInput(event) {
		// Устанавливаем значение в состояние
		this.state.amount = event.target.value; 
		console.log('Текущая сумма:', this.state.amount);
		console.log('Валидно ли значение:', this.isValid);

		// Устанавливаем состояние кнопки в зависимости от валидности
		this.$button.disabled = !this.isValid;
}

handleSubmit(event) {
		event.preventDefault(); // предотвращаем перезагрузку страницы
		if (this.isValid) {
				console.log('Сумма:', this.state.amount); // выводим сумму в консоль
				// Очищаем состояние и поле ввода
				this.state.amount = ''; 
				this.$input.value = '';
				this.$button.disabled = true; // блокируем кнопку после отправки
		} else {
				alert('Пожалуйста, введите сумму от 1 до 100.'); // сообщение об ошибке
		}
}

get isValid() {
		const amount = Number(this.state.amount);
		return !isNaN(amount) && amount >= 1 && amount <= 100; // проверка на валидность
}
}
