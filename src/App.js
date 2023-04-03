import { Link, Route, Routes } from 'react-router-dom';
import './App.css';
import Board from './components/Board';
import Profile from './components/Profile';
import Header from './components/Header';
import NotFound from './components/NotFound';
import Home from './components/Home';
import BoardDetail from './components/BoardDetail';

function App() {
  return (
    <div className="App">
      {/* Header 코드 위치는 상단에 있어야 한다. */}
      <Header />
      {/* Routes 컴포넌트 내부에 Route 컴포넌트를 넣어주고 각각의 주소 값은 path 속성에, 호출 할 컴포넌트는 element 속성으로 불러 주면 된다. */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/board" element={<Board />} />
        <Route path="/board/:boardID" element={<BoardDetail />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
