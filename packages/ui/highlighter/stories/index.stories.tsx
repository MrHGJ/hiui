import React from 'react'

export * from './basic.stories'

export default {
  title: 'Private/Highlighter',
  decorators: [(story: Function) => <div>{story()}</div>],
}
