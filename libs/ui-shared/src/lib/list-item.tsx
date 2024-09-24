export const ListItem: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <li className="flex gap-2 py-2 border-b border-gray-300">{children}</li>
  );
};
