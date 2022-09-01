import '../styles/globals.css'
import '../styles/admintopbar.css'
import '../styles/adminsidebar.css'
import '../styles/admin.css'
import '../styles/adminhome.css'
import '../styles/adminfeaturedinfo.css'
import '../styles/adminchart.css'
import '../styles/widgetsm.css'
import '../styles/widgetlg.css'
import '../styles/adminuserlist.css'
import '../styles/adminproducts.css'
import '../styles/home.css'
import '../styles/products.css';
import '../styles/userregistration.css'
import '../styles/cart.css'
import '../styles/mediaqueries.css'


import Layout from '../components/Layout'
 
let admin = false;

function MyApp({ Component, pageProps }) {
  
  if(admin){
   return <Component {...pageProps} />
  }else{
    return  <Layout> <Component {...pageProps} /></Layout>
  }

}

export default MyApp
