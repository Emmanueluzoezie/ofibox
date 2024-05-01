export const currencies = [
    {
        name: "solana",
        symbol: "SOL",
        image: "/token/solana.png"
    },
    {
        name: "bonk",
        symbol: "BONK",
        image: "/token/bonk.png"
    },
    {
        name: "usdc",
        symbol: "USDC",
        image: "/token/usdc.png"
    },
    {
        name: "metaplex",
        symbol: "MPLX",
        image: "/token/metaplex.png"
    },
    {
        name: "tensor",
        symbol: "TNSR",
        image: "/token/tensor.png"
    },
]

export const template = `
<div className='w-fit border-2 bg-gray-100 shadow-2xl'>
    {currentStoreScreen !== "deck" &&
        <div className='p-2 pl-4 flex items-center justify-between'>
            <div className='p-1 bg-slate-300 rounded-full cursor-pointer'><FaPlus className='text-[14px]' onClick={handleAddToDeck} /></div>
            <h2 className='text-center text-[14px] flex-1'>Add to Deck</h2>
        </div>
    }
    <div className="h-[300px] w-[225px] bg-gray-100 content-evenly p-2" >
        <div className=" bg-white w-12/12 mx-auto">
            <div className="relative ">
                <div className=" absolute overflow-clip right-2 top-2 text-2xl font-black text-balance w-8 h-8 bg-yellow-300 rounded-full flex italic justify-center items-center">
                    {card.rank}
                </div>
                <p className="r absolute left-1 top-1 flex h-6 w-32 items-center justify-center bg-yellow-400 text-sm font-bold uppercase text-gray-800">{card.title}</p>
                <div className="absolute left-1 top-8 flex items-center bg-yellow-400 text-gray-800">
                    
                    <p className="flex h-6 w-10 justify-center font-mono text-base font-bold">{card.toll}</p>
                </div>
                <p className=" absolute bottom-16 right-0 bg-green-500 py-1 w-max px-6 text-white "><span>$</span></span>{card.amount}</p>
                <p className=" absolute bottom-0 right-0 text-xs  bg-yellow-300 p-2 h-[64px] w-full break-words">{card.rule}</p>
                {card.media && <Image src={card.media} objectFit='contain' className=" w-[215px] h-[285px]  object-cover" width={100} height={100} alt='' />}

            </div>
        </div>
    </div>
</div>
`;


export const testingImage = [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHxuPLt9Tl22nT6ftc67n56CfpEse65zuU3Q&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHxuPLt9Tl22nT6ftc67n56CfpEse65zuU3Q&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHxuPLt9Tl22nT6ftc67n56CfpEse65zuU3Q&usqp=CAU",
]
