
import React, { forwardRef } from 'react'
import { cx, getPrefixCls } from '@hi-ui/classname'
import { __DEV__ } from '@hi-ui/env'
import { IconProps } from '../@types/props'

const _role = 'icon-file-music-outlined'
const _prefix = getPrefixCls(_role)

export const FileMusicOutlined = forwardRef<SVGSVGElement | null, IconProps>(
  ({ prefixCls = _prefix, role = _role, className, children, style, onClick }, ref) => {
    const cls = cx(prefixCls, className)

    return (
      <svg className={cls} ref={ref} role={role} style={style} onClick={onClick}  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" version="1.1"><path d="M764 304l-132-132v132h132zM552 144H232v736h560V384H560a8 8 0 0 1-8-8V144z m320 160v648a8 8 0 0 1-8 8H160a8 8 0 0 1-8-8V72a8 8 0 0 1 8-8h472l240 240zM479.06 788.612c30.664-17.704 48.854-47.476 50.036-76.33 0.118-0.482 0.072-0.986 0.072-1.5v-191.83H672A103.024 103.024 0 0 0 579.852 462H500.92v192.79c-25.928-17.974-64.914-18.782-98.7 0.724-44.106 25.464-62.658 75.9-41.438 112.654 21.22 36.754 74.174 45.906 118.28 20.444z" p-id="11395"></path></svg>
    )
  }
)

if (__DEV__) {
  FileMusicOutlined.displayName = 'FileMusicOutlined'
}
  