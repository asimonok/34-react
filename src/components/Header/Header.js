import { createComponent } from 'utils/components'
import logoUrl from './logo.png'
import './Header.css'
import { model } from 'model'

const onChangeRoute = (event) => {
  event.preventDefault()
  const pathname = `/${event.target.getAttribute('href')}`
  model.update({ pathname })
  window.history.pushState({}, '', pathname)
}

window.onChangeRoute = onChangeRoute

const Header = (model) => createComponent(`
  <header class="header">
    <img src="${logoUrl}" width="200" alt="" />
    <span class="sitename">${model.siteName}</span>
    <a href="home" onclick="onChangeRoute(event)">Home</a>
    <a href="contacts" onclick="onChangeRoute(event)">Contacts</a>
  </header>
`)

export default Header
