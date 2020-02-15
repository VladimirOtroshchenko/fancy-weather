import React from 'react';
import './Main.scss';

function Main() {
  return (
    <div className='main'>
      <div className='main__weather'>
        <div className='main__weather__place'>
          city, country
        </div>
        <div className='main__weather__date'>
          <p>{new Date().toDateString()}</p>
        </div>
        <div className='main__weather__current-weather'>
          <div className='main__weather__current-weather--temperature'>
            current temp
          </div>
          <div className='main__weather__current-weather--description'>
            rainy <br />
            feels like <br />
            qwdqwdqd <br />
          </div>
        </div>
        <div className='main__weather__three-days-forecast'>
          <div className='main__weather__three-days-forecast__first'>
            tomorrow
          </div>
          <div className='main__weather__three-days-forecast__second'>
            tomorrow
          </div>
          <div className='main__weather__three-days-forecast__third'>
            tomorrow
          </div>
        </div>
      </div>
      <div className='main__map'>
        <div className='main__map__coords'>
          lat <br />
          long
        </div>
        <div className='main__map--map'>
        
        </div>
      </div>
    </div>
  )
}

export default Main;