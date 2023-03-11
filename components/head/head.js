import NextHead from 'next/head'

export default function Head({ children }) {
  return (
    <NextHead>
      <title>3D Text Shadow Generator - Justin Nicewander </title>
      <meta
        name='description'
        content='Generate styles for the text-shadow css property using a GUI.'
      />
      <link rel='icon' href='/favicon.png' />
      {children}
    </NextHead>
  )
}
