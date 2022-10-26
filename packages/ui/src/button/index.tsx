import type { ReactNode } from 'react'
import cn from 'classnames'
import './index.css'

interface ButtonPropsType {
  theme?: string
  block?: boolean
  children: ReactNode
}

function Button(props: ButtonPropsType) {
  const { theme, block, children } = props

  const classname = cn('ui-button-base', theme, {
    block
  })

  return <button className={classname} type="button">{children}</button>
}

Button.defaultProps = {
  theme: 'default',
  block: false
}

export default Button
