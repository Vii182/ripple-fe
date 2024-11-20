import ItemsList from "../components/Items/ItemsList";
import Header from "../components/Misc/Header";

export default function ItemsPage() {
    return (
        <section>
            <main className="bg-background-dark flex min-h-screen items-center justify-center flex-1 flex-col flex-grow">
                <h1 className="text-4xl">Hello from items</h1>
                <div>
                    <ItemsList />
                </div>
            </main>
        </section>
    )
}