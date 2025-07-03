interface SignInLayoutProps {
  // React.ReactNode
  children: React.ReactNode;
}

// childrenを渡すことで子要素を表示できるようにする
export default function SignInLayout({ children }: SignInLayoutProps) {
  return <div className="flex flex-col">{children}</div>;
}
