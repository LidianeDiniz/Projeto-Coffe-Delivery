import { ReactNode } from 'react'
import { HeaderInputFormContainer } from './styles'

interface HeaderInputFormProps {
  icon: ReactNode
  title: string
  description: string
}

export function HeaderForm({ icon, title, description }: HeaderInputFormProps) {
  return (
    <HeaderInputFormContainer>
      {icon}
      <div>
        <p>{title}</p>
        <span>{description}</span>
      </div>
    </HeaderInputFormContainer>
  )
}
