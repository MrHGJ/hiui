
import React, { forwardRef } from 'react'
import { cx, getPrefixCls } from '@hi-ui/classname'
import { __DEV__ } from '@hi-ui/env'
import { IconProps } from '../@types/props'

const _role = 'icon-shopping-filled'
const _prefix = getPrefixCls(_role)

export const ShoppingFilled = forwardRef<SVGSVGElement | null, IconProps>(
  ({ prefixCls = _prefix, role = _role, className, children, style, onClick }, ref) => {
    const cls = cx(prefixCls, className)

    return (
      <svg className={cls} ref={ref} role={role} style={style} onClick={onClick}  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" version="1.1"><path d="M122 308a8 8 0 0 1 8-8h764a8 8 0 0 1 8 8v648a8 8 0 0 1-8 8H130a8 8 0 0 1-8-8V308zM512 60c132.548 0 240 107.452 240 240h-80c0-88.366-71.634-160-160-160s-160 71.634-160 160h-80c0-132.548 107.452-240 240-240z" p-id="11465"></path></svg>
    )
  }
)

if (__DEV__) {
  ShoppingFilled.displayName = 'ShoppingFilled'
}
  