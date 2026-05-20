// import Style from "./S"
import CardStatus from "../../ui/CardStatus/CardStatus";

function Status() {
  return (
    <section className="py-4">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-3">
            <CardStatus counter="110" title="Users" icon= <i className="fa-solid fa-building-wheat"></i>/>
          </div>

          <div className="col-12 col-md-3">
            {" "}
            <CardStatus counter="120" title="Projects" icon= <i className="fa-solid fa-building-columns"></i>/>
          </div>
          <div className="col-12 col-md-3">
            {" "}
            <CardStatus counter="130" title="Developers" icon= <i className="fa-brands fa-buffer"></i>/>
          </div>
          <div className="col-12 col-md-3">
            {" "}
            <CardStatus counter="140" title="Blogs" icon= <i className="fa-brands fa-buysellads"></i>/>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Status;
