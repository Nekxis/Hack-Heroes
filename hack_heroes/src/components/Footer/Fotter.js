export default function Footer () {
  return (
    <div className={'sm:hidden h-72 absolute bottom-0 right-0  w-full bg-black md:flex justify-around'}>
      <div className={'md:w-1/5 justify-center items-center h-2/3 flex'}>
        <div className='hidden bg-black w-44 h-14 rounded text-white font-bold lg:flex justify-center items-center text-2xl'>
          <img className='rounded self-center h-full' src='/logo.png' alt='' />
        </div>
      </div>
      <div className={'md:w-1/6 x-1/5 h-full flex flex-col py-14'}>
        <p className={'text-white flex self-start m-0 py-4'}>
          Features
        </p>
        <ul>
          <li className={'w-fit text-white font-medium text-sm py-0.5 hover:text-the-blue-focused cursor-pointer'}> Volunteers </li>
          <li className={'w-fit text-white font-medium text-sm py-0.5 hover:text-the-blue-focused cursor-pointer'}> Brand Links </li>
          <li className={'w-fit text-white font-medium text-sm py-0.5 hover:text-the-blue-focused cursor-pointer'}> Analytics </li>
        </ul>
      </div>
      <div className={'md:w-1/6 x-1/5 h-full flex flex-col py-14'}>
        <p className={'text-white flex self-start m-0 py-4'}>
          Resources
        </p>
        <ul>
          <li className={'w-fit text-white font-medium text-sm py-0.5 hover:text-the-blue-focused cursor-pointer'}> Blog </li>
          <li className={'w-fit text-white font-medium text-sm py-0.5 hover:text-the-blue-focused cursor-pointer'}> Developers </li>
          <li className={'w-fit text-white font-medium text-sm py-0.5 hover:text-the-blue-focused cursor-pointer'}> Support </li>
        </ul>
      </div>
      <div className={'md:w-1/6 x-1/5 h-full flex flex-col py-14'}>
        <p className={'text-white flex self-start m-0 py-4'}>
          Company
        </p>
        <ul>
          <li className={'w-fit text-white font-medium text-sm py-0.5 hover:text-the-blue-focused cursor-pointer'}> About </li>
          <li className={'w-fit text-white font-medium text-sm py-0.5 hover:text-the-blue-focused cursor-pointer'}> Our Team </li>
          <li className={'w-fit text-white font-medium text-sm py-0.5 hover:text-the-blue-focused cursor-pointer'}> Careers </li>
          <li className={'w-fit text-white font-medium text-sm py-0.5 hover:text-the-blue-focused cursor-pointer'}> Contacts </li>
        </ul>
      </div>
    </div>
  )
}
