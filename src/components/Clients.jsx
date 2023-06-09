import React from 'react'
import styles from '../style'
import { clients } from '../constants'

const Clients = () => (
  <section className={`${styles.flexCenter} my-4`}>
    <div className={`${styles.flexCenter} flex-wrap w-full`}>
      {clients.map((client) => (
        <div key={client.id} className={`flex-1 ${styles.flexCenter} sm:min-w-[182px] min-w-[110px] mt-4`}>
          <img src={client.logo} alt='client' className='sm:w-[182px] w-[90px] object-contain'/>
        </div>
      ))}
    </div>      
  </section>
)


export default Clients
