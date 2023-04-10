import React from 'react'
import Button from '../../common/styles/Button';
import "./topfold.css";

const TopFold = () => {
  return (
    <div className='topfold absolute-center'>
      <div className='tf-left'>
        <div className='tf-heading'>Discover collect, & sell <span className='heading-gradient'>Extraordinary</span>NFTs
        </div>
        <div className='tf-description'>Please make sure that you are buying and selling the most trending NFTs out there.</div>
        <div className='tf-left-btns'>
        <Button btnType="PRIMARY" btnText="EXPLORE"/>
        <Button btnType="SECONDARY" btnText="Create" customClass="tf-left-secondary-btn"/>
      </div>
      <div className='tf-left-infoStats'>
        <div className='tf-is-infoItem absolute-center'>
          <div className='tf-infoItem-count'>200k+</div>
          <div className='tf-infoItem-label'>Collections</div>
        </div>
        <div className='tf-is-infoItem absolute-center'>
          <div className='tf-infoItem-count'>10k+</div>
          <div className='tf-infoItem-label'>Artists</div>
        </div>
        <div className='tf-is-infoItem absolute-center'>
          <div className='tf-infoItem-count'>423k+</div>
          <div className='tf-infoItem-label'>Community</div>
        </div>

      </div>
      </div>
      <div className='tf-right'>
        <div className='tf-r-bg-blob'></div>
        <div className='tf-right-diamond'>
          <div className='tf-r-diamond-item absolute-center'>
            <img className='tf-r-diamond-img'alt="diamond-banner" src="https://i.seadn.io/gcs/files/c3a312c53514642e8041c65e10b40a52.gif?auto=format&w=256"/>
          </div>
          <div className='tf-r-diamond-item absolute-center'>
            <img className='tf-r-diamond-img'alt="diamond-banner" src="https://i.seadn.io/gcs/files/3b814f7eb68a7db1df38408de1c77f4f.gif?auto=format&w=256"/>
          </div>
          <div className='tf-r-diamond-item absolute-center'>
            <img className='tf-r-diamond-img'alt="diamond-banner" src="https://i.seadn.io/gcs/files/543630193cf32ac09c0356e767d2891e.gif?auto=format&w=256"/>
          </div>
          <div className='tf-r-diamond-item absolute-center'>
            <img className='tf-r-diamond-img'alt="diamond-banner" src="https://i.seadn.io/gae/haWoKnUUHLzb4Is-u7wVqhh7uUSFD92oPEaj91Gkul-_3Y0wHXX8T_f5hjaWTwdNH5DyD-8LE9lZGdq0Ghdo_aEu2ftjZcBnCLiMvkg?auto=format&w=512"/>
          </div>
        </div>
      </div>
    </div>
    
  )
}

export default TopFold