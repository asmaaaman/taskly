type Props = {
  heading: string;
  currentPage: string;
};

const BreadCrumb = ({ heading, currentPage }: Props) => {
  return (
    <div>
      <ul>
        <li>kjjj{heading}</li>
        <li>kkkk{currentPage}</li>
      </ul>
    </div>
  );
};

export default BreadCrumb;
