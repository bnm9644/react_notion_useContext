import { useState } from 'react';
import './App.css';
import Page from './components/Page';
import { ThemeContext } from './context/ThemeContext';
import { UserContext } from './context/UserContext';

function App() {
  const [isDark , setIsDark] = useState(false); 

  return (
    /* 자식 Component인 Page Component에 isDark , setIsDark를 props로 넘김
      <Page isDark={isDark} setIsDark={setIsDark}/> 
    */
    // Provider 에는 value가 들어가는데 거기에 전달하고자 하는 Data를 집어 넣어주면 된다. 

    // App Component 에서 context 불러와, 하위 컴포넌트 한테 Data 필요한 지 묻는 작업 -> Page Component는 정보가 필요하지 않으니, 그대로 간다.  
    // Page Component 밑에 있는 Header Component 의 경우 isDark, Content도 isDark, Footer도 마찬가지로 isDark,setIsDark가 필요해 useContext로 선언 후 가져옴
    
    <UserContext.Provider value ={'사용자'}>
      <ThemeContext.Provider value={{isDark, setIsDark}}> 
         <Page/> 
      </ThemeContext.Provider>
    </UserContext.Provider>
  )  
}

export default App;

/* 
  ★ useContext(ThemeContext) 로 받아온 정보를 받아올 때 provider로 감싸주지 않을때, 즉 value가 없을 때는  ThemeContext에서 인자로 넘겨준 초기 값을 받아온다
*/

/*
  React App은 여러개의 Component 로 구성
  최상위 App 부터 죽 뻗어 나가는 형식
  Data 흐름은 항상 위부터 아래로, 부모 -> 자식 순! props로 단계별 전달을 해줘야 함!

  Context : App 안에서 전역적으로 사용되는 data 들을 여러 Component 끼리 쉽게 공유하게 함
  
  props로 일일이 전달 해주지 않아도 되는 장점, 

  app에서 전달할 데이터가 필요할 시,  다른 Component 가서 필요하면 선언 후 갖다 쓰면 됨

  ※ Prop Drilling : App에 있는 Data를 자식 Component에 'Prop' 으로 전달하는 방식  
      
                               App (Data) - context ( 사용 하고 싶은 사람? )
                            prop   ↓
                          A               B
                    prop  ↓               ↓ prop
                          C               D
                     useContext (저요!)   ↓ prop
                                          E 
                                     useContext (저요!)

                이 경우는 C와 E Component 에서만 Data 정보가 필요하나, 
                모든 중간 Component를 거쳐야 하는 상황으로 A와  B,D Component에도 Data를 주입 해줘야 함
                이렇게 되면 나중에 Component가 많아지면 코드 엄청 꼬임.

                이 상황을 해결하기 위해
                C와 E에만 data를 사용하려면, useContext를 사용하면 됨.
                useContext는 context로 공유한 Data를 쉽게 받아오게 함             

  단, Context는 꼭 필요할 때만 사용해야 하는데, Context를 사용하면 Component를 재사용 하기 어렵다.

  ★ Context의 메인 목적은, 다양한 레벨에 있는 수많은 Component들에게 전역적인 Data를 전달하기 위함임!



 */