import { Outlet } from "react-router-dom";
function Project() {
  return (
    <>
      <section className="py-4">
        <Outlet />
       </section>
    </>
  );
}
export default Project;
