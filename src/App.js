import React, { Component } from 'react';
import './App.css';
import ToDoListItem from "./ToDoListItem.js"

// Appという名称のコンポーネントの作成
//import React from 'react';とした場合、extendsの次は React.Componentとする。
class App extends Component {

  // ToDoListをstateに定義して初期値[]
  //Stateとはコンポーネント利用時に設定ができる値で、Propsと違い後から変更可能。
  state = {
    todoList: []
  }
  // renderメソッドでビューとなるJSXをreturnで返す
  render() {
    return (
      <div className="App">
        <form 
          className="App-form"
          onSubmit={e => {
            // formのデフォルトイベントキャンセル
            // (フォームが持つデフォルトの動作は、フォームの内容を指定したURLへ送信するという動作。form要素に送信先が指定されていない場合、現在のURLに対してフォームの内容を送信するのでこれをキャンセル。)
            e.preventDefault();
            // idがtitleのElement取得
            const titleElement = e.target.elements["title"];
            // idがdescriptionのElementを取得
            const descriptionElement = e.target.elements["description"];
            // todoList stateに追加
            this.setState(
              {
                todoList: this.state.todoList.concat({
                  title: titleElement.value,
                  description: descriptionElement.value
                })
              },
              // stateの変更後に入力した値を空にする
              () => {
                titleElement.value = "";
                descriptionElement.value = "";
              }
            )
            }}
          >
          <div>
            <input id="title" placeholder="title" />
            <textarea id="description" placeholder="description" />
          </div>
          <div>
            <button type = "submit">登録</button>
            <p>ToDoリスト押下で削除ができます</p>
          </div>
        </form>
        <div>
          {/* todoList配列の要素数分ToDoListItemコンポーネントを展開*/}
          {this.state.todoList.map(todo => (
            <ToDoListItem
              key={todo.title}
              title={todo.title}
              description={todo.description}

              onClick={() => {
                this.setState({
                  todoList: this.state.todoList.filter(x => x !== todo)
                })
              }}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default App;