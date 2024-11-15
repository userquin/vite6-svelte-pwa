import { mount } from 'svelte'
import './app.css'
import App from './App.svelte'

const app = mount(App, {
  props: {},
  target: document.getElementById('app')!,
})

export default app
