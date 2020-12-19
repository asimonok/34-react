import { createComponent } from 'utils/components'
import './Content.css'

const Content = () => createComponent(`
  <main class="content">
    <h1>My app</h1>
    <p>Some text with custom font</p>
    <input id="sitename" placeholder="site name" />
    <button onclick="model.update({ siteName: document.querySelector('#sitename').value })">Save</button>
  </main>
`)

export default Content
