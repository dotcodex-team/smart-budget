import App from 'next/app'
import 'semantic-ui-css/semantic.min.css'

export default class MyApp extends App {
  componentDidMount() {
    const style = document.getElementById('server-side-styles')

    if (style) {
      style.parentNode.removeChild(style)
    }
  }
}