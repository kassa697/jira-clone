interface SignInLayoutProps {
  // React.ReactNode
  children: React.ReactNode;
}

// childrenを渡すことで子要素を表示できるようにする
export default function SignInLayout({ children }: SignInLayoutProps) {
  return (
    <div className="flex flex-col">
      <nav className="bg-red-300 h-10 flex items-center">
        <p>nav bar</p>
      </nav>
      {children}
    </div>
  );
}
