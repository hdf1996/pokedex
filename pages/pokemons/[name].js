import { useRouter } from 'next/router'

import PokemonDetail from '../../components/PokemonDetail'

const Show = () => {
  const router = useRouter()
  if(router.query.name) return <PokemonDetail name={router.query.name}/>
  return 'Loading...'
}

export default Show;
