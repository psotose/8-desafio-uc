import { useEffect, useState } from 'react';
import  ipResult  from '../services/ipifyApi';

const IpSection = () => {
  const [ip, setIp] = useState(null)

  useEffect(() => {
    ipResult(setIp)
  }, [])
  
  return (
    <div className='ip-section'>
      { ip ?
        <p className='ip-section__p'>Gracias por conectarte desde la ip: { ip }</p>
        :
        <p className='ip-section__p'> ups! No hemos detectado tu ip </p>
      }
    </div>
  )
}

export default IpSection;