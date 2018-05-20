import React from 'react'
import Loadable from 'react-loadable'
import NProgress from 'nprogress'
import Loading from './loading'

export default function lazyloader(path) {
  return Loadable({
    loader: () => {
      NProgress.start()
      return import(/* webpackChunkName: "route-[request]" */ `../containers/${path}/index.js`)
    },
    render: (loaded, props) => {
      NProgress.done()
      let LoadableComponent = loaded.default || loaded
      return <LoadableComponent {...props} />
    },
    loading: Loading
  })
}
