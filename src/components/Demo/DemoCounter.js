import { Component } from '../../core/Component';
import { DemoButton } from './DemoButton';

export class DemoCounter extends Component {
  setup(props) {
    this.props = props;
    this.state = { 
      counter: 0 
    };

    this.$rootElement = document.createElement('div');
    
    this.$heading = document.createElement('h1');
    this.updateHeading();

    const incrementButton = new DemoButton({ text: 'Increment', onClick: this.handleIncrement.bind(this) });
    const decrementButton = new DemoButton({ text: 'Decrement', onClick: this.handleDecrement.bind(this) });

    this.$rootElement.append(this.$heading, incrementButton.$rootElement, decrementButton.$rootElement);
  }
  updateHeading() {
    this.$heading.textContent = `${this.props.title}: ${this.state.counter}`;
  }

  handleIncrement() {
    this.state.counter++;
    this.updateHeading(); // Обновляем заголовок
  }

  handleDecrement() {
    if (this.state.counter > 0) { // Предотвращаем отрицательные значения
      this.state.counter--;
      this.updateHeading(); // Обновляем заголовок
    }
  }
}