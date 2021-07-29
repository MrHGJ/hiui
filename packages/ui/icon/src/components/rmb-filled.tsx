
import React, { forwardRef } from 'react'
import { cx, getPrefixCls } from '@hi-ui/classname'
import { __DEV__ } from '@hi-ui/env'
import { IconProps } from '../@types/props'

const _role = 'icon-rmb-filled'
const _prefix = getPrefixCls(_role)

export const RmbFilled = forwardRef<SVGSVGElement | null, IconProps>(
  ({ prefixCls = _prefix, role = _role, className, children, style, onClick }, ref) => {
    const cls = cx(prefixCls, className)

    return (
      <svg className={cls} ref={ref} role={role} style={style} onClick={onClick}  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" version="1.1"><path d="M512 64c247.424 0 448 200.576 448 448S759.424 960 512 960 64 759.424 64 512 264.576 64 512 64z m112.618 237.354a8 8 0 0 0-10.996 0.302l-100.698 100.7-100.7-100.7a8 8 0 0 0-11.312 0l-45.256 45.256a8 8 0 0 0 0 11.314L437.432 440H340a8 8 0 0 0-8 8v64a8 8 0 0 0 8 8h132v50h-132a8 8 0 0 0-8 8v64a8 8 0 0 0 8 8h131.998l0.002 90a8 8 0 0 0 8 8h64a8 8 0 0 0 8-8l-0.002-90H684a8 8 0 0 0 8-8v-64a8 8 0 0 0-8-8h-132v-50h132a8 8 0 0 0 8-8v-64a8 8 0 0 0-8-8h-95.586l81.776-81.774 0.302-0.32a8 8 0 0 0-0.3-10.994l-45.256-45.256z" p-id="11975"></path></svg>
    )
  }
)

if (__DEV__) {
  RmbFilled.displayName = 'RmbFilled'
}
  