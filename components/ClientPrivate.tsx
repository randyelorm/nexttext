'use client'

import {useEffect, useState} from 'react'
import { createClient} from '@/utils/supabase/Client'
import { useRouter } from 'next/navigation'

const ClientRoute = () => {
    const [user, SetUser]= useState(null)
    const route = useRouter()
    


    useEffect(() => {
        async function getUser() {
            const supabse = createClient()
            const {data, error} = await supabse.auth.getUser()
            if (error || !data?.user) {
              route.push('/login')
            } else {
                console.log(data?.user)
            }
        }

        getUser()
    }, []);

  return (
    <div>
      client
    </div>
  )
}

export default ClientRoute
