import React from 'react'

export * from './basic.stories'
export * from './bubble.stories'

export default {
  title: 'FeedBacck/Badge',
  decorators: [(story: Function) => <div>{story()}</div>],
}
