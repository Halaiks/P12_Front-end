import { useState, useRef, useEffect, useCallback } from "react"
function Select({ options, value, onChange, placeholder }) {

  const [isOpen, setIsOpen] = useState(false)

      const [highlightedIndex, setHighlightedIndex] = useState(0)

    const selectRef = useRef(null)
    const optionRefs = useRef([])

    useEffect(() => {

  if (isOpen && optionRefs.current[highlightedIndex]) {

    optionRefs.current[highlightedIndex].scrollIntoView({
      block: "nearest"
    })

  }

}, [highlightedIndex, isOpen])

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (selectRef.current && !selectRef.current.contains(event.target)) {
                setIsOpen(false)
            }
        }

        document.addEventListener("mousedown", handleClickOutside)

        return () => {
            document.removeEventListener("mousedown", handleClickOutside)
        }   
    },[])

const handleSelect = useCallback((option) => {
    onChange(option)
    setIsOpen(false)
}, [onChange]) 
    useEffect(() => {
        if (isOpen) {
            const handleKeyDown = (event) => {
                if (event.key === "ArrowDown") {
                    setHighlightedIndex((prevIndex) =>
                        prevIndex < options.length - 1 ? prevIndex + 1 : 0
                    )
                } else if (event.key === "ArrowUp") {
                    setHighlightedIndex((prevIndex) =>
                        prevIndex > 0 ? prevIndex - 1 : options.length - 1
                    )
                } else if (event.key === "Enter") {
    handleSelect(options[highlightedIndex])
} else if (event.key === "Escape") {
    setIsOpen(false)
}
                
            }

            document.addEventListener("keydown", handleKeyDown)

            return () => {
                document.removeEventListener("keydown", handleKeyDown)
            }
        }   
    }, [isOpen, highlightedIndex, options, onChange, handleSelect])


  return (
    <div style={containerStyle} ref={selectRef}>

        <div
  style={selectStyle}
  onClick={() => {
    setIsOpen((prev) => !prev)
    setHighlightedIndex(0)
  }}
>    
        {value ? value.label : placeholder}
      </div>

      {isOpen && (
        <ul style={dropdownStyle}>
            {options.map((option, index) => (
            <li
            ref={(el) => (optionRefs.current[index] = el)}
              key={option.value}
                style={{
                ...optionStyle,
                backgroundColor: index === highlightedIndex ? "#f0f0f0" : "white"
                }}
              onClick={() => handleSelect(option)}
            >
              {option.label}
            </li>
          ))}
        </ul>
      )}

    </div>
  )
}

const containerStyle = {
  position: "relative",
  width: "200px",
  marginBottom: "10px"
}

const selectStyle = {
  border: "1px solid #ccc",
  padding: "10px",
  cursor: "pointer",
  backgroundColor: "white"
}

const dropdownStyle = {
  position: "absolute",
  top: "100%",
  left: 0,
  right: 0,
  border: "1px solid #ccc",
  backgroundColor: "white",
  listStyle: "none",
  padding: 0,
  margin: 0,
  maxHeight: "200px",
  overflowY: "auto",
  zIndex: 1000
}

const optionStyle = {
  padding: "10px",
  cursor: "pointer"
}

export default Select