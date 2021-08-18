import React from 'react'

export * from './basic.stories'
export * from './search.stories'
export * from './embed.stories'
export * from './flatted.stories'
export * from './nowrap.stories'
export * from './dynamic.stories'

export default {
  title: 'CheckCascader',
  decorators: [(story: Function) => <div>{story()}</div>],
}