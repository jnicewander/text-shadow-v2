import NextLink from 'next/link'

export default function Link({ children, className, to }) {
  const internal = /^\/(?!\/)/.test(to)

  if (internal) {
    return <NextLink href={to}>{children}</NextLink>
  }

  return (
    <a className={className} href={to}>
      {children}
    </a>
  )
}
