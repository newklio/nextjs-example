import { ApolloClient, InMemoryCache } from '@apollo/client'

const client = new ApolloClient({
	uri: 'http://kfa-server:4000',
	cache: new InMemoryCache(),
})
export default client
