import React from "react";
import ReactDOM from "react-dom";
import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import Routes from "./Routes";

import { createStore } from "redux";
import rootReducer from "./store/reducers";
import { Provider } from "react-redux";

const store = createStore(rootReducer) //store 생성

const GlobalStyle = createGlobalStyle`
  ${reset}

  * {
    box-sizing: border-box;
    font-family: Noto Sans KR;
  }
`;

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <Routes />
    <GlobalStyle />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);


//addcart 라는 액션 생성 함수가 disPatch를 통해서 store로 보내준다. 하지만 그전에 Reducer를 만나 원하는 타입을 기준으로 지정해놓은 동작을 수행하면 
// store를 업데이트 하고 업데이튼 된 store를 바라보는 component의 값도 업데이트 된다. 