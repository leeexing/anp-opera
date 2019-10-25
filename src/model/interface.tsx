import React from 'react'

export interface LayoutProps {
  children: React.ReactNode
}

export interface IDispatchAction {
  type: string,
  data: any
}

// =============
// axios
// =============

export interface MethodOptions {
  contentType?: string
}