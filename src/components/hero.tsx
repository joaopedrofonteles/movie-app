export const Hero = () => {
    return ( 
    <div className="h-[600px] w-full bg-[url('/bg.png')] bg-no-repeat bg-center bg-[#0A0C0D] relative">

{/*Fundo Gradiente*/}

<div className="bg-gradient-to-r from-[#0A0C0D] h-full absolute inset-0 z-0" />

{/* content */}

    <div className="container mx-auto px-4 md:px-10 relative flex flex-col gap-4 justify-end h-full pb-10">

        {/* Badge */}

        <div className="bg-[#393A3B] font-bold text-white w-max px-3 py-1 rounded-xl">ADVENTURE</div>

        {/* titulo */}
        <h1 className="text-4xl font-bold text-white max-w-lg">lorem impsum lorem ipsum lorem ipsum</h1>
    
    {/* infos */}
    <div className="">
        <p className="text-white font-semibold">08.08.2021</p>
        <p className="text-[#FF8221] max-w-md">Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae earum iusto saepe nesciunt, tempora voluptatum fuga soluta esse asperiores. Id.</p>
    </div>
    </div>
    </div>
    )
}