import './app.css'
import App from './App.svelte'
import { mount } from 'svelte'

const app = mount(App, {
  props: {},
  target: document.getElementById('app')!,
})

export default app
