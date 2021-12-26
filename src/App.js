import React, { Component } from 'react';
import BootstrapTest from './BootstrapTest';
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
    console.log(color);
    this.setState({
      position: e.target.value,
    });
  };

  render() {
    const { name, surname, link } = this.props;
    const { position, years } = this.state;

    console.log(this);

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
          <input
            type="text"
            onChange={(e) => this.commitInputChanges(e, 'some color')}
          />
        </form>
      </div>
    );
  }
}

const DynamicGreating = (props) => {
  return (
    <div className={'mb-3 p-3 border border-' + props.color}>
      {React.Children.map(props.children, (child) => {
        return React.cloneElement(child, {
          className: 'shadow p-3 m-3 border rounded',
        });
      })}
    </div>
  );
};

const HelloGreating = () => {
  return (
    <div style={{ width: '600px', margin: '0 auto', marginTop: '50px' }}>
      <DynamicGreating color={'primary'}>
        <h2>Hello world!</h2>
      </DynamicGreating>
    </div>
  );
};

//
const Message = (props) => {
  return <h2>The counter is {props.counter}</h2>;
};

class Counter extends Component {
  state = {
    counter: 0,
  };

  changeCounter = () => {
    this.setState(({ counter }) => ({
      counter: counter + 1,
    }));
  };

  render() {
    return (
      <>
        <button className={'btn btn-primary'} onClick={this.changeCounter}>
          Click me
        </button>
        {this.props.render(this.state.counter)}
      </>
    );
  }
}

function App() {
  return (
    <div className="App">
      <Counter render={(counter) => <Message counter={counter} />} />

      <HelloGreating />
      <BootstrapTest
        left={
          <DynamicGreating color={'primary'}>
            <h2>This weel was hard</h2>
            <h2>Hello world!</h2>
          </DynamicGreating>
        }
        right={
          <DynamicGreating color={'primary'}>
            <h2>RIGHT!</h2>
          </DynamicGreating>
        }
      />

      <WhoAmI name={'John'} surname="Smith" link="facebook.com" />
      <WhoAmI name={'Alex'} surname="Shepard" link="vk.com" />
    </div>
  );
}

export default App;
