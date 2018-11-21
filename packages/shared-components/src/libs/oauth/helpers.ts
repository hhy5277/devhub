import { Linking } from 'react-native'

export * from './helpers.shared'

export const listenForNextUrl = () => {
  let finished = false

  return new Promise<string>((resolve, reject) => {
    const handleUrl = (e: { url: string }) => {
      Linking.removeEventListener('url', handleUrl)

      finished = true

      const url = (e && e.url) || ''
      return url ? resolve(url) : reject()
    }

    Linking.addEventListener('url', handleUrl)
    setTimeout(() => {
      if (!finished) {
        Linking.removeEventListener('url', handleUrl)
        reject()
        finished = true
      }
    }, 120 * 1000)
  })
}

export const listenForNextMessageData = () => {
  throw new Error('Not implemented on this platform.')
}