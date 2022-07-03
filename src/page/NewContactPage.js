import NewContact from "../components/NewContact";

const NewContactPage = () => {
  return (
    <section className="w-full flex items-center justify-center">
      <div className="p-4 max-w-[500px] w-full">
        <NewContact />
      </div>
    </section>
  );
}

export default NewContactPage;