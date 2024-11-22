import React from 'react'

type SectionProps = {
  label: string
  message: string
}

const Section = ({ label, message }: SectionProps) => {
  return (
    <div >
      <h1 className="text-lg font-semibold">{label}</h1>
      <p className="text-sm font-light">{message}</p>
    </div>
  )
}

export default Section