export default function Hero(){
    return(
    <section className="min-h-screen flex items-center justify-between px-24">
        {/*left section */}
        <div>
            <h1 className="text-6xl font-bold text-white">Alen Sebastian.</h1>
            <h2 className="text-[120px] font-bold text-transparent stroke">UI/UX Designer</h2>
        </div>
        {/*right section */}
        <div className="rounded-3xl overflow-hidden">
            <img src="alen.jpeg" alt="unfortunately im not here!!" className="w-127 h-160"/>
        </div>
    </section>
    )   
}