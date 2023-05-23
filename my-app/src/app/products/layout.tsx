export default function ProductLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
        <div>
            <nav>
                <a href=''>여성옷</a>
                <a href=''>남성옷</a>
            </nav>
            {children}
        </div>
    )
  }