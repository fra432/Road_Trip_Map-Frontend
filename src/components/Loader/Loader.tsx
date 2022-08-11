import LoaderStyled from "./LoaderStyled";

const Loader = () => {
  return (
    <LoaderStyled>
      <div className="lds-spinner">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <span>Loading...</span>
    </LoaderStyled>
  );
};

export default Loader;
