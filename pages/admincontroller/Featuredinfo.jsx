import React from 'react'
import {ArrowDownward, ArrowUpward} from '@material-ui/icons'

const Featuredinfo = () => {
  return (
    <>
    <div className='featured'>
        <div className='featureditem shadow-sm'>
            <span className="fetauredcontainertitle">Revenue</span>
            <div className='featuredmoneycontainer'>
                <span className="featuremoney">₹ 2,415</span>
                <span className="featuremoneyrate">-11.245 <ArrowDownward className='featuredIcon negative' /> </span>
            </div>
            <span className="featuresub">Compare To Last Month</span>
        </div>
        <div className='featureditem shadow-sm'>
            <span className="fetauredcontainertitle">Sales</span>
            <div className='featuredmoneycontainer'>
                <span className="featuremoney">₹ 4,415</span>
                <span className="featuremoneyrate">-1.245 <ArrowDownward className='featuredIcon negative' /> </span>
            </div>
            <span className="featuresub">Compare To Last Month</span>
        </div>
        <div className='featureditem shadow-sm'>
            <span className="fetauredcontainertitle">Cost</span>
            <div className='featuredmoneycontainer'>
                <span className="featuremoney">₹ 2,415</span>
                <span className="featuremoneyrate">+2.245 <ArrowUpward className='featuredIcon' /> </span>
            </div>
            <span className="featuresub">Compare To Last Month</span>
        </div>
    </div>
        
    </>
  )
}

export default Featuredinfo