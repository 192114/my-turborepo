import './index.css'

interface ButtonPropsType {
  theme: string
  block: boolean
}

const defaultProps: ButtonPropsType = {
  theme: 'default',
  block: false,
}

export default function Button() {



  return <button className="ui-button-base default" type="button">Boop</button>
}
