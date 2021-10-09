export default function ToggleSwitch({ id }) {
  return (
    <div className="toggleSwitch">
      <input type="checkbox" hidden className="toggleSwitch__input" id={id} />
      <label className="toggleSwitch__label" htmlFor={id} />
    </div>   
  )
}