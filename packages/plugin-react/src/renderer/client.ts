import { defineClientRenderer } from '@gestaltjs/plugins'
import ReactDOM from 'react-dom'

// eslint-disable-next-line import/no-default-export
export default defineClientRenderer({
  hydrate: async function (component, domElement) {
    ReactDOM.hydrate(component, domElement)
  },
})
