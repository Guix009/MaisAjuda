import { useEffect } from 'react'
import logo from './assets/logo.svg'
import logoMaior from './assets/+AJUDA.png'
import { RxHamburgerMenu } from "react-icons/rx";
import { FaSearch } from "react-icons/fa";
import { PiWheelchairFill } from "react-icons/pi";
import './App.css'

function App() {

  return (
    <>
      <header className='header'>
          <img className='logo' src={logo} alt="logo-mais-ajuda" />
        <nav>
          <p className='p1'><a href='#'>Sobre Nós</a></p>
          <p className='p2'><a href='#'>Torne-se um Cuidador</a></p>
          <p className='p3'><a href='#'>Depoimentos</a></p>  
          <p className='p4'><a href='#'>Contato</a></p>  
        </nav>
        <RxHamburgerMenu className='menu-hamburguer'/>
      </header>

      <main>
        <section>
            <div className="border-conteiner">
              <div className="conteiner">
                <img src={logoMaior} alt="logo-mais-ajuda" />
                  <p>QUAIS CUIDADOS VOCÊ BUSCA?</p>
                  <input name='pesquisa' type="text"  />
                  <FaSearch className='icon-search'/>
                  <PiWheelchairFill className='icon-cadeira'/>
              </div>
            </div>
        </section>
      </main>
    </>
  )
}

export default App
