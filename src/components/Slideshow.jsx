import React, { useEffect, useState } from 'react'

const Slideshow = ({Picture1, Picture2, Picture3, Picture4}) => {
  const [loops, setLoops] = useState(0)
  const slides = [Picture1, Picture2, Picture3, Picture4]

  const handleSlide = (inx) => {
    setLoops(inx)
  }
  const handleLoops = () => {
    setLoops(coin => (coin + 1)%4)
  }
  useEffect(() => {
    const lmao = setInterval(handleLoops, 2000)
    return () => {
      clearInterval(lmao)
    }
  }, [loops])

  return (
    <div>
      <div className='slideshow-slides'>
        {
          slides.map((picture, inx) => {
            const style = {
              marginLeft: `${inx === 0 ? (0 - loops*100) : 0}%`
            }
            return <img src={picture} key={inx} alt='posts' className='slideshow-slide' style={style}/>
          })
        }
      </div>
      <div className='slideshow-btns'>
        {
          slides.map((picture, inx) => <span key={inx} className='slideshow-btn slideshow-btn-size' onClick={() => handleSlide(inx)}></span>)
        }
      </div>
    </div>
  )
}

export default Slideshow