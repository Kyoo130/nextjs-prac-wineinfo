import type { NextPage } from "next";
import { Error, Loading } from "../../components";
import { BeerCard } from "../../components/BeerCard";
import {useBeerData} from "../../hooks/useBeerData";
import {Beer} from "../../types/Beer"

const AlePage: NextPage = () => {
  const name = 'ale';
  const { data, error } = useBeerData(name)

  if(error) return <Error />
  if(!data) return <Loading />

  return (
    <div>
      <h1>AlePage</h1>
      <main>
      {data.map((beerData: Beer) => {
          return (
            <BeerCard 
              key={`port-beer-list-${beerData.id}`} 
              beerData={beerData}
            />
          )
        })}
      </main>
    </div>
  )
}

export default AlePage;