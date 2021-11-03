import React from 'react'
import Rquery from './Rquery'
import Rformik from './Rformik'
import Rtabs from './Rtabs'
import Raxios from './Raxios'

import {useQuery, QueryClient, QueryClientProvider} from 'react-query';


export default function ExternalLib(){
  const queryClient = new QueryClient();
return(
  <React.Fragment>
    <Raxios />
    <hr />
    <QueryClientProvider client={queryClient}>
      <Rquery />
    </QueryClientProvider>
    <hr />
    <Rformik />
    <hr />
    <Rtabs />
    <hr />
    
  </React.Fragment>
)
}