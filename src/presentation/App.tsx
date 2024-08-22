import { SideNav, BottomNav } from './components/Nav'
import style from './App.module.scss'
import { Route, Routes } from 'react-router-dom'
// import { NavigatePersist } from './supports/Persistence'
import { EditorPage } from './pages/editor'
import { ExplorerPage } from './pages/explorer'
import 'antd/dist/reset.css';
import { useWindowSize } from 'react-use'
// import {
//   AppOutline,
//   MessageOutline,
//   UnorderedListOutline,
//   UserOutline,
// } from 'antd-mobile-icons'

function App() {
  const { width } = useWindowSize()
  const isWideScreen = width > 600
  
  return (
    <div className={style.container}>
      {/* {isWideScreen && <SideNav className={style.sideNav} />} */}
      <main className={style.main}>
          <Routes>
            <Route path='/' element={<EditorPage />} />
            <Route path='/:parentId/:folderId' element={<EditorPage />} />
          </Routes>
      </main>
      {!isWideScreen && <BottomNav className={style.bottomNav} />}
    </div>
  );
}

export default App;
