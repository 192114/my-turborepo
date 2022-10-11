import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Loading from '../components/Loading'

function Login() {
  const navigate = useNavigate()

  const [count, setCount] = useState(10)

  useEffect(() => {
    if (count > 10) {
      return
    }
    setCount(pre => pre + 1)
  }, [count])

  return (
    <div>
      <a href="##">{count}</a>

      <button type="button" onClick={() => navigate('/')}>
        登录
      </button>

      <Loading />
    </div>
  )
}

export default Login
