import { useEffect, useState, useCallback } from 'react'
import qs from 'query-string'
import { TAG_TYPE } from '../constants'
import * as ScrollManager from '../utils/scroll'

let DEST_POS

export function useTag(DEST) {
  const [tag, setTag] = useState(TAG_TYPE.ALL)
  DEST_POS = DEST
  const adjustScroll = () => {
    if (window.scrollY > DEST_POS) {
      ScrollManager.go(DEST_POS)
    }
  }
  const selectTag = useCallback(tag => {
    setTag(tag)
    adjustScroll()
    window.history.pushState(
      { tag },
      '',
      `${window.location.pathname}?${qs.stringify({ tag })}`
    )
  }, [])
  const changeTag = useCallback((withScroll = true) => {
    const { tag } = qs.parse(location.search)
    const target = tag == null ? TAG_TYPE.ALL : tag

    setTag(target)
    if (withScroll) {
      adjustScroll()
    }
  }, [])

  useEffect(() => {
    ScrollManager.init()
    return () => {
      ScrollManager.destroy()
    }
  }, [])

  useEffect(() => {
    window.addEventListener('popstate', changeTag)

    return () => {
      window.removeEventListener('popstate', changeTag)
    }
  }, [])

  useEffect(() => {
    changeTag(false)
  }, [])

  return [tag, selectTag]
}
