type Props = {
  children: any | JSX.Element | JSX.Element[];
};

const PageContainer = ({ children }: Props) => <div>{children}</div>;

export default PageContainer;
