interface SignUpLayoutProps {
  // React.ReactNode
  children: React.ReactNode;
}

// childrenを渡すことで子要素を表示できるようにする
export default function SignUpLayout({ children }: SignUpLayoutProps) {
  return <div className="flex flex-col">{children}</div>;
}
