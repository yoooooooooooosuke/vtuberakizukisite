export default async function index() {
    return(
        <main className="flex-1 min-h-40 flex-col items-center justify-between p-4 lg:p-24">
            <div className="grid grid-cols-3 row-span-4 items-start">
                <div className="col-span-3 justify-self-center p-2 lg:p-8">
                    <h2 className="text-4xl lg:text-6xl">About</h2>
                    <h3>Akizukiについて</h3>
                </div>
                <div className="p-4 justify-self-end">
                    <h2>名前</h2>
                </div>
                <div className="p-4 col-span-2">
                    <h2 className="text-xl lg:text-4xl">Akizuki</h2>
                    <h3>あきづき</h3>
                </div>
                <div className="p-4 justify-self-end">
                    <h2>誕生日</h2>
                </div>
                <div className="p-4 col-span-2">
                    <h2 className="text-xl lg:text-4xl">4/23</h2>
                </div>
                <div className="p-4 justify-self-end">
                    <h2>身長</h2>
                </div>
                <div className="p-4 col-span-2">
                    <h2 className="text-xl lg:text-4xl">148cm</h2>
                </div>
                <div className="p-4 justify-self-end">
                    <h2>体重</h2>
                </div>
                <div className="p-4 col-span-2">
                    <h2 className="text-xl lg:text-4xl">文庫本50冊</h2>
                </div>
            </div>
        </main>
    )
}
