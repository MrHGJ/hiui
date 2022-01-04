import React from 'react'

export * from './status.stories'
export * from './line.stories'
export * from './link.stories'
export * from './size.stories'
export * from './icon.stories'
export * from './loading.stories'
export * from './disabled.stories'
export * from './group.stories'
export * from './shape.stories'

export default {
  title: 'Basic/Button',
  decorators: [(story: Function) => <div>{story()}</div>],
}
