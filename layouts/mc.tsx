import type { LayoutProps } from '../types/pageWithLayouts'

const McLayout: LayoutProps = ({ children }) => {
  return <div>
    Admin: {children}
    </div>
}

export default McLayout