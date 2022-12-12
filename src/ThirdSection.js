import { useState } from 'react'
import { motion } from 'framer-motion'
import svg4 from './SVG/svg4.png'

export default function ThirdSection() {
  const [actionLog, setActionLog] = useState([])

  const handleOnTapStart = (event, info) => {
    handleAction({
      event,
      info,
      type: 'onTapStart'
    })
  }

  const handleOnTap = (event, info) => {
    handleAction({
      event,
      info,
      type: 'onTap'
    })
  }

  const handleOnDragStart = (event, info) => {
    handleAction({
      event,
      info,
      type: 'onDragStart'
    })
  }

  const handleOnDrag = (event, info) => {
    handleAction({
      event,
      info,
      type: 'onDrag'
    })
  }

  const handleOnDragEnd = (event, info) => {
    handleAction({
      event,
      info,
      type: 'onDragEnd'
    })
  }

  const handleAction = ({ event, info, type, delay = 100 }) => {
    setTimeout(() => {
      setActionLog(oldArray => [...oldArray, { type: type, info }])
    }, delay)
  }

  return (
    <section className="thirdSection">
      <div className="thirdSection-main">
        <div className="thirdSection-container">
          <h1>Complex events</h1>
          <h1 className="gestures-title">and gestures.</h1>
          <p>
            Framer Motion offers more advanced listeners and also extends the
            basic set of React event listeners.
          </p>
          <a href="#">Read the documentation</a>
          <img src={svg4}></img>
        </div>
        <div className="gestures-container">
          <div className="gestures-preview">
            <motion.div
              className="gestures-circle"
              drag
              dragConstraints={{
                right: 150,
                left: -150,
                top: -150,
                bottom: 150,
              }}
              whileHover={{ scale: 1 }}
              whileTap={{ scale: 0.9, cursor: 'grabbing' }}
              onTapStart={handleOnTapStart}
              onTap={handleOnTap}
              onDragStart={handleOnDragStart}
              onDrag={handleOnDrag}
              onDragEnd={handleOnDragEnd}
            ></motion.div>
            <motion.p whileHover={{ opacity: 0.6 }} className="drag-explainer">
              Tap and drag the circle.
            </motion.p>
          </div>

          <div className="gestures-console">
            {actionLog.reverse().map((item, index) => {
              return (
                <div className="gesture-console-row" key={index}>
                  <p>
                    <span>{item.type}&nbsp;</span>
                    <small>Point: {JSON.stringify(item.info.point)}</small>

                    {item.type === 'onDrag' ? <small>, Delta: {JSON.stringify(item.info.delta)}</small> : null}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

