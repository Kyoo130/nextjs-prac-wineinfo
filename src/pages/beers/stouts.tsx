import type { NextPage } from "next";
import { Error, Loading } from "../../components";
import { BeerCard } from "../../components/BeerCard";
import {useBeerData} from "../../hooks/useBeerData";
import {Beer} from "../../types/Beer"

const StoutsPage: NextPage = () => {
  const name = 'stouts';
  const { data, error } = useBeerData(name)

  if(error) return <Error />
  if(!data) return <Loading />

  return (
    <div>
      <h1>StoutsPage</h1>
      <main>
      {data.map((beerData: Beer) => {
          return (
            <BeerCard 
              key={`stouts-beer-list-${beerData.id}`} 
              beerData={beerData}
            />
          )
        })}
      </main>
    </div>
  )
}

export default StoutsPage;