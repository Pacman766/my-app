import { Component } from 'react';

import './App.css';

class WhoAmI extends Component {
  constructor(props) {
    super(props);
    // создаем состояние компонента, которое можно изменить динамически
    this.state = {
      years: 27,
      text: '+++',
    };
  }

  nextYear = () => {
    console.log('+++');
    // устанавливаем новое состояние с помощью метода setState
    // внутри устанавливаем колбэк ф-цию которая возвращает
    // значиние объекта, которое увеличивается на 1 при нажатии на кнопку (колбэк ф-ция
    //нужна для того, чтобы новое значение устанавливалось только после нажатия на кнопку)
    this.setState((state) => ({
      years: state.years + 1,
    }));
  };

  render() {
    const { name, surname, link } = this.props;
    return (
      <div>
        {/* Обработчик события на клик */}
        <button onClick={this.nextYear}>{this.state.text}</button>
        <h1>
          My name is {name}, surmame - {surname}, age - {this.state.years}
        </h1>
        <a href={link}>My profile</a>
      </div>
    );
  }
}

function App() {
  return (
    <div className="App">
      <WhoAmI name={'John'} surname="Smith" link="facebook.com" />
      <WhoAmI name={'Alex'} surname="Shepard" link="vk.com" />
    </div>
  );
}

export default App;
