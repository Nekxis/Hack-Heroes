import { useRouter } from 'next/router';

export const categories = [
    {
        name: 'Motoryzacja',
        icon: 'https://cdn.discordapp.com/attachments/969319373561012247/1030212276713693336/unknown.png'
    },
    {
        name: 'Sprzątanie',
        icon: 'https://us.123rf.com/450wm/arcady31/arcady311906/arcady31190600014/126496919-dom-sprz%C4%85tanie-wektor-ikona-na-bia%C5%82ym-tle.jpg?ver=6'
    },
    {
        name: 'Elektronika',
        icon: 'https://cdn.discordapp.com/attachments/969319373561012247/1030214090754375830/unknown.png'
    },
    {
        name: 'Wolontariat',
        icon: 'https://cdn.discordapp.com/attachments/969319373561012247/1030216024462737498/unknown.png'
    },
    {
        name: 'Zakupy',
        icon: 'https://t4.ftcdn.net/jpg/02/73/80/67/360_F_273806760_iAomZ7bkcoCNd9cF6PYkJgRFkevDXgl5.jpg'
    },
    {
        name: 'Ogrodnicze',
        icon: 'https://cdn.discordapp.com/attachments/969319373561012247/1030216192272629850/unknown.png'
    },
    {
        name: 'Opieka',
        icon: 'https://cdn-icons-png.flaticon.com/512/46/46108.png'
    },
    {
        name: 'Inne',
        icon: 'https://static.thenounproject.com/png/658625-200.png'
    }
];
export default function CategoriesBar() {



    const router = useRouter();

    const pushSearchPage = (category) => {
        router.push('/search/search_by_category/' + category)
    };

    return (
        <section className='mt-10 mb-6 rounded-3xl h-auto p-2 w-8/10 mx-auto bg-navbar-background shadow-md'>
            <div className="hidden w-full md:flex flex-wrap gap-6 justify-center items-center">
                {categories.map((category, index) => {
                    return (
                        <div onClick={() => { pushSearchPage(category.name) }} key={index} className="flex p-2 w-36 rounded justify-center items-center flex-col cursor-pointer ease-in-out duration-150 hover:bg-graphite hover:text-white">
                            <img className="p-1 bg-white" src={category.icon} style={{ width: '50px', height: '50px', borderRadius: '50%' }} />
                            <p className="mt-1 font-bold text-base ">{category.name}</p>
                        </div>
                    )
                })}
            </div>
            {/* Mobile devices */}
            <div className="grid grid-cols-3 justify-center items-center w-full md:hidden ">
                {categories.map((category, index) => {
                    return (
                        <div onClick={() => { pushSearchPage(category.name) }} key={index} className="flex p-2 w-full rounded justify-center items-center flex-col cursor-pointer ease-in-out duration-150 hover:bg-graphite hover:text-white">
                            <img className="p-1 bg-white" src={category.icon} style={{ width: '50px', height: '50px', borderRadius: '50%' }} />
                            <p className="mt-1 font-bold text-sm ">{category.name}</p>
                        </div>
                    )
                })}
            </div>
            {/* End of mobile devices */}
        </section>
    )
}
