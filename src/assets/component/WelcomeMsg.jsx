import { useParams } from "react-router-dom"


const WelcomeMsg = () => {
  const {userName} =  useParams();
  return (
    <h1>Welcome{userName}</h1>
  )
}

export default WelcomeMsg