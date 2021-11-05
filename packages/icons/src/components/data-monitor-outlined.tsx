
import React, { forwardRef } from 'react'
import { cx, getPrefixCls } from '@hi-ui/classname'
import { __DEV__ } from '@hi-ui/env'
import { IconProps } from '../@types/props'

const _role = 'icon-data-monitor-outlined'
const _prefix = getPrefixCls(_role)

export const DataMonitorOutlined = forwardRef<SVGSVGElement | null, IconProps>(
  ({ prefixCls = _prefix, role = _role, className, children, style, onClick }, ref) => {
    const cls = cx(prefixCls, className)

    return (
      <svg className={cls} ref={ref} role={role} style={style} onClick={onClick}  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" version="1.1"><path d="M936 120a16 16 0 0 1 16 16v576a16 16 0 0 1-16 16H552v96h208a8 8 0 0 1 8 8v64a8 8 0 0 1-8 8H264a8 8 0 0 1-8-8v-64a8 8 0 0 1 8-8l208-0.002V728H88a16 16 0 0 1-16-16V136a16 16 0 0 1 16-16h848z m-64 80H152v448h720V200z m-123.912 85.82l41.918 48.36a8 8 0 0 1-0.806 11.286L566 538.922a8 8 0 0 1-10.992-0.488l-111.128-115.018-152.4 124.284a8 8 0 0 1-10.97-0.81l-0.286-0.332-40.448-49.6a8 8 0 0 1 1.144-11.256l203.696-166.112a8 8 0 0 1 10.808 0.64l109.722 113.564 171.658-148.78a8 8 0 0 1 11.284 0.804z" p-id="12695"></path></svg>
    )
  }
)

if (__DEV__) {
  DataMonitorOutlined.displayName = 'DataMonitorOutlined'
}
  