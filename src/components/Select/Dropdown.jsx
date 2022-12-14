import "./ListItem.css"

const checkTicket = (
  <svg width="12" height="10" viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M4.66279 9.15423C4.55371 9.2639 4.40496 9.32515 4.25038 9.32515C4.09579 9.32515 3.94704 9.2639 3.83796 9.15423L0.544461 5.86014C0.202628 5.51831 0.202628 4.96414 0.544461 4.62289L0.956877 4.21048C1.29871 3.86864 1.85229 3.86864 2.19413 4.21048L4.25038 6.26673L9.80662 0.710477C10.1485 0.368643 10.7026 0.368643 11.0439 0.710477L11.4563 1.12289C11.7981 1.46473 11.7981 2.01889 11.4563 2.36014L4.66279 9.15423Z"
      fill="#4C4C51"
    />
  </svg>
)

function Dropdown({ subjects, value, setValue, isDropdownVisible, setIsDropdownVisible, setIsEmpty }) {
  return (
    <>
      {isDropdownVisible && (
        <div className="dropdownMenu">
          {subjects
            .map((subject) => (
              <button
                className={`dropdown-button ${value.id === subject.id ? "checked" : ""}`}
                onClick={() => {
                  setValue(subject)
                  setIsDropdownVisible(!isDropdownVisible)
                  setIsEmpty(false)
                }}
                key={subject.id}
              >
                {subject.text}
                {value.id === subject.id ? checkTicket : ""}
              </button>
            ))
            .slice(1, -1)}
          <div
            className={`dropdownBackground ${isDropdownVisible ? "" : "is-hidden"}`}
            onClick={() => {
              setIsDropdownVisible(false)
            }}
          ></div>
        </div>
      )}
    </>
  )
}
export default Dropdown
