import React, { Component } from 'react';
import ToDoListItem from "./ToDoListItem.js"

// Appという名称のコンポーネントの作成
//import React from 'react';とした場合、extendsの次は React.Componentとする。
class App extends Component {

  // ToDoListをstateに定義して初期値はlocalStorageから取得または[]
  // （もしlocalStorageにtodoListと名付けたitemが存在するならlocalStorageから取得）
  state = {
    todoList: JSON.parse(localStorage.getItem("todoList")) || []
  }

  // todoList itemの追加
  addTodo = (item, callBack) => {
    // todoList stateに追加
    this.setState(
      {
        todoList: this.state.todoList.concat(item)
      },
      () => {
        // localStorageにtodoList stateを保存
        localStorage.setItem("todoList", JSON.stringify(this.state.todoList))
        // callBack関数が引数に渡されていた場合に実行
        callBack && callBack()
      }
    )
  }

  // todoListからitemを削除
  removeTodo = (item, callBack) => {
    this.setState(
      {
        todoList: this.state.todoList.filter(x => x !== item)
      },
      () => {
        // localStorageにtodoList stateを保存
        localStorage.setItem("todoList", JSON.stringify(this.state.todoList))
        // callBack関数が引数に渡されていた場合に実行
        callBack && callBack()
      }
    )
  }

  // renderメソッドでビューとなるJSXをreturnで返す
  render() {
    return (
      <div className="App">
        <h2>React ToDoリスト</h2>
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

            this.addTodo(
              {
                  title: titleElement.value,
                  description: descriptionElement.value
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
            <p>削除するには作成したToDoリストを押下</p>
          </div>
        </form>
        <div>
          {/* todoList配列の要素数分ToDoListItemコンポーネントを展開*/}
          {this.state.todoList.map(todo => (
            <ToDoListItem
              key={todo.title}
              title={todo.title}
              description={todo.description}
            // クリックされたItemをtodoList stateから削除
              onClick={() => this.removeTodo(todo)}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default App;