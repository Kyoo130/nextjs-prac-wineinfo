import { Wine } from "../types/Wine";

interface WineProps {
  wineData: Wine
}

export const WineCard = ({ wineData }: WineProps) => {
  const { wine, winery } = wineData;

  return (
    <div>
      <h2>{wine}</h2>
      <p>{winery}</p>
    </div>
  )
}