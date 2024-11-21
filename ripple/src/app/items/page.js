import ItemsList from "@/components/Items/ItemsList";

export default function ItemsPage() {
  return (
    <section>
      <main className="bg-transparent font-Quicksand min-h-screen pt-8">
        <h1 className="text-3xl font-bold text-black font-Quicksand text-center mb-6">
          ITEMS FOR GIVEAWAY
        </h1>
        <div className="px-4">
          <ItemsList />
        </div>
      </main>
    </section>
  );
}
