import type { NextPage } from "next";
import { Error, Loading, WineCard } from "../../components";
import { useWineData } from "../../hooks/useWineData";
import { Wine } from "../../types/Wine";

const RoseWinePage: NextPage = () => {
  const name = 'rose';
  const { data, error } = useWineData(name)

  if(error) return <Error />
  if(!data) return <Loading />

  return (
    <div>
      <h1>RoseWinePage</h1>
      <main>
        {data.map((wineData: Wine) => {
          return (
            <WineCard 
              key={`port-wine-list-${wineData.id}`} 
              wineData={wineData}
            />
          )
        })}
      </main>
    </div>
  )
}

export default RoseWinePage;