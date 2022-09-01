import React from 'react'
import Image from 'next/image'

const Widgetlg = () => {

  const Button = ({type}) =>{
    return <button className={'widgetLgButton ' +  type}>{type}</button>
  }

  return (
   <>
     <div className='widgetLg shadow-sm'>
        <h3 className="widgetLgTitle">Latest Transactions</h3>
        <table className="widgetLgtable">
        <thead className='widgetLgHead'>
          <tr className="widgetLgTr">
            <th className="widgetLgTh">Customer</th>
            <th className="widgetLgTh">Date</th>
            <th className="widgetLgTh">Amount</th>
            <th className="widgetLgTh">Status</th>
          </tr>
        </thead> 
        <tbody className='widgetLgTbo'>
            <tr className="widgetLgTr">
              <td className='widgetLgUser'>
              <Image className='customerProfile' src='https://images.pexels.com/photos/1205033/pexels-photo-1205033.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' objectFit={'cover'} width='40' height='40'  alt='adminProfile' />
              <span className="widgetLgName">Susan Carol</span>
              </td>
              <td className="widgetLgDate">30 June 2022</td>
              <td className="widgetLgAmount">₹ 2,358</td>
              <td className="widgetLgStatus"><Button type='Approved'/></td>
            </tr>
            <tr className="widgetLgTr">
              <td className='widgetLgUser'>
              <Image className='customerProfile' src='https://images.pexels.com/photos/1205033/pexels-photo-1205033.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'  objectFit={'cover'} width='40' height='40'  alt='adminProfile' />
              <span className="widgetLgName">Susan Carol</span>
              </td>
              <td className="widgetLgDate">30 June 2022</td>
              <td className="widgetLgAmount">₹ 2,358</td>
              <td className="widgetLgStatus"><Button type='Declined'/></td>
            </tr>
            <tr className="widgetLgTr">
              <td className='widgetLgUser'>
              <Image className='customerProfile' src='https://images.pexels.com/photos/1205033/pexels-photo-1205033.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' objectFit={'cover'} width='40' height='40'  alt='adminProfile' />
              <span className="widgetLgName">Susan Carol</span>
              </td>
              <td className="widgetLgDate">30 June 2022</td>
              <td className="widgetLgAmount">₹ 2,358</td>
              <td className="widgetLgStatus"><Button type='Pending'/></td>
            </tr>
            <tr className="widgetLgTr">
              <td className='widgetLgUser'>
              <Image className='customerProfile' src='https://images.pexels.com/photos/1205033/pexels-photo-1205033.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' objectFit={'cover'} width='40' height='40'  alt='adminProfile' />
              <span className="widgetLgName">Susan Carol</span>
              </td>
              <td className="widgetLgDate">30 June 2022</td>
              <td className="widgetLgAmount">₹ 2,358</td>
              <td className="widgetLgStatus"><Button type='Approved'/></td>
            </tr>
            <tr className="widgetLgTr">
              <td className='widgetLgUser'>
              <Image className='customerProfile' src='https://images.pexels.com/photos/1205033/pexels-photo-1205033.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' objectFit={'cover'} width='40' height='40'  alt='adminProfile' />
              <span className="widgetLgName">Susan Carol</span>
              </td>
              <td className="widgetLgDate">30 June 2022</td>
              <td className="widgetLgAmount">₹ 2,358</td>
              <td className="widgetLgStatus"><Button type='Pending'/></td>
            </tr>
            <tr className="widgetLgTr">
              <td className='widgetLgUser'>
              <Image className='customerProfile' src='https://images.pexels.com/photos/1205033/pexels-photo-1205033.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' objectFit={'cover'} width='40' height='40'  alt='adminProfile' />
              <span className="widgetLgName">Susan Carol</span>
              </td>
              <td className="widgetLgDate">30 June 2022</td>
              <td className="widgetLgAmount">₹ 2,358</td>
              <td className="widgetLgStatus"><Button type='Pending'/></td>
            </tr>
            <tr className="widgetLgTr">
              <td className='widgetLgUser'>
              <Image className='customerProfile' src='https://images.pexels.com/photos/1205033/pexels-photo-1205033.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' objectFit={'cover'} width='40' height='40'  alt='adminProfile' />
              <span className="widgetLgName">Susan Carol</span>
              </td>
              <td className="widgetLgDate">30 June 2022</td>
              <td className="widgetLgAmount">₹ 2,358</td>
              <td className="widgetLgStatus"><Button type='Pending'/></td>
            </tr>
            <tr className="widgetLgTr">
              <td className='widgetLgUser'>
              <Image className='customerProfile' src='https://images.pexels.com/photos/1205033/pexels-photo-1205033.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' objectFit={'cover'} width='40' height='40'  alt='adminProfile' />
              <span className="widgetLgName">Susan Carol</span>
              </td>
              <td className="widgetLgDate">30 June 2022</td>
              <td className="widgetLgAmount">₹ 2,358</td>
              <td className="widgetLgStatus"><Button type='Pending'/></td>
            </tr>
        </tbody>
        </table>
     </div>
   </> 
  )
}

export default Widgetlg