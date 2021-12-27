
import React, { forwardRef } from 'react'
import { cx, getPrefixCls } from '@hi-ui/classname'
import { __DEV__ } from '@hi-ui/env'
import { IconProps } from '../../@types/props'

const _role = 'icon-qr-code-outlined'
const _prefix = getPrefixCls(_role)

export const QrCodeOutlined = forwardRef<SVGSVGElement | null, IconProps>(
  ({ prefixCls = _prefix, role = _role, className, children, style, onClick }, ref) => {
    const cls = cx(prefixCls, className)

    return (
      <svg className={cls} ref={ref} role={role} style={style} onClick={onClick}  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" version="1.1"><path d="M341.333333 554.666667a128 128 0 0 1 128 128v106.666666a128 128 0 0 1-128 128h-106.666666a128 128 0 0 1-128-128v-106.666666a128 128 0 0 1 128-128h106.666666z m277.333334 128a42.666667 42.666667 0 0 1 42.666666 42.666666v149.333334a42.666667 42.666667 0 1 1-85.333333 0v-149.333334a42.666667 42.666667 0 0 1 42.666667-42.666666z m128-64a42.666667 42.666667 0 0 1 42.666666 42.666666v213.333334a42.666667 42.666667 0 1 1-85.333333 0V661.333333a42.666667 42.666667 0 0 1 42.666667-42.666666z m128-64a42.666667 42.666667 0 0 1 42.666666 42.666666v277.333334a42.666667 42.666667 0 1 1-85.333333 0V597.333333a42.666667 42.666667 0 0 1 42.666667-42.666666z m-533.333334 85.333333h-106.666666a42.666667 42.666667 0 0 0-42.56 39.466667L192 682.666667v106.666666a42.666667 42.666667 0 0 0 39.466667 42.56L234.666667 832h106.666666a42.666667 42.666667 0 0 0 42.56-39.466667L384 789.333333v-106.666666a42.666667 42.666667 0 0 0-39.466667-42.56L341.333333 640z m-42.666666 64a21.333333 21.333333 0 0 1 21.333333 21.333333v21.333334a21.333333 21.333333 0 0 1-21.333333 21.333333h-21.333334a21.333333 21.333333 0 0 1-21.333333-21.333333v-21.333334a21.333333 21.333333 0 0 1 21.333333-21.333333h21.333334z m42.666666-597.333333a128 128 0 0 1 128 128v106.666666a128 128 0 0 1-128 128h-106.666666a128 128 0 0 1-128-128v-106.666666a128 128 0 0 1 128-128h106.666666z m448 0a128 128 0 0 1 128 128v106.666666a128 128 0 0 1-128 128h-106.666666a128 128 0 0 1-128-128v-106.666666a128 128 0 0 1 128-128h106.666666zM341.333333 192h-106.666666a42.666667 42.666667 0 0 0-42.56 39.466667L192 234.666667v106.666666a42.666667 42.666667 0 0 0 39.466667 42.56L234.666667 384h106.666666a42.666667 42.666667 0 0 0 42.56-39.466667L384 341.333333v-106.666666a42.666667 42.666667 0 0 0-39.466667-42.56L341.333333 192z m448 0h-106.666666a42.666667 42.666667 0 0 0-42.56 39.466667L640 234.666667v106.666666a42.666667 42.666667 0 0 0 39.466667 42.56L682.666667 384h106.666666a42.666667 42.666667 0 0 0 42.56-39.466667L832 341.333333v-106.666666a42.666667 42.666667 0 0 0-39.466667-42.56L789.333333 192z m-490.666666 64a21.333333 21.333333 0 0 1 21.333333 21.333333v21.333334a21.333333 21.333333 0 0 1-21.333333 21.333333h-21.333334a21.333333 21.333333 0 0 1-21.333333-21.333333v-21.333334a21.333333 21.333333 0 0 1 21.333333-21.333333h21.333334z m448 0a21.333333 21.333333 0 0 1 21.333333 21.333333v21.333334a21.333333 21.333333 0 0 1-21.333333 21.333333h-21.333334a21.333333 21.333333 0 0 1-21.333333-21.333333v-21.333334a21.333333 21.333333 0 0 1 21.333333-21.333333h21.333334z" p-id="38865"></path></svg>
    )
  }
)

if (__DEV__) {
  QrCodeOutlined.displayName = 'QrCodeOutlined'
}
  