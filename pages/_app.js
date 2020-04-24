import App from 'next/app'
import 'bulma-pro/css/bulma.css'

export default class MyApp extends App {
  componentDidMount() {
    const style = document.getElementById('server-side-styles')

    if (style) {
      style.parentNode.removeChild(style)
    }
  }
}