import React from 'react'

export * from './basic.stories'
export * from './close.stories'
export * from './auto-close.stories'

export default {
  title: 'FeedBacck/Notification',
  decorators: [(story: Function) => <div>{story()}</div>],
}
