import { Component } from '../core/Component';
import { Form } from '../components/Form';
import { List } from '../components/List';
import { ListItem } from '../components/ListItem';

export class App extends Component {
	setup(props) {
			this.state = {
					total: 0,
					donates: []
			};

			// Создаем корневой элемент приложения
			this.$rootElement = document.createElement('div');
			this.$rootElement.className = 'app';

			// Заголовок и суммирование
			const h1 = document.createElement('h1');
			const span = document.createElement('span');

			h1.className = 'total-amount';
			span.textContent = this.state.total; // Устанавливаем начальное значение
			h1.textContent = 'Итого: $';
			this.$h1 = h1;
			this.$total = span;

			// Добавляем общий заголовок
			this.$h1.appendChild(this.$total);
			this.$rootElement.appendChild(this.$h1);

			// Создаем и добавляем форму доната
			const donateForm = new Form({ onSubmit: this.onItemCreate.bind(this) });
			this.$rootElement.appendChild(donateForm.$rootElement);

			// Создаем и добавляем список донатов
			this.donateList = new List();
			this.$rootElement.appendChild(this.donateList.$rootElement);
	}

	// Метод для добавления нового доната
	onItemCreate(amount) {
			const item = new ListItem({ amount: Number(amount), onDelete: this.removeItem.bind(this) });

			// Добавляем новый элемент в список
			this.donateList.addItem(item); 

			// Прибавляем сумму к общей
			this.state.total += Number(amount);

			// Обновляем отображение итоговой суммы
			this.$total.textContent = this.state.total;
	}

	// Метод для удаления доната
	removeItem(amount) {
			// Удаляем донат из состояния
			this.state.donates = this.state.donates.filter(donate => donate.amount !== amount); 
			this.state.total -= amount;

			// Обновляем отображение итоговой суммы
			this.$total.textContent = this.state.total;

			// Обновляем список донатов
			this.donateList.$listContainer.innerHTML = ''; // Очищаем список
			this.state.donates.forEach(donate => {
					this.donateList.addItem(donate); // Добавляем обновленные элементы в список
			});
	}
}