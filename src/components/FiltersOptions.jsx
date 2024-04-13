import React from 'react'

export default function FiltersOptions({ marcas, categorias, setFilter }) {
    const handleSiblingClass = (e) => {
        let clase = ''
        if (e.target.parentElement.parentElement.nextElementSibling.classList.contains('hidden')) {
            clase = 'block'
            e.target.parentElement.parentElement.nextElementSibling.classList.remove('hidden')
            e.target.parentElement.parentElement.nextElementSibling.classList.add(clase)
            e.target.parentElement.previousElementSibling.classList.remove('text-white')
            e.target.parentElement.previousElementSibling.classList.add('text-orange-600')
            e.target.classList.remove('fa-plus', 'text-white')
            e.target.classList.add('fa-minus', 'text-orange-600')
        } else {
            clase = 'hidden'
            e.target.parentElement.parentElement.nextElementSibling.classList.remove('block')
            e.target.parentElement.parentElement.nextElementSibling.classList.add(clase)
            e.target.parentElement.previousElementSibling.classList.remove('text-orange-600')
            e.target.parentElement.previousElementSibling.classList.add('text-white')
            e.target.classList.remove('fa-minus', 'text-orange-600')
            e.target.classList.add('fa-plus', 'text-white')

        }
    }

  
   
    return (
        <>

            <div className='bg-slate-800 mt-[60px] lg:m-0 lg:bg-[#3e3e3e]'>
                {
                    categorias.map((categoria) => {
                        return <div key={categoria.id}>
                            <div className='flex w-full justify-between items-center px-3 py-3 lg:p-1 lg:border-b lg:border-white'>
                                <h1 className='text-white' style={{ transition: 'color .5s ease-in-out' }}>{categoria.categoria}</h1>
                                <button onClick={handleSiblingClass}>
                                    <i className="fa-solid fa-plus fa-2xs text-white p-3" id={categoria.categoria} style={{ transition: 'color .5s ease-in-out' }}></i>
                                </button>
                            </div>
                            <div className='hidden bg-slate-700 lg:bg-[#3e3e3e]' style={{ transition: 'opacity 3s ease-in-out' }}>
                                <ul style={{ listStyleType: 'none', padding: '9px 0 ' }}>
                                    <form>
                                        {
                                            marcas.map((marca) => {
                                                return  <li key={marca.id} className='flex justify-between mx-8'>
                                                        <h1 className='text-white'>{marca.marca}</h1>
                                                        <input type="radio" name='filter' value={marca.marca} onClick={()=>setFilter(categoria.categoria , marca.marca)} />
                                                    </li>
                                                
                                            })
                                        }

                                    </form>
                                </ul>
                            </div>
                        </div>
                    })
                }
            </div>
        </>
    )
}
