import { KeyboardEvent, ChangeEvent } from 'react'

interface IHeaderProps {
  inputText:string,
  onChange: (ev:ChangeEvent<HTMLInputElement>) => void,
  onKeyPress: (ev:KeyboardEvent) => void,
}

function Header({ inputText, onChange, onKeyPress }: IHeaderProps) {
  return (
    <header data-testid="header">
      <img src="./images/logo.png" alt="" className="logo" />
      <input type="text" className="text-input" value={inputText} onChange={onChange} onKeyPress={onKeyPress} data-testid="q-input" />
    </header>
  )
}

export default Header
