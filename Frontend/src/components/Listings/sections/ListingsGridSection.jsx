import ListingCard from "../cards/ListingCard";

const ListingsGridSection = ({ listings }) => {
  return (
    <section className="py-8">
      <div className="max-w-[1360px] mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-6">
          {(listings ?? []).map((listing) => (
            <ListingCard key={listing._id} listing={listing} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ListingsGridSection;
