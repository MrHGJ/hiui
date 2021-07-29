
import React, { forwardRef } from 'react'
import { cx, getPrefixCls } from '@hi-ui/classname'
import { __DEV__ } from '@hi-ui/env'
import { IconProps } from '../@types/props'

const _role = 'icon-alarm-outlined'
const _prefix = getPrefixCls(_role)

export const AlarmOutlined = forwardRef<SVGSVGElement | null, IconProps>(
  ({ prefixCls = _prefix, role = _role, className, children, style, onClick }, ref) => {
    const cls = cx(prefixCls, className)

    return (
      <svg className={cls} ref={ref} role={role} style={style} onClick={onClick}  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" version="1.1"><path d="M512 84c176.732 0 320 147.746 320 330v446h60a8 8 0 0 1 8 8v64a8 8 0 0 1-8 8H132a8 8 0 0 1-8-8v-64a8 8 0 0 1 8-8h60V414c0-182.254 143.268-330 320-330z m242.424 676H269.574v100h484.85v-100zM512 164c-132.548 0-240.25 109.7-242.392 245.866l-0.034 4.134v266h484.85V414c0-136.69-106.376-247.76-238.416-249.966L512 164z" p-id="12515"></path></svg>
    )
  }
)

if (__DEV__) {
  AlarmOutlined.displayName = 'AlarmOutlined'
}
  