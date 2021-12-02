import { Component } from 'react';

import './App.css';

class WhoAmI extends Component {
  constructor(props) {
    super(props);
    // создаем состояние компонента, которое можно изменить динамически
    this.state = {
      years: 27,
      text: '+++',
      position: '',
    };
  }

  nextYear = () => {
    // устанавливаем новое состояние с помощью метода setState
    // внутри устанавливаем колбэк ф-цию которая возвращает
    // значиние объекта, которое увеличивается на 1 при нажатии на кнопку (колбэк ф-ция
    //нужна для того, чтобы новое значение устанавливалось только после нажатия на кнопку)
    this.setState((state) => ({
      years: state.years + 1,
    }));
  };

  commitInputChanges = (e, color) => {
    console.log(color)
    this.setState({
      position: e.target.value,
    });
  };

  render() {
    const { name, surname, link } = this.props;
    const { position, years } = this.state;

    console.log(this)

    return (
      <div>
        {/* Обработчик события на клик */}
        <button onClick={this.nextYear}>+++</button>
        <h1>
          My name is {name}, surmame - {surname}, age - {years}, position -{' '}
          {position}
        </h1>
        <a href={link}>My profile</a>
        <form>
          <span>Введите должность</span>
          <input type="text" onChange={(e) => this.commitInputChanges(e, 'some color')} />
        </form>
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
