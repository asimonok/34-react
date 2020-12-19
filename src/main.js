import './styles/index.css'
import Header from './components/Header'
import Content from './components/Content'
import Contacts from './components/Contacts'
import { model } from './model';

const render = (data) => {
  const root = document.querySelector('#app')
  root.innerHTML = ''

  root.appendChild(
    Header(data)
  )
  if (data.pathname === '/home' || data.pathname === '/') {
    root.appendChild(
      Content(data)
    )
  }
  if (data.pathname === '/contacts') {
    root.appendChild(
      Contacts(data)
    )
  }
}

model.subscribe((data) => {
  render(data)
})

render(model.getData())
