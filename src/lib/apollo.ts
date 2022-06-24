import { ApolloClient, InMemoryCache } from '@apollo/client'

export const client = new ApolloClient({
  uri: 'https://api-us-west-2.graphcms.com/v2/cl4sgokpm22w601z1db1w51ed/master',
  cache: new InMemoryCache()
})
