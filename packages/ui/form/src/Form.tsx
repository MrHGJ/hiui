import React, { forwardRef, useImperativeHandle, useMemo } from 'react'
import { cx, getPrefixCls } from '@hi-ui/classname'
import { __DEV__ } from '@hi-ui/env'
import { FormProvider } from './context'
import { useForm, UseFormProps } from './use-form'
import { HiBaseHTMLProps } from '@hi-ui/core'
import { FormRuleModel, FormHelpers } from './types'

const _role = 'form'
const _prefix = getPrefixCls(_role)

// form 注册表
export const FORM_REGISTER_TABLE: Record<string, FormRuleModel> = {}

/**
 * TODO: What is Form
 */
export const Form = forwardRef<HTMLFormElement | null, FormProps>(
  (
    {
      prefixCls = _prefix,
      role = _role,
      className,
      children,
      innerRef,
      labelWidth,
      labelPlacement = 'right',
      placement = 'vertical',
      verticalAlign,
      colon,
      ...rest
    },
    ref
  ) => {
    const formContext = useForm(rest)

    const { getRootProps } = formContext

    // @ts-ignore
    useImperativeHandle(innerRef, () => {
      return {
        validate: formContext.submitForm,
        reset: formContext.resetForm,
        validateField: formContext.validateFieldState,
        // validateFields: formContext.va,
        setFieldValue: formContext.setFieldValue,
        setFieldsValue: formContext.setFieldsValue,
        getFieldValue: formContext.getFieldValue,
        getFieldsValue: formContext.getFieldsValue,
        getFieldError: formContext.getFieldError,
        getFieldsError: formContext.getFieldsError,
        clearValidates: formContext.resetErrors,
      }
    })

    const providedValue = useMemo(() => {
      return {
        labelWidth,
        labelPlacement,
        colon,
        ...formContext,
        prefixCls,
      }
    }, [labelWidth, formContext, labelPlacement, colon, prefixCls])

    const cls = cx(prefixCls, className, placement && `${prefixCls}--placement-${placement}`)

    return (
      // @ts-ignore
      <FormProvider value={providedValue}>
        <form ref={ref} role={role} className={cls} {...getRootProps()}>
          {children}
        </form>
      </FormProvider>
    )
  }
)

export interface FormProps<Values = Record<string, any>>
  extends Omit<HiBaseHTMLProps<'form'>, 'onSubmit' | 'onReset'>,
    UseFormProps<Values> {
  /**
   * 提供辅助方法的内部引用
   */
  innerRef?: React.RefObject<FormHelpers<Values>>
  /**
   * label 宽度，可用任意 CSS 长度单位
   */
  labelWidth?: React.ReactText
  /**
   * label 对齐的方式
   */
  labelPlacement?: 'left' | 'right' | 'top'
  /**
   * label 和表单控件的放置方式
   */
  placement?: 'vertical' | 'horizontal'
  /**
   * 在 vertical 放置时，label 相对表单控件垂直对齐的方式
   */
  verticalAlign?: 'top' | 'center' | 'bottom'
  /**
   * 配置是否展示冒号
   */
  colon?: boolean
}

if (__DEV__) {
  Form.displayName = 'Form'
}

const formExtends = (model: FormRuleModel) => {
  // @ts-ignore
  if (typeof model.name === 'string') {
    // @ts-ignore
    FORM_REGISTER_TABLE[model.name] = model
  } else {
    if (__DEV__) {
      console.log('WARNING: the name should be unique string and not empty.')
    }
  }
}

Object.assign(Form, { extends: formExtends })