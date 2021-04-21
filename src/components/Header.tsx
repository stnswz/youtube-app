import { useState, KeyboardEvent } from 'react'

interface IHeaderProps {
  inputKeyPress: (s: string) => void,
}

function Header({ inputKeyPress }: IHeaderProps) {
  const [inputText, setInputText] = useState('')

  const onKeyPress = (ev:KeyboardEvent) => {
    if( ev.key === "Enter") {
      inputKeyPress(inputText)
    }
  }

  return (
    <header data-testid="header">
      <img src="./images/logo.png" alt="" className="logo" />
      <input type="text" className="text-input" value={inputText} onChange={(e) => setInputText(e.target.value)} onKeyPress={onKeyPress} data-testid="q-input" />
    </header>
  )
}

export default Header
