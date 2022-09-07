interface Props {
  mainTxt: string;
  subTxt: string;
}

function Title(props: Props) {
  const { mainTxt, subTxt } = props;

  return (
    <header>
      <div className="pricing-header p-3 pb-md-4 mx-auto text-center">
        <h1 className="display-4 fw-normal">{mainTxt}</h1>
        <p className="fs-5 text-muted">{subTxt}</p>
      </div>
    </header>
  );
}

export default Title;
