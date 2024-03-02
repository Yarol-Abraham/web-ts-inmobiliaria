'use client'

import AuthenticationAction from '../context/action/authentication/authenticationAction';

export default function ThemeProvider({
  children,
}: {
  children: React.ReactNode
}) {
  return <AuthenticationAction>{children}</AuthenticationAction>
}