import {FC} from 'react'
import {Outlet, useLocation} from 'react-router-dom'
import Header from '../Components/Header/Header'

const MainLayout: FC = () => {
  const location = useLocation()
  const isMainPage = location.pathname === '/'

  return (
    <div className='wrapper'>
      <Header withSearch={isMainPage} />
      <div className='content'>
        <Outlet />
      </div>
    </div>
  )
}

export default MainLayout
