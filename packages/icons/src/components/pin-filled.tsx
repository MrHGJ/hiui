
import React, { forwardRef } from 'react'
import { cx, getPrefixCls } from '@hi-ui/classname'
import { __DEV__ } from '@hi-ui/env'
import { IconProps } from '../@types/props'

const _role = 'icon-pin-filled'
const _prefix = getPrefixCls(_role)

export const PinFilled = forwardRef<SVGSVGElement | null, IconProps>(
  ({ prefixCls = _prefix, role = _role, className, children, style, onClick }, ref) => {
    const cls = cx(prefixCls, className)

    return (
      <svg className={cls} ref={ref} role={role} style={style} onClick={onClick}  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" version="1.1"><path d="M969.804 382.294a8 8 0 0 1 0 11.314l-192.334 192.334 65.054 65.052a8 8 0 0 1 0 11.314l-158.392 158.392a8 8 0 0 1-11.314 0L466.344 614.226 172.186 908.38a8 8 0 0 1-11.312 0l-45.256-45.256a8 8 0 0 1 0-11.312l294.156-294.158L203.3 351.182a8 8 0 0 1 0-11.314l158.392-158.392a8 8 0 0 1 11.314 0l65.052 65.054 192.334-192.334a8 8 0 0 1 11.314 0l328.098 328.1z" p-id="11985"></path></svg>
    )
  }
)

if (__DEV__) {
  PinFilled.displayName = 'PinFilled'
}
  