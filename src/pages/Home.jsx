import { Link } from "react-router-dom";
import { templates } from "../utils/constants";

export default function Home() {
  return (
    <div>
      {templates.map(t => (
        <Link key={t.id} to={`/build?template=${t.unique_id}`}>{t.name}</Link>
      ))}
    </div>
  )
}