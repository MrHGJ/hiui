import React from 'react'

export * from './basic.stories'
export * from './controlled.stories'

export default {
  title: 'Radio',
  decorators: [(story: Function) => <div>{story()}</div>],
}
