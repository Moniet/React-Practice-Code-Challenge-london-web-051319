import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

const SushiContainer = ({ sushis, selectFour, eatSushi, eatenSushis }) => {
  return (
    <Fragment>
      <div className="belt">
        { sushis
          ? sushis.map(sushi =>
              <Sushi
                id={ sushi.id }
                name={ sushi.name }
                img={ sushi.img_url }
                price={ sushi.price }
                eatSushi={ eatSushi }
                eaten={ eatenSushis.includes(sushi.id) }
              />)
          : ''
        }
        <MoreButton selectFour={ selectFour }/>
      </div>
    </Fragment>
  )
}

export default SushiContainer
