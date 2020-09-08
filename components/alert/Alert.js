import React, { Component } from 'react'
import classNames from 'classnames'
import Icon from '../icon'
import './style/index'
class Alert extends Component {
  constructor (props) {
    super(props)
    this.state = { visible: true }
  }
  componentDidMount () {
    if (this.props.duration !== null) {
      window.setTimeout(() => {
        this.handleClose()
      }, this.props.duration)
    }
  }
  handleClose () {
    this.setState({ visible: false })
    this.props.onClose && this.props.onClose()
  }
  render () {
    let classnames = classNames(
      this.props.prefixCls,
      this.state.visible,
      this.props.type,
      `theme__${this.props.theme}`,
      {
        noTitle: !this.props.title
      }
    )

    let type = this.props.type

    switch (type) {
      case 'warning':
        type = 'exclamation-circle'
        break
      case 'error':
        type = 'close-circle'
        break
      case 'success':
        type = 'check-circle'
        break
      default:
        type = 'info-circle'
    }

    return (
      this.state.visible && (
        <div className={classnames}>
          <div className='hi-icon__title'>
            <Icon name={type} filled style={{ fontSize: '18px' }} />
            {this.props.title && <div className='text-title'>{this.props.title}</div>}
          </div>
          {this.props.content && <div className='text-message'>{this.props.content}</div>}
          {this.props.closeable && (
            <div className='close-btn icon-img-delete' onClick={this.handleClose.bind(this)}>
              <i className='hi-icon icon-close' />
            </div>
          )}
        </div>
      )
    )
  }
}

Alert.defaultProps = {
  prefixCls: 'hi-alert',
  type: 'info',
  closeable: true,
  duration: null
}

export default Alert
